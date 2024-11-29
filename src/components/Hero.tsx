'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with fallback color and gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="relative w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-700"
          style={{
            backgroundImage: 'url("/images/hero/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transform transition-all duration-1000 text-center ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Where Food Becomes Art
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-12 drop-shadow">
            Experience culinary excellence with our artistic creations and masterful presentations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Explore Menu
            </Link>
            <Link
              href="/workshops"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              Join Workshops
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-24 fill-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C480,100 960,100 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </div>
  );
}
