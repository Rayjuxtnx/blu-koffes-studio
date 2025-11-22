import { Header } from '@/components/header';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Inquiries',
  description: 'Reach out to Blu Koffee Studio Consultancy in Nairobi for custom project inquiries, bookings, and collaborations. Use our AI assistant or contact us directly.',
  keywords: ['Contact Blu Koffee Studio', 'Photography Inquiry', 'Book Photographer Nairobi', 'Nairobi Photography Studio', 'Custom Photo Project'],
  openGraph: {
    title: 'Contact & Inquiries | Blu Koffee Studio Consultancy',
    description: 'Have a project in mind? Get a preliminary AI-generated project plan or contact us directly for your photography needs in Nairobi.',
    url: 'https://blukoffeestudio.com/contact',
  }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
