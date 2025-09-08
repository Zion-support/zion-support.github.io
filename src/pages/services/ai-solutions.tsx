import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  FileText, 
  Heart, 
  Target, 
  DollarSign, 
  Cpu,
  Network,
  Activity,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Code,
  Database,
  Lock,
  Eye,
  Atom,
  BarChart3,
  Briefcase,
  Calendar,
  Truck,
  Building,
  Newspaper,
  Video,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AISolutionsPage() {
  const aiServices = [
    {
      category: 'Core AI Solutions',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and business intelligence powered by artificial intelligence',
          icon: Brain,
          features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
          href: '/services/ai-business-intelligence'
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales assistant that helps close deals and manage customer relationships',
          icon: Users,
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot'
        },
        {
          name: 'AI Marketing Automation',
          description: 'Automate marketing campaigns with intelligent targeting and optimization',
          icon: TrendingUp,
          features: ['Campaign Optimization', 'Personalization', 'A/B Testing', 'ROI Tracking'],
          href: '/services/ai-marketing-automation'
        },
        {
          name: 'AI Healthcare Platform',
          description: 'AI-powered healthcare solutions for diagnosis, treatment, and patient care',
          icon: Heart,
          features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Health Analytics'],
          href: '/services/ai-healthcare-platform'
        }
      ]
    },
    {
      category: 'Advanced AI Services',
      services: [
        {
          name: 'AI Project Management',
          description: 'Intelligent project management with predictive scheduling and risk assessment',
          icon: Target,
          features: ['Smart Scheduling', 'Risk Assessment', 'Resource Optimization', 'Progress Tracking'],
          href: '/services/ai-project-management'
        },
        {
          name: 'AI Quantum Hybrid Platform',
          description: 'Combining AI and quantum computing for breakthrough solutions',
          icon: Atom,
          features: ['Quantum AI Algorithms', 'Hybrid Processing', 'Advanced Optimization', 'Future-Ready Tech'],
          href: '/services/ai-quantum-hybrid-platform'
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation and process optimization',
          icon: Network,
          features: ['Process Automation', 'Workflow Optimization', 'Smart Routing', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator'
        },
        {
          name: 'AI Data Governance Platform',
          description: 'Comprehensive data governance with AI-powered compliance and security',
          icon: Shield,
          features: ['Data Compliance', 'Security Monitoring', 'Privacy Protection', 'Audit Trails'],
          href: '/services/ai-data-governance-platform'
        }
      ]
    },
    {
      category: 'Specialized AI Solutions',
      services: [
        {
          name: 'AI Customer Experience Analytics',
          description: 'Deep insights into customer behavior and satisfaction',
          icon: Users,
          features: ['Behavior Analysis', 'Sentiment Analysis', 'Journey Mapping', 'Satisfaction Metrics'],
          href: '/services/ai-customer-experience-analytics'
        },
        {
          name: 'AI Financial Risk Management',
          description: 'Advanced risk assessment and financial modeling',
          icon: DollarSign,
          features: ['Risk Assessment', 'Financial Modeling', 'Fraud Detection', 'Compliance Monitoring'],
          href: '/services/ai-financial-risk-management'
        },
        {
          name: 'AI Code Review Security Scanner',
          description: 'Automated security scanning and code quality assessment',
          icon: Code,
          features: ['Security Scanning', 'Code Quality', 'Vulnerability Detection', 'Best Practices'],
          href: '/services/ai-code-review-security-scanner'
        },
        {
          name: 'AI Autonomous Supply Chain',
          description: 'Self-optimizing supply chain management with predictive capabilities',
          icon: Truck,
          features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Cost Reduction'],
          href: '/services/ai-autonomous-supply-chain'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows for maximum productivity'
    },
    {
      icon: TrendingUp,
      title: 'Better Insights',
      description: 'Gain deeper understanding of your business with AI-powered analytics'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced threat detection and security monitoring powered by AI'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Personalized interactions and predictive customer service'
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '60%', label: 'Time Savings' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From automation to predictive analytics, we deliver the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Comprehensive AI Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI solutions span across all aspects of modern business, 
              providing intelligent automation and insights that drive growth.
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the transformative power of artificial intelligence 
              with our comprehensive and cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the AI revolution and unlock unprecedented growth opportunities. 
              Our experts are ready to help you implement the perfect AI solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}