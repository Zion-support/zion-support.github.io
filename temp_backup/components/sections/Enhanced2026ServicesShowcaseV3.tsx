import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Shield, Globe, Zap, Atom, Microscope, Car, Leaf, Factory, Truck, FlaskConical, Dna, GraduationCap, ShieldCheck, Globe2, Bot, Crown, Infinity, Sparkles, Palette, Code, Database, Cloud, Smartphone, Palette as PaletteIcon, Search as SearchIcon, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code as CodeIcon, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon2, Dna as DnaIcon2, Car as CarIcon2, Leaf as LeafIcon2, Factory as FactoryIcon2, Truck as TruckIcon2, Microscope as MicroscopeIcon2, GraduationCap as GraduationCapIcon2, ShieldCheck as ShieldCheckIcon2, Brain as BrainIcon2, Atom as AtomIcon2, Globe2 as Globe2Icon2, Bot as BotIcon2, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { innovative2026MicroSaasServicesV3 } from '../../data/innovative-2026-micro-saas-v3';
import { emergingTech2026ServicesV3 } from '../../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../../data/enterprise-it-2026-services-v3';
import { nextGenAI2026ServicesV3 } from '../../data/next-gen-ai-2026-services-v3';

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
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
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

export default function Enhanced2026ServicesShowcaseV3() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all new services
  const allServices: Service[] = [
    ...innovative2026MicroSaasServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...nextGenAI2026ServicesV3
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length;
  const microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length;
  const emergingCount = allServices.filter(service => service.category?.includes('Emerging')).length;
  const spaceCount = allServices.filter(service => service.category?.includes('Space')).length;
  const biotechCount = allServices.filter(service => service.category?.includes('Biotech')).length;
  const climateCount = allServices.filter(service => service.category?.includes('Climate')).length;
  const metaverseCount = allServices.filter(service => service.category?.includes('Metaverse')).length;
  const autonomousCount = allServices.filter(service => service.category?.includes('Autonomous')).length;
  const blockchainCount = allServices.filter(service => service.category?.includes('Blockchain')).length;
  const devopsCount = allServices.filter(service => service.category?.includes('DevOps')).length;
  const legalCount = allServices.filter(service => service.category?.includes('Legal')).length;
  const creativeCount = allServices.filter(service => service.category?.includes('Creative')).length;
  const supplyChainCount = allServices.filter(service => service.category?.includes('Supply Chain')).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: emergingCount },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: '🧬', count: biotechCount },
    { id: 'climate', name: 'Climate & Environment', icon: '🌍', count: climateCount },
    { id: 'metaverse', name: 'Metaverse & 3D', icon: '🌐', count: metaverseCount },
    { id: 'autonomous', name: 'Autonomous Systems', icon: '🤖', count: autonomousCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'devops', name: 'DevOps & Automation', icon: '🔧', count: devopsCount },
    { id: 'legal', name: 'Legal Technology', icon: '⚖️', count: legalCount },
    { id: 'creative', name: 'Creative AI', icon: '🎨', count: creativeCount },
    { id: 'supply-chain', name: 'Supply Chain', icon: '📦', count: supplyChainCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500/month', range: 'Under $500' },
    { id: 'medium', name: '$500 - $2K/month', range: '$500 - $2K' },
    { id: 'high', name: '$2K - $10K/month', range: '$2K - $10K' },
    { id: 'enterprise', name: 'Over $10K/month', range: 'Over $10K' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category?.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category?.includes('Quantum')) ||
                             (selectedCategory === 'enterprise' && service.category?.includes('Enterprise')) ||
                             (selectedCategory === 'micro-saas' && service.category?.includes('Micro SaaS')) ||
                             (selectedCategory === 'emerging' && service.category?.includes('Emerging')) ||
                             (selectedCategory === 'space' && service.category?.includes('Space')) ||
                             (selectedCategory === 'biotech' && service.category?.includes('Biotech')) ||
                             (selectedCategory === 'climate' && service.category?.includes('Climate')) ||
                             (selectedCategory === 'metaverse' && service.category?.includes('Metaverse')) ||
                             (selectedCategory === 'autonomous' && service.category?.includes('Autonomous')) ||
                             (selectedCategory === 'blockchain' && service.category?.includes('Blockchain')) ||
                             (selectedCategory === 'devops' && service.category?.includes('DevOps')) ||
                             (selectedCategory === 'legal' && service.category?.includes('Legal')) ||
                             (selectedCategory === 'creative' && service.category?.includes('Creative')) ||
                             (selectedCategory === 'supply-chain' && service.category?.includes('Supply Chain'));

      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && price < 500) ||
                          (selectedPriceRange === 'medium' && price >= 500 && price < 2000) ||
                          (selectedPriceRange === 'high' && price >= 2000 && price < 10000) ||
                          (selectedPriceRange === 'enterprise' && price >= 10000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      case 'growth':
        filtered.sort((a, b) => parseInt(b.growthRate.replace(/[^0-9]/g, '')) - parseInt(a.growthRate.replace(/[^0-9]/g, '')));
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

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

const Enhanced2026ServicesShowcaseV3: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Enhanced2026ServicesShowcaseV3</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Enhanced2026ServicesShowcaseV3;
