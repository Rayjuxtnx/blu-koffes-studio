import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SocialFeed() {
  const socialImages = PlaceHolderImages.filter(p => p.id.startsWith('social'));

  return (
    <section id="social" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">From the Feed</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into recent work, travels, and behind-the-scenes moments.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {socialImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-secondary/20 bg-card">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
