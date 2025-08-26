import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Server, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Building,
  Wrench
} from 'lucide-react';

const ITServicesPage = () => {
  const services = [
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, deployment, and management solutions.',
      features: ['Network Design', 'Server Management', 'Data Center Operations', 'Performance Optimization'],
      price: '$4,500/month',
      icon: Server,
      category: 'Infrastructure'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation services.',
      features: ['Strategy Development', 'Technology Assessment', 'Implementation Support', 'Change Management'],
      price: '$8,000/month',
      icon: Rocket,
      category: 'Transformation'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and advisory services for enterprise organizations.',
      features: ['Technology Roadmap', 'Architecture Design', 'Best Practices', 'Vendor Selection'],
      price: '$3,200/month',
      icon: Users,
      category: 'Consulting'
    },
    {
      title: 'Onsite Support',
      description: 'Professional onsite IT support and technical assistance services.',
      features: ['Hardware Support', 'Software Installation', 'Network Troubleshooting', 'User Training'],
      price: '$150/hour',
      icon: Wrench,
      category: 'Support'
    },
    {
      title: 'Green IT Solutions',
      description: 'Sustainable IT solutions that reduce environmental impact and costs.',
      features: ['Energy Optimization', 'Carbon Reduction', 'Sustainable Infrastructure', 'Compliance'],
      price: '$5,500/month',
      icon: Globe,
      category: 'Green IT'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G network solutions and optimization services.',
      features: ['5G Planning', 'Network Optimization', 'Performance Testing', 'Security Implementation'],
      price: '$12,000/month',
      icon: Network,
      category: '5G'
    }
  ];

  const benefits = [
    'Reduce IT costs by 30%',
    'Improve system reliability by 95%',
    'Enable faster innovation cycles',
    'Ensure compliance and security'
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Education',
    'Government',
    'Retail'
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
            <div className="flex items-center justify-center mb-6">
              <Network className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                IT Services
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive IT services designed to modernize your infrastructure, optimize operations, 
              and drive digital transformation. From consulting to implementation, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Get IT Assessment
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete IT Services Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From infrastructure management to digital transformation, we provide end-to-end IT solutions 
              that align with your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center text-zion-cyan hover:text-white transition-colors duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of professional IT services and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light leading-relaxed">
                  {benefit}
                </p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our IT services are tailored to meet the unique challenges of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </h3>
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
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our expert team help you modernize your IT infrastructure, optimize operations, 
              and drive digital transformation. Start your IT journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Get IT Assessment
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Request IT Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;