import { MenuItem, TeamMember, Workshop, GalleryItem, Value } from '@/types';
import { ArtistryIcon, QualityIcon, InnovationIcon, EducationIcon } from '@/components/icons/ValueIcons';

// Menu Categories
export const menuCategories = ['All', 'Cakes', 'Platters', 'Desserts'] as const;
export type MenuCategory = typeof menuCategories[number];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Signature Wedding Cake',
    description: 'Three-tier masterpiece with hand-painted florals and gold leaf accents',
    price: 'From $500',
    category: 'Cakes',
    image: '/images/menu/cake-platter.jpg',
  },
  {
    id: 2,
    name: 'Seasonal Fruit Platter',
    description: 'Artistically arranged fresh fruits with edible flowers and chocolate dips',
    price: 'From $150',
    category: 'Platters',
    image: '/images/menu/fruit-platter.jpg',
  },
  {
    id: 3,
    name: 'Designer Cupcake Set',
    description: 'Assorted flavors with artistic decorations, perfect for special events',
    price: 'From $60',
    category: 'Desserts',
    image: '/images/menu/cupcake-platter.jpg',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'James Anderson',
    role: 'Head Chef & Founder',
    image: '/images/team/chef1.jpg',
    bio: 'With over 15 years of experience in culinary arts, James brings his passion for artistic food creation to every dish.',
  },
  {
    name: 'Michael Chen',
    role: 'Pastry Chef',
    image: '/images/team/chef2.jpg',
    bio: 'A graduate of Le Cordon Bleu, Michael specializes in creating stunning pastries and desserts that delight both the eye and palate.',
  },
  {
    name: 'David Rodriguez',
    role: 'Workshop Director',
    image: '/images/team/chef3.jpg',
    bio: 'Davids teaching experience and culinary expertise make him the perfect leader for our workshop program.',
  },
];

export const values: Value[] = [
  {
    title: 'Artistry',
    description: 'We believe food should be a feast for both the eyes and the palate.',
    icon: ArtistryIcon
  },
  {
    title: 'Quality',
    description: 'We use only the finest ingredients to create our culinary masterpieces.',
    icon: QualityIcon
  },
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to create unique and memorable experiences.',
    icon: InnovationIcon
  },
  {
    title: 'Education',
    description: 'Sharing our knowledge and passion through workshops and classes.',
    icon: EducationIcon
  },
];

export const workshops: Workshop[] = [
  {
    id: 1,
    title: 'Cake Decoration Masterclass',
    description: 'Learn professional cake decorating techniques from our expert pastry chefs. Perfect for beginners and intermediate bakers.',
    duration: '4 hours',
    price: '$199',
    image: '/images/workshops/cake-workshop.jpg',
    dates: ['Every Saturday', '10:00 AM - 2:00 PM'],
  },
  {
    id: 2,
    title: 'Artisanal Bread Making',
    description: 'Master the art of bread making, from classic sourdough to artisanal varieties. Includes hands-on practice and take-home starter.',
    duration: '6 hours',
    price: '$249',
    image: '/images/workshops/bread-workshop.jpg',
    dates: ['Every Sunday', '9:00 AM - 3:00 PM'],
  },
  {
    id: 3,
    title: 'French Pastry Essentials',
    description: 'Discover the secrets of French pastry making. Learn to create croissants, éclairs, and more classic delicacies.',
    duration: '5 hours',
    price: '$229',
    image: '/images/workshops/pastry-workshop.jpg',
    dates: ['Every Friday', '1:00 PM - 6:00 PM'],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Wedding Cake Elegance',
    category: 'Cakes',
    image: '/images/gallery/wedding-cake.jpg',
  },
  {
    id: 2,
    title: 'Seasonal Fruit Platter',
    category: 'Platters',
    image: '/images/gallery/fruit-platter.jpg',
  },
  {
    id: 3,
    title: 'Artisanal Pastries',
    category: 'Pastries',
    image: '/images/gallery/pastries.jpg',
  },
  {
    id: 4,
    title: 'Custom Birthday Cake',
    category: 'Cakes',
    image: '/images/gallery/birthday-cake.jpg',
  },
  {
    id: 5,
    title: 'Chocolate Masterpiece',
    category: 'Desserts',
    image: '/images/gallery/chocolate.jpg',
  },
  {
    id: 6,
    title: 'Canapé Selection',
    category: 'Platters',
    image: '/images/gallery/canapes.jpg',
  },
  {
    id: 7,
    title: 'French Macarons',
    category: 'Pastries',
    image: '/images/gallery/macarons.jpg',
  },
  {
    id: 8,
    title: 'Celebration Cake',
    category: 'Cakes',
    image: '/images/gallery/celebration-cake.jpg',
  },
  {
    id: 9,
    title: 'Dessert Platter',
    category: 'Platters',
    image: '/images/gallery/dessert-platter.jpg',
  },
];
