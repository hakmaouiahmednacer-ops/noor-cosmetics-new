export interface ProductPack {
  id: string;
  name: string;
  subtitle: string;
  quantity: number;
  weight: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  isPopular?: boolean;
  savings?: string;
  duration: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  age: string;
  skinConcern: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  tag: 'melasma' | 'soleil' | 'acne' | 'teint';
}

export interface Ingredient {
  name: string;
  inci: string;
  concentration?: string;
  role: string;
  description: string;
  benefits: string[];
}

export interface CodOrderDetails {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
  packId: string;
}
