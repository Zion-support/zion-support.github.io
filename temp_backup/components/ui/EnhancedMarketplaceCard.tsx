import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export type ServiceItem = {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  provider: string;
  priceFromUSD?: number;
  priceRangeUSD?: [number, number];
  categories: string[];
  rating?: number; // 0-5
};

type Props = {
  service: ServiceItem;
  onRequestQuote: (service: ServiceItem) => void;
};

export default function EnhancedMarketplaceCard({ service, onRequestQuote }: Props) {
  const minPrice = service.priceFromUSD ?? (service.priceRangeUSD ? service.priceRangeUSD[0] : undefined);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedMarketplaceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default EnhancedMarketplaceCard;