
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { FuturisticHero } from "@/components/home/FuturisticHero";
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import { NextSeo } from "@/components/NextSeo";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import React from 'react';
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ContactInfo } from "@/components/ContactInfo";
=======
import { FloatingCTA } from "@/components/FloatingCTA";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
=======
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesOverview } from "@/components/ServicesOverview";
=======
import { FuturisticBackground } from "@/components/FuturisticBackground";
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Users, 
  HardDrive,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  DollarSign,
  Clock,
  TrendingUp
} from "lucide-react";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// New service highlights
const SERVICE_HIGHLIGHTS = [
  {
    icon: <Brain className="w-12 h-12 text-zion-cyan" />,
    title: "AI & Machine Learning",
    description: "Custom AI development, ML model training, and strategic consulting",
    price: "$8,000 - $25,000",
    features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"],
    link: "/category/ai-services",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Cloud className="w-12 h-12 text-zion-cyan" />,
    title: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps automation, and infrastructure management",
    price: "$5,000 - $30,000",
    features: ["Cloud Migration", "DevOps", "Kubernetes", "Monitoring"],
    link: "/category/cloud-services",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Shield className="w-12 h-12 text-zion-cyan" />,
    title: "Cybersecurity",
    description: "Security audits, compliance frameworks, and threat protection",
    price: "$8,000 - $35,000",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"],
    link: "/category/security-services",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Database className="w-12 h-12 text-zion-cyan" />,
    title: "Data & Analytics",
    description: "Big data engineering, BI dashboards, and data governance",
    price: "$6,000 - $28,000",
    features: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"],
    link: "/category/data-services",
    color: "from-green-500 to-emerald-600"
  }
];

// Stats section data
const STATS_DATA = [
  { number: "500+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
  { number: "1,200+", label: "Tech Experts", icon: <Users className="w-6 h-6" /> },
  { number: "50+", label: "Service Categories", icon: <Code className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
];
=======
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ServiceRecommendations } from "@/components/ServiceRecommendations";
=======
import { AdvancedServicesShowcase } from "@/components/home/AdvancedServicesShowcase";
=======
import { AnimatedBackground, FloatingElements } from "@/components/ui/AnimatedBackground";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { MicroSaasShowcase } from "@/components/home/MicroSaasShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import FeatureFlag from "@/components/FeatureFlag";
import ElasticSearchSearch from "@/components/search/ElasticSearchSearch";
=======
import { PerformanceDashboard } from "@/components/PerformanceDashboard";

export default function Home() {
    <div className="min-h-screen bg-background relative">
      <FuturisticBackground intensity="low" />
      
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
=======
        title="Zion Tech Group - Premier AI & Tech Marketplace" 
        description="Discover cutting-edge AI services, tech talent, and innovative micro SAAS solutions. Transform your business with our comprehensive ecosystem of technology services."
        keywords="AI services, machine learning, cloud migration, cybersecurity, data analytics, tech talent, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - Premier Tech & AI Marketplace" 
        description="Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. Connect with top talent and transform your business with next-generation technology."
        keywords="AI services, IT solutions, SaaS platforms, technology marketplace, enterprise solutions, AI consulting, cloud services, cybersecurity, digital transformation"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Future of Tech Solutions" 
        description="Discover cutting-edge AI services, innovative IT solutions, and transformative business tools. Zion Tech Group - Where innovation meets excellence."
        keywords="AI services, IT solutions, business automation, cloud services, cybersecurity, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
=======
export default function Home() {
  const { t } = useTranslation();
=======
  // Structured data for the home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "The Tech & AI Marketplace - Discover top AI and tech talent, services, and equipment in one place.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI talent matching, IT services, and tech marketplace solutions"
    }
  };

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our AI infrastructure. Their expertise in quantum computing is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "The edge AI orchestration platform they built for us increased our processing speed by 300%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, InnovateAI",
      content: "Outstanding AI strategy consulting that helped us navigate the complex AI landscape successfully.",
      rating: 5
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <FuturisticHero />

      <EnhancedServicesShowcase />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasShowcase />
=======
      <MicroSaasShowcase />
      
      <FeatureHighlights />
      
      <ServicesOverview />
=======
      <ServicesShowcase />
=======
      <TestimonialCarousel />
=======
      <ComprehensiveServicesShowcase />
=======
      <ServicesOverview />
=======
      <ServicesOverview />
      
      <ServiceRecommendations maxRecommendations={6} />
=======
      <AdvancedServicesShowcase />
=======
      <MicroSaasShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
      
      <CategoriesSection />
      <ServicesShowcase />
=======
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent neon-pulse">
                  Tech Services
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover the world's premier marketplace for cutting-edge AI services, 
                technology solutions, and innovative micro SAAS offerings. 
                Transform your business with our expert ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/services">
                  <Button size="lg" className="cyber-button px-8 py-4 text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                {STATS_DATA.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.number}</div>
                    <div className="text-sm text-zion-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="w-96 h-96 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl absolute -top-20 -left-20"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl absolute -bottom-20 -right-20"></div>
                
                {/* Floating service cards */}
                <div className="relative space-y-4">
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">AI Development</h4>
                        <p className="text-zion-slate-light text-sm">Custom ML models</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-4 float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <Cloud className="w-8 h-8 text-zion-purple" />
                      <div>
                        <h4 className="text-white font-semibold">Cloud Migration</h4>
                        <p className="text-zion-slate-light text-sm">Seamless transition</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">Cybersecurity</h4>
                        <p className="text-zion-slate-light text-sm">Threat protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Premier Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of cutting-edge technology services, 
              each designed to address specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI Business Manager",
                description: "Intelligent business management with AI-powered decision making and automation.",
                path: "/ai-autonomous-business-manager",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "☁️",
                title: "AI Business Platform",
                description: "Cloud-native AI platform for scalable business intelligence and operations.",
                path: "/ai-autonomous-business-platform",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "💻",
                title: "AI Code Review",
                description: "Automated code analysis with security scanning and performance optimization.",
                path: "/ai-autonomous-code-review",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🤖",
                title: "AI Autonomous Systems",
                description: "Advanced AI systems that operate independently to optimize business processes.",
                path: "/services/ai-autonomous-systems",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "🔒",
                title: "Cybersecurity",
                description: "Quantum-safe security solutions with advanced threat detection and prevention.",
                path: "/services/cybersecurity",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Quantum Technology",
                description: "Next-generation quantum computing solutions for complex problem solving.",
                path: "/services/quantum-technology",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <AdvancedServicesShowcase />

      {/* Original Services Showcase */}
      <ServicesShowcase />
      
      {/* Benefits Section */}
=======
      <EnhancedCategoriesSection />
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings Section */}
      <FeaturedListingsSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
=======
=======
      <FeatureFlag name="elasticsearch-search">
        <div className="max-w-xl mx-auto py-8">
          <ElasticSearchSearch />
        </div>
      </FeatureFlag>
=======

      {/* Performance Dashboard - Only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <PerformanceDashboard />
      )}
=======
        description="Discover top AI and tech talent, services, and equipment in one place. Global IT support, AI-powered matching, and enterprise solutions for the future of work."
        keywords="AI marketplace, tech talent, IT services, global IT support, AI matching, tech services, enterprise solutions, talent acquisition, IT consulting, AI development"
        canonical="/"
        ogType="website"
        structuredData={structuredData}
      />

      <main>
        <ITServiceRequestHero />

        <HeroSection />
        
        <QuickAccess />
        
        <FeatureCTAs />
        
        <FeatureHighlights />
        
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturedListingsSection />
        <NewsletterSection />
      </main>
    </div>
=======
    <>
      <Helmet>
        <title>Zion Tech Group - The Future of Tech & AI Marketplace</title>
        <meta name="description" content="Discover our comprehensive collection of 35+ innovative micro SAAS services, from AI-powered productivity tools to revolutionary quantum computing platforms. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI solutions, quantum computing, machine learning, digital transformation, IT consulting, cybersecurity, cloud services, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta property="og:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta name="twitter:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Future of Tech & AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Marketplace
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive collection of 35+ innovative micro SAAS services, 
              from AI-powered productivity tools to revolutionary quantum computing platforms. 
              Transform your business with cutting-edge technology solutions.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                  <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                  <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Services
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by leading organizations worldwide
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Service Categories Overview */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300">
                Explore our comprehensive range of innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{category.count} Services</span>
                    <Link
                      to="/services"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                    >
                      View All →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300">
                Discover our most innovative and cutting-edge solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <div className="text-lg font-bold text-blue-400">{service.price}</div>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300">
                Leading the way in innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300 text-sm">Cutting-edge AI, quantum computing, and emerging technologies</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">Experienced professionals with deep technical expertise</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade solutions with proven track records</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">ROI Focused</h3>
                <p className="text-gray-300 text-sm">Solutions designed to deliver measurable business value</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default Home;