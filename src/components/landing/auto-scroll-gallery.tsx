'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function AutoScrollGallery() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('showcase') || p.id.startsWith('social'));

  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Visual Journal</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A continuous stream of moments, captured and curated.
        </p>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0 pl-4">
                <div className="relative aspect-square">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 25vw"
                    />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
