import Image from 'next/image';
import { workshops } from '@/data/content';

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Culinary Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our expert-led workshops and master the art of culinary creation
          </p>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Duration:</span>
                    {workshop.duration}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Schedule:</span>
                    <div>
                      {workshop.dates.map((date, index) => (
                        <div key={index}>{date}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Price:</span>
                    {workshop.price}
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full bg-gray-900 text-white text-center py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#f8f8f8] py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What should I bring to the workshop?</h3>
              <p className="text-gray-600">All materials and equipment will be provided. Just bring your enthusiasm and willingness to learn!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Are the workshops suitable for beginners?</h3>
              <p className="text-gray-600">Yes! Our workshops are designed for all skill levels, from complete beginners to experienced bakers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Can I get a refund if I need to cancel?</h3>
              <p className="text-gray-600">Full refunds are available up to 48 hours before the workshop. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
