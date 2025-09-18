import React from 'react';
import { motion } from 'framer-motion';
import { revolutionaryMicroSaasServices } from '../../data/revolutionary-micro-saas-services';
import RevolutionaryServiceCard from '../ui/RevolutionaryServiceCard';

interface RevolutionaryServicesShowcaseProps {
  title?: string;
  subtitle?: string;
  maxServices?: number;
  category?: string;
}

const RevolutionaryServicesShowcase: React.FC<RevolutionaryServicesShowcaseProps> = ({
  title = "Revolutionary Micro SAAS Services",
  subtitle = "Experience the future of business automation with cutting-edge AI, quantum computing, and autonomous technologies",
  maxServices = 12,
  category
}) => {
  const filteredServices = category 
    ? revolutionaryMicroSaasServices.filter(service => service.category.includes(category))
    : revolutionaryMicroSaasServices;
  
  const displayedServices = filteredServices.slice(0, maxServices);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getVariantForService = (index: number): 'default' | 'holographic' | 'quantum' | 'neural' | 'cyberpunk' => {
    const variants: Array<'default' | 'holographic' | 'quantum' | 'neural' | 'cyberpunk'> = [
      'quantum', 'holographic', 'neural', 'cyberpunk', 'default'
    ];
    return variants[index % variants.length];
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default RevolutionaryServicesShowcase;
