import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Food Critic, Times of India', comment: 'The Hyderabadi Dum Biryani here matches traditional standards seamlessly. True slow cooked perfection with premium aromatic metrics.', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { name: 'Ananya Sharma', role: 'Zomato Elite Guide', comment: 'Spectacular hospitality. The Ghee Podi Dosa texture transport loop feels remarkably authentic. High-level cleanliness benchmark.', rating: 5, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
  { name: 'Vikram Malhotra', role: 'Verified Connoisseur', comment: 'Amazing tandoori variations. The spices are robust yet well balanced. Standard booking setup workflow operates brilliantly.', rating: 5, img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&q=80' },
];

export default function ReviewsPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Our Patron Feedback</p>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark">What Foodies Say</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-amber-100 flex flex-col justify-between relative group hover:shadow-md transition">
              <div className="absolute top-6 right-6 sm:right-8 text-red-100 group-hover:text-brand-primary transition duration-300">
                <Quote size={36} fill="currentColor"/>
              </div>
              <div>
                <div className="flex gap-1 text-brand-accent mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor"/>
                  ))}
                </div>
                <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed mb-6">"{t.comment}"</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                <img src={t.img} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}