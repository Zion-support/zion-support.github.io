
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe
} from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
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
import { ServicesShowcase } from "@/components/ServicesShowcase.tsx";

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Project completion success"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating",
      description: "Client satisfaction score"
    }
  ];

  const innovativeServices = [
    {
      icon: Brain,
      title: "AI Customer Success Platform",
      description: "Intelligent platform that predicts churn, automates onboarding, and personalizes customer experiences.",
      features: ["Predictive churn analysis", "Automated workflows", "Real-time health scoring"],
      path: "/services/ai-customer-success-platform",
      price: "$1,999 - $5,999/month",
      category: "AI & Analytics",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["40% churn reduction", "60% LTV increase", "80% automation"]
    },
    {
      icon: Shield,
      title: "AI Threat Intelligence Platform",
      description: "Advanced cybersecurity platform with AI-powered threat detection and automated incident response.",
      features: ["Real-time threat detection", "Automated response", "Compliance monitoring"],
      path: "/services/ai-threat-intelligence-platform",
      price: "$3,999 - $12,999/month",
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["70% faster response", "85% accuracy", "60% automation"]
    },
    {
      icon: Cloud,
      title: "Cloud FinOps Optimizer",
      description: "Intelligent cloud cost optimization platform that reduces spending while improving performance.",
      features: ["Cost optimization", "Performance monitoring", "Automated scaling"],
      path: "/services/cloud-finops-optimizer",
      price: "$2,499 - $7,999/month",
      category: "Cloud & DevOps",
      rating: 4.7,
      reviewCount: 156,
      highlights: ["30% cost reduction", "Improved performance", "Automated scaling"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Analytics",
      description: "Intelligent business solutions powered by artificial intelligence",
      icon: "🤖",
      href: "/ai-services",
      count: 15,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services",
      count: 8,
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automation",
      icon: "☁️",
      href: "/services",
      count: 12,
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business process modernization",
      icon: "🚀",
      href: "/services",
      count: 10,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Micro SaaS",
      description: "Productized software solutions for specific business needs",
      icon: "💻",
      href: "/micro-saas",
      count: 25,
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "IT Infrastructure",
      description: "Robust IT infrastructure and network management",
      icon: "🏗️",
      href: "/it-services",
      count: 6,
      color: "from-orange-600 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovative AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered platforms that transform business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Quick Access Section */}
      <QuickAccess />

      {/* Enhanced Feature Highlights */}
      <FeatureHighlights />

      {/* Enhanced Feature CTAs */}
      <FeatureCTAs />

      {/* Enhanced Categories Section */}
      <CategoriesSection />

      {/* Enhanced Benefits Section */}
      <BenefitsSection />

      {/* Enhanced How It Works Section */}
      <HowItWorksSection />

      {/* Enhanced Featured Listings Section */}
      <FeaturedListingsSection />

      {/* Comprehensive Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
