import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  href: string;
  color: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
=======

const FeatureGrid: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FeatureGrid</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FeatureGrid;
