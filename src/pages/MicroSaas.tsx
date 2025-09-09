import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, TrendingUp, Users, Globe, Code, BarChart3, Brain, Target, ShoppingCart } from 'lucide-react';

const MicroSaasPage = () => {
  const services = [
    {
      name: 'AI Business Intelligence',
      description: 'Intelligent analytics and insights powered by AI',
      icon: Brain,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      price: 'From $99/month',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      name: 'Customer Experience Platform',
      description: 'Omnichannel customer engagement and support',
      icon: Users,
      features: ['Live Chat', 'Ticket Management', 'Customer Analytics'],
      price: 'From $149/month',
      color: 'from-zion-purple to-zion-pink'
    },
    {
      name: 'Digital Transformation Suite',
      description: 'End-to-end digital transformation solutions',
      icon: Rocket,
      features: ['Process Automation', 'Legacy Migration', 'Change Management'],
      price: 'From $299/month',
      color: 'from-zion-green to-zion-cyan'
    },
    {
      name: 'Cybersecurity Framework',
      description: 'Comprehensive security and compliance solutions',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Monitoring', 'Security Training'],
      price: 'From $199/month',
      color: 'from-zion-orange to-zion-red'
    },
    {
      name: 'Cloud Management Platform',
      description: 'Multi-cloud orchestration and optimization',
      icon: Globe,
      features: ['Cost Optimization', 'Performance Monitoring', 'Auto-scaling'],
      price: 'From $179/month',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      name: 'Data Analytics Engine',
      description: 'Advanced data processing and visualization',
      icon: BarChart3,
      features: ['Data Integration', 'ML Models', 'Interactive Charts'],
      price: 'From $129/month',
      color: 'from-zion-pink to-zion-orange'
    }
  ];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months',
      icon: Zap,
      color: 'text-zion-cyan'
    },
    {
      title: 'Scalable Architecture',
      description: 'Grow with your business needs',
      icon: TrendingUp,
      color: 'text-zion-purple'
    },
    {
      title: 'Cost Effective',
      description: 'Pay only for what you use',
      icon: Target,
      color: 'text-zion-blue'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance',
      icon: Shield,
      color: 'text-zion-green'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      solutions: ['Patient Management', 'Compliance Tracking', 'Telemedicine'],
      icon: Users
    },
    {
      industry: 'Finance',
      solutions: ['Risk Management', 'Compliance Automation', 'Customer Analytics'],
      icon: Shield
    },
    {
      industry: 'Manufacturing',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain'],
      icon: Code
    },
    {
      industry: 'Retail',
      solutions: ['Inventory Management', 'Customer Insights', 'E-commerce'],
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Powerful, focused software-as-a-service solutions designed for modern businesses. 
              Deploy quickly, scale efficiently, and transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Solutions
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Demo
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Specialized solutions that address specific business challenges with precision and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-sm text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <button className="btn-futuristic w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our approach delivers focused solutions that solve specific problems without unnecessary complexity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for specific industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                
                <div className="space-y-3">
                  {useCase.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">{solution}</span>
                    </div>
                  ))}
                </div>
                
                <button className="btn-futuristic mt-6">
                  Explore {useCase.industry} Solutions
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Micro SAAS Solutions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">1000+</div>
              <div className="text-zion-slate-light">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-blue mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Start with a focused solution and scale as you grow. Our micro SAAS approach 
              ensures you get exactly what you need, when you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Sales
              </button>
              <button className="btn-futuristic px-8 py-4 text-lg">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;