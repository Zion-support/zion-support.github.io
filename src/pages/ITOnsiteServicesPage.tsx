import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Clock, 
  MapPin, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export default function ITOnsiteServicesPage() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: "Hardware Installation",
      description: "Professional installation of servers, workstations, and networking equipment",
      price: "$150/hour"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Security Setup",
      description: "Firewall configuration, VPN setup, and security system installation",
      price: "$200/hour"
    },
    {
      icon: <Network className="w-8 h-8 text-purple-400" />,
      title: "Network Configuration",
      description: "Router setup, switch configuration, and network troubleshooting",
      price: "$175/hour"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "User Training",
      description: "Onsite training for staff on new systems and software",
      price: "$125/hour"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Reach out to schedule your onsite service appointment"
    },
    {
      step: 2,
      title: "Assessment",
      description: "Our technician evaluates your needs and provides a quote"
    },
    {
      step: 3,
      title: "Service Delivery",
      description: "Professional onsite service with real-time updates"
    },
    {
      step: 4,
      title: "Follow-up",
      description: "Post-service support and documentation provided"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Onsite Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Professional IT technicians come to your location to resolve issues, 
            install equipment, and provide expert technical support.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <div className="text-zion-cyan font-semibold text-lg">{service.price}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Onsite Support?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our certified technicians are ready to come to your location and resolve 
              your IT issues quickly and professionally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Schedule Service
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
