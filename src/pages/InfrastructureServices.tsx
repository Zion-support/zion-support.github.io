import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Database, 
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Cpu,
  HardDrive
} from 'lucide-react';
export default function InfrastructureServices() {
  const infrastructureServices = [
    {
      title: "Server Management",
      description: "Comprehensive server administration, monitoring, and optimization services",
      features: [
        "Server Provisioning",
        "Performance Monitoring",
        "Backup & Recovery",
        "Security Hardening"
      ],
      icon: Server,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network solutions",
      features: [
        "Network Design",
        "VPN Solutions",
        "Load Balancing",
        "Traffic Management"
      ],
      icon: Network,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Administration",
      description: "Database design, optimization, and management across multiple platforms",
      features: [
        "Database Design",
        "Performance Tuning",
        "Backup Strategies",
        "High Availability"
      ],
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure and data management solutions",
      features: [
        "SAN/NAS Setup",
        "Data Archiving",
        "Disaster Recovery",
        "Storage Optimization"
      ],
      icon: HardDrive,
      color: "from-orange-500 to-red-500"
    }
  ];
  const infrastructureTypes = [
    {
      type: "On-Premises",
      description: "Traditional infrastructure within your data center",
      benefits: ["Full Control", "Customization", "Security", "Compliance"],
      icon: "🏢"
    },
    {
      type: "Cloud Infrastructure",
      description: "Scalable cloud-based infrastructure solutions",
      benefits: ["Scalability", "Cost Efficiency", "Global Reach", "Automation"],
      icon: "☁️"
    },
    {
      type: "Hybrid Infrastructure",
      description: "Combination of on-premises and cloud solutions",
      benefits: ["Flexibility", "Optimization", "Risk Mitigation", "Cost Control"],
      icon: "🔄"
    },
    {
      type: "Edge Infrastructure",
      description: "Distributed infrastructure for low-latency applications",
      benefits: ["Low Latency", "Local Processing", "Bandwidth Optimization", "Real-time"],
      icon: "🌐"
    }
  ];
  const benefits = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized infrastructure for maximum efficiency and speed"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "99.9% uptime with redundant systems and failover"
    },
    {
      icon: Cpu,
      title: "Scalability",
      description: "Grow your infrastructure as your business expands"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 monitoring and support across all time zones"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              IT Infrastructure Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Robust and scalable infrastructure solutions to power your business operations
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From server management to network infrastructure, database administration to storage solutions, 
              we provide comprehensive IT infrastructure services that ensure reliability and performance.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Infrastructure Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed for enterprise reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Infrastructure Types Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the infrastructure solution that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{type.type}</h3>
                <p className="text-gray-400 mb-4 text-sm">{type.description}</p>
                
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Infrastructure Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure solutions backed by expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Robust Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our infrastructure services can support your business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}