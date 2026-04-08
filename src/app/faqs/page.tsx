'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';
import CTABanner from '@/components/CTABanner';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (slug: string) => {
    setExpandedId(expandedId === slug ? null : slug);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-700">Everything you need to know about trailer insurance in New Zealand.</p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.slug} className="border border-slate-200 rounded-lg hover:border-amber-300 transition-colors">
                <button
                  onClick={() => toggleExpanded(faq.slug)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-left text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedId === faq.slug ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.slug && (
                  <div className="px-6 sm:px-8 py-6 border-t border-slate-200 bg-slate-50">
                    <p className="text-slate-700 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 p-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <p className="text-slate-700 mb-6">Our brokers are ready to answer any questions about trailer insurance and help you find the perfect policy.</p>
            <a
              href="/#quote-form"
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Protect Your Trailer?"
        description="Get quotes from NZ's top insurance providers in just 2 minutes."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
