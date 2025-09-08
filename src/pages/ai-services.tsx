import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Brain,
  Zap,
  Shield,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Eye,
  BarChart3,
  Users,
  Globe,
  Star,
  TrendingUp,
  Lightbulb,
  Code,
  Server,
  Lock,
  Cloud,
  Atom,
  PenTool,
  MessageCircle,
  Workflow,
  Heart,
  Building,
  ShoppingCart,
  Truck,
  Factory,
  GraduationCap,
  BookOpen,
  Video,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AiServices() {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI-powered analytics platform.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      link: '/services/ai-business-intelligence',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Platform',
      description: 'Protect your business with AI-driven threat detection and automated security responses.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Management'],
      link: '/services/ai-cybersecurity-platform',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Orchestrator',
      description: 'Automate complex business processes with intelligent workflow management and optimization.',
      features: ['Process Automation', 'Smart Routing', 'Performance Analytics', 'Integration APIs'],
      link: '/services/ai-workflow-orchestrator',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support Automation',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      features: ['24/7 Support', 'Natural Language Processing', 'Ticket Routing', 'Customer Analytics'],
      link: '/services/ai-customer-support-automation',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: PenTool,
      title: 'AI Content Creation Suite',
      description: 'Generate high-quality content at scale with our AI-powered content creation tools.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization'],
      link: '/services/ai-content-creation-suite',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'AI HR Platform',
      description: 'Streamline HR operations with intelligent recruitment, performance management, and employee engagement.',
      features: ['Smart Recruitment', 'Performance Analytics', 'Employee Engagement', 'Compliance Tracking'],
      link: '/services/ai-hr-platform',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const industrySolutions = [
    {
      icon: Building,
      title: 'Enterprise',
      description: 'Scalable AI solutions for large organizations with complex requirements.',
      link: '/solutions/enterprise'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'AI-powered healthcare analytics, diagnostics, and patient care optimization.',
      link: '/solutions/healthcare'
    },
    {
      icon: TrendingUp,
      title: 'Financial Services',
      description: 'AI-driven financial analytics, risk management, and trading optimization.',
      link: '/solutions/financial'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart manufacturing with AI-powered predictive maintenance and quality control.',
      link: '/solutions/manufacturing'
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'AI-enhanced customer experience, inventory management, and sales optimization.',
      link: '/solutions/retail'
    },
    {
      icon: Globe,
      title: 'Government',
      description: 'Secure AI solutions for public sector efficiency and citizen services.',
      link: '/solutions/government'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Services', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'AI Monitoring', icon: Eye },
    { number: '500+', label: 'Models Deployed', icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Transform your business with Zion Tech Group's cutting-edge AI services. From business intelligence to cybersecurity, we deliver intelligent solutions that drive growth and innovation."
        keywords="AI services, artificial intelligence, machine learning, business intelligence, cybersecurity, automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Artificial Intelligence
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services That <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Leverage the power of artificial intelligence to automate processes, gain insights, and create 
              competitive advantages. Our AI solutions are designed to scale with your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions for specific industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Explore Solutions</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}