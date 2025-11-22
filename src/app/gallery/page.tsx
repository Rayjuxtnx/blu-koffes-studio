import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Gallery from '@/components/gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the portfolio of Blu Koffee Studio Consultancy, featuring a collection of portrait, wedding, brand, and event photography from Nairobi, Kenya.',
  keywords: ['Photography Gallery', 'Kenya Photography Portfolio', 'Nairobi Wedding Photos', 'Portrait Photography', 'Brand Imagery'],
    openGraph: {
        title: 'Gallery | Blu Koffee Studio Consultancy',
        description: 'A curated collection of visual stories captured by Blu Koffee Studio.',
        url: 'https://blukoffeestudio.com/gallery',
    }
};

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
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
