import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Rocket, 
  Target, 
  Star, 
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Globe,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  Award,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Satellite,
  Microscope,
  BarChart3,
  Workflow,
  Globe2,
  Bot,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Zap as ZapIcon,
  Star as StarIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { allRevolutionaryServices2030 } from '../data/revolutionaryServices2030';

// Futuristic animated background component
const FuturisticBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Animated grid with neon effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
    
    {/* Enhanced floating particles with neon glow */}
    <div className="absolute inset-0">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.8, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    
    {/* Enhanced gradient orbs with neon glow */}
    <motion.div 
      className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Matrix rain effect */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400 text-xs font-mono opacity-30"
          animate={{
            y: ["-100vh", "100vh"],
          }}
          transition={{
            duration: 15 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
          style={{
            left: `${(i * 5) % 100}%`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          {Math.random().toString(36).substring(7)}
        </motion.div>
      ))}
    </div>
  </div>
);

// Service Card Component
const ServiceCard = ({ service, type }: { service: any; type: 'microSaas' | 'itService' | 'aiService' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Neural')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Satellite;
    if (category.includes('Bio')) return Microscope;
    if (category.includes('Green')) return Leaf;
    if (category.includes('Cybersecurity')) return Shield;
    if (category.includes('Infrastructure')) return Server;
    if (category.includes('Ethics')) return Eye;
    if (category.includes('Multimodal')) return Cpu;
    if (category.includes('Autonomous')) return Bot;
    return Zap;
  };

  const IconComponent = getIcon(service.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {service.category}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>

          {/* Pricing and Key Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <DollarSign className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-400 text-sm">Pricing</span>
              </div>
              <p className="text-white font-semibold">
                {type === 'microSaas' ? `$${service.price.toLocaleString()}/month` : 
                 type === 'itService' ? `$${service.hourlyRate}/hour` : 
                 `$${service.price.toLocaleString()}/month`}
              </p>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-400 text-sm">ROI</span>
              </div>
              <p className="text-white font-semibold">
                {type === 'microSaas' ? service.roi : 
                 type === 'itService' ? 'High Value' : 
                 service.aiScore ? `${service.aiScore}/10` : 'Premium'}
              </p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-4">
            <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-600 pt-4 space-y-4">
                  {/* All Features */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">All Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Benefits</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-slate-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.map((audience: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-slate-600 text-slate-300 text-xs rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Market Price</h4>
                      <p className="text-slate-300 text-sm">{service.marketPrice}</p>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Innovation Level</h4>
                      <p className="text-slate-300 text-sm">{service.innovationLevel}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function RevolutionaryServices2030() {
  const [activeTab, setActiveTab] = useState<'all' | 'microSaas' | 'itServices' | 'aiServices'>('all');

  const tabs = [
    { id: 'all', label: 'All Services', count: allRevolutionaryServices2030.microSaas.length + allRevolutionaryServices2030.itServices.length + allRevolutionaryServices2030.aiServices.length },
    { id: 'microSaas', label: 'Micro SAAS', count: allRevolutionaryServices2030.microSaas.length },
    { id: 'itServices', label: 'IT Services', count: allRevolutionaryServices2030.itServices.length },
    { id: 'aiServices', label: 'AI Services', count: allRevolutionaryServices2030.aiServices.length },
  ];

  const getFilteredServices = () => {
    switch (activeTab) {
      case 'microSaas':
        return allRevolutionaryServices2030.microSaas.map(service => ({ service, type: 'microSaas' as const }));
      case 'itServices':
        return allRevolutionaryServices2030.itServices.map(service => ({ service, type: 'itService' as const }));
      case 'aiServices':
        return allRevolutionaryServices2030.aiServices.map(service => ({ service, type: 'aiService' as const }));
      default:
        return [
          ...allRevolutionaryServices2030.microSaas.map(service => ({ service, type: 'microSaas' as const })),
          ...allRevolutionaryServices2030.itServices.map(service => ({ service, type: 'itService' as const })),
          ...allRevolutionaryServices2030.aiServices.map(service => ({ service, type: 'aiService' as const }))
        ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      
      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <StarIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Revolutionary Services 2030</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future of Technology
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the cutting-edge of innovation with our revolutionary micro SAAS, IT infrastructure, and AI services. 
              Built for the future, delivering results today.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { label: 'Total Services', value: '11', icon: Zap },
                { label: 'Innovation Level', value: 'Revolutionary', icon: Star },
                { label: 'Market Size', value: '$100B+', icon: TrendingUp },
                { label: 'Success Rate', value: '99.9%', icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="relative z-10 mb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-xl"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Contact our team of experts to discuss how our revolutionary services can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Globe className="w-5 h-5" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 mx-2 mb-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600 hover:border-cyan-400/50'
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {getFilteredServices().map((item, index) => (
              <ServiceCard key={`${item.type}-${item.service.id}`} service={item.service} type={item.type} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the <span className="text-cyan-400">Revolution</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait for the future to arrive. Partner with Zion Tech Group and lead the transformation of your industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
            <div className="text-purple-100">
              <p className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServices2030;