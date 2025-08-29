
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
  Sparkles
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

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: Brain,
    href: "/ai-services",
    count: 15,
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "Predictive Analytics", "Process Automation"]
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: Cloud,
    href: "/services/cloud-devops",
    count: 12,
    color: "from-blue-500 to-purple-600",
    features: ["CI/CD Automation", "Infrastructure as Code", "Container Orchestration"]
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: Shield,
    href: "/services/ai-compliance-copilot",
    count: 8,
    color: "from-red-500 to-orange-600",
    features: ["Threat Intelligence", "Zero Trust Architecture", "Compliance Monitoring"]
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: Rocket,
    href: "/services/digital-transformation",
    count: 10,
    color: "from-green-500 to-cyan-600",
    features: ["Process Optimization", "Change Management", "Technology Integration"]
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: Zap,
    href: "/services/it-infrastructure",
    count: 6,
    color: "from-purple-500 to-pink-600",
    features: ["Network Management", "Server Administration", "Performance Optimization"]
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: Award,
    href: "/services/it-consulting",
    count: 9,
    color: "from-orange-500 to-green-600",
    features: ["Strategic Planning", "Technology Assessment", "Implementation Support"]
  }
];

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stats data
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Trusted worldwide",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    value: "1000+",
    label: "Projects Delivered",
    description: "Successfully completed",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Star,
    value: "24/7",
    label: "Expert Support",
    description: "Always available",
    color: "from-orange-500 to-red-500"
  }
];

// AI Services data
const aiServices = [
  {
    icon: Brain,
    title: "AI Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    path: "/services/ai-business-intelligence",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Custom ML Models"
    ],
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    description: "Streamline your development pipeline with automated cloud infrastructure.",
    path: "/services/cloud-devops",
    features: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Security Integration"
    ],
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Shield,
    title: "AI Cybersecurity",
    description: "Protect your business with intelligent threat detection and response systems.",
    path: "/services/ai-cybersecurity-suite",
    features: [
      "Threat Intelligence",
      "Automated Response",
      "Zero Trust Architecture",
      "Compliance Monitoring"
    ],
    color: "from-red-600 to-orange-600"
  }
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of proven technology leadership and innovation",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep domain knowledge",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Dedicated to your business growth and success",
    color: "from-red-500 to-pink-500"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    company: "TechCorp Inc.",
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
    rating: 5,
    avatar: "/images/testimonials/sarah.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, DataFlow",
    company: "DataFlow Solutions",
    content: "The cloud migration project was executed flawlessly. Our team productivity improved dramatically.",
    rating: 5,
    avatar: "/images/testimonials/michael.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT, HealthTech",
    company: "HealthTech Systems",
    content: "Their cybersecurity solutions gave us peace of mind. Compliance is now effortless and automated.",
    rating: 5,
    avatar: "/images/testimonials/emily.jpg",
    color: "from-green-500 to-emerald-500"
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
        title="Zion Tech Group - AI-Powered Business Solutions & IT Services"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Trusted by 500+ global clients."
        keywords="AI solutions, cloud computing, cybersecurity, digital transformation, IT services, machine learning, business intelligence"
      />
      
      {/* Hero Section */}
      <EnhancedHeroSection />

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive innovation and accelerate your business growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:scale-105"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">
                      {category.count} Services
                    </span>
                    <Link
                      to={category.href}
                      className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                    >
                      <span className="font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied clients worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 font-orbitron">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-zion-cyan mb-2 font-rajdhani">
                  {stat.label}
                </div>
                
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Services Showcase */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-start space-x-6 p-8 rounded-2xl bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 group hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-rajdhani">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about our services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 group hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white font-rajdhani">
                      {testimonial.name}
                    </h4>
                    <p className="text-zion-cyan text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies that have already revolutionized their operations with our AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-rajdhani font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-rajdhani font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Talk to an Expert</span>
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lazy loaded components */}
      <Suspense fallback={<LoadingFallback message="Loading additional content..." />}>
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <NewsletterSection />
        <FeaturedListingsSection />
        <QuickAccess />
        <FeatureCTAs />
        <FeatureHighlights />
        <ITServiceRequestHero />
        <FloatingCTA />
        <PricingSection />
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
      </Suspense>
    </>
  );
}
