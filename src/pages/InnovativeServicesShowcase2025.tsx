import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Users, 
  Shield, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Settings,
  Truck,
  BarChart3,
  Eye,
  MessageCircle,
  Target,
  Globe,
  Heart,
  Lock,
  Rocket,
  Cpu,
  Cloud,
  Factory,
  Package,
  Warehouse,
  Factory2,
  Building,
  Car,
  Home,
  City,
  CheckCircle2,
  ArrowUpRight,
  MailIcon,
  Phone,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent automation that learns, adapts, and optimizes workflows in real-time. Boost productivity by 300% while reducing operational costs by 60%.",
      icon: Settings,
      href: "/services/ai-workflow-automation",
      features: [
        "AI-Powered Workflow Intelligence",
        "Smart Automation Triggers", 
        "Visual Workflow Designer",
        "Seamless System Integration",
        "Performance Analytics Dashboard",
        "Enterprise-Grade Security"
      ],
      benefits: ["Save 40+ Hours Weekly", "Increase Efficiency by 300%", "Reduce Costs by 60%"],
      pricing: "Starting at $99/month",
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Transform customer insights into actionable intelligence with AI-powered analytics that predict behavior, optimize experiences, and drive customer loyalty. Increase satisfaction by 45% and reduce churn by 60%.",
      icon: Users,
      href: "/services/ai-customer-experience-analytics",
      features: [
        "AI-Powered Sentiment Analysis",
        "Real-Time Customer Journey Tracking",
        "Predictive Customer Behavior Modeling",
        "Multi-Channel Experience Monitoring",
        "Personalization Engine",
        "Automated Insights & Recommendations"
      ],
      benefits: ["Increase Customer Satisfaction by 45%", "Reduce Customer Churn by 60%", "Boost Customer Lifetime Value by 35%"],
      pricing: "Starting at $149/month",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Revolutionize your supply chain with AI-powered optimization that reduces costs by 25-40%, improves delivery times by 35%, and increases profit margins by 20-30%. Transform complexity into competitive advantage.",
      icon: Truck,
      href: "/services/ai-supply-chain-optimization",
      features: [
        "AI-Powered Demand Forecasting",
        "Intelligent Route Optimization",
        "Global Supply Chain Visibility",
        "Predictive Risk Management",
        "Advanced Analytics Dashboard",
        "Compliance & Sustainability"
      ],
      benefits: ["Reduce Costs by 25-40%", "Improve Delivery Times by 35%", "Increase Profit Margins by 20-30%"],
      pricing: "Starting at $199/month",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const allServices = [
    {
      category: "AI & Automation",
      services: [
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation", description: "Intelligent workflow optimization", price: "$99/month" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics", description: "Customer behavior insights", price: "$149/month" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization", description: "Supply chain intelligence", price: "$199/month" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", description: "Advanced analytics platform", price: "$299/month" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", description: "Sales automation & insights", price: "$199/month" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Regulatory compliance automation", price: "$249/month" }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        { name: "AI Lead Scoring", href: "/services/ai-lead-scoring", description: "ML-powered lead prioritization", price: "$79/month" },
        { name: "Website AI Chatbot", href: "/services/website-ai-chatbot", description: "24/7 customer support", price: "$89/month" },
        { name: "RAG Search", href: "/services/rag-search", description: "AI-powered search with citations", price: "$99/month" },
        { name: "MLOps Pipeline", href: "/services/mlops-pipeline", description: "ML model deployment & monitoring", price: "$199/month" },
        { name: "eCommerce Personalization", href: "/services/ecommerce-personalization", description: "AI-driven recommendations", price: "$149/month" },
        { name: "Returns Management SaaS", href: "/services/returns-management", description: "Streamlined returns processing", price: "$129/month" }
      ]
    },
    {
      category: "Enterprise Solutions",
      services: [
        { name: "AI Enterprise Orchestrator", href: "/services/ai-enterprise-orchestrator", description: "Multi-agent AI coordination", price: "$799/month" },
        { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite", description: "AI-powered threat detection", price: "$599/month" },
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", description: "Next-generation computing", price: "$999/month" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics", description: "Medical AI & diagnostics", price: "$699/month" },
        { name: "Digital Twin Solutions", href: "/services/digital-twin", description: "Simulation & monitoring", price: "$499/month" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", description: "Infrastructure & automation", price: "$399/month" }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovative Services 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI solutions that transform businesses across industries. From workflow automation to supply chain optimization, 
              our innovative services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 inline mr-2" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful AI services that are transforming businesses worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <p className="text-gray-400 text-sm">14-day free trial included</p>
                </div>

                <Link
                  to={service.href}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold text-center hover:from-purple-600 hover:to-blue-700 transition-all duration-300 block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Catalog */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Services Catalog
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across all categories and industries.
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have revolutionized their operations with our innovative AI services. 
              Start your transformation journey today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="text-purple-400 hover:text-purple-300">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MailIcon className="w-6 h-6 text-purple-400 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="mt-8 text-gray-400">
              <p>Visit us at <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">{contactInfo.website}</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}