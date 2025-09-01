import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Building2,
  Factory,
  Team
} from 'lucide-react';

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

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
    <FuturisticBackground />
    
    <div className="relative z-10 text-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Pioneering the future with cutting-edge AI, quantum computing, and innovative technology solutions that transform businesses and drive digital evolution.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link
          to="/services"
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
        >
          Explore Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          Get Started
          <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-400" />
          <span>Enterprise Security</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-blue-400" />
          <span>Global Reach</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-400" />
          <span>Industry Leader</span>
        </div>
      </motion.div>
    </div>
  </section>
);

// Services Preview Section
const ServicesPreview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence platforms and automation solutions",
      color: "from-purple-500 to-pink-500",
      link: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      startingPrice: "$2,499"
    },
    {
      icon: Cpu,
      title: "IT Services",
      description: "Comprehensive IT infrastructure and digital transformation services",
      color: "from-blue-500 to-cyan-500",
      link: "/it-services",
      features: ["Cloud Migration", "DevOps Automation", "Data Analytics", "Cybersecurity"],
      startingPrice: "$3,999"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud solutions and automated development operations",
      color: "from-green-500 to-emerald-500",
      link: "/services",
      features: ["AWS/Azure/GCP", "Container Orchestration", "CI/CD Pipelines", "Infrastructure as Code"],
      startingPrice: "$4,999"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions and threat intelligence platforms",
      color: "from-red-500 to-orange-500",
      link: "/services",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "Zero Trust Security"],
      startingPrice: "$4,999"
    },
    {
      icon: Zap,
      title: "Micro SAAS",
      description: "Custom software solutions and business automation tools",
      color: "from-yellow-500 to-orange-500",
      link: "/micro-saas",
      features: ["Custom Development", "API Integration", "Business Automation", "Scalable Architecture"],
      startingPrice: "$2,999"
    },
    {
      icon: Rocket,
      title: "Emerging Tech",
      description: "Next-generation technologies including quantum computing and blockchain",
      color: "from-indigo-500 to-purple-500",
      link: "/emerging-tech",
      features: ["Quantum Computing", "Blockchain Solutions", "Edge Computing", "IoT Platforms"],
      startingPrice: "$8,999"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered solutions to enterprise-grade infrastructure, we provide end-to-end technology services 
            that drive innovation and accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Starting Price */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Starting from:</div>
                    <div className="text-lg font-bold text-cyan-400">{service.startingPrice}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// New Section: Featured Solutions
const FeaturedSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Large-scale digital transformation and enterprise-grade platforms",
      link: "/enterprise",
      color: "from-blue-600 to-indigo-600",
      benefits: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Integration"]
    },
    {
      icon: Factory,
      title: "Industry Solutions",
      description: "Sector-specific technology solutions for healthcare, manufacturing, and finance",
      link: "/industry-solutions",
      color: "from-green-600 to-emerald-600",
      benefits: ["Industry Expertise", "Compliance Ready", "Best Practices", "ROI Focused"]
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "End-to-end business modernization and process optimization",
      link: "/digital-transformation",
      color: "from-purple-600 to-pink-600",
      benefits: ["Process Optimization", "Technology Integration", "Change Management", "Performance Metrics"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      link: "/cloud-solutions",
      color: "from-cyan-600 to-blue-600",
      benefits: ["Multi-Cloud Strategy", "Cost Optimization", "Security First", "Performance Tuning"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tailored Solutions for Every Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We understand that every business is unique. Our solutions are designed to address specific industry 
            challenges and scale with your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={solution.link} className="block">
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl border border-slate-500 hover:border-slate-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Statistics Section
const StatisticsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle, description: "Successfully delivered across industries" },
    { number: "50+", label: "Enterprise Clients", icon: Users, description: "Trusted by Fortune 500 companies" },
    { number: "99.9%", label: "Uptime SLA", icon: Shield, description: "Reliable infrastructure guarantee" },
    { number: "24/7", label: "Support Available", icon: Clock, description: "Round-the-clock technical assistance" },
    { number: "15+", label: "Years Experience", icon: Award, description: "Deep industry expertise" },
    { number: "200+", label: "Team Members", icon: Team, description: "Skilled professionals worldwide" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const CTASection = () => (
  <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join the future of technology with Zion Tech Group. Let's build something extraordinary together. 
          Get started with a free consultation and discover how our innovative solutions can accelerate your growth.
        </p>
        
        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-white font-semibold">+1 302 464 0950</div>
              <div className="text-gray-300 text-sm">Call us anytime</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
              <div className="text-gray-300 text-sm">Send us an email</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-white font-semibold">Middletown, DE</div>
              <div className="text-gray-300 text-sm">Global services</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <FeaturedSolutions />
      <StatisticsSection />
      <CTASection />
    </div>
  );
};

export default Home;
