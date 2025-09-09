import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Shield,
  Cloud,
  BarChart3,
  Network,
  Cpu,
  Settings
} from 'lucide-react';

const SustainabilityServicesPage = () => {
  const services = [
    {
      title: 'Green IT Solutions',
      description: 'Energy-efficient technology solutions that reduce environmental impact while maintaining performance.',
      icon: Leaf,
      features: ['Energy-Efficient Hardware', 'Virtualization Solutions', 'Power Management', 'Green Data Centers']
    },
    {
      title: 'Sustainable Technology Consulting',
      description: 'Expert guidance on implementing sustainable technology practices and reducing carbon footprint.',
      icon: Target,
      features: ['Sustainability Assessment', 'Green Technology Roadmap', 'Carbon Footprint Analysis', 'Implementation Planning']
    },
    {
      title: 'Energy Management Systems',
      description: 'Smart energy monitoring and optimization systems for buildings and facilities.',
      icon: Zap,
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Automated Controls', 'Energy Optimization']
    },
    {
      title: 'Circular Economy Solutions',
      description: 'Technology solutions that support circular economy principles and reduce waste.',
      icon: Globe,
      features: ['Waste Reduction', 'Resource Optimization', 'Recycling Systems', 'Sustainable Supply Chains']
    }
  ];

  const benefits = [
    {
      title: 'Environmental Impact',
      description: 'Significantly reduce your organization\'s carbon footprint and environmental impact.',
      icon: Leaf
    },
    {
      title: 'Cost Savings',
      description: 'Lower energy costs and operational expenses through sustainable technology practices.',
      icon: Star
    },
    {
      title: 'Compliance & Standards',
      description: 'Meet environmental regulations and achieve sustainability certifications.',
      icon: Shield
    },
    {
      title: 'Brand Reputation',
      description: 'Enhance your brand reputation and appeal to environmentally conscious customers.',
      icon: Award
    }
  ];

  const industries = [
    'Manufacturing & Industrial',
    'Technology & Data Centers',
    'Healthcare & Medical',
    'Financial Services',
    'Retail & E-commerce',
    'Transportation & Logistics',
    'Real Estate & Construction',
    'Education & Government'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Leaf className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Sustainability Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sustainability
              <span className="text-gradient"> Services</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with sustainable technology solutions that protect the environment 
              while driving innovation and cost savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Sustainability Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Sustainability Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive sustainability solutions designed to reduce environmental impact 
              while improving business performance and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Sustainable Technology?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Sustainable technology not only benefits the environment but also provides 
              significant business advantages and competitive differentiation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our sustainability services are designed to meet the unique challenges 
              and opportunities across diverse industry sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with sustainable technology solutions. Our experts 
              will help you achieve your environmental goals while improving business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityServicesPage;