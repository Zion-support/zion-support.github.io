import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
=======

const StatsSection: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">StatsSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default StatsSection;
