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
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
