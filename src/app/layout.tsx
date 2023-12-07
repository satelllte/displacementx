import type {Metadata} from 'next';
import './style.css';

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
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://rsms.me/' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </head>
      <body className='bg-black text-white selection:bg-sky'>{children}</body>
    </html>
  );
}
