<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Check, Zap, Eye, 
  TrendingUp, Award, Shield, Rocket, Brain,
  Atom, Cpu, Sparkles, Crown, Infinity
} from 'lucide-react';

interface UltraFuturisticServiceCard2040Props {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
    };
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
}

export default function UltraFuturisticServiceCard2040({ service, index }: UltraFuturisticServiceCard2040Props) {
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
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.4
      }
    }
  };

  const neonGlowVariants = {
    initial: {
      boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor"
    },
    hover: {
      boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
      transition: {
        duration: 0.3
      }
    }
  };

  const getGradientClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500 to-cyan-600': 'from-blue-500 via-cyan-500 to-cyan-600',
      'from-green-500 to-emerald-600': 'from-green-500 via-emerald-500 to-emerald-600',
      'from-purple-500 to-pink-600': 'from-purple-500 via-pink-500 to-pink-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 via-orange-500 to-orange-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 via-purple-500 to-purple-600',
      'from-red-500 to-pink-600': 'from-red-500 via-pink-500 to-pink-600'
    };
    return colorMap[color] || color;
  };

  const getNeonColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500 to-cyan-600': '#00d4ff',
      'from-green-500 to-emerald-600': '#10b981',
      'from-purple-500 to-pink-600': '#ec4899',
      'from-yellow-500 to-orange-600': '#f59e0b',
      'from-indigo-500 to-purple-600': '#8b5cf6',
      'from-red-500 to-pink-600': '#ef4444'
    };
    return colorMap[color] || '#00d4ff';
  };

  const neonColor = getNeonColor(service.color);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const UltraFuturisticServiceCard2040: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticServiceCard2040</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticServiceCard2040;
