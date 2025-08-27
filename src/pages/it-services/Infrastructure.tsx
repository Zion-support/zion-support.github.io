import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  Target,
  Lightbulb,
  Cpu,
  HardDrive,
  Wifi,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Server,
    title: 'Server Management',
    description: 'Comprehensive server administration, monitoring, and optimization'
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network systems'
  },
  {
    icon: Database,
    title: 'Database Administration',
    description: 'Database design, optimization, and management services'
  },
  {
    icon: Shield,
    title: 'Security Infrastructure',
    description: 'Multi-layered security solutions and threat protection'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Hybrid and multi-cloud infrastructure solutions'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'System tuning and performance enhancement'
  }
];

const benefits = [
  'Reduce infrastructure costs by 30-40%',
  'Improve system reliability by 99.9%',
  'Enhance security and compliance',
  'Scale infrastructure as needed',
  '24/7 monitoring and support',
  'Future-proof technology stack'
];

const solutions = [
  {
    title: 'Data Center Solutions',
    description: 'Enterprise-grade data center design and management',
    icon: Server,
    industries: ['Technology', 'Finance', 'Healthcare']
  },
  {
    title: 'Network Architecture',
    description: 'Scalable network design and implementation',
    icon: Network,
    industries: ['Manufacturing', 'Retail', 'Education']
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure',
    icon: Cloud,
    industries: ['E-commerce', 'SaaS', 'Entertainment']
  },
  {
    title: 'Disaster Recovery',
    description: 'Comprehensive backup and recovery solutions',
    icon: Shield,
    industries: ['Government', 'Non-profit', 'Legal']
  }
];

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'IT Director',
    company: 'Global Manufacturing',
    content: 'Zion Tech Group\'s infrastructure services have transformed our IT operations. We now have enterprise-grade reliability at a fraction of the cost.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Retail',
    content: 'The cloud migration was seamless and our infrastructure is now more scalable than ever. Performance has improved dramatically.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'Healthcare Plus',
    content: 'Our infrastructure is now more secure and compliant than ever. The team provides excellent support and maintenance.',
    rating: 5
  }
];

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-cyan to-zion-purple opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-blue/10 border border-zion-blue/20 rounded-full px-6 py-3 mb-8">
              <Server className="w-5 h-5 text-zion-blue" />
              <span className="text-zion-blue font-medium">IT Infrastructure Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build a Robust
              <span className="text-gradient block">IT Infrastructure</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Design, implement, and manage enterprise-grade IT infrastructure that scales with your business. 
              From servers to networks, we provide comprehensive infrastructure solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Infrastructure Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From hardware to cloud, we provide end-to-end infrastructure services that ensure 
              reliability, security, and performance for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8 hover:border-zion-blue/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Infrastructure Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience enterprise-grade infrastructure that adapts to your business needs and grows with you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-zion-blue flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored infrastructure solutions designed for your specific industry needs and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8 hover:border-zion-blue/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-zion-blue font-medium mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-zion-blue/10 border border-zion-blue/20 rounded-full text-sm text-zion-blue"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center text-zion-blue hover:text-zion-blue-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on proven technologies and industry standards for maximum reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'VMware', description: 'Virtualization platform', icon: Server },
              { name: 'Cisco', description: 'Network infrastructure', icon: Network },
              { name: 'Microsoft', description: 'Windows & Azure', icon: Cloud },
              { name: 'Linux', description: 'Open source solutions', icon: Cpu }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-2">{tech.name}</div>
                <div className="text-zion-blue text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our infrastructure services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-blue text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get a comprehensive infrastructure assessment and build a robust foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Infrastructure Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline px-8 py-4 text-lg font-semibold"
              >
                Talk to Infrastructure Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}