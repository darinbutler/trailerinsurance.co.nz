'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Package, Shield, AlertTriangle, Zap, CheckCircle2, TrendingUp, Lock, Home } from 'lucide-react';

export default function BoxTrailerInsurancePage() {
  const benefits = [
    {
      icon: Package,
      title: 'Utility Box Trailer Coverage',
      description: 'Full protection for standard utility trailers, enclosed boxes, lockable compartments, and structural elements.',
    },
    {
      icon: Shield,
      title: 'Theft and Vandalism Protection',
      description: 'Coverage against theft of the entire trailer and damage from vandalism while parked at work sites or storage.',
    },
    {
      icon: AlertTriangle,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage from accidents, and emergency roadside repairs.',
    },
    {
      icon: Home,
      title: 'Equipment and Tools Coverage',
      description: 'Optional contents insurance for tools, equipment, and materials stored inside your box trailer.',
    },
    {
      icon: Zap,
      title: 'Electrical and Brake Systems',
      description: 'Coverage for lights, wiring, brake systems, and other electrical components critical to safe towing.',
    },
    {
      icon: TrendingUp,
      title: 'Commercial and Personal Use',
      description: 'Insurance flexible enough for weekend DIY projects or regular business/trade use.',
    },
  ];

  const relatedGuides = [
    { title: 'Flatbed Trailer Insurance', href: '/insurance/flatbed-trailer-insurance-nz' },
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
            name: 'Box Trailer Insurance NZ',
            description: 'Comprehensive box and utility trailer insurance in New Zealand protecting your equipment and investment',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/box-trailer-insurance-nz',
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
                <Package className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Secure Storage Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Box Trailer Insurance NZ
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Coverage for Your Utility and Storage Trailers
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Comprehensive insurance for box trailers protecting your equipment, tools, and investment. From DIY projects to trade use, we cover your utility trailer needs.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Box Trailers Need Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Box trailers are essential for tradies, business owners, and DIY enthusiasts across New Zealand. Whether you use your box trailer for work equipment, moving tools between job sites, or hauling materials for home projects, it represents a valuable asset that deserves protection.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Box trailers are frequently left unattended at work sites, business premises, or parking areas. They're vulnerable to theft, break-ins, and vandalism. Your standard car insurance doesn't cover your trailer when it's unhitched and parked, leaving you exposed. Specialist box trailer insurance fills this gap with comprehensive coverage designed for working trailers.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance providers AA Insurance, AMI, State, Tower, and others all offer box trailer policies with flexibility for different usage patterns and coverage needs. Whether you need basic coverage or comprehensive protection with contents insurance, there's an option for your situation.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Box Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Structure and Body</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance covers damage to the box trailer chassis, frame, walls, roof, floor, and doors. If your box trailer is hit by another vehicle, you back into a bollard, or accident damage occurs while towing, your insurance covers structural repairs or replacement.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Locking Systems and Security</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern box trailers feature quality locks, hinges, and security systems. Insurance covers damage to these when caused by attempted break-ins or accident damage. Strengthening security with locks, reinforced doors, or alarm systems may qualify you for discounts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brakes and Suspension</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Box trailers have brake systems and suspension components that take stress from loaded towing. Insurance covers damage to brakes, suspension springs, axles, and bearings when damaged by accidents or impacts. A functioning brake system is essential for safe towing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and Lighting</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Quality box trailer insurance covers damage to lights, wiring, and electrical connections essential for road safety. If impact damage breaks your lights or corrodes electrical components, insurance covers repairs or replacement.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Box trailers left at work sites or storage yards are targets for thieves. Comprehensive insurance covers theft of the entire unit or break-ins where thieves steal tools or equipment inside. Use wheel clamps and coupling locks to qualify for theft cover.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Vandalism and Break-in Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Vandalism damage—broken locks, damaged doors, forced windows—is covered by comprehensive policies. If someone attempts to break in and damages your box trailer, you're protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Insurance Add-on</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your box trailer insurance typically covers the structure, but tools, equipment, and materials inside often need separate contents coverage. Optional contents insurance protects valuable equipment, power tools, materials, and other items you store inside.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Box Trailer Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Commercial vs Personal Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare your intended use. If you use your box trailer for business or trade purposes, you need commercial-rated coverage. Personal use trailers have different premiums. Using commercial equipment with personal insurance may void claims.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Storage Location</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Where you park your box trailer affects your insurance premium and coverage. Secure storage (locked compound, garage) commands lower premiums than street parking or exposed work sites. Be honest about where your trailer is typically parked.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To qualify for comprehensive cover, you'll typically need to use approved wheel clamps and coupling locks. Some insurers offer discounts for alarm systems or tracking devices.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Box Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers competitive box trailer policies with flexible excess options. Their online system makes getting quotes straightforward, and they support both personal and commercial use.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI provides box trailer insurance with optional contents cover for tools and equipment. They offer multi-policy discounts and good claims handling for trade users.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State offers competitive box trailer insurance with 24/7 claims support. They understand trade and commercial users and provide reliable coverage.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Best Box Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Use approved wheel clamps to prevent theft and qualify for better rates</li>
                <li>Install a quality coupling lock for additional security</li>
                <li>Park in secure locations whenever possible (locked compound, garage, monitored parking)</li>
                <li>Consider an alarm system or GPS tracker for additional protection and discounts</li>
                <li>Declare your actual usage honestly—commercial trailers need commercial coverage</li>
                <li>Get optional contents insurance if you carry valuable tools or equipment</li>
                <li>Keep your box trailer well-maintained—poor maintenance can affect claims</li>
                <li>Take photos of your trailer and document its condition annually</li>
                <li>Compare quotes from multiple insurers to find the best value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Box Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Box Trailer Investment</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't risk your valuable box trailer and equipment. Get comprehensive insurance that covers your trailer against damage, theft, and accidents.
                </p>
                <p className="text-lg text-slate-700">
                  Get a free quote today and compare coverage from New Zealand's leading insurers. Find the perfect policy for your needs and budget.
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
