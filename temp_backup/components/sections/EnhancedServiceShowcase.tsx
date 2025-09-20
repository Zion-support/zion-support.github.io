import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  services: any[];
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

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(services.map(s => {
    if (typeof s.category === 'string') {
      return s.category.split('&')[0].trim();
    }
    return 'Other';
  })))];
  
  // Filter and sort services
  const filteredServices = services
    .filter(service => {
      if (selectedCategory === 'All') return true;
      if (typeof service.category === 'string') {
        return service.category.includes(selectedCategory);
      }
      return false;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    })
    .slice(0, maxServices);

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

const EnhancedServiceShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedServiceShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedServiceShowcase;
