import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import EnhancedHero from '../components/EnhancedHero';
import { 
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, 
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, 
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, 
  Phone, Mail, MapPin, BarChart3, Workflow, Settings, Monitor, Headphones,
  FileText, ShoppingCart, Search, Clock, Camera, CreditCard, ShieldCheck,
  Globe2, Smartphone as Mobile, Laptop, Desktop, Watch, Speaker, Microphone,
  Image, File, Folder, Archive, Trash2, Edit, Plus, Minus, X, AlertCircle,
  Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight,
  ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc,
  SortDesc, RefreshCw, RotateCcw, RotateCw, ZoomIn, ZoomOut, Maximize,
  Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute,
  Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward,
  Shuffle, Repeat, Repeat1
} from 'lucide-react';

export default function Home() {
  const features = [
    { 
      icon: Brain, 
      title: 'AI-Powered Solutions', 
      description: 'Cutting-edge artificial intelligence that transforms business operations and drives innovation.',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Automated Decision Making', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    { 
      icon: Atom, 
      title: 'Quantum Computing', 
      description: 'Next-generation quantum solutions that solve complex problems beyond classical computing.',
      color: 'from-orange-500 to-red-500',
      benefits: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation']
    },
    { 
      icon: Rocket, 
      title: 'Micro SAAS Platform', 
      description: 'Innovative software-as-a-service solutions that scale with your business needs.',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Scalable Architecture', 'Cloud-Native', 'API-First', 'Multi-Tenant']
    },
    { 
      icon: Shield, 
      title: 'Enterprise Security', 
      description: 'Military-grade cybersecurity and compliance solutions for enterprise protection.',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Zero Trust Architecture', 'Compliance Management', 'Threat Detection', 'Data Protection']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle, description: 'Successfully delivered projects across various industries' },
    { number: '50+', label: 'Team Members', icon: Users, description: 'Expert professionals with diverse technical backgrounds' },
    { number: '25+', label: 'Countries Served', icon: Globe, description: 'Global presence with local expertise' },
    { number: '99%', label: 'Client Satisfaction', icon: Star, description: 'Consistently high customer satisfaction ratings' }
  ];

  const services = [
    { 
      title: 'AI Services', 
      description: 'Comprehensive AI solutions for business automation and intelligence',
      href: '/ai-services', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      pricing: 'From $2,999/month',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    { 
      title: 'IT Infrastructure', 
      description: 'Enterprise-grade IT solutions and cloud architecture',
      href: '/it-services', 
      icon: Server, 
      color: 'from-green-500 to-emerald-500',
      pricing: 'From $1,999/month',
      features: ['Cloud Migration', 'DevOps', 'Cybersecurity', 'Data Management']
    },
    { 
      title: 'Quantum Solutions', 
      description: 'Cutting-edge quantum computing and technology services',
      href: '/services/quantum-computing', 
      icon: Atom, 
      color: 'from-orange-500 to-red-500',
      pricing: 'Custom Quote',
      features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Research']
    },
    { 
      title: 'Micro SAAS', 
      description: 'Innovative software solutions for modern businesses',
      href: '/micro-saas', 
      icon: Rocket, 
      color: 'from-blue-500 to-cyan-500',
      pricing: 'From $499/month',
      features: ['Content Creation', 'Email Automation', 'E-commerce Tools', 'Customer Support']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 40% increase in efficiency within the first quarter.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CEO',
      content: 'Their micro SaaS platforms have revolutionized our operations. The ROI was evident from day one.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'VP of Engineering',
      content: 'The quantum computing solutions provided by Zion Tech Group are truly cutting-edge. They helped us solve complex optimization problems.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Customer Service',
      company: 'E-commerce Giant',
      challenge: 'High customer service costs and response times',
      solution: 'Implemented AI chatbots and automated response systems',
      results: ['60% reduction in response time', '40% cost savings', '95% customer satisfaction'],
      image: 'ai-customer-service'
    },
    {
      title: 'Cloud Migration Success',
      company: 'Financial Services',
      challenge: 'Legacy system migration and security concerns',
      solution: 'Comprehensive cloud migration with enhanced security',
      results: ['50% infrastructure cost reduction', '99.9% uptime', 'Enhanced security compliance'],
      image: 'cloud-migration'
    },
    {
      title: 'Quantum Optimization',
      company: 'Logistics Company',
      challenge: 'Complex route optimization problems',
      solution: 'Quantum algorithms for route optimization',
      results: ['30% fuel cost reduction', '25% faster delivery times', 'Reduced carbon footprint'],
      image: 'quantum-optimization'
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Quantum Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future."
        keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"
      />
      
      <EnhancedHero />
      
      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver solutions that transform industries and drive success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href} className="block">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-lg font-bold text-cyan-400 mb-4">{service.pricing}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients who transformed their businesses with our solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-400">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-400">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300">
                Ready to discuss your technology needs? Contact us today.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
                <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM EST</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400 mt-2">24/7 Support Available</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
                <p className="text-sm text-gray-400 mt-2">United States</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}