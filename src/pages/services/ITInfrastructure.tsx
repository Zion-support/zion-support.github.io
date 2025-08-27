import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
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
    </div>
  );
};

export default ITInfrastructure;