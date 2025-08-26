import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Code, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  Cpu,
  Database,
  Lock,
  Cloud,
  Zap,
  Rocket,
  Leaf,
  Eye,
  Bot,
  Globe2
} from 'lucide-react';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const coreServices = [
    {
      title: "Cutting-Edge Innovations",
      description: "Revolutionary technology solutions for 2025",
      icon: Zap,
      link: "/innovative-services",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      link: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Cpu,
      link: "/enhanced-services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro SAAS Platform",
      description: "Innovative software-as-a-service solutions",
      icon: Code,
      link: "/micro-saas",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const innovativeServices = [
    {
      title: "AI Business Automation Suite",
      description: "Complete business process automation using advanced AI algorithms",
      icon: "🤖",
      category: "AI & Automation",
      price: "$4,999/month",
      link: "/innovative-services"
    },
    {
      title: "Quantum Computing as a Service",
      description: "Access to quantum computing power for complex problem solving",
      icon: "⚛️",
      category: "Quantum Computing",
      price: "$15,000/month",
      link: "/innovative-services"
    },
    {
      title: "Enterprise Blockchain Platform",
      description: "Scalable blockchain infrastructure for enterprise applications",
      icon: "🔗",
      category: "Blockchain",
      price: "$8,999/month",
      link: "/innovative-services"
    },
    {
      title: "IoT Edge Computing Platform",
      description: "Comprehensive IoT platform with edge computing capabilities",
      icon: "🌐",
      category: "IoT & Edge",
      price: "$3,999/month",
      link: "/innovative-services"
    },
    {
      title: "Zero Trust Cybersecurity",
      description: "Advanced cybersecurity with AI-powered threat detection",
      icon: "🛡️",
      category: "Cybersecurity",
      price: "$6,999/month",
      link: "/innovative-services"
    },
    {
      title: "Digital Twin Technology",
      description: "Virtual replicas for simulation and optimization",
      icon: "👁️",
      category: "Digital Twin",
      price: "$12,000/month",
      link: "/innovative-services"
    }
  ];

  const microSaasServices = [
    {
      title: "AI Content Generator",
      description: "Advanced AI-powered content creation",
      price: "From $79/month",
      features: ["Multi-language support", "SEO optimization", "Brand consistency"]
    },
    {
      title: "Smart Social Media Scheduler",
      description: "AI-powered social media management",
      price: "From $49/month",
      features: ["Multi-platform posting", "Optimal timing", "Analytics dashboard"]
    },
    {
      title: "Invoice Automation Suite",
      description: "Automated invoice processing",
      price: "From $89/month",
      features: ["OCR scanning", "Approval workflows", "Payment tracking"]
    },
    {
      title: "AI Project Management",
      description: "Intelligent project management",
      price: "From $129/month",
      features: ["Task prioritization", "Resource optimization", "Risk prediction"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, blockchain, IoT, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading-edge technology solutions that drive innovation and transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovative Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized technology solutions for emerging industries and cutting-edge applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Innovations Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge Innovations 2025
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our revolutionary technology solutions that are reshaping industries and driving the future of business
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 text-cyan-400">
                <span className="font-semibold">9</span> Technology Categories
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 text-purple-400">
                <span className="font-semibold">99.9%</span> Uptime Guarantee
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 text-green-400">
                <span className="font-semibold">300-500%</span> ROI Promise
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
                  <div className="text-lg font-bold text-green-400">{service.price}</div>
                </div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:text-cyan-300"
                >
                  Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/innovative-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Cutting-Edge Innovations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SaaS Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy SaaS solutions that scale with your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
