<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Brain, Database, Users, Truck, Shield, Briefcase, Cpu, Wrench, Leaf, Atom,
  ArrowRight, ExternalLink, Phone, Mail, Zap, Target, Clock, Globe, Check
=======
import { Link              } from 'react-router-dom.ts';
import { Search, 
  Star, 
  TrendingUp, 
  Zap,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  Network,
  Layers,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Brain,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Users,
  BarChart3,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
<<<<<<< HEAD
  BarChart3,
  Zap,
  Workflow,
  Eye,
  Globe,
  Cpu,
  Database,
  Lock,
  Microscope,
  CircuitBoard,
  Building,
=======
  ChevronDown,
  ChevronUp,
  Atom,
  Rocket,
  Heart,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Workflow,
  Shield as ShieldIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const InnovativeServicesShowcase2025: React.FC = () => {
<<<<<<< HEAD
  const serviceCategories = [
=======
  ArrowRight,
  Clock,
  Target
             } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { SEO              } from '@/components/SEO';
import { ADVANCED_MICRO_SAAS_SERVICES_2025              } from '../data/advancedMicroSaasServices2025';
import { EMERGING_TECH_SERVICES_2025              } from '../data/emergingTechServices2025';

export default function InnovativeServicesShowcase2025(...args: any[]): any {
<<<<<<< HEAD
  const services = [
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for enterprise transformation",
      services: [
        {
          name: "AI Enterprise Intelligence Platform",
          description: "Comprehensive AI-powered business intelligence and analytics",
          href: "/services/ai-enterprise-intelligence-platform",
          icon: Brain,
          price: "$2,999/month",
          features: ["Predictive Analytics", "Business Intelligence", "Enterprise Security", "Process Automation"],
          benefits: ["30% efficiency improvement", "Real-time insights", "AI-powered decision making"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Revolutionary quantum computing with AI integration",
          href: "/services/ai-quantum-neural-network-platform",
          icon: Atom,
          price: "$9,999/month",
          features: ["Quantum Neural Networks", "AI Quantum Algorithms", "Quantum Circuit Design", "Quantum Simulation"],
          benefits: ["1000x speedup", "Quantum advantage", "Exponential processing power"]
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation and lead management",
          href: "/services/ai-sales-copilot",
          icon: TrendingUp,
          price: "$299/month",
          features: ["AI Lead Scoring", "Email Automation", "Prospect Research", "Sales Analytics"],
          benefits: ["35% conversion increase", "50% faster lead qualification", "400% ROI"]
        }
      ]
    },
    {
      title: "Customer Success & Support",
      description: "AI-powered customer experience and support automation solutions",
      services: [
        {
          name: "AI Customer Success Automation",
          description: "Intelligent automation for customer success operations",
          href: "/services/ai-customer-success-automation",
          icon: Users,
          price: "$299/month",
          features: ["AI-Powered Insights", "Automated Workflows", "Performance Metrics", "Proactive Communication"],
          benefits: ["40% retention increase", "60% task reduction", "35% satisfaction improvement"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Advanced AI-powered customer support and helpdesk automation",
          href: "/services/ai-customer-support-automation",
          icon: MessageCircle,
          price: "$199/month",
          features: ["24/7 Support", "Intelligent Routing", "Knowledge Base", "Sentiment Analysis"],
          benefits: ["70% faster resolution", "90% customer satisfaction", "50% cost reduction"]
        }
      ]
    },
    {
      title: "Supply Chain & Operations",
      description: "AI-powered optimization for supply chain and operational efficiency",
      services: [
        {
          name: "AI Supply Chain Optimization Enhanced",
          description: "Advanced AI-powered supply chain optimization and management",
          href: "/services/ai-supply-chain-optimization-enhanced",
          icon: Truck,
          price: "$499/month",
          features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"],
          benefits: ["25-40% cost reduction", "95% delivery accuracy", "30% inventory cost reduction"]
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent workflow automation and process optimization",
          href: "/services/ai-workflow-orchestrator",
          icon: Workflow,
          price: "$399/month",
          features: ["Process Automation", "Workflow Design", "Performance Monitoring", "Optimization Engine"],
          benefits: ["60% process efficiency", "45% time savings", "Real-time optimization"]
        }
      ]
    },
    {
      title: "Financial & Risk Management",
      description: "AI-powered financial services and risk management solutions",
      services: [
        {
          name: "AI Financial Risk Management Enhanced",
          description: "Comprehensive AI-powered financial risk assessment and monitoring",
          href: "/services/ai-financial-risk-management-enhanced",
          icon: Shield,
          price: "$399/month",
          features: ["Risk Assessment", "Real-time Monitoring", "Predictive Analytics", "Compliance Tracking"],
          benefits: ["40-60% loss reduction", "85% accuracy improvement", "75% compliance improvement"]
        },
        {
          name: "AI Financial Trading Risk Management",
          description: "Advanced risk management for financial trading operations",
          href: "/services/ai-financial-trading-risk-management",
          icon: TrendingUp,
          price: "$599/month",
          features: ["Portfolio Risk", "Market Risk", "Credit Risk", "Operational Risk"],
          benefits: ["30% risk-adjusted returns", "70% monitoring reduction", "90% compliance improvement"]
        }
      ]
    },
    {
      title: "Business Intelligence & Analytics",
      description: "AI-powered business intelligence and data analytics platforms",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Comprehensive business intelligence and analytics dashboard",
          href: "/services/ai-business-intelligence-dashboard",
          icon: BarChart3,
          price: "$399/month",
          features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Predictive Insights"],
          benefits: ["50% faster insights", "Real-time decision making", "Customizable reporting"]
        },
        {
          name: "AI Data Analytics Platform",
          description: "Advanced AI-powered data analytics and insights platform",
          href: "/services/ai-data-analytics-platform",
          icon: Database,
          price: "$599/month",
          features: ["Big Data Processing", "Machine Learning", "Predictive Analytics", "Data Mining"],
          benefits: ["100x faster processing", "90% accuracy improvement", "Real-time insights"]
        }
      ]
    },
    {
      title: "Project & Process Management",
      description: "AI-powered project management and process optimization solutions",
      services: [
        {
          name: "AI Project Management Platform",
          description: "Intelligent project management with AI-powered insights",
          href: "/services/ai-project-management-platform",
          icon: Clock,
          price: "$299/month",
          features: ["Task Automation", "Resource Optimization", "Risk Prediction", "Performance Analytics"],
          benefits: ["40% project efficiency", "30% time savings", "25% cost reduction"]
        },
        {
          name: "AI Predictive Maintenance",
          description: "AI-powered predictive maintenance and asset optimization",
          href: "/services/ai-predictive-maintenance",
          icon: Activity,
          price: "$399/month",
          features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Cost Optimization"],
          benefits: ["50% downtime reduction", "30% maintenance cost reduction", "90% failure prediction accuracy"]
        }
      ]
    },
    {
<<<<<<< HEAD
      title: "Marketing & Sales Automation",
      description: "AI-powered marketing and sales automation solutions",
      services: [
        {
          name: "AI Marketing Automation Platform",
          description: "Comprehensive AI-powered marketing automation and optimization",
          href: "/services/ai-marketing-automation-platform",
          icon: TrendingUp,
          price: "$299/month",
          features: ["Campaign Automation", "Lead Scoring", "Personalization", "Performance Analytics"],
          benefits: ["45% conversion increase", "60% time savings", "35% ROI improvement"]
        },
        {
          name: "AI HR Platform",
          description: "AI-powered human resources and talent management platform",
          href: "/services/ai-hr-platform",
          icon: Users,
          price: "$199/month",
          features: ["Recruitment AI", "Performance Analytics", "Employee Engagement", "Talent Development"],
          benefits: ["50% faster hiring", "40% retention improvement", "35% productivity increase"]
        }
      ]
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(INNOVATIVE_SERVICES_2025.map(service => service.category))];
    return cats.sort();
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return ShieldIcon;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'IT Services': return 'from-blue-600 to-cyan-600';
      case 'Micro SaaS': return 'from-green-600 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Data Analytics': return 'from-indigo-600 to-purple-600';
      case 'Cloud Services': return 'from-cyan-600 to-blue-600';
      case 'Emerging Tech': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000 - $2,500', value: '1000-2500' },
    { label: '$2,500 - $5,000', value: '2500-5000' },
    { label: 'Over $5,000', value: '5000-999999' }
  ];
=======
      id: 'ai-iot-edge-computing',
      title: 'AI IoT Edge Computing',
      description: 'Transform your IoT infrastructure with AI-powered edge computing that processes data locally, reduces latency, and enables real-time intelligent decision making.',
      icon: Cpu,
      price: 'From $499/month',
      features: [
        'AI-powered edge computing and processing',
        'Real-time IoT device management and monitoring',
        'Intelligent edge analytics and decision making',
        'Advanced device connectivity and protocol support'
      ],
      benefits: [
        'Reduce latency by 80-90%',
        'Lower bandwidth costs by 60%',
        'Improve device reliability by 75%'
      ],
      path: '/services/ai-iot-edge-computing',
      category: 'AI & IoT'
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Transform your maintenance operations with AI-powered predictive maintenance that prevents failures, reduces downtime, and optimizes equipment performance.',
      icon: Wrench,
      price: 'From $399/month',
      features: [
        'AI-powered equipment health monitoring and analysis',
        'Real-time predictive maintenance scheduling',
        'Intelligent failure prediction and prevention',
        'Advanced sensor data analysis and processing'
      ],
      benefits: [
        'Reduce unplanned downtime by 70-90%',
        'Lower maintenance costs by 25-40%',
        'Extend equipment lifespan by 20-30%'
      ],
      path: '/services/ai-predictive-maintenance',
      category: 'AI & Maintenance'
    },
    {
      id: 'ai-sustainable-technology',
      title: 'AI Sustainable Technology',
      description: 'Transform your organization into a sustainability leader with AI-powered technology that optimizes energy, reduces waste, and minimizes environmental impact.',
      icon: Leaf,
      price: 'From $299/month',
      features: [
        'AI-powered energy consumption optimization',
        'Real-time sustainability monitoring and reporting',
        'Intelligent carbon footprint tracking and reduction',
        'Advanced waste management and recycling optimization'
      ],
      benefits: [
        'Reduce energy consumption by 25-40%',
        'Lower carbon footprint by 30-50%',
        'Improve resource efficiency by 35%'
      ],
      path: '/services/ai-sustainable-technology',
      category: 'AI & Sustainability'
    },
    {
      id: 'ai-quantum-machine-learning',
      title: 'AI Quantum Machine Learning',
      description: 'Revolutionize your computational capabilities with AI-powered quantum machine learning that solves previously impossible problems and accelerates innovation.',
      icon: Atom,
      price: 'From $1,999/month',
      features: [
        'Quantum-enhanced machine learning algorithms',
        'Hybrid quantum-classical computing solutions',
        'Advanced quantum neural network optimization',
        'Real-time quantum algorithm execution'
      ],
      benefits: [
        'Solve complex problems 100x faster than classical computing',
        'Improve machine learning accuracy by 40-60%',
        'Enable previously impossible computational tasks'
      ],
      path: '/services/ai-quantum-machine-learning',
      category: 'AI & Quantum Computing'

=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const innovationLevels = [
    { value: 'all', label: 'All Innovation Levels', color: 'bg-gray-500' },
    { value: 'Advanced', label: 'Advanced', color: 'bg-blue-500' },
    { value: 'Cutting-edge', label: 'Cutting-edge', color: 'bg-purple-500' },
    { value: 'Revolutionary', label: 'Revolutionary', color: 'bg-red-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesInnovation;
  });

  const getInnovationColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level) {
      case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Cutting-edge': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Revolutionary': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getInnovationIcon = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level) {
      case 'Advanced': return <Zap className="w-5 h-5" />;
      case 'Cutting-edge': return <Brain className="w-5 h-5" />;
      case 'Revolutionary': return <Rocket className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const featuredServices = filteredServices.filter(service => 
    service.innovationLevel === 'Revolutionary' || service.innovationLevel === 'Cutting-edge'
  );
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, IT, and Micro SaaS services designed to transform your business. Explore innovative solutions with proven ROI and competitive pricing."
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="text-zion-cyan"> Showcase 2025</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of AI-powered micro SAAS services, IT solutions, 
              and innovative technologies designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
=======
      {/* Contact Information Banner */}
      <section id="contact" className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-900">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <motion.div
              key={categoryIndex}
=======
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <span className="block text-white">Showcase 2025</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover cutting-edge AI, IT, and Micro SaaS solutions designed to transform your business. 
              Our innovative services deliver proven ROI and competitive advantages in today's digital landscape.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>20+ Innovative Services</span>
              </div>
<<<<<<< HEAD

<<<<<<< HEAD
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                      </div>
=======
              <h3 className="text-xl font-bold text-zion-slate-dark mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>

              <div className="mb-4">
                <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                <div className="text-sm text-zion-slate-light">Starting price</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={service.path}
                  className="w-full px-4 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-center font-medium inline-flex items-center justify-center"

                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">Why Choose Zion Tech Group?</h2>
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-First Approach',
                description: 'All our services are built with AI at the core, ensuring maximum efficiency and intelligence.'
              },
              {
                icon: Target,
                title: 'Industry Expertise',
                description: 'Deep domain knowledge across multiple industries with proven track records.'
              },
              {
                icon: Clock,
                title: 'Rapid Implementation',
                description: 'Quick deployment and onboarding with minimal disruption to your operations.'

            ].map((item, index)              => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"

                <div className="p-4 bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-zion-cyan" />
=======
      </section>

<<<<<<< HEAD
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Innovation Level Filter */}
            <div>
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {innovationLevels.map(level              => (
                  <option key={level.value} value={level.value} className="bg-slate-800 text-white">
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Revolutionary Services */}
      {featuredServices.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured Revolutionary Services
            </h2>
            <p className="text-gray-300">
              Our most innovative and game-changing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {featuredServices.slice(0, 4).map((service, index)              => (
              <motion.div
<<<<<<< HEAD
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>
                    {getInnovationIcon(service.innovationLevel)}
                    <span className="text-sm font-medium">{service.innovationLevel}</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-white">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-xs text-gray-400">Starting Price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold text-xl">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Innovations</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Explore Innovation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

<<<<<<< HEAD
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">Ready to Transform Your Business?</h2>
        <p className="text-zion-slate-light text-lg mb-8">
          Contact us today to learn how our innovative AI services can revolutionize your operations and drive unprecedented growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:+13024640950" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">
            <Phone className="w-5 h-5 mr-2"/> +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/5 transition-colors">
            <Mail className="w-5 h-5 mr-2"/> kleber@ziontechgroup.com
          </a>
        </div>

        <div className="text-sm text-zion-slate-light">
          Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
=======
      {/* All Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Innovative Services
          </h2>
          <p className="text-gray-300">
            Complete portfolio of cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index)              => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>
                    {getInnovationIcon(service.innovationLevel)}
                    <span className="text-xs font-medium">{service.innovationLevel}</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              </div>

              {/* Price and ROI */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-white">
                  ${service.price.toLocaleString()}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{service.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-slate-light flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-zion-slate-light flex items-center">
                            <Star className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="w-full py-3 px-6 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
=======
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Cutting-edge Technology</span>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subcategory}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className="space-y-4">
                    {/* Features Preview */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <button
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                          >
                            {expandedServices.has(service.id) ? 'Show less' : `+${service.features.length - 3} more features`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedServices.has(service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4 border-t border-slate-700"
                      >
                        {/* All Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">All Features</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Target className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Target Audience */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.targetAudience.map((audience, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                                {audience}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-6">
            Let's discuss how our innovative services can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;