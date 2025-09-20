import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle, 
  Zap, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Clock,
  Shield,
  Rocket,
  Globe,
  Cpu,
  Atom,
  Target
} from 'lucide-react';

interface ServiceFeature {
  name: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ServiceBenefit {
  name: string;
  impact: string;
  icon?: React.ReactNode;
}

interface ServicePricing {
  starter: string;
  professional: string;
  enterprise: string;
  custom: string;
}

interface ServiceCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  pricing: ServicePricing;
  features: string[];
  benefits: string[];
  useCases: string[];
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  slug: string;
  featured?: boolean;
  priority?: 'high' | 'medium' | 'low';
  technology?: string[];
  compliance?: string[];
  onCardClick?: (service: any) => void;
}

const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('machine learning')) return Brain;
  if (categoryLower.includes('quantum')) return Atom;
  if (categoryLower.includes('security') || categoryLower.includes('cyber')) return Shield;
  if (categoryLower.includes('space')) return Rocket;
  if (categoryLower.includes('business')) return Target;
  if (categoryLower.includes('it') || categoryLower.includes('infrastructure')) return Cpu;
  if (categoryLower.includes('global') || categoryLower.includes('worldwide')) return Globe;
  return Star;
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'from-red-500 to-orange-500';
    case 'medium': return 'from-yellow-500 to-orange-500';
    case 'low': return 'from-green-500 to-teal-500';
    default: return 'from-cyan-500 to-purple-500';
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case 'high': return 'High Priority';
    case 'medium': return 'Medium Priority';
    case 'low': return 'Low Priority';
    default: return 'Standard';
  }
};

const EnhancedServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  tagline,
  description,
  category,
  type,
  pricing,
  features,
  benefits,
  useCases,
  marketSize,
  targetAudience,
  competitiveAdvantage,
  slug,
  featured = false,
  priority = 'medium',
  technology = [],
  compliance = [],
  onCardClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const CategoryIcon = getCategoryIcon(category);
  const priorityColor = getPriorityColor(priority);
  const priorityLabel = getPriorityLabel(priority);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick({ id, name, slug, category, type });
    }
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = slug;
  };

const EnhancedServiceCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedServiceCard;
