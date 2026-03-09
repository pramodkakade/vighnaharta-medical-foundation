import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users2, Share2, ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Get Involved | Vighnaharta Medical Foundation',
  description:
    'Volunteer, partner, or support Vighnaharta Medical Foundation to help bring accessible healthcare to rural communities in Pune district.',
}

const ways = [
  {
    icon: Heart,
    title: 'Volunteer With Us',
    color: 'bg-blue-deep',
    iconBg: 'bg-blue-light',
    iconColor: 'text-blue-deep',
    description:
      'Join our on-ground health camps, awareness drives, and community outreach programs. Medical professionals and non-medical volunteers are both welcome.',
    benefits: [
      'Participate in health camps across Shirur taluka',
      'Support health awareness sessions in villages',
      'Assist in logistics and community coordination',
      'Gain meaningful field experience in rural health',
    ],
  },
  {
    icon: Users2,
    title: 'Partner With Us',
    color: 'bg-green-earth',
    iconBg: 'bg-green-light',
    iconColor: 'text-green-earth',
    description:
      'Organizations, hospitals, medical colleges, and corporates can partner with us on healthcare camps, CSR initiatives, and community health programs.',
    benefits: [
      'Co-organize health camps and awareness drives',
      'Provide medical equipment or supplies',
      'Support through CSR funding or in-kind donations',
      'Reach genuine grassroots communities for impact',
    ],
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    color: 'bg-amber-warm',
    iconBg: 'bg-amber-warm/15',
    iconColor: 'text-amber-warm',
    description:
      'Share our mission on social media, connect us with potential partners, or help spread health awareness in your own community and network.',
    benefits: [
      'Share our work on social media platforms',
      'Introduce us to potential donors or partners',
      'Spread health awareness messages in your network',
      'Help recruit volunteers from your community',
    ],
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        title="Get Involved"
        subtitle="Your support — in any form — helps us reach more communities and deliver compassionate healthcare where it matters most."
        bgImage="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1600&q=80"
        breadcrumb="Get Involved"
      />

      {/* 3 Ways */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="How You Can Help"
            title="Three Ways to Make a Difference"
            subtitle="Whether you have time, resources, or simply a voice — there's a meaningful way for you to contribute."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ways.map(({ icon: Icon, title, color, iconBg, iconColor, description, benefits }) => (
              <div key={title} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
                <div className={`${color} p-6 text-white`}>
                  <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl">{title}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2.5 flex-1">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-earth flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 border-2 border-green-earth text-green-earth py-3 rounded-xl font-semibold hover:bg-green-earth hover:text-white transition-all group"
                  >
                    Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Enquiry Form */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <SectionHeading
            tagline="Send Us a Message"
            title="Ready to Get Started?"
            subtitle="Fill in your details and we will get back to you within 48 hours."
          />
          <div className="bg-white rounded-2xl shadow-card p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">I would like to *</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm transition-colors text-gray-600 bg-white">
                  <option value="">Select an option</option>
                  <option>Volunteer at health camps</option>
                  <option>Partner as an organization</option>
                  <option>Support as a donor</option>
                  <option>Learn more about programs</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about yourself and how you'd like to get involved..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-earth text-white py-4 rounded-xl font-bold hover:bg-green-mid transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" /> Submit My Interest
              </button>
              <p className="text-center text-gray-400 text-xs">
                We respect your privacy. Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Strip */}
      <section className="py-12 bg-blue-deep text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/80 mb-4">Prefer to speak directly? Reach out to us:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:9689645785" className="flex items-center gap-2 text-amber-warm font-bold text-xl hover:opacity-80 transition-opacity">
              <Phone className="w-5 h-5" /> 9689645785
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <p className="text-white/80">Mr. Pravin Dukare — Contact Person</p>
          </div>
        </div>
      </section>
    </>
  )
}
