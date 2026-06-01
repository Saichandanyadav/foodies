'use client';

import { ShieldCheck, Award } from 'lucide-react';

export default function ShowcaseBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] group pointer-events-auto">
      {/* Decorative pulse background ring */}
      <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl blur-md group-hover:scale-105 transition-transform duration-300 -z-10 animate-pulse" />
      
      {/* Main Badge Body */}
      <div className="flex items-center gap-3 bg-brand-dark/95 backdrop-blur-md border border-amber-500/30 text-white px-5 py-3 rounded-2xl shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:border-brand-accent">
        
        {/* Left Side: Animated Icon Container */}
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-accent to-amber-600 rounded-xl shadow-inner text-brand-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <Award size={20} className="font-bold" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </div>

        {/* Right Side: Typography Hierarchy */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-widest font-black text-brand-accent">
            Demo Showcase
          </span>
          <h4 className="text-sm font-extrabold text-white leading-tight mt-0.5 tracking-wide">
            Growth Craft
          </h4>
          <p className="text-[11px] text-gray-400 font-medium flex items-center gap-1 mt-0.5">
            by <span className="text-amber-100 font-bold">Sai</span> 
            <ShieldCheck size={12} className="text-emerald-400 inline" />
          </p>
        </div>
      </div>
    </div>
  );
}