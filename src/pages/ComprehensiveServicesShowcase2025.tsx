import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Leaf, 
  Cpu, 
  Route, 
  Zap, 
  Target, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  Lock,
  Network,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      icon: Route,
      title: "AI Customer Journey Orchestration Platform",
      description: "Transform customer experiences with AI-powered journey mapping and multi-channel orchestration",
      features: [
        "AI-Powered Journey Mapping",
        "Multi-Channel Orchestration", 
        "Personalized Journey Optimization",
        "Customer Segmentation & Targeting",
        "Automated Journey Triggers",
        "Privacy-First Management"
      ],
      pricing: "Starting at $499/month",
      color: "purple",
      path: "/services/ai-customer-journey-orchestration-platform",
      benefits: [
        "Increase customer engagement by 300%",
        "Reduce customer acquisition costs by 40%",
        "Improve conversion rates by 250%",
        "Automate 80% of customer interactions"
      ]
    },
    {
      icon: Shield,
      title: "Quantum-Enhanced Cybersecurity Operations Center",
      description: "Next-generation cybersecurity with quantum computing and AI for unparalleled threat protection",
      features: [
        "Quantum AI Threat Detection",
        "Zero-Trust Security Architecture",
        "Advanced Threat Intelligence",
        "24/7 Security Operations",
        "Quantum Cryptography",
        "Network Security Orchestration"
      ],
      pricing: "Starting at $1,999/month",
      color: "blue",
      path: "/services/quantum-enhanced-cybersecurity-operations-center",
      benefits: [
        "99.99% threat detection accuracy",
        "Reduce security incidents by 90%",
        "60% faster incident response",
        "Quantum-resistant encryption"
      ]
    },
    {
      icon: Leaf,
      title: "AI-Driven Sustainability Analytics Platform",
      description: "Comprehensive sustainability management with AI-powered analytics and automated reporting",
      features: [
        "AI-Powered Carbon Footprint Analysis",
        "Sustainability Performance Monitoring",
        "Predictive Sustainability Analytics",
        "Goal Setting & Tracking",
        "Energy Efficiency Optimization",
        "Compliance & Reporting"
      ],
      pricing: "Starting at $399/month",
      color: "green",
      path: "/services/ai-driven-sustainability-analytics-platform",
      benefits: [
        "Reduce carbon emissions by 35%",
        "Improve energy efficiency by 45%",
        "Automate 90% of sustainability reporting",
        "Achieve ESG compliance faster"
      ]
    },
    {
      icon: Cpu,
      title: "Autonomous Digital Twin Management System",
      description: "Revolutionary asset management with intelligent, self-learning digital representations",
      features: [
        "AI-Powered Twin Creation",
        "Real-Time Data Integration",
        "Predictive Analytics & Maintenance",
        "Autonomous Decision Making",
        "Cybersecurity & Compliance",
        "Scalable Architecture"
      ],
      pricing: "Starting at $799/month",
      color: "indigo",
      path: "/services/autonomous-digital-twin-management-system",
      benefits: [
        "Reduce maintenance costs by 50%",
        "Increase asset uptime by 30%",
        "Predict failures with 95% accuracy",
        "Optimize operations in real-time"
      ]
    }
  ];

  const industrySolutions = [
    {
      name: "Manufacturing",
      description: "AI-powered optimization, predictive maintenance, and digital twin solutions",
      icon: Cpu,
      color: "blue"
    },
    {
      name: "Financial Services",
      description: "Quantum cybersecurity, AI trading platforms, and risk management solutions",
      icon: Shield,
      color: "green"
    },
    {
      name: "Healthcare",
      description: "AI diagnostics, patient journey optimization, and medical device management",
      icon: Activity,
      color: "red"
    },
    {
      name: "Retail & E-commerce",
      description: "Customer journey orchestration, AI analytics, and personalized experiences",
      icon: Users,
      color: "purple"
    },
    {
      name: "Energy & Utilities",
      description: "Sustainability analytics, smart grid optimization, and renewable energy management",
      icon: Zap,
      color: "yellow"
    },
    {
      name: "Smart Cities",
      description: "Infrastructure digital twins, sustainability monitoring, and urban optimization",
      icon: Globe,
      color: "cyan"
    }
  ];

  const pricingComparison = [
    {
      plan: "Starter",
      price: "$399-799",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Basic AI features", "Standard support", "Core functionality", "Up to 100 users"]
    },
    {
      plan: "Professional",
      price: "$999-1,999",
      period: "/month",
      description: "Ideal for growing companies",
      features: ["Advanced AI capabilities", "Priority support", "Custom integrations", "Up to 1,000 users"]
    },
    {
      plan: "Enterprise",
      price: "$2,499-12,999",
      period: "/month",
      description: "For large organizations",
      features: ["Custom AI models", "24/7 dedicated support", "Advanced security", "Unlimited users"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      purple: {
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/50",
        hover: "hover:border-purple-400"
      },
      blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/50",
        hover: "hover:border-blue-400"
      },
      green: {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/50",
        hover: "hover:border-green-400"
      },
      indigo: {
        bg: "bg-indigo-500/20",
        text: "text-indigo-400",
        border: "border-indigo-500/50",
        hover: "hover:border-indigo-400"
      }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              2025 Comprehensive Services Showcase
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400"> Business Technology</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered, quantum-enhanced, and autonomous solutions that are 
              revolutionizing industries worldwide. From customer journey orchestration to quantum cybersecurity, 
              we provide the tools you need to thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge solutions that combine AI, quantum computing, and autonomous systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-slate-800/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-8 hover:${colors.hover} transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Starting at</p>
                      <p className="text-2xl font-bold text-white">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.path}
                    className={`inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-${service.color}-500 to-${service.color === 'purple' ? 'blue' : service.color === 'blue' ? 'cyan' : service.color === 'green' ? 'emerald' : 'purple'}-600 text-white font-semibold rounded-xl hover:from-${service.color}-600 hover:to-${service.color === 'purple' ? 'blue' : service.color === 'blue' ? 'cyan' : service.color === 'green' ? 'emerald' : 'purple'}-700 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for every industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{solution.name}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingComparison.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of organizations worldwide that are leveraging our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to discuss how our innovative solutions can transform your business?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Phone</h3>
              <p className="text-gray-400 mb-4">+1 302 464 0950</p>
              <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email</h3>
              <p className="text-gray-400 mb-4">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
              <p className="text-gray-400 mb-4">364 E Main St STE 1008</p>
              <p className="text-gray-400 mb-4">Middletown DE 19709</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-xl">
              <Globe className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300 mr-3">Visit our website:</span>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
              >
                ziontechgroup.com
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">
            <p className="mb-2">
              <strong>Zion Tech Group</strong> - Leading the Future of Business Technology
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
            <p>
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
            </p>
            <p className="mt-2">
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
