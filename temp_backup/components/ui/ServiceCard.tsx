import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Button from './Button';
import EnhancedFuturisticCard from './EnhancedFuturisticCard';

interface ServiceCardProps {
  service: {
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
    category: string;
    trialDays: number;
    setupTime: string;
    rating: number;
    reviews: number;
    variant: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'space';
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
  };
  showContactInfo?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showContactInfo = false }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ServiceCard;
