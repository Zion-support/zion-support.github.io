import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Server, 
  Rocket, 
  Shield, 
  Cloud, 
  Database,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Atom,
  Satellite,
  Workflow,
  Code,
  Smartphone,
  Building,
  Heart,
  Truck,
  Leaf
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and insights powered by machine learning',
          href: '/services/ai-business-intelligence',
          features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards']
        },
        {
          name: 'AI Customer Experience',
          description: 'Personalized customer interactions and automated support',
          href: '/services/ai-customer-experience-analytics',
          features: ['Sentiment Analysis', 'Automated Support', 'Personalization']
        },
        {
          name: 'AI Cybersecurity',
          description: 'Intelligent threat detection and automated response systems',
          href: '/services/ai-cybersecurity-platform',
          features: ['Threat Intelligence', 'Behavioral Analysis', 'Auto-Response']
        },
        {
          name: 'AI Project Management',
          description: 'Intelligent project planning and resource optimization',
          href: '/services/ai-project-management-platform',
          features: ['Resource Optimization', 'Risk Assessment', 'Progress Tracking']
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud',
      description: 'Scalable, secure, and reliable technology infrastructure solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'Automated deployment and infrastructure management',
          href: '/services/cloud-devops',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade hardware and network solutions',
          href: '/services/it-infrastructure',
          features: ['Network Design', 'Hardware Provisioning', 'Security']
        },
        {
          name: 'Edge Computing',
          description: 'Low-latency computing at the network edge',
          href: '/services/iot-edge-computing',
          features: ['IoT Integration', 'Real-time Processing', '5G Ready']
        },
        {
          name: 'Data Analytics',
          description: 'Comprehensive data processing and visualization',
          href: '/services/data-analytics',
          features: ['Big Data Processing', 'Visualization', 'Insights']
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service platforms for modern businesses',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Micro CRM',
          description: 'Lightweight customer relationship management',
          href: '/services/micro-crm',
          features: ['Contact Management', 'Sales Tracking', 'Automation']
        },
        {
          name: 'Helpdesk Platform',
          description: 'Streamlined customer support and ticket management',
          href: '/services/helpdesk',
          features: ['Ticket Management', 'Knowledge Base', 'Analytics']
        },
        {
          name: 'Website Analytics',
          description: 'Comprehensive website performance insights',
          href: '/services/website-analytics',
          features: ['Performance Metrics', 'User Behavior', 'SEO Analysis']
        },
        {
          name: 'AI Content Creation',
          description: 'Automated content generation and optimization',
          href: '/services/ai-content-creation',
          features: ['Content Generation', 'SEO Optimization', 'Brand Consistency']
        }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      description: 'Next-generation technologies that push the boundaries of possibility',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum algorithms and computational solutions',
          href: '/services/quantum-computing',
          features: ['Quantum Algorithms', 'Simulation', 'Optimization']
        },
        {
          name: 'Space Technology',
          description: 'Satellite and space-based technology solutions',
          href: '/services/space-tech',
          features: ['Satellite Systems', 'Data Collection', 'Earth Observation']
        },
        {
          name: 'Blockchain Solutions',
          description: 'Secure, decentralized applications and platforms',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart Contracts', 'DeFi Platforms', 'Supply Chain']
        },
        {
          name: 'Sustainable Technology',
          description: 'Green tech solutions for environmental impact',
          href: '/services/sustainable-technology',
          features: ['Energy Optimization', 'Carbon Tracking', 'Green Computing']
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations',
      href: '/solutions/enterprise',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Healthcare Technology',
      description: 'AI-powered healthcare diagnostics and analytics',
      href: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Truck,
      title: 'Manufacturing',
      description: 'Smart manufacturing and supply chain optimization',
      href: '/solutions/manufacturing',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Financial Services',
      description: 'AI-driven financial analytics and risk management',
      href: '/solutions/financial',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: '15+ years of experience in AI and enterprise technology'
    },
    {
      icon: CheckCircle,
      title: 'Innovation Leadership',
      description: 'Pioneering quantum computing and AI solutions'
    },
    {
      icon: CheckCircle,
      title: 'Global Support',
      description: '24/7 support across multiple time zones'
    },
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Tailored solutions that fit your specific needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                Comprehensive Technology Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Cutting-Edge Services
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From AI-powered solutions to quantum computing, we deliver comprehensive technology services that drive innovation, efficiency, and growth across all industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses.
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link to={service.href} className="block">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 h-full">
                          <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                            Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions designed for your specific industry challenges and opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.href} className="block">
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                      Explore Solutions <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

