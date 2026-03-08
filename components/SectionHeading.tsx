import clsx from 'clsx'

interface SectionHeadingProps {
  tagline?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx('mb-12 md:mb-16', centered && 'text-center')}>
      {tagline && (
        <p className={clsx(
          'text-xs font-bold uppercase tracking-widest mb-3',
          light ? 'text-green-light' : 'text-green-earth'
        )}>
          {tagline}
        </p>
      )}
      <h2 className={clsx(
        'font-serif font-bold text-3xl md:text-4xl leading-tight mb-4',
        light ? 'text-white' : 'text-blue-deep'
      )}>
        {title}
      </h2>
      {/* Decorative accent */}
      <div className={clsx('flex gap-1 mb-5', centered ? 'justify-center' : 'justify-start')}>
        <span className="w-8 h-1 rounded-full bg-green-earth" />
        <span className="w-3 h-1 rounded-full bg-amber-warm" />
        <span className="w-1.5 h-1 rounded-full bg-green-earth/40" />
      </div>
      {subtitle && (
        <p className={clsx(
          'text-lg leading-relaxed max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-white/80' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
