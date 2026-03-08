interface TeamCardProps {
  name: string
  designation: string
  bio?: string
  initials: string
  bgColor?: string
}

export default function TeamCard({
  name,
  designation,
  bio,
  initials,
  bgColor = 'bg-blue-deep',
}: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center flex flex-col items-center">
      {/* Avatar */}
      <div className={`w-24 h-24 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-2xl font-serif mb-5 shadow-lg`}>
        {initials}
      </div>
      <h3 className="font-serif font-bold text-blue-deep text-xl mb-1">{name}</h3>
      <p className="text-green-earth font-semibold text-sm mb-4 uppercase tracking-wide">{designation}</p>
      {bio && (
        <p className="text-gray-600 text-sm leading-relaxed text-center">{bio}</p>
      )}
    </div>
  )
}
