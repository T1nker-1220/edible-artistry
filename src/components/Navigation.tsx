'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/about', label: 'About' },
  ];

  const isHome = pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : isHome 
            ? 'bg-transparent py-4'
            : 'bg-gray-900 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-10 h-10 transform transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Edible Artistry"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className={`font-playfair text-xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900' 
                : isHome 
                  ? 'text-gray-900'
                  : 'text-white'
            }`}>
              Edible Artistry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 relative group
                  ${isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : isHome
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white/90 hover:text-white'
                  }
                  ${pathname === link.href ? 'bg-black/5' : 'hover:bg-black/5'}
                `}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-1/2 w-1/2 h-0.5 -translate-x-1/2 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    ${isScrolled || isHome ? 'bg-gray-900' : 'bg-white'}
                  `} 
                />
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300
                ${isScrolled || isHome
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-white hover:bg-gray-100 text-gray-900'
                }
                transform hover:scale-105
              `}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || isHome
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled || isHome ? 'bg-gray-900' : 'bg-white'
                } ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 transition-opacity duration-300 ${
                  isScrolled || isHome ? 'bg-gray-900' : 'bg-white'
                } ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled || isHome ? 'bg-gray-900' : 'bg-white'
                } ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[32rem] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 px-2 space-y-1 rounded-lg ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300
                  ${pathname === link.href 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'hover:bg-gray-50'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              className="block px-4 py-3 mt-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-center font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
