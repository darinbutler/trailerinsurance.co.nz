'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Truck, Shield, AlertTriangle, Zap, CheckCircle2, TrendingUp, Lock, Home } from 'lucide-react';

export default function FlatbedTrailerInsurancePage() {
  const benefits = [
    {
      icon: Truck,
      title: 'Flatbed and Commercial Trailer Coverage',
      description: 'Full protection for flatbed, drop-deck, and commercial trailers designed for heavy-duty work and material transport.',
    },
    {
      icon: Shield,
      title: 'Load Securing System Protection',
      description: 'Coverage for tie-down points, chains, straps, and securing systems that keep loads safe during transport.',
    },
    {
      icon: AlertTriangle,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage, and accidents while towing heavy loads.',
    },
    {
      icon: Zap,
      title: 'Brake and Suspension Systems',
      description: 'Coverage for heavy-duty brakes, air suspension, and components designed for commercial use and heavy loads.',
    },
    {
      icon: Home,
      title: 'Theft and Vandalism Protection',
      description: 'Comprehensive cover against theft of equipment and damage to security features at work sites.',
    },
    {
      icon: TrendingUp,
      title: 'Commercial and Trade Use',
      description: 'Insurance designed for business use covering regular commercial and trade applications.',
    },
  ];

  const relatedGuides = [
    { title: 'Box Trailer Insurance NZ', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Commercial Trailer Coverage', href: '/types/commercial' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Flatbed Trailer Insurance NZ',
            description: 'Commercial flatbed trailer insurance in New Zealand for heavy-duty work, material transport, and trade use',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/flatbed-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Truck className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Commercial Grade Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Flatbed Trailer Insurance NZ
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Heavy-Duty Coverage for Trade and Commerce
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Specialist insurance for flatbed and commercial trailers. Comprehensive coverage designed for heavy loads, material transport, and professional use across New Zealand.
              </p>

              <Link href="/#quote-form" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                Get Your Free Quote <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Commercial Flatbed Trailers Require Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed and open trailers are workhorses of New Zealand's construction, landscaping, and transport industries. These trailers carry high-value loads, require heavy-duty components, and operate in demanding conditions. Standard personal trailer insurance is inadequate—you need insurance designed for commercial heavy-duty use.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed trailers face unique risks: heavy loads stress brakes and suspension, exposed cargo attracts theft, and work sites expose equipment to vandalism. Your flatbed is essential to your business operations. Damage or theft can disrupt your work schedule and profitability, making reliable insurance critical.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance providers AA Insurance, AMI, State, Tower, and others offer commercial-grade flatbed policies with coverage appropriate for heavy-duty use. These policies understand the demands of trade and commercial operations.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Comprehensive Flatbed Trailer Coverage</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Deck and Structure Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your flatbed deck, side rails, and structural frame are built for heavy loads. Insurance covers damage to these components from accidents, impacts, overloading incidents, and weather events. Reinforced decking and heavy-duty construction require specialized knowledge to repair properly.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Heavy-Duty Brake Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed trailers use heavy-duty air brake systems and drum brakes rated for carrying heavy loads. These expensive systems require specialist repair. Insurance covers damage to brake components, air lines, and connections when damaged by accidents or impacts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Air Suspension and Axles</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty air suspension systems and multiple axles handle the stress of commercial loads. These components are expensive to replace. Insurance covers damage to air springs, dampers, axles, bearings, and suspension connections.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tie-Down and Load Securing Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbeds have built-in tie-down points, rings, and securing systems to safely transport loads. Insurance covers damage to these securing systems from impacts or wear. Some policies may exclude normal wear but cover accidental damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and Lighting Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailers have robust electrical systems for lights, backup alarms, and monitoring. Insurance covers damage to wiring, connections, and electrical components when damaged by accidents or weather.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage During Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen, especially when towing heavy loads on busy roads. If your flatbed is hit, you collide with an obstacle, or accident damage occurs, comprehensive coverage protects you. This includes damage from overturning or jackknifing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Work Site Security</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbeds parked at work sites or storage facilities are targets for equipment theft. Comprehensive coverage protects against theft of the entire trailer or securing equipment, tools, and materials loaded on the flatbed.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Commercial Flatbed Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Declaring Commercial Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                You must declare your flatbed for commercial or trade use. Using a personal policy for business purposes voids coverage. Commercial policies are rated for regular business use and have appropriate terms for work site operations.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Load Types and Weight Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare the types of loads you typically carry and your trailer's weight rating. Overloading beyond the trailer's capacity may void insurance. If you regularly exceed certain weight limits, your policy rating changes accordingly.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing Vehicle Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your tow vehicle must be suitable for your flatbed and loads. Using an undersized or unsuitable vehicle may void coverage. Ensure your truck or tow vehicle is properly maintained and rated for your typical loads.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Regular Maintenance and Inspection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailers must be well-maintained. Regular brake maintenance, electrical inspection, and structural checks are essential. Insurers may deny claims if poor maintenance contributed to damage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Commercial Flatbed Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers commercial flatbed policies tailored to construction and trade use. They understand commercial operations and provide reliable coverage for heavy-duty work.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides commercial trailer insurance with 24/7 claims support ideal for businesses. Their commercial expertise and reliable handling make them a solid choice.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower offers competitive commercial trailer policies with flexible terms and good claims support for trade users and construction companies.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Flatbed Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Declare your business use and typical load types honestly</li>
                <li>Maintain your flatbed regularly with documented service history</li>
                <li>Use wheel clamps and couple locks when parked at work sites</li>
                <li>Park in secure, well-lit areas when possible</li>
                <li>Ensure your tow vehicle is suitable and properly maintained</li>
                <li>Don't overload beyond your trailer's rated capacity</li>
                <li>Keep records of major repairs and maintenance performed</li>
                <li>Review your policy annually to ensure coverage matches your operations</li>
                <li>Get competitive quotes from multiple insurers to ensure best pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Commercial Flatbed Protection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Commercial Flatbed</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Your flatbed is essential to your business. Don't operate without proper commercial insurance. Get comprehensive coverage designed for heavy-duty work and regular use.
                </p>
                <p className="text-lg text-slate-700">
                  Get a free quote today and compare commercial flatbed insurance from New Zealand's leading providers.
                </p>
              </div>
              <div>
                <QuoteForm mode="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Related Insurance Guides</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                    {guide.title}
                  </h3>
                  <span className="text-amber-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
}
