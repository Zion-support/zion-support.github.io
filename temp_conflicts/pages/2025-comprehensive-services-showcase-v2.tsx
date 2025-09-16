import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEO from '../components/SEO';

import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new 2025 V2 innovative services
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';
import { industrySpecificSolutions2025V2 } from '../data/2025-industry-specific-solutions-v2';
import { emergingTechBreakthroughs2025V2 } from '../data/2025-emerging-tech-breakthroughs-v2';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServices2025ExpansionV2,
    ...industrySpecificSolutions2025V2,
    ...emergingTechBreakthroughs2025V2
  ];

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: innovativeITServices2025ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions'
    },
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      services: innovativeAIServices2025ExpansionV2,
      description: 'Intelligent AI solutions for business transformation'
    },
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: <Building className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      services: industrySpecificSolutions2025V2,
      description: 'Specialized solutions for specific industries'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      services: emergingTechBreakthroughs2025V2,
      description: 'Breakthrough technologies of the future'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const 2025-comprehensive-services-showcase-v2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-comprehensive-services-showcase-v2 | Zion Tech Group</title>
        <meta name="description" content="2025-comprehensive-services-showcase-v2 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-comprehensive-services-showcase-v2</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-comprehensive-services-showcase-v2;