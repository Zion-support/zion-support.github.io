import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  Palette,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      title: 'AI Project Management Platform',
      description: 'Revolutionize project delivery with AI-powered task prioritization, predictive analytics, and intelligent team collaboration.',
      icon: Target,
      href: '/services/ai-project-management-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['AI-Powered Task Prioritization', 'Smart Team Collaboration', 'Predictive Timeline Management', 'Performance Analytics'],
      price: 'From $299/month',
      category: 'Project Management'
    },
    {
      title: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered cybersecurity platform with 99.9% threat detection rate and real-time automated response.',
      icon: Shield,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-orange-600',
      features: ['Real-time Threat Detection', 'Automated Response', 'Advanced Analytics', 'Compliance Reporting'],
      price: 'From $399/month',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform delivering 25% higher returns through intelligent market analysis and automation.',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-green-600 to-blue-600',
      features: ['AI-Powered Market Analysis', 'Automated Trading Strategies', 'Real-Time Portfolio Optimization', 'Risk Management'],
      price: 'From $199/month',
      category: 'Financial Services'
    },
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis support, predictive analytics, and patient monitoring.',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['AI-Powered Diagnosis Support', 'Predictive Health Analytics', 'Patient Outcome Prediction', 'Real-Time Monitoring'],
      price: 'From $799/month',
      category: 'Healthcare'
    }
  ];

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge innovative services and micro SaaS solutions for 2025. AI-powered platforms, cybersecurity, healthcare analytics, and more."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our revolutionary micro SaaS solutions and AI-powered platforms 
              that are transforming industries and driving business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore All Services
              </Link>
              <Link
                to="/contact"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most advanced and in-demand micro SaaS solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.category}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">4.9</span>
                    <span className="text-gray-400 text-sm">(127 reviews)</span>
                  </div>
                  <Link
                    to={service.href}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services deliver exceptional returns on investment with proven market performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">400%</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30"
            >
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30"
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl border border-orange-500/30"
            >
              <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative micro SaaS solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-3">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3">Get detailed information and quotes</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-gray-300 mb-3">Explore our full service portfolio</p>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  Visit Site
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/demo"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;