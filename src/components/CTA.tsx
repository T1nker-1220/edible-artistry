import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-gray-900">Create Your Own Edible Art</h2>
          <p className="text-lg md:text-xl mb-12 text-gray-600 leading-relaxed">
            Transform your celebrations into unforgettable experiences with our bespoke culinary creations. 
            Join our artisanal workshops to master the craft of edible artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/order"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Order Custom Creation
            </Link>
            <Link 
              href="/workshops"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-transparent border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Join Our Workshops
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
