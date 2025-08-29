import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Rocket,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  Globe,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calculator,
  Download,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function PricingGuide() {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,500",
      period: "per project",
      features: [
        "Basic AI implementation",
        "Standard support",
        "Documentation",
        "30-day warranty",
        "Email support"
      ],
      popular: false,
      color: "from-slate-600 to-slate-700",
      icon: Zap
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$8,500",
      period: "per project",
      features: [
        "Advanced AI solutions",
        "Priority support",
        "Custom integrations",
        "90-day warranty",
        "Phone & email support",
        "Training sessions",
        "Performance monitoring"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500",
      icon: Star
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "$25,000",
      period: "per project",
      features: [
        "Full AI transformation",
        "24/7 dedicated support",
        "Custom development",
        "1-year warranty",
        "Dedicated account manager",
        "On-site training",
        "Advanced analytics",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600",
      icon: Rocket
    }
  ];

  const servicePricing = [
    {
      category: "AI & Analytics",
      services: [
        {
          name: "AI Business Intelligence",
          price: "$5,000 - $15,000",
          description: "AI-powered analytics and insights",
          features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"]
        },
        {
          name: "AI Sales Copilot",
          price: "$3,500 - $8,000",
          description: "Sales automation and optimization",
          features: ["Lead Scoring", "Sales Forecasting", "CRM Integration"]
        },
        {
          name: "AI Compliance Assistant",
          price: "$7,500 - $20,000",
          description: "Regulatory compliance automation",
          features: ["Risk Assessment", "Compliance Monitoring", "Audit Trails"]
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      services: [
        {
          name: "Cloud DevOps",
          price: "$8,000 - $25,000",
          description: "Infrastructure and automation",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
        },
        {
          name: "Cloud FinOps Optimizer",
          price: "$4,500 - $12,000",
          description: "Cost optimization and management",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management"]
        }
      ]
    },
    {
      category: "Cybersecurity",
      services: [
        {
          name: "AI Compliance Copilot",
          price: "$9,500 - $30,000",
          description: "AI-powered security solutions",
          features: ["Threat Detection", "Compliance Monitoring", "Incident Response"]
        },
        {
          name: "Zero Trust Architecture",
          price: "$18,000 - $50,000",
          description: "Advanced security framework",
          features: ["Identity Verification", "Access Control", "Network Segmentation"]
        }
      ]
    }
  ];

  const addOnServices = [
    {
      name: "Training & Workshops",
      price: "$500 - $2,000",
      description: "Custom training sessions for your team",
      duration: "1-3 days"
    },
    {
      name: "24/7 Support",
      price: "$1,500/month",
      description: "Round-the-clock technical support",
      duration: "Monthly"
    },
    {
      name: "Custom Development",
      price: "$150/hour",
      description: "Additional custom features and integrations",
      duration: "Per hour"
    },
    {
      name: "Performance Optimization",
      price: "$2,000 - $8,000",
      description: "System optimization and performance tuning",
      duration: "Per project"
    }
  ];

  const faqItems = [
    {
      question: "What factors affect the final project cost?",
      answer: "Project complexity, timeline, custom requirements, integrations, and ongoing support needs all influence the final cost. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. Typically, we require 30% upfront, 40% at project milestone, and 30% upon completion."
    },
    {
      question: "What's included in the warranty?",
      answer: "Our warranty covers defects in workmanship and functionality issues. We provide bug fixes and necessary adjustments during the warranty period at no additional cost."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your service level at any time. We'll prorate the costs and ensure a smooth transition to the new service tier."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing Guide - Zion Tech Group"
        description="Transparent pricing for our comprehensive technology services. Get detailed cost breakdowns and find the perfect solution for your budget."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pricing
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for our comprehensive technology services. Find the perfect solution that fits your budget and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <a
                href="#pricing-tiers"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div id="pricing-tiers" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the service tier that best matches your business requirements and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                tier.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-slate-700'
              } transition-all duration-300 hover:transform hover:scale-105 h-full`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 mb-6">{tier.description}</p>
                <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                <div className="text-slate-400 mb-8">{tier.period}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Pricing Details */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Service Pricing</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Detailed pricing for our core services. All prices are estimates and may vary based on project requirements.
          </p>
        </motion.div>

        <div className="space-y-12">
          {servicePricing.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                    <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-slate-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-on Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Additional Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enhance your project with these optional add-on services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 text-center"
            >
              <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
              <div className="text-xl font-bold text-cyan-400 mb-2">{service.price}</div>
              <p className="text-slate-300 text-sm mb-3">{service.description}</p>
              <div className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded-full inline-block">
                {service.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Common questions about our pricing and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
              <p className="text-slate-300">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Contact us for a custom quote tailored to your specific project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Proposal
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-400">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-400">info@ziontechgroup.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400">San Francisco, CA</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}