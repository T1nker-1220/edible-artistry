import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="group relative overflow-hidden rounded-lg bg-white"
        >
          <div className="relative h-[400px] w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
            <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-playfair text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
