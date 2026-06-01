import Link from 'next/link';
import { ArrowRight, Clock, Star, ShieldCheck, Flame, Award, Heart, Sparkles, Utensils, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-brand-light">
      <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-brand-accent text-xs sm:text-sm font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles size={16} className="animate-spin text-brand-accent" /> 
              Authentic Indian Culinary Heritage
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-brand-dark leading-none mb-6 tracking-tight">
              A Royal Feast <br />
              Of Pure Grand <br />
              <span className="text-brand-primary relative inline-block">
                Tradition
                <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-accent/30 -z-10 rounded"></span>
              </span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Immerse yourself in a generational dining experience crafted by royal legacy chefs. We combine slow-cooking dynamics, house-ground secret masalas, and unmatched Vedic hospitality to serve meals that feed your soul.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
              <Link href="/menu" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-brand-dark transition duration-300 shadow-xl shadow-red-200 hover:shadow-gray-300 transform hover:-translate-y-0.5">
                Explore Our Menu <ArrowRight size={20} />
              </Link>
              <Link href="/book" className="w-full sm:w-auto flex items-center justify-center bg-white text-brand-dark border-2 border-gray-200 px-8 py-4 rounded-2xl font-black text-base hover:border-brand-primary hover:text-brand-primary transition duration-300 transform hover:-translate-y-0.5 shadow-sm">
                Book A Royal Table
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-amber-200 max-w-md sm:max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 text-sm text-gray-700 font-bold bg-white/60 p-3 rounded-xl border border-amber-100">
                <Clock className="text-brand-primary flex-shrink-0" size={22} />
                <div>
                  <p className="leading-none">Express Hot</p>
                  <span className="text-xs text-gray-400 font-medium">Delivery Loop</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-bold bg-white/60 p-3 rounded-xl border border-amber-100">
                <Star className="text-brand-accent flex-shrink-0" size={22} fill="currentColor" />
                <div>
                  <p className="leading-none">4.9 Star Rating</p>
                  <span className="text-xs text-gray-400 font-medium">Over 15k Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-bold bg-white/60 p-3 rounded-xl border border-amber-100">
                <ShieldCheck className="text-emerald-600 flex-shrink-0" size={22} />
                <div>
                  <p className="leading-none">100% Shudh</p>
                  <span className="text-xs text-gray-400 font-medium">Pure Desi Ghee</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center order-1 lg:order-2 px-4">
            <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-brand-accent/20 to-brand-primary/10 absolute -z-10 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-accent rounded-3xl rotate-3 scale-95 opacity-20 group-hover:rotate-1 group-hover:scale-100 transition duration-500 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80" 
                alt="Royal Indian Thali Feast" 
                className="w-full max-w-[480px] object-cover h-[350px] sm:h-[450px] md:h-[520px] rounded-3xl shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition duration-500 border-4 border-white"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 hidden sm:flex items-center gap-3 animate-bounce">
                <div className="p-2 bg-red-100 rounded-xl text-brand-primary">
                  <Flame size={24} fill="currentColor" />
                </div>
                <div>
                  <h5 className="font-black text-brand-dark text-sm">Slow Cooked</h5>
                  <p className="text-xs text-gray-400 font-semibold">8+ Hours Dum Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 border-t border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-primary font-black uppercase tracking-widest text-xs">Our Foundation Pillars</span>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark mt-2">What Makes Our Kitchen Royal?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-2xl border border-amber-100/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-brand-primary mb-6">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Hand-Pounded Spices</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We never use commercial pre-packaged powders. All our masalas are stone-ground daily in-house to retain essential medicinal oils and raw organic flavor depth.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border border-amber-100/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-brand-accent mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Generational Master Chefs</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Our kitchen is directed by legacy khansamas whose lineages served regional royal families, preserving secret blend variations hidden from the public domain.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border border-amber-100/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Pure Desi Cow Ghee</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                From luxury rich gravies to premium gold desserts, every dish is slow-simmered exclusively in premium quality A2 Vedic cow ghee to provide rich wellness profiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" 
              className="rounded-2xl h-48 sm:h-64 w-full object-cover shadow-md transform hover:scale-102 transition duration-300" 
              alt="Culinary prep" 
            />
            <img 
              src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80" 
              className="rounded-2xl h-48 sm:h-64 w-full object-cover shadow-md mt-6 transform hover:scale-102 transition duration-300" 
              alt="Tandoor process" 
            />
          </div>
          
          <div className="text-center lg:text-left">
            <span className="text-brand-primary font-black uppercase tracking-widest text-xs">Unmatched Dining Ambience</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-2 mb-6 leading-tight">
              A Symphony of Sight, Sound, & Royal Taste
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              We do not just serve food; we build core memories. Our dining space mirrors ancient stepwells and imperial courts, complete with soothing live sitar ragas and heavy brass service setups that recreate luxury heritage hospitality flawlessly.
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-amber-100 rounded-lg text-brand-accent mt-0.5">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-base">Family Friendly</h4>
                  <p className="text-xs text-gray-500 font-semibold">Grand custom seating formats</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-red-100 rounded-lg text-brand-primary mt-0.5">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-base">Elite Catering</h4>
                  <p className="text-xs text-gray-500 font-semibold">Royal setups at your venues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}