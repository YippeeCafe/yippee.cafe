import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yippee.cafe'),
  title: {
    default: 'Yippee Cafe | Playful apps, games, and tiny internet experiments',
    template: '%s | Yippee Cafe',
  },
  description:
    'A tiny internet workshop for playful apps, games, music tools, and whatever else sounds fun.',
  openGraph: {
    title: 'Yippee Cafe',
    description:
      'Playful apps, games, music tools, and tiny internet experiments cooked fresh.',
    url: 'https://yippee.cafe/',
    siteName: 'Yippee Cafe',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#ffb703',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
