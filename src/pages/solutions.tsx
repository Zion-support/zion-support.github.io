import React, { useState } from 'react';
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
  Database,
  Network,
  Lock,
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
import { SEO } from '../components/SEO';

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
        link: '/ai-solutions'
      },
      {
        name: 'AI Compliance Platform',
        description: 'Automated regulatory compliance and risk management',
        icon: Shield,
        link: '/ai-compliance'
      },
      {
        name: 'AI Sales Copilot',
        description: 'Intelligent sales automation and customer relationship management',
        icon: Users,
        link: '/ai-sales'
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
        name: 'Cloud DevOps',
        description: 'Streamlined development and operations workflows',
        icon: Server,
        link: '/cloud-devops'
      },
      {
        name: 'IT Infrastructure',
        description: 'Robust and scalable technology infrastructure',
        icon: Network,
        link: '/it-infrastructure'
      },
      {
        name: 'FinOps Advisor',
        description: 'Financial operations optimization for cloud resources',
        icon: DollarSign,
        link: '/finops'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions for modern threats',
    color: 'from-red-500 to-orange-600',
    solutions: [
      {
        name: 'Cybersecurity Services',
        description: 'End-to-end security solutions and threat protection',
        icon: Lock,
        link: '/cybersecurity'
      },
      {
        name: 'Security Headers',
        description: 'Advanced security headers and compliance tools',
        icon: Shield,
        link: '/security-headers'
      },
      {
        name: 'DSR Portal',
        description: 'Data Subject Rights management and compliance',
        icon: FileText,
        link: '/dsr-portal'
      }
    ]
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: Rocket,
    description: 'Modernize your business with cutting-edge digital solutions',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      {
        name: 'Digital Twin',
        description: 'Virtual replicas for simulation and optimization',
        icon: Cpu,
        link: '/digital-twin'
      },
      {
        name: 'Digital Transformation',
        description: 'End-to-end business modernization strategies',
        icon: TrendingUp,
        link: '/digital-transformation'
      },
      {
        name: 'IT Consulting',
        description: 'Strategic technology consulting and advisory services',
        icon: Users,
        link: '/it-consulting'
      }
    ]
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge technologies for future-ready businesses',
    color: 'from-pink-500 to-rose-600',
    solutions: [
      {
        name: 'Quantum Computing',
        description: 'Next-generation computing solutions',
        icon: Atom,
        link: '/quantum-computing'
      },
      {
        name: 'IoT Edge Computing',
        description: 'Internet of Things and edge computing solutions',
        icon: Globe,
        link: '/iot-edge'
      },
      {
        name: 'Blockchain Solutions',
        description: 'Distributed ledger technology applications',
        icon: Code,
        link: '/blockchain'
      }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: Database,
    description: 'Turn data into actionable insights and business value',
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      {
        name: 'Data Analytics',
        description: 'Comprehensive data analysis and visualization',
        icon: BarChart3,
        link: '/data-analytics'
      },
      {
        name: 'Business Intelligence',
        description: 'Strategic insights and performance monitoring',
        icon: TrendingUp,
        link: '/business-intelligence'
      }
    ]
  },
  {
    id: 'micro-saas',
    name: 'Micro SaaS',
    icon: Zap,
    description: 'Specialized software solutions for specific business needs',
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      {
        name: 'Micro SaaS Platform',
        description: 'Custom software-as-a-service solutions',
        icon: Rocket,
        link: '/micro-saas'
      },
      {
        name: 'Micro CRM',
        description: 'Customer relationship management for small businesses',
        icon: Users,
        link: '/micro-crm'
      },
      {
        name: 'Helpdesk Platform',
        description: 'Customer support and ticket management system',
        icon: MessageCircle,
        link: '/helpdesk'
      }
    ]
  }
];

const Solutions: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? solutionCategories 
    : solutionCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Solutions - Zion Tech Group" 
        description="Explore comprehensive industry and capability solutions including AI, cloud, cybersecurity, and digital transformation services."
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Solutions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover comprehensive solutions designed to transform your business through innovation, 
            technology, and strategic expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
            }`}
          >
            All Solutions
          </button>
          {solutionCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${category.color} 
                border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 
                hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mr-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                
                <p className="text-slate-200 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (solutionIndex * 0.05) }}
                      className="group/solution"
                    >
                      <a
                        href={solution.link}
                        className="block p-4 rounded-xl bg-white/5 border border-white/10 
                          hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300
                          group-hover/solution:bg-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-2 rounded-lg bg-white/10 mr-3">
                              <solution.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white group-hover/solution:text-cyan-400 transition-colors">
                                {solution.name}
                              </h4>
                              <p className="text-sm text-slate-300 mt-1">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover/solution:text-cyan-400 
                            group-hover/solution:translate-x-1 transition-all duration-300" />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-slate-800/60 to-slate-700/60 
            border border-slate-600/50 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6">
              Let's discuss how our solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold 
                  rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold 
                  rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
