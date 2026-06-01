import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const packages = [
  { name: 'Shahi Wedding Feast', price: '₹1,200 / Plate', features: ['Live Tandoor Counters', '56-Item Buffet Display', 'Generational Halwai Setup', 'Traditional Welcome Drinks'] },
  { name: 'Corporate High-Tea', price: '₹450 / Plate', features: ['Premium Chaat Counters', 'Assorted Indian Mithai', 'Live Filter Coffee & Chai', 'Professional Server Staff'] },
  { name: 'Festive Family Puja', price: '₹750 / Plate', features: ['100% Satvik Clean Kitchen', 'Traditional Brass Presentation', 'Traditional Seating Service', 'Eco Friendly Crockery Options'] }
];

export default function CateringPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Grand Celebrations</p>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark">Royal Indian Catering</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-2">{pkg.name}</h3>
                <span className="text-2xl font-black text-brand-primary block mb-6">{pkg.price}</span>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm sm:text-base text-gray-600 font-medium">
                      <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-8 block text-center w-full py-3 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm transition">
                Inquire Rates
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}