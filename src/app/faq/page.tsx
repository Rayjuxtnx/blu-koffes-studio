import { Header } from '@/components/header';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';

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
