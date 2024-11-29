export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Workshop {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  dates: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Value {
  title: string;
  description: string;
  icon: () => JSX.Element;
}
