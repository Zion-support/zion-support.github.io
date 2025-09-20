import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Target, Star, 
  Search, Grid, List,
  ArrowRight, Globe,
  Phone, Mail, MapPin, Cpu
} from 'lucide-react';

// Import our new 2037 services
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';



const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all 2037 services'
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Revolutionary AI platforms and consciousness solutions'
  },
  {
    id: 'quantum-services',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Breakthrough quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Space exploration and resource mining solutions'
  },
  {
    id: 'it-solutions',
    name: 'Enterprise IT',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Advanced enterprise infrastructure solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-500 to-cyan-500',
    description: 'Innovative business solutions for modern enterprises'
  }
];

// Combine all services
const allServices = [
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices
];

export default function FuturisticServicesShowcase2037() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-6 h-6" />;
    if (category.includes('Quantum')) return <Atom className="w-6 h-6" />;
    if (category.includes('Space')) return <Rocket className="w-6 h-6" />;
    if (category.includes('IT') || category.includes('Cloud')) return <Cpu className="w-6 h-6" />;
    if (category.includes('Micro') || category.includes('SAAS')) return <Target className="w-6 h-6" />;
    return <Star className="w-6 h-6" />;
  };

  const getServiceColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-500 to-pink-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Space')) return 'from-indigo-500 to-purple-500';
    if (category.includes('IT') || category.includes('Cloud')) return 'from-orange-500 to-red-500';
    if (category.includes('Micro') || category.includes('SAAS')) return 'from-emerald-500 to-cyan-500';
    return 'from-gray-500 to-slate-500';
  };

const 2037-futuristic-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2037-futuristic-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2037-futuristic-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2037-futuristic-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2037-futuristic-services-showcase;
