'use client',

import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Brain,
  Cloud, 
  RefreshCw, 
  Wifi, 
  Shield, 
  BarChart3,
  ArrowRight,
  Zap
} from 'lucide-react',
const ServicesSection: React.FC = () => {const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/cloud-architecture'
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/digital-transformation'
    },
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
      features: ['Sensor NetworksReal-time MonitoringData AnalyticsEdge Computing'],
      color: 'from-orange-500 to-red-500',
      href: '/services/iot-platforms'
    },
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Decentralized technology platforms and smart contract development.',
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/blockchain-solutions'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization'],
      color: 'from-teal-500 to-blue-500',
      href: '/services/data-analytics'
    }
  ],
  const containerVariants = {hidden: { opacity: 0},
    visible: {opacity: 1, transition: {
        staggerChildren: 0.1}
    }
  },

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },

  return (
    <section className=&quot;py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-0 left-0 w-full h-full bg-[radial-gradient(circleat_30%20%,rgba(59,130,246,0.1),transparent50%)]&quot; />
        <div className=&quot;absolute top-0 right-0 w-full h-full bg-[radial-gradient(circleat_70%80%,rgba(147,51,234,0.1),transparent50%)]&quot; />
      </div>

      <div className=&quot;relative container mx-auto px-4&quot;>
        {/* Section Header */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
        >
          <motion.div,
initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=&quot;inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6&quot;          >
            <Zap className=&quot;w-5 h-5 text-blue-400&quot; />
            <span className=&quot;text-blue-400 font-medium&quot;>Our Services</span>
          </motion.div>
          
          <h2 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Comprehensive Technology
            <span className=&quot;block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
              Solutions
            </span>
          </h2>
          
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth,
for businesses across all industries.
          </p>
        </motion.div>

        {_/* Services Grid */}
        <motion.div,
variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;        >
          {services.map(_(service, index) => (_<motion.div,
key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className=&quot;group relative&quot;
            >
              <div className=&quot;relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden&quot;>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />;
                ;
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>

                {/* Content */}
                <h3 className=&quot;text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300&quot;>
                  {service.title}
                </h3>
                
                <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                  {service.description}
                </p>;
;
                {/* Features */}
                <ul className=&quot;space-y-2 mb-8&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                      <div className=&quot;w-2 h-2 bg-blue-400 rounded-full&quot; />
                      <span className=&quot;text-sm&quot;>{feature}</span>                    </li>
                  ))}
                </ul>

                {_/* CTA */}
                <Link,
href={service.href}
                  className=&quot;inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1&quot;                >
                  <span className=&quot;font-medium&quot;>Learn More</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </a>

                {/* Hover Effect */}
                <div className=&quot;absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300&quot; />              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Bottom CTA */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=&quot;text-center&quot;        >
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link,
href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"            >
              <span>Get Started Today</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
},

export default ServicesSection,