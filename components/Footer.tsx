import Link from 'next/link'
import { Heart, Phone, MapPin, Globe, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs & Services', href: '/programs' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Blog & Resources', href: '/blog' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const programs = [
  'Rural Healthcare Services',
  'Free Health Check-up Camps',
  'Preventive Care Programs',
  'Community Medical Outreach',
  'Support for Underprivileged',
  'Health Awareness Drives',
]

export default function Footer() {
  return (
    <footer className="bg-blue-deep text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-amber-warm/20 border border-amber-warm/40 flex items-center justify-center">
                <Heart className="w-5 h-5 text-amber-warm fill-amber-warm" />
              </div>
              <div>
                <div className="font-serif font-bold text-white leading-tight">
                  Vighnaharta Medical
                </div>
                <div className="text-green-light text-xs">Foundation</div>
              </div>
            </div>
            <p className="text-blue-mid text-sm leading-relaxed mb-6">
              <em className="text-amber-warm not-italic font-medium">"Compassion and Healing"</em>
              <br />
              Serving rural communities with accessible and compassionate healthcare since 15+ years.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-warm/20 hover:text-amber-warm transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-mid text-sm hover:text-amber-warm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-light group-hover:bg-amber-warm transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-5 pb-2 border-b border-white/10">
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p} className="flex items-center gap-2 text-blue-mid text-sm">
                  <span className="w-1 h-1 rounded-full bg-green-light flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-green-light font-semibold uppercase tracking-wider mb-1">Contact Person</p>
                <p className="text-white text-sm font-medium">Mr. Pravin Dukare</p>
              </li>
              <li>
                <a
                  href="tel:9689645785"
                  className="flex items-start gap-3 text-blue-mid hover:text-amber-warm transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-light group-hover:text-amber-warm" />
                  <span className="text-sm">9689645785</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-mid">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-light" />
                  <span className="text-sm leading-relaxed">
                    A/P Jambut, Tal. Shirur,<br />
                    Dist. Pune – 412210
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="https://www.vighnahartamedicalfoundation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-mid hover:text-amber-warm transition-colors"
                >
                  <Globe className="w-4 h-4 flex-shrink-0 text-green-light" />
                  <span className="text-sm">vighnahartamedicalfoundation.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-mid text-sm">
            © {new Date().getFullYear()} Vighnaharta Medical Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-blue-mid hover:text-amber-warm transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">|</span>
            <p className="text-blue-mid flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-amber-warm fill-amber-warm" /> for rural India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
