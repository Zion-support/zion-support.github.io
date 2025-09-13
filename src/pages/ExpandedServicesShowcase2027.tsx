import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import LatestContentShowcase2025 from '../components/LatestContentShowcase2025';

const ExpandedServicesShowcase2027: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description: "Transform your business operations with cutting-edge AI automation solutions that reduce costs and increase efficiency.",
      icon: CpuChipIcon,
      features: [
        "Intelligent Process Automation",
        "Machine Learning Integration",
        "Predictive Analytics",
        "Natural Language Processing"
      ],
      pricing: "Starting at $5,000/month",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions designed to support your business growth and digital transformation initiatives.",
      icon: CloudIcon,
      features: [
        "Multi-Cloud Architecture",
        "Auto-Scaling Capabilities",
        "99.9% Uptime Guarantee",
        "Advanced Security Features"
      ],
      pricing: "Starting at $3,000/month",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry regulations.",
      icon: ShieldCheckIcon,
      features: [
        "24/7 Threat Monitoring",
        "Advanced Threat Detection",
        "Compliance Management",
        "Incident Response"
      ],
      pricing: "Starting at $2,500/month",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      title: "Data Analytics & BI",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      icon: ChartBarIcon,
      features: [
        "Real-time Dashboards",
        "Predictive Modeling",
        "Data Visualization",
        "Custom Reporting"
      ],
      pricing: "Starting at $4,000/month",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices and automation tools.",
      icon: CogIcon,
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Performance Monitoring"
      ],
      pricing: "Starting at $3,500/month",
      color: "from-indigo-500 to-cyan-600"
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations and improve customer experience.",
      icon: RocketLaunchIcon,
      features: [
        "Strategy Development",
        "Process Optimization",
        "Technology Integration",
        "Change Management"
      ],
      pricing: "Custom Pricing",
      color: "from-yellow-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expanded Services
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2027</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of cutting-edge technology services designed to 
              accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200">
                Get Started Today
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <button className="flex items-center space-x-1 text-blue-400 hover:text-white transition-colors duration-200 group/btn">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Content Showcase */}
      <LatestContentShowcase2025 />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expanded services can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExpandedServicesShowcase2027;