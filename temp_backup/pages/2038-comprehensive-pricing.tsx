import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Phone, Mail, MapPin, Globe,
  Brain, Shield, Target, Rocket, Heart,
  Building, Grid
} from 'lucide-react';

// Import our new 2038 services
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITMicroSaasServices } from '../data/innovative-2038-it-micro-saas-services';

// Create unified services array
const all2038Services = [
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITMicroSaasServices
];



const categories = [
  {
    id: 'ai-quantum',
    name: 'AI & Quantum',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Next-generation space exploration and mining'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Quantum-powered security and threat intelligence'
  },
  {
    id: 'healthcare',
    name: 'Healthcare AI',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Autonomous healthcare and medical AI'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Intelligent business automation solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT and DevOps solutions'
  },
  {
    id: 'climate-tech',
    name: 'Climate Technology',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-teal-500 to-green-500',
    description: 'AI-powered climate prediction and analysis'
  }
];

export default function Comprehensive2038Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? all2038Services 
    : all2038Services.filter(service => 
        service.category.toLowerCase().includes(
          categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase() || ''
        )
      );

const 2038-comprehensive-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2038-comprehensive-pricing | Zion Tech Group</title>
        <meta name="description" content="2038-comprehensive-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2038-comprehensive-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default UltimateTechRevolution2027;
