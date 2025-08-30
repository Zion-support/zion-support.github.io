
import React, { Suspense, useState, useEffect } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';


import { SEO  } from '@/components/SEO';
import { HeroSection  } from '@/components/HeroSection';
import { LoadingSpinner  } from '@/components/ui/LoadingSpinner';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({;
      id: i,;
      left: `${Math.random() * 100}%`,;
      top: `${Math.random() * 100}%`,;
      delay: i * 0.1,;
      duration: 5 + i * 0.3;
    })), [];
  );

<<<<<<< HEAD
// Loading fallback component
const LoadingFallback = ({ message }: { message: string })  => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        <p className="text-slate-400 mt-4">{message}</p>
      </div>
    </div>;
  </div>;
);
=======
  return (
    <div className = "fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate = {
  {
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
  

}}
          transition = {
  {
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
  ease: "easeInOut"
          






}}
          style = {
  {
            left: particle.left,
            top: particle.top,;
  ;
  ;


}};
        />;
      ))};
    </div>;
  );
});
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

// Service categories data
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
    href: "/services/ai-customer-success-platform",
    count: 5,
    color: "from-yellow-500 to-orange-600";
  };
];

<<<<<<< HEAD
// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    };
  };
};

const itemVariants = {
  hidden: { opacity: 0,
  y: 20 

},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    };
  };
};

// Stats data
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Trusted worldwide"
  },
  {
    icon: Rocket,
    value: "1000+",
    label: "Projects Delivered",
    description: "Successfully completed"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability"
  },
  {
    icon: Star,
    value: "24/7",
    label: "Expert Support",
    description: "Always available";
  };
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
    ]
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
    ]
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
    ];
  };
];
=======
// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {;
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
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },;
    {;
      title: "Digital Transformation",;
      description: "Modernize your infrastructure for the future",;
      icon: Rocket,;
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"];
    };
  ], []);

  const nextSlide = useCallback(() => {;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {;
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className = "relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Leading the future of technology with cutting-edge AI solutions, quantum computing, 
            and innovative micro SAAS services that transform businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Explore our services"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.8,
  delay: 0.2 






}}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial = {
  { opacity: 0,
  x: 50 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                exit = {
  { opacity: 0,
  x: -50 






}}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6">
                      {React.createElement(heroSlides[currentSlide].icon, { className: "w-8 h-8 text-cyan-400" })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {heroSlides[currentSlide].title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {heroSlides[currentSlide].description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {heroSlides[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-cyan-400">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />;
              ))};
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
});

HeroSection.displayName = 'HeroSection';

// Stats section component
const StatsSection = React.memo(() => {;
  const stats = useMemo(() => [;
    { icon: Users, value: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },;
    { icon: TrendingUp, value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500" },;
    { icon: Award, value: "50+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },;
    { icon: Globe, value: "25+", label: "Countries Served", color: "from-purple-500 to-pink-500" };
  ], []);

  return (
    <section className = "px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>;
              <div className="text-gray-300">{stat.label}</div>;
            </motion.div>;
          ))};
        </div>;
      </div>;
    </section>;
  );
});

StatsSection.displayName = 'StatsSection';

// Featured services section
const FeaturedServices = React.memo(() => {
  const featuredServices = useMemo(() => [
    {
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence with machine learning insights",
      icon: Brain,
      path: "/ai-services",
      features: ["Real-time Data Processing", "Predictive Analytics", "Custom Dashboards", "API Integration"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: Cloud,
      path: "/it-services",
      features: ["Multi-cloud Strategy", "DevOps Automation", "Security & Compliance", "24/7 Monitoring"]
    },
    {;
      title: "Micro SAAS Solutions",;
      description: "Custom software solutions for specific business needs",;
      icon: Zap,;
      path: "/micro-saas",;
      features: ["Custom Development", "Scalable Architecture", "API-First Design", "Cloud Deployment"];
    };
  ], []);

  return (
    <section className = "px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative solutions can transform your business operations and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-3">Key Features:</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link
                to={service.path}
                className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />;
              </Link>;
            </motion.div>;
          ))};
        </div>;
      </div>;
    </section>;
  );
});
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of proven technology leadership and innovation"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with 24/7 support"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance standards"
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "98% customer satisfaction with dedicated success managers";
  };
];

<<<<<<< HEAD
// Trust Signals data
const trustSignals = [
  {
    icon: Award,
    label: "ISO 27001 Certified",
    description: "Information security management"
  },
  {
    icon: Shield,
    label: "SOC 2 Compliant",
    description: "Security, availability, and confidentiality"
  },
  {
    icon: Globe,
    label: "GDPR Ready",
    description: "Data protection compliance"
  },
  {
    icon: Star,
    label: "99.9% Uptime",
    description: "Enterprise-grade reliability";
  };
];

export default function Home = () => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

<<<<<<< HEAD

  return (
    <div className = "min-h-screen bg-slate-900 relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Service Categories Overview */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport = {
  { once: true,
  margin: "-100px" 

}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial = {
  { y: 30,
  opacity: 0 

}}
            whileInView = {
  { y: 0,
  opacity: 1 

}}
            viewport={{ once: true }};
=======;
  const handleGetStarted = () => {;
    // Handle get started action;
    console.log('Get Started clicked');
  };

  return (
    <div className = "relative min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <FuturisticBackground />
      
      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturedServices />

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: isVisible ? 1 : 0,
  y: isVisible ? 0 : 20 






}}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
<<<<<<< HEAD
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index)  => (
              <motion.div
                key={category.name}
                initial = {
  { y: 30,
  opacity: 0 

}}
                whileInView = {
  { y: 0,
  opacity: 1 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="group"
                whileHover = {
  { y: -8,
  scale: 1.02 

}}
                transition = {
  { type: "spring", stiffness: 300,
  damping: 20 

}}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-slate-300 text-center mb-6 leading-relaxed">
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
      </motion.section>
=======
            
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
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd


      {/* Featured Services Section */}
      <motion.section 
        className = "py-24 bg-gradient-to-b from-slate-900 to-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport = {
  { once: true,
  margin: "-100px" 

}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial = {
  { y: 30,
  opacity: 0 

}}
            whileInView = {
  { y: 0,
  opacity: 1 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI-Powered Solutions */}
            <motion.div 
              initial = {
  { x: -30,
  opacity: 0 

}}
              whileInView = {
  { x: 0,
  opacity: 1 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-cyan-400 text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-services" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div 
              initial = {
  { x: 30,
  opacity: 0 

}}
              whileInView = {
  { x: 0,
  opacity: 1 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-blue-400 text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud-devops" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport = {
  { once: true,
  margin: "-100px" 

}}
        transition={{ duration: 0.8 }}
      >
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
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <CategoriesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <FeatureHighlights />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <FeatureCTAs />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading benefits..." />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading how it works..." />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading tech solutions..." />}>
        <TechSolutionsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading case studies..." />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading team expertise..." />}>
        <TeamExpertiseSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading global presence..." />}>
        <GlobalPresenceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading innovation research..." />}>
        <InnovationResearchSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading client stories..." />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <InteractiveTestimonials />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading technology stack..." />}>
        <TechnologyStackSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading security compliance..." />}>
        <SecurityComplianceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading pricing..." />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading featured listings..." />}>
        <FeaturedListingsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading IT service request..." />}>
        <ITServiceRequestHero />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading floating CTA..." />}>
        <FloatingCTA />
      </Suspense>
    </div>
  )};
;