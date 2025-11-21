import { Header } from '@/components/header';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

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
