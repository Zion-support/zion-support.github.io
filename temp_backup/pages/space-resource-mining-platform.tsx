import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function SpaceResourceMiningPlatform() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Mining Operations',
      description: 'Advanced space mining operations with autonomous spacecraft and resource extraction systems.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Resource Mapping',
      description: 'AI-powered resource mapping and identification across asteroids, moons, and planetary bodies.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Autonomous Extraction',
      description: 'Fully autonomous resource extraction with robotic systems and AI-driven operations.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety Protocols',
      description: 'Advanced safety protocols and risk management for space mining operations.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Resource Processing',
      description: 'In-space resource processing and refinement for immediate use or transport to Earth.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Logistics Management',
      description: 'Comprehensive logistics management for space mining operations and resource transportation.'
    }
  ];

  const benefits = [
    'Access unlimited space resources',
    'Reduce Earth resource dependency by 80%',
    'Enable space colonization by 2030',
    'Create new economic opportunities',
    'Accelerate space exploration by 500%',
    'Enable sustainable resource extraction',
    'Scale space operations globally',
    'Future-proof resource security'
  ];

  const useCases = [
    'Asteroid Mining', 'Lunar Operations', 'Planetary Mining',
    'Resource Mapping', 'Autonomous Extraction', 'Space Logistics',
    'Resource Processing', 'Safety Management', 'Colonization Support',
    'Economic Development', 'Space Infrastructure', 'Resource Security'
  ];
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const space-resource-mining-platform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>space-resource-mining-platform | Zion Tech Group</title>
        <meta name="description" content="space-resource-mining-platform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">space-resource-mining-platform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default space-resource-mining-platform;
