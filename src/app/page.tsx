import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export default function Home() {
  const galleryItems = [
    {
      id: 1,
      title: 'Sculpted Wedding Cake',
      image: '/images/wedding-cake.jpg',
      description: 'Elegant three-tier wedding cake with hand-painted florals',
    },
    {
      id: 2,
      title: 'Themed Platter',
      image: '/images/themed-platter.jpg',
      description: 'Seasonal fruit and cheese platter arranged in an artistic pattern',
    },
    {
      id: 3,
      title: 'Designer Cupcakes',
      image: '/images/cupcakes.jpg',
      description: 'Artistically decorated cupcakes with unique flavors',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section id="gallery" className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our Edible Masterpieces</h2>
          <Gallery items={galleryItems} />
        </div>
      </section>

      <CTA />
    </main>
  );
}
