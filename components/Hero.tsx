import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface HeroProps {
  title: string
  subtitle?: string
  bgImage: string
  cta1?: { label: string; href: string }
  cta2?: { label: string; href: string }
  fullHeight?: boolean
  breadcrumb?: string
  overlayOpacity?: string
}

export default function Hero({
  title,
  subtitle,
  bgImage,
  cta1,
  cta2,
  fullHeight = false,
  breadcrumb,
  overlayOpacity = 'bg-blue-deep/70',
}: HeroProps) {
  return (
    <section
      className={clsx(
        'relative flex items-center justify-center overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[50vh] md:min-h-[55vh]'
      )}
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className={clsx('absolute inset-0', overlayOpacity)} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-20 md:py-28">
        {breadcrumb && (
          <p className="text-amber-warm text-sm font-semibold uppercase tracking-widest mb-4">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        {(cta1 || cta2) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {cta1 && (
              <Link
                href={cta1.href}
                className="bg-green-earth text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-green-mid transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group min-w-[160px] justify-center"
              >
                {cta1.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {cta2 && (
              <Link
                href={cta2.href}
                className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-blue-deep transition-all duration-300 min-w-[160px] justify-center flex items-center gap-2"
              >
                {cta2.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Bottom wave for full-height hero */}
      {fullHeight && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="fill-white w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
          </svg>
        </div>
      )}
    </section>
  )
}
