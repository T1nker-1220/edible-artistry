import MenuFilter from '@/components/MenuFilter';
import { menuItems, menuCategories } from '@/data/content';

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of artistically crafted delicacies, each piece a unique masterpiece
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-12">
        <MenuFilter items={menuItems} categories={menuCategories} />
      </div>
    </main>
  );
}
