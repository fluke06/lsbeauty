import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LS Beauty | Guiding You to Expert Beauty Care',
  description:
    'LS Beauty connects you with trusted, expert clinics and guides every step toward your most radiant, confident self. Book a free consultation today.',
  openGraph: {
    title: 'LS Beauty | Guiding You to Expert Beauty Care',
    description: 'Personalized beauty guidance. Expert clinic matching. Your first consultation is free.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
