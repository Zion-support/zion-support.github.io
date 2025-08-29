import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Play
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load heavy components
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
const ContactCTA = React.lazy(() => import("@/components/ContactCTA"));

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface AIService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
}

interface EmergingTech {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'research' | 'development' | 'deployment';
  impact: 'high' | 'medium' | 'low';
}

const stats: StatItem[] = [
  {
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across industries",
    icon: CheckCircle,
    color: "zion-cyan"
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations",
    icon: Star,
    color: "zion-purple"
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Deep expertise in technology",
    icon: Award,
    color: "zion-blue"
  },
  {
    value: "25+",
    label: "Countries Served",
    description: "Global technology solutions",
    icon: Globe,
    color: "zion-green"
  }
];

const aiServices: AIService[] = [
  {
    title: "AI Business Intelligence",
    description: "Transform data into actionable insights with advanced AI algorithms",
    icon: Brain,
    features: ["Predictive Analytics", "Natural Language Processing", "Real-time Insights"],
    href: "/services/ai-business-intelligence",
    color: "zion-cyan"
  },
  {
    title: "AI Healthcare Analytics",
    description: "Revolutionary healthcare solutions powered by artificial intelligence",
    icon: Heart,
    features: ["Diagnostic Accuracy", "Patient Monitoring", "Treatment Optimization"],
    href: "/services/ai-healthcare-analytics",
    color: "zion-purple"
  },
  {
    title: "AI Financial Trading",
    description: "Advanced trading algorithms and market analysis systems",
    icon: TrendingUp,
    features: ["Algorithmic Trading", "Risk Management", "Market Prediction"],
    href: "/services/ai-financial-trading",
    color: "zion-blue"
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    name: "Artificial Intelligence",
    description: "Cutting-edge AI and machine learning solutions",
    icon: Brain,
    href: "/services/ai-business-intelligence",
    count: 8,
    color: "zion-cyan",
    services: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and DevOps automation",
    icon: Cloud,
    href: "/services/cloud-devops",
    count: 12,
    color: "zion-blue",
    services: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Infrastructure as Code"]
  },
  {
    name: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions",
    icon: Shield,
    href: "/services/cybersecurity",
    count: 6,
    color: "zion-purple",
    services: ["Threat Detection", "Zero Trust", "Compliance", "Incident Response"]
  },
  {
    name: "Data Analytics",
    description: "Real-time insights and business intelligence",
    icon: Database,
    href: "/services/data-analytics",
    count: 10,
    color: "zion-green",
    services: ["Big Data", "Real-time Analytics", "Visualization", "BI Tools"]
  }
];

const emergingTechnologies: EmergingTech[] = [
  {
    name: "Quantum Computing",
    description: "Next-generation computational power",
    icon: Atom,
    status: "research",
    impact: "high"
  },
  {
    name: "Edge AI",
    description: "Intelligence at the network edge",
    icon: Network,
    status: "development",
    impact: "high"
  },
  {
    name: "Blockchain Solutions",
    description: "Decentralized and secure systems",
    icon: Lock,
    status: "deployment",
    impact: "medium"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO
        title="Zion Tech Group - Leading Technology Solutions & AI Innovation"
        description="Transform your business with Zion Tech Group's cutting-edge technology solutions. AI, cloud infrastructure, cybersecurity, and digital transformation services."
        keywords="technology solutions, AI, artificial intelligence, cloud computing, cybersecurity, digital transformation, IT services"
        ogImage="/images/og-image.jpg"
        canonicalUrl="https://ziontechgroup.com"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Stats Section */}
        <section className="py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center border border-zion-cyan/30 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan font-medium mb-1">{stat.label}</div>
                  <div className="text-zion-cyan/60 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <ServicesShowcase />

        {/* AI Services Highlight */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium mb-6"
              >
                <Brain className="w-4 h-4" />
                AI-Powered Solutions
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary AI Technology
              </h2>
              
              <p className="text-xl text-zion-cyan/70 max-w-3xl mx-auto leading-relaxed">
                Experience the future with our cutting-edge artificial intelligence solutions 
                that transform businesses and drive unprecedented growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 h-full hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}/20 to-${service.color}/40 rounded-2xl flex items-center justify-center mb-6 border border-${service.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-cyan/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={feature} className="flex items-center gap-2 text-zion-cyan/60 text-sm">
                          <CheckCircle className={`w-4 h-4 text-${service.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.href}
                      className={`group inline-flex items-center gap-2 text-${service.color} hover:text-${service.color}/80 font-medium transition-all duration-300`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Testimonials */}
        <InteractiveTestimonials />

        {/* Contact CTA */}
        <ContactCTA />

        {/* Quick Access Section */}
        <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Quick Access to Our Services
              </h2>
              <p className="text-zion-cyan/70 max-w-2xl mx-auto">
                Get started quickly with our most popular services and solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={category.href}
                    className="block bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group-hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}/20 to-${category.color}/40 rounded-xl flex items-center justify-center mb-4 border border-${category.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-cyan/60 text-sm mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan/50 text-sm">{category.count} services</span>
                      <ArrowRight className="w-4 h-4 text-zion-cyan/50 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
