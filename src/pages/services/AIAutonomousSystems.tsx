import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Building, 
  DollarSign, 
  Heart, 
  Truck, 
  Shield,
  Zap,
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-legal-research-assistant',
    title: 'AI Legal Research Assistant',
    description: 'Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal precedents',
    icon: Building,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Automated case law analysis',
      'Statute interpretation assistance',
      'Legal precedent identification',
      'Research summary generation',
      'Citation verification'
    ],
    pricing: '$299/month',
    href: '/ai-autonomous-legal-research-assistant'
  },
  {
    id: 'ai-financial-risk-manager',
    title: 'AI Financial Risk Manager',
    description: 'Intelligent financial risk assessment and management system that operates autonomously to protect your investments',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    features: [
      'Real-time risk assessment',
      'Portfolio optimization',
      'Market trend analysis',
      'Automated alerts',
      'Compliance monitoring'
    ],
    pricing: '$499/month',
    href: '/ai-autonomous-financial-risk-manager'
  },
  {
    id: 'ai-healthcare-diagnostics-pro',
    title: 'AI Healthcare Diagnostics Pro',
    description: 'Advanced AI-powered healthcare diagnostics system that provides autonomous medical analysis and recommendations',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Treatment recommendations',
      'Patient monitoring',
      'Diagnostic accuracy tracking'
    ],
    pricing: '$799/month',
    href: '/ai-autonomous-healthcare-diagnostics-pro'
  },
  {
    id: 'ai-supply-chain-optimizer',
    title: 'AI Supply Chain Optimizer',
    description: 'Intelligent supply chain management system that autonomously optimizes logistics, inventory, and distribution',
    icon: Truck,
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Cost reduction analysis'
    ],
    pricing: '$599/month',
    href: '/ai-autonomous-supply-chain-optimizer'
  },
  {
    id: 'ai-cybersecurity-sentinel',
    title: 'AI Cybersecurity Sentinel',
    description: 'Autonomous cybersecurity system that continuously monitors, detects, and responds to threats in real-time',
    icon: Shield,
    color: 'from-orange-500 to-red-600',
    features: [
      'Threat detection & response',
      'Behavioral analysis',
      'Incident automation',
      'Security monitoring',
      'Compliance reporting'
    ],
    pricing: '$699/month',
    href: '/ai-autonomous-cybersecurity-sentinel'
  }
];

const benefits = [
  {
    title: '24/7 Autonomous Operation',
    description: 'AI systems that work continuously without human intervention',
    icon: Zap
  },
  {
    title: 'Continuous Learning',
    description: 'Systems that improve performance over time through machine learning',
    icon: TrendingUp
  },
  {
    title: 'Scalable Solutions',
    description: 'AI systems that grow with your business needs',
    icon: Building
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce operational costs through intelligent automation',
    icon: DollarSign
  }
];

const useCases = [
  {
    industry: 'Legal',
    description: 'Automate legal research and case analysis for law firms',
    icon: Building
  },
  {
    industry: 'Finance',
    description: 'Intelligent risk management and portfolio optimization',
    icon: DollarSign
  },
  {
    industry: 'Healthcare',
    description: 'Enhanced diagnostic accuracy and patient care',
    icon: Heart
  },
  {
    industry: 'Manufacturing',
    description: 'Optimize supply chains and production processes',
    icon: Truck
  },
  {
    industry: 'Technology',
    description: 'Advanced cybersecurity and threat protection',
    icon: Shield
  }
];
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous systems platform. Intelligent decision-making, automated operations, and scalable architecture for enterprise transformation." />
        <meta name="keywords" content="AI systems, autonomous systems, intelligent automation, AI decision making, system automation, AI operations" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-systems" />
      </Helmet>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary AI systems that operate independently and transform business operations across industries. 
            Our autonomous solutions deliver unprecedented efficiency, accuracy, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered autonomous systems designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose AI Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems deliver exceptional value through continuous learning, autonomous operation, and intelligent decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems are transforming industries across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
                <p className="text-gray-300">{useCase.description}</p>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Embrace the Future of AI?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge AI autonomous systems. 
            Experience the power of intelligent automation and unprecedented efficiency.
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to meet your automation and AI needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-gray-700 hover:border-cyan-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.plan === "Enterprise" ? "/contact" : "/contact"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous AI systems are transforming industries and revolutionizing business operations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                  </div>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies that ensure reliability, security, and performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Cpu className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock unprecedented efficiency and intelligence for your business operations.
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
