<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ExternalLink, Star, Users, TrendingUp, 
  Shield, Zap, Brain, Rocket, Dna, Globe, Cpu,
  CheckCircle, Clock, DollarSign, Target
} from 'lucide-react';
import { innovativeAIServices } from '../../data/innovative-ai-services';
import { quantumSpaceServices } from '../../data/quantum-space-services';
import { enterpriseITServices } from '../../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../../data/comprehensive-it-solutions';
import { marketValidatedServices } from '../../data/market-validated-services';
import { newRealInnovations } from '../../data/new-real-innovations';
import { realMarketServices } from '../../data/real-market-services';
import { realOperationalServices } from '../../data/real-operational-services';
import { realVerifiedServices } from '../../data/real-verified-services';

interface Service {
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
  variant?: string;
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
}

interface EnhancedServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  services,
  title = "Revolutionary 2029 Services",
  subtitle = "Cutting-edge technology solutions that transform businesses",
  showStats = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...marketValidatedServices,
    ...newRealInnovations,
    ...realMarketServices,
    ...realOperationalServices,
    ...realVerifiedServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovativeAIServices.length + nextGenerationAIServices.length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('space')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length + comprehensiveITSolutions.length },
    { id: 'saas', name: 'Micro SaaS', icon: '💻', count: enhancedRealMicroSaasServices.length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: emergingTechnologyServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const categoryValue = (service.category || '').toLowerCase();
    const nameValue = (service.name || '').toLowerCase();

    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'ai' && (categoryValue.includes('ai') || categoryValue.includes('machine learning'))) ||
      (selectedCategory === 'quantum' && (nameValue.includes('quantum') || categoryValue.includes('quantum'))) ||
      (selectedCategory === 'space' && (nameValue.includes('space') || categoryValue.includes('space'))) ||
      (selectedCategory === 'enterprise' && (categoryValue.includes('enterprise') || categoryValue.includes('it') || categoryValue.includes('cloud') || categoryValue.includes('security'))) ||
      (selectedCategory === 'saas' && categoryValue.includes('micro saas')) ||
      (selectedCategory === 'emerging' && categoryValue.includes('emerging'));

    const matchesSearch =
      nameValue.includes(searchTerm.toLowerCase()) ||
      (service.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      categoryValue.includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featuredServices = services.filter(service => service.popular).slice(0, 6);
  const regularServices = services.filter(service => !service.popular).slice(0, 12);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedServiceShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedServiceShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};


export default EnhancedContentShowcase;
