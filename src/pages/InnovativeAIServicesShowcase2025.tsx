import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Users, 
  Truck, 
  BarChart3, 
  MessageCircle, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  Cpu,
  Network,
  Lock,
  Eye,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Activity,
  TrendingUp,
  DollarSign,
  Award,
  Handshake,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Route,
  Navigation,
  Compass,
  Map,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Heart,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Smile,
  PieChart,
  LineChart,
  ScatterPlot,
  HeatMap,
  Calendar,
  Clock
} from 'lucide-react';

export default function InnovativeAIServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Advanced Data Analytics Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: BarChart3,
      href: '/services/ai-advanced-data-analytics-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time processing', 'ML algorithms', 'Interactive visualizations', 'Auto-scaling infrastructure'],
      pricing: 'Starting at $299/month',
      benefits: ['10x Faster Insights', '95% Accuracy', 'Cost Reduction', 'Scalable Solution']
    },
    {
      name: 'AI Customer Experience Platform',
      description: 'Deliver exceptional customer experiences across all channels with AI',
      icon: Users,
      href: '/services/ai-customer-experience-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['AI chatbots', 'Sentiment analysis', 'Predictive analytics', 'Omnichannel integration'],
      pricing: 'Starting at $199/month',
      benefits: ['24/7 Availability', '90% Faster Response', '30% Cost Reduction', 'Personalized Experience']
    },
    {
      name: 'AI Supply Chain Optimization Platform',
      description: 'Optimize your supply chain operations with intelligent AI solutions',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Real-time tracking', 'Route optimization', 'Risk management', 'Predictive analytics'],
      pricing: 'Starting at $399/month',
      benefits: ['25% Cost Reduction', '40% Faster Delivery', '99.9% Accuracy', 'Real-time Visibility']
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Zero-trust architecture'],
      pricing: 'Starting at $599/month',
      benefits: ['Real-time Protection', 'Automated Response', 'Compliance Ready', 'Advanced Analytics']
    },
    {
      name: 'AI Healthcare Platform',
      description: 'Revolutionary healthcare solutions powered by artificial intelligence',
      icon: Heart,
      href: '/services/ai-healthcare-platform',
      color: 'from-pink-600 to-rose-600',
      features: ['Predictive diagnostics', 'Treatment optimization', 'Patient monitoring', 'Clinical decision support'],
      pricing: 'Starting at $799/month',
      benefits: ['Improved Outcomes', 'Reduced Costs', 'Better Patient Care', 'Data-Driven Insights']
    },
    {
      name: 'AI Quantum Hybrid Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/ai-quantum-hybrid-platform',
      color: 'from-indigo-600 to-purple-600',
      features: ['Quantum algorithms', 'Hybrid computing', 'Optimization', 'Research support'],
      pricing: 'Starting at $1,299/month',
      benefits: ['Quantum Advantage', 'Hybrid Efficiency', 'Research Ready', 'Future-Proof Technology']
    }
  ];

  const industrySolutions = [
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'AI-powered solutions for banking, insurance, and fintech',
      color: 'from-green-500 to-emerald-500',
      services: ['Risk Assessment', 'Fraud Detection', 'Trading Analytics', 'Customer Insights']
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      description: 'Transform patient care with intelligent healthcare solutions',
      color: 'from-red-500 to-pink-500',
      services: ['Diagnostic AI', 'Drug Discovery', 'Patient Care', 'Clinical Research']
    },
    {
      name: 'Manufacturing & Logistics',
      icon: Factory,
      description: 'Optimize operations with smart manufacturing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Inventory Management']
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Enhance customer experience and optimize operations',
      color: 'from-purple-500 to-pink-500',
      services: ['Personalization', 'Inventory Optimization', 'Customer Service', 'Analytics']
    }
  ];

  const technologyStack = [
    {
      name: 'Machine Learning',
      icon: Brain,
      description: 'Advanced ML algorithms and models',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Natural Language Processing',
      icon: MessageCircle,
      description: 'Understanding and generating human language',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Computer Vision',
      icon: Eye,
      description: 'Image and video analysis capabilities',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Predictive Analytics',
      icon: TrendingUp,
      description: 'Forecasting and trend analysis',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Innovative AI Services 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}AI Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI services designed to transform businesses and drive innovation. 
              From data analytics to customer experience, we provide comprehensive AI solutions for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View All Services
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: "AI Services", value: "25+", icon: Brain },
              { label: "Industries Served", value: "15+", icon: Building },
              { label: "Success Rate", value: "98%", icon: CheckCircle },
              { label: "Global Clients", value: "500+", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our flagship AI services designed to address the most critical business challenges 
              and drive digital transformation across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    <div className="text-zion-cyan font-semibold">{service.pricing}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-zion-cyan" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                        <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored AI solutions designed for the unique challenges and requirements 
              of different industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{solution.name}</h3>
                <p className="text-zion-slate-light text-center mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Built on cutting-edge AI technologies and frameworks to deliver 
              the most powerful and scalable solutions available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of organizations already leveraging our AI services 
              to drive innovation, improve efficiency, and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}