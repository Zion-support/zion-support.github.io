<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target, Users, Eye, Heart, Code, Palette, Search, Mail, MessageCircle, Calendar, BarChart3, Lightbulb, Globe2, Satellite, Microscope, Flask, ShieldCheck, Zap as ZapIcon, Cpu as CpuIcon, Brain as BrainIcon, Rocket as RocketIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

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
  variant: string;
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

interface Revolutionary2026ServicesShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'AI Consciousness & Ethics': BrainIcon,
  'AI Multimodal': Eye,
  'AI Autonomous Systems': Target,
  'AI Quantum Computing': Atom,
  'AI Emotional Intelligence': Heart,
  'AI Creative': Palette,
  'AI Predictive Analytics': BarChart3,
  'AI Quantum ML': CpuIcon,
  'AI Research': Microscope,
  'Zero Trust Security': ShieldCheck,
  'Edge Computing': Globe,
  '5G Networks': Satellite,
  'Quantum Computing': Atom,
  'Autonomous IT': ZapIcon,
  'Neuromorphic Computing': BrainIcon,
  'DNA Computing': Flask,
  'Photonic Computing': Lightbulb,
  'Holographic Technology': Eye,
  'AI Branding': Palette,
  'Holographic Events': Eye,
  'AI Transcription': MessageCircle,
  'AI Mental Health': Heart,
  'AI Personalization': Target,
  'AI Customer Experience': Users,
  'AI Social Media': Globe2,
  'AI Email Marketing': Mail,
  'AI SEO': Search,
  'Space Technology': RocketIcon,
  'Space Safety': Shield,
  'Quantum Space': Atom,
  'Space Weather': StarIcon,
  'Autonomous Space': Target,
  'Space Tourism': Users,
  'Space Agriculture': Globe,
  'Space Energy': ZapIcon,
  'Space Research': Microscope
};

const categoryColors: { [key: string]: string } = {
  'AI Consciousness & Ethics': 'from-indigo-500 to-purple-600',
  'AI Multimodal': 'from-blue-500 to-cyan-600',
  'AI Autonomous Systems': 'from-green-500 to-emerald-600',
  'AI Quantum Computing': 'from-purple-500 to-pink-600',
  'AI Emotional Intelligence': 'from-pink-500 to-rose-600',
  'AI Creative': 'from-yellow-500 to-orange-600',
  'AI Predictive Analytics': 'from-indigo-500 to-blue-600',
  'AI Quantum ML': 'from-purple-500 to-indigo-600',
  'AI Research': 'from-teal-500 to-green-600',
  'Zero Trust Security': 'from-red-500 to-pink-600',
  'Edge Computing': 'from-blue-500 to-cyan-600',
  '5G Networks': 'from-green-500 to-emerald-600',
  'Quantum Computing': 'from-purple-500 to-pink-600',
  'Autonomous IT': 'from-blue-500 to-indigo-600',
  'Neuromorphic Computing': 'from-indigo-500 to-purple-600',
  'DNA Computing': 'from-green-500 to-teal-600',
  'Photonic Computing': 'from-yellow-500 to-orange-600',
  'Holographic Technology': 'from-pink-500 to-rose-600',
  'AI Branding': 'from-purple-500 to-pink-600',
  'Holographic Events': 'from-pink-500 to-rose-600',
  'AI Transcription': 'from-blue-500 to-cyan-600',
  'AI Mental Health': 'from-green-500 to-emerald-600',
  'AI Personalization': 'from-indigo-500 to-purple-600',
  'AI Customer Experience': 'from-teal-500 to-green-600',
  'AI Social Media': 'from-blue-500 to-indigo-600',
  'AI Email Marketing': 'from-orange-500 to-red-600',
  'AI SEO': 'from-green-500 to-teal-600',
  'Space Technology': 'from-purple-500 to-indigo-600',
  'Space Safety': 'from-blue-500 to-cyan-600',
  'Quantum Space': 'from-green-500 to-emerald-600',
  'Space Weather': 'from-yellow-500 to-orange-600',
  'Autonomous Space': 'from-indigo-500 to-purple-600',
  'Space Tourism': 'from-pink-500 to-rose-600',
  'Space Agriculture': 'from-green-500 to-teal-600',
  'Space Energy': 'from-yellow-500 to-orange-600',
  'Space Research': 'from-indigo-500 to-blue-600'
};

export default function Revolutionary2026ServicesShowcase({
  services,
  title = "Revolutionary 2026 Services",
  subtitle = "Experience the future of technology with our cutting-edge AI, quantum, and space solutions",
  maxServices = 12
}: Revolutionary2026ServicesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  // Filter and sort services
  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
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
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const Revolutionary2026ServicesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Revolutionary2026ServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Revolutionary2026ServicesShowcase;
