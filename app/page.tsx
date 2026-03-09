import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Stethoscope, ShieldCheck, Users, HeartHandshake, ArrowRight,
  CheckCircle, Heart, MapPin, Clock, Leaf
} from 'lucide-react'
import Hero from '@/components/Hero'
import InfoCard from '@/components/InfoCard'
import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import ImpactStat from '@/components/ImpactStat'

export const metadata: Metadata = {
  title: 'Vighnaharta Medical Foundation | Compassion and Healing — Rural Healthcare Pune',
  description:
    'Vighnaharta Medical Foundation is a 15-year-old charitable foundation serving rural communities in Pune district with accessible, compassionate healthcare.',
}

const focusAreas = [
  {
    icon: Stethoscope,
    title: 'Rural Healthcare Services',
    description:
      'Bringing essential medical facilities directly to villages and interior communities that lack access to mainstream healthcare infrastructure.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Medical Care',
    description:
      'Conducting regular health screenings, check-up camps, and vaccination drives to prevent illness before it takes hold in vulnerable communities.',
  },
  {
    icon: Users,
    title: 'Community Health Awareness',
    description:
      'Educating communities on hygiene, nutrition, maternal health, and wellness so every family can make informed health decisions.',
  },
  {
    icon: HeartHandshake,
    title: 'Medical Support for Underprivileged',
    description:
      'Providing free and subsidized medical services to economically weaker sections who cannot afford private healthcare.',
  },
]

const whyChooseUs = [
  {
    icon: Heart,
    title: 'People-Centric Healthcare',
    desc: 'Compassion comes before everything. Every program is designed with the patient's dignity and wellbeing at its centre.',
  },
  {
    icon: MapPin,
    title: 'Grassroots Presence',
    desc: 'Deep reach into rural and micro-interior areas that mainstream healthcare systems rarely serve.',
  },
  {
    icon: Clock,
    title: '15+ Years of Trust',
    desc: 'A proven track record of consistent, ethical service that communities across Pune district rely on.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Medical Practices',
    desc: 'Transparency, accountability, and responsibility guide every initiative and every rupee spent.',
  },
  {
    icon: Users,
    title: 'Community-Driven Impact',
    desc: 'Our solutions are built around real local needs — heard directly from the people we serve.',
  },
]

const testimonials = [
  {
    quote:
      'The medical support provided by Vighnaharta Medical Foundation has helped our village immensely. We can now get health check-ups without traveling far.',
    name: 'Village Sarpanch',
    location: 'Shirur Taluka, Pune',
    initials: 'VS',
    bgColor: 'bg-blue-deep',
  },
  {
    quote:
      'Their dedication to rural healthcare is truly inspiring. The free health camps have benefited hundreds of families in our area.',
    name: 'Community Member',
    location: 'Jambut, Pune District',
    initials: 'CM',
    bgColor: 'bg-green-earth',
  },
  {
    quote:
      'A foundation that genuinely serves society with compassion. We are grateful for their continued presence and support in our community.',
    name: 'Beneficiary Family',
    location: 'Rural Pune',
    initials: 'BF',
    bgColor: 'bg-amber-warm',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="Compassion and Healing"
        subtitle="Bringing accessible, ethical healthcare to rural communities across Pune district — for over 15 years and counting."
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
        cta1={{ label: 'Our Programs', href: '/programs' }}
        cta2={{ label: 'Get Involved', href: '/get-involved' }}
        fullHeight
      />

      {/* WHO WE ARE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
                  alt="Healthcare worker serving rural community in Pune district"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-green-earth text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <div className="font-serif font-black text-3xl">15+</div>
                <div className="text-xs font-medium opacity-90">Years of Service</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-earth mb-3">Who We Are</p>
              <h2 className="font-serif font-bold text-blue-deep text-3xl md:text-4xl leading-tight mb-5">
                Dedicated to Healthcare<br />for Every Community
              </h2>
              <div className="flex gap-1 mb-6">
                <span className="w-8 h-1 rounded-full bg-green-earth" />
                <span className="w-3 h-1 rounded-full bg-amber-warm" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vighnaharta Medical Foundation is a 15-year-old registered charitable medical foundation
                dedicated to improving healthcare access for rural and micro-interior communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that no one should be denied medical care due to geography or financial limitations.
                Through on-ground medical initiatives, preventive healthcare programs, and community outreach,
                we work to create healthier, stronger, and more aware communities.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Free and subsidized health check-up camps',
                  'Preventive care and awareness programs',
                  'Medical support for underprivileged families',
                  'Community-based outreach in Pune district',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-earth flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-deep text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-mid transition-colors shadow-md hover:shadow-lg group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="What We Do"
            title="Our Focus Areas"
            subtitle="We address the most critical gaps in rural healthcare through targeted programs built around community needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <InfoCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border-2 border-blue-deep text-blue-deep px-7 py-3 rounded-xl font-semibold hover:bg-blue-deep hover:text-white transition-all duration-300 group"
            >
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-16 md:py-20 bg-blue-deep relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          <SectionHeading
            tagline="Our Impact"
            title="Numbers That Speak"
            subtitle="Every number represents a life touched, a family helped, a community strengthened."
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <ImpactStat value="15+" label="Years of Service" />
            <ImpactStat value="1000s" label="Individuals Supported" />
            <ImpactStat value="Pune" label="District Coverage" />
            <ImpactStat value="100+" label="Health Camps Held" />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 border-2 border-amber-warm text-amber-warm px-7 py-3 rounded-xl font-semibold hover:bg-amber-warm hover:text-blue-deep transition-all duration-300 group"
            >
              See Full Impact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tagline="Why Choose Us"
                title="Healthcare Built on Trust & Compassion"
                subtitle="For over 15 years, we have earned the trust of rural communities through consistent, ethical, and compassionate service."
                centered={false}
              />
              <div className="space-y-5">
                {whyChooseUs.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-green-earth" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-deep mb-1">{title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 md:h-[520px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                  alt="Medical camp in rural village near Pune"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/40 to-transparent" />
              </div>
              <div className="absolute -top-5 -left-5 bg-amber-warm text-blue-deep rounded-2xl p-5 shadow-xl hidden md:block">
                <Leaf className="w-6 h-6 mb-1" />
                <div className="font-bold text-sm">Grassroots</div>
                <div className="text-xs">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Testimonials"
            title="Voices from Our Communities"
            subtitle="What the people we serve say about Vighnaharta Medical Foundation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Partners & Supporters"
            title="Trusted by Healthcare Partners"
            subtitle="We collaborate with hospitals, donors, CSR partners, and medical organizations to maximize our reach and impact."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Hospital Partner', 'CSR Sponsor', 'Medical College', 'Health NGO', 'Donor Trust', 'Medical Supplier'].map(
              (partner) => (
                <div
                  key={partner}
                  className="border-2 border-dashed border-gray-200 rounded-xl h-24 flex items-center justify-center p-3 hover:border-green-earth transition-colors group"
                >
                  <p className="text-gray-400 text-xs text-center group-hover:text-green-earth transition-colors font-medium">
                    {partner}
                  </p>
                </div>
              )
            )}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 italic">
            Partner logos will be updated once confirmed
          </p>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Blog & Resources"
            title="Health Awareness & Education"
            subtitle="Practical knowledge to help communities make better health decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cat: 'Rural Health',
                title: 'Bridging the Healthcare Gap in Rural Maharashtra',
                excerpt: 'Millions of people in rural India lack access to basic medical care. Learn how community-based foundations are changing this reality one village at a time.',
                img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
              },
              {
                cat: 'Preventive Care',
                title: 'Why Preventive Healthcare is the Key to Healthier Villages',
                excerpt: 'Prevention is more powerful — and more affordable — than cure. Discover the preventive programs transforming community health in Pune district.',
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
              },
              {
                cat: 'Community Wellness',
                title: 'Community Health Camps: What They Mean for Rural Families',
                excerpt: 'Free health camps do more than diagnose illness — they build trust, spread awareness, and create a culture of health in underserved communities.',
                img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&q=80',
              },
            ].map((post) => (
              <article key={post.title} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-earth text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {post.cat}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-blue-deep text-lg mb-3 leading-snug group-hover:text-green-earth transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-green-earth font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-green-earth text-green-earth px-7 py-3 rounded-xl font-semibold hover:bg-green-earth hover:text-white transition-all group"
            >
              View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-20 bg-green-earth relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <p className="text-green-light text-sm font-bold uppercase tracking-widest mb-3">Make a Difference</p>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl mb-5">
            Join Our Mission to Heal Rural India
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Whether you volunteer, partner, or spread awareness — your involvement helps us reach more communities
            and deliver compassionate healthcare where it's needed most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-white text-green-earth px-8 py-4 rounded-xl font-bold hover:bg-amber-warm hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 justify-center"
            >
              <Heart className="w-5 h-5" /> Get Involved Today
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
