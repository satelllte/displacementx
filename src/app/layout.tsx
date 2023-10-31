import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import './style.css'

export const metadata: Metadata = {
  title: 'Displacement X',
  description: 'Procedural displacement sci-fi maps generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-black text-white selection:bg-sky-800">{children}</body>
    </html>
  )
}
