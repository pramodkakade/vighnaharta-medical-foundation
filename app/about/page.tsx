import type { Metadata } from 'next'
import { Eye, Target, Award, Shield, Users, Heart } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'About Us | Vighnaharta Medical Foundation',
  description:
    'Learn about the story, vision, mission, and leadership of Vighnaharta Medical Foundation — serving rural communities in Pune district for 15+ years.',
}

const missionPoints = [
  'To deliver accessible and compassionate medical care to underserved communities',
  'To promote preventive healthcare and health awareness among rural populations',
  'To strengthen community health through outreach, education, and consistent service',
  'To support rural populations with timely, ethical, and transparent medical services',
]

const values = [
  { icon: Heart, label: 'Compassion' },
  { icon: Shield, label: 'Ethics' },
  { icon: Users, label: 'Community' },
  { icon: Award, label: 'Excellence' },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Founded with purpose. Driven by compassion. Serving communities since 15+ years."
        bgImage="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=80"
        breadcrumb="About Us"
      />

      {/* OUR STORY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading tagline="Our Story" title="15 Years of Purposeful Service" />
            <div className="space-y-5 text-gray-600 leading-relaxed text-left">
              <p>
                Established 15 years ago, <strong className="text-blue-deep">Vighnaharta Medical Foundation</strong> was
                founded with a single purpose — to serve society through accessible and compassionate healthcare.
                Recognizing the deep healthcare challenges faced by rural and interior populations, the foundation
                began its journey by bringing medical support closer to communities that lacked even basic facilities.
              </p>
              <p>
                In the early years, our teams traveled to remote villages of Pune district, conducting health camps,
                distributing medicines, and building awareness where there was none. Each camp, each interaction,
                each family helped reinforced our resolve to continue and expand.
              </p>
              <p>
                Today, the foundation continues to work at the grassroots level, focusing on prevention, awareness,
                and timely medical intervention. We remain committed to the belief that geography and economics should
                never stand between a person and their right to good health.
              </p>
              <p>
                Over 15+ years, we have supported thousands of individuals, reached hundreds of families, and built
                lasting trust in communities across the Shirur taluka and beyond. Our work is far from over — and we
                are more committed than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading tagline="Our Purpose" title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-blue-deep text-white rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-amber-warm" />
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl mb-5">Our Vision</h3>
              <p className="text-white/85 leading-relaxed text-lg">
                To create a society where every individual has access to quality healthcare, lives with dignity, and
                enjoys a healthy life — irrespective of location or economic background.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-earth" />
              </div>
              <h3 className="font-serif font-bold text-blue-deep text-2xl md:text-3xl mb-5">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-green-earth flex-shrink-0 mt-2" />
                    <span className="leading-relaxed text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Leadership"
            title="Guided by Experienced Leaders"
            subtitle="The foundation is led by experienced individuals committed to ethical service, social responsibility, and community welfare."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TeamCard
              name="Dr. Dattatray Bhivsen Chavhan"
              designation="Chairman"
              initials="DC"
              bgColor="bg-blue-deep"
              bio="Leading the foundation with 15+ years of medical and social service expertise, guiding our healthcare vision for rural Maharashtra."
            />
            <TeamCard
              name="Mrs. Jayshree Dattatray Chavhan"
              designation="Secretary"
              initials="JC"
              bgColor="bg-green-earth"
              bio="Overseeing operations and community programs, ensuring every initiative reflects the foundation's values of compassion and service."
            />
            <TeamCard
              name="Mr. Pravin Balu Dukare"
              designation="Treasurer"
              initials="PD"
              bgColor="bg-amber-warm"
              bio="Managing the foundation's resources with transparency and accountability to maximize impact in every program delivered."
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading tagline="Our Foundation" title="Core Values" />
          <div className="flex flex-wrap justify-center gap-4">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white px-7 py-4 rounded-full shadow-card border border-gray-100 hover:border-green-earth hover:shadow-card-hover transition-all"
              >
                <Icon className="w-5 h-5 text-green-earth" />
                <span className="font-semibold text-blue-deep">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
