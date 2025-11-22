'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {PlaceHolderImages.map((image) => (
        <div key={image.id} className="break-inside-avoid group relative overflow-hidden rounded-lg">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={500}
            height={500}
            className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
