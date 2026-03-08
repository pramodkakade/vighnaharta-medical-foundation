import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface InfoCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'filled' | 'bordered'
  iconColor?: string
}

export default function InfoCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
  iconColor = 'text-green-earth',
}: InfoCardProps) {
  return (
    <div
      className={clsx(
        'p-6 md:p-8 rounded-2xl transition-all duration-300 group cursor-default',
        variant === 'default' && 'bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1',
        variant === 'filled' && 'bg-blue-light hover:bg-white hover:shadow-card-hover hover:-translate-y-1',
        variant === 'bordered' && 'border-2 border-green-light hover:border-green-earth bg-white hover:shadow-card hover:-translate-y-1'
      )}
    >
      <div className={clsx(
        'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300',
        variant === 'filled' ? 'bg-white group-hover:bg-green-light' : 'bg-green-light group-hover:bg-green-earth/20'
      )}>
        <Icon className={clsx('w-7 h-7', iconColor)} />
      </div>
      <h3 className="font-serif font-bold text-blue-deep text-xl mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  )
}
