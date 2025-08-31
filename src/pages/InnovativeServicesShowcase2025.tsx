import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target,
  Handshake,
  Eye,
  AlertTriangle,
  BarChart,
  Activity,
  MessageSquare,
  Search,
  Palette,
  ChevronRight,
  Play,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const serviceCategories = [
    {
      name: "AI-Powered Financial Services",
      description: "Revolutionary AI solutions for financial institutions and fintech companies",
      icon: DollarSign,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Financial Fraud Detection",
          description: "Real-time fraud detection with zero false positives",
          href: "/services/ai-financial-fraud-detection",
          features: ["Real-time monitoring", "AI risk assessment", "Compliance automation"],
          pricing: "Starting at $299/month",
          benefits: ["Prevent millions in losses", "Regulatory compliance", "24/7 protection"]
        }
      ]
    },
    {
      name: "AI Supply Chain Solutions",
      description: "Intelligent supply chain management and risk prevention",
      icon: Globe,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "AI Supply Chain Risk Management",
          description: "Comprehensive risk detection and prevention platform",
          href: "/services/ai-supply-chain-risk-management",
          features: ["Risk monitoring", "Predictive analytics", "Global mapping"],
          pricing: "Starting at $399/month",
          benefits: ["Prevent disruptions", "Cost optimization", "Global visibility"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "AI-powered optimization for maximum efficiency",
          href: "/services/ai-supply-chain-optimization",
          features: ["Route optimization", "Inventory management", "Demand forecasting"],
          pricing: "Starting at $599/month",
          benefits: ["Reduce costs by 25%", "Improve efficiency", "Real-time insights"]
        }
      ]
    },
    {
      name: "AI Customer Intelligence",
      description: "Transform customer insights into actionable business intelligence",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "AI Customer Experience Analytics",
          description: "Advanced analytics for customer behavior and satisfaction",
          href: "/services/ai-customer-experience-analytics",
          features: ["Sentiment analysis", "Behavioral patterns", "Predictive insights"],
          pricing: "Starting at $199/month",
          benefits: ["Increase satisfaction by 35%", "Reduce churn by 25%", "Data-driven decisions"]
        }
      ]
    },
    {
      name: "AI Cybersecurity & Compliance",
      description: "Next-generation security solutions powered by artificial intelligence",
      icon: Shield,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "AI Cybersecurity Platform",
          description: "Comprehensive AI-powered threat detection and response",
          href: "/services/ai-cybersecurity-platform",
          features: ["Threat detection", "Real-time response", "Compliance automation"],
          pricing: "Starting at $799/month",
          benefits: ["Zero-day threat protection", "Automated response", "Regulatory compliance"]
        }
      ]
    },
    {
      name: "AI Healthcare Solutions",
      description: "Revolutionary healthcare technology powered by artificial intelligence",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      services: [
        {
          name: "AI Healthcare Platform",
          description: "Predictive diagnostics and care optimization",
          href: "/services/ai-healthcare-platform",
          features: ["Predictive analytics", "Diagnostic support", "Care optimization"],
          pricing: "Starting at $1,299/month",
          benefits: ["Improve patient outcomes", "Reduce diagnostic errors", "Optimize care delivery"]
        }
      ]
    },
    {
      name: "AI Enterprise Solutions",
      description: "Enterprise-grade AI solutions for large organizations",
      icon: Building,
      color: "from-indigo-600 to-purple-600",
      services: [
        {
          name: "AI Enterprise Orchestrator",
          description: "Multi-agent AI coordination for enterprise operations",
          href: "/services/ai-enterprise-orchestrator",
          features: ["Multi-agent coordination", "Workflow automation", "Enterprise integration"],
          pricing: "Starting at $1,999/month",
          benefits: ["Scale operations", "Reduce manual work", "Improve efficiency"]
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Solutions', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'ROI Average', value: '300%', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, FinTech Solutions Inc.",
      company: "FinTech Solutions Inc.",
      content: "Zion Tech Group's AI fraud detection platform has saved us millions in potential losses. The accuracy is incredible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Supply Chain Director",
      company: "Global Manufacturing Corp",
      content: "Their supply chain risk management solution gives us complete visibility and prevents disruptions before they happen.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "Metro Health Systems",
      content: "The AI healthcare platform has improved our diagnostic accuracy by 40% and patient outcomes significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              2025 Innovation Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI, IT, and Micro SAAS solutions that are transforming 
              industries and driving business growth in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our innovative services span across multiple industries and use cases, 
              providing cutting-edge solutions for modern business challenges.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/30 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <Link
                          to={service.href}
                          className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                      
                      <p className="text-zion-slate-light mb-4">{service.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                                <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h5>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                                <Star className="w-3 h-3 text-zion-cyan mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-3 border-t border-zion-purple/20">
                          <div className="text-sm text-zion-slate-light">
                            <span className="font-semibold text-zion-cyan">Pricing:</span> {service.pricing}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real feedback from industry leaders who have transformed their businesses with our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                  <div className="text-sm text-zion-cyan">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies that have already revolutionized their operations 
              with Zion Tech Group's innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <p className="text-sm text-zion-slate-light mt-6">
              Visit our website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
