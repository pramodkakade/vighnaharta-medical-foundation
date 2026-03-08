import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vighnaharta Medical Foundation | Compassion and Healing',
  description:
    'A 15-year-old registered charitable medical foundation dedicated to improving healthcare access for rural and micro-interior communities in Pune district, Maharashtra.',
  keywords:
    'rural healthcare, medical foundation, Pune, Shirur, charitable, community health, Maharashtra, health camps, free medical',
  openGraph: {
    title: 'Vighnaharta Medical Foundation | Compassion and Healing',
    description:
      'Serving rural communities with accessible and compassionate healthcare for 15+ years.',
    url: 'https://www.vighnahartamedicalfoundation.com',
    siteName: 'Vighnaharta Medical Foundation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-white text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
