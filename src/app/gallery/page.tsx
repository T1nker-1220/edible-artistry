'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/data/content';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  // Get unique categories from gallery items
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Handle image loading error
  const handleImageError = useCallback((id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  }, []);

  // Navigate through images in lightbox
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryItems.length
      : (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setSelectedImage(galleryItems[newIndex].id);
  }, [selectedImage]);

  // Find current image details for lightbox
  const currentImage = selectedImage 
    ? galleryItems.find(item => item.id === selectedImage)
    : null;

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our finest culinary creations and artistic presentations
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => !imageError[item.id] && setSelectedImage(item.id)}
              className={`group relative overflow-hidden rounded-lg aspect-square cursor-pointer transform transition-all duration-300 ${
                !imageError[item.id] && 'hover:scale-[1.02]'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  !imageError[item.id] && 'group-hover:scale-110'
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => handleImageError(item.id)}
                priority={item.id <= 6}
              />
              {!imageError[item.id] && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 p-4">
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm uppercase tracking-wider">{item.category}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && currentImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-4xl mx-auto" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={currentImage.image}
                alt={currentImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority
              />
            </div>

            {/* Image Caption */}
            <div className="absolute -bottom-12 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-bold mb-1">{currentImage.title}</h3>
              <p className="text-sm text-gray-300">{currentImage.category}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#f8f8f8] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Let Us Create Something Special for You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 px-4">
            Whether it&#39;s a special occasion or a corporate event, we&#39;ll make it memorable
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}
