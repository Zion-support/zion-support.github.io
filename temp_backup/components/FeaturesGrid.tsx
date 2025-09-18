import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FeaturesGrid</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FeaturesGrid;
