import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Truck,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Analytics Services",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      services: [
        {
          name: "AI Business Intelligence",
          href: "/services/ai-business-intelligence",
          description: "Machine Learning & Data Science solutions for business insights",
          price: "From $799/month",
          features: ["Predictive Analytics", "Data Visualization", "Machine Learning Models"]
        },
        {
          name: "AI Sales Copilot",
          href: "/services/ai-sales-copilot",
          description: "AI-powered sales automation and optimization",
          price: "From $599/month",
          features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups"]
        },
        {
          name: "AI Compliance Assistant",
          href: "/services/ai-compliance-assistant",
          description: "Regulatory compliance automation and monitoring",
          price: "From $699/month",
          features: ["Compliance Monitoring", "Risk Assessment", "Automated Reporting"]
        },
        {
          name: "LLM Content Studio",
          href: "/services/llm-content-studio",
          description: "AI content generation and management platform",
          price: "From $399/month",
          features: ["Content Generation", "Brand Consistency", "Multi-language Support"]
        },
        {
          name: "AI Workflow Automation",
          href: "/services/ai-workflow-automation",
          description: "Intelligent process automation and optimization",
          price: "From $299/month",
          features: ["Process Mapping", "Smart Automation", "Performance Analytics"]
        },
        {
          name: "AI Customer Experience Platform",
          href: "/services/ai-customer-experience-platform",
          description: "AI-powered customer experience management",
          price: "From $399/month",
          features: ["Personalization", "Sentiment Analysis", "Omnichannel Support"]
        },
        {
          name: "AI Supply Chain Optimization",
          href: "/services/ai-supply-chain-optimization",
          description: "Intelligent supply chain management and optimization",
          price: "From $599/month",
          features: ["Demand Forecasting", "Route Optimization", "Risk Management"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      services: [
        {
          name: "Cloud DevOps",
          href: "/services/cloud-devops",
          description: "Infrastructure & Automation solutions",
          price: "From $899/month",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"]
        },
        {
          name: "Cloud FinOps Optimizer",
          href: "/services/cloud-finops-optimizer",
          description: "Cloud cost optimization and management",
          price: "From $699/month",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Financial operations optimization",
          price: "From $599/month",
          features: ["Financial Planning", "Cost Control", "ROI Analysis"]
        }
      ]
    },
    {
      name: "Digital Solutions",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      description: "End-to-end digital transformation and modernization",
      services: [
        {
          name: "Digital Twin",
          href: "/services/digital-twin",
          description: "Simulation & Monitoring solutions",
          price: "From $1,299/month",
          features: ["Real-time Monitoring", "Predictive Maintenance", "3D Visualization"]
        },
        {
          name: "IT Infrastructure",
          href: "/services/it-infrastructure",
          description: "Enterprise infrastructure solutions",
          price: "From $999/month",
          features: ["Network Design", "Security Implementation", "Performance Optimization"]
        },
        {
          name: "Data Analytics",
          href: "/services/data-analytics",
          description: "Business intelligence and analytics",
          price: "From $799/month",
          features: ["Data Warehousing", "Business Intelligence", "Advanced Analytics"]
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      description: "Advanced security protocols and compliance solutions",
      services: [
        {
          name: "AI Compliance Copilot",
          href: "/services/ai-compliance-copilot",
          description: "AI-Powered Security solutions",
          price: "From $899/month",
          features: ["Threat Detection", "Compliance Monitoring", "Incident Response"]
        },
        {
          name: "Zero Trust Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Advanced security architecture",
          price: "From $1,199/month",
          features: ["Identity Verification", "Access Control", "Network Segmentation"]
        }
      ]
    },
    {
      name: "Industry Solutions",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      description: "Specialized solutions for specific industries",
      services: [
        {
          name: "Healthcare Tech",
          href: "/services/healthcare-tech",
          description: "AI Medicine & Diagnostics",
          price: "From $1,499/month",
          features: ["Medical Imaging", "Patient Data Management", "Clinical Decision Support"]
        },
        {
          name: "Sustainability",
          href: "/services/sustainability",
          description: "Green IT Solutions",
          price: "From $799/month",
          features: ["Energy Optimization", "Carbon Tracking", "Green Computing"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-indigo-600 to-purple-600",
      description: "Productized SaaS solutions for specific business needs",
      services: [
        {
          name: "AI Auto Email Responder",
          href: "/services/ai-auto-email-responder",
          description: "Faster replies, CRM logging",
          price: "From $199/month",
          features: ["Smart Responses", "CRM Integration", "Analytics Dashboard"]
        },
        {
          name: "Customer Feedback Surveys",
          href: "/services/mobile-feedback-surveys",
          description: "NPS/CSAT with AI insights",
          price: "From $149/month",
          features: ["Survey Creation", "AI Analysis", "Actionable Insights"]
        }
      ]
    }
  ];

  const benefits = [
    "Reduce operational costs by 20-40%",
    "Improve efficiency and productivity",
    "Enhance customer experience",
    "Ensure compliance and security",
    "Scale operations intelligently",
    "Gain competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Services Overview
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of AI-powered services, IT solutions, and micro SaaS platforms 
              designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with a technology partner that understands your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our wide range of services designed to meet every business need.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 hover:border-blue-500 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right services and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to explore our services? Our experts are here to help you find the perfect solutions for your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select Service Category</option>
                    <option value="ai-analytics">AI & Analytics</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="digital-solutions">Digital Solutions</option>
                    <option value="cybersecurity">Cybersecurity & Compliance</option>
                    <option value="industry-solutions">Industry Solutions</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your business needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Request Consultation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}