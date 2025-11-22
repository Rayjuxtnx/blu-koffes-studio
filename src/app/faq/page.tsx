import { Header } from '@/components/header';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about Blu Koffee Studio Consultancy\'s photography services, including style, booking, turnaround times, and travel.',
  keywords: ['Photography FAQ', 'Kenya photographer questions', 'booking process', 'photography style', 'photo delivery time'],
  openGraph: {
    title: 'FAQ | Blu Koffee Studio Consultancy',
    description: 'Got questions about our photography services? Find your answers here.',
    url: 'https://blukoffeestudio.com/faq',
  }
};


export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
