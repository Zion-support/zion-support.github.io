import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Cpu, 
  Network, 
  Brain, 
  Shield, 
  Database, 
  Globe,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Building,
  Heart,
  ShoppingCart,
  FileText,
  Sparkles,
  Workflow,
  Truck,
  ShieldCheck,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  Eye,
  Search,
  Filter,
  Archive,
  RefreshCw,
  Globe2,
  Factory,
  Car,
  Plane,
  Satellite,
  Wifi,
  HardDrive,
  Monitor,
  Server,
  Router,
  Smartphone
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Edge Processing",
      description: "Intelligent algorithms that process data at the edge for real-time insights and decision-making."
    },
    {
      icon: Network,
      title: "Distributed Edge Network",
      description: "Seamless connectivity across edge devices with intelligent load balancing and failover capabilities."
    },
    {
      icon: Cpu,
      title: "Real-time Analytics",
      description: "Instant data processing and analysis at the edge for immediate action and response."
    },
    {
      icon: Database,
      title: "Edge Data Management",
      description: "Efficient data storage, processing, and synchronization across distributed edge locations."
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols and encryption for edge devices and data transmission."
    },
    {
      icon: Eye,
      title: "IoT Integration",
      description: "Comprehensive IoT device management and data collection at the edge."
    }
  ];

  const benefits = [
    "Reduce latency by 90%",
    "Lower bandwidth costs by 60%",
    "Real-time processing",
    "Enhanced security",
    "Scalable architecture",
    "Improved reliability",
    "Cost optimization",
    "Competitive advantage"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small organizations starting with edge computing",
      features: [
        "Basic edge processing",
        "IoT integration",
        "Standard security",
        "Email support",
        "Basic analytics",
        "Up to 50 edge devices"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$8,999",
      period: "/month",
      description: "Ideal for growing organizations with complex edge computing needs",
      features: [
        "Advanced edge processing",
        "Full IoT integration",
        "Advanced security",
        "Priority support",
        "Real-time analytics",
        "Unlimited edge devices",
        "Custom models",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,999",
      period: "/month",
      description: "For large enterprises requiring maximum edge computing capabilities",
      features: [
        "Full edge computing suite",
        "Custom AI model development",
        "Advanced edge features",
        "Dedicated support team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Real-time production monitoring, predictive maintenance, and quality control",
      icon: Factory
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and real-time diagnostics",
      icon: Heart
    },
    {
      industry: "Transportation",
      description: "Fleet management, traffic optimization, and autonomous vehicle support",
      icon: Truck
    },
    {
      industry: "Energy",
      description: "Grid monitoring, renewable energy management, and predictive maintenance",
      icon: Zap
    },
    {
      industry: "Smart Cities",
      description: "Infrastructure monitoring, traffic management, and public services",
      icon: Building
    },
    {
      industry: "Retail",
      description: "Inventory management, customer analytics, and supply chain optimization",
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Edge Computing Platform - Zion Tech Group"
        description="Comprehensive AI-powered edge computing platform for real-time processing, IoT integration, and distributed intelligence. Transform operations with edge computing."
        keywords="AI edge computing, IoT integration, real-time processing, edge analytics, distributed computing"
        canonicalUrl="https://ziontechgroup.com/services/AI-Edge-Computing-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Edge{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Computing Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Process data at the edge with our AI-powered computing platform. Reduce latency, lower costs, 
              and enable real-time intelligence across your distributed infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-orange-400/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Edge Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements that revolutionize how organizations process and analyze data at the edge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-orange-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-orange-500/5 to-red-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for comprehensive edge computing operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized edge computing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-orange-500/5 to-red-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your edge computing capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-orange-400/50 scale-105' 
                    : 'border-white/10 hover:border-orange-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Edge%20Computing%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 text-center block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Edge Computing Platform can optimize your operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Edge%20Computing%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-orange-400/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}