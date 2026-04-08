import { ShieldCheck, Heart, Users, Zap, MapPin, Clock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'About TrailerInsurance.co.nz | NZ Trailer Insurance',
  description: 'Learn about TrailerInsurance.co.nz. Connecting Kiwis with the right trailer insurance through ICNZ registered brokers, no fees, and 24-hour support.',
};

export default function AboutPage() {
  const trustSignals = [
    {
      icon: ShieldCheck,
      title: 'ICNZ Registered Brokers',
      description: 'Our partners are fully registered with Insurance Council of New Zealand',
    },
    {
      icon: Zap,
      title: 'No Broker Fees',
      description: 'Zero hidden charges. Get quotes and support at no extra cost.',
    },
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'We respond to all enquiries within 24 hours, guaranteed.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your needs come before everything. We listen, understand, and deliver solutions that work for you.',
    },
    {
      icon: Users,
      title: 'Built for Kiwis',
      description: 'We understand the NZ trailer landscape — from Auckland beach caravans to Southland station trucks.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Partnered with NZ brokers who know your region, your risks, and your options.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">About TrailerInsurance.co.nz</h1>
          <p className="text-xl text-slate-700 mb-8">Connecting Kiwis with the right trailer insurance through transparent, no-fee quotes and trusted broker partnerships.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: 'Trailers Insured', value: '10,000+' },
              { label: 'Partner Brokers', value: '50+' },
              { label: 'Kiwis Served', value: 'All Regions' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-700 text-lg mb-4">
                TrailerInsurance.co.nz was founded with a simple mission: make it easy for New Zealanders to find the right trailer insurance. We saw that too many Kiwis were either overpaying for cover they didn't need or driving uninsured because the process was confusing and time-consuming.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                We partnered with ICNZ-registered brokers across New Zealand to create a transparent, no-fee quote service. No hidden charges. No pushy sales tactics. Just straightforward comparisons and expert advice from professionals who know the NZ insurance landscape inside out.
              </p>
              <p className="text-slate-700 text-lg">
                Today, thousands of Kiwis trust us to help them protect their trailers. Whether you're towing a caravan up the West Coast or hauling a horse float to a weekend show, we're here to connect you with the best insurance for your needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 text-lg">
                To connect every Kiwi with accessible, transparent trailer insurance that protects their asset and their peace of mind — without unnecessary complexity or cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why You Can Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{signal.title}</h3>
                  </div>
                  <p className="text-slate-700">{signal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sidebar Quote Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Protect Your Trailer?</h2>
            <p className="text-lg text-slate-700 mb-8">
              Get free, no-obligation quotes from NZ's top trailer insurers. Our brokers will compare your options and help you find the best cover at the right price.
            </p>
            <ul className="space-y-4">
              {[
                'Compare 50+ NZ insurance providers in one place',
                'No broker fees — ever',
                'Response from a licensed broker within 24 hours',
                'All your trailer type options covered: caravans, boat trailers, horse floats, and more',
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
        title="Ready to Protect Your Trailer?"
        description="Get personalized quotes from NZ's top providers in just 2 minutes."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
