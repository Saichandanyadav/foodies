import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-2xl font-black mb-4">foodies<span className="text-brand-accent">.</span></h3>
          <p className="text-sm leading-relaxed">Bringing pure Indian culinary heritage and traditional hospitality to contemporary spaces across the nation.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Our Story</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/catering" className="hover:text-white transition">Catering</Link></li>
            <li><Link href="/book" className="hover:text-white transition">Reservations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Service Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Lunch: 11:30 AM - 3:30 PM</li>
            <li>Dinner: 7:00 PM - 11:30 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Locations</h4>
          <p className="text-sm mb-2">📍 Jubilee Hills, Hyderabad</p>
          <p className="text-sm">📍 Indiranagar, Bengaluru</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} foodies India Restaurant Network. Created beautifully for showcase.
      </div>
    </footer>
  );
}