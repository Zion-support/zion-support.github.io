import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle
} from 'lucide-react';

export function AISolutionsPage() {
  const aiServices = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI-powered analytics platform',
      icon: BarChart3,
      href: '/services/ai-business-intelligence',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reporting', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'AI Sales Copilot',
      description: 'Revolutionize your sales process with intelligent automation and predictive lead scoring',
      icon: Users,
      href: '/services/ai-sales-copilot',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Optimize your marketing campaigns with AI-driven personalization and automation',
      icon: TrendingUp,
      href: '/services/ai-marketing-automation',
      features: ['Personalized Content', 'Campaign Optimization', 'ROI Tracking', 'A/B Testing'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Healthcare Platform',
      description: 'Advanced healthcare solutions powered by artificial intelligence and machine learning',
      icon: Heart,
      href: '/services/ai-healthcare-platform',
      features: ['Diagnostic Support', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'AI Project Management',
      description: 'Streamline project workflows with intelligent automation and predictive analytics',
      icon: Target,
      href: '/services/ai-project-management',
      features: ['Resource Optimization', 'Risk Assessment', 'Timeline Prediction', 'Team Collaboration'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI Quantum Hybrid Platform',
      description: 'Next-generation computing combining AI and quantum technologies for unprecedented performance',
      icon: Brain,
      href: '/services/ai-quantum-hybrid-platform',
      features: ['Quantum ML', 'Hybrid Algorithms', 'Quantum Optimization', 'AI Acceleration'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for pattern recognition and predictive modeling',
      icon: Brain,
      features: ['Deep Learning', 'Neural Networks', 'Supervised Learning', 'Unsupervised Learning']
    },
    {
      title: 'Natural Language Processing',
      description: 'Human-like language understanding and generation capabilities',
      icon: Code,
      features: ['Text Analysis', 'Language Generation', 'Sentiment Analysis', 'Translation']
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automation and insights',
      icon: Eye,
      features: ['Object Detection', 'Image Classification', 'Video Analytics', 'Facial Recognition']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and trend analysis for strategic decision making',
      icon: TrendingUp,
      features: ['Forecasting Models', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
    { name: 'Finance', icon: Building, description: 'Intelligent trading and risk management' },
    { name: 'Manufacturing', icon: Activity, description: 'Predictive maintenance and quality control' },
    { name: 'Retail', icon: Users, description: 'Personalized shopping and inventory optimization' },
    { name: 'Transportation', icon: Rocket, description: 'Autonomous systems and route optimization' },
    { name: 'Education', icon: GraduationCap, description: 'Adaptive learning and student analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver intelligent 
              automation that drives growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core AI Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive AI platform combines multiple technologies to deliver 
              intelligent solutions across all aspects of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Service Portfolio</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered services designed to 
              address specific business challenges and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and 
              opportunities across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation and data-driven insights. 
            Our AI experts are ready to help you implement cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AISolutionsPage;