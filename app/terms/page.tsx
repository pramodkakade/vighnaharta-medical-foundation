import type { Metadata } from 'next'
import { FileText, CheckCircle } from 'lucide-react'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Vighnaharta Medical Foundation',
  description: 'Terms and conditions for programs and services provided by Vighnaharta Medical Foundation.',
}

const terms = [
  {
    title: 'Service Availability',
    content:
      'All services and healthcare programs offered by Vighnaharta Medical Foundation are provided subject to program availability, resource capacity, and operational scheduling. The foundation reserves the right to modify the timing, location, or scope of any program based on logistical needs.',
  },
  {
    title: 'Nature of Medical Support',
    content:
      'Medical support, health check-ups, and related services are provided as part of charitable healthcare initiatives. These services are supplementary in nature and do not replace formal clinical care. Participants are encouraged to consult registered medical practitioners for diagnosis and treatment.',
  },
  {
    title: 'Program Changes & Flexibility',
    content:
      'Programs and initiatives may change based on evolving community needs, availability of resources, seasonal considerations, or unforeseen circumstances. The foundation will endeavor to communicate any significant changes to affected communities in advance.',
  },
  {
    title: 'Legal Compliance',
    content:
      'Vighnaharta Medical Foundation operates in full compliance with all applicable laws and regulations of India, including those governing charitable organizations, medical service delivery, and data privacy. All information shared with the foundation is handled responsibly and not disclosed to third parties without consent.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before participating in our programs and services."
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
        breadcrumb="Legal"
        overlayOpacity="bg-blue-deep/80"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-deep" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-blue-deep text-2xl">Terms & Conditions</h2>
              <p className="text-gray-500 text-sm">Last Updated: March 2024</p>
            </div>
          </div>

          <div className="bg-blue-light rounded-2xl p-6 mb-10">
            <p className="text-blue-deep leading-relaxed">
              By participating in any program, event, or service offered by{' '}
              <strong>Vighnaharta Medical Foundation</strong>, you agree to the following terms and conditions.
              These terms are designed to ensure transparency, safety, and ethical service delivery.
            </p>
          </div>

          <div className="space-y-6">
            {terms.map((term, i) => (
              <div key={term.title} className="bg-cream rounded-2xl p-7 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-earth font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-blue-deep text-xl mb-3">{term.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{term.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-light rounded-2xl p-6 flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-earth flex-shrink-0 mt-0.5" />
            <p className="text-green-earth leading-relaxed">
              <strong>Our Commitment:</strong> Vighnaharta Medical Foundation is committed to ethical, transparent,
              and compassionate service. If you have any questions about these terms, please contact us at{' '}
              <a href="tel:9689645785" className="underline font-semibold">9689645785</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
