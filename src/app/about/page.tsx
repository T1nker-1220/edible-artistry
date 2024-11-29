'use client';

import Image from 'next/image';
import { teamMembers, values } from '@/data/content';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Crafting culinary masterpieces with passion and precision since 2015
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/kitchen.jpg"
              alt="Our kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Where Art Meets Culinary Excellence
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Founded in 2015, Edible Artistry began with a simple vision: to transform ordinary
              ingredients into extraordinary works of art. Our journey started in a small kitchen
              with big dreams, and has grown into a celebrated culinary destination.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Today, we continue to push the boundaries of culinary creativity, offering not just
              meals, but memorable experiences that delight all the senses. Our commitment to
              excellence has earned us recognition in the culinary world and the trust of our
              valued clients.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4 text-primary-600">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2 text-gray-900">
                {member.name}
              </h3>
              <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm px-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
