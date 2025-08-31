import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock,
  BarChart3,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  Database,
  Network,
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  Eye,
  MessageCircle
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      description: "Transform your business with intelligent automation and insights",
      services: [
        {
          name: "AI Autonomous Business Intelligence Platform",
          href: "/services/ai-autonomous-business-intelligence-platform",
          description: "Autonomous AI that continuously analyzes data and delivers actionable intelligence",
          price: "From $299/month",
          features: ["Autonomous data analysis", "Predictive analytics", "Real-time dashboards"]
        },
        {
          name: "AI Healthcare Analytics Platform",
          href: "/services/ai-healthcare-analytics-platform",
          description: "AI-powered healthcare analytics for improved patient outcomes",
          price: "From $399/month",
          features: ["AI diagnostics", "Patient monitoring", "HIPAA compliance"]
        },
        {
          name: "AI Cybersecurity Threat Intelligence Platform",
          href: "/services/ai-cybersecurity-threat-intelligence-platform",
          description: "Next-generation AI cybersecurity with real-time threat detection",
          price: "From $499/month",
          features: ["AI threat detection", "Real-time monitoring", "Automated response"]
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      description: "Scalable cloud solutions for modern businesses",
      services: [
        {
          name: "Cloud DevOps Automation",
          href: "/services/cloud-devops",
          description: "Streamline your development and operations with automated cloud solutions",
          price: "From $199/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Optimize cloud costs and financial operations",
          price: "From $299/month",
          features: ["Cost optimization", "Budget management", "ROI analysis"]
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      description: "Protect your business with enterprise-grade security",
      services: [
        {
          name: "Zero Trust Network Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Modern security architecture for the digital age",
          price: "From $599/month",
          features: ["Identity verification", "Access control", "Continuous monitoring"]
        },
        {
          name: "SOC2 Compliance Automation",
          href: "/services/soc2-compliance-automation",
          description: "Automate your compliance processes and maintain SOC2 certification",
          price: "From $399/month",
          features: ["Automated audits", "Policy management", "Evidence collection"]
        }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      description: "Accelerate your digital journey with proven strategies",
      services: [
        {
          name: "Digital Twin Solutions",
          href: "/services/digital-twin",
          description: "Create virtual replicas of your physical systems for optimization",
          price: "From $799/month",
          features: ["Real-time monitoring", "Predictive maintenance", "Performance optimization"]
        },
        {
          name: "Digital Transformation Consulting",
          href: "/services/digital-transformation",
          description: "Strategic guidance for your digital transformation journey",
          price: "From $1,499/month",
          features: ["Strategy development", "Implementation planning", "Change management"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      description: "Stay ahead with cutting-edge technology solutions",
      services: [
        {
          name: "Quantum Computing Solutions",
          href: "/services/quantum-computing-solutions",
          description: "Harness the power of quantum computing for complex problems",
          price: "From $1,999/month",
          features: ["Quantum algorithms", "Hybrid computing", "Optimization solutions"]
        },
        {
          name: "IoT Edge Computing Platform",
          href: "/services/iot-edge",
          description: "Build intelligent IoT solutions with edge computing",
          price: "From $599/month",
          features: ["Edge processing", "Real-time analytics", "Device management"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      description: "Specialized software solutions for niche markets",
      services: [
        {
          name: "Micro CRM Platform",
          href: "/services/micro-crm",
          description: "Customer relationship management tailored for small businesses",
          price: "From $99/month",
          features: ["Contact management", "Sales tracking", "Customer insights"]
        },
        {
          name: "AI Content Optimizer Pro",
          href: "/services/ai-content-optimizer-pro",
          description: "AI-powered content optimization for better engagement",
          price: "From $199/month",
          features: ["Content analysis", "SEO optimization", "Performance tracking"]
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with cutting-edge technology",
      icon: Rocket
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational costs while improving efficiency",
      icon: TrendingUp
    },
    {
      title: "Scalability",
      description: "Grow your business without infrastructure limitations",
      icon: BarChart3
    },
    {
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Zion Tech Group 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Services Showcase
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of AI-powered services, IT solutions, and innovative 
              micro SaaS platforms designed to transform your business in 2025 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
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
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                        <div className="text-cyan-400 font-semibold text-lg mb-4">{service.price}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
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
              Choose from our comprehensive portfolio of services and start your transformation 
              journey today. Our experts are ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our team of experts is here to help you choose the right services and 
              implement solutions that drive real business results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
