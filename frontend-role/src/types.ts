export interface Product {
  name: string;
  category: string;
  price: number;
  image: { src: string; alt: string };
  featured?: boolean;
  details?: {
    dimmentions: { width: number; height: number };
    size: number;
    description: string;
    recommendations: { src: string; alt: string }[];
  };
}


export interface CartItem {
  product: Product;
  quantity: number;
}

