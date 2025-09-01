import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Zap, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy Consulting'
      ],
      color: 'from-purple-500 to-pink-500',
      price: 'Custom Quote'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Multi-cloud Strategy',
        'DevOps Implementation',
        '24/7 Cloud Support'
      ],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $5K/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security protocols and threat protection',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $3K/month'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions and digital transformation',
      features: [
        'Custom Applications',
        'Web Development',
        'Mobile Apps',
        'API Development',
        'Legacy Modernization'
      ],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting at $150/hour'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Next-generation technology consulting and strategy',
      features: [
        'Digital Strategy',
        'Technology Roadmap',
        'Innovation Workshops',
        'Digital Transformation',
        'Change Management'
      ],
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $200/hour'
    },
    {
      icon: Rocket,
      title: 'Emerging Tech',
      description: 'Blockchain, IoT, and cutting-edge technology solutions',
      features: [
        'Blockchain Development',
        'IoT Solutions',
        'Edge Computing',
        'Quantum Computing',
        'AR/VR Applications'
      ],
      color: 'from-yellow-500 to-orange-500',
      price: 'Custom Quote'
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Expert Team',
      description: 'Industry veterans with decades of combined experience'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful project deliveries'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Always at the forefront of emerging technologies'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to meet your business needs. 
              From AI and cloud computing to cybersecurity and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine expertise, innovation, and proven methodologies to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zion-slate-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', description: 'Creating a comprehensive strategy and roadmap' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with agile methodology' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-zion-slate-light">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}