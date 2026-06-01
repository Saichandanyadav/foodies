const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1771245914837-bdb2a51c90d3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0', title: 'Royal Heritage Interior' },
  { src: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', title: 'Traditional Tandoor Setup' },
  { src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', title: 'Grand Thali Preparation' },
  { src: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80', title: 'Courtyard Seating Arrangement' },
  { src: 'https://plus.unsplash.com/premium_photo-1661313610483-d501730ce142?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0', title: 'Sizzling Hot Starters' },
  { src: 'https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0', title: 'Authentic Indian Desserts' }
];

export default function GalleryPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Visual Tour</p>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark">Vibe of foodies</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm group bg-gray-200 h-64 sm:h-72 md:h-80">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}