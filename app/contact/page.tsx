import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Globe, User, Mail, Send, Clock } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact Us | Vighnaharta Medical Foundation',
  description:
    'Contact Vighnaharta Medical Foundation. Reach Mr. Pravin Dukare at 9689645785 or visit our office in Jambut, Shirur, Pune – 412210.',
}

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We are here to help. Reach out to our team for inquiries, partnerships, or to learn more about our programs."
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
        breadcrumb="Contact Us"
        overlayOpacity="bg-blue-deep/75"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Get In Touch"
            title="We'd Love to Hear From You"
            subtitle="Whether you want to volunteer, partner, learn about our programs, or simply know more — we're just a call away."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-blue-deep text-white rounded-2xl p-8">
                <h3 className="font-serif font-bold text-2xl mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-amber-warm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Contact Person</p>
                      <p className="text-white font-semibold text-lg">Mr. Pravin Dukare</p>
                      <p className="text-white/70 text-sm">Treasurer, Vighnaharta Medical Foundation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-warm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Mobile</p>
                      <a
                        href="tel:9689645785"
                        className="text-white font-semibold text-lg hover:text-amber-warm transition-colors"
                      >
                        9689645785
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-warm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Office Address</p>
                      <p className="text-white font-medium leading-relaxed">
                        A/P Jambut, Tal. Shirur,<br />
                        Dist. Pune – 412210,<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-amber-warm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Website</p>
                      <a
                        href="https://www.vighnahartamedicalfoundation.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-warm hover:text-white transition-colors font-medium"
                      >
                        www.vighnahartamedicalfoundation.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-warm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Response Time</p>
                      <p className="text-white font-medium">We typically respond within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30377.87!2d74.3622!3d18.8148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc35a2f0a0a0a0a%3A0x0!2sShirur%2C+Maharashtra+412210!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vighnaharta Medical Foundation Location — Shirur, Pune"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-serif font-bold text-blue-deep text-2xl mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-green-earth focus:outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-green-earth focus:outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-green-earth focus:outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Purpose of Contact</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-green-earth focus:outline-none text-sm transition-colors text-gray-600">
                    <option value="">Select a topic</option>
                    <option>Volunteering</option>
                    <option>Partnership / CSR</option>
                    <option>Medical Collaboration</option>
                    <option>Program Enquiry</option>
                    <option>General Information</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-green-earth focus:outline-none text-sm transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-earth text-white py-4 rounded-xl font-bold hover:bg-green-mid transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
                <p className="text-center text-gray-400 text-xs">
                  We will respond within 48 hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
