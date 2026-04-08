import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Trailer Insurance Coverage Guide | TrailerInsurance.co.nz',
  description: 'Complete guide to trailer insurance coverage in NZ. Understand what\'s covered, compare coverage levels, and find the right policy for your trailer.',
};

const coverageTypes = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    description: 'Full protection for accidental damage, theft, fire, storm damage, and third-party liability.',
    icon: '🛡️',
  },
  {
    slug: 'third-party-liability',
    title: 'Third-Party Liability',
    description: 'Cover for damage or injury to others caused by your trailer. Essential minimum cover.',
    icon: '⚖️',
  },
  {
    slug: 'agreed-value',
    title: 'Agreed Value',
    description: 'Lock in your trailer\'s value upfront. Get the agreed amount if your trailer is written off.',
    icon: '💰',
  },
  {
    slug: 'contents-cover',
    title: 'Contents Cover',
    description: 'Optional add-on for caravans. Covers camping gear, appliances, and personal items inside.',
    icon: '📦',
  },
  {
    slug: 'towing-storage',
    title: 'Towing & Storage',
    description: 'Cover for emergency towing costs and storage fees after an accident or breakdown.',
    icon: '🔗',
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    description: 'For business trailers. Covers goods in transit, public liability, and trade-related risks.',
    icon: '🚚',
  },
];

const coverageComparison = [
  { feature: 'Accidental Damage', basic: true, standard: true, comprehensive: true },
  { feature: 'Theft Protection', basic: false, standard: true, comprehensive: true },
  { feature: 'Fire & Natural Disaster', basic: false, standard: true, comprehensive: true },
  { feature: 'Storm Damage', basic: false, standard: true, comprehensive: true },
  { feature: 'Third-Party Liability', basic: true, standard: true, comprehensive: true },
  { feature: 'Agreed Value Option', basic: false, standard: true, comprehensive: true },
  { feature: 'Contents Cover', basic: false, standard: false, comprehensive: true },
  { feature: 'Roadside Assistance', basic: false, standard: false, comprehensive: true },
  { feature: 'Emergency Accommodation', basic: false, standard: false, comprehensive: true },
  { feature: 'Towing & Storage', basic: false, standard: true, comprehensive: true },
];

const whatsCovered = [
  'Accidental damage from collisions and impact',
  'Theft and attempted theft',
  'Fire damage',
  'Storm, hail, and weather-related damage',
  'Flood damage (depending on location)',
  'Vandalism and malicious damage',
  'Third-party liability up to $20 million',
  'Towing and recovery costs',
  'Emergency accommodation (if caravan becomes uninhabitable)',
];

const whatsNotCovered = [
  'Wear and tear or mechanical breakdown',
  'Damage while trailer is being used illegally',
  'Damage to contents (unless contents cover added)',
  'Damage due to lack of maintenance',
  'Damage from animal strikes (in some policies)',
  'Damage from defects in design or manufacture',
  'Financial losses unrelated to physical damage',
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Trailer Insurance Coverage Guide</h1>
          <p className="text-xl text-slate-700">Understand what trailer insurance covers and find the right policy for your needs.</p>
        </div>
      </section>

      {/* What Is Covered Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What Trailer Insurance Covers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Covered
              </h3>
              <ul className="space-y-3">
                {whatsCovered.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Not Covered
              </h3>
              <ul className="space-y-3">
                {whatsNotCovered.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-slate-700 mb-4">{type.description}</p>
                <div className="text-amber-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Comparison Table */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Level Comparison</h2>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Coverage Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Standard</th>
                  <th className="px-6 py-4 text-center font-semibold">Comprehensive</th>
                </tr>
              </thead>
              <tbody>
                {coverageComparison.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.basic ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.standard ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.comprehensive ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">Note:</span> Coverage levels and features vary between insurers. Some providers offer customizable policies that combine features from multiple levels. Always review the Product Disclosure Statement (PDS) for specific coverage details and exclusions.
            </p>
          </div>
        </div>
      </section>

      {/* Sidebar Quote Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Choosing the Right Coverage for Your Trailer</h2>
            <p className="text-lg text-slate-700 mb-8">
              The right coverage depends on your trailer's value, how you use it, and your budget. Consider these factors when choosing:
            </p>
            <ul className="space-y-4">
              {[
                'Your trailer\'s value and replacement cost',
                'Type of trailer and how frequently it\'s used',
                'Whether you prefer agreed value or market value',
                'Optional add-ons like contents or roadside assist',
                'Your comfort level with the excess amount',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Find the Right Coverage for Your Trailer"
        description="Get free quotes and expert advice from ICNZ registered brokers."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
