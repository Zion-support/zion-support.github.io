import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface SimpleServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
    category: string;
    icon: string;
    marketValidation: string;
    targetAudience: string;
    competitiveAdvantage: string;
    pricingStrategy: string;
  };
}

const SimpleServiceCard: React.FC<SimpleServiceCardProps> = ({ service }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SimpleServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default SimpleServiceCard;