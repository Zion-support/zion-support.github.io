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
  Monitor
} from 'lucide-react';

export default function AIDigitalTwinPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Digital Twins",
      description: "Intelligent virtual representations of physical assets with real-time monitoring and predictive analytics."
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Seamless connectivity with sensors, devices, and systems for comprehensive data collection and monitoring."
    },
    {
      icon: Cpu,
      title: "Real-time Simulation",
      description: "Live virtual models that mirror physical assets with instant updates and predictive capabilities."
    },
    {
      icon: Database,
      title: "Advanced Analytics",
      description: "AI-driven insights from digital twin data for optimization and decision-making."
    },
    {
      icon: Shield,
      title: "Predictive Maintenance",
      description: "Anticipate equipment failures and optimize maintenance schedules using AI predictions."
    },
    {
      icon: Eye,
      title: "Performance Monitoring",
      description: "Continuous tracking of asset performance with real-time alerts and optimization recommendations."
    }
  ];

  const benefits = [
    "Reduce operational costs by 30%",
    "Improve asset efficiency by 25%",
    "Predictive maintenance savings",
    "Real-time performance monitoring",
    "Enhanced decision making",
    "Risk mitigation",
    "Operational optimization",
    "Competitive advantage"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small organizations starting with digital twins",
      features: [
        "Basic digital twin creation",
        "IoT integration",
        "Standard monitoring",
        "Email support",
        "Basic analytics",
        "Up to 10 assets"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for growing organizations with complex digital twin needs",
      features: [
        "Advanced digital twins",
        "Full IoT integration",
        "Predictive analytics",
        "Priority support",
        "Advanced monitoring",
        "Unlimited assets",
        "Custom models",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large enterprises requiring maximum digital twin capabilities",
      features: [
        "Full digital twin suite",
        "Custom AI model development",
        "Advanced IoT features",
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
      description: "Production line optimization, predictive maintenance, and quality control",
      icon: Factory
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and facility optimization",
      icon: Heart
    },
    {
      industry: "Transportation",
      description: "Fleet management, infrastructure monitoring, and predictive maintenance",
      icon: Truck
    },
    {
      industry: "Energy",
      description: "Grid optimization, renewable energy management, and predictive maintenance",
      icon: Zap
    },
    {
      industry: "Smart Cities",
      description: "Infrastructure monitoring, traffic optimization, and public services",
      icon: Building
    },
    {
      industry: "Aerospace",
      description: "Aircraft monitoring, predictive maintenance, and performance optimization",
      icon: Plane
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Digital Twin Platform - Zion Tech Group"
        description="Comprehensive AI-powered digital twin platform for IoT integration, predictive analytics, and asset optimization. Transform operations with virtual twins."
        keywords="AI digital twin, IoT integration, predictive maintenance, asset optimization, virtual twins"
        canonicalUrl="https://ziontechgroup.com/services/AI-Digital-Twin-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Digital{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Twin Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create intelligent virtual representations of your physical assets with our AI-powered digital twin platform. 
              Monitor, predict, and optimize operations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
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
              Transform Asset Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements that revolutionize how organizations manage and optimize their assets
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Digital Twin Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for comprehensive digital twin operations
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Our platform serves diverse industries with specialized digital twin solutions
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your digital twin capabilities
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
                    ? 'border-blue-400/50 scale-105' 
                    : 'border-white/10 hover:border-blue-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Digital%20Twin%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 text-center block"
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
              Ready to Create Your Digital Twins?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Digital Twin Platform can transform your operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Digital%20Twin%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
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