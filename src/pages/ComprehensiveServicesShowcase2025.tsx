import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Truck, 
  TrendingUp, 
  Zap, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Database,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Target,
  Server,
  Network,
  Code,
  Search,
  MapPin,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Cpu,
  Atom,
  Cloud,
  Lock,
  Smartphone,
  Leaf,
  Satellite,
  ShoppingCart,
  Heart,
  Truck as TruckIcon,
  DollarSign as DollarSignIcon,
  BookOpen,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Home,
  User,
  Settings,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence Platform",
      description: "Transform your data into actionable intelligence with our AI-powered analytics platform",
      href: "/services/ai-business-intelligence-platform",
      category: "AI & Analytics",
      pricing: "From $299/month",
      features: ["AI-Powered Analytics", "Predictive Analytics", "Real-time Dashboards", "User Behavior Analysis"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Intelligence",
      description: "Stay ahead of cyber threats with real-time AI-powered threat detection and response",
      href: "/services/ai-cybersecurity-threat-intelligence-platform",
      category: "Cybersecurity",
      pricing: "From $499/month",
      features: ["AI-Powered Threat Detection", "Real-time Monitoring", "Predictive Intelligence", "Automated Response"]
    },
    {
      icon: Truck,
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with AI-powered demand forecasting and route optimization",
      href: "/services/ai-supply-chain-optimization-platform",
      category: "Supply Chain",
      pricing: "From $399/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      services: [
        "AI Business Intelligence Platform",
        "AI Content Creation Studio",
        "AI Healthcare Analytics",
        "AI Financial Trading Platform",
        "AI Customer Experience Analytics"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      services: [
        "AI Cybersecurity Threat Intelligence",
        "Zero Trust Network Access",
        "Security Headers & CSP",
        "Incident Response Platform",
        "Advanced Threat Hunting"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Supply Chain & Logistics",
      icon: Truck,
      services: [
        "AI Supply Chain Optimization",
        "IoT Edge Computing",
        "Digital Twin Platform",
        "Predictive Maintenance",
        "Route Optimization"
      ],
      color: "from-green-600 to-blue-600"
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      services: [
        "Cloud DevOps Automation",
        "FinOps Advisor",
        "Cloud Migration",
        "Multi-Cloud Management",
        "Edge Computing Platform"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      name: "Quantum Technology",
      icon: Atom,
      services: [
        "Quantum AI Platform",
        "Quantum Computing as a Service",
        "Quantum Machine Learning",
        "Quantum Trading Platform",
        "Quantum Security"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Emerging Technologies",
      icon: Rocket,
      services: [
        "Space Technology Platform",
        "Blockchain Solutions",
        "Sustainable Technology",
        "Green IT Solutions",
        "Decentralized Identity"
      ],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI analytics",
        "Standard support",
        "Core features",
        "Email reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Real-time analytics",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive Services Showcase 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered services, cybersecurity solutions, and innovative 
              micro SAAS platforms designed to transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Services
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-blue-400 font-semibold mb-4">{service.pricing}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services across all major domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-300 text-sm">
                      • {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
