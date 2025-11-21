'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronDown } from 'lucide-react';

export function AiLensPortal() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current && containerRef.current) {
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = containerRef.current;

        const xPos = (clientX / offsetWidth - 0.5) * 40; // Movement range
        const yPos = (clientY / offsetHeight - 0.5) * 40;

        imageRef.current.style.transform = `scale(1.1) translate(${xPos}px, ${yPos}px)`;
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <div ref={imageRef} className="absolute inset-[-2.5%] transition-transform duration-300 ease-out">
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
            />
        </div>
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center p-4 animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight leading-tight mb-4">
          The AI Lens Portal
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-stone-200">
          Move your cursor to look through the lens. See the world as I do.
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
