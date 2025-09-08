import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Brain,
  Rocket,
  Zap,
  Cpu,
  Heart,
  Globe,
  Shield,
  Lock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Users,
  Clock,
  Award,
  Database,
  Network,
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
  Target,
  Cloud
} from 'lucide-react';

export default function RevolutionaryServices2030() {
  const [activeTab, setActiveTab] = useState<'all' | 'microSaas' | 'itServices' | 'aiServices'>('all');

  const tabs = [
    { id: 'all', label: 'All Services', count: 11 },
    { id: 'microSaas', label: 'Micro SAAS', count: 4 },
    { id: 'itServices', label: 'IT Services', count: 4 },
    { id: 'aiServices', label: 'AI Services', count: 3 },
  ];

  const revolutionaryServices = [
    {
      id: 'ai-autonomous-business-operations-2030',
      title: 'AI Autonomous Business Operations 2030',
      description: 'Fully autonomous business operations powered by advanced AI systems',
      category: 'AI Services',
      icon: Brain,
      featured: true,
      price: '$50,000/month',
      marketSize: '$25B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'quantum-ai-cybersecurity-2030',
      title: 'Quantum AI Cybersecurity 2030',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      category: 'Cybersecurity',
      icon: Shield,
      featured: true,
      price: '$75,000/month',
      marketSize: '$30B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'ai-content-creation-studio-2030',
      title: 'AI Content Creation Studio 2030',
      description: 'Next-generation AI content creation and management platform',
      category: 'AI Services',
      icon: Sparkles,
      featured: true,
      price: '$25,000/month',
      marketSize: '$15B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'ai-sales-intelligence-2030',
      title: 'AI Sales Intelligence 2030',
      description: 'Predictive sales intelligence and automation platform',
      category: 'AI Services',
      icon: TrendingUp,
      featured: false,
      price: '$35,000/month',
      marketSize: '$20B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'ai-customer-support-automation-2030',
      title: 'AI Customer Support Automation 2030',
      description: 'Intelligent customer support with human-like interactions',
      category: 'AI Services',
      icon: Users,
      featured: false,
      price: '$30,000/month',
      marketSize: '$18B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'ai-data-analytics-bi-2030',
      title: 'AI Data Analytics & BI 2030',
      description: 'Advanced AI-powered business intelligence and analytics',
      category: 'IT Services',
      icon: BarChart3,
      featured: false,
      price: '$40,000/month',
      marketSize: '$22B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'cloud-infrastructure-devops-2030',
      title: 'Cloud Infrastructure & DevOps 2030',
      description: 'Next-generation cloud infrastructure and DevOps automation',
      category: 'IT Services',
      icon: Cloud,
      featured: false,
      price: '$45,000/month',
      marketSize: '$28B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'iot-edge-computing-2030',
      title: 'IoT Edge Computing 2030',
      description: 'Advanced IoT edge computing and real-time processing',
      category: 'Emerging Tech',
      icon: Cpu,
      featured: false,
      price: '$55,000/month',
      marketSize: '$35B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'digital-twin-platform-2030',
      title: 'Digital Twin Platform 2030',
      description: 'Comprehensive digital twin platform for any industry',
      category: 'Emerging Tech',
      icon: Globe,
      featured: false,
      price: '$60,000/month',
      marketSize: '$40B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'blockchain-web3-platform-2030',
      title: 'Blockchain Web3 Platform 2030',
      description: 'Enterprise-grade blockchain and Web3 infrastructure',
      category: 'Blockchain',
      icon: Lock,
      featured: false,
      price: '$65,000/month',
      marketSize: '$45B+',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'micro-saas-platform-2030',
      title: 'Micro SaaS Platform 2030',
      description: 'Scalable micro SaaS platform for rapid business growth',
      category: 'Micro SaaS',
      icon: Rocket,
      featured: true,
      price: '$20,000/month',
      marketSize: '$12B+',
      innovationLevel: 'Revolutionary'
    }
  ];

  const getFilteredServices = () => {
    switch (activeTab) {
      case 'microSaas':
        return revolutionaryServices.filter(service => service.category === 'Micro SaaS');
      case 'itServices':
        return revolutionaryServices.filter(service => service.category === 'IT Services');
      case 'aiServices':
        return revolutionaryServices.filter(service => service.category === 'AI Services');
      default:
        return revolutionaryServices;
    }
  };

  return (
    <>
      <SEO
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover our revolutionary AI, blockchain, cybersecurity, and emerging technology services that will transform your business in 2030 and beyond."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Revolutionary Services 2030</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Future of Technology
                </span>
                <br />
                <span className="text-white">Starts Here</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our groundbreaking AI, blockchain, cybersecurity, and emerging technology services.
                Transform your business with solutions that were once science fiction.
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
        </section>

        {/* Tabs Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {getFilteredServices().map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-slate-800/50 border rounded-xl p-6 hover:scale-105 transition-all duration-200 ${
                      service.featured 
                        ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                        : 'border-slate-700/50 hover:border-cyan-400/30'
                    }`}
                  >
                    {service.featured && (
                      <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 text-sm font-medium">Featured</span>
                      </div>
                    )}
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-400">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {service.price}
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Market: {service.marketSize}
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <Star className="w-4 h-4 mr-2" />
                        {service.innovationLevel}
                      </div>
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready for the <span className="text-cyan-400">Revolution</span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Don't wait for the future to arrive. Partner with Zion Tech Group and lead the transformation of your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}