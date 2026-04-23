'use client';

import Link from 'next/link';
import { useState } from 'react';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';
import HeroCarousel from '@/components/HeroCarousel';
import { faqs } from '@/data/faqs';
import {
  Shield,
  Truck,
  Anchor,
  Home as HomeIcon,
  Package,
  ChevronDown,
  CheckCircle2,
  Lock,
  Zap,
  MessageCircle,
  AlertTriangle,
  Heart,
  Wallet,
  Users,
  Flame,
} from 'lucide-react';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export default function HomePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const trailerTypes = [
    {
      icon: Shield,
      title: 'Comprehensive Cover',
      description: 'Full protection against damage, theft, fire, storms, and natural disasters for your trailer.',
      href: '/types/comprehensive',
    },
    {
      icon: Users,
      title: 'Third-Party Liability',
      description: 'Covers legal liability for damage your trailer causes to other people\'s property — up to $20M.',
      href: '/types/third-party-liability',
    },
    {
      icon: Wallet,
      title: 'Agreed Value vs Market Value',
      description: 'Choose between a fixed payout amount or current market value for total loss claims.',
      href: '/types/agreed-value',
    },
    {
      icon: Truck,
      title: 'Commercial / Carriers Liability',
      description: 'Specialised cover for business trailers, tools, equipment, and heavy transport needs.',
      href: '/types/commercial',
    },
    {
      icon: Package,
      title: 'Contents & Accessory Cover',
      description: 'Protect appliances, camping gear, and personal items stored in your caravan or trailer.',
      href: '/types/contents-cover',
    },
    {
      icon: Anchor,
      title: 'Towing & Storage',
      description: 'Covers costs for towing, recovering, and storing your trailer after an accident.',
      href: '/types/towing-storage',
    },
  ];

  const whyEssential = [
    {
      icon: AlertTriangle,
      title: 'Detached = Uninsured',
      description: 'Most car policies only cover your trailer while attached. Once unhitched, you\'re on your own without standalone cover.',
    },
    {
      icon: Flame,
      title: 'Fire & Theft Protection',
      description: 'Trailer theft is on the rise in NZ. Comprehensive cover protects you whether the trailer is at home, at a campsite, or in storage.',
    },
    {
      icon: Heart,
      title: '$20M Liability Cover',
      description: 'If your trailer damages someone else\'s property, you could face massive costs. Third-party liability cover has you protected.',
    },
    {
      icon: HomeIcon,
      title: 'Protect Your Investment',
      description: 'Caravans and horse floats can cost over $100,000. Don\'t leave your investment exposed to risk without proper insurance.',
    },
  ];

  const displayedFAQs = (faqs as FAQItem[]).slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TrailerInsurance.co.nz",
            "url": "https://trailerinsurance.co.nz",
            "logo": "https://trailerinsurance.co.nz/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+64-9-885-9549",
              "contactType": "customer service",
              "areaServed": "NZ",
              "availableLanguage": "English"
            },
            "sameAs": [],
            "description": "New Zealand's specialist trailer insurance comparison service connecting Kiwis with ICNZ-registered insurance brokers."
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "TrailerInsurance.co.nz",
            "url": "https://trailerinsurance.co.nz",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://trailerinsurance.co.nz/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayedFAQs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer.replace(/<[^>]*>/g, '') },
            })),
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden">
          <HeroCarousel />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-0 lg:pb-0">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Partnered with Licensed Insurance Brokers</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Your Trailer
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Compare top NZ trailer insurance providers in minutes. Caravans, boat trailers, horse floats, and more — get comprehensive cover tailored to your needs.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Shield, text: 'Licensed Insurance Brokers' },
                  { icon: CheckCircle2, text: 'No Broker Fees' },
                  { icon: Lock, text: '256-bit SSL Secure' },
                  { icon: Zap, text: '24hr Response' },
                  { icon: MessageCircle, text: 'Free Consultation' },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15">
                      <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-sm text-white font-medium">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote-form" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Quote <span>→</span>
                </Link>
                <Link href="/compare" className="bg-white/15 hover:bg-white/25 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                  Compare Providers <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AnimatedStats />
        <HowItWorks />

        {/* Coverage Types Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coverage for Every Trailer Type</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Whether you own a caravan, boat trailer, horse float, or commercial trailer, we have protection tailored for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trailerTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Link key={type.href} href={type.href} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{type.description}</p>
                    <span className="text-amber-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <span>→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Trailer Insurance is Essential */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Trailer Insurance is Essential</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Your car insurance probably doesn&apos;t cover your trailer the way you think it does.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyEssential.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Did You Know?</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Most comprehensive car insurance policies in New Zealand only cover your trailer while it&apos;s physically attached to the insured vehicle. Once you unhitch at a campsite, boat ramp, or in your driveway, your trailer is generally considered a separate, uninsured asset. Standalone trailer insurance covers you 24/7 — hitched or unhitched.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 text-lg">Find answers to common questions about trailer insurance in New Zealand</p>
            </div>

            <div className="space-y-3">
              {displayedFAQs.map((faq) => (
                <div key={faq.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-300 transition-all duration-200">
                  <button onClick={() => setExpandedFAQ(expandedFAQ === faq.slug ? null : faq.slug)} className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <h3 className="font-bold text-slate-900 text-left">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 ml-4 transition-transform duration-300 ${expandedFAQ === faq.slug ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ === faq.slug && (
                    <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/faqs" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors inline-flex items-center gap-2">
                View all FAQs <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Insurance Guides Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Trailer Insurance Guides</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Explore our comprehensive guides to find the right trailer insurance for your needs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz', desc: 'Protect your home away from home with comprehensive caravan cover' },
                { title: 'Boat Trailer Insurance', href: '/insurance/boat-trailer-insurance-nz', desc: 'Dedicated cover for your boat trailer on and off the road' },
                { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz', desc: 'Specialist insurance for equine transport and horse floats' },
                { title: 'Camper Trailer Insurance', href: '/insurance/camper-trailer-insurance-nz', desc: 'Coverage for camper trailers and pop-top caravans' },
                { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz', desc: 'Compare the top trailer insurance providers in New Zealand' },
                { title: 'Trailer Insurance Cost', href: '/insurance/trailer-insurance-cost-nz', desc: 'Understand what trailer insurance costs in NZ' },
                { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz', desc: 'Side-by-side comparison of NZ trailer insurers' },
                { title: 'Commercial Trailer Cover', href: '/insurance/flatbed-trailer-insurance-nz', desc: 'Insurance for flatbed and commercial trailers' },
              ].map((guide) => (
                <Link key={guide.href} href={guide.href} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">{guide.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm mode="full" />
        <CTABanner />
      </main>
    </>
  );
}
