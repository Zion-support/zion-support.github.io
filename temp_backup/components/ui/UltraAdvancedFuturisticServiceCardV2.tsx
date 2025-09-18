import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react';

interface UltraAdvancedFuturisticServiceCardV2Props {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
}

export default function UltraAdvancedFuturisticServiceCardV2({ 
  service, 
  index 
}: UltraAdvancedFuturisticServiceCardV2Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const getGradientClass = (color: string) => {
    const gradients: { [key: string]: string } = {
      'from-blue-500 to-indigo-600': 'from-blue-500 via-indigo-500 to-indigo-600',
      'from-purple-500 to-violet-600': 'from-purple-500 via-violet-500 to-violet-600',
      'from-green-500 to-emerald-600': 'from-green-500 via-emerald-500 to-emerald-600',
      'from-pink-500 to-rose-600': 'from-pink-500 via-rose-500 to-rose-600',
      'from-cyan-500 to-blue-600': 'from-cyan-500 via-blue-500 to-blue-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 via-orange-500 to-orange-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 via-purple-500 to-purple-600',
      'from-emerald-500 to-teal-600': 'from-emerald-500 via-teal-500 to-teal-600',
      'from-amber-500 to-yellow-600': 'from-amber-500 via-yellow-500 to-yellow-600',
      'from-violet-500 to-purple-600': 'from-violet-500 via-purple-500 to-purple-600',
      'from-gray-500 to-slate-600': 'from-gray-500 via-slate-500 to-slate-600',
      'from-red-500 to-pink-600': 'from-red-500 via-pink-500 to-pink-600'
    };
    return gradients[color] || color;
  };

const UltraAdvancedFuturisticServiceCardV2: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedFuturisticServiceCardV2</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraAdvancedFuturisticServiceCardV2;
