export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string}

>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number}

>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb
];

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary'}

>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string}

>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb
];