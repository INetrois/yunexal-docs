import './global.css';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AppProviders from '@/components/app/AppProviders';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${ibmPlexMono.variable} ${inter.variable} ${ibmPlexMono.className}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-[#0b0b12] text-[#e0e0f0]">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
