import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Check, X, Star, Brain, Atom, Rocket, Shield, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceFeature {
  name: string;
  category: string;
  description: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  features: string[];
  pros: string[];
  cons: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

const ServiceComparisonTool: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServiceComparisonTool</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ServiceComparisonTool;
