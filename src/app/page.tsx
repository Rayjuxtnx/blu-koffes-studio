import { Header } from '@/components/header';
import { Hero } from '@/components/landing/hero';
import { Showcase } from '@/components/landing/showcase';
import { Services } from '@/components/landing/services';
import { About } from '@/components/landing/about';
import { SocialFeed } from '@/components/landing/social-feed';
import { Footer } from '@/components/footer';
import { AutoScrollGallery } from '@/components/landing/auto-scroll-gallery';
import { LensSimulation } from '@/components/landing/lens-simulation';
import { SceneAnalyzer } from '@/components/landing/scene-analyzer';
import { AiLensPortal } from '@/components/landing/ai-lens-portal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AiLensPortal />
        <Services />
        <AutoScrollGallery />
        <Showcase />
        <LensSimulation />
        <SceneAnalyzer />
        <About />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
