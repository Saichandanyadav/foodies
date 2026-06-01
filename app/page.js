import Hero from '@/components/Hero';
import Link from 'next/link';
import { Star } from 'lucide-react';

const featuredDishes = [
  { id: 1, name: 'Special Shahi Paneer Thali', price: '₹349', rating: '4.9', tag: 'Chef Special', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Old Delhi Butter Chicken', price: '₹420', rating: '4.8', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Hyderabadi Dum Biryani', price: '₹380', rating: '5.0', tag: 'Legendary', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Our Signature Recipes</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">Crowd Favourites</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-amber-100 group flex flex-col justify-between">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <span className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">{dish.tag}</span>
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-lg sm:text-xl text-brand-dark leading-snug">{dish.name}</h3>
                  <div className="flex items-center text-brand-accent gap-1 text-sm font-semibold flex-shrink-0">
                    <Star size={16} fill="currentColor"/> {dish.rating}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-amber-50">
                  <span className="text-xl sm:text-2xl font-black text-brand-primary">{dish.price}</span>
                  <button className="bg-brand-light hover:bg-brand-primary hover:text-white text-brand-dark font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/menu" className="inline-block border-2 border-brand-primary text-brand-primary font-bold px-8 py-3.5 rounded-xl hover:bg-brand-primary hover:text-white transition duration-200 w-full sm:w-auto">
            View Full Menu
          </Link>
        </div>
      </section>
    </>
  );
}