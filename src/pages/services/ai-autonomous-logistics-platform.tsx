import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  MapPin,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  Activity,
  Target,
  Rocket,
  Brain,
  Network,
  Satellite,
  Smartphone,
  Monitor,
  Server,
  Workflow,
  BarChart,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

const AIAutonomousLogisticsPlatform = () => {
  const features = [
    {
      title: "AI-Powered Route Optimization",
      description: "Intelligent route planning using machine learning algorithms that consider traffic, weather, fuel costs, and delivery windows",
      icon: Route,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Autonomous Fleet Management",
      description: "Real-time monitoring and control of autonomous vehicles with predictive maintenance and safety protocols",
      icon: Truck,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting for demand, inventory optimization, and supply chain disruptions using AI models",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Warehouse Automation",
      description: "AI-driven warehouse management with robotic picking, sorting, and inventory tracking",
      icon: Package,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-time Tracking & Visibility",
      description: "End-to-end shipment tracking with IoT sensors and blockchain verification for transparency",
      icon: Eye,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Sustainability Optimization",
      description: "Carbon footprint reduction through eco-friendly routing and electric vehicle optimization",
      icon: Globe,
      color: "from-teal-500 to-green-500"
    }
  ];

  const benefits = [
    "Reduce logistics costs by up to 30%",
    "Improve delivery accuracy by 95%",
    "Cut carbon emissions by 40%",
    "Increase fleet utilization by 25%",
    "Reduce delivery time by 35%",
    "Minimize human error by 90%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "For small logistics companies",
      features: [
        "AI Route Optimization (up to 50 vehicles)",
        "Basic Fleet Management",
        "Real-time Tracking",
        "Mobile App Access",
        "Email Support",
        "Basic Analytics Dashboard"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "For growing logistics operations",
      features: [
        "Everything in Starter",
        "AI Route Optimization (up to 200 vehicles)",
        "Advanced Fleet Management",
        "Predictive Analytics",
        "Warehouse Automation",
        "API Access",
        "Priority Support",
        "Advanced Analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Everything in Professional",
        "Unlimited Vehicles",
        "Custom AI Models",
        "White-label Solutions",
        "Dedicated Support",
        "Custom Integrations",
        "On-premise Deployment",
        "SLA Guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Automated order processing and delivery optimization for online retailers",
      icon: Package,
      metrics: "40% faster delivery, 25% cost reduction"
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Just-in-time inventory management and supplier coordination",
      icon: Factory,
      metrics: "30% inventory reduction, 50% faster response"
    },
    {
      title: "Healthcare Logistics",
      description: "Critical medical supply delivery with temperature monitoring",
      icon: Heart,
      metrics: "99.9% delivery accuracy, 60% faster response"
    },
    {
      title: "Cold Chain Management",
      description: "Temperature-controlled logistics for perishable goods",
      icon: Snowflake,
      metrics: "95% quality preservation, 35% cost savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
              <Truck className="w-4 h-4 mr-2" />
              Revolutionary Logistics Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Logistics Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your logistics operations with AI-powered automation, predictive analytics, 
              and autonomous fleet management. Reduce costs, improve efficiency, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Revolutionary Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Modern Logistics
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with industry expertise 
              to deliver unprecedented efficiency and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Business Outcomes
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Flexible Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Every Business
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your logistics needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Proven Success Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Industries
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.metrics}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Logistics Operations?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join leading companies that have already revolutionized their logistics with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+1 302 464 0950" className="text-blue-400 hover:text-blue-300">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <MapPinIcon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-purple-400">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Missing icon components
const Factory = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Snowflake = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default AIAutonomousLogisticsPlatform;