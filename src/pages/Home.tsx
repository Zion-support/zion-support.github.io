import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  BarChart3,
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
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target
} from 'lucide-react';

// Memoized data constants
const HERO_STATS = [
  { label: 'AI Solutions', value: '50+', icon: Brain },
  { label: 'Enterprise Clients', value: '200+', icon: Building },
  { label: 'Success Rate', value: '98%', icon: CheckCircle },
  { label: 'Years Experience', value: '15+', icon: Star }
];

const FEATURED_SERVICES = [
  {
    name: 'AI Edge Computing Platform',
    description: 'Deploy AI models directly to edge devices for real-time processing and reduced latency',
    icon: Cpu,
    href: '/services/ai-edge-computing-platform',
    color: 'from-purple-600 to-pink-600',
    features: ['Real-time AI processing', 'Edge security', 'IoT integration']
  },
  {
    name: 'AI Digital Twin Platform',
    description: 'Create intelligent digital replicas with real-time data synchronization and AI analytics',
    icon: Monitor,
    href: '/services/ai-digital-twin-platform',
    color: 'from-blue-600 to-cyan-600',
    features: ['3D visualization', 'Predictive maintenance', 'Real-time sync']
  },
  {
    name: 'AI Customer Experience Analytics',
    description: 'Transform customer experience with AI-powered analytics and personalization',
    icon: BarChart3,
    href: '/services/ai-customer-experience-analytics',
    color: 'from-green-600 to-emerald-600',
    features: ['Sentiment analysis', 'Journey mapping', 'Behavior prediction']
  },
  {
    name: 'AI Cybersecurity Platform',
    description: 'AI-powered threat detection and response for comprehensive security',
    icon: Shield,
    href: '/services/ai-cybersecurity-platform',
    color: 'from-red-600 to-orange-600',
    features: ['Threat detection', 'Real-time response', 'Compliance automation']
  }
];

const SERVICE_CATEGORIES = [
  {
    name: 'AI & Analytics',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    services: [
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
      { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },
      { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
      { name: 'AI Project Management', href: '/services/ai-project-management-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    services: [
      { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
      { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
      { name: 'Threat Intelligence', href: '/services/ai-cybersecurity-threat-detection' },
      { name: 'Compliance Automation', href: '/services/ai-compliance-assistant' }
    ]
  },
  {
    name: 'Emerging Tech',
    icon: Zap,
    color: 'from-blue-600 to-cyan-600',
    services: [
      { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
      { name: 'Edge Computing', href: '/services/edge-computing-platform' },
      { name: 'Digital Twin', href: '/services/digital-twin' },
      { name: 'Space Technology', href: '/services/space-tech' }
    ]
  },
  {
    name: 'Enterprise Solutions',
    icon: Building,
    color: 'from-indigo-600 to-purple-600',
    services: [
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'IoT & Edge', href: '/services/iot-edge' },
      { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
      { name: 'IT Infrastructure', href: '/services/it-infrastructure' }
    ]
  }
];

const MICRO_SAAS_PRODUCTS = [
  {
    name: 'AI Sales Copilot',
    description: 'Complete sales automation suite with AI-powered insights',
    icon: TrendingUp,
    href: '/services/ai-sales-copilot',
    price: '$299/month'
  },
  {
    name: 'AI Support Helpdesk',
    description: 'Intelligent customer support platform with 24/7 availability',
    icon: MessageCircle,
    href: '/services/ai-support-helpdesk',
    price: '$199/month'
  },
  {
    name: 'AI Content Generator',
    description: 'AI-powered content creation and optimization platform',
    icon: BookOpen,
    href: '/services/ai-content-generator',
    price: '$149/month'
  },
  {
    name: 'AI Lead Scoring',
    description: 'Machine learning-based lead prioritization and scoring',
    icon: Target,
    href: '/services/ai-lead-scoring',
    price: '$99/month'
  }
];

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our AI strategy. Their Enterprise Orchestrator increased our efficiency by 300%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Director of IT, HealthFirst',
    content: 'The AI Healthcare Analytics platform has revolutionized our diagnostic capabilities and patient care.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Operations, FinTech Solutions',
    content: 'Outstanding cybersecurity solutions. Their AI-powered threat detection is cutting-edge and reliable.',
    rating: 5
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Home = React.memo(() => {
  // Memoized computed values
  const heroStats = useMemo(() => HERO_STATS, []);
  const featuredServices = useMemo(() => FEATURED_SERVICES, []);
  const serviceCategories = useMemo(() => SERVICE_CATEGORIES, []);
  const microSaaSProducts = useMemo(() => MICRO_SAAS_PRODUCTS, []);
  const testimonials = useMemo(() => TESTIMONIALS, []);

  // Memoized event handlers
  const handleServiceClick = useCallback((href: string) => {
    // Analytics tracking could go here
    console.log('Service clicked:', href);
  }, []);

  const handleCTAClick = useCallback(() => {
    // Analytics tracking could go here
    console.log('CTA clicked');
  }, []);

  const renderStarRating = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  }, []);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Transforming Business Through
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Empowering enterprises with cutting-edge AI solutions, quantum computing, and innovative technology platforms that drive growth and competitive advantage.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg text-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group relative"
              >
                <Link
                  to={service.href}
                  onClick={() => handleServiceClick(service.href)}
                  className="block p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI and analytics to cybersecurity and emerging technologies, we provide end-to-end solutions for modern enterprises.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.href}
                        onClick={() => handleServiceClick(service.href)}
                        className="block text-gray-400 hover:text-zion-cyan transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Products */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready-to-Use AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Jumpstart your AI transformation with our pre-built, enterprise-ready micro SaaS platforms.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className="group"
              >
                <Link
                  to={product.href}
                  onClick={() => handleServiceClick(product.href)}
                  className="block p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{product.price}</span>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how leading enterprises are transforming their operations with our AI solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  {renderStarRating(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises already leveraging our AI solutions to drive innovation, efficiency, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                onClick={handleCTAClick}
                className="px-8 py-4 bg-white text-zion-blue rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
