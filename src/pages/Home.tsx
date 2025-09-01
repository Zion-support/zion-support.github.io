import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Target,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = useMemo(() => [
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation']
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support']
    },
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
    }
  ], []);

  const serviceCategories = [
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

  const microSaaSProducts = [
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our AI strategy. Their Enterprise Orchestrator increased our efficiency by 300%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Director of IT, HealthFirst',
      content: 'The AI Healthcare Analytics platform has revolutionized our diagnostic capabilities and patient care.',
      rating: 5,
      avatar: '👨‍⚕️'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, FinTech Solutions',
      content: 'Outstanding cybersecurity solutions. Their AI-powered threat detection is cutting-edge and reliable.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="relative">
      <FuturisticBackground />
      <div className="relative z-10">
        {/* Hero content */}
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
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zion Tech Group delivers cutting-edge AI solutions, micro SaaS products, and strategic IT services 
            that drive digital transformation and business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';

// Services Showcase Component
const ServicesShowcase = React.memo(() => {
  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Advanced AI solutions for business intelligence and analytics',
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
      description: 'Comprehensive security solutions powered by AI',
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
      description: 'Cutting-edge technology solutions for the future',
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
      description: 'Scalable solutions for enterprise organizations',
      services: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'IoT & Edge', href: '/services/iot-edge' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' }
      ]
    }
  ];

  return (
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
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions and enterprise services designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                      >
                        <ArrowRight className="h-3 w-3 mr-2" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  View All Services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesShowcase.displayName = 'ServicesShowcase';

// Micro SaaS Products Component
const MicroSaaSProducts = React.memo(() => {
  const products = [
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights and lead scoring',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      price: '$299/month',
      features: ['Lead scoring', 'Sales forecasting', 'CRM integration', 'Analytics dashboard']
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability and automated responses',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      price: '$199/month',
      features: ['24/7 support', 'AI chatbots', 'Ticket management', 'Knowledge base']
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform for marketing teams',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      price: '$149/month',
      features: ['Content creation', 'SEO optimization', 'Multi-language', 'Brand voice']
    },
    {
      name: 'AI Lead Scoring',
      description: 'Machine learning-based lead prioritization and scoring for sales teams',
      icon: Target,
      href: '/services/ai-lead-scoring',
      price: '$99/month',
      features: ['Lead scoring', 'Behavior tracking', 'Integration APIs', 'Real-time alerts']
    }
  ];

  return (
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
            Micro <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SaaS</span> Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready-to-deploy AI solutions that scale with your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={product.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

MicroSaaSProducts.displayName = 'MicroSaaSProducts';

// Testimonials Component
const TestimonialsSection = React.memo(() => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our AI strategy. Their Enterprise Orchestrator increased our efficiency by 300% and reduced operational costs significantly.',
      rating: 5,
      avatar: '👩‍💼',
      company: 'TechCorp'
    },
    {
      name: 'Michael Chen',
      role: 'Director of IT, HealthFirst',
      content: 'The AI Healthcare Analytics platform has revolutionized our diagnostic capabilities and patient care. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: '👨‍⚕️',
      company: 'HealthFirst'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, FinTech Solutions',
      content: 'Outstanding cybersecurity solutions. Their AI-powered threat detection is cutting-edge and reliable. We feel much more secure now.',
      rating: 5,
      avatar: '👩‍💻',
      company: 'FinTech Solutions'
    }
  ];

  return (
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
            What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading enterprises worldwide for innovative AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

// CTA Section Component
const CTASection = React.memo(() => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises already leveraging our AI solutions to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

// Main Home component
export default function Home() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain, description: 'Cutting-edge AI services' },
    { label: 'Micro SaaS', value: '25+', icon: Rocket, description: 'Innovative products' },
    { label: 'Enterprise Clients', value: '100+', icon: Building, description: 'Trusted partnerships' },
    { label: 'Success Rate', value: '99%', icon: CheckCircle, description: 'Proven results' }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection onGetStarted={() => {}} />
          </div>
        </section>

        {/* Services Showcase */}
        <ServicesShowcase />

        {/* Micro SaaS Products */}
        <MicroSaaSProducts />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
