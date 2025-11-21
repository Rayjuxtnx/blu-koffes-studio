import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const artistImage = PlaceHolderImages.find((img) => img.id === 'artist_portrait');

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/3 w-full flex justify-center">
            {artistImage && (
              <Image
                src={artistImage.imageUrl}
                alt={artistImage.description}
                width={400}
                height={500}
                className="rounded-lg object-cover shadow-2xl shadow-primary/10 rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
                data-ai-hint={artistImage.imageHint}
              />
            )}
          </div>
          <div className="md:w-2/3 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">The Artist Behind the Lens</h2>
            
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg md:text-xl text-foreground mb-6">
              "I don't just take photos; I chase light, emotion, and the stories that hide in plain sight."
            </blockquote>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              My creative philosophy is simple: authenticity over everything. I believe the most powerful images are born from genuine moments and real connections. My work is a constant exploration of this truth, whether I'm in a bustling city or a quiet studio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For me, photography is more than a profession—it's a way of seeing the world. It drives me to look closer, feel deeper, and translate those perceptions into visual art that resonates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
