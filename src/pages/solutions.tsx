import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  Cpu,
  Network,
  Code,
  Rocket,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
  Play,
  Truck,
  BookOpen,
  Atom,
  Sparkles,
  Target,
  Award,
  DollarSign
} from 'lucide-react';

const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      {
        name: 'AI Content Creation Studio Pro',
        description: 'Advanced AI-powered content creation with multi-format support',
        features: ['Text generation', 'Image creation', 'Video production', 'SEO optimization'],
        price: '$299/month'
      },
      {
        name: 'AI-Powered Legal Document Automation',
        description: 'Automate legal document creation and compliance monitoring',
        features: ['Smart templates', 'Compliance checking', 'Collaborative editing', 'Analytics'],
        price: '$199/month'
      },
      {
        name: 'AI Healthcare Analytics Platform',
        description: 'Healthcare data analytics and predictive insights',
        features: ['Patient monitoring', 'Disease prediction', 'Population health', 'HIPAA compliance'],
        price: '$2,499/month'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: [
      {
        name: 'AI Cybersecurity Platform',
        description: 'Next-generation threat detection and response',
        features: ['Real-time monitoring', 'AI threat detection', 'Automated response', 'Compliance reporting'],
        price: '$1,999/month'
      },
      {
        name: 'Zero Trust Security Framework',
        description: 'Implement comprehensive zero trust architecture',
        features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring'],
        price: '$3,999/month'
      }
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Scalable cloud solutions for modern business needs',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      {
        name: 'Multi-Cloud Management Platform',
        description: 'Unified management across AWS, Azure, and Google Cloud',
        features: ['Cost optimization', 'Performance monitoring', 'Security management', 'Automation'],
        price: '$1,499/month'
      },
      {
        name: 'Edge Computing Solutions',
        description: 'Deploy applications closer to your users for better performance',
        features: ['Global distribution', 'Low latency', 'Scalability', 'Real-time processing'],
        price: '$2,999/month'
      }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: BarChart3,
    description: 'Turn your data into actionable business intelligence',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      {
        name: 'Real-Time Analytics Dashboard',
        description: 'Live insights and interactive data visualization',
        features: ['Real-time data', 'Interactive charts', 'Custom dashboards', 'Mobile access'],
        price: '$899/month'
      },
      {
        name: 'Predictive Analytics Engine',
        description: 'Forecast trends and make data-driven decisions',
        features: ['Machine learning', 'Trend analysis', 'Risk assessment', 'Automated insights'],
        price: '$1,799/month'
      }
    ]
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: Rocket,
    description: 'Modernize your business processes and customer experiences',
    color: 'from-orange-500 to-red-600',
    solutions: [
      {
        name: 'Customer Experience Platform',
        description: 'Unified platform for exceptional customer interactions',
        features: ['Omnichannel support', 'Personalization', 'Analytics', 'Integration'],
        price: '$1,299/month'
      },
      {
        name: 'Process Automation Suite',
        description: 'Streamline operations with intelligent automation',
        features: ['Workflow automation', 'Document processing', 'Integration', 'Monitoring'],
        price: '$999/month'
      }
    ]
  }
];

const Solutions: React.FC = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail', icon: ShoppingCart },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'logistics', name: 'Logistics', icon: Truck }
  ];

  const filteredCategories = selectedIndustry === 'all' 
    ? solutionCategories 
    : solutionCategories.filter(category => 
        category.solutions.some(solution => 
          solution.name.toLowerCase().includes(selectedIndustry)
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions
              <span className="text-blue-400 block">That Scale</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations, 
              enhance security, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Filter by Industry</h2>
            <p className="text-gray-300">Find solutions tailored to your specific industry needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-gray-300">Comprehensive technology solutions for every business need</p>
          </div>

          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solutionIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: solutionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">{solution.name}</h4>
                      <p className="text-gray-300 mb-4">{solution.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-400">{solution.price}</span>
                        <a
                          href="https://ziontechgroup.com/contact"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Learn More
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you choose the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing the Right Solution?
          </h3>
          <p className="text-gray-300 mb-6">
            Our technology experts are here to guide you to the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
