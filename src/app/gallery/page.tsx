import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Gallery</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A curated collection of visual stories.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {PlaceHolderImages.map((image) => (
              <div key={image.id} className="break-inside-avoid group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover shadow-lg hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105 shadow-primary/20"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
