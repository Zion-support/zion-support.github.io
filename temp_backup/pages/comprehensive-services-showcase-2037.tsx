import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu,
  ArrowRight, Check, Star, TrendingUp, Users, Zap,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new innovative services
import { innovative2037Services } from '../data/innovative-2037-services';
import { advanced2038Services } from '../data/advanced-2038-services';
import { revolutionary2039Services } from '../data/revolutionary-2039-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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

export default function ComprehensiveServicesShowcase2037() {
  const allServices = [
    ...innovative2037Services,
    ...advanced2038Services,
    ...revolutionary2039Services
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Personal Development':
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity & Quantum':
      case 'Quantum & Communications':
        return <Shield className="w-6 h-6" />;
      case 'AI & Operations':
      case 'AI & Strategy':
        return <Cpu className="w-6 h-6" />;
      case 'Metaverse & Digital Reality':
        return <Globe className="w-6 h-6" />;
      case 'AI & Legal Tech':
        return <Target className="w-6 h-6" />;
      case 'Quantum & Finance':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Transportation':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum & IoT':
        return <Atom className="w-6 h-6" />;
      case 'AI & Creative':
      case 'AI & Content':
        return <Brain className="w-6 h-6" />;
      case 'Quantum & Space Tech':
      case 'Quantum & Space':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const comprehensive-services-showcase-2037: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-services-showcase-2037 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-services-showcase-2037 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-showcase-2037</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-services-showcase-2037;
