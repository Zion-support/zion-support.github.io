
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Rocket, 
  TrendingUp, 
  Star, 
  Brain, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Award,
  Target,
  Clock,
  Heart,
  Crown,
  Sparkles,
  DollarSign,
  ShoppingCart,
  Settings
} from 'lucide-react';

import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load components for better performance
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"));
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"));
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));
const PricingSection = React.lazy(() => import("@/components/PricingSection"));
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"));
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"));
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"));
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"));
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"));
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"));
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"));
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"));
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"));
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"));
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        <p className="text-slate-400 mt-4">{message}</p>
      </div>
    </div>
  </div>
);

// Enhanced service categories data with better descriptions and icons
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: Brain,
    href: "/ai-services",
    count: 25,
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision", "Autonomous Systems"]
  },
  {
    name: "Edge & IoT",
    description: "Ultra-low latency edge computing and IoT platform solutions",
    icon: Zap,
    href: "/services/edge-computing-platform",
    count: 12,
    color: "from-blue-500 to-purple-600",
    features: ["Real-time Processing", "Low Latency", "Scalable Architecture", "Device Management", "Predictive Maintenance", "Smart Cities"]
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: Cloud,
    href: "/services/cloud-devops",
    count: 18,
    color: "from-green-500 to-emerald-600",
    features: ["CI/CD Automation", "Infrastructure as Code", "Container Orchestration", "Multi-cloud Management", "FinOps Optimization", "Security Automation"]
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: Shield,
    href: "/services/ai-compliance-copilot",
    count: 15,
    color: "from-red-500 to-pink-600",
    features: ["AI Threat Detection", "Zero Trust Architecture", "Compliance Automation", "Incident Response", "Vulnerability Management", "Quantum Security"]
  },
  {
    name: "Micro SaaS",
    description: "Scalable software-as-a-service solutions for specific business needs",
    icon: ShoppingCart,
    href: "/micro-saas",
    count: 30,
    color: "from-orange-500 to-red-600",
    features: ["Business Automation", "Customer Success", "Sales Intelligence", "Financial Operations", "Workflow Management", "Compliance Tools"]
  },
  {
    name: "Emerging Tech",
    description: "Next-generation technologies for future-ready businesses",
    icon: Star,
    href: "/services/quantum-computing-solutions",
    count: 20,
    color: "from-yellow-500 to-orange-600",
    features: ["Quantum Computing", "Blockchain Solutions", "Space Technology", "Healthcare AI", "Green IT", "Sustainable Tech"]
  }
];

// Enhanced benefits section with better content
const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description: "Our AI-powered solutions help businesses scale 3x faster with intelligent automation and predictive insights.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Reduce operational costs by up to 40% through intelligent automation and cloud optimization strategies.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Future-proof security with quantum-resistant encryption and AI-powered threat detection systems.",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Zap,
    title: "Real-time Performance",
    description: "Ultra-low latency edge computing and IoT solutions for instant data processing and decision-making.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "AI-driven customer engagement that increases retention by 60% and lifetime value by 3x.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Rocket,
    title: "Innovation Leadership",
    description: "Stay ahead of the competition with cutting-edge quantum computing and emerging technology solutions.",
    color: "from-yellow-500 to-orange-600"
  }
];

// Enhanced how it works section
const howItWorks = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs, current technology stack, and growth objectives to identify the best solutions.",
    icon: Target,
    color: "from-blue-500 to-cyan-600"
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our experts design custom solutions combining AI, cloud, and emerging technologies for maximum impact.",
    icon: Settings,
    color: "from-purple-500 to-pink-600"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Seamless deployment with minimal disruption, including training and change management support.",
    icon: Rocket,
    color: "from-green-500 to-emerald-600"
  },
  {
    step: "04",
    title: "Optimization & Growth",
    description: "Continuous monitoring, optimization, and scaling to ensure your solutions grow with your business.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600"
  }
];

// Enhanced testimonials with better content
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Solutions",
    company: "TechFlow Solutions",
    content: "Zion Tech Group's AI solutions transformed our operations. We've seen a 300% increase in efficiency and 40% cost reduction in just 6 months.",
    rating: 5,
    avatar: "/avatars/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering, DataSphere",
    company: "DataSphere",
    content: "Their quantum-inspired optimization engine solved complex supply chain problems we've been struggling with for years. Game-changing technology.",
    rating: 5,
    avatar: "/avatars/michael-chen.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, GreenTech Innovations",
    company: "GreenTech Innovations",
    content: "The AI-powered customer success platform increased our retention rate from 65% to 92%. Our customers love the proactive engagement.",
    rating: 5,
    avatar: "/avatars/emily-rodriguez.jpg"
  },
  {
    name: "David Thompson",
    role: "Director of IT, Global Manufacturing",
    company: "Global Manufacturing",
    content: "Their edge computing platform reduced our latency from 200ms to 15ms. The performance improvement is incredible.",
    rating: 5,
    avatar: "/avatars/david-thompson.jpg"
  }
];

// Enhanced statistics with better numbers
const statistics = [
  { number: "500+", label: "Happy Clients", icon: Users, color: "from-blue-500 to-cyan-600" },
  { number: "50+", label: "AI Services", icon: Brain, color: "from-purple-500 to-pink-600" },
  { number: "99.9%", label: "Uptime SLA", icon: Shield, color: "from-green-500 to-emerald-600" },
  { number: "3x", label: "Faster Growth", icon: TrendingUp, color: "from-orange-500 to-red-600" },
  { number: "40%", label: "Cost Reduction", icon: DollarSign, color: "from-indigo-500 to-purple-600" },
  { number: "24/7", label: "Support", icon: Clock, color: "from-yellow-500 to-orange-600" }
];

// Enhanced features data
const keyFeatures = [
  {
    title: "AI-Powered Innovation",
    description: "Leverage cutting-edge artificial intelligence to transform your business operations",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    benefits: ["Increased Efficiency", "Better Decision Making", "Cost Reduction"]
  },
  {
    title: "Global Expertise",
    description: "Access world-class technology expertise from our international team",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    benefits: ["24/7 Support", "Local Knowledge", "Cultural Understanding"]
  },
  {
    title: "Future-Ready Solutions",
    description: "Stay ahead of the curve with our forward-thinking technology solutions",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    benefits: ["Scalable Architecture", "Future-Proof Design", "Continuous Innovation"]
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & IT Services"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Drive growth with our expert team."
        keywords="AI solutions, IT services, business transformation, cloud computing, cybersecurity, digital transformation, Zion Tech Group"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Company Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`mx-auto mb-3 p-3 rounded-full bg-slate-700 w-16 h-16 flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 hover:from-slate-700 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-slate-300 mb-6">{category.description}</p>
                  
                  {category.features && (
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{category.count} services</span>
                    <Link 
                      to={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results for your business
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r ${feature.color} w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results for your business
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r ${benefit.color} w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 mb-6">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven process ensures you get the most out of our technology solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r ${step.color} w-20 h-20 flex items-center justify-center`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-6">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear directly from our satisfied clients about their experience with Zion Tech Group
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-300 mb-4">"{testimonial.content}"</p>
                <p className="text-slate-400 text-sm font-semibold">{testimonial.name}</p>
                <p className="text-slate-300 text-sm">{testimonial.role}, {testimonial.company}</p>
                <div className="flex items-center mt-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lazy Loaded Components with Better Error Handling */}
      <Suspense fallback={<LoadingFallback message="Loading Categories..." />}>
        <CategoriesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Benefits..." />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading How It Works..." />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Tech Solutions..." />}>
        <TechSolutionsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Case Studies..." />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Team Expertise..." />}>
        <TeamExpertiseSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Global Presence..." />}>
        <GlobalPresenceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Innovation Research..." />}>
        <InnovationResearchSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Client Success Stories..." />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Technology Stack..." />}>
        <TechnologyStackSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Security Compliance..." />}>
        <SecurityComplianceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading AI Services Showcase..." />}>
        <AIServicesShowcase />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Interactive Testimonials..." />}>
        <InteractiveTestimonials />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Services Showcase..." />}>
        <ServicesShowcase />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading Floating CTA..." />}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
}
