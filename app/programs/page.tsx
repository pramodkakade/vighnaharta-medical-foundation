import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Stethoscope, ShieldCheck, Users, HandHeart, Activity,
  BookOpen, ArrowRight, Heart, MapPin, Clock, UserCheck
} from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import InfoCard from '@/components/InfoCard'

export const metadata: Metadata = {
  title: 'Programs & Services | Vighnaharta Medical Foundation',
  description:
    'Explore the healthcare programs and services offered by Vighnaharta Medical Foundation — from free health camps to community outreach in rural Pune.',
}

const services = [
  {
    icon: Stethoscope,
    title: 'Basic Medical Facilities for Rural Areas',
    description:
      'Providing essential diagnostic, consultation, and basic treatment services to villages and interior communities that have no access to clinics or hospitals.',
  },
  {
    icon: ShieldCheck,
    title: 'Free & Subsidized Health Check-up Camps',
    description:
      'Organizing regular health check-up camps where community members receive screening, consultations, and medicines free of cost or at highly subsidized rates.',
  },
  {
    icon: BookOpen,
    title: 'Preventive Healthcare Awareness Programs',
    description:
      'Conducting sessions on hygiene, nutrition, maternal health, disease prevention, and healthy lifestyle practices tailored to the rural context.',
  },
  {
    icon: HandHeart,
    title: 'Support for Economically Weaker Sections',
    description:
      'Identifying and supporting individuals and families from economically disadvantaged backgrounds with medical assistance, medicines, and referrals.',
  },
  {
    icon: Users,
    title: 'Community-Based Medical Outreach',
    description:
      'Reaching out to communities at their doorstep through mobile health initiatives and partnerships with local leaders, schools, and self-help groups.',
  },
  {
    icon: Activity,
    title: 'Health Education & Awareness Drives',
    description:
      'Running campaigns on critical health topics such as TB, malaria, maternal nutrition, child health, and water sanitation across Shirur taluka.',
  },
]

const whyUs = [
  {
    icon: Heart,
    title: 'People-Centric Healthcare',
    desc: 'Every program places the patient's dignity and wellbeing at the centre. Compassion is our operating principle.',
  },
  {
    icon: MapPin,
    title: 'Deep Rural Reach',
    desc: 'We operate in villages and interior pockets that mainstream healthcare rarely reaches — from Jambut to surrounding areas of Pune district.',
  },
  {
    icon: Clock,
    title: 'Consistent for 15+ Years',
    desc: 'Our programs are not one-off events. We maintain long-term relationships with communities, returning season after season.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Practices',
    desc: 'We maintain full transparency in our operations. Every beneficiary is served with dignity and without discrimination.',
  },
  {
    icon: UserCheck,
    title: 'Community-Driven Solutions',
    desc: 'We listen to community leaders and residents before designing programs, ensuring our interventions address real, felt needs.',
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs & Services"
        subtitle="Targeted healthcare initiatives designed to address the real needs of rural and underserved communities across Pune district."
        bgImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80"
        breadcrumb="Programs & Services"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <SectionHeading
            tagline="Healthcare Initiatives"
            title="Addressing Real Healthcare Gaps"
          />
          <p className="text-gray-600 leading-relaxed text-lg">
            Vighnaharta Medical Foundation works primarily in the healthcare sector, focusing on communities
            that are often left out of mainstream medical systems. Our programs are designed to address real
            healthcare gaps and deliver long-term, sustainable benefits to rural families.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <InfoCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Why Choose Us"
            title="What Makes Our Programs Different"
            subtitle="We don't just deliver services — we build relationships with communities and create lasting health impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-earth" />
                </div>
                <h3 className="font-serif font-bold text-blue-deep text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-14 md:py-20 bg-blue-deep text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Partner with Us</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Are you a hospital, CSR initiative, medical college, or health organization? Partner with us
            to expand the reach of quality healthcare in rural Maharashtra.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-warm text-blue-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg group"
          >
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
