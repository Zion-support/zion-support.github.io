
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Heart
} from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { EnhancedSEO } from "@/components/EnhancedSEO.tsx";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
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

// Data definitions
const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Clients",
    description: "Trusted worldwide"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    description: "Project completion"
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support",
    description: "Always available"
  },
  {
    icon: Rocket,
    value: "500+",
    label: "Projects",
    description: "Successfully delivered"
  }
];

const aiServices = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with advanced machine learning algorithms.",
    features: [
      "Predictive analytics",
      "Real-time data processing",
      "Custom ML models",
      "Automated reporting"
    ],
    path: "/services/ai-analytics"
  },
  {
    icon: Code,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs and industry requirements.",
    features: [
      "Custom AI models",
      "API integration",
      "Scalable architecture",
      "Continuous learning"
    ],
    path: "/services/ai-development"
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Unlock the power of your data with intelligent processing and analysis.",
    features: [
      "Data mining",
      "Pattern recognition",
      "Business intelligence",
      "Data visualization"
    ],
    path: "/services/data-intelligence"
  }
];

const featuredServices = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for modern businesses",
    price: "$2,999",
    category: "Enterprise",
    rating: 4.9,
    reviewCount: 127,
    highlights: ["99.9% Uptime", "24/7 Monitoring", "Auto-scaling", "Security"],
    path: "/services/cloud"
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your digital assets",
    price: "$1,999",
    category: "Professional",
    rating: 4.8,
    reviewCount: 89,
    highlights: ["Threat Detection", "Compliance", "Incident Response", "Training"],
    path: "/services/cybersecurity"
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Streamline your development and deployment processes",
    price: "$3,499",
    category: "Enterprise",
    rating: 4.9,
    reviewCount: 156,
    highlights: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring", "Automation"],
    path: "/services/devops"
  }
];

const whyChooseUs = [
  {
    icon: Brain,
    title: "Expertise & Innovation",
    description: "Our team of experts stays at the forefront of technological advancements, ensuring cutting-edge solutions for your business."
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "We prioritize the security and reliability of your data and systems, implementing robust measures to protect your assets."
  },
  {
    icon: Rocket,
    title: "Scalability & Performance",
    description: "Our solutions are designed to be scalable and performant, ensuring your business can grow and adapt to new challenges."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With a presence in multiple regions, we provide 24/7 support and ensure seamless connectivity for your global operations."
  }
];

const trustSignals = [
  {
    icon: Users,
    label: "Global Clients",
    description: "Serving businesses across continents, we have a proven track record of delivering excellence."
  },
  {
    icon: Shield,
    label: "Security Certified",
    description: "Our solutions are rigorously tested and certified for security compliance."
  },
  {
    icon: TrendingUp,
    label: "Industry Awards",
    description: "Recognized for innovation and excellence in multiple industry awards."
  },
  {
    icon: Rocket,
    label: "Fast Delivery",
    description: "We deliver projects on time, every time, ensuring minimal disruption to your operations."
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence services",
      icon: "🤖",
      link: "/enhanced-services"
    },
    {
      title: "Micro SAAS",
      description: "Innovative micro SAAS solutions",
      icon: "🚀",
      link: "/micro-saas-showcase"
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

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Leading Technology Solutions & Innovation"
        description="Transform your business with Zion Tech Group's cutting-edge technology solutions. AI, Cloud, Cybersecurity, and Digital Transformation services."
        keywords={[
          "technology solutions",
          "AI",
          "cloud computing", 
          "cybersecurity",
          "digital transformation",
          "IT services",
          "quantum computing",
          "machine learning",
          "blockchain solutions"
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
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
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions that drive business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
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
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>

      <FeatureHighlights />
      <CategoriesSection />

      {/* Enhanced Innovative Services Showcase */}
      <EnhancedInnovativeServicesShowcase />

      {/* Revolutionary 2029 Services Showcase */}
      <Revolutionary2029ServicesShowcase />

      {/* Enhanced Pricing Comparison */}
      <EnhancedPricingComparison />

      {/* Enhanced Benefits Section */}
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
}
