'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Upload, Wand2, Lightbulb, Camera, BarChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const analysisMessages = {
  scene1: {
    lighting: "The soft, diffused backlighting creates a beautiful halo effect. I'd enhance the warm tones slightly to emphasize the golden hour feel.",
    style: "This lends itself to a dreamy, ethereal portrait style. A shallow depth of field would further isolate the subject.",
    improvement: "A reflector could be used to bounce some light back onto the subject's face, reducing shadows and adding a catchlight to the eyes."
  },
  scene2: {
    lighting: "Strong directional side-lighting creates dramatic shadows, perfect for a high-contrast black and white conversion.",
    style: "This is ideal for a moody, film noir aesthetic. Emphasizing the textures in post-production would add to the grittiness.",
    improvement: "I might look for a composition that uses the long shadows as leading lines to guide the viewer's eye through the frame."
  },
  scene3: {
    lighting: "The overcast sky provides a massive softbox, resulting in even, flattering light with minimal harsh shadows.",
    style: "Perfect for clean, modern product or architectural shots. The colors will be true-to-life and details will be sharp.",
    improvement: "To add a bit of 'pop', a circular polarizer could be used to reduce glare on reflective surfaces and deepen the sky's color."
  },
};

type AnalysisKey = keyof typeof analysisMessages;

export function SceneAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [analysis, setAnalysis] = useState<(typeof analysisMessages)[AnalysisKey] | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleImages = PlaceHolderImages.filter(p => p.id.startsWith('scene'));

  useEffect(() => {
    if (isAnalyzing) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            // Pick a random analysis when upload is used
            const keys = Object.keys(analysisMessages) as AnalysisKey[];
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            setAnalysis(analysisMessages[randomKey]);
            setIsAnalyzing(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [isAnalyzing]);


  const handleImageSelect = (imageUrl: string, analysisKey: AnalysisKey) => {
    setSelectedImage(imageUrl);
    setImageName('Sample Scene');
    setAnalysis(null);
    setIsAnalyzing(true);
     // Directly set analysis for samples
     const timer = setTimeout(() => {
        setAnalysis(analysisMessages[analysisKey]);
        setIsAnalyzing(false);
        setProgress(100);
    }, 2000);
     setProgress(0);
     const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

    return () => {
        clearTimeout(timer);
        clearInterval(progressTimer);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setImageName(file.name);
        setAnalysis(null);
        setIsAnalyzing(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="scene-analyzer" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Smart Scene Analyzer</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Get a glimpse of my creative process. Upload a photo or choose a sample to see how I'd approach the shot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6">
             <Card className="p-4 bg-background">
                <div className="relative aspect-video w-full bg-muted rounded-md flex items-center justify-center overflow-hidden">
                {selectedImage ? (
                    <Image src={selectedImage} alt="Selected scene" fill className="object-contain" />
                ) : (
                    <div className="text-center text-muted-foreground p-4">
                        <Camera className="mx-auto h-12 w-12 mb-4"/>
                        <p>Your image will appear here</p>
                    </div>
                )}
                </div>
            </Card>
            <div>
                <h3 className="text-lg font-semibold mb-3">Choose a Sample Scene</h3>
                <div className="grid grid-cols-3 gap-4">
                    {sampleImages.map((image, index) => (
                        <button key={image.id} onClick={() => handleImageSelect(image.imageUrl, `scene${index+1}` as AnalysisKey)} className="relative aspect-video rounded-md overflow-hidden group">
                             <Image src={image.imageUrl} alt={image.description} fill className="object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={image.imageHint} />
                             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        </button>
                    ))}
                </div>
                 <Button onClick={handleUploadClick} className="w-full mt-4">
                    <Upload className="mr-2"/>
                    Upload Your Own Image
                </Button>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
          </div>

          <div>
             <h3 className="text-xl font-semibold font-headline mb-4">Pro Analysis</h3>
            {isAnalyzing && (
                 <div className="space-y-4 animate-in fade-in-50">
                    <p className="text-muted-foreground flex items-center"><Wand2 className="mr-2 animate-spin"/>Analyzing "{imageName}"...</p>
                    <Progress value={progress} className="w-full" />
                    <div className="space-y-4 pt-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 animate-pulse h-16"></div>
                         <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 animate-pulse h-16"></div>
                         <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 animate-pulse h-16"></div>
                    </div>
                 </div>
            )}
            {analysis && !isAnalyzing && (
                <div className="space-y-4 animate-in fade-in-50 duration-500">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                        <div className="p-2 bg-primary/10 rounded-full"><Lightbulb className="h-6 w-6 text-primary"/></div>
                        <div>
                            <h4 className="font-semibold">Suggested Lighting</h4>
                            <p className="text-sm text-muted-foreground">{analysis.lighting}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                        <div className="p-2 bg-primary/10 rounded-full"><BarChart className="h-6 w-6 text-primary"/></div>
                        <div>
                            <h4 className="font-semibold">Recommended Style</h4>
                            <p className="text-sm text-muted-foreground">{analysis.style}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                        <div className="p-2 bg-primary/10 rounded-full"><Wand2 className="h-6 w-6 text-primary"/></div>
                        <div>
                            <h4 className="font-semibold">Pro Improvement</h4>
                            <p className="text-sm text-muted-foreground">{analysis.improvement}</p>
                        </div>
                    </div>
                </div>
            )}
            {!selectedImage && !isAnalyzing && (
                <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg flex flex-col justify-center items-center bg-background/30">
                    <p>Analysis will appear here once an image is selected.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
