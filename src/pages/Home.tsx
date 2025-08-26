
import React from 'react';
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
import { FloatingCTA } from "@/components/FloatingCTA";

    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
=======
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Users, Globe, Database, ArrowRight, CheckCircle, Star, Award, Rocket, Target, Brain, Cloud, Lock, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
=======
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

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions with 24/7 monitoring and threat detection",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-purple" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI and machine learning services for business automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-blue" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with DevOps and infrastructure management",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Database className="w-8 h-8 text-zion-green" />,
      title: "Data Analytics",
      description: "Big data processing and business intelligence solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-orange" />,
      title: "Expert Talent",
      description: "Connect with top AI and tech professionals worldwide",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-zion-red" />,
      title: "Growth Solutions",
      description: "Strategic consulting and digital transformation services",
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. 40% cost reduction and improved performance.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cybersecurity expertise helped us achieve SOC 2 compliance in record time. Highly recommended!",
      rating: 5,
      company: "DataFlow"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, CloudScale",
      content: "The team's expertise in cloud migration saved us months of development time and significantly reduced costs.",
      rating: 5,
      company: "CloudScale"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "AI/ML" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "Kubernetes", icon: "⚓", category: "DevOps" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zion-purple/3 to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-zion-purple/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-zion-cyan/8 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

=======
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
  return (
    <div className="min-h-screen bg-background">
      <NextSeo 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      {/* Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" />
      <FloatingElements />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white animate-fade-in">
              🚀 Leading Tech Solutions Provider
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent animate-fade-in-up">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover top AI and tech talent, services, and equipment in one place.
              Your comprehensive marketplace for all things technology and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Master</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we use to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-medium text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI-powered solutions can accelerate your growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
=======
      <HeroSection />
=======
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
      <FloatingCTA />
=======
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
    </div>
  );
}

export default Home;