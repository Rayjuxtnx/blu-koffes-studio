'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

export function AutoScrollGallery() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('showcase') || p.id.startsWith('social'));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false }),
  ]);

  const [scale, setScale] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();

      const newScale = emblaApi.scrollSnapList().map((snap, index) => {
          if (!emblaApi.slidesInView().includes(index)) return 0.9;
          let diffToTarget = snap - scrollProgress;
          
          const slidesInView = emblaApi.slidesInView();
          if(slidesInView.length > 0 && slidesInView[0] === index) {
            return 1 + (0.1 * Math.abs(diffToTarget));
          }
          return 1 - (0.1 * Math.abs(diffToTarget));
      });
      setScale(newScale);
    };

    emblaApi.on('scroll', onScroll);
    onScroll(); // Set initial scale
    return () => {
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi]);


  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Through The Zoom Lens</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A dynamic perspective, zooming through curated moments.
        </p>
      </div>
      <div 
        className="embla_viewport" 
        style={{
            maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
        }}
      >
        <div className="embla" ref={emblaRef}>
            <div className="embla__container flex items-center h-[450px]">
            {[...galleryImages, ...galleryImages].map((image, index) => (
                <div key={`${image.id}-${index}`} className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0 pl-4">
                    <div className="relative aspect-square transition-transform duration-300 ease-out" style={{ transform: `scale(${scale[index] || 0.9})` }}>
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
      </div>
    </section>
  );
}
