'use client';

import { CheckCircle, XCircle } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';


const providers = [
  {
    name: 'AA Insurance',
    domain: 'aa.co.nz',
    description: 'Large NZ insurer',
    type: 'Trailer add-on to car policy',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: false,
      roadsideAssist: true,
      onlineQuotes: true,
    },
  },
  {
    name: 'AMI Insurance',
    domain: 'ami.co.nz',
    description: 'Caravan & trailer specialist',
    type: 'Standalone policies',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: true,
      roadsideAssist: true,
      onlineQuotes: true,
    },
  },
  {
    name: 'State Insurance',
    domain: 'state.co.nz',
    description: 'IAG group member',
    type: 'Comprehensive trailer cover',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: true,
      roadsideAssist: true,
      onlineQuotes: true,
    },
  },
  {
    name: 'Tower Insurance',
    domain: 'tower.co.nz',
    description: 'Online-focused insurer',
    type: 'Competitive pricing',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: false,
      roadsideAssist: false,
      onlineQuotes: true,
    },
  },
  {
    name: 'Mariner Marine',
    domain: 'mariner.co.nz',
    description: 'Specialist provider',
    type: 'Marine & boat trailer insurance',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: true,
      roadsideAssist: true,
      onlineQuotes: false,
    },
  },
  {
    name: 'Cove Insurance',
    domain: 'coveinsurance.co.nz',
    description: 'Digital-first insurer',
    type: 'Modern online platform',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      contentsCover: true,
      roadsideAssist: true,
      onlineQuotes: true,
    },
  },
];

const featureLabels = {
  comprehensive: 'Comprehensive Cover',
  thirdParty: 'Third-Party Liability',
  agreedValue: 'Agreed Value Option',
  contentsCover: 'Contents Cover',
  roadsideAssist: 'Roadside Assistance',
  onlineQuotes: 'Online Quotes',
};

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Compare Trailer Insurance Providers</h1>
          <p className="text-xl text-slate-200">See how the top 6 NZ insurers stack up on coverage, features, and value.</p>
        </div>
      </section>

      {/* Comparison Grid Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Feature Comparison</h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {providers.map((provider) => (
                    <th key={provider.name} className="px-6 py-4 text-center font-semibold">
                      <div className="font-bold text-base">{provider.name}</div>
                      <div className="text-xs opacity-90 font-normal mt-1">{provider.type}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label], i) => (
                  <tr key={key} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{label}</td>
                    {providers.map((provider) => (
                      <td key={provider.name} className="px-6 py-4 text-center">
                        {provider.features[key as keyof typeof provider.features] ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-slate-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {providers.map((provider) => (
              <div key={provider.name} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{provider.name}</h3>
                  <p className="text-sm text-slate-600">{provider.type}</p>
                </div>

                <div className="space-y-3">
                  {Object.entries(featureLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center justify-between py-2 border-t border-slate-100">
                      <span className="text-sm text-slate-700">{label}</span>
                      {provider.features[key as keyof typeof provider.features] ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Details Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Provider Profiles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {providers.map((provider) => (
              <div key={provider.name} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{provider.name}</h3>
                <p className="text-slate-600 font-semibold mb-4">{provider.description}</p>
                <p className="text-slate-700 mb-6">{provider.type}</p>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200">
                  {Object.entries(provider.features).map(([key, included]) =>
                    included ? (
                      <span key={key} className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700">
                        ✓ {featureLabels[key as keyof typeof featureLabels]}
                      </span>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Summary */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Choose</h2>

          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Best for Specialists</h3>
              <p className="text-slate-700">AMI Insurance and Mariner Marine specialize in caravans, boat trailers, and marine craft — ideal if you want expert advice specific to your trailer type.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Best for Online Quotes</h3>
              <p className="text-slate-700">Tower Insurance and Cove Insurance offer fast, digital-first quote processes — perfect if you want instant comparisons and online management.</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Best for Comprehensive Services</h3>
              <p className="text-slate-700">State Insurance and Cove Insurance offer the widest range of add-ons including contents cover and roadside assistance.</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Best for Brand Recognition</h3>
              <p className="text-slate-700">AA Insurance and Tower Insurance are established, household names with strong NZ presence and customer service reputations.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-700 text-center">
              <span className="font-semibold text-slate-900">Don't just look at the comparison table.</span> Each provider has different excess options, pricing structures, and customer service levels. Our brokers can get quotes from all of these providers and more, helping you find the best fit for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Quotes from All These Providers</h2>
            <p className="text-lg text-slate-700 mb-8">
              Rather than comparing on your own, let our brokers do the work. Fill out one quote form and get personalized quotes from multiple providers including all of these and more.
            </p>
            <ul className="space-y-4">
              {[
                'Quotes from 50+ NZ insurance providers',
                'Personalized recommendations based on your needs',
                'Expert broker advice at no extra cost',
                'Response within 24 hours',
                'No obligation to purchase',
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
        title="Ready to Compare and Get Quotes?"
        description="Our brokers will match you with the best providers for your trailer."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
