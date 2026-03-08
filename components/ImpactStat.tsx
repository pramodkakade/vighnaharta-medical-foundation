'use client'

import { useEffect, useRef, useState } from 'react'

interface ImpactStatProps {
  value: string
  label: string
  suffix?: string
  light?: boolean
}

export default function ImpactStat({ value, label, light = true }: ImpactStatProps) {
  return (
    <div className="text-center px-4 py-6">
      <div className={`font-serif font-black text-4xl md:text-5xl lg:text-6xl mb-2 ${light ? 'text-amber-warm' : 'text-blue-deep'}`}>
        {value}
      </div>
      <div className={`text-sm md:text-base font-medium uppercase tracking-wider ${light ? 'text-white/80' : 'text-gray-600'}`}>
        {label}
      </div>
    </div>
  )
}
