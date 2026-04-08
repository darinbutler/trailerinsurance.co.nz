'use client';

const testimonials = [
  {
    name: 'Dave H.',
    location: 'Tauranga',
    text: "Saved over $400 on my caravan insurance by comparing through this site. The broker they connected me with was fantastic — explained everything clearly and got me comprehensive cover I'm really happy with.",
    rating: 5,
  },
  {
    name: 'Sarah M.',
    location: 'Christchurch',
    text: "After our boat trailer was stolen from the driveway, we were so glad we'd taken out standalone trailer cover. The claim was handled quickly and we had a new trailer within weeks.",
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Auckland',
    text: "I didn't realise my car insurance only covered the trailer while it was attached. Getting dedicated trailer insurance gave me peace of mind knowing it's covered at the campsite too.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Real experiences from Kiwis who found the right trailer insurance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-slate-500 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
