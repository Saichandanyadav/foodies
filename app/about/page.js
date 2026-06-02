import { ShieldCheck, Award } from 'lucide-react';

const chefs = [
  { name: 'Chef Ranveer Kapoor', role: 'Grand Master Chef', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80' },
  { name: 'Chef Meenakshi Iyer', role: 'Head of Regional Flavours', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=400&q=80' },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Our Legacy</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">Serving Pure Culinary Royal Heritage Since 1998</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Rooted in the rich food subcultures of India, foodies presents legacy culinary art. From hand-pounded masalas to classical open-fire tandoor dynamics, we bring old traditions to modern setups.
          </p>
          <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 text-brand-primary rounded-xl flex-shrink-0"><ShieldCheck size={22}/></div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-brand-dark">100% Shudh Desi Ingredients</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Pure A2 cow ghee and cold-pressed organic master oils.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 text-brand-accent rounded-xl flex-shrink-0"><Award size={22}/></div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-brand-dark">Generational Recipe Masters</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Chefs possessing legacy tracking credentials from royal kitchens.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-0">
          <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover" alt="Indian Kitchen Spices Processing"/>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-t border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">The Culinary Masters</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-12 md:mb-16">Our Taste Curators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {chefs.map((chef, idx) => (
              <div key={idx} className="bg-brand-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="h-72 sm:h-80 overflow-hidden">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark">{chef.name}</h3>
                  <p className="text-brand-primary text-xs sm:text-sm font-semibold mt-1">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}