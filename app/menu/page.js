import { Star } from 'lucide-react';

const fullMenu = [
  { id: 1, name: 'Special Shahi Paneer Thali', category: 'North Indian', price: '₹349', rating: '4.9', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Ghee Podi Masala Dosa', category: 'South Indian', price: '₹140', rating: '4.8', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Hyderabadi Dum Biryani', category: 'Biryani', price: '₹380', rating: '5.0', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Old Delhi Butter Chicken', category: 'North Indian', price: '₹420', rating: '4.7', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Kesari Shahi Tukda', category: 'Desserts', price: '₹160', rating: '5.0', img: 'https://img-global.cpcdn.com/recipes/4ed336892352d624/680x482cq70/kesari-shahi-tukda-recipe-main-photo.jpg' },
  { id: 6, name: 'Tandoori Paneer Tikka', category: 'Starters', price: '₹260', rating: '4.6', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80' },
];

export default function MenuPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">The Royal Menu</h1>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">An extraordinary compilation of heritage flavours curated across regional micro-cuisines.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {fullMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-amber-100 flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative bg-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
                <span className="absolute bottom-3 right-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">{item.category}</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start gap-2 mb-4">
                  <h3 className="font-bold text-base sm:text-lg text-brand-dark leading-tight">{item.name}</h3>
                  <div className="flex items-center text-brand-accent gap-0.5 text-xs sm:text-sm font-bold flex-shrink-0">
                    <Star size={14} fill="currentColor"/> {item.rating}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg sm:text-xl font-extrabold text-brand-primary">{item.price}</span>
                  <button className="bg-brand-dark text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-brand-primary transition duration-150">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}