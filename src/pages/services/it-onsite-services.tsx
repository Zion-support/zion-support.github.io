import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Server,
  Network,
  Laptop,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

const ITOnsiteServices = () => {
  const features = [
    {
      icon: Users,
      title: 'Onsite Technical Support',
      description: 'Expert technicians available on-site for immediate technical support and problem resolution.'
    },
    {
      icon: Wrench,
      title: 'Hardware Installation',
      description: 'Professional installation and configuration of servers, workstations, and networking equipment.'
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete setup and configuration of IT infrastructure including servers, networks, and security systems.'
    },
    {
      icon: Network,
      title: 'Network Troubleshooting',
      description: 'On-site network diagnostics and troubleshooting for connectivity and performance issues.'
    },
    {
      icon: Laptop,
      title: 'Workstation Support',
      description: 'Comprehensive workstation setup, maintenance, and troubleshooting services.'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'On-site security system installation and configuration for comprehensive protection.'
    }
  ];

  const benefits = [
    'Immediate problem resolution',
    'Reduced system downtime',
    'Expert hands-on support',
    'Customized solutions',
    'Preventive maintenance',
    '24/7 emergency response'
  ];

  const services = [
    {
      title: 'Emergency Response',
      description: 'Rapid on-site response for critical IT issues with guaranteed response times.'
    },
    {
      title: 'Scheduled Maintenance',
      description: 'Regular on-site maintenance visits to prevent issues and optimize performance.'
    },
    {
      title: 'Project Implementation',
      description: 'Complete on-site project management for IT infrastructure upgrades and deployments.'
    },
    {
      title: 'Training & Support',
      description: 'On-site user training and ongoing support to maximize technology adoption.'
    }
  ];

  const coverageAreas = [
    'Delaware',
    'Maryland',
    'Pennsylvania',
    'New Jersey',
    'Virginia',
    'Washington DC',
    'New York',
    'Connecticut'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Onsite Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IT Onsite Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert IT support right at your location with our comprehensive onsite services. 
              We bring the expertise to you for immediate problem resolution and optimal system performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Schedule Onsite Visit
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Onsite Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert technicians provide hands-on support and solutions directly at your location, 
              ensuring immediate resolution and optimal system performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our Onsite Services?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Coverage Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide onsite IT services across the Mid-Atlantic region with rapid response times and local expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Guaranteed Response Times
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand that IT issues can't wait. That's why we offer guaranteed response times for all our onsite services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Emergency Response', time: '2-4 Hours', icon: Clock, color: 'text-red-400' },
              { title: 'Priority Support', time: 'Same Day', icon: Calendar, color: 'text-yellow-400' },
              { title: 'Scheduled Service', time: 'Next Business Day', icon: Calendar, color: 'text-green-400' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-800/50 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className={`text-2xl font-bold ${service.color}`}>{service.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready for Expert Onsite Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get immediate, expert IT support right at your location with our comprehensive onsite services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Schedule Service Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITOnsiteServices;