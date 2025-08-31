import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Shield,
  Server,
  Network,
  Database,
  Cloud,
  ArrowRight,
  Star,
  Award,
  Building,
  Truck,
  Tool,
  Settings,
  Monitor
} from 'lucide-react';

export default function ITOnsiteServices() {
  const services = [
    {
      name: 'Hardware Installation & Repair',
      description: 'Professional installation and repair of computer hardware, servers, and networking equipment',
      icon: Server,
      features: ['Server Setup', 'Network Installation', 'Hardware Repair', 'Equipment Maintenance']
    },
    {
      name: 'Network Infrastructure',
      description: 'Complete network setup, configuration, and troubleshooting services',
      icon: Network,
      features: ['Network Design', 'Router Configuration', 'Switch Setup', 'WiFi Optimization']
    },
    {
      name: 'System Administration',
      description: 'Onsite system administration and IT infrastructure management',
      icon: Settings,
      features: ['User Management', 'Security Updates', 'Backup Systems', 'Performance Monitoring']
    },
    {
      name: 'Emergency IT Support',
      description: '24/7 emergency IT support for critical system failures',
      icon: Shield,
      features: ['Rapid Response', 'Critical Issue Resolution', 'System Recovery', 'Preventive Maintenance']
    }
  ];

  const benefits = [
    'Immediate problem resolution',
    'Personalized service experience',
    'Reduced downtime',
    'Expert technical knowledge'
  ];

  const coverage = [
    'Middletown, DE',
    'Newark, DE',
    'Wilmington, DE',
    'Dover, DE',
    'Philadelphia, PA',
    'Baltimore, MD'
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Onsite
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Professional IT technicians at your location for immediate problem resolution and system optimization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Schedule Service
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Get Quote
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Onsite IT Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our certified technicians provide professional onsite IT services to keep your business running smoothly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.name}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Onsite IT Services?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-zion-slate-light text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-center">
                  <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Certified Technicians</h3>
                  <p className="text-zion-slate-light">Microsoft, Cisco, and CompTIA certified professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Coverage Area</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide onsite IT services throughout Delaware and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coverage.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/30 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-sm font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Need Immediate IT Support?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact us for immediate onsite IT support and professional technical assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Schedule Onsite Visit
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Emergency Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}