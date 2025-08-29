import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Crown,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Analytics Services",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Transform your business with intelligent automation and data-driven insights",
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", description: "Machine Learning & Data Science" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", description: "AI-powered sales automation" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Regulatory compliance automation" },
        { name: "LLM Content Studio", href: "/services/llm-content-studio", description: "AI content generation" },
        { name: "AI Compliance Copilot", href: "/services/ai-compliance-copilot", description: "Advanced compliance solutions" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      description: "Accelerate development and scale your infrastructure with modern cloud solutions",
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", description: "Infrastructure & Automation" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", description: "Cost optimization" },
        { name: "FinOps Advisor", href: "/services/finops-advisor", description: "Financial operations" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      description: "Protect your business with advanced security and compliance solutions",
      services: [
        { name: "AI Compliance Copilot", href: "/services/ai-compliance-copilot", description: "AI-Powered Security" },
        { name: "Zero Trust Architecture", href: "/services/zero-trust-network-architecture", description: "Advanced security" }
      ]
    },
    {
      title: "Digital Solutions",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      description: "Modernize your business with cutting-edge digital transformation services",
      services: [
        { name: "Digital Twin", href: "/services/digital-twin", description: "Simulation & Monitoring" },
        { name: "Digital Transformation", href: "/services/digital-transformation", description: "Business modernization" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", description: "Enterprise infrastructure" },
        { name: "Data Analytics", href: "/services/data-analytics", description: "Business intelligence" }
      ]
    },
    {
      title: "IoT & Edge Computing",
      icon: Cpu,
      color: "from-emerald-600 to-teal-600",
      description: "Connect and optimize your physical world with IoT and edge computing",
      services: [
        { name: "IoT Edge Computing", href: "/services/iot-edge", description: "Smart devices & networks" },
        { name: "IoT & Digital Twin", href: "/services/iot-digital-twin", description: "Connected intelligence" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Crown,
      color: "from-indigo-600 to-purple-600",
      description: "Explore the future with quantum computing and cutting-edge innovations",
      services: [
        { name: "Quantum Computing", href: "/services/quantum-computing", description: "Next-gen computing" },
        { name: "Quantum & Emerging Tech", href: "/services/quantum-emerging-tech", description: "Future technology" },
        { name: "Space Technology", href: "/services/space-tech", description: "Space innovation" }
      ]
    },
    {
      title: "Business Solutions",
      icon: ShoppingCart,
      color: "from-orange-600 to-red-600",
      description: "Scale your business with specialized SaaS and business solutions",
      services: [
        { name: "Micro SaaS", href: "/services/micro-saas", description: "Scalable software solutions" },
        { name: "AI Auto Email Responder", href: "/services/ai-auto-email-responder", description: "Automated communication" },
        { name: "Customer Feedback Surveys", href: "/services/customer-feedback-surveys", description: "Customer insights" }
      ]
    },
    {
      title: "Specialized Services",
      icon: Star,
      color: "from-yellow-600 to-amber-600",
      description: "Industry-specific solutions and specialized consulting services",
      services: [
        { name: "Healthcare Technology", href: "/services/healthcare-tech", description: "AI medicine & diagnostics" },
        { name: "Sustainability", href: "/services/sustainability", description: "Green IT solutions" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions", description: "DeFi & smart contracts" },
        { name: "IT Consulting", href: "/services/it-consulting", description: "Strategic technology guidance" }
      ]
    }
  ];

  const benefits = [
    "Reduce operational costs by 25-40%",
    "Improve efficiency and productivity by 60%",
    "Accelerate time-to-market by 50%",
    "Enhance security and compliance posture",
    "Enable data-driven decision making",
    "Future-proof your technology investments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive technology services including AI, cloud computing, cybersecurity, IoT, and emerging technologies to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Complete Technology Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology services designed to transform your business. 
              From AI and cloud computing to cybersecurity and emerging technologies, 
              we provide end-to-end solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing-guide"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive service portfolio delivers measurable results and 
              positions your business for long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let our expert team help you choose the right services and implement 
              solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}