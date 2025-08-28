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
  TrendingUp 
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
  impact: 'low' | 'medium' | 'high';
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses across 25+ countries",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable infrastructure and support",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      value: "24/7",
      label: "Support",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    }
  ];

  const aiServices: AIService[] = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with advanced machine learning algorithms",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Natural Language Processing", "Automated Reporting"],
      href: "/services/ai-business-intelligence",
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "AI Healthcare Analytics",
      description: "Revolutionize patient care with AI-powered diagnostics and treatment optimization",
      icon: Heart,
      features: ["Medical Image Analysis", "Patient Outcome Prediction", "Drug Discovery", "Clinical Decision Support"],
      href: "/services/ai-healthcare-analytics",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "AI Financial Trading",
      description: "Maximize returns with intelligent trading algorithms and risk management",
      icon: TrendingUp,
      features: ["Algorithmic Trading", "Risk Assessment", "Market Analysis", "Portfolio Optimization"],
      href: "/services/ai-financial-trading",
      color: "from-green-500 to-blue-500"
    }
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      href: "/services/ai-business-intelligence",
      count: 15,
      color: "from-purple-500 to-pink-500",
      services: ["Predictive Analytics", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 12,
      color: "from-blue-500 to-cyan-500",
      services: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Infrastructure as Code"]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 8,
      color: "from-green-500 to-emerald-500",
      services: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business transformation services",
      icon: Rocket,
      href: "/services/digital-transformation",
      count: 20,
      color: "from-orange-500 to-red-500",
      services: ["Process Automation", "Legacy Modernization", "Change Management", "Training"]
    }
  ];

  const emergingTechnologies: EmergingTech[] = [
    {
      name: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      status: 'research',
      impact: 'high'
    },
    {
      name: "Edge AI",
      description: "AI processing at the network edge for real-time applications",
      icon: Cpu,
      status: 'development',
      impact: 'medium'
    },
    {
      name: "Blockchain Integration",
      description: "Secure, transparent business processes and transactions",
      icon: Lock,
      status: 'deployment',
      impact: 'medium'
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & IT Services"
        description="Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert AI Business Intelligence, Cloud DevOps, and Digital Transformation services."
        keywords="AI solutions, business intelligence, IT services, cloud computing, digital transformation, machine learning, data analytics, cybersecurity, DevOps, Zion Tech Group"
        type="website"
        canonicalUrl="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>

        {/* Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* Main Content */}
        <main id="main-content" role="main" tabIndex={-1}>
          {/* Stats Section */}
          <section 
            id="stats" 
            className="py-20 bg-zion-slate-dark/50"
            aria-labelledby="stats-heading"
          >
            <div className="container-responsive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by <span className="text-zion-cyan">500+</span> Global Companies
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Our proven track record speaks for itself. We've helped businesses across the globe 
                  achieve remarkable results through innovative technology solutions.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</div>
                    <p className="text-zion-slate-light">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Showcase */}
          <section 
            id="ai-services" 
            className="py-20"
            aria-labelledby="ai-services-heading"
          >
            <div className="container-responsive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 id="ai-services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI-Powered <span className="text-zion-cyan">Solutions</span>
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Harness the power of artificial intelligence to drive innovation, 
                  optimize operations, and gain competitive advantages.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card-futuristic group hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-zion-slate-light mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.href}
                      className="btn-futuristic inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section 
            id="service-categories" 
            className="py-20 bg-zion-slate-dark/50"
            aria-labelledby="service-categories-heading"
          >
            <div className="container-responsive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 id="service-categories-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Comprehensive <span className="text-zion-cyan">Service Portfolio</span>
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  From AI and machine learning to cloud infrastructure and cybersecurity, 
                  we provide end-to-end technology solutions for modern businesses.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -20 : 20) }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-futuristic group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-zion-slate-light mb-4">{category.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-zion-cyan font-semibold">{category.count} Services</span>
                          <Link 
                            to={category.href}
                            className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                          >
                            View All →
                          </Link>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-sm rounded-full border border-zion-cyan/30"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Emerging Technologies */}
          <section 
            id="emerging-tech" 
            className="py-20"
            aria-labelledby="emerging-tech-heading"
          >
            <div className="container-responsive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 id="emerging-tech-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Future-Forward <span className="text-zion-cyan">Technologies</span>
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Stay ahead of the curve with our research and development in emerging technologies 
                  that will shape the future of business and technology.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {emergingTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card-futuristic text-center group"
                  >
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                    <p className="text-zion-slate-light mb-6">{tech.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tech.status === 'research' ? 'bg-yellow-500/20 text-yellow-400' :
                        tech.status === 'development' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {tech.status.charAt(0).toUpperCase() + tech.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tech.impact === 'low' ? 'bg-gray-500/20 text-gray-400' :
                        tech.impact === 'medium' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tech.impact.charAt(0).toUpperCase() + tech.impact.slice(1)} Impact
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Lazy Loaded Components */}
          <Suspense fallback={<LoadingSpinner />}>
            <CategoriesSection />
            <BenefitsSection />
            <HowItWorksSection />
            <TechSolutionsSection />
            <CaseStudiesSection />
            <TeamExpertiseSection />
            <GlobalPresenceSection />
            <InnovationResearchSection />
            <ClientSuccessStoriesSection />
            <TechnologyStackSection />
            <SecurityComplianceSection />
            <AIServicesShowcase />
            <InteractiveTestimonials />
            <ServicesShowcase />
            <PricingSection />
            <NewsletterSection />
            <FeaturedListingsSection />
            <QuickAccess />
            <FeatureCTAs />
            <FeatureHighlights />
            <ITServiceRequestHero />
            <FloatingCTA />
          </Suspense>
        </main>
      </div>
    </>
  );
}
