
import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Search,
  Rocket,
  Code,
  Lock,
  Cpu,
  Database,
  Sparkles,
  Target,
  Lightbulb,
  Server,
  Wifi,
  Monitor,
  Laptop,
  Handshake,
  FileImage,
  Network,
  Heart,
  BarChart3,
  BookOpen,
  ShoppingCart,
  CpuIcon,
  MessageCircle
} from 'lucide-react';
import { innovativeMicroSaasServices2026, specializedServices2026, zionContactInfo } from '../data/innovativeMicroSaasServices2026';

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 quantum-particles">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full holographic"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin neon-glow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg text-gradient">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse neon-glow">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Performance-optimized stats section
const StatsSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'AI Solutions', value: '50+', icon: Brain, description: 'Intelligent systems deployed' },
    { label: 'Cybersecurity', value: '99.9%', icon: Shield, description: 'Threat detection rate' },
    { label: 'Cloud Services', value: '24/7', icon: Cloud, description: 'Uptime guarantee' },
    { label: 'Client Success', value: '95%', icon: Award, description: 'Satisfaction rate' }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="neon-text-cyan text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-zion-cyan/70 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

// Featured Services Section
const FeaturedServices = () => {
  const featuredServices = [
    {
      name: "ZionAI Business Intelligence Suite",
      description: "Next-generation AI-powered business intelligence platform with real-time analytics and predictive modeling",
      price: "$2,999/month",
      features: ["Real-time AI analytics", "Predictive business modeling", "Custom AI models", "Multi-source integration"],
      icon: Brain,
      category: "AI & Analytics",
      rating: 4.9,
      highlights: ["40% faster decision making", "Real-time insights", "Automated workflows", "Predictive analysis"]
    },
    {
      name: "ZionShield Enterprise Security",
      description: "Comprehensive cybersecurity platform with AI threat detection and zero-trust architecture",
      price: "$2,499/month",
      features: ["AI threat detection", "Zero Trust", "Compliance", "Incident Response"],
      icon: Shield,
      category: "Cybersecurity",
      rating: 4.8,
      highlights: ["99.9% threat detection", "Zero false positives", "Compliance ready", "Enterprise grade"]
    },
    {
      name: "ZionQuantum Computing Platform",
      description: "Advanced quantum computing platform for research, optimization, and next-gen applications",
      price: "$4,999/month",
      features: ["Quantum algorithms", "Hybrid computing", "Research tools", "Performance optimization"],
      icon: Rocket,
      category: "Quantum Computing",
      rating: 4.9,
      highlights: ["Quantum advantage", "Research ready", "Hybrid systems", "Future-proof"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="futuristic-heading mb-6">Featured Services</h2>
          <p className="futuristic-subheading max-w-3xl mx-auto">
            Discover our most innovative and powerful solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="futuristic-card group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {service.category}
                    </div>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                      <span className="text-white text-sm ml-2">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-zion-cyan/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <div className="text-zion-cyan/70 text-sm">Starting price</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Highlights</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-cyan/80 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="futuristic-btn flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-2xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300">
                    Get Started
                  </button>
                  <button className="futuristic-btn px-6 py-3 border border-zion-cyan/30 text-zion-cyan rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Categories Section
const ServiceCategories = () => {
  const serviceCategories = [
    {
      name: "AI & Analytics",
      description: "Intelligent solutions for data-driven decision making",
      icon: Brain,
      services: ["Business Intelligence", "Machine Learning", "Predictive Analytics", "Data Visualization"],
      color: "from-zion-cyan to-zion-blue"
    },
    {
      name: "Cybersecurity",
      description: "Protect your digital assets with advanced security",
      icon: Shield,
      services: ["Threat Detection", "Zero Trust", "Compliance", "Incident Response"],
      color: "from-zion-purple to-zion-pink"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable infrastructure and automation solutions",
      icon: Cloud,
      services: ["Infrastructure as Code", "CI/CD Pipelines", "Auto-scaling", "Monitoring"],
      color: "from-zion-blue to-zion-cyan"
    },
    {
      name: "IoT & Edge",
      description: "Connected device management and edge computing",
      icon: Zap,
      services: ["Device Management", "Edge Computing", "Real-time Analytics", "Connectivity"],
      color: "from-zion-green to-zion-cyan"
    },
    {
      name: "Quantum Computing",
      description: "Next-generation computing capabilities",
      icon: Rocket,
      services: ["Quantum Algorithms", "Hybrid Systems", "Research Tools", "Optimization"],
      color: "from-zion-purple to-zion-orange"
    },
    {
      name: "Blockchain",
      description: "Decentralized and secure solutions",
      icon: Code,
      services: ["Smart Contracts", "Supply Chain", "DeFi", "Identity Management"],
      color: "from-zion-orange to-zion-red"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="futuristic-heading mb-6">Service Categories</h2>
          <p className="futuristic-subheading max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions across multiple domains
          </p>
        </motion.div>

        <div className="futuristic-grid">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="futuristic-card group"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-zion-cyan/70 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Services Include</h4>
                  <div className="space-y-2">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan/80 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="futuristic-btn w-full px-6 py-3 border border-zion-cyan/30 text-zion-cyan rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300 group">
                  <span>Explore {category.name}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Industry Solutions Section
const IndustrySolutions = () => {
  const industrySolutions = [
    {
      name: "Healthcare",
      description: "Digital health solutions for modern healthcare",
      icon: Heart,
      solutions: ["Telemedicine", "AI Diagnostics", "Patient Management", "Data Security"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Finance",
      description: "Fintech solutions for financial institutions",
      icon: BarChart3,
      solutions: ["Digital Banking", "AI Trading", "Risk Management", "Compliance"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and Industry 4.0",
      icon: Cpu,
      solutions: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Retail",
      description: "E-commerce and retail technology",
      icon: ShoppingCart,
      solutions: ["Online Platforms", "Inventory Management", "Customer Analytics", "Payment Systems"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Education",
      description: "EdTech solutions for learning",
      icon: BookOpen,
      solutions: ["Learning Platforms", "Student Analytics", "Virtual Classrooms", "Assessment Tools"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Government",
      description: "Public sector technology solutions",
      icon: Shield,
      solutions: ["Digital Services", "Data Management", "Security", "Citizen Engagement"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="futuristic-heading mb-6">Industry Solutions</h2>
          <p className="futuristic-subheading max-w-3xl mx-auto">
            Tailored technology solutions designed for specific industry challenges and opportunities
          </p>
        </motion.div>

        <div className="futuristic-grid">
          {industrySolutions.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="futuristic-card group"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {industry.name}
                </h3>
                
                <p className="text-zion-cyan/70 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Solutions Include</h4>
                  <div className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan/80 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="futuristic-btn w-full px-6 py-3 border border-zion-cyan/30 text-zion-cyan rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300 group">
                  <span>Explore {industry.name}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact CTA Section
const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="futuristic-card text-center p-12">
            <h2 className="futuristic-heading mb-6">Ready to Transform Your Business?</h2>
            <p className="futuristic-subheading mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can help you achieve your goals and stay ahead of the competition
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-zion-cyan/80">{zionContactInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-zion-purple" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-zion-cyan/80">{zionContactInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-zion-blue" />
                </div>
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-zion-cyan/80">{zionContactInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-2xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="futuristic-btn px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  return (
    <div className="futuristic-bg min-h-screen">
      {/* Particle Effects */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}></div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/10 rounded-full float-animation"></div>
        <div className="absolute top-40 right-40 w-48 h-48 border border-zion-purple/10 rounded-full float-animation-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 border border-zion-blue/10 rounded-full float-animation"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="futuristic-heading mb-8">
              Pioneering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                {" "}Technology
              </span>
            </h1>
            
            <p className="futuristic-subheading mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, cybersecurity, quantum computing, and innovative IT solutions. 
              Stay ahead of the competition with Zion Tech Group's comprehensive technology services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="futuristic-btn px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-2xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-lg">
                Explore Services
              </button>
              <button className="futuristic-btn px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>

            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search for services, solutions, or technologies..."
                  className="w-full px-6 py-4 pl-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-cyan/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 text-lg"
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-cyan/50" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Service Categories */}
      <ServiceCategories />

      {/* Industry Solutions */}
      <IndustrySolutions />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
