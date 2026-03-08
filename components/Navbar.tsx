'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-deep flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-amber-warm fill-amber-warm" />
            </div>
            <div className="leading-tight">
              <div className="text-blue-deep font-serif font-bold text-sm md:text-base leading-tight">
                Vighnaharta Medical
              </div>
              <div className="text-green-earth text-xs font-medium tracking-wide">
                Foundation
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-green-earth bg-green-light font-semibold'
                    : 'text-gray-700 hover:text-blue-deep hover:bg-blue-light'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/get-involved"
              className="bg-green-earth text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-mid transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Get Involved
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-deep" />
            ) : (
              <Menu className="w-6 h-6 text-blue-deep" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
        {/* Menu Panel */}
        <div
          className={clsx(
            'relative bg-white h-full w-72 shadow-2xl transition-transform duration-300 overflow-y-auto',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Navigation</p>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-xl mb-1 text-base font-medium transition-all',
                  pathname === link.href
                    ? 'bg-green-light text-green-earth font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/get-involved"
                className="flex items-center justify-center gap-2 w-full bg-green-earth text-white py-3 rounded-xl font-semibold hover:bg-green-mid transition-colors"
              >
                <Heart className="w-4 h-4" />
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
