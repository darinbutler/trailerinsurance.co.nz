'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Car, Shield, AlertTriangle, Zap, CheckCircle2, TrendingUp, Lock, Home } from 'lucide-react';

export default function CarTrailerInsurancePage() {
  const benefits = [
    {
      icon: Car,
      title: 'Car Carrier Trailer Protection',
      description: 'Specialized coverage for enclosed and open car carrier trailers designed for safe vehicle transport and storage.',
    },
    {
      icon: Shield,
      title: 'Damage and Accidents',
      description: 'Protection against collision damage, impacts, and accidents while transporting vehicles or your carriers equipment.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft and Vandalism Coverage',
      description: 'Comprehensive cover against theft of your car carrier trailer and damage from vandalism at storage or work sites.',
    },
    {
      icon: Home,
      title: 'Structural Protection',
      description: 'Coverage for the frame, deck, ramps, chains, and all components essential to safe vehicle transport.',
    },
    {
      icon: Zap,
      title: 'Brakes and Towing Systems',
      description: 'Protection for heavy-duty braking systems, hydraulic controls, lights, and electrical components for safe towing.',
    },
    {
      icon: TrendingUp,
      title: 'Business and Personal Use',
      description: 'Insurance flexible enough for occasional use or regular vehicle transport business operations.',
    },
  ];

  const relatedGuides = [
    { title: 'Enclosed Trailer Insurance', href: '/insurance/enclosed-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Cheap Trailer Insurance', href: '/insurance/cheap-trailer-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Car Trailer Insurance NZ',
            description: 'Car carrier and transporter trailer insurance in New Zealand protecting against damage, theft, and accidents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/car-trailer-insurance-nz',
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
                <Car className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Vehicle Transport Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Car Trailer Insurance NZ
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Safe Coverage for Vehicle Transport
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Specialist insurance for car carrier trailers and vehicle transporters. Comprehensive coverage for enclosed and open carriers protecting your investment and business.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Car Trailers Need Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car carrier trailers are specialized equipment designed for safe vehicle transport. Whether you operate a vehicle transport business, occasionally move cars between locations, or auction vehicles, your car trailer is a valuable asset requiring dedicated insurance protection. Standard personal trailer policies don't adequately cover the unique risks and requirements of vehicle transport equipment.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers face significant stresses: the weight of loaded vehicles, hydraulic ramp systems, expensive tie-down and restraint equipment, and the liability risks of transporting others' vehicles. They're often parked at auctions, dealerships, or storage yards—locations with higher theft risk. They require specialized knowledge to repair after damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance providers AA Insurance, AMI, State, Tower, and others offer car trailer policies designed for vehicle transport operations. Some specialize in dealership and auction support, understanding the unique risks of vehicle transport businesses.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Car Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Carrier Frame and Structure</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance covers damage to the trailer frame, deck, side rails, and structural components. Whether you have an enclosed car trailer or an open carrier, the frame and structure are protected against accident damage, impacts, and weather damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Hydraulic Ramp Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers feature hydraulic or mechanical ramp systems for loading and unloading vehicles. These expensive systems are critical to carrier functionality. Insurance covers damage to ramps, hydraulic cylinders, motors, and related equipment from accidents or impacts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tie-Down and Restraint Equipment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Proper vehicle restraint is essential for safe transport. Insurance covers damage to chains, straps, anchor points, and attachment rings from accidents or wear. Quality tie-down equipment is expensive, making this coverage valuable.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brake and Suspension Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty brakes and suspension must handle the weight of loaded vehicles. Insurance covers damage to air brakes, hydraulic systems, suspension springs, axles, and bearings from accidents or impacts. Functioning brakes are essential for safety.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Lighting and Electrical Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers have extensive electrical systems for lights, backup alarms, and monitoring. Insurance covers damage to wiring, light clusters, connections, and electrical components from accidents or weather events.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Enclosed Bodywork (for Enclosed Carriers)</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers feature aluminum or steel bodywork, windows, doors, and insulation. Insurance covers damage to these components from accidents, impacts, or weather. Repairing or replacing bodywork can be expensive.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage While Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen while towing. If your car trailer is involved in a collision, hits an obstacle, or damage occurs while transporting vehicles, comprehensive coverage protects you. This includes damage from overturning or jackknifing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers parked at auctions, dealerships, or storage yards are targets for thieves. Comprehensive coverage protects against theft of the entire trailer or theft of valuable equipment like ramps, chains, or lights. Vandalism damage is also covered.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Car Trailer Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Business vs Personal Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare your intended use. If you operate a vehicle transport business or transport vehicles for sale, you need commercial coverage. Personal occasional use has different requirements. Using the wrong policy type voids coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Enclosed vs Open Carriers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers have different risks and repair requirements than open carriers. Make sure your policy is specific to your carrier type. Enclosed trailers may have different premiums and coverage options.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Vehicle Load Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare the maximum vehicle values you typically transport. Some policies have limits on vehicle value or total load weight. Exceeding these limits may void coverage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Car Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers car trailer policies for vehicle transport businesses and private transporters. They understand the specialized needs of car carriers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides commercial-grade car trailer insurance with 24/7 claims support, ideal for vehicle transport businesses and dealers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower offers competitive car trailer insurance with flexible terms for business and personal vehicle transport use.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Car Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Declare your business use and typical vehicle values honestly</li>
                <li>Use wheel clamps and coupling locks when parked</li>
                <li>Park in secure, monitored locations when possible</li>
                <li>Maintain your ramps, tie-downs, and equipment regularly</li>
                <li>Keep your brakes and suspension well-serviced</li>
                <li>Don't exceed your trailer's weight or vehicle value limits</li>
                <li>Ensure your tow vehicle is suitable for your loaded trailer weight</li>
                <li>Document your trailer's condition with photos</li>
                <li>Review your policy annually to ensure coverage matches your needs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Car Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Car Carrier Investment</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Your car trailer is essential to your business or transport needs. Get comprehensive insurance that covers damage, theft, and accidents while protecting your bottom line.
                </p>
                <p className="text-lg text-slate-700">
                  Get a free quote today and compare car trailer insurance from New Zealand's leading providers.
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
