import type {Metadata} from 'next';

const title = 'OG Title';
const description = 'OG Description';
const images = [
  {
    url: 'https://res.cloudinary.com/drudlafqg/image/upload/c_crop,h_630,w_1200/co_rgb:000000,l_text:open%20sans_100_normal_left:Open%20Graph%20HELLO/fl_layer_apply/FFCDD8_1024x_w5cfox.jpg',
    alt: description,
    width: 1200,
    height: 630,
  },
];

export const metadata: Metadata = {
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
  return children;
}
