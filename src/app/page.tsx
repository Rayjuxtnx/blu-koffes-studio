import { Header } from '@/components/header';
import { Hero } from '@/components/landing/hero';
import { Showcase } from '@/components/landing/showcase';
import { Services } from '@/components/landing/services';
import { Booking } from '@/components/landing/booking';
import { About } from '@/components/landing/about';
import { SocialFeed } from '@/components/landing/social-feed';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Showcase />
        <Services />
        <Booking />
        <About />
        <SocialFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
