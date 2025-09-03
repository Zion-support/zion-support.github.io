<<<<<<< HEAD
import: React, { useState, useMemo } from 'react';';';';
import: { motion, AnimatePresence } from 'framer-motion';';';';
import: {
  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  // Blockchain icon removed - not available in lucide-react
=======
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';""
=======
<<<<<<< HEAD
import React, {useState, useMemo } from 'react';"
import {motion, AnimatePresence } from 'framer-motion';
import {Brain, Cloud,
=======
<<<<<<< HEAD
import React, { useState, useMemo } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
=======
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';""
=======
import React, { useState, useMemo } from 'react
>>>>>>> main
>>>>>>> main
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
// Import our existing service data
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';
=======
>>>>>>> main
import {
  Brain, Cloud,
>>>>>>> main
  Shield, Server,
  Zap, Globe,
  Cpu, Database,
  Network, Lock,
  Code, Rocket,
  Users, Search,
  Filter, Star,
  TrendingUp, DollarSign,
  Clock, CheckCircle,
  ArrowRight, Play,
  BookOpen, MessageCircle,
  Phone, Mail,
  MapPin, Globe as GlobeIcon,
  Atom, // Blockchain icon removed - not available in lucide-react
>>>>>>> main
  Heart,
<<<<<<< HEAD
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck,
  X
<<<<<<< HEAD
} from 'lucide-react';';';';

// Import: our existing service data
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';';';';
import: { comprehensiveServices } from '../data/comprehensiveServices';';';';

interface: Service {
  id: string,;,
  name: string,;,
  category: string,;,
  description: string,;,
  features: string[],;,
  benefits: string[],;,
  pricing:  ,{,
    starter: number,;,
    professional: number,;,
    enterprise: number,;,
    currency: string,;,
    billingCycle: string,;,
  };
  rating: number,;,
  reviewCount: number,;,
  launchDate: string,;,
  status: string,;,
  marketPrice: string,;,
  estimatedDelivery: string,;,
  website?: string;
  contactInfo?: {
    phone: string,;,
    email: string,;,
    address: string,;,
  };
=======
} from &apos;lucide-react';

// Import our existing service data
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from &apos;../data/ultimateInnovativeServices2026';
import { comprehensiveServices } from &apos;../data/comprehensiveServices';

=======
  Scale, Factory,
  Satellite, ShoppingCart,
  Building, Truck,
  Eye, Download,
  ExternalLink, Award,
  Target, Lightbulb,
<<<<<<< HEAD
  BarChart3, PieChart,
  Activity, Gauge,
  ShieldCheck, X'
} from 'lucide-react';
// Import our existing service data'
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';
=======
<<<<<<< HEAD
  BarChart3, PieChart,;
  Activity, Gauge,;
  ShieldCheck, X;
} from 'lucide-react';
// Import our existing service data
import {ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';
import {comprehensiveServices } from '../data/comprehensiveServices';
interface Service {id: string;
=======
  BarChart3, PieChart,
  Activity, Gauge,
<<<<<<< HEAD
  ShieldCheck, X;", "
} from 'lucide-react';
// Import our existing service data""
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026';""
=======
<<<<<<< HEAD
  ShieldCheck, X
=======
  ShieldCheck, X;",
>>>>>>> main
} from 'lucide-react';
// Import our existing service data"
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from '../data/ultimateInnovativeServices2026
>>>>>>> main
>>>>>>> main
>>>>>>> main
import { comprehensiveServices } from '../data/comprehensiveServices';
<<<<<<< HEAD
interface Service { id: string;
=======
>>>>>>> main
interface Service {
  id: string;
>>>>>>> main
>>>>>>> main
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: { 
    starter: number;
    professional: number;
    enterprise: number;
<<<<<<< HEAD
    currenc,
    y: string
    billingCycl,
    e: string}
=======
<<<<<<< HEAD
    currency: string;
<<<<<<< HEAD
    billingCycle: string;
    };
=======
    billingCycl,e: string;
  };
=======
    currency: string
    billingCycle: string}
>>>>>>> main
>>>>>>> main
>>>>>>> main
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: string;
  marketPrice: string;
  estimatedDelivery: string;
  website?: string;
<<<<<<< HEAD
  contactInfo?: { phone: string;
    email: string;
    address: string;
    };
=======
<<<<<<< HEAD
  contactInfo?: {phone: string;
=======
  contactInfo?: { 
    phone: string;
<<<<<<< HEAD
    emai,
    l: string
    addres,
    s: string}
>>>>>>> main
>>>>>>> main
}
'
=======
<<<<<<< HEAD
    email: string;
    addres,s: string;
  };
}&apos;&apos;

<<<<<<< HEAD
const: ComprehensiveServicesShowcase2027: React.FC: = () => ,{,
  const [searchTerm, setSearchTerm] = useState('');';';';
  const: [selectedCategory, setSelectedCategory] = useState<string>('All');';';';
  const: [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'newest'>('name');';';';
  const: [selectedService, setSelectedService] = useState<Service | null>(null);

  // Combine: services from multiple sources
  const allServices: Service[] = useMemo(() => ,{,
    const: services: Service[] = [],;,
=======
const ComprehensiveServicesShowcase2027: React.FC = () => {}
  const;const;const [searchTerm, setSearchTerm] = useState(&apos;&apos;);&apos;&apos;
  const [selectedCategory, setSelectedCategory] = useState<;<;<string>(&apos;All&apos;);&apos;
  const [sortBy, setSortBy] = useState<;<;<&apos;name&apos; | &apos;price&apos; | &apos;rating&apos; | &apos;newest&apos;>(&apos;name&apos;);&apos;
  const [selectedService, setSelectedService] = useState<;<;<Service | null>(null);

<<<<<<< HEAD
const ComprehensiveServicesShowcase2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'newest'>('name')
  const [selectedService, setSelectedService] = useState<Service | null>(null);
=======
>>>>>>> main
  // Combine services from multiple sources
  const allServices: Service[] = useMemo(() => {}
    const;const;const services: Service[] = [];
>>>>>>> main
    
    // Add: services from ULTIMATE_INNOVATIVE_SERVICES_2026
    ULTIMATE_INNOVATIVE_SERVICES_2026.forEach(service => {
<<<<<<< HEAD
      services.push({ id: service.id, name: service.name,
        category: service.category, description: service.description,
        features: service.features, benefits: service.benefits,
        pricing: { starter: service.pricing.starter, professional: service.pricing.professional,
          enterprise: service.pricing.enterprise, currency: service.pricing.currency,
          billingCycle: service.pricing.billingCycle
        }, rating: service.rating,
        reviewCount: service.reviewCount, launchDate: service.launchDate,
        status: service.status, marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery, website: service.website,
        contactInfo: service.contactInfo
      });
    });
    // Add services from comprehensiveServices
    comprehensiveServices.forEach(service => {
      services.push({ id: service.id, name: service.name,
        category: service.category, description: service.description,
        features: service.features, benefits: service.benefits,
        pricing: { starter: service.pricing.starter, professional: service.pricing.professional,
=======
      services.push({
<<<<<<< HEAD
        id: service.i,d,
        name: service.nam,e,
        category: service.categor,y,
        description: service.descriptio,n,
        features: service.feature,s,
        benefits: service.benefit,s,
        pricing:  ,{,
          starter: service.pricing.starte,r,
          professional: service.pricing.professiona,l,
          enterprise: service.pricing.enterpris,e,
          currency: service.pricing.currenc,y,
          billingCycle: service.pricing.billingCycl,e,
        },
        rating: service.ratin,g,
        reviewCount: service.reviewCoun,t,
        launchDate: service.launchDat,e,
        status: service.statu,s,
        marketPrice: service.marketPric,e,
        estimatedDelivery: service.estimatedDeliver,y,
        website: service.websit,e,
        contactInfo: service.contactInf,o,
      });
    });

    // Add: services from comprehensiveServices
    comprehensiveServices.forEach(service => {
      services.push({
        id: service.i,d,
        name: service.nam,e,
        category: service.categor,y,
        description: service.descriptio,n,
        features: service.feature,s,
        benefits: service.benefit,s,
        pricing:  ,{,
          starter: service.pricing.starte,r,
          professional: service.pricing.professiona,l,
          enterprise: service.pricing.enterpris,e,
          currency: service.pricing.currenc,y,
          billingCycle: service.pricing.billingCycl,e,
        },
        rating: service.ratin,g,
        reviewCount: service.reviewCoun,t,
        launchDate: service.launchDat,e,
        status: service.statu,s,
        marketPrice: service.marketPric,e,
        estimatedDelivery: service.estimatedDeliver,y,
        website: service.websit,e,
        contactInfo: service.contactInf,o,
=======
        i,d: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
        pricing: {
          starte,r: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
=======
>>>>>>> main
    email: string
    address: string}
}
""
>>>>>>> main
const ComprehensiveServicesShowcase2027: React.FC = () => {""
  const [searchTerm, setSearchTerm] = useState('');""
  const [selectedCategory, setSelectedCategory] = useState<string>('All');""
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'newest'>('name');
  const [selectedService, setSelectedService] = useState<Service | null" >(null);"
  // Combine services from multiple sources
  const allServices: Service[] = useMemo(() => {
    const service,
    s: Service[] = [];
    // Add services from ULTIMATE_INNOVATIVE_SERVICES_2026
    ULTIMATE_INNOVATIVE_SERVICES_2026.forEach(service => {
      services.push({
        i,
    d: service.id, name: service.name,
        category: service.category, description: service.description,
        features: service.features, benefits: service.benefits,
        pricing: {
          starte,
    r: service.pricing.starter, professional: service.pricing.professional,
>>>>>>> main
          enterprise: service.pricing.enterprise, currency: service.pricing.currency,
<<<<<<< HEAD
          billingCycle: service.pricing.billingCycle, }, rating: service.rating, reviewCount: service.reviewCount, launchDate: service.launchDate, status: service.status, marketPrice: service.marketPrice, estimatedDelivery: service.estimatedDelivery, website: service.website, contactInfo: service.contactInfo,
});, });
=======
<<<<<<< HEAD
>>>>>>> main
          billingCycle: service.pricing.billingCycle
        }, rating: service.rating,
        reviewCount: service.reviewCount, launchDate: service.launchDate,
        status: service.status, marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery, website: service.website,
        contactInfo: service.contactInfo
      });
    });

=======
          billingCycle: service.pricing.billingCycle,
}, rating: service.rating,
        reviewCount: service.reviewCount, launchDate: service.launchDate,
        status: service.status, marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery, website: service.website,
        contactInfo: service.contactInfo,
});,
});
>>>>>>> main
>>>>>>> main
    // Add services from comprehensiveServices
    comprehensiveServices.forEach(service => {services.push({
        id: service.id, name: service.name,
        category: service.category, description: service.description,
        features: service.features, benefits: service.benefits,
        pricing: {
<<<<<<< HEAD
          starte,
    r: service.pricing.starter, professional: service.pricing.professional,
=======
<<<<<<< HEAD
          starte,r: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
=======
          starter: service.pricing.starter, professional: service.pricing.professional,
>>>>>>> main
          enterprise: service.pricing.enterprise, currency: service.pricing.currency,
<<<<<<< HEAD
          billingCycle: service.pricing.billingCycle, }, rating: service.rating, reviewCount: service.reviewCount, launchDate: service.launchDate, status: service.status, marketPrice: service.marketPrice, estimatedDelivery: service.estimatedDelivery, website: service.website, contactInfo: service.contactInfo,
});, });
    return services;, }, []);
  const categories = useMemo(() => {""
=======
<<<<<<< HEAD
>>>>>>> main
          billingCycle: service.pricing.billingCycle
        }, rating: service.rating,
        reviewCount: service.reviewCount, launchDate: service.launchDate,
        status: service.status, marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery, website: service.website,
        contactInfo: service.contactInfo
>>>>>>> main
      });
    });

    return: services;
  }, []);
<<<<<<< HEAD

  const: categories = useMemo(() => {;
    const: cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];';';';
    return: cats.sort();
  }, [allServices]);

  const: filteredServices = useMemo(() => {
    const filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const: matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;';';';
      return: matchesSearch && matchesCategory;
    });

    // Sort: services
    switch (sortBy) {
      case 'name':';';';
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case: 'price':';';';
        filtered.sort((a, b) => a.pricing.starter: - b.pricing.starter);
        break;
      case: 'rating':';';';
        filtered.sort((a, b) => b.rating: - a.rating);
        break;
      case: 'newest':';';';
        filtered.sort((a, b) => new: Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    return: filtered;
=======
<<<<<<< HEAD
  const categories = useMemo(() => {'
    const cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();
  }, [allServices]);
  const filteredServices = useMemo(() => {
    const filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||'
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());""
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
=======
<<<<<<< HEAD
  const categories = useMemo(() => {const cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();
  }, [allServices]);
  const filteredServices = useMemo(() => {const filtered = allServices.filter(service => {
=======

<<<<<<< HEAD
  const categories = useMemo(() => {}
    const;const;const cats = [&apos;All&apos;, ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();
  }, [allServices]);&apos;

  const filteredServices = useMemo(() => {}
    const filtered = allServices.filter(service => {}
      const;const;const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === &apos;All&apos; || service.category === selectedCategory;
>>>>>>> main
      return matchesSearch && matchesCategory;
    });

=======
  const categories = useMemo(() => {
=======
          billingCycle: service.pricing.billingCycle,
}, rating: service.rating,
        reviewCount: service.reviewCount, launchDate: service.launchDate,
        status: service.status, marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery, website: service.website,
        contactInfo: service.contactInfo,
});,
});
    return services;,
}, []);
  const categories = useMemo(() => {"
>>>>>>> main
>>>>>>> main
    const cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();, }, [allServices]);
  const filteredServices = useMemo(() => {
    const filtered = allServices.filter(service => {
>>>>>>> main
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||""
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());""
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;, });
>>>>>>> main
    // Sort services
<<<<<<< HEAD
    switch (sortBy) {'
=======
<<<<<<< HEAD
    switch (sortBy) {case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name));
=======
<<<<<<< HEAD
    switch (sortBy) {""
=======
<<<<<<< HEAD
    switch (sortBy) {
<<<<<<< HEAD
      case &apos;name&apos;:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case &apos;price&apos;:
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case &apos;rating&apos;:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case &apos;newest&apos;:
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
=======
>>>>>>> main
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name));
>>>>>>> main
        break;
      case 'price': filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest': filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
>>>>>>> main
        break;
    }

    return filtered;
<<<<<<< HEAD
  }, [allServices, searchTerm, selectedCategory, sortBy])
=======
<<<<<<< HEAD
  }, [allServices, searchTerm, selectedCategory, sortBy]);&apos;
=======
>>>>>>> main
  }, [allServices, searchTerm, selectedCategory, sortBy]);
<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {switch (category) {
=======
=======
    switch (sortBy) {"
>>>>>>> main
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;""
      case 'price': filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;""
      case 'rating': filtered.sort((a, b) => b.rating - a.rating);
        break;""
      case 'newest': filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
<<<<<<< HEAD
        break;, }
=======
        break;,
}
>>>>>>> main
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
  const: getCategoryIcon = (category: string) => ,{,;
    switch: (category) {;
      case: 'Artificial Intelligence':';';';
        return: <Brain className="w-6 h-6" />;";";";
      case: 'Quantum Computing':';';';
        return: <Atom className="w-6 h-6" />;";";";
      case: 'Neuromorphic Computing':';';';
        return: <Cpu className="w-6 h-6" />;";";";
      case: 'Synthetic Biology':';';';
        return: <Heart className="w-6 h-6" />;";";";
      case: 'Blockchain':';';';
        return: <Blockchain className="w-6 h-6" />;";";";
      case: 'Cybersecurity':';';';
        return: <Shield className="w-6 h-6" />;";";";
      case: 'Internet of Things':';';';
        return: <Network className="w-6 h-6" />;";";";
      case: 'Metaverse':';';';
        return: <Globe className="w-6 h-6" />;";";";
      case: 'Robotics':';';';
        return: <Factory className="w-6 h-6" />;";";";
      case: 'Space Technology':';';';
        return: <Satellite className="w-6 h-6" />;";";";
      default: return: <Lightbulb className="w-6 h-6" />;",;,";";
    };
  };

  const: getStatusColor = (status: string) => ,{,;
    switch: (status.toLowerCase()) {;
      case: 'live':';';';
        return: 'bg-green-100 text-green-800';';';';
      case: 'beta':';';';
        return: 'bg-blue-100 text-blue-800';';';';
      case: 'coming soon':';';';
        return: 'bg-yellow-100 text-yellow-800';';';';
      case: 'preview':';';';
        return: 'bg-purple-100 text-purple-800';';';';
      default: return: 'bg-gray-100 text-gray-800';',;,';';
    };
  };

  return (;
    <div: className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">";";";
      {/* Header: */}
      <div className="relative overflow-hidden">";";";
        <div: className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />";";";
        <div: className="relative max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-24">",;,";";
          <motion.div: initial={{ opacity:  ,0, y: 20, }}
            animate={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.8, }}
            className="text-center"";";";
          >
            <h1: className="text-5xl md: text-7xl: font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">",;,";";
              Comprehensive: Services 2027
            </h1>
            <p className="text-xl md: text-2xl: text-gray-300 max-w-4xl mx-auto mb-8">",;,";";
              Discover: our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
=======
    return filtered;, }, [allServices, searchTerm, selectedCategory, sortBy]);
>>>>>>> main
  const getCategoryIcon = (category: string) => {
<<<<<<< HEAD
    switch (category) {'
      case 'Artificial Intelligence': return <Brain className="w-6 h-6" />;"
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;"
      case 'Neuromorphic Computing': return <Cpu className="w-6 h-6" />;"
      case 'Synthetic Biology': return <Heart className="w-6 h-6" />;"
      case 'Blockchain': return <Blockchain className="w-6 h-6" />;"
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;"
      case 'Internet of Things': return <Network className="w-6 h-6" />;"
      case 'Metaverse': return <Globe className="w-6 h-6" />;"
      case 'Robotics': return <Factory className="w-6 h-6" />;"
      case 'Space Technology': return <Satellite className="w-6 h-6" />;"
      defaul,
    t: return <Lightbulb className="w-6 h-6" />;
=======
<<<<<<< HEAD
    switch (category) {""
=======
<<<<<<< HEAD
    switch (category) {
<<<<<<< HEAD
      case 'Artificial Intelligence': return <Brain className="w-6 h-6" />
      case 'Quantum Computing': return <Atom className="w-6 h-6" />
      case 'Neuromorphic Computing': return <Cpu className="w-6 h-6" />
      case 'Synthetic Biology': return <Heart className="w-6 h-6" />
      case 'Blockchain': return <Blockchain className="w-6 h-6" />
      case 'Cybersecurity': return <Shield className="w-6 h-6" />
      case 'Internet of Things': return <Network className="w-6 h-6" />
      case 'Metaverse': return <Globe className="w-6 h-6" />
      case 'Robotics': return <Factory className="w-6 h-6" />
      case 'Space Technology': return <Satellite className="w-6 h-6" />
      default: return <Lightbulb className="w-6 h-6" />
=======
<<<<<<< HEAD
      case &apos;Artificial Intelligence&apos;:
        return&apos;}} <;<Brain className=&quot;w-6 h-6&quot; />;
      case &apos;Quantum Computing&apos;:
        return&apos; <Atom className=&quot;w-6 h-6&quot; />;
      case &apos;Neuromorphic Computing&apos;:
        return&apos; <Cpu className=&quot;w-6 h-6&quot; />;
      case &apos;Synthetic Biology&apos;:
        return&apos; <Heart className=&quot;w-6 h-6&quot; />;
      case &apos;Blockchain&apos;:
        return&apos; <Blockchain className=&quot;w-6 h-6&quot; />;
      case &apos;Cybersecurity&apos;:
        return&apos; <Shield className=&quot;w-6 h-6&quot; />;
      case &apos;Internet of Things&apos;:
        return&apos; <Network className=&quot;w-6 h-6&quot; />;
      case &apos;Metaverse&apos;:
        return&apos; <Globe className=&quot;w-6 h-6&quot; />;
      case &apos;Robotics&apos;:
        return&apos; <Factory className=&quot;w-6 h-6&quot; />;
      case &apos;Space Technology&apos;:
        return&apos; <Satellite className=&quot;w-6 h-6&quot; />;
      default:
        return&quot; <Lightbulb className=&quot;w-6 h-6&quot; />;
    }
  };&quot;

=======
>>>>>>> main
      case 'Artificial Intelligence': return <Brain className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Neuromorphic Computing': return <Cpu className="w-6 h-6" />;
      case 'Synthetic Biology': return <Heart className="w-6 h-6" />;
      case 'Blockchain': return <Blockchain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Internet of Things': return <Network className="w-6 h-6" />;
      case 'Metaverse': return <Globe className="w-6 h-6" />;
      case 'Robotics': return <Factory className="w-6 h-6" />;
      case 'Space Technology': return <Satellite className="w-6 h-6" />;
      default: return <Lightbulb className="w-6 h-6" />;
>>>>>>> main
>>>>>>> main
    }
=======
    switch (category) {"
>>>>>>> main
      case 'Artificial Intelligence': return <Brain className="w-6 h-6" /" >;"
      case 'Quantum Computing': return <Atom className="w-6 h-6" /" >;"
      case 'Neuromorphic Computing': return <Cpu className="w-6 h-6" /" >;"
      case 'Synthetic Biology': return <Heart className="w-6 h-6" /" >;"
      case 'Blockchain': return <Blockchain className="w-6 h-6" /" >;"
      case 'Cybersecurity': return <Shield className="w-6 h-6" /" >;"
      case 'Internet of Things': return <Network className="w-6 h-6" /" >;"
      case 'Metaverse': return <Globe className="w-6 h-6" /" >;"
      case 'Robotics': return <Factory className="w-6 h-6" /" >;"
      case 'Space Technology': return <Satellite className="w-6 h-6" /" >;"
      default: return <Lightbulb className="w-6 h-6" /" >;, "
}
>>>>>>> main
  };
<<<<<<< HEAD
  const getStatusColor = (status: string) => {switch (status.toLowerCase()) {
=======
>>>>>>> main
  const getStatusColor = (status: string) => {
<<<<<<< HEAD
    switch (status.toLowerCase()) {"
=======
<<<<<<< HEAD
    switch (status.toLowerCase()) {""
      case 'live': return 'bg-green-100 text-green-800';""
      case 'beta': return 'bg-blue-100 text-blue-800';""
      case 'coming soon': return 'bg-yellow-100 text-yellow-800';""
      case 'preview': return 'bg-purple-100 text-purple-800';""
      default: return 'bg-gray-100 text-gray-800';, }
=======
<<<<<<< HEAD
    switch (status.toLowerCase()) {
<<<<<<< HEAD
      case &apos;live&apos;:
        return &apos;bg-green-100 text-green-800';
      case &apos;beta&apos;:
        return &apos;bg-blue-100 text-blue-800';
      case &apos;coming soon&apos;:
        return &apos;bg-yellow-100 text-yellow-800';
      case &apos;preview&apos;:
        return &apos;bg-purple-100 text-purple-800';
      defaul,t:
        return &apos;bg-gray-100 text-gray-800';
=======
>>>>>>> main
>>>>>>> main
      case 'live': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-blue-100 text-blue-800';
      case 'coming soon': return 'bg-yellow-100 text-yellow-800';
      case 'preview': return 'bg-purple-100 text-purple-800';
<<<<<<< HEAD
      defaul,
    t: return 'bg-gray-100 text-gray-800';
=======
      default: return 'bg-gray-100 text-gray-800';
>>>>>>> main
>>>>>>> main
    }
<<<<<<< HEAD
  }
  return (
=======
=======
    switch (status.toLowerCase()) {"
      case 'live': return 'bg-green-100 text-green-800
      case 'beta': return 'bg-blue-100 text-blue-800
      case 'coming soon': return 'bg-yellow-100 text-yellow-800
      case 'preview': return 'bg-purple-100 text-purple-800
      default: return 'bg-gray-100 text-gray-800';,
}
>>>>>>> main
>>>>>>> main
  };
<<<<<<< HEAD
  return ('
>>>>>>> main
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}"
      <div className="relative overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />"
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-24">
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center"" >""
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2027"
            </h1>""
            <p className="text-xl m,
    d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
              From quantum computing to autonomous business operations.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scal,
    e: 1.05 }}"
                whileTap={{ scale: 0.95 }}""
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"" >""
                <Play className="w-5 h-5" /" >
                Watch Demo
              </motion.button>
              <motion .button
                whileHover={{ scale: 1.05 }}"
                whileTap={{ scale: 0.95 }}""
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"" >""
=======
<<<<<<< HEAD

  return (&apos;&apos;
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white&quot;>
      {/* Header */}&quot;
      <div className=&quot;relative overflow-hidden&quot;>&quot;"
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot; />&quot;
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>&quot;"
          <motion.div
            initial={{ opacit,y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center&quot;
          >&quot;
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
              Comprehensive Services 2027&quot;
            </h1>
            <p className=&quot;text-xl m,d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Discover our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
              From quantum computing to autonomous business operations.&quot;
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
=======
  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
<<<<<<< HEAD
      {/* Header */}""
      <div className="relative overflow-hidden">""
=======
<<<<<<< HEAD
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8   }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
=======
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}" className="text-center"" >"
            <h1 className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
>>>>>>> main
              Comprehensive Services 2027
            </h1>"
=======
          <motion.div
=======
      {/* Header */}"
      <div className="relative overflow-hidden">"
>>>>>>> main
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" /" >"
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">
          <motion .div
>>>>>>> main
            initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
            animate={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}""
            className="text-center""" >""
=======
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}"
            className='text-center' >"
>>>>>>> main
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2027""
            </h1>""
>>>>>>> main
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
>>>>>>> main
              From quantum computing to autonomous business operations.
<<<<<<< HEAD
            </p>""
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <motion .button
                whileHover={{ scale: 1.05 }}""
                whileTap={{ scale: 0.95 }}""
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2""" >""
=======
<<<<<<< HEAD
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;,";";
              <motion.button: whileHover={{ scale: 1.05, }}
                whileTap={{ scale: 0.95, }}
                className="bg-gradient-to-r: from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"";";";
              >
                <Play: className="w-5 h-5" />";";";
                Watch: Demo
=======
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
              <motion.button
                whileHover={{ scale: 1.05   }}
                whileTap={{ scale: 0.95   }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
=======
<<<<<<< HEAD
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"" >"
                <Play className="w-5 h-5" /" >
>>>>>>> main
                Watch Demo
>>>>>>> main
              </motion.button>
              <motion .button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"" >"
>>>>>>> main
                <BookOpen className="w-5 h-5" /" >
=======
>>>>>>> main
              <motion.button
<<<<<<< HEAD
                whileHover={{ scale: 1.05, }}
                whileTap={{ scale: 0.95, }}
                className="border: border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"";";";
              >
                <BookOpen: className="w-5 h-5" />";";";
                View: Documentation
=======
                whileHover={{ scal,e: 1.05 }}
                whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2&quot;
              >&quot;
                <Play className=&quot;w-5 h-5&quot; />
                Watch Demo&quot;
              </motion.button>
              <motion.button
<<<<<<< HEAD
                whileHover={{ scale: 1.05   }}
                whileTap={{ scale: 0.95   }}
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
=======
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2&quot;
              >&quot;
                <BookOpen className=&quot;w-5 h-5&quot; />
                View Documentation&quot;
=======
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
>>>>>>> main
              >
                <Play className="w-5 h-5" />
=======
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <motion .button
                whileHover={{ scale: 1.05 }}"
                whileTap={{ scale: 0.95 }}"
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2' >"
>>>>>>> main
                <Play className="w-5 h-5" /"" >
>>>>>>> main
                Watch Demo
              </motion.button>
              <motion .button
<<<<<<< HEAD
                whileHover={{ scale: 1.05 }}""
                whileTap={{ scale: 0.95 }}""
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2""" >""
=======
                whileHover={{ scale: 1.05 }}"
                whileTap={{ scale: 0.95 }}"
                className='border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2' >"
>>>>>>> main
                <BookOpen className="w-5 h-5" /"" >
>>>>>>> main
                View Documentation
>>>>>>> main
>>>>>>> main
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-8">",;,";";
        <div: className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">";";";
          <div: className="flex flex-col lg: flex-row: gap-6">",;,";";
            {/* Search: */}
            <div className="flex-1">";";";
              <div: className="relative">";";";
                <Search: className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />";";";
                <input: type="text"";";";
                  placeholder="Search: services..."";";";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full: pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-purple-500"",;,";";
=======
<<<<<<< HEAD
"
      {/* Search and Filters */}""
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-8">""
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">""
          <div className="flex flex-col l,
    g:flex-row gap-6">"
            {/* Search */}""
            <div className="flex-1">""
              <div className="relative">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /" >"
                <input ""
                  type="text""
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focu,
    s:ring-2 focu,
    s:ring-purple-500"
=======
<<<<<<< HEAD

<<<<<<< HEAD
      {/* Search and Filters */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">"
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">"
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}"
            <div className="flex-1">"
              <div className="relative">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /" >
                <input " type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500"
>>>>>>> main
>>>>>>> main
                />
              </div>
            </div>
"
            {/* Category Filter */}""
            <div className="flex-shrink-0">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
=======
      {/* Search and Filters */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>&quot;"
        <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20&quot;>&quot;"
          <div className=&quot;flex flex-col l,g:flex-row gap-6&quot;>
            {/* Search */}&quot;
            <div className=&quot;flex-1&quot;>&quot;"
              <div className=&quot;relative&quot;>&quot;"
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
=======
""
      {/* Search and Filters */}""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">""
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">""
          <div className="flex flex-col lg:flex-row gap-6">""
            {/* Search */}""
            <div className="flex-1">""
              <div className="relative">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /"" >""
                <input ""
                  type="text"
                  placeholder="Search services..."
>>>>>>> main
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                  className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
                />&quot;
              </div>
            </div>

<<<<<<< HEAD
            {/* Category: Filter */}
            <div className="flex-shrink-0">";";";
              <select: value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none: focus:ring-2: focus:ring-purple-500"",;,";";
              >
                {categories.map(category: => (
=======
            {/* Category Filter */}
            <div className=&quot;flex-shrink-0&quot;>&quot;"
              <select
                value={selectedCategory}
<<<<<<< HEAD
                onChange={(e) => setSelectedCategory(e.target.value)}"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focu,
    s:ring-2 focu,
    s:ring-purple-500"
              >
                {categories.map(category => ("
                  <option key={category} value={category}" >{category}</option>
                ));
              </select>
            </div>
"
            {/* Sort */}""
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focu,
    s:ring-2 focu,
    s:ring-purple-500"
=======
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=&quot;px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
>>>>>>> main
              >
                {categories.map(category => (&quot;}
>>>>>>> main
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
<<<<<<< HEAD
            <div className="flex-shrink-0">";";";
              <select: value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none: focus:ring-2: focus:ring-purple-500"",;,";";
              >
                <option: value="name">Sort by Name</option>";";";
                <option: value="price">Sort by Price</option>";";";
                <option: value="rating">Sort by Rating</option>";";";
                <option: value="newest">Sort by Newest</option>";";";
=======
            <div className=&quot;flex-shrink-0&quot;>&quot;"
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className=&quot;px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
              >&quot;
                <option value=&quot;name&quot;>Sort by Name&quot;</option>
                <option value=&quot;price&quot;>Sort by Price&quot;</option>
                <option value=&quot;rating&quot;>Sort by Rating&quot;</option>
                <option value=&quot;newest&quot;>Sort by Newest&quot;</option>
=======
=======
                  onChange={(e) =" > setSearchTerm(e.target.value)}"
>>>>>>> main
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
""
            {/* Category Filter */}""
            <div className="flex-shrink-0">
<<<<<<< HEAD
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}
=======
<<<<<<< HEAD
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
=======
              <select value={selectedCategory}
                onChange={(e) =" > setSelectedCategory(e.target.value)}"
>>>>>>> main
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (""
                  <option key={category} value={category}"" >{category}</option>
                ))}
              </select>
            </div>
""
            {/* Sort */}""
            <div className="flex-shrink-0">
<<<<<<< HEAD
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
>>>>>>> main
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
=======
              <select value={sortBy}
                onChange={(e) =" > setSortBy(e.target.value as any)}"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
<<<<<<< HEAD
              >""
                <option value="name">Sort by Name</option>""
                <option value="price">Sort by Price</option>""
                <option value="rating">Sort by Rating</option>""
=======
>>>>>>> main
              >"
                <option value="name">Sort by Name</option>"
                <option value="price">Sort by Price</option>"
                <option value="rating">Sort by Rating</option>"
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
                <option value="newest">Sort by Newest</option>
>>>>>>> main
>>>>>>> main
              </select>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
"
      {/* Services Grid */}""
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">""
        <div className="grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-3 gap-6">
=======
<<<<<<< HEAD

<<<<<<< HEAD
      {/* Services: Grid */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-8">",;,";";
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-6">",;,";";
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div: key={service.id}
                initial={{ opacity:  ,0, y: 20, }}
                animate={{ opacity:  ,1, y: 0, }}
                transition={{ duration: 0.,5, delay: index: * 0.1, }}
                whileHover={{ y: -5, }}
                className="bg-white/10: backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: border-purple-400/50: transition-all duration-300 cursor-pointer"",;,";";
                onClick={() => setSelectedService(service)}
              >
                {/* Service: Header */}
                <div className="flex items-start justify-between mb-4">";";";
                  <div: className="flex items-center gap-3">";";";
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3: className="text-xl font-semibold text-white mb-1">{service.name}</h3>";";";
                      <span: className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>`;
=======
<<<<<<< HEAD
      {/* Services Grid */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion .div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }}" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: border-purple-400/50 transition-all duration-300 cursor-pointer" onClick={() =" > setSelectedService(service)}
              >
                {/* Service Header */}"
                <div className="flex items-start justify-between mb-4">"
=======
      {/* Services Grid */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>&quot;"
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&quot;>&quot;"
          <AnimatePresence>
            {filteredServices.map((service, index) => (}
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                whileHover={{ y: -5   }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
=======
                whileHover={{ y: -5 }}
                className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer&quot;
>>>>>>> main
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}&quot;
                <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                  <div className=&quot;flex items-center gap-3&quot;>
                    {getCategoryIcon(service.category)}&quot;
                    <div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-1&quot;>{service.name}&quot;</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
>>>>>>> main
                        {service.status}
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div: className="flex items-center gap-1">";";";
                    <Star: className="w-4 h-4 text-yellow-400 fill-current" />";";";
                    <span: className="text-sm text-gray-300">{service.rating}</span>";";";
                    <span: className="text-xs text-gray-400">({service.reviewCount})</span>";";";
                  </div>
                </div>

                {/* Description: */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>";";";

                {/* Pricing: */}
                <div className="mb-4">";";";
                  <div: className="flex items-center gap-2 mb-2">";";";
                    <DollarSign: className="w-4 h-4 text-green-400" />";";";
                    <span: className="text-sm text-gray-300">Starting from</span>";";";
                    <span: className="text-lg font-bold text-green-400">";";";
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}
                    </span>
                    <span: className="text-xs text-gray-400">/{service.pricing.billingCycle}</span>";";";
                  </div>
                  <div: className="text-xs text-gray-400">";";";
                    Market: price: {service.marketPric,e}
                  </div>
                </div>

                {/* Features: Preview */}
                <div className="mb-4">";";";
                  <div: className="flex flex-wrap gap-2">";";";
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span: key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"";";";
=======
                  <div className=&quot;flex items-center gap-1&quot;>&quot;"
                    <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />&quot;
                    <span className=&quot;text-sm text-gray-300&quot;>{service.rating}&quot;</span>
                    <span className=&quot;text-xs text-gray-400&quot;>({service.reviewCount})&quot;</span>
                  </div>
                </div>

                {/* Description */}
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{service.description}&quot;</p>

                {/* Pricing */}
                <div className=&quot;mb-4&quot;>&quot;"
                  <div className=&quot;flex items-center gap-2 mb-2&quot;>&quot;"
                    <DollarSign className=&quot;w-4 h-4 text-green-400&quot; />&quot;
                    <span className=&quot;text-sm text-gray-300&quot;>Starting from&quot;</span>
                    <span className=&quot;text-lg font-bold text-green-400&quot;>
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}&quot;
                    </span>
                    <span className=&quot;text-xs text-gray-400&quot;>/{service.pricing.billingCycle}&quot;</span>
                  </div>
                  <div className=&quot;text-xs text-gray-400&quot;>
                    Market price: {service.marketPrice}&quot;
                  </div>
                </div>

                {/* Features Preview */}
                <div className=&quot;mb-4&quot;>&quot;"
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (&quot;}
                      <span
                        key={idx}
                        className=&quot;px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full&quot;
>>>>>>> main
                      >
                        {feature}&quot;
                      </span>
                    ))}
<<<<<<< HEAD
                    {service.features.length: > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">";";";
                        +{service.features.length: - 3} more
=======
                    {service.features.length > 3 && (}
                      <span className=&quot;px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full&quot;>
                        +{service.features.length - 3} more&quot;
=======
""
      {/* Services Grid */}""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> main
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion .div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                whileHover={{ y: -5 }}""
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer""
                onClick={() =" > setSelectedService(service)}
              >"
                {/* Service Header */}""
                <div className="flex items-start justify-between mb-4">""
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}"
                    <div>""
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>"
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}" >
                        {service.status}
                      </span>
                    </div>"
                  </div>""
                  <div className="flex items-center gap-1">""
                    <Star className="w-4 h-4 text-yellow-400 fill-current" /" >""
=======
                transition={{ duration: 0.5, delay: index * 0.1 }}""
                whileHover={{ y: -5 }}""
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                onClick={() ="" > setSelectedService(service)}
              >""
                {/* Service Header */}""
                <div className="flex items-start justify-between mb-4">""
>>>>>>> main
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}""
                    <div>""
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>""
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}"" >
                        {service.status}
                      </span>
                    </div>""
                  </div>""
                  <div className="flex items-center gap-1">""
                    <Star className="w-4 h-4 text-yellow-400 fill-current" /"" >""
>>>>>>> main
                    <span className="text-sm text-gray-300">{service.rating}</span>""
                    <span className="text-xs text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>
<<<<<<< HEAD
"
                {/* Description */}""
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
"
                {/* Pricing */}""
                <div className="mb-4">""
                  <div className="flex items-center gap-2 mb-2">""
                    <DollarSign className="w-4 h-4 text-green-400" /" >""
                    <span className="text-sm text-gray-300">Starting from</span>""
                    <span className="text-lg font-bold text-green-400">
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}"
                    </span>""
                    <span className="text-xs text-gray-400">/{service.pricing.billingCycle}</span>"
                  </div>""
=======
""
                {/* Description */}""
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
""
                {/* Pricing */}""
                <div className="mb-4">""
                  <div className="flex items-center gap-2 mb-2">""
                    <DollarSign className="w-4 h-4 text-green-400" /"" >""
                    <span className="text-sm text-gray-300">Starting from</span>""
                    <span className="text-lg font-bold text-green-400">
<<<<<<< HEAD
                      {service.pricing.currency}, {service.pricing.starter.toLocaleString()}
                    </span>"
                    <span className="text-xs text-gray-400">/{service.pricing.billingCycle}</span>
                  </div>"
=======
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}""
                    </span>""
                    <span className="text-xs text-gray-400">/{service.pricing.billingCycle}</span>""
                  </div>""
>>>>>>> main
>>>>>>> main
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>
<<<<<<< HEAD
"
                {/* Features Preview */}""
                <div className="mb-4">""
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => ("
                      <span key={idx}""
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"" >
                        {feature}
                      </span>
                    ))}"
                    {service.features.length > 3 && (""
=======
""
                {/* Features Preview */}""
                <div className="mb-4">""
                  <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx}" className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"" >
                        {feature}
                      </span>
                    ))}, {service.features.length > 3 && ("
=======
<<<<<<< HEAD
                    {service.features.slice(0, 3).map((feature, idx) => (""
                      <span key={idx}""
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full""" >
=======
                    {service.features.slice(0, 3).map((feature, idx) => ("
                      <span key={idx}"
                        className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full' >
>>>>>>> main
                        {feature}
                      </span>
                    ))}""
                    {service.features.length > 3 && (""
>>>>>>> main
>>>>>>> main
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{service.features.length - 3} more
>>>>>>> main
>>>>>>> main
                      </span>
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Action Buttons */}"
                <div className="flex gap-2">"
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover: from-blue-700 hove,
    r:to-purple-700 transition-all duration-200">
                    Get Started"
                  </button>""
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hove,
    r:bg-white/10 transition-all duration-200">""
                    <Eye className="w-4 h-4" /" >
=======
<<<<<<< HEAD
                {/* Action Buttons */}""
                <div className="flex gap-2">""
=======
<<<<<<< HEAD
                {/* Action Buttons */}
<<<<<<< HEAD
                <div className="flex gap-2">";";";
                  <button: className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;,";";
                    Get: Started
                  </button>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover: bg-white/10: transition-all duration-200">",;,";";
                    <Eye: className="w-4 h-4" />";";";
=======
<<<<<<< HEAD
                <div className=&quot;flex gap-2&quot;>&quot;"
                  <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>
                    Get Started&quot;
                  </button>
                  <button className=&quot;px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hove,r:bg-white/10 transition-all duration-200&quot;>&quot;"
                    <Eye className=&quot;w-4 h-4&quot; />&quot;
=======
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200">
                    <Eye className="w-4 h-4" />
=======
                {/* Action Buttons */}"
                <div className="flex gap-2">"
>>>>>>> main
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started""
                  </button>""
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200">""
                    <Eye className="w-4 h-4" /"" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

<<<<<<< HEAD
        {/* No: Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            className="text-center: py-16"";";";
          >
            <Search: className="w-16 h-16 text-gray-400 mx-auto mb-4" />";";";
            <h3: className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>";";";
            <p: className="text-gray-400">Try adjusting your search or filter criteria</p>";";";
=======
<<<<<<< HEAD
        {/* No Results */}, {filteredServices.length === 0 && (
          <motion .div initial={{ opacity: 0 }} animate={{ opacity: 1 }}" className="text-center py-16"" >"
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" /" >"
=======
        {/* No Results */}
<<<<<<< HEAD
        {filteredServices.length === 0 && (}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0   }}
            animate={{ opacity: 1   }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
=======
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=&quot;text-center py-16&quot;
          >&quot;
            <Search className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
            <h3 className=&quot;text-xl font-semibold text-gray-300 mb-2&quot;>No services found&quot;</h3>
            <p className=&quot;text-gray-400&quot;>Try adjusting your search or filter criteria&quot;</p>
=======
        {filteredServices.length === 0 && (
          <motion .div
<<<<<<< HEAD
            initial={{ opacity: 0 }}"
            animate={{ opacity: 1 }}""
            className="text-center py-16"" >""
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" /" >""
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>""
=======
<<<<<<< HEAD
            initial={{ opacity: 0 }}""
            animate={{ opacity: 1 }}""
            className="text-center py-16""" >""
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" /"" >""
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>""
=======
            initial={{ opacity: 0 }}"
            animate={{ opacity: 1 }}"
            className='text-center py-16' >"
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" /"" >"
>>>>>>> main
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>"
>>>>>>> main
>>>>>>> main
>>>>>>> main
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
>>>>>>> main
>>>>>>> main
          </motion.div>
        )}
      </div>

      {/* Service: Detail Modal */}
      <AnimatePresence>
<<<<<<< HEAD
        {selectedService && (}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            className="fixed: inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"";";";
            onClick={() => setSelectedService(null)}
          >
            <motion.div: initial={{ scale: 0.,9, opacity: 0, }}
              animate={{ scale:  ,1, opacity: 1, }}
              exit={{ scale: 0.,9, opacity: 0, }}
              className="bg-slate-800: rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"";";";
              onClick={(e) => e.stopPropagation()}
            >
              <div: className="p-6">";";";
                <div: className="flex items-start justify-between mb-6">";";";
                  <div: className="flex items-center gap-4">";";";
                    {getCategoryIcon(selectedService.category)}
                    <div>
                      <h2: className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>";";";
                      <span: className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}>`;
=======
<<<<<<< HEAD
            initial={{ opacity: 0   }}
            animate={{ opacity: 1   }}
            exit={{ opacity: 0   }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
=======
            initial={{ opacity: 0 }}
<<<<<<< HEAD
            animate={{ opacity: 1 }}"
            exit={{ opacity: 0 }}""
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4""
            onClick={() =" > setSelectedService(null)}
          >
            <motion .div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}"
              exit={{ scale: 0.9, opacity: 0 }}""
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto""
              onClick={(e) =" > e.stopPropagation()}"
            >""
              <div className="p-6">""
                <div className="flex items-start justify-between mb-6">""
                  <div className="flex items-center gap-4">
                    {getCategoryIcon(selectedService.category)}"
                    <div>""
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>``
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}" >
=======
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
>>>>>>> main
            onClick={() => setSelectedService(null)}
          >&quot;
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className=&quot;bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
              onClick={(e) => e.stopPropagation()}
            >&quot;
              <div className=&quot;p-6&quot;>&quot;"
                <div className=&quot;flex items-start justify-between mb-6&quot;>&quot;"
                  <div className=&quot;flex items-center gap-4&quot;>
                    {getCategoryIcon(selectedService.category)}&quot;
                    <div>
                      <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>{selectedService.name}&quot;</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}>
=======
        {selectedService && (
<<<<<<< HEAD
          <motion .div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}" className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() =" > setSelectedService(null)}
          >
            <motion .div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}" className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) =" > e.stopPropagation()}
            >"
              <div className="p-6">"
                <div className="flex items-start justify-between mb-6">"
=======
          <motion .div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}""
            exit={{ opacity: 0 }}""
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() ="" > setSelectedService(null)}
          >
            <motion .div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}""
              exit={{ scale: 0.9, opacity: 0 }}""
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) ="" > e.stopPropagation()}""
            >""
              <div className="p-6">""
                <div className="flex items-start justify-between mb-6">""
>>>>>>> main
                  <div className="flex items-center gap-4">
                    {getCategoryIcon(selectedService.category)}""
                    <div>"`"
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>`"`"
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}"" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
                        {selectedService.status}
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD
                  <button: onClick={() => setSelectedService(null)}
                    className="p-2 hover: bg-white/10: rounded-lg transition-colors"",;,";";
                  >
                    <X: className="w-6 h-6 text-gray-400" />";";";
=======
<<<<<<< HEAD
                  <button
                    onClick={() => setSelectedService(null)}"
=======
<<<<<<< HEAD
                  <button onClick={() => setSelectedService(null)}
>>>>>>> main
                    className="p-2 hover: bg-white/10 rounded-lg transition-colors"
                  >"
                    <X className="w-6 h-6 text-gray-400" />
=======
<<<<<<< HEAD
                  <button
                    onClick={() => setSelectedService(null)}
<<<<<<< HEAD
                    className=&quot;p-2 hover:bg-white/10 rounded-lg transition-colors&quot;
                  >&quot;
                    <X className=&quot;w-6 h-6 text-gray-400&quot; />&quot;
>>>>>>> main
>>>>>>> main
                  </button>
<<<<<<< HEAD
                </div>"
""
                <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-8">
                  {/* Left Column */}"
                  <div>""
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>""
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>"
""
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>""
                    <ul className="space-y-2 mb-6">"
                      {selectedService.features.map((feature, idx) => (""
                        <li key={idx} className="flex items-center gap-2 text-gray-300">""
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /" >
                          {feature}
                        </li>
                      ))}
                    </ul>"
""
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>""
                    <ul className="space-y-2 mb-6">"
                      {selectedService.benefits.map((benefit, idx) => (""
                        <li key={idx} className="flex items-center gap-2 text-gray-300">""
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" /" >
=======
                </div>

<<<<<<< HEAD
                <div: className="grid grid-cols-1 lg: grid-cols-2: gap-8">",;,";";
                  {/* Left: Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>";";";
                    <p: className="text-gray-300 mb-6">{selectedService.description}</p>";";";

                    <h3: className="text-xl font-semibold text-white mb-4">Features</h3>";";";
                    <ul: className="space-y-2 mb-6">";";";
                      {selectedService.features.map((feature, idx) => (
                        <li: key={idx} className="flex items-center gap-2 text-gray-300">";";";
                          <CheckCircle: className="w-4 h-4 text-green-400 flex-shrink-0" />";";";
                          {feature}
=======
                <div className=&quot;grid grid-cols-1 l,g:grid-cols-2 gap-8&quot;>
                  {/* Left Column */}&quot;
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Description&quot;</h3>
                    <p className=&quot;text-gray-300 mb-6&quot;>{selectedService.description}&quot;</p>

                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Features&quot;</h3>
                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {selectedService.features.map((feature, idx) => (&quot;}
                        <li key={idx} className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          {feature}&quot;
>>>>>>> main
                        </li>
                      ))}
                    </ul>

<<<<<<< HEAD
                    <h3: className="text-xl font-semibold text-white mb-4">Benefits</h3>";";";
                    <ul: className="space-y-2 mb-6">";";";
                      {selectedService.benefits.map((benefit, idx) => (
                        <li: key={idx} className="flex items-center gap-2 text-gray-300">";";";
                          <Star: className="w-4 h-4 text-yellow-400 flex-shrink-0" />";";";
=======
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Benefits&quot;</h3>
                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {selectedService.benefits.map((benefit, idx) => (&quot;}
                        <li key={idx} className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                          <Star className=&quot;w-4 h-4 text-yellow-400 flex-shrink-0&quot; />
                          {benefit}&quot;
=======
                    className="p-2 hover: bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
=======
                  <button onClick={() =" > setSelectedService(null)}"
                    className="p-2 hover: bg-white/10 rounded-lg transition-colors"
<<<<<<< HEAD
                  >""
                    <X className="w-6 h-6 text-gray-400" /" >"
=======
                  >"
                    <X className="w-6 h-6 text-gray-400" /" >
>>>>>>> main
>>>>>>> main
                  </button>
                </div>""
""
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}""
                  <div>""
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>""
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>""
""
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>""
                    <ul className="space-y-2 mb-6">""
                      {selectedService.features.map((feature, idx) => (""
                        <li key={idx} className="flex items-center gap-2 text-gray-300">""
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /"" >
                          {feature}
                        </li>
                      ))}
                    </ul>""
""
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>""
                    <ul className="space-y-2 mb-6">""
                      {selectedService.benefits.map((benefit, idx) => (""
                        <li key={idx} className="flex items-center gap-2 text-gray-300">""
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" /"" >
>>>>>>> main
>>>>>>> main
                          {benefit}
>>>>>>> main
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  {/* Right: Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>";";";
                    <div: className="space-y-4 mb-6">";";";
                      <div: className="bg-white/10 rounded-lg p-4">";";";
                        <div: className="flex justify-between items-center mb-2">";";";
                          <span: className="font-medium text-white">Starter</span>";";";
                          <span: className="text-2xl font-bold text-green-400">";";";
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}
                          </span>
                        </div>
                        <span: className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>";";";
                      </div>

                      <div: className="bg-white/10 rounded-lg p-4">";";";
                        <div: className="flex justify-between items-center mb-2">";";";
                          <span: className="font-medium text-white">Professional</span>";";";
                          <span: className="text-2xl font-bold text-blue-400">";";";
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}
                          </span>
                        </div>
                        <span: className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>";";";
                      </div>

                      <div: className="bg-white/10 rounded-lg p-4">";";";
                        <div: className="flex justify-between items-center mb-2">";";";
                          <span: className="font-medium text-white">Enterprise</span>";";";
                          <span: className="text-2xl font-bold text-purple-400">";";";
=======
<<<<<<< HEAD
                  {/* Right Column */}"
=======
<<<<<<< HEAD
                  {/* Right Column */}
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Pricing Plans&quot;</h3>
                    <div className=&quot;space-y-4 mb-6&quot;>&quot;"
                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Starter&quot;</span>
                          <span className=&quot;text-2xl font-bold text-green-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
                      </div>

                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Professional&quot;</span>
                          <span className=&quot;text-2xl font-bold text-blue-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
                      </div>

                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Enterprise&quot;</span>
                          <span className=&quot;text-2xl font-bold text-purple-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
=======
                  {/* Right Column */}""
>>>>>>> main
                  <div>""
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>""
                    <div className="space-y-4 mb-6">""
                      <div className="bg-white/10 rounded-lg p-4">""
                        <div className="flex justify-between items-center mb-2">""
                          <span className="font-medium text-white">Starter</span>""
                          <span className="text-2xl font-bold text-green-400">
<<<<<<< HEAD
                            {selectedService.pricing.currency}, {selectedService.pricing.starter.toLocaleString()}
                          </span>
                        </div>"
=======
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}
<<<<<<< HEAD
                          </span>"
                        </div>""
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>"
=======
                          </span>""
                        </div>""
>>>>>>> main
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>""
>>>>>>> main
""
                      <div className="bg-white/10 rounded-lg p-4">""
                        <div className="flex justify-between items-center mb-2">""
                          <span className="font-medium text-white">Professional</span>""
                          <span className="text-2xl font-bold text-blue-400">
<<<<<<< HEAD
                            {selectedService.pricing.currency}, {selectedService.pricing.professional.toLocaleString()}
                          </span>
                        </div>"
=======
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}
<<<<<<< HEAD
                          </span>"
                        </div>""
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>"
=======
                          </span>""
                        </div>""
>>>>>>> main
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
                      </div>""
>>>>>>> main
""
                      <div className="bg-white/10 rounded-lg p-4">""
                        <div className="flex justify-between items-center mb-2">""
                          <span className="font-medium text-white">Enterprise</span>""
                          <span className="text-2xl font-bold text-purple-400">
<<<<<<< HEAD
>>>>>>> main
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}
                          </span>"
                        </div>""
=======
<<<<<<< HEAD
                            {selectedService.pricing.currency}, {selectedService.pricing.enterprise.toLocaleString()}
                          </span>
<<<<<<< HEAD
                        </div>
                        <span: className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>";";";
=======
                        </div>"
=======
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}
                          </span>""
                        </div>""
>>>>>>> main
>>>>>>> main
                        <span className="text-sm text-gray-400">/{selectedService.pricing.billingCycle}</span>
>>>>>>> main
>>>>>>> main
                      </div>
                    </div>
<<<<<<< HEAD
"
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">"
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>"
                      <div className="space-y-2 text-sm">"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Market Price: </span>"
                          <span className="text-white">{selectedService.marketPrice}</span>"
                        </div>""
                        <div className="flex justify-between">""
                          <span className="text-blue-200">Launch Date:</span>""
                          <span className="text-white">{selectedService.launchDate}</span>"
                        </div>""
                        <div className="flex justify-between">""
                          <span className="text-blue-200">Delivery:</span>""
=======
<<<<<<< HEAD
""
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">""
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>""
                      <div className="space-y-2 text-sm">""
                        <div className="flex justify-between">""
                          <span className="text-blue-200">Market Price: </span>""
                          <span className="text-white">{selectedService.marketPrice}</span>""
                        </div>""
                        <div className="flex justify-between">""
                          <span className="text-blue-200">Launch Date:</span>""
                          <span className="text-white">{selectedService.launchDate}</span>""
                        </div>""
                        <div className="flex justify-between">""
                          <span className="text-blue-200">Delivery:</span>""
=======
<<<<<<< HEAD

<<<<<<< HEAD
                    <div: className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">";";";
                      <h4: className="text-white font-semibold mb-2">Market Information</h4>";";";
                      <div: className="space-y-2 text-sm">";";";
                        <div: className="flex justify-between">";";";
                          <span: className="text-blue-200">Market Price: </span>",;,";";
                          <span: className="text-white">{selectedService.marketPrice}</span>";";";
                        </div>
                        <div: className="flex justify-between">";";";
                          <span: className="text-blue-200">Launch Date: </span>",;,";";
                          <span: className="text-white">{selectedService.launchDate}</span>";";";
                        </div>
                        <div: className="flex justify-between">";";";
                          <span: className="text-blue-200">Delivery: </span>",;,";";
                          <span: className="text-white">{selectedService.estimatedDelivery}</span>";";";
                        </div>
                      </div>
                    </div>

                    {selectedService.contactInfo: && (
                      <div className="bg-white/10 rounded-lg p-4">";";";
                        <h4: className="text-white font-semibold mb-3">Contact Information</h4>";";";
                        <div: className="space-y-2 text-sm">";";";
                          <div: className="flex items-center gap-2 text-gray-300">";";";
                            <Phone: className="w-4 h-4" />";";";
                            {selectedService.contactInfo.phone}
                          </div>
                          <div: className="flex items-center gap-2 text-gray-300">";";";
                            <Mail: className="w-4 h-4" />";";";
                            {selectedService.contactInfo.email}
                          </div>
                          <div: className="flex items-center gap-2 text-gray-300">";";";
                            <MapPin: className="w-4 h-4" />";";";
=======
<<<<<<< HEAD
                    <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6&quot;>&quot;"
                      <h4 className=&quot;text-white font-semibold mb-2&quot;>Market Information&quot;</h4>
                      <div className=&quot;space-y-2 text-sm&quot;>&quot;"
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Market Price:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.marketPrice}&quot;</span>
=======
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-200">Market Price: </span>
                          <span className="text-white">{selectedService.marketPrice}</span>
<<<<<<< HEAD
                        </div>"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Launch Date: </span>"
                          <span className="text-white">{selectedService.launchDate}</span>
                        </div>"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Delivery: </span>"
>>>>>>> main
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
=======
>>>>>>> main
                        </div>
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Launch Date:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.launchDate}&quot;</span>
                        </div>
<<<<<<< HEAD
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Delivery:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.estimatedDelivery}&quot;</span>
>>>>>>> main
                        </div>
                      </div>
                    </div>
<<<<<<< HEAD
"
=======

                    {selectedService.contactInfo && (}
                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <h4 className=&quot;text-white font-semibold mb-3&quot;>Contact Information&quot;</h4>
                        <div className=&quot;space-y-2 text-sm&quot;>&quot;"
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <Phone className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.phone}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <Mail className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.email}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <MapPin className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.address}&quot;
=======
                        <div className="flex justify-between">
                          <span className="text-blue-200">Delivery:</span>
=======
"
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6">"
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>"
                      <div className="space-y-2 text-sm">"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Market Price: </span>"
                          <span className="text-white">{selectedService.marketPrice}</span>"
                        </div>"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Launch Date:</span>"
                          <span className="text-white">{selectedService.launchDate}</span>"
                        </div>"
                        <div className="flex justify-between">"
                          <span className="text-blue-200">Delivery:</span>"
>>>>>>> main
>>>>>>> main
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>
""
>>>>>>> main
                    {selectedService.contactInfo && (""
                      <div className="bg-white/10 rounded-lg p-4">""
                        <h4 className="text-white font-semibold mb-3">Contact Information</h4>""
                        <div className="space-y-2 text-sm">""
                          <div className="flex items-center gap-2 text-gray-300">""
<<<<<<< HEAD
                            <Phone className="w-4 h-4" /" >
                            {selectedService.contactInfo.phone}"
                          </div>""
                          <div className="flex items-center gap-2 text-gray-300">""
                            <Mail className="w-4 h-4" /" >
                            {selectedService.contactInfo.email}"
                          </div>""
                          <div className="flex items-center gap-2 text-gray-300">""
                            <MapPin className="w-4 h-4" /" >
=======
                            <Phone className="w-4 h-4" /"" >
                            {selectedService.contactInfo.phone}""
                          </div>""
                          <div className="flex items-center gap-2 text-gray-300">""
                            <Mail className="w-4 h-4" /"" >
                            {selectedService.contactInfo.email}""
                          </div>""
                          <div className="flex items-center gap-2 text-gray-300">""
                            <MapPin className="w-4 h-4" /"" >
>>>>>>> main
>>>>>>> main
                            {selectedService.contactInfo.address}
>>>>>>> main
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Action: Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">";";";
                  <button: className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;,";";
                    Get: Started Now
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover: bg-white/10: transition-all duration-200">",;,";";
                    Schedule: Demo
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover: bg-white/10: transition-all duration-200">",;,";";
                    Download: Brochure
=======
<<<<<<< HEAD
                {/* Action Buttons */}"
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">"
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started Now"
                  </button>""
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hove,
    r:bg-white/10 transition-all duration-200">
                    Schedule Demo"
                  </button>""
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hove,
    r:bg-white/10 transition-all duration-200">
=======
<<<<<<< HEAD
                {/* Action Buttons */}""
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">""
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started Now""
                  </button>""
=======
<<<<<<< HEAD
                {/* Action Buttons */}
<<<<<<< HEAD
                <div className=&quot;flex gap-4 mt-8 pt-6 border-t border-white/20&quot;>&quot;"
                  <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>
                    Get Started Now&quot;
                  </button>
                  <button className=&quot;px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200&quot;>
                    Schedule Demo&quot;
                  </button>
                  <button className=&quot;px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hove,r:bg-white/10 transition-all duration-200&quot;>
                    Download Brochure&quot;
=======
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started Now
                  </button>
=======
                {/* Action Buttons */}"
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">"
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started Now"
                  </button>"
>>>>>>> main
>>>>>>> main
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                    Schedule Demo""
                  </button>""
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
>>>>>>> main
                    Download Brochure
>>>>>>> main
>>>>>>> main
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Contact Section */}""
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">""
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">""
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>""
=======
<<<<<<< HEAD
      {/* Contact Section */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16">",;,";";
        <div: className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">";";";
          <h2: className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>";";";
          <p: className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">";";";
            Contact: our team to learn more about our comprehensive services and how they can transform your business.
          </p>
          <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;,";";
            <motion.button: whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 0.95, }}
              className="bg-gradient-to-r: from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"";";";
=======
<<<<<<< HEAD
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>&quot;"
        <div className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center&quot;>&quot;"
          <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Get Started?&quot;</h2>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Contact our team to learn more about our comprehensive services and how they can transform your business.&quot;
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
            <motion.button
              whileHover={{ scal,e: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center&quot;
            >&quot;
              <Phone className=&quot;w-5 h-5&quot; />
              Call +1 302 464 0950&quot;
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center&quot;
            >&quot;
              <Mail className=&quot;w-5 h-5&quot; />
              Email kleber@ziontechgroup.com&quot;
            </motion.button>
          </div>
          <div className=&quot;mt-6 text-gray-400&quot;>&quot;"
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-purple-400 hover:underline&quot;>http,s://ziontechgroup.com&quot;</a></p>
=======
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
=======
>>>>>>> main
      {/* Contact Section */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">"
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>"
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
            Contact our team to learn more about our comprehensive services and how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05   }}
              whileTap={{ scale: 0.95   }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"
>>>>>>> main
            >
              <Phone: className="w-5 h-5" />";";";
              Call: +1 302 464 0950
            </motion.button>
            <motion.button
<<<<<<< HEAD
              whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 0.95, }}
              className="border: border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"";";";
            >
              <Mail: className="w-5 h-5" />";";";
              Email: kleber@ziontechgroup.com
            </motion.button>
          </div>
          <div className="mt-6 text-gray-400">";";";
            <p>364: E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a: href="https://ziontechgroup.com" className="text-purple-400: hover:underline">https://ziontechgroup.com</a></p>",;,";";
=======
              whileHover={{ scale: 1.05   }}
              whileTap={{ scale: 0.95   }}
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
=======
            Contact our team to learn more about our comprehensive services and how they can transform your business."
          </p>""
          <div className="flex flex-col s,
    m:flex-row gap-4 justify-center">
            <motion .button
              whileHover={{ scal,
    e: 1.05 }}"
              whileTap={{ scale: 0.95 }}""
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"" >""
              <Phone className="w-5 h-5" /" >
              Call +1 302 464 0950
            </motion.button>
            <motion .button
              whileHover={{ scale: 1.05 }}"
              whileTap={{ scale: 0.95 }}""
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"" >""
              <Mail className="w-5 h-5" /" >
>>>>>>> main
              Email kleber@ziontechgroup.com
            </motion.button>"
          </div>""
          <div className="mt-6 text-gray-400">"
            <p>364 E Main St STE 1008, Middletown DE 19709</p>""
            <p>Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hove,
    r:underline">http,
    s://ziontechgroup.com</a></p>
=======
>>>>>>> main
>>>>>>> main
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our comprehensive services and how they can transform your business.""
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <motion .button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"" >"
              <Phone className="w-5 h-5" /" >
              Call +1 302 464 0950
            </motion.button>
            <motion .button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center"" >"
              <Mail className="w-5 h-5" /" >
=======
            <motion .button
<<<<<<< HEAD
              whileHover={{ scale: 1.05 }}""
              whileTap={{ scale: 0.95 }}""
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center""" >""
=======
              whileHover={{ scale: 1.05 }}"
              whileTap={{ scale: 0.95 }}"
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center' >"
>>>>>>> main
              <Phone className="w-5 h-5" /"" >
              Call +1 302 464 0950
            </motion.button>
            <motion .button
<<<<<<< HEAD
              whileHover={{ scale: 1.05 }}""
              whileTap={{ scale: 0.95 }}""
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center""" >""
=======
              whileHover={{ scale: 1.05 }}"
              whileTap={{ scale: 0.95 }}"
              className='border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center' >"
>>>>>>> main
              <Mail className="w-5 h-5" /"" >
>>>>>>> main
              Email kleber@ziontechgroup.com
            </motion.button>""
          </div>""
          <div className="mt-6 text-gray-400">""
            <p>364 E Main St STE 1008, Middletown DE 19709</p>""
            <p>Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hover:underline">https://ziontechgroup.com</a></p>
>>>>>>> main
>>>>>>> main
>>>>>>> main
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};
<<<<<<< HEAD

export: default ComprehensiveServicesShowcase2027;
=======
<<<<<<< HEAD
export default ComprehensiveServicesShowcase2027
=======
export default ComprehensiveServicesShowcase2027;"
=======
  );, };
export default ComprehensiveServicesShowcase2027;"`"
>>>>>>> main
>>>>>>> main
>>>>>>> main
