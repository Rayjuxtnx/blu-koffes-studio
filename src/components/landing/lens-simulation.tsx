'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Aperture } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function LensSimulation() {
  const [aperture, setAperture] = useState(8);
  const imageToBlur = PlaceHolderImages.find(p => p.id === 'showcase1');

  // Map aperture f-stop to blur amount. Lower f-stop (wider aperture) = more blur.
  const blurValue = (22 - aperture) / 5;

  return (
    <section id="lens-simulation" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">View Through The Lens</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Adjust the aperture to see how depth of field transforms a photo. A lower f-stop creates a shallower focus.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full max-w-3xl">
                <Card className="p-2 md:p-4 overflow-hidden bg-card border-secondary/20">
                     <div className="relative aspect-[4/3] w-full">
                        {imageToBlur && (
                            <Image
                                src={imageToBlur.imageUrl}
                                alt="Subject for depth of field simulation"
                                fill
                                className="object-cover rounded-md transition-all duration-300"
                                style={{ filter: `blur(${blurValue}px)` }}
                                data-ai-hint={imageToBlur.imageHint}
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        )}
                        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            <span className="font-code">f/{aperture.toFixed(1)}</span>
                        </div>
                     </div>
                </Card>
            </div>
            <div className="w-full md:w-auto md:max-w-xs flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Aperture className="h-5 w-5" />
                    <span className="font-semibold font-headline">Aperture Control</span>
                </div>
                 <div className="flex items-center gap-4 w-full max-w-[300px] md:w-auto md:flex-col md:h-[300px] md:py-4">
                    <span className="text-xs font-code text-muted-foreground">f/22</span>
                    <Slider
                        defaultValue={[aperture]}
                        min={1.4}
                        max={22}
                        step={0.1}
                        onValueChange={(value) => setAperture(value[0])}
                        orientation="horizontal"
                        className="md:hidden"
                    />
                     <Slider
                        defaultValue={[aperture]}
                        min={1.4}
                        max={22}
                        step={0.1}
                        onValueChange={(value) => setAperture(value[0])}
                        orientation="vertical"
                        className="hidden md:block"
                    />
                    <span className="text-xs font-code text-muted-foreground">f/1.4</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
