import React from 'react';
import { motion } from 'framer-motion';
import {

  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  Cloud, 
  Users, 
  BarChart3, 
  Target, 
  CheckCircle,
  Star,
  ArrowRight,
  Headphones,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin,
  Code,
  Truck,
  DollarSign,
  Package,
  Server,
  Database,
  Cpu,
  Lock,
  Eye,
  MessageSquare,
  PieChart,
  GitBranch,
  Monitor,
  Settings,
  Workflow,
  AlertTriangle,
  Calculator,
  Warehouse
} from 'lucide-react';

export default function ComprehensiveServicesShowcase() {

  const aiServices = [
    {

      title: 'AI Customer Success Platform',
      description: 'Transform customer relationships with intelligent automation and predictive analytics',
      icon: Users,
      color: 'blue',
      price: 'From $299/month',
      features: ['AI Customer Segmentation', 'Predictive Churn Prevention', 'Automated Success Metrics', 'Smart Workflow Automation'],
      link: '/ai-services/ai-powered-customer-success-platform'
    },
    {

      title: 'AI Cybersecurity Intelligence',
      description: 'Next-generation cybersecurity powered by artificial intelligence',
      icon: Shield,
      color: 'red',
      price: 'From $499/month',
      features: ['AI Threat Detection', 'Behavioral Analytics', 'Automated Response', 'Zero Trust Security'],
      link: '/ai-services/ai-cybersecurity-intelligence-platform'
    },
    {

      title: 'AI Financial Analytics Platform',
      description: 'Revolutionize financial decision-making with AI-powered analytics',
      icon: TrendingUp,
      color: 'green',
      price: 'From $99/month',
      features: ['AI Market Predictions', 'Real-time Analytics', 'Risk Assessment', 'Portfolio Management'],
      link: '/micro-saas/ai-financial-analytics-platform'
    }
  ];

  const itServices = [
    {

      title: 'AI DevOps Automation Platform',
      description: 'Transform development operations with intelligent automation',
      icon: Zap,
      color: 'purple',
      price: 'From $399/month',
      features: ['AI-Powered Automation', 'Smart Code Analysis', 'Multi-Cloud Management', 'Infrastructure as Code'],
      link: '/it-services/ai-devops-automation-platform'
    },
    {

      title: 'AI Supply Chain Optimization',
      description: 'Revolutionize supply chain operations with AI-powered optimization',
      icon: Truck,
      color: 'orange',
      price: 'From $199/month',
      features: ['Smart Logistics', 'Inventory Management', 'Global Supply Chain', 'Predictive Analytics'],
      link: '/micro-saas/ai-supply-chain-optimization'
    }
  ];

  const microSaasServices = [
    {

      title: 'AI Business Intelligence',
      description: 'Intelligent analysis and predictive modeling for business growth',
      icon: Brain,
      color: 'indigo',
      price: 'From $199/month',
      features: ['AI-Powered Insights', 'Real-time Analytics', 'Automated Intelligence', 'Predictive Analytics'],
      link: '/micro-saas/AIBusinessIntelligence'
    },
    {

      title: 'Customer Experience Platform',
      description: 'Deliver exceptional customer experiences with intelligent automation',
      icon: MessageSquare,
      color: 'pink',
      price: 'From $149/month',
      features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Automated Support', 'Personalization Engine'],
      link: '/micro-saas/CustomerExperience'
    }
  ];

  const allServices = [...aiServices, ...itServices, ...microSaasServices];

  const getColorClasses = (color: string) => {

    const colorMap: { [key: string]: string } = {

      blue: 'border-blue-500 hover:border-blue-400 text-blue-400',
      red: 'border-red-500 hover:border-red-400 text-red-400',
      green: 'border-green-500 hover:border-green-400 text-green-400',
      purple: 'border-purple-500 hover:border-purple-400 text-purple-400',
      orange: 'border-orange-500 hover:border-orange-400 text-orange-400',
      indigo: 'border-indigo-500 hover:border-indigo-400 text-indigo-400',
      pink: 'border-pink-500 hover:border-pink-400 text-pink-400'
    };
    return colorMap[color] || 'border-gray-500 hover:border-gray-400 text-gray-400';
  };

  const getBgColorClasses = (color: string) => {

    const colorMap: { [key: string]: string } = {

      blue: 'bg-blue-600 hover:bg-blue-700',
      red: 'bg-red-600 hover:bg-red-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      pink: 'bg-pink-600 hover:bg-pink-700'
    };
    return colorMap[color] || 'bg-gray-600 hover:bg-gray-700';
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              Comprehensive AI, IT & Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of intelligent services designed to transform your business operations, 
              enhance security, optimize processes, and drive growth through the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary artificial intelligence solutions that transform how businesses operate and compete
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <service.icon className={`w-16 h-16 text-${service.color}-400 mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={service.link}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${getBgColorClasses(service.color)} text-white`}
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              IT Infrastructure & DevOps
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge IT solutions that streamline operations and enhance development workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <service.icon className={`w-20 h-20 text-${service.color}-400 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={service.link}
                  className={`w-full block text-center py-4 px-6 rounded-lg font-semibold transition-colors ${getBgColorClasses(service.color)} text-white`}
                >
                  Explore Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized software-as-a-service solutions designed for specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <service.icon className={`w-20 h-20 text-${service.color}-400 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-6">{service.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={service.link}
                  className={`w-full block text-center py-4 px-6 rounded-lg font-semibold transition-colors ${getBgColorClasses(service.color)} text-white`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-gray-400">All our solutions are built with artificial intelligence at the core, ensuring maximum efficiency and intelligence.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade security and compliance standards ensure your data and operations are always protected.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Our solutions deliver measurable improvements in efficiency, cost reduction, and business performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group to power their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}