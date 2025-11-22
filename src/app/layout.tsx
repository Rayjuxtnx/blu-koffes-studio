import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL('https://blukoffeestudio.com'),
  title: {
    default: 'Blu Koffee Studio Consultancy - Premier Photography & Visual Storytelling',
    template: '%s | Blu Koffee Studio Consultancy',
  },
  description: 'Blu Koffee Studio Consultancy, based in Nairobi, offers professional photography experiences, from studio portraits and weddings to brand visuals. We craft visual stories with precision and artistry.',
  keywords: [
    'Photography Nairobi', 
    'Kenya Photographer', 
    'Wedding Photography Kenya', 
    'Portrait Studio Nairobi', 
    'Brand Photography', 
    'Event Photographer Nairobi',
    'Blu Koffee Studio',
    'Cinematic Photography',
    'Visual Storytelling'
  ],
  authors: [{ name: 'Blu Koffee Studio Consultancy', url: 'https://blukoffeestudio.com' }],
  creator: 'Blu Koffee Studio Consultancy',
  openGraph: {
    title: 'Blu Koffee Studio Consultancy - Premier Photography & Visual Storytelling',
    description: 'Nairobi-based professional photography for portraits, weddings, events, and brands. Visual stories crafted with precision.',
    url: 'https://blukoffeestudio.com',
    siteName: 'Blu Koffee Studio Consultancy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', // A generic, appealing photo from the site
        width: 1200,
        height: 630,
        alt: 'A vintage camera, representing the art of photography.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Koffee Studio Consultancy | Nairobi Photographer',
    description: 'Expert photography for portraits, weddings, and brands in Nairobi. Capturing moments with an artistic eye.',
    creator: '@blukoffeestudio',
    images: ['https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: siteConfig.faviconUrl || '/favicon.ico',
    shortcut: siteConfig.faviconUrl || '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
