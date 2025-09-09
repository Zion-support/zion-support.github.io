import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Truck, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Lock,
  RefreshCw,
  TrendingUp,
  Database
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const onsiteServices = [
  {
    icon: Wrench,
    title: 'Hardware Installation',
    description: 'Professional installation and setup of IT hardware including servers, workstations, and networking equipment.',
    features: ['Server Setup', 'Workstation Installation', 'Network Equipment', 'Peripheral Setup']
  },
  {
    icon: Truck,
    title: 'Equipment Delivery',
    description: 'Timely delivery and installation of IT equipment with proper setup and configuration.',
    features: ['Scheduled Delivery', 'Professional Installation', 'Configuration', 'Testing & Validation']
  },
  {
    icon: Clock,
    title: 'Emergency Support',
    description: '24/7 emergency on-site support for critical IT infrastructure issues and outages.',
    features: ['Rapid Response', 'Critical Issue Resolution', 'System Recovery', 'Preventive Measures']
  },
  {
    icon: Users,
    title: 'Staff Training',
    description: 'On-site training for your team on new systems, software, and IT best practices.',
    features: ['System Training', 'Software Training', 'Best Practices', 'Ongoing Support']
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive on-site security assessments and vulnerability testing.',
    features: ['Security Assessment', 'Vulnerability Testing', 'Compliance Review', 'Security Recommendations']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'On-site performance analysis and optimization of IT systems and networks.',
    features: ['Performance Analysis', 'System Optimization', 'Network Tuning', 'Capacity Planning']
  }
];

const serviceAreas = [
  {
    area: 'Hardware Support',
    solutions: ['Equipment Installation', 'Hardware Upgrades', 'Maintenance & Repairs', 'Warranty Support']
  },
  {
    area: 'Network Support',
    solutions: ['Network Setup', 'Troubleshooting', 'Performance Tuning', 'Security Implementation']
  },
  {
    area: 'Software Support',
    solutions: ['Software Installation', 'Configuration', 'Updates & Patches', 'User Training']
  },
  {
    area: 'Data Center Support',
    solutions: ['Server Management', 'Storage Solutions', 'Backup Systems', 'Disaster Recovery']
  }
];

const benefits = [
  'Reduce downtime with rapid on-site response',
  'Minimize travel costs and delays',
  'Ensure proper installation and configuration',
  'Provide hands-on training and support',
  'Maintain compliance and security standards',
  'Build long-term technical relationships'
];

const responseTimes = [
  { level: 'Critical', time: '2-4 hours', description: 'System down, business impact' },
  { level: 'High', time: '4-8 hours', description: 'Significant functionality issues' },
  { level: 'Medium', time: '8-24 hours', description: 'Minor functionality issues' },
  { level: 'Low', time: '24-48 hours', description: 'General inquiries and requests' }
];

export default function ITOnsiteServices() {
  return (
    <>
      <SEO 
        title="IT Onsite Services | Zion Tech Group"
        description="Professional on-site IT support and services. Hardware installation, emergency support, staff training, and technical expertise delivered to your location."
        canonical="https://ziontechgroup.com/services/onsite-support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Onsite Services</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Professional IT support and services delivered directly to your location. 
                From hardware installation to emergency support, we bring expertise to you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Schedule Service
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Onsite IT Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive on-site IT support covering hardware, software, networking, 
                and training needs for your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onsiteServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Areas
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive coverage across all aspects of IT infrastructure 
                and support needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Times Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Response Time Guarantees
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We understand the urgency of IT issues and provide guaranteed 
                response times based on priority levels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {responseTimes.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    level.level === 'Critical' ? 'bg-red-500' :
                    level.level === 'High' ? 'bg-orange-500' :
                    level.level === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{level.level}</h3>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{level.time}</div>
                  <p className="text-zion-slate-light text-sm">{level.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Onsite Services?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Onsite IT services provide unique advantages that remote support 
                cannot match for complex technical issues and installations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Systematic approach to delivering high-quality onsite IT services 
                with minimal disruption to your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Request</h3>
                <p className="text-zion-slate-light text-sm">
                  Submit service request with detailed issue description
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Evaluate issue and determine onsite requirements
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dispatch</h3>
                <p className="text-zion-slate-light text-sm">
                  Send qualified technician to your location
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Resolve</h3>
                <p className="text-zion-slate-light text-sm">
                  Complete service and verify resolution
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Onsite IT Support?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get professional IT expertise delivered to your location. 
                Contact us to schedule onsite service or discuss your IT needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Service
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
