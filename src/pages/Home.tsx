import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Heart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';
import { motion } from 'framer-motion';

import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { Revolutionary2029ServicesShowcase } from "@/components/Revolutionary2029ServicesShowcase";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"]
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"]
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "AI Autonomous Code Review",
      description: "Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues using advanced AI algorithms.",
      icon: Code,
      path: "/services/ai-autonomous-systems",
      features: ["Automated Analysis", "Security Detection", "Performance Optimization", "Team Collaboration"],
      price: "$399/month",
      category: "AI & Development"
    },
    {
      title: "Quantum Encryption as a Service",
      description: "Next-generation encryption platform leveraging quantum-resistant algorithms to protect sensitive data against future quantum computing threats.",
      icon: Lock,
      path: "/services/cybersecurity",
      features: ["Quantum-Resistant", "Real-time Protection", "Compliance Ready", "API Integration"],
      price: "$2,500/month",
      category: "Cybersecurity"
    },
    {
      title: "Autonomous DevOps Orchestration",
      description: "Self-managing DevOps platform that automatically optimizes deployment pipelines, infrastructure scaling, and performance monitoring.",
      icon: Cloud,
      path: "/services/it-infrastructure",
      features: ["Self-healing Infrastructure", "Automated Scaling", "Cost Optimization", "24/7 Monitoring"],
      price: "$899/month",
      category: "DevOps & Automation"
    },
    {
      title: "AI Customer Success Platform",
      description: "Intelligent platform that predicts customer churn, automates engagement, and optimizes customer lifetime value through machine learning.",
      icon: Users,
      path: "/services/micro-saas-solutions",
      features: ["Churn Prediction", "Automated Engagement", "Success Tracking", "Analytics Dashboard"],
      price: "$599/month",
      category: "AI & Business"
    },
    {
      title: "Blockchain Supply Chain Tracking",
      description: "End-to-end supply chain tracking solution using blockchain technology to ensure transparency, authenticity, and compliance.",
      icon: Network,
      path: "/services/industry-solutions",
      features: ["Real-time Tracking", "Smart Contracts", "Compliance Monitoring", "Multi-stakeholder Access"],
      price: "$1,800/month",
      category: "Blockchain & Web3"
    },
    {
      title: "Quantum Machine Learning Platform",
      description: "Advanced platform combining quantum computing principles with machine learning to solve complex optimization problems.",
      icon: Brain,
      path: "/services/quantum-technology",
      features: ["Quantum Algorithms", "Hybrid Models", "Optimization Solvers", "Expert Consultation"],
      price: "$3,500/month",
      category: "Quantum AI"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with military-grade encryption and zero-trust architecture"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with 99.9% uptime guarantee and global CDN"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence and machine learning capabilities"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support in multiple languages with dedicated success managers"
    }
  ];

  const latestTechnologies = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: "🤖",
      link: "/ultimate-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: "⚛️",
      link: "/ultimate-services",
      features: ["Quantum Algorithms", "Quantum Machine Learning", "Cryptography", "Optimization"]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      icon: "🔗",
      link: "/ultimate-services",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions", "Supply Chain"]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected device intelligence",
      icon: "🌐",
      link: "/ultimate-services",
      features: ["Smart Cities", "Industrial IoT", "Edge AI", "Real-time Analytics"]
    }
  ];

  const innovativeCategories = [
    {
      title: "Healthcare AI",
      icon: Heart,
      description: "Revolutionary medical diagnostics and patient care",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Neuromorphic Computing",
      icon: Brain,
      description: "Brain-inspired computing architecture",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Synthetic Biology",
      icon: Atom,
      description: "AI-powered biological engineering",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Advanced Robotics",
      icon: Rocket,
      description: "Intelligent automation and control systems",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <Link 
      to={link}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 
        hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/20
        transition-all duration-300 transform hover:-translate-y-2
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}>
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-blue-200 mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-xs text-blue-300 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
          Learn more →
        </div>
      </div>
    </Link>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Stats component for social proof
const StatsSection = memo(() => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });
  
  useEffect(() => {
    const animateCounts = () => {
      const targets = { projects: 500, clients: 150, years: 8 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ultimate-services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
              <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
              <div className="text-sm text-zion-slate-light">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="futuristic-card p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-lg">
                    <service.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-zion-cyan">{service.price}</span>
                  <Link
                    to={service.path}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Innovative Categories Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our revolutionary technology categories that are shaping the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovativeCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <category.icon className="w-12 h-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                <p className="text-gray-400 text-center text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/ultimate-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ultimate-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;