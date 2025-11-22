'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Gallery</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A curated collection of visual stories, seen through the lens.
            </p>
          </div>
          <div
            className="relative"
            style={{
              maskImage: 'radial-gradient(circle at center, black 60%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 90%)',
            }}
          >
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {PlaceHolderImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="relative aspect-video">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-contain rounded-lg"
                          data-ai-hint={image.imageHint}
                          sizes="(max-width: 768px) 100vw, 1024px"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
