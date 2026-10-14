import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans', display: 'swap' });

const title = 'Avenoré Digital Studio | Website Design & Development';
const description = 'Avenoré Digital Studio designs and develops modern websites, web applications, and digital solutions for businesses.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | Avenoré Digital Studio' },
  description,
  applicationName: site.name,
  authors: [{ name: 'Arman Singh' }],
  creator: 'Arman Singh',
  keywords: ['web design', 'website development', 'web applications', 'cloud deployment', 'digital studio'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', siteName: site.name, title, description, locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#0E0E0E', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <a className="skip" href="#main">Skip to content</a>{children}
      </body>
    </html>
  );
}
