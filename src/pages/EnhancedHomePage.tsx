import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  BarChart,
  Activity,
  Atom,
  Heart,
  Leaf,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Globe2,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Watch,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause
} from 'lucide-react';
import { enhancedServices2025 } from '../data/enhancedServices2025';

const EnhancedHomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  const allServices = enhancedServices2025.flatMap(category => category.items);
  const featuredServices = allServices.filter(service => service.featured);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge AI technology",
      description: "From predictive analytics to automated workflows, our AI solutions deliver measurable results and competitive advantages.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      cta: "Explore AI Solutions",
      href: "/enhanced-services-2025"
    },
    {
      title: "Quantum Computing & AI",
      subtitle: "Next-generation computing for complex problems",
      description: "Combine quantum computing with AI to solve previously impossible optimization challenges in finance, logistics, and research.",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      cta: "Discover Quantum AI",
      href: "/enhanced-services-2025"
    },
    {
      title: "Zero-Trust Cybersecurity",
      subtitle: "Military-grade security for modern enterprises",
      description: "Protect your business with advanced cybersecurity solutions that adapt to evolving threats and ensure compliance.",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      cta: "Secure Your Business",
      href: "/enhanced-services-2025"
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+', color: 'text-cyan-400' },
    { icon: Rocket, label: 'Projects Delivered', value: '1000+', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Average ROI', value: '300%', color: 'text-green-400' },
    { icon: Award, label: 'Industry Awards', value: '25+', color: 'text-yellow-400' }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: allServices.filter(s => s.category === 'Micro SaaS').length },
    { id: 'AI Solutions', name: 'AI Solutions', icon: Brain, count: allServices.filter(s => s.category === 'AI Solutions').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Atom, count: allServices.filter(s => s.category === 'Quantum AI').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? featuredServices.slice(0, 6)
    : featuredServices.filter(service => service.category === activeTab).slice(0, 6);

  // Auto-advance hero slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80"></div>
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                              <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {(() => {
                    const IconComponent = heroSlides[currentSlide].icon;
                    return <IconComponent className="w-12 h-12 text-white" />;
                  })()}
                </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className={`bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                  {heroSlides[currentSlide].title}
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-cyan-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Link
                  to={heroSlides[currentSlide].href}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  {heroSlides[currentSlide].cta}
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>
          
          <button
            onClick={prevSlide}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Services
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our most innovative and impactful solutions designed to transform your business
            </motion.p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mb-3">
                  {service.category}
                </span>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{service.price}/{service.billing}</span>
                    <span className="text-xs text-slate-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-green-400">
                    ROI: {service.roi}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.implementationTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {service.support}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25 inline-block"
                >
                  {service.ctaLabel}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/enhanced-services-2025"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We combine cutting-edge technology with proven business strategies to deliver exceptional results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: '20+ years of experience in technology consulting and implementation'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Military-grade security with SOC 2, ISO 27001, and GDPR compliance'
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Most solutions deployed in 2-8 weeks with proven ROI'
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Round-the-clock support with dedicated specialists and AI assistance'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in touch with our experts to discuss your specific needs and discover how our innovative solutions can drive your success
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="tel:+13024640950" 
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-6 h-6" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-6 h-6" />
                Request Consultation
              </Link>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/5 rounded-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-300 mb-2">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-slate-300">
                <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomePage;