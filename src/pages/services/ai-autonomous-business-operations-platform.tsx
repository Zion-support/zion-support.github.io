import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Activity,
  Eye,
  Lock,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Building2,
  Handshake,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced machine learning algorithms that make real-time business decisions based on data analysis and predictive modeling."
    },
    {
      icon: Workflow,
      title: "Automated Process Orchestration",
      description: "Intelligent workflow automation that coordinates complex business processes across departments and systems."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast business trends, customer behavior, and market conditions with 95%+ accuracy using AI models."
    },
    {
      icon: Shield,
      title: "Intelligent Risk Management",
      description: "AI-driven risk assessment and mitigation strategies that protect your business from potential threats."
    },
    {
      icon: Users,
      title: "Smart Resource Allocation",
      description: "Optimize resource distribution across teams, projects, and departments using AI-powered insights."
    },
    {
      icon: Globe,
      title: "Global Operations Management",
      description: "Manage multi-location operations with centralized AI oversight and localized decision-making capabilities."
    }
  ];

  const benefits = [
    "Reduce operational costs by 40-60% through intelligent automation",
    "Improve decision-making speed by 80% with real-time AI insights",
    "Increase operational efficiency by 50-70%",
    "Minimize human errors by 90% in repetitive tasks",
    "Scale operations seamlessly without proportional cost increases",
    "24/7 autonomous monitoring and response capabilities"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Basic AI decision making",
        "Up to 5 automated workflows",
        "Standard analytics dashboard",
        "Email support",
        "Basic integrations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing businesses with complex operations",
      features: [
        "Advanced AI decision making",
        "Up to 25 automated workflows",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
        "Multi-department coordination",
        "Risk management tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large enterprises requiring full autonomy",
      features: [
        "Full AI autonomy",
        "Unlimited workflows",
        "Custom AI model training",
        "Dedicated support team",
        "White-label solutions",
        "Advanced security features",
        "Global operations support",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Automated production scheduling, quality control, and supply chain optimization",
      roi: "45% cost reduction"
    },
    {
      industry: "Healthcare",
      description: "Patient flow management, resource allocation, and predictive diagnostics",
      roi: "60% efficiency improvement"
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and automated trading decisions",
      roi: "70% faster decision making"
    },
    {
      industry: "Retail",
      description: "Inventory management, demand forecasting, and customer experience optimization",
      roi: "55% revenue increase"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Business Operations
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Operations Platform
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Transform your business operations with the world's most advanced AI platform that autonomously manages, 
              optimizes, and scales your entire business ecosystem in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technologies to create a truly autonomous business operations system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with AI-powered autonomous operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Our Platform?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Built on enterprise-grade infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Custom AI model training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-purple shadow-lg shadow-zion-purple/25' 
                    : 'border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform delivers measurable results across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center hover:border-zion-purple/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full">
                  <span className="text-zion-cyan text-sm font-medium">{useCase.roi}</span>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join the future of autonomous business management with our AI-powered platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Learn More</h3>
              <div className="space-y-3">
                <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  View All Services →
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Case Studies →
                </Link>
                <Link to="/blog" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Latest Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}