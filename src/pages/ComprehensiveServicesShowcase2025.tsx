import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Users,
  Workflow,
  Activity,
  MessageCircle,
  TrendingUp,
  Calendar,
  PenTool,
  Settings,
  Target,
  Rocket,
  Star,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Cpu,
  Database,
  Network,
  Lock,
  Server,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Handshake,
  Building2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: "AI & Automation Services",
      icon: <Brain className="w-8 h-8" />,
      description: "Transform your business with intelligent automation and AI-powered insights",
      services: [
        {
          name: "AI Enterprise Automation Platform",
          description: "End-to-end business process automation with intelligent decision making",
          href: "/services/ai-enterprise-automation-platform",
          price: "$2,500/month",
          features: ["Process automation", "AI decision making", "Workflow optimization", "Real-time monitoring"]
        },
        {
          name: "AI Enterprise Intelligence Platform",
          description: "Comprehensive business intelligence with advanced AI analytics",
          href: "/services/ai-enterprise-intelligence-platform",
          price: "$3,000/month",
          features: ["Data analytics", "Predictive insights", "Custom dashboards", "API integration"]
        },
        {
          name: "AI Data Analytics Platform",
          description: "Advanced data processing and analytics powered by machine learning",
          href: "/services/ai-data-analytics-platform",
          price: "$1,800/month",
          features: ["Big data processing", "ML algorithms", "Real-time analytics", "Custom models"]
        },
        {
          name: "AI Business Intelligence Dashboard",
          description: "Interactive dashboards with AI-powered insights and reporting",
          href: "/services/ai-business-intelligence-dashboard",
          price: "$299/month",
          features: ["Custom dashboards", "AI insights", "Real-time data", "Mobile responsive"]
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent workflow automation with AI optimization",
          href: "/services/ai-workflow-orchestrator",
          price: "$99/month",
          features: ["Visual designer", "AI optimization", "Real-time monitoring", "Advanced analytics"]
        }
      ]
    },
    {
      title: "AI-Powered Business Solutions",
      icon: <Target className="w-8 h-8" />,
      description: "Specialized AI solutions for specific business functions",
      services: [
        {
          name: "AI Customer Support Automation",
          description: "24/7 intelligent customer support with AI chatbots",
          href: "/services/ai-customer-support-automation",
          price: "$199/month",
          features: ["AI chatbots", "Multi-language", "Integration APIs", "Analytics dashboard"]
        },
        {
          name: "AI Project Management Platform",
          description: "Intelligent project management with AI-powered insights",
          href: "/services/ai-project-management-platform",
          price: "$299/month",
          features: ["AI scheduling", "Risk prediction", "Resource optimization", "Progress tracking"]
        },
        {
          name: "AI Marketing Automation Platform",
          description: "End-to-end marketing automation with AI optimization",
          href: "/services/ai-marketing-automation-platform",
          price: "$399/month",
          features: ["Campaign automation", "AI optimization", "Multi-channel", "Performance analytics"]
        },
        {
          name: "AI Sales Copilot",
          description: "AI-powered sales assistant for lead generation and conversion",
          href: "/services/ai-sales-copilot",
          price: "$149/month",
          features: ["Lead scoring", "Sales forecasting", "Pipeline management", "Performance insights"]
        },
        {
          name: "AI HR Platform",
          description: "Comprehensive HR management with AI-powered recruitment",
          href: "/services/ai-hr-platform",
          price: "$79/month",
          features: ["AI recruitment", "Performance management", "Learning paths", "Employee engagement"]
        }
      ]
    },
    {
      title: "AI Industry Solutions",
      icon: <Building2 className="w-8 h-8" />,
      description: "Specialized AI solutions for specific industries",
      services: [
        {
          name: "AI Healthcare Platform",
          description: "AI-powered healthcare analytics and patient care optimization",
          href: "/services/ai-healthcare-platform",
          price: "$5,000/month",
          features: ["Patient analytics", "Treatment optimization", "Predictive diagnostics", "HIPAA compliance"]
        },
        {
          name: "AI Financial Trading Platform",
          description: "Advanced algorithmic trading with AI-powered strategies",
          href: "/services/ai-financial-trading-platform",
          price: "$10,000/month",
          features: ["Algorithmic trading", "Risk management", "Market analysis", "Performance optimization"]
        },
        {
          name: "AI Financial Trading Risk Management",
          description: "Comprehensive risk management for financial trading operations",
          href: "/services/ai-financial-trading-risk-management",
          price: "$999/month",
          features: ["Real-time monitoring", "Risk assessment", "Compliance reporting", "Portfolio protection"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Intelligent supply chain management with predictive analytics",
          href: "/services/ai-supply-chain-optimization",
          price: "$2,500/month",
          features: ["Demand forecasting", "Inventory optimization", "Route planning", "Cost reduction"]
        },
        {
          name: "AI Predictive Maintenance",
          description: "Predictive maintenance for industrial equipment and machinery",
          href: "/services/ai-predictive-maintenance",
          price: "$149/month",
          features: ["Equipment monitoring", "Failure prediction", "Maintenance scheduling", "Cost optimization"]
        }
      ]
    },
    {
      title: "Advanced Technology Solutions",
      icon: <Rocket className="w-8 h-8" />,
      description: "Cutting-edge technology solutions for the future",
      services: [
        {
          name: "AI Quantum Computing Solutions",
          description: "Quantum computing solutions with AI integration",
          href: "/services/ai-quantum-computing-solutions",
          price: "$15,000/month",
          features: ["Quantum algorithms", "AI integration", "High performance", "Custom solutions"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Advanced neural networks leveraging quantum computing",
          href: "/services/ai-quantum-neural-network-platform",
          price: "$20,000/month",
          features: ["Quantum neural networks", "Advanced AI", "High accuracy", "Research support"]
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise blockchain solutions with AI integration",
          href: "/services/blockchain-enterprise-solutions",
          price: "$8,000/month",
          features: ["Smart contracts", "AI integration", "Enterprise security", "Scalable architecture"]
        },
        {
          name: "Edge Computing Solutions",
          description: "Edge computing infrastructure for real-time AI processing",
          href: "/services/edge-computing-solutions",
          price: "$3,500/month",
          features: ["Edge AI", "Real-time processing", "Low latency", "Distributed computing"]
        },
        {
          name: "AI Content Creation Studio",
          description: "AI-powered content creation and optimization platform",
          href: "/services/ai-content-creation-studio",
          price: "$199/month",
          features: ["Content generation", "SEO optimization", "Multi-format", "Performance analytics"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Increase Efficiency",
      description: "Automate repetitive tasks and optimize workflows to boost productivity by 40-80%"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "Reduce Costs",
      description: "Lower operational costs through intelligent automation and resource optimization"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Improve Accuracy",
      description: "Eliminate human errors with AI-powered validation and intelligent decision making"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Enhance Customer Experience",
      description: "Provide personalized, 24/7 support and seamless user experiences"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      company: "TechCorp Inc.",
      content: "Zion Tech Group's AI solutions transformed our operations. We've seen a 60% increase in efficiency and significant cost savings.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Manufacturing",
      content: "The AI predictive maintenance platform has reduced our downtime by 75% and saved us millions in operational costs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Marketing",
      company: "Digital Dynamics",
      content: "Our marketing automation platform has increased our conversion rates by 45% while reducing campaign management time by 80%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Comprehensive Services Showcase 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our complete portfolio of innovative AI, IT, and Micro SaaS solutions. 
                From enterprise automation to specialized industry solutions, we have everything 
                you need to transform your business in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of our comprehensive technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-white/5' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">
                      {service.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from real businesses using our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations 
              with Zion Tech Group's comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              Need help? Contact our team at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
            <p>
              Call us at{' '}
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
            </p>
            <p className="mt-2">
              Visit us at 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
