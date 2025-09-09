import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  Shield, 
  Users, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Cpu,
  Database,
  Network,
  BarChart3,
  Target,
  Lightbulb,
  Settings,
  Monitor
} from 'lucide-react';

const ITServicesPage = () => {
  const services = [
    {
      title: 'Infrastructure',
      description: 'Build and manage robust IT infrastructure that scales with your business.',
      icon: Server,
      features: ['Network Design', 'Server Management', 'Data Center Solutions', 'Cloud Migration'],
      href: '/it-services/infrastructure'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital technologies and processes.',
      icon: Zap,
      features: ['Process Automation', 'Legacy System Modernization', 'Digital Workflow Design', 'Change Management'],
      href: '/it-services/digital-transformation'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to align your IT strategy with business objectives.',
      icon: Users,
      features: ['IT Strategy Development', 'Technology Assessment', 'Risk Management', 'Compliance Planning'],
      href: '/it-services/consulting'
    },
    {
      title: 'Onsite Support',
      description: 'Professional IT support and maintenance services at your location.',
      icon: Settings,
      features: ['Hardware Installation', 'Software Configuration', 'Network Troubleshooting', 'Preventive Maintenance'],
      href: '/it-services/onsite-support'
    },
    {
      title: 'Green IT',
      description: 'Sustainable technology solutions that reduce environmental impact.',
      icon: Globe,
      features: ['Energy-Efficient Hardware', 'Virtualization Solutions', 'Sustainable Practices', 'Carbon Footprint Reduction'],
      href: '/it-services/green-it'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity solutions for modern businesses.',
      icon: Network,
      features: ['5G Network Design', 'IoT Integration', 'Edge Computing', 'Low-Latency Applications'],
      href: '/it-services/5g-solutions'
    }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.',
      icon: Users
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your critical systems.',
      icon: Monitor
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce IT costs while improving performance and reliability.',
      icon: Star
    },
    {
      title: 'Future-Ready',
      description: 'Scalable solutions that grow with your business and technology needs.',
      icon: Target
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'IT Director, GlobalCorp',
      company: 'GlobalCorp',
      content: 'Zion Tech Group transformed our IT infrastructure from legacy systems to a modern, cloud-native architecture. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'CTO, InnovateTech',
      company: 'InnovateTech',
      content: 'Their digital transformation consulting helped us streamline operations and improve efficiency by 60%. The team is truly exceptional.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      role: 'Operations Manager, SupplyChain Solutions',
      company: 'SupplyChain Solutions',
      content: 'The onsite support team is professional, knowledgeable, and always available when we need them. Highly recommended.',
      rating: 5
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Azure', icon: Cloud, category: 'Cloud' },
    { name: 'Docker', icon: Server, category: 'Containerization' },
    { name: 'Kubernetes', icon: Server, category: 'Orchestration' },
    { name: 'Terraform', icon: Settings, category: 'Infrastructure as Code' },
    { name: 'Ansible', icon: Settings, category: 'Automation' },
    { name: 'Jenkins', icon: Settings, category: 'CI/CD' },
    { name: 'Grafana', icon: BarChart3, category: 'Monitoring' }
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
              <Server className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">IT Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise IT
              <span className="text-gradient"> Services</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, optimize operations, 
              and drive digital transformation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Get Assessment
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
              Our IT Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From infrastructure management to digital transformation, we provide end-to-end IT solutions 
              that drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 text-center">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-center text-zion-cyan group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional IT services with a focus on innovation, reliability, and business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expertise spans the latest technologies and industry-standard tools to deliver 
              cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how we've helped organizations transform their IT infrastructure and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                    <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                  </div>
                </div>
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
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our IT experts assess your current infrastructure and create a roadmap for 
              digital transformation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;