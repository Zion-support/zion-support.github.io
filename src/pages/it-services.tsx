import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {

  Server, 
  Shield, 
  Cloud, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Cpu,
  Wifi,
  ShieldCheck,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge
} from 'lucide-react';

export default function ITServices() {

  const itServiceCategories = [
    {

      name: "IT Infrastructure",
      description: "Enterprise-grade infrastructure solutions for modern businesses",
      icon: Server,
      href: "/revolutionary-services-showcase-2034",
      count: 20,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Infrastructure", "Data Center Management", "Network Security", "Server Management"]
    },
    {

      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: Shield,
      href: "/revolutionary-services-showcase-2034",
      count: 15,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {

      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      href: "/revolutionary-services-showcase-2034",
      count: 18,
      color: "from-cyan-400 to-blue-500",
      services: ["Cloud Migration", "Multi-cloud Management", "DevOps Automation", "Cloud Security"]
    },
    {

      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation",
      icon: Target,
      href: "/revolutionary-services-showcase-2034",
      count: 25,
      color: "from-green-400 to-emerald-500",
      services: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
    }
  ];

  const featuredServices = [
    {

      title: "Quantum-Edge Computing Infrastructure",
      description: "Revolutionary infrastructure that combines quantum computing with edge computing for ultra-fast processing",
      price: "From $49,999/month",
      features: ["Quantum Processing", "Edge AI", "Ultra-low Latency"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {

      title: "AI-Powered DevOps Automation Platform",
      description: "Intelligent DevOps platform that uses AI to automate deployment, testing, and infrastructure management",
      price: "From $8,999/month",
      features: ["AI Deployment", "Predictive Monitoring", "Infrastructure Automation"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-blue-400 to-indigo-500"
    },
    {

      title: "Zero-Trust Network Security Architecture",
      description: "Comprehensive zero-trust security solution with continuous verification and threat protection",
      price: "From $15,999/month",
      features: ["Continuous Verification", "Micro-segmentation", "Threat Prevention"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-red-400 to-pink-500"
    }
  ];

  const contactInfo = {

    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Discover comprehensive IT services and solutions from Zion Tech Group. From infrastructure to cybersecurity, we provide enterprise-grade technology solutions." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud solutions, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              IT Services
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {' '}of Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive IT services. From infrastructure management 
              to cybersecurity and cloud solutions, we provide the technology foundation your business needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/revolutionary-services-showcase-2034"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore IT Services
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📞</div>
              <p className="text-white font-semibold">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">✉️</div>
              <p className="text-white font-semibold">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">🌐</div>
              <p className="text-white font-semibold">{contactInfo.website}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📍</div>
              <p className="text-white font-semibold">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">IT Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {itServiceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-400">{category.count} services available</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 ${

                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-blue-400 mb-2">{service.price}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our comprehensive IT services. 
              Contact us today to learn how we can help you achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative IT technology solutions for the future.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">IT Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Infrastructure</li>
                <li>Cybersecurity</li>
                <li>Cloud Solutions</li>
                <li>Digital Transformation</li>
                <li>DevOps</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}