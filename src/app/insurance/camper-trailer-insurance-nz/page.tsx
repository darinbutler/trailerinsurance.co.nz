'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Tent, Home, AlertTriangle, Zap, MapPin, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export default function CamperTrailerInsurancePage() {
  const benefits = [
    {
      icon: Tent,
      title: 'Pop-Top and Camper Coverage',
      description: 'Specialized insurance for pop-top campers, expandable trailers, and lightweight camping rigs with all their unique features.',
    },
    {
      icon: Home,
      title: 'Onboard Equipment Protection',
      description: 'Coverage for camping equipment, kitchen systems, gas appliances, water systems, and awnings integrated into your camper.',
    },
    {
      icon: Shield,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage from accidents, and emergency repairs while traveling.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Vandalism Coverage',
      description: 'Comprehensive cover against theft of entire campers and vandalism at campsites, carparks, or storage locations.',
    },
    {
      icon: Zap,
      title: 'Electrical and Gas Systems',
      description: 'Coverage for 12V electrical systems, gas appliances, water heaters, and propane systems critical to camping comfort.',
    },
    {
      icon: MapPin,
      title: 'Adventure Travel Protection',
      description: 'Insurance designed for frequent travelers covering your adventures across New Zealand from beaches to mountains.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Box Trailer Insurance', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Camper Trailer Insurance NZ',
            description: 'Comprehensive camper and pop-top trailer insurance in New Zealand with specialized coverage for adventure travelers',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/camper-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Tent className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Adventure Travel Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Camper Trailer Insurance NZ
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protect Your Adventure on the Road
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Comprehensive insurance for pop-top campers and lightweight camping trailers. Whether you're exploring NZ's coastlines or backcountry, we've got you covered 24/7.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Camper Trailer Insurance Matters</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Pop-top campers and lightweight camping trailers offer flexibility and freedom for New Zealand adventurers. Unlike traditional caravans, these rigs are designed for easy towing, off-the-beaten-path camping, and remote exploration. However, their lighter construction and integrated systems make them uniquely vulnerable to damage and theft.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Camper trailers frequently travel to remote locations, campgrounds, and off-road sites where security is limited. Their smaller size makes them easier targets for thieves. Their pop-top or expandable designs contain multiple mechanical and electrical components that require specialized knowledge to repair after damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Quality camper trailer insurance from providers like AA Insurance, AMI, State, Tower, and others provides protection specifically designed for adventure travelers. These policies understand the unique risks of lightweight trailers and remote travel.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Camper Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Pop-Top and Expandable Mechanisms</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The pop-top or expandable roof is the most complex part of your camper. Insurance covers damage to hydraulic or mechanical systems that raise and lower the roof, including the canvas or fibreglass panels, frame components, and sealing systems. If hydraulic rams fail or the canvas tears, insurance covers repairs or replacement.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and 12V Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern camper trailers rely on 12V electrical systems powering lights, charging, fridges, water pumps, and monitoring systems. Insurance covers damage to batteries, solar panels, inverters, and wiring from accidents or weather events. Proper functioning of these systems is essential for comfortable camping.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Gas Appliances and Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many camper trailers feature gas cooktops, water heaters, and heaters. Insurance covers damage to gas appliances and piping from accidents, though may exclude normal wear. Some policies include optional mechanical breakdown cover for appliances.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Water and Plumbing Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your camper's water tanks, pumps, lines, and fixtures are vulnerable to damage from impacts, freezing, or accidents. Insurance covers damage to these systems when caused by insured events, helping you access clean water for cooking and hygiene while traveling.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Awnings and Canvas</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many camper trailers include awnings or canvas extensions. Insurance covers damage from wind, storms, or accidental tearing. Given that awnings are expensive to replace, this coverage is valuable.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage While Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen on New Zealand roads. If your camper trailer is involved in a collision, swerve to avoid an obstacle, or impacts something while reversing, accidental damage cover protects you. This includes damage from overturning.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Camper trailers left at campsites or remote locations can be targets for thieves. Insurance covers theft of the entire unit or parts like solar panels, gas bottles, or equipment. Vandalism damage is also covered.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Contents and Equipment Coverage</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Standard camper trailer insurance covers the structure and built-in equipment. Personal camping gear—sleeping bags, cooking equipment, clothing, and valuables—usually need separate contents cover. Given the value of camping equipment, adding contents protection is recommended.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Camper Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers comprehensive camper trailer policies with flexible excess options and good claims support. Their online quote system makes comparisons easy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI specializes in recreational vehicle insurance with policies designed for adventure travelers. They offer multi-policy discounts and excellent customer service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides competitive camper trailer insurance with 24/7 claims support and a nationwide network of repairers familiar with pop-top mechanisms and systems.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Camper Trailer Insurance Tips</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Use wheel clamps and coupling locks when parked at campgrounds</li>
                <li>Park in well-lit areas and choose secure campsites when possible</li>
                <li>Keep your pop-top mechanism well-maintained—poor maintenance can affect claims</li>
                <li>Declare all your adventure travel plans to your insurer</li>
                <li>Take photos of your camper before the insurance year starts</li>
                <li>Consider contents cover for your camping equipment and valuables</li>
                <li>Review your policy annually to ensure coverage matches your needs</li>
                <li>Keep your camper properly ventilated to prevent mold and moisture damage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Camper Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Camper Adventure</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't let unexpected damage derail your NZ adventure. Get comprehensive camper trailer insurance that covers your pop-top rig and adventure travel lifestyle.
                </p>
                <p className="text-lg text-slate-700">
                  Get a free quote today and compare coverage from New Zealand's top insurers specializing in camper and pop-top protection.
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
