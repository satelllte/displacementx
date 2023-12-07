import type {Metadata} from 'next';
import {GeistSans} from 'geist/font';
import './style.css';

const title = 'Displacement X';
const description = 'Procedural displacement sci-fi maps generator';
const images = [
  {
    url: 'https://placehold.co/1200x630.png',
    alt: description,
    width: 1200,
    height: 630,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://displacementx.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
    images,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images,
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en' className={GeistSans.variable}>
      <body className='bg-black text-white selection:bg-sky'>{children}</body>
    </html>
  );
}
