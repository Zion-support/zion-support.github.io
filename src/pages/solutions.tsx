import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  DollarSign, 
  Truck, 
  BookOpen, 
  Shield, 
  Users, 
  Globe,
  Brain,
  Server,
  Rocket,
  Cloud,
  Atom,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Cpu,
  Network,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  PanelLeft,
  ShoppingCart,
  Settings,
  Play
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      {
        name: 'AI Business Intelligence',
        description: 'Advanced analytics and reporting powered by artificial intelligence',
        icon: BarChart3,
        href: '/services/ai-business-intelligence'
      },
      {
        name: 'AI Sales Copilot',
        description: 'Intelligent sales automation and lead scoring',
        icon: Target,
        href: '/services/ai-sales-copilot'
      },
      {
        name: 'AI Content Marketing',
        description: 'Automated content generation and optimization',
        icon: FileText,
        href: '/services/ai-content-marketing-automation'
      }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Scalable infrastructure and automated deployment solutions',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      {
        name: 'Cloud Infrastructure',
        description: 'Scalable cloud solutions for modern applications',
        icon: Server,
        href: '/services/cloud-devops'
      },
      {
        name: 'DevOps Automation',
        description: 'Streamlined development and deployment pipelines',
        icon: Rocket,
        href: '/services/devops-automation'
      },
      {
        name: 'Container Orchestration',
        description: 'Kubernetes and Docker management solutions',
        icon: Cpu,
        href: '/services/container-orchestration'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Comprehensive security solutions for modern threats',
    color: 'from-red-500 to-pink-600',
    solutions: [
      {
        name: 'AI Cybersecurity Platform',
        description: 'Intelligent threat detection and response',
        icon: Shield,
        href: '/services/ai-cybersecurity-platform'
      },
      {
        name: 'Zero Trust Architecture',
        description: 'Modern security framework for enterprise networks',
        icon: Shield,
        href: '/services/zero-trust-network-architecture'
      },
      {
        name: 'Compliance Management',
        description: 'Regulatory compliance and audit solutions',
        icon: CheckCircle,
        href: '/services/ai-compliance-copilot'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: Building,
    description: 'Scalable solutions for large organizations',
    color: 'from-gray-600 to-slate-700',
    solutions: [
      {
        name: 'Digital Transformation',
        description: 'End-to-end business modernization',
        icon: TrendingUp,
        href: '/services/digital-transformation'
      },
      {
        name: 'Enterprise Integration',
        description: 'Seamless system connectivity and data flow',
        icon: Network,
        href: '/services/enterprise-integration'
      },
      {
        name: 'Legacy Modernization',
        description: 'Upgrade and optimize existing systems',
        icon: Settings,
        href: '/services/legacy-modernization'
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare Technology',
    icon: Heart,
    description: 'Innovative solutions for healthcare providers',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      {
        name: 'AI Healthcare Platform',
        description: 'Intelligent healthcare analytics and automation',
        icon: Heart,
        href: '/services/ai-healthcare-platform'
      },
      {
        name: 'Telemedicine Solutions',
        description: 'Remote healthcare delivery platforms',
        icon: Video,
        href: '/services/telemedicine'
      },
      {
        name: 'Patient Data Management',
        description: 'Secure and compliant patient information systems',
        icon: FileText,
        href: '/services/patient-data-management'
      }
    ]
  },
  {
    id: 'financial',
    name: 'Financial Technology',
    icon: DollarSign,
    description: 'Innovative solutions for financial institutions',
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      {
        name: 'AI Trading Platform',
        description: 'Intelligent trading and portfolio management',
        icon: TrendingUp,
        href: '/services/ai-trading-platform'
      },
      {
        name: 'RegTech Solutions',
        description: 'Regulatory technology and compliance',
        icon: Shield,
        href: '/services/regtech-solutions'
      },
      {
        name: 'Blockchain Integration',
        description: 'Distributed ledger technology solutions',
        icon: Shield,
        href: '/services/blockchain-enterprise-solutions'
      }
    ]
  }
];

const Solutions: React.FC = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue-darker text-white">
      <SEO 
        title="Solutions - Zion Tech Group" 
        description="Explore comprehensive industry and capability solutions including AI, cloud, cybersecurity, and enterprise solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comprehensive Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge technology solutions. 
              From AI-powered automation to enterprise-scale infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Industry & Capability Solutions</h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover tailored solutions designed for your industry and business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    {category.solutions.map((solution, solutionIndex) => {
                      const SolutionIcon = solution.icon;
                      return (
                        <Link
                          key={solutionIndex}
                          to={solution.href}
                          className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group/solution"
                        >
                          <div className="flex items-center space-x-3">
                            <SolutionIcon className="w-5 h-5 text-white" />
                            <div className="flex-1">
                              <h4 className="font-semibold text-white group-hover/solution:text-zion-cyan transition-colors">
                                {solution.name}
                              </h4>
                              <p className="text-white/80 text-sm">
                                {solution.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/60 group-hover/solution:text-white transition-colors" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
