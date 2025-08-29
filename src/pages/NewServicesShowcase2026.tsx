import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Rocket, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
  Award,
  Lock,
  Activity,
  AlertCircle,
  CheckSquare,
  FileText,
  Settings,
  Bell,
  Calendar,
  DollarSign,
  Percent,
  Building2,
  Truck,
  Ship,
  Heart,
  Stethoscope,
  Microscope,
  Building,
  Crown,
  Gem,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Plus,
  Minus,
  Cross,
  Check,
  X,
  Info,
  HelpCircle
} from 'lucide-react';
import newServices2026 from '../data/newServices2026';

export default function NewServicesShowcase2026() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    {
      number: '10+',
      label: 'New AI Services',
      description: 'Cutting-edge micro SAAS solutions'
    },
    {
      number: '85%+',
      label: 'Average Accuracy',
      description: 'AI prediction and analysis accuracy'
    },
    {
      number: '$200+',
      label: 'Starting Price',
      description: 'Affordable monthly pricing'
    },
    {
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance'
    }
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'All services built with cutting-edge artificial intelligence and machine learning'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with full compliance for industry-specific regulations'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Live data processing and instant insights for immediate decision-making'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Services available worldwide with multi-language and multi-currency support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEO 
        title="New Innovative Micro SAAS Services 2026 | Zion Tech Group"
        description="Discover our cutting-edge AI-powered micro SAAS services for 2026. From real estate analytics to healthcare predictions, transform your business with intelligent solutions."
        keywords="AI micro SAAS, innovative services 2026, AI real estate, AI healthcare, AI supply chain, AI legal, AI education, AI marketing, AI HR, AI sustainability"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100/10 border border-indigo-200/20 text-indigo-200 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Services 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              New Innovative
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Micro SAAS Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI-powered micro SAAS services for 2026. From real estate analytics to healthcare predictions, 
              transform your business with intelligent solutions that deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=New Services 2026 Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-indigo-200/20 text-indigo-200 font-semibold hover:bg-indigo-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of next-generation artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI-powered solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {newServices2026.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-indigo-200/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                        <div className="text-2xl font-bold text-indigo-400">{service.price}</div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {service.accuracy && (
                        <div className="flex items-center mb-4">
                          <Target className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm text-gray-300">Accuracy: {service.accuracy}</span>
                        </div>
                      )}

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          Market: {service.marketSize}
                        </div>
                        <a
                          href={service.href}
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations who are already using our AI services to gain competitive advantages and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=New Services 2026 Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-indigo-200/20 text-indigo-200 font-semibold hover:bg-indigo-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-indigo-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-indigo-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-indigo-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-indigo-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-indigo-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}