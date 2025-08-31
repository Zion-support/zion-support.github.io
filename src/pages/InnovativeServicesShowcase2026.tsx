import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Network,
  Activity,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Zap,
  Workflow,
  Eye,
  Globe,
  Cpu,
  Database,
  Lock,
  Microscope,
  CircuitBoard,
  Building,
  ShoppingCart,
  Home,
  PieChart,
  Calculator,
  Receipt,
  CreditCard,
  PiggyBank,
  TrendingDown,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  FileCheck,
  Scale,
  Gavel,
  BookOpen,
  Clipboard
} from 'lucide-react';

const InnovativeServicesShowcase2026: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for enterprise transformation",
      services: [
        {
          name: "AI Enterprise Intelligence Platform",
          description: "Comprehensive AI-powered business intelligence and analytics",
          href: "/services/ai-enterprise-intelligence-platform",
          icon: Brain,
          price: "$2,999/month",
          features: ["Predictive Analytics", "Business Intelligence", "Enterprise Security", "Process Automation"],
          benefits: ["30% efficiency improvement", "Real-time insights", "AI-powered decision making"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Revolutionary quantum computing with AI integration",
          href: "/services/ai-quantum-neural-network-platform",
          icon: Atom,
          price: "$9,999/month",
          features: ["Quantum Neural Networks", "AI Quantum Algorithms", "Quantum Circuit Design", "Quantum Simulation"],
          benefits: ["1000x speedup", "Quantum advantage", "Exponential processing power"]
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation and lead management",
          href: "/services/ai-sales-copilot",
          icon: TrendingUp,
          price: "$299/month",
          features: ["AI Lead Scoring", "Email Automation", "Prospect Research", "Sales Analytics"],
          benefits: ["35% conversion increase", "50% faster lead qualification", "400% ROI"]
        }
      ]
    },
    {
      title: "Compliance & Security",
      description: "Enterprise-grade compliance and security solutions",
      services: [
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance and risk management",
          href: "/services/ai-compliance-assistant",
          icon: Shield,
          price: "$499/month",
          features: ["Compliance Monitoring", "Document Management", "Regulatory Intelligence", "Compliance Analytics"],
          benefits: ["85% risk reduction", "70% time savings", "95% audit success rate"]
        },
        {
          name: "AI Cybersecurity Platform",
          description: "Advanced threat detection and security automation",
          href: "/services/ai-cybersecurity-platform",
          icon: Lock,
          price: "$1,999/month",
          features: ["Threat Detection", "Incident Response", "Security Automation", "Compliance Monitoring"],
          benefits: ["Zero-day threat protection", "Automated response", "SOC 2 compliance"]
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions and infrastructure management",
      services: [
        {
          name: "Cloud FinOps Optimizer",
          description: "AI-powered cloud cost optimization and financial operations",
          href: "/services/cloud-finops-optimizer",
          icon: Cloud,
          price: "$799/month",
          features: ["Cost Optimization", "FinOps Analytics", "Automated Management", "Multi-Cloud Support"],
          benefits: ["35% cost reduction", "400% ROI", "30 days to value"]
        },
        {
          name: "IT Infrastructure Management",
          description: "Comprehensive infrastructure monitoring and optimization",
          href: "/services/it-infrastructure-management",
          icon: Server,
          price: "$1,299/month",
          features: ["Infrastructure Monitoring", "Performance Optimization", "Automated Scaling", "Health Management"],
          benefits: ["99.9% uptime", "Automated maintenance", "Performance optimization"]
        }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Specialized solutions for specific industries",
      services: [
        {
          name: "AI Healthcare Platform",
          description: "Healthcare-specific AI solutions and compliance",
          href: "/services/ai-healthcare-platform",
          icon: Users,
          price: "$2,499/month",
          features: ["Patient Analytics", "Treatment Optimization", "HIPAA Compliance", "Resource Planning"],
          benefits: ["40% faster diagnosis", "Improved outcomes", "HIPAA compliance"]
        },
        {
          name: "AI Financial Trading Platform",
          description: "AI-powered financial analysis and trading automation",
          href: "/services/ai-financial-trading-platform",
          icon: DollarSign,
          price: "$3,999/month",
          features: ["Market Analysis", "Trading Automation", "Risk Management", "Portfolio Optimization"],
          benefits: ["25% better returns", "Risk reduction", "24/7 trading"]
        }
      ]
    }
  ];

  const keyBenefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead with cutting-edge AI and quantum technologies",
      icon: Rocket,
      metric: "Industry First",
      color: "text-purple-400"
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational costs and maximize ROI",
      icon: TrendingDown,
      metric: "35% Savings",
      color: "text-green-400"
    },
    {
      title: "Compliance Excellence",
      description: "Ensure regulatory compliance and risk mitigation",
      icon: Shield,
      metric: "99.9%",
      color: "text-blue-400"
    },
    {
      title: "Scalability",
      description: "Grow your business with flexible, scalable solutions",
      icon: TrendingUp,
      metric: "Unlimited",
      color: "text-cyan-400"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO",
      company: "TechInnovate Inc.",
      content: "The AI Enterprise Intelligence Platform transformed our decision-making process. We now have real-time insights that drive our business strategy.",
      rating: 5,
      service: "AI Enterprise Intelligence"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Global Manufacturing Co.",
      content: "The AI Compliance Assistant saved us countless hours and ensured we're always compliant with changing regulations.",
      rating: 5,
      service: "AI Compliance Assistant"
    },
    {
      name: "Emily Watson",
      role: "Sales Director",
      company: "GrowthTech Solutions",
      content: "Our AI Sales Copilot increased our conversion rates by 35% and helped us close deals faster than ever before.",
      rating: 5,
      service: "AI Sales Copilot"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovation Showcase 2026
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive suite of cutting-edge AI, compliance, cloud, and industry solutions. 
              Transform your business with the latest innovations in technology and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">1000+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">4.9/5 Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our innovative services deliver measurable business impact across all key metrics, 
              helping organizations achieve digital transformation and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${benefit.color}`}>
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our innovative services designed to address every aspect of modern business 
              technology needs, from AI and compliance to cloud optimization.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="text-2xl font-bold text-purple-400 mb-4">
                        {service.price}
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2 mb-6">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="text-sm text-green-400 font-medium">
                            ✓ {benefit}
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say 
              about our innovative services and their impact on their businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="text-center">
                  <div className="text-white font-semibold mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    {testimonial.role} at {testimonial.company}
                  </div>
                  <div className="text-purple-400 text-sm font-medium">
                    {testimonial.service}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations that have already accelerated their digital 
                transformation with our innovative services. Let's discuss how we can help you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
