import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Rocket, Atom } from 'lucide-react';
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
import { ServicesShowcase } from "@/components/ServicesShowcase";

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
    },
    {
      title: "Micro SAAS Services",
      description: "Scalable software solutions tailored to your needs",
      icon: Rocket,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure for the future",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"]
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full">
                  <heroSlides[currentSlide].icon className="h-12 w-12 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Stats Section
const StatsSection = React.memo(() => {
  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: "🎯", // Placeholder for CheckCircle icon
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: "🧠", // Placeholder for Brain icon
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: "⚡", // Placeholder for Clock icon
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: "🛡️", // Placeholder for Shield icon
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Services Preview Section
const ServicesPreview = React.memo(() => {
  const serviceCategories = [
    {
      name: "AI Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: "🤖",
      href: "/ai-services",
      count: 20,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Edge & IoT",
      description: "Ultra-low latency edge computing and IoT platform solutions",
      icon: "⚡",
      href: "/services/edge-computing-platform",
      count: 8,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: "☁️",
      href: "/services/cloud-devops",
      count: 12,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services/ai-compliance-copilot",
      count: 10,
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Data Governance",
      description: "AI-powered data protection and compliance management",
      icon: "🛡️",
      href: "/services/ai-data-governance",
      count: 6,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Customer Success",
      description: "AI-driven customer engagement and retention platforms",
      icon: "💝",
      href: "/services/customer-success",
      count: 15,
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">{service.count} services</span>
                  <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesPreview.displayName = 'ServicesPreview';

// Testimonials Section
const TestimonialsSection = React.memo(() => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with AI-powered solutions that increased our efficiency by 300%.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible.",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "The micro SAAS platform they built for us scaled seamlessly and now serves millions of users worldwide.",
      avatar: "👩‍💻",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-cyan-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses that trusted us with their digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-600/30"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

// CTA Section
const CTASection = React.memo(() => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our experts to discuss how our innovative services can drive your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-cyan-400" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-cyan-400" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

// Main Home component
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing expertise, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <FuturisticBackground />
      
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;
