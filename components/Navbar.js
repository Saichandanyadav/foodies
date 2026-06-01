'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-amber-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-wider text-brand-primary">
              foodies<span className="text-brand-accent">.</span>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-gray-700">
            <Link href="/" className="hover:text-brand-primary transition duration-200">Home</Link>
            <Link href="/menu" className="hover:text-brand-primary transition duration-200">Menu</Link>
            <Link href="/about" className="hover:text-brand-primary transition duration-200">Our Story</Link>
            <Link href="/gallery" className="hover:text-brand-primary transition duration-200">Gallery</Link>
            <Link href="/catering" className="hover:text-brand-primary transition duration-200">Catering</Link>
            <Link href="/reviews" className="hover:text-brand-primary transition duration-200">Reviews</Link>
            <Link href="/contact" className="hover:text-brand-primary transition duration-200">Contact</Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-700 hover:text-brand-primary relative">
              <ShoppingBag size={22} />
              <span className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <Link href="/book" className="hidden sm:inline-block bg-brand-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-opacity-90 transition duration-200 shadow-md shadow-red-200">
              Book a Table
            </Link>
            <Link href="/book" className="inline-block sm:hidden bg-brand-primary text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-opacity-90 transition duration-200 shadow-md shadow-red-200">
              Book a Table
            </Link>
            <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 text-gray-700 hover:text-brand-primary focus:outline-none">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-amber-100 bg-white">
              <span className="text-2xl font-extrabold tracking-wider text-brand-primary">
                foodies<span className="text-brand-accent">.</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-700 hover:text-brand-primary focus:outline-none">
                <X size={24} />
              </button>
            </div>

            <div className="mt-8 flex flex-col space-y-4 font-bold text-lg text-gray-800 bg-white">
              <Link onClick={() => setIsOpen(false)} href="/" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Home</Link>
              <Link onClick={() => setIsOpen(false)} href="/menu" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Menu</Link>
              <Link onClick={() => setIsOpen(false)} href="/about" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Our Story</Link>
              <Link onClick={() => setIsOpen(false)} href="/gallery" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Gallery</Link>
              <Link onClick={() => setIsOpen(false)} href="/catering" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Catering</Link>
              <Link onClick={() => setIsOpen(false)} href="/reviews" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Reviews</Link>
              <Link onClick={() => setIsOpen(false)} href="/contact" className="px-4 py-3 rounded-xl hover:bg-brand-light hover:text-brand-primary transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}