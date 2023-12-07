import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './style.css';

const font = Inter({subsets: ['latin']}); // eslint-disable-line new-cap

const title = 'Displacement X';
const description = 'Procedural displacement sci-fi maps generator';
const images = [
  {
    url: '/og.png',
    alt: description,
    width: 1280,
    height: 640,
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
    <html lang='en' className={font.className}>
      <body className='bg-black text-white selection:bg-sky'>{children}</body>
    </html>
  );
}
