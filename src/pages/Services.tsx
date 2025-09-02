import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap, Cpu, Database, Network, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI Autonomous Business Manager',
          description: 'Fully autonomous AI system that manages your entire business operations',
          features: ['40-60% cost reduction', '24/7 operations', 'Intelligent decision making'],
          price: 'From $2,999/month'
        },
        {
          title: 'AI Content Generation',
          description: 'Automated content creation for marketing, documentation, and communications',
          features: ['Multi-language support', 'Brand consistency', 'SEO optimization'],
          price: 'From $499/month'
        },
        {
          title: 'AI Customer Support',
          description: 'Intelligent customer service automation with human-like interactions',
          features: ['Natural language processing', 'Multi-channel support', 'Learning capabilities'],
          price: 'From $799/month'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms with zero downtime',
          features: ['AWS/Azure/GCP expertise', 'Data security', 'Cost optimization'],
          price: 'From $1,999/project'
        },
        {
          title: 'DevOps Automation',
          description: 'Automated deployment, monitoring, and scaling solutions',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
          price: 'From $1,299/month'
        },
        {
          title: 'Cloud Security',
          description: 'Comprehensive security solutions for cloud environments',
          features: ['Identity management', 'Data encryption', 'Compliance monitoring'],
          price: 'From $899/month'
        }
      ]
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threat landscapes',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          title: 'Zero Trust Architecture',
          description: 'Implement zero trust security model for maximum protection',
          features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring'],
          price: 'From $1,499/month'
        },
        {
          title: 'Threat Detection',
          description: 'AI-powered threat detection and response systems',
          features: ['Real-time monitoring', 'Automated response', 'Threat intelligence'],
          price: 'From $999/month'
        },
        {
          title: 'Compliance Management',
          description: 'Ensure compliance with industry standards and regulations',
          features: ['GDPR/CCPA compliance', 'Audit trails', 'Risk assessment'],
          price: 'From $699/month'
        }
      ]
    },
    {
      id: 'digital',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'Process Automation',
          description: 'Automate business processes for increased efficiency',
          features: ['Workflow optimization', 'RPA implementation', 'Integration services'],
          price: 'From $1,199/month'
        },
        {
          title: 'Data Analytics',
          description: 'Transform data into actionable business insights',
          features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting'],
          price: 'From $799/month'
        },
        {
          title: 'Legacy Modernization',
          description: 'Modernize legacy systems for improved performance',
          features: ['System assessment', 'Migration planning', 'Performance optimization'],
          price: 'From $2,499/project'
        }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.name }))
  );

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Service Categories */}
        {activeCategory === 'all' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">
                  {category.description}
                </p>
                <div className="flex items-center justify-center mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help you achieve your goals. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;