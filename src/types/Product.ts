
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  sizes: string[];
  image: string;
  description: string;
}

export interface Filters {
  categories: string[];
  colors: string[];
  priceRange: { min: number; max: number } | null;
}
