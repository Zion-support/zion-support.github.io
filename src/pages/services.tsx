import React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { 
  Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, 
  Zap, Shield, FileText, BarChart3, Server, Cloud, Users, Building, 
  Globe, Lock, TrendingUp, Code, Network, Smartphone, Monitor, 
  BarChart, PieChart, LineChart, Activity, Star, Rocket, Lightbulb, 
  Workflow, Cpu, Settings
} from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      name: "AI Services",
      description: "Advanced artificial intelligence solutions for business automation and intelligence",
      icon: Brain,
      count: 25,
      color: "from-purple-400 to-pink-500",
      href: "/ai-services",
      solutions: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Automation", "Intelligent Systems"]
    },
    {
      name: "Micro SaaS",
      description: "Innovative software-as-a-service platforms for modern businesses",
      icon: Cloud,
      count: 18,
      color: "from-blue-400 to-cyan-500",
      href: "/micro-saas",
      solutions: ["Business Process SaaS", "Industry-Specific Solutions", "Enterprise Platforms", "AI-Powered SaaS", "Blockchain Solutions", "IoT Platforms"]
    },
    {
      name: "IT Services",
      description: "Comprehensive IT infrastructure and technology solutions",
      icon: Server,
      count: 22,
      color: "from-green-400 to-emerald-500",
      href: "/it-services",
      solutions: ["Cloud Migration", "Cybersecurity", "Data Analytics", "DevOps", "Network Infrastructure", "Digital Transformation"]
    },
    {
      name: "Emerging Technologies",
      description: "Cutting-edge technologies including quantum computing and space tech",
      icon: Rocket,
      count: 15,
      color: "from-yellow-400 to-orange-500",
      href: "/emerging-tech",
      solutions: ["Quantum Computing", "Blockchain", "IoT", "Edge Computing", "Space Technology", "Green Tech"]
    }
  ]

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      price: "From $2,999/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration"],
      href: "/services/ai-business-intelligence",
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate to the cloud with our comprehensive migration services",
      price: "From $15,000",
      features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management"],
      href: "/services/cloud-migration",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "AI-Powered Micro CRM",
      description: "Intelligent customer relationship management for small to medium businesses",
      price: "From $299/month",
      features: ["AI Lead Scoring", "Automated Follow-ups", "Predictive Analytics", "Integration APIs", "Mobile App", "Custom Dashboards"],
      href: "/services/micro-crm",
      color: "from-green-400 to-emerald-500"
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299/mo",
      details: ["Up to 10 users", "Basic features", "Email support", "99.5% SLA"]
    },
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    },
    {
      name: "Enterprise",
      price: "$1,999/mo",
      details: ["Unlimited users", "Custom AI models", "Full services suite", "24/7 dedicated support"]
    }
  ]

  const benefits = [
    {
      title: "Performance Optimization",
      description: "AI-powered optimization that improves efficiency and reduces costs by up to 40%",
      icon: Zap
    },
    {
      title: "Scalable Solutions",
      description: "Cloud-native architecture that scales with your business growth and demands",
      icon: TrendingUp
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and 24/7 threat monitoring",
      icon: Shield
    }
  ]

  const industries = [
    "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Government"
  ]

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive technology services including AI solutions, micro SaaS platforms, and IT services. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="technology services, AI solutions, micro SaaS, IT services, cloud migration, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Database className="w-4 h-4 mr-2" />
                AI-Powered Services Intelligence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Services Platform</h1>
              <p className="text-indigo-100 text-xl">
                Transform your business operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions across multiple domains to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-gray-500 mb-4">{category.count} Solutions Available</div>
                  <ul className="space-y-1 mb-6">
                    {category.solutions.slice(0, 3).map((solution, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={category.href}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors inline-flex items-center justify-center font-semibold text-sm"
                  >
                    Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular solutions trusted by leading organizations worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {service.popular && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="text-lg font-semibold mb-2">{tier.name}</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-4">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600">Why choose Zion Tech Group for your technology needs</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-3">
                    <benefit.icon className="w-6 h-6 text-indigo-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions tailored for your industry</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-indigo-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                  </div>
                  <p className="text-gray-600">Comprehensive technology solutions tailored for {industry.toLowerCase()}.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-indigo-100 text-xl mb-8">
                Get started with our comprehensive technology solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center font-semibold"
                >
                  Call Now <Phone className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="text-sm text-indigo-200">
                <p>Phone: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
