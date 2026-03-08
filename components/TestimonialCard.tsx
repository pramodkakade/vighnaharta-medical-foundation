import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  location?: string
  initials: string
  bgColor?: string
}

export default function TestimonialCard({
  quote,
  name,
  location,
  initials,
  bgColor = 'bg-blue-deep',
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
      <Quote className="w-8 h-8 text-amber-warm mb-4 flex-shrink-0" />
      <p className="text-gray-700 leading-relaxed italic flex-1 mb-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className={`w-11 h-11 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {initials}
        </div>
        <div>
          <p className="font-semibold text-blue-deep text-sm">{name}</p>
          {location && <p className="text-gray-500 text-xs">{location}</p>}
        </div>
      </div>
    </div>
  )
}
