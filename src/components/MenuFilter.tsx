'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';

interface MenuFilterProps {
  items: MenuItem[];
  categories: readonly string[];
}

export default function MenuFilter({ items, categories }: MenuFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handleImageError = useCallback((id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  }, []);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === category
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                : 'border-gray-200 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => handleImageError(item.id)}
                priority={item.id <= 3}
              />
              {imageError[item.id] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-500">Image not available</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-playfair text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="text-emerald-600 font-medium">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <button 
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 group transition-colors duration-300"
                  aria-label={`Order ${item.name}`}
                >
                  Order Now 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
