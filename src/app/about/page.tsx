import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Artist',
  description: 'Learn about the creative philosophy and passion behind Blu Koffee Studio Consultancy. Discover the artist who chases light, emotion, and stories.',
  keywords: ['About Blu Koffee Studio', 'Nairobi Photographer', 'Creative Philosophy', 'Artist Behind the Lens', 'Storytelling Photography'],
  openGraph: {
    title: 'About The Artist | Blu Koffee Studio Consultancy',
    description: 'Discover the passion, philosophy, and creative drive of the artist behind Blu Koffee Studio Consultancy.',
    url: 'https://blukoffeestudio.com/about',
  }
};

export default function AboutPage() {
    const artistImage = PlaceHolderImages.find((img) => img.id === 'artist_portrait');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-card">
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
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">The Artist Behind the Lens</h1>
                    
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
      </main>
      <Footer />
    </div>
  );
}
