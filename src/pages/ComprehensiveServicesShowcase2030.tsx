import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Cloud, ;
  Shield, ;
  Rocket, ;
  Zap, ;
  Users, ;
  Globe, ;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail as MailIcon,;
  MapPin,;
  Infinity,;
  Car,;
  Building2,;
  Factory,;
  Wheat,;
  Zap as EnergyIcon,;
  Stethoscope,;
  Satellite,;
  TrendingUp as ChartIcon,;
  PenTool,;
  UserCheck;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function ComprehensiveServicesShowcase2030() {;
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' };
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' };
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' };
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' };
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' };
  ];
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating,;
      case 'price':;
        return a.price - b.price,;
      case 'reviews':;
        return b.reviewCount - a.reviewCount,;
      case 'name':;
        return a.title.localeCompare(b.title),;
      default: return b.rating - a.rating
    };
  });
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Operations':;
        return <[^>]*/>
      case 'AI & Green Tech':;
        return <Leaf className="w-6 h-6" />,;
      case 'Quantum Computing':;
        return <Atom className="w-6 h-6" />,;
      case 'AI & Metaverse':;
        return <Globe2 className="w-6 h-6" />,;
      case 'AI & Healthcare':;
        return <Stethoscope className="w-6 h-6" />,;
      case 'AI & Space Tech':;
        return <Satellite className="w-6 h-6" />,;
      case 'FinTech':;
        return <DollarSign className="w-6 h-6" />,;
      case 'AI & Content':;
        return <PenTool className="w-6 h-6" />,;
      case 'AI & Customer Support':;
        return <UserCheck className="w-6 h-6" />,;
      default: return <[^>]*/>
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Comprehensive AI Services Showcase 2030 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered micro SAAS services and solutions for 2030. From autonomous operations to quantum computing, discover the future of technology."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              AI Services 2030;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover the future of technology with our comprehensive suite of AI-powered micro SAAS services. ;
              From autonomous operations to quantum computing, we're building tomorrow's solutions today.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Us: +1 302 464 0950;
              </[^>]*>
              <Link;
                to="/request-quote"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-y border-cyan-500/30">;
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold">Phone</[^>]*>
              <p className="text-cyan-300">+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold">Email</[^>]*>
              <p className="text-cyan-300">kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold">Address</[^>]*>
              <p className="text-cyan-300">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Overview */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Revolutionary AI Services for 2030;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our cutting-edge AI solutions are designed to transform industries and drive innovation. ;
              Each service is built with the latest technology and backed by our expert team.;
            </[^>]*>
          </[^>]*>

          {/* Category Filter */};
          <div className="mb-8">;
            <div className="flex flex-wrap justify-center gap-4">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setActiveCategory(category.id)};
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${;
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-600'
                  }`};
                >;
                  <span className="mr-2">{category.icon}</[^>]*>
                  {category.name} ({category.count});
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>

          {/* Search and Sort */};
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">;
            <div className="relative">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>
            <select;
              value={sortBy};
              onChange={(e) => setSortBy(e.target.value)};
              className="[^"]*"
            >;
              <option value="rating">Sort by Rating</[^>]*>
              <option value="price">Sort by Price</[^>]*>
              <option value="reviews">Sort by Reviews</[^>]*>
              <option value="name">Sort by Name</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            <AnimatePresence>;
              {sortedServices.map((service, index) => (;
                <motion.div
                  key={service.id};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  exit={{ opacity: 0, y: -20 }};
                  transition={{ duration: 0.5, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="flex items-center space-x-2">;
                      {getCategoryIcon(service.category)};
                      <span className="text-sm text-cyan-400 font-medium">{service.subcategory}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center space-x-1">;
                      <[^>]*/>
                      <span className="text-white font-medium">{service.rating}</[^>]*>
                      <span className="text-gray-400 text-sm">({service.reviewCount})</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</[^>]*>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</[^>]*>

                  <div className="space-y-3 mb-6">;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-400">Price:</[^>]*>
                      <span className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-400">Market Price:</[^>]*>
                      <span className="text-green-400 font-medium">{service.marketPrice}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-400">ROI:</[^>]*>
                      <span className="text-yellow-400 font-medium">{service.roi}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-400">Setup Time:</[^>]*>
                      <span className="text-blue-400 font-medium">{service.setupTime}</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="mb-4">;
                    <div className="flex items-center justify-between mb-2">;
                      <span className="text-gray-400 text-sm">AI Score</[^>]*>
                      <span className="text-cyan-400 font-bold">{service.aiScore}/100</[^>]*>
                    </[^>]*>
                    <div className="w-full bg-slate-700 rounded-full h-2">;
                      <div ;
                        className="[^"]*"
                        style={{ width: `${service.aiScore}%` }};
                      ></[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex flex-wrap gap-2 mb-4">;
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (;
                      <span;
                        key={tagIndex};
                        className="[^"]*"
                      >;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <div className="flex space-x-3">;
                    <Link;
                      to={`/services/${service.id}`};
                      className="[^"]*"
                    >;
                      Learn More;
                    </[^>]*>
                    <Link;
                      to="/request-quote"
                      className="[^"]*"
                    >;
                      Get Quote;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Call to Action */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join hundreds of companies already leveraging our AI-powered solutions to drive innovation;
              increase efficiency, and stay ahead of the competition.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Us: +1 302 464 0950;
              </[^>]*>
              <Link;
                to="/request-quote"
                className="[^"]*"
              >;
                <[^>]*/>
                Email: kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Why Choose Zion Tech Group */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Zion Tech Group?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We're not just another technology company. We're your strategic partner in digital transformation.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {[;
              {;
                icon: <Award className="w-12 h-12 text-cyan-400" />,title: "Proven Excellence",description: "Over 95% client satisfaction rate with proven ROI across industries"
              };
              {;
                icon: <Rocket className="w-12 h-12 text-cyan-400" />,title: "Innovation First",description: "Cutting-edge AI solutions that keep you ahead of the competition"
              };
              {;
                icon: <Shield className="w-12 h-12 text-cyan-400" />,title: "Enterprise Security",description: "Bank-level security with SOC 2 compliance and 99.99% uptime"
              };
              {;
                icon: <Users className="w-12 h-12 text-cyan-400" />,title: "Expert Support",description: "24/7 dedicated support team with deep technical expertise"
              };
            ].map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex justify-center mb-4">{feature.icon}</[^>]*>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

//[^;]*
const Atom = ({ className }: { className?: string }) => (;
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">;
    <[^>]*/>
    <[^>]*/>
    <[^>]*/>
  </[^>]*>
);