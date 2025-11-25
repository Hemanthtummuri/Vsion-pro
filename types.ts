export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent: string;
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  location: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
