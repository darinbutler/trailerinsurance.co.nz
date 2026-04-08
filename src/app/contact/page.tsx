import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Contact TrailerInsurance.co.nz | Get a Free Quote',
  description: 'Contact our NZ trailer insurance brokers. Phone 09 885 9549, email hello@cover4you.co.nz, or fill out our quick quote form.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-700">Get in touch with our team for quotes, questions, or support. We're here to help.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                      <p className="mt-1 text-slate-700">
                        <a href="tel:098859549" className="text-amber-600 hover:text-amber-700 font-semibold">
                          09 885 9549
                        </a>
                      </p>
                      <p className="text-sm text-slate-600 mt-1">Mon-Fri, 8am-6pm NZST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                      <p className="mt-1">
                        <a href="mailto:hello@cover4you.co.nz" className="text-amber-600 hover:text-amber-700 font-semibold">
                          hello@cover4you.co.nz
                        </a>
                      </p>
                      <p className="text-sm text-slate-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Business Hours</h3>
                      <p className="mt-1 text-slate-700">Monday to Friday</p>
                      <p className="text-slate-700 font-semibold">8:00 AM - 6:00 PM NZST</p>
                      <p className="text-sm text-slate-600 mt-1">Closed weekends and public holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">What to Expect</h3>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Free, no-obligation quote comparison</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Access to 50+ NZ insurance providers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Expert advice from ICNZ brokers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>No hidden fees or charges</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Contact Us?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Get a Free Quote</h4>
                  <p className="text-slate-700 text-sm">Fill out our quick form and get personalized quotes from multiple providers within 24 hours.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Ask Questions</h4>
                  <p className="text-slate-700 text-sm">Not sure which coverage you need? Our brokers can explain your options and help you choose.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Get Support</h4>
                  <p className="text-slate-700 text-sm">Already have insurance? We can help with enquiries, comparisons, or switching providers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Quote Form */}
      <div className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <QuoteForm mode="full" />
      </div>
    </>
  );
}
