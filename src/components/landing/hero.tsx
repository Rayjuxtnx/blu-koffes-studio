import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight leading-tight mb-4">
          Visual stories crafted with precision.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-stone-200">
          Capturing the moments that matter, with an artist's eye and a storyteller's heart.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#showcase" aria-label="Scroll down">
          <ChevronDown className="h-10 w-10 animate-bounce text-white/70 hover:text-white" />
        </a>
      </div>
    </section>
  );
}
