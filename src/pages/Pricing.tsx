import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  TrendingUp,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Database,
  Cloud,
  Eye,
  Brain,
  Network,
  Rocket
} from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI Services",
        "Standard Support",
        "5 User Licenses",
        "Basic Analytics",
        "Email Support",
        "Monthly Updates"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Advanced AI Services",
        "Priority Support",
        "25 User Licenses",
        "Advanced Analytics",
        "Phone & Email Support",
        "Weekly Updates",
        "Custom Integrations",
        "Training Sessions"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Full AI Suite",
        "24/7 Dedicated Support",
        "Unlimited Users",
        "Custom Analytics",
        "Dedicated Account Manager",
        "Daily Updates",
        "Custom Development",
        "On-site Training",
        "SLA Guarantee",
        "White-label Solutions"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      price: "$500",
      period: "/month",
      description: "Custom AI model training and optimization",
      features: ["Model customization", "Performance tuning", "Regular updates"]
    },
    {
      name: "Data Analytics",
      price: "$300",
      period: "/month",
      description: "Advanced data analytics and reporting",
      features: ["Custom dashboards", "Real-time insights", "Export capabilities"]
    },
    {
      name: "Security Services",
      price: "$400",
      period: "/month",
      description: "Enhanced security and compliance features",
      features: ["Advanced encryption", "Compliance reporting", "Security audits"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your business needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-400/50 scale-105 shadow-2xl shadow-purple-500/25' 
                    : 'border-gray-400/20 hover:border-gray-400/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-gray-400/30 hover:border-gray-400/50'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our premium add-on services and specialized solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-2xl font-bold text-white">{addon.price}</span>
                    <span className="text-gray-400 ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white border border-gray-400/30 hover:border-gray-400/50 rounded-xl font-semibold text-center transition-all duration-300 text-sm"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business and start transforming your operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
