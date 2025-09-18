import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';

const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services',
      icon: Brain,
      services: advancedAIAutomation2025,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      description: 'Cutting-edge AI solutions that transform business operations'
    },
    {
      title: 'Cybersecurity & Security',
      icon: Shield,
      services: advancedCybersecurity2025,
      gradient: 'from-red-600 via-orange-600 to-yellow-600',
      description: 'Advanced security solutions for the digital age'
    },
    {
      title: 'Blockchain & Web3',
      icon: Globe,
      services: blockchainWeb32025,
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
      description: 'Next-generation blockchain and decentralized solutions'
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cloud,
      services: iotEdgeComputing2025,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      description: 'Smart connected solutions for the Internet of Things'
    },
    {
      title: 'Healthcare & Biotechnology',
      icon: Target,
      services: healthcareBiotech2025,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      description: 'Innovative healthcare and biotech solutions'
    },
    {
      title: 'Fintech & Financial',
      icon: DollarSign,
      services: fintechFinancial2025,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      description: 'Revolutionary financial technology solutions'
    },
    {
      title: 'Education & E-Learning',
      icon: Award,
      services: educationElearning2025,
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
      description: 'Advanced learning and educational technology'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ComprehensiveServicesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
