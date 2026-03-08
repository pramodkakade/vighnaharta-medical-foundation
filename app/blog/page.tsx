import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Blog & Health Resources | Vighnaharta Medical Foundation',
  description:
    'Health awareness articles, rural healthcare guides, and community wellness resources from Vighnaharta Medical Foundation.',
}

const posts = [
  {
    category: 'Rural Health',
    date: 'March 2024',
    title: 'Bridging the Healthcare Gap in Rural Maharashtra',
    excerpt:
      'Millions of people in rural India still lack access to basic medical care. Discover how community-based foundations like ours are changing this reality, one village at a time, through persistent grassroots action.',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
    alt: 'Rural healthcare worker in Indian village',
    color: 'bg-blue-deep',
  },
  {
    category: 'Preventive Care',
    date: 'February 2024',
    title: 'Why Preventive Healthcare is the Key to Healthier Villages',
    excerpt:
      'Prevention is more powerful — and more affordable — than cure. Learn about the preventive programs transforming community health in Pune district, and why awareness is the first medicine.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    alt: 'Health camp and medical screening in rural India',
    color: 'bg-green-earth',
  },
  {
    category: 'Community Wellness',
    date: 'January 2024',
    title: 'What Health Camps Mean for Rural Families',
    excerpt:
      'Free health camps do more than diagnose illness — they build trust, spread awareness, and create a culture of health in underserved communities. Here\'s what we\'ve seen happen over 15 years.',
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&q=80',
    alt: 'Community health awareness session in village',
    color: 'bg-amber-warm',
  },
  {
    category: 'Maternal Health',
    date: 'December 2023',
    title: 'Protecting Mothers in Rural India: A Critical Priority',
    excerpt:
      'Maternal mortality remains higher in rural areas where access to antenatal care, skilled birth attendants, and emergency obstetric services is limited. Our approach to maternal health outreach.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    alt: 'Healthcare support for mothers in rural Maharashtra',
    color: 'bg-blue-deep',
  },
  {
    category: 'Nutrition',
    date: 'November 2023',
    title: 'Fighting Malnutrition Through Community Awareness Programs',
    excerpt:
      'Malnutrition affects millions of children across India\'s rural belt. We examine how targeted nutritional awareness and supplementation programs can turn the tide in communities like ours.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    alt: 'Children in rural India receiving health support',
    color: 'bg-green-earth',
  },
  {
    category: 'Health Tips',
    date: 'October 2023',
    title: '10 Simple Health Habits That Rural Families Can Adopt Today',
    excerpt:
      'Good health doesn\'t always require a doctor or a hospital. These 10 practical, low-cost health habits — validated by our on-ground experience — can significantly improve wellbeing in rural homes.',
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    alt: 'Community health education in Maharashtra village',
    color: 'bg-amber-warm',
  },
]

const categories = ['All', 'Rural Health', 'Preventive Care', 'Community Wellness', 'Maternal Health', 'Nutrition', 'Health Tips']

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog & Health Resources"
        subtitle="Knowledge that empowers communities to live healthier lives."
        bgImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80"
        breadcrumb="Blog & Resources"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            tagline="Health Awareness & Community Education"
            title="Resources for Healthier Communities"
            subtitle="Our blog focuses on rural healthcare challenges, preventive practices, and community wellness education."
          />

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  cat === 'All'
                    ? 'bg-blue-deep text-white border-blue-deep'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-green-earth hover:text-green-earth'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`${post.color} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h2 className="font-serif font-bold text-blue-deep text-xl leading-snug mb-3 group-hover:text-green-earth transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-4">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-green-earth font-semibold text-sm hover:gap-2.5 transition-all cursor-pointer">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-blue-deep text-3xl mb-3">Stay Informed</h2>
          <p className="text-gray-600 mb-8">
            Get the latest health resources, camp announcements, and community health updates from Vighnaharta Medical Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-earth focus:outline-none text-sm"
            />
            <button className="bg-green-earth text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-mid transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
