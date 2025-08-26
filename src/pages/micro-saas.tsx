import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Globe
} from 'lucide-react';

const MicroSAASPage = () => {
  const services = [
    {
      title: 'AI Business Intelligence',
      description: 'Intelligent business analytics and insights powered by artificial intelligence.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      price: '$2,500/month',
      icon: Brain,
      category: 'AI & Analytics',
      href: '/micro-saas/ai-business-intelligence'
    },
    {
      title: 'Customer Experience Platform',
      description: 'Comprehensive customer experience management and engagement solutions.',
      features: ['Customer Journey Mapping', 'Personalization Engine', 'Feedback Management', 'Analytics'],
      price: '$1,800/month',
      icon: Users,
      category: 'Customer Experience',
      href: '/micro-saas/customer-experience'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Quantum computing applications for complex problem-solving and optimization.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Performance Analysis', 'Custom Solutions'],
      price: '$15,000/month',
      icon: Rocket,
      category: 'Quantum Computing',
      href: '/micro-saas/quantum-computing'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain management and optimization solutions.',
      features: ['Demand Forecasting', 'Inventory Management', 'Route Optimization', 'Risk Assessment'],
      price: '$3,200/month',
      icon: Globe,
      category: 'Supply Chain',
      href: '/micro-saas/supply-chain'
    },
    {
      title: 'Cybersecurity Platform',
      description: 'Advanced cybersecurity solutions for threat detection and prevention.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
      price: '$4,500/month',
      icon: Shield,
      category: 'Cybersecurity',
      href: '/micro-saas/cybersecurity'
    },
    {
      title: 'IoT Edge Computing',
      description: 'Edge computing solutions for IoT devices and real-time data processing.',
      features: ['Edge Analytics', 'Real-time Processing', 'Device Management', 'Data Security'],
      price: '$2,800/month',
      icon: Cpu,
      category: 'IoT & Edge',
      href: '/micro-saas/iot-edge'
    },
    {
      title: 'Content Creation Suite',
      description: 'AI-powered content creation and management platform.',
      features: ['AI Writing Assistant', 'Content Optimization', 'SEO Tools', 'Analytics'],
      price: '$1,200/month',
      icon: Code,
      category: 'Content Creation',
      href: '/micro-saas/content-creation'
    },
    {
      title: 'HR Platform',
      description: 'Comprehensive human resources management and automation platform.',
      features: ['Recruitment Management', 'Employee Onboarding', 'Performance Tracking', 'HR Analytics'],
      price: '$2,200/month',
      icon: Users,
      category: 'HR Management',
      href: '/micro-saas/hr-platform'
    }
  ];

  const benefits = [
    'Reduce development time by 60%',
    'Lower operational costs by 40%',
    'Enable rapid scaling and growth',
    'Focus on core business value'
  ];

  const features = [
    'Cloud-native architecture',
    'API-first design',
    'Real-time analytics',
    'Scalable infrastructure'
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
              <Code className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Micro SAAS Solutions
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with specialized, focused software-as-a-service solutions. 
              Our micro-SaaS platform delivers targeted functionality without the complexity of monolithic systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Your Journey
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Custom Quote
              </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Micro-SaaS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of focused, specialized solutions designed for specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized solutions designed to solve specific business challenges with precision and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    to={service.href}
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
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Benefits of Micro-SaaS
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the advantages of focused, specialized software solutions.
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light leading-relaxed">
                  {benefit}
                </p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Choose the micro-SaaS solution that fits your needs and start transforming your business today. 
              Our expert team is ready to help you implement the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Implementation
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;