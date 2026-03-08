import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Heart, Users, MapPin, Star } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ImpactStat from '@/components/ImpactStat'

export const metadata: Metadata = {
  title: 'Our Impact | Vighnaharta Medical Foundation',
  description:
    'Explore the real-world health impact of Vighnaharta Medical Foundation across rural communities in Pune district over 15+ years of service.',
}

const impactStories = [
  {
    icon: Heart,
    title: 'Essential Medical Care for Rural Families',
    description:
      'Supported rural families across Shirur taluka and neighboring areas with basic medical consultations, medicines, and referrals — ensuring no family goes without care due to distance or cost.',
  },
  {
    icon: Users,
    title: 'Health Awareness Through Camps & Outreach',
    description:
      'Increased health literacy and awareness through consistent camps covering topics like maternal health, hygiene, nutrition, and disease prevention — creating healthier, more informed communities.',
  },
  {
    icon: Star,
    title: 'Trust Built Through Consistent Service',
    description:
      'By returning to the same communities year after year, the foundation has built deep trust. Village leaders and sarpanches actively invite and support our programs because they know we deliver.',
  },
  {
    icon: MapPin,
    title: 'Health Impact Beyond Hospital Walls',
    description:
      'Our impact isn\'t measured only in medical records. Communities now understand preventive care, families seek timely treatment, and awareness has replaced ignorance and stigma around common illnesses.',
  },
]

const milestones = [
  { year: '2009', event: 'Foundation established in Jambut, Shirur, Pune' },
  { year: '2011', event: 'First community health camp held in Shirur taluka' },
  { year: '2014', event: 'Expanded outreach to 10+ villages across the district' },
  { year: '2017', event: 'Launched regular preventive care awareness programs' },
  { year: '2020', event: 'Continued service during COVID-19, providing essential support' },
  { year: '2024', event: '15+ years of continuous service — still growing, still serving' },
]

export default function ImpactPage() {
  return (
    <>
      <Hero
        title="Our Impact"
        subtitle="15+ years of compassionate service. Thousands of lives touched. Communities strengthened."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
        breadcrumb="Our Impact"
      />

      {/* Stats */}
      <section className="py-16 md:py-20 bg-blue-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          <SectionHeading
            tagline="Impact at a Glance"
            title="Numbers That Reflect Real Lives"
            subtitle="Every number is a person, a family, a community changed."
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <ImpactStat value="15+" label="Years of Service" />
            <ImpactStat value="1000s" label="Individuals Helped" />
            <ImpactStat value="50+" label="Villages Reached" />
            <ImpactStat value="100+" label="Health Camps Held" />
          </div>
        </div>
      </section>

      {/* Qualitative Impact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Impact Stories"
            title="What Our Work Has Achieved"
            subtitle="Over the years, Vighnaharta Medical Foundation has created measurable, meaningful change in rural communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactStories.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-cream rounded-2xl p-7 md:p-8 border border-gray-100 hover:border-green-earth transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-5 group-hover:bg-green-earth transition-colors">
                  <Icon className="w-6 h-6 text-green-earth group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-blue-deep text-xl mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading tagline="15 Years" title="Our Journey" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-light hidden md:block" />
            <div className="space-y-6">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-deep flex items-center justify-center text-white text-sm font-bold font-serif shadow-md relative z-10">
                    {year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all mt-2">
                    <p className="text-gray-700 leading-relaxed font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-green-earth text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Be Part of Our Story</h2>
          <p className="text-white/80 text-lg mb-8">
            Help us extend our reach and deepen our impact in rural Maharashtra.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-white text-green-earth px-8 py-4 rounded-xl font-bold hover:bg-amber-warm hover:text-white transition-all shadow-lg group"
          >
            Get Involved <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
