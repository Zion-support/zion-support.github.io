import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { SEO } from '../../components/SEO';
import { Server, Network, Database, Shield, Zap, Monitor, Wifi, Cloud } from 'lucide-react';
=======
import { 
  Server, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Building2,
  Cpu,
  HardDrive,
  Cloud,
  Activity,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Monitor
} from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8

const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
<<<<<<< HEAD
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions",
      features: ["Network Design", "Wireless Solutions", "VPN Implementation", "Network Security"],
      icon: Network
    },
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure and management services",
      features: ["Server Setup", "Virtualization", "Performance Optimization", "Backup Solutions"],
      icon: Server
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure for growing businesses",
      features: ["Storage Design", "Data Backup", "Disaster Recovery", "Cloud Storage"],
      icon: Database
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security infrastructure protection",
      features: ["Firewall Management", "Intrusion Detection", "Access Control", "Security Monitoring"],
      icon: Shield
=======
      icon: <Network className="w-8 h-8" />,
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions for enterprise environments",
      features: ["Network Design & Architecture", "Wireless Solutions", "VPN Implementation", "Network Security", "Performance Optimization", "24/7 Monitoring"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server Management",
      description: "Comprehensive server infrastructure and management services for optimal performance",
      features: ["Server Setup & Configuration", "Virtualization Solutions", "Performance Optimization", "Backup & Recovery", "Capacity Planning", "Maintenance Services"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "Scalable storage infrastructure designed for growing business needs",
      features: ["Storage Design & Planning", "Data Backup Systems", "Disaster Recovery", "Cloud Storage Integration", "Performance Tuning", "Capacity Management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Infrastructure",
      description: "Multi-layered security infrastructure to protect your digital assets",
      features: ["Firewall Management", "Intrusion Detection", "Access Control Systems", "Security Monitoring", "Compliance Management", "Incident Response"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Hybrid and multi-cloud infrastructure solutions for modern businesses",
      features: ["Cloud Migration", "Multi-Cloud Management", "Hybrid Solutions", "Cost Optimization", "Security & Compliance", "Performance Monitoring"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoring & Management",
      description: "Proactive monitoring and management of your entire infrastructure",
      features: ["24/7 System Monitoring", "Performance Analytics", "Alert Management", "Capacity Planning", "Automated Responses", "Reporting & Insights"]
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
    }
  ];

  const benefits = [
    "99.9% uptime guarantee with redundant systems",
    "Scalable solutions that grow with your business",
    "Proactive monitoring and preventive maintenance",
    "Expert support from certified engineers",
    "Reduced operational costs and improved efficiency",
    "Enhanced security and compliance posture"
  ];

  const infrastructureAreas = [
<<<<<<< HEAD
    { area: "Hardware Infrastructure", solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] },
    { area: "Software Infrastructure", solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] },
    { area: "Network Infrastructure", solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] },
    { area: "Storage Infrastructure", solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] }
  ];

  const keyFeatures = [
    { name: "High Availability", icon: "🔄", description: "99.9% uptime guarantee with redundancy" },
    { name: "Scalable Solutions", icon: "📈", description: "Infrastructure that grows with your business" },
    { name: "Proactive Monitoring", icon: "👁️", description: "24/7 monitoring and alerting" },
    { name: "Expert Support", icon: "👨‍💻", description: "Certified engineers and technicians" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="IT Infrastructure - Zion Tech Group"
        description="Build a robust and scalable IT infrastructure with our expert solutions and management services."
        keywords="IT infrastructure, server management, network design, data centers, infrastructure security"
        canonical="https://ziontechgroup.com/services/infrastructure"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build a solid foundation for your business with enterprise-grade IT infrastructure. 
              Our comprehensive services ensure reliability, scalability, and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Infrastructure Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Infrastructure Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to build and maintain your IT foundation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all infrastructure domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {area.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your IT Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our infrastructure experts design and implement a robust IT foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
=======
    {
      title: "Hardware Infrastructure",
      solutions: ["Servers & Workstations", "Storage Systems", "Network Equipment", "Data Center Hardware"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Software Infrastructure",
      solutions: ["Operating Systems", "Virtualization Platforms", "Database Systems", "Management Tools"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Network Infrastructure",
      solutions: ["LAN/WAN Setup", "Wireless Networks", "VPN Solutions", "Network Security"],
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: "Storage Infrastructure",
      solutions: ["Storage Arrays", "Backup Systems", "Cloud Storage", "Data Protection"],
      icon: <HardDrive className="w-6 h-6" />
    }
  ];

  const technologies = [
    "VMware & Hyper-V",
    "Cisco & Juniper Networks",
    "Microsoft Server Stack",
    "Linux & Open Source",
    "Cloud Platforms (AWS, Azure, GCP)",
    "Storage Technologies (SAN, NAS, DAS)",
    "Network Security (Firewalls, IDS/IPS)",
    "Monitoring Tools (Nagios, Zabbix, PRTG)"
  ];

  const industries = [
    "Financial Services",
    "Healthcare & Life Sciences",
    "Manufacturing & Logistics",
    "Retail & E-commerce",
    "Education & Research",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Server className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            IT Infrastructure Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build a robust, scalable, and secure IT infrastructure that powers your business growth. 
            Our expert team delivers enterprise-grade solutions with 99.9% uptime guarantee.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              Get Infrastructure Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From network design to cloud migration, we provide end-to-end infrastructure services 
              that ensure your business operates at peak efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
              >
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Infrastructure Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven approach and deep expertise deliver measurable results and lasting value for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Infrastructure Areas We Cover
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage across all aspects of modern IT infrastructure to ensure 
              your business has a solid technological foundation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-blue-400" />
                Technologies We Use
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-200 font-medium text-sm">{technology}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-400" />
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-200 font-medium text-sm">{industry}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Infrastructure?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our infrastructure services can provide the solid foundation 
            your business needs to scale and succeed.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
    </div>
  );
};

export default ITInfrastructure;