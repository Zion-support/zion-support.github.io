import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Atom, 
  Truck, 
  Cloud, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  BarChart3,
  Activity,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Cpu,
  Network,
  Lock,
  Eye,
  FileText,
  Download,
  Play,
  RefreshCw,
  Search,
  Filter,
  Bell,
  Settings,
  AlertTriangle,
  CheckSquare,
  XCircle,
  Globe,
  Award,
  Rocket,
  Sparkles,
  Infinity,
  Layers,
  Grid,
  Hexagon,
  Octagon,
  Pentagon,
  Triangle,
  Square,
  Circle,
  Cube,
  Sphere,
  Cylinder,
  Cone,
  Pyramid
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence Platform",
      description: "Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.",
      features: ["AI-Powered Analytics", "Interactive Dashboards", "Predictive Modeling", "Data Integration", "Automated Reporting", "Enterprise Security"],
      pricing: "Starting from $299/month",
      href: "/services/ai-business-intelligence-platform",
      color: "from-cyan-400 to-blue-500",
      category: "AI & Analytics"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Protect your business with the most advanced AI-powered cybersecurity platform with real-time threat detection.",
      features: ["AI-Powered Threat Detection", "24/7 Security Monitoring", "Multi-Layer Protection", "Automated Incident Response", "Advanced Encryption", "Identity Management"],
      pricing: "Starting from $399/month",
      href: "/services/ai-cybersecurity-platform",
      color: "from-red-400 to-orange-500",
      category: "Security"
    },
    {
      icon: Heart,
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare delivery with our AI-powered analytics platform for better patient outcomes.",
      features: ["AI-Powered Diagnostics", "Real-time Patient Monitoring", "Predictive Healthcare", "Population Health Analytics", "Automated Reporting", "HIPAA Compliant"],
      pricing: "Starting from $599/month",
      href: "/services/ai-healthcare-analytics-platform",
      color: "from-green-400 to-blue-500",
      category: "Healthcare"
    },
    {
      icon: Atom,
      title: "AI-Quantum Hybrid Platform",
      description: "Experience the future of computing with our revolutionary AI-Quantum hybrid platform.",
      features: ["AI-Quantum Hybrid Computing", "Quantum Machine Learning", "Real-time Optimization", "Hybrid Infrastructure", "Quantum Networking", "Quantum Security"],
      pricing: "Starting from $1,999/month",
      href: "/services/ai-quantum-hybrid-platform",
      color: "from-purple-400 to-pink-500",
      category: "Quantum Computing"
    },
    {
      icon: Truck,
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with AI-powered forecasting, route optimization, and real-time analytics.",
      features: ["AI-Powered Forecasting", "Route Optimization", "Global Supply Chain", "Real-time Analytics", "Risk Management", "Inventory Management"],
      pricing: "Starting from $499/month",
      href: "/services/ai-supply-chain-optimization",
      color: "from-blue-400 to-green-500",
      category: "Supply Chain"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "Security & Compliance"],
      pricing: "Starting from $799/month",
      href: "/cloud-devops",
      color: "from-blue-400 to-indigo-500",
      category: "Cloud & DevOps"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      services: 6,
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      description: "Advanced security solutions to protect your digital assets",
      services: 3,
      color: "from-red-400 to-pink-500"
    },
    {
      name: "Healthcare Technology",
      icon: Heart,
      description: "Innovative healthcare solutions powered by AI and analytics",
      services: 2,
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      description: "Next-generation quantum solutions for complex problem solving",
      services: 2,
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Supply Chain & Logistics",
      icon: Truck,
      description: "AI-powered optimization for supply chain and logistics operations",
      services: 2,
      color: "from-blue-400 to-green-500"
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      description: "Enterprise-grade cloud and infrastructure solutions",
      services: 4,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Inc.",
      content: "Zion Tech Group has transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5,
      service: "AI Business Intelligence"
    },
    {
      name: "David Kim",
      role: "CISO, SecureNet",
      company: "SecureNet Corporation",
      content: "Their AI cybersecurity platform has revolutionized our security posture. We've reduced incident response time by 80%.",
      rating: 5,
      service: "AI Cybersecurity"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "VP of Clinical Operations, CareNet",
      company: "CareNet Healthcare",
      content: "The AI healthcare platform has transformed our diagnostic capabilities. We're detecting conditions earlier and improving patient outcomes.",
      rating: 5,
      service: "AI Healthcare Analytics"
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'AI Models Deployed', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Comprehensive Services 2025
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Tech Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Services Showcase
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive suite of AI-powered services, quantum computing solutions, and cutting-edge technology platforms 
                designed to transform your business and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#services"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions across multiple domains designed to meet all your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{category.services} Services</span>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our flagship services that are transforming industries and driving innovation worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-purple-400 font-semibold">{service.pricing}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <Link
                  to={service.href}
                  className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="inline w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have achieved with our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-purple-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-semibold text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our innovative technology solutions can drive your success and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
