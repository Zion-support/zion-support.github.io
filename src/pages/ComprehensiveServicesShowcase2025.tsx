import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  BarChart3,
  Code,
  Palette,
  Target,
  Clock,
  ShieldCheck,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  NetworkIcon,
  SmartphoneIcon,
  ServerIcon,
  BrainCircuit,
  Blockchain,
  Leaf,
  Car,
  Building2,
  Scale,
  UserCheck,
  Megaphone,
  Headphones,
  TrendingDown,
  ZapIcon,
  Sparkles
} from 'lucide-react';
import { servicesCatalog } from '../data/servicesCatalog';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Services Available', value: '100+' },
    { label: 'Industries Served', value: '25+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '15+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our operational efficiency by 40% and reduced costs significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Operations, Global Manufacturing',
      company: 'Global Manufacturing',
      content: 'The supply chain optimization platform from Zion Tech Group helped us reduce inventory costs by 25% and improve delivery times by 30%.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer, HealthTech Solutions',
      company: 'HealthTech Solutions',
      content: 'Their healthcare AI platform has improved our diagnosis accuracy and patient outcomes. The ROI was immediate and substantial.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Head of Innovation, FinTech Ventures',
      company: 'FinTech Ventures',
      content: 'Zion Tech Group\'s blockchain and DeFi solutions have revolutionized our financial services. The security and efficiency gains are remarkable.',
      rating: 5
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: BrainCircuit,
      description: 'Cutting-edge AI solutions for business transformation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: ShieldCheck,
      description: 'Advanced security solutions for modern threats',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Blockchain & Web3',
      icon: Blockchain,
      description: 'Next-generation decentralized solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'IoT & Edge Computing',
      icon: NetworkIcon,
      description: 'Connected devices and edge intelligence',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Data-driven insights and business intelligence',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const keyBenefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running in weeks, not months',
      icon: ZapIcon
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2, GDPR, and HIPAA compliance',
      icon: ShieldCheck
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs',
      icon: TrendingUp
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: Headphones
    }
  ];

  return (
    <>
      <SEO
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered micro SaaS, IT infrastructure, and emerging technology solutions. Transform your business with cutting-edge technology."
        keywords="AI services, micro SaaS, IT infrastructure, quantum computing, blockchain, IoT, healthcare AI, fintech, edtech, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Innovation Leader 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative AI-powered solutions, enterprise IT services, and cutting-edge technology platforms designed to transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Explore All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 font-semibold py-3 px-6 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
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
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered solutions to cutting-edge cybersecurity, we offer the most comprehensive range of technology services in the industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl h-full transform group-hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-4">
                      <category.icon className="w-8 h-8 text-white" />
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    </div>
                    <p className="text-white/90">{category.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade solutions with the agility of a startup and the reliability of industry leaders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most popular and innovative solutions that are transforming businesses across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesCatalog.slice(0, 6).flatMap(category => 
                category.items.slice(0, 2)
              ).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="text-right min-w-[100px]">
                      <div className="text-purple-400 font-semibold">{service.price}</div>
                      <div className="text-gray-400 text-sm">
                        {service.billing === 'month' ? 'Monthly' : service.billing === 'hour' ? 'Hourly' : 'Project-based'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full justify-center"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how our innovative solutions can drive your success. Contact us today for a personalized consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.email}</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.address}</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Get Directions
                </a>
              </motion.div>
            </div>

            <div className="text-center">
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Visit our website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;