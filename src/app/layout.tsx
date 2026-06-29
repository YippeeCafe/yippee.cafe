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
    images: [
      {
        url: '/images/yippee-cafe-square-logo.png',
        width: 600,
        height: 600,
        alt: 'Yippee Cafe square logo',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/yippee-cafe-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/yippee-cafe-favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
