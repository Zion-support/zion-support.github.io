import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Clock, 
  MapPin, 
  Shield, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Server,
  Network,
  Monitor,
  Smartphone,
  Laptop,
  Printer,
  Router
} from 'lucide-react';

const ITOnsiteServices: React.FC = () => {
  const onsiteServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server & Infrastructure Support",
      description: "Onsite server maintenance, troubleshooting, and infrastructure optimization",
      features: ["Hardware diagnostics", "Performance tuning", "Backup verification", "Security updates"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Installation & Repair",
      description: "Complete network setup, cabling, and troubleshooting services",
      features: ["Cable installation", "Router configuration", "Switch setup", "Network diagnostics"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Workstation Support",
      description: "Desktop and laptop setup, maintenance, and troubleshooting",
      features: ["OS installation", "Software setup", "Hardware repair", "Data migration"]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Peripheral Device Support",
      description: "Printer, scanner, and other device installation and maintenance",
      features: ["Device setup", "Driver installation", "Network configuration", "Troubleshooting"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Onsite security system installation and configuration",
      features: ["Access control", "Surveillance systems", "Firewall setup", "Security audits"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Office Relocation Support",
      description: "Complete IT infrastructure setup for office moves and expansions",
      features: ["Equipment relocation", "Network reconfiguration", "System testing", "User training"]
    }
  ];

  const responseTimes = [
    {
      level: "Critical",
      time: "2-4 hours",
      description: "System down, no business operations possible",
      color: "bg-red-500"
    },
    {
      level: "High",
      time: "4-8 hours",
      description: "Major functionality impacted, business operations affected",
      color: "bg-orange-500"
    },
    {
      level: "Medium",
      time: "8-24 hours",
      description: "Minor functionality issues, workarounds available",
      color: "bg-yellow-500"
    },
    {
      level: "Low",
      time: "24-48 hours",
      description: "Non-critical issues, scheduled maintenance",
      color: "bg-green-500"
    }
  ];

  const benefits = [
    "Immediate problem resolution with hands-on expertise",
    "Reduced downtime and business interruption",
    "Personalized service and relationship building",
    "Comprehensive system knowledge and documentation",
    "Preventive maintenance and proactive support",
    "Cost-effective long-term IT management"
  ];

  const coverageAreas = [
    "Downtown Business District",
    "Technology Corridor",
    "Industrial Zones",
    "Suburban Office Parks",
    "Airport Business Centers",
    "University Research Areas"
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "Legal & Professional Services",
    "Manufacturing & Logistics",
    "Retail & Hospitality",
    "Education & Research"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
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
              <Wrench className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            IT Onsite Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert IT professionals at your location, providing immediate technical support, 
            infrastructure maintenance, and strategic technology solutions for your business.
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
              Schedule Onsite Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Onsite Services */}
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
              Comprehensive Onsite Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified technicians provide hands-on technical expertise for all your IT infrastructure needs, 
              ensuring minimal disruption to your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onsiteServices.map((service, index) => (
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

      {/* Response Times */}
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
              Rapid Response Times
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand that IT issues can impact your business. Our priority-based response system 
              ensures critical problems are resolved quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((response, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-4 h-4 ${response.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {response.level}
                </h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">
                  {response.time}
                </p>
                <p className="text-sm text-gray-300">
                  {response.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Onsite Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of having expert IT professionals physically present to resolve your technology challenges.
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

      {/* Coverage & Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Coverage Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-400" />
                Coverage Areas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-200 font-medium">{area}</p>
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
                    <p className="text-gray-200 font-medium">{industry}</p>
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
            Need Immediate IT Support?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our onsite technicians are ready to resolve your IT issues quickly and efficiently. 
            Get professional support when you need it most.
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
              Schedule Onsite Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Emergency Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITOnsiteServices;
