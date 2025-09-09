
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
  Link as LinkIcon,
  Zap
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
      title: "AI Workflow Automation",
      description: "Intelligent process automation with machine learning algorithms",
      icon: Brain,
      link: "/services/ai-workflow-automation",
      color: "from-cyan-500 to-blue-600",
      features: ["Process mapping", "Smart automation", "Cross-platform integration", "Intelligent chatbots"]
    },
    {
      title: "Quantum Data Analytics",
      description: "Revolutionary data processing with quantum computing power",
      icon: Atom,
      link: "/services/quantum-data-analytics",
      color: "from-purple-500 to-cyan-600",
      features: ["Quantum ML", "Database optimization", "AI models", "Data encryption"]
    },
    {
      title: "Blockchain Infrastructure",
      description: "Enterprise-grade blockchain development and deployment",
      icon: LinkIcon,
      link: "/services/blockchain-infrastructure",
      color: "from-green-500 to-emerald-600",
      features: ["Smart contracts", "DeFi infrastructure", "Database solutions", "Layer 2 scaling"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security and compliance automation",
      icon: Shield,
      link: "/services",
      color: "from-red-500 to-orange-600",
      features: ["Zero trust security", "SOC 2 compliance", "Threat detection", "Risk assessment"]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: Brain,
      link: "/services",
      stats: "40% efficiency increase"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computational power for complex problem solving",
      icon: Atom,
      link: "/services",
      stats: "1000x faster processing"
    },
    {
      title: "Blockchain Technology",
      description: "Decentralized solutions for modern business needs",
      icon: LinkIcon,
      link: "/services",
      stats: "100% transparency"
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
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {service.stats}
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

      {/* Core Services Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={service.link}
                      className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
