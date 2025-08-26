import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Rocket, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react';

const MicroSAASPage = () => {
  const solutions = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      href: '/micro-saas/ai-business-intelligence'
    },
    {
      title: 'Customer Experience',
      description: 'Deliver exceptional customer experiences with intelligent automation and personalization.',
      icon: Users,
      features: ['Customer Journey Mapping', 'Personalization Engine', 'Feedback Analytics', 'Support Automation'],
      href: '/micro-saas/customer-experience'
    },
    {
      title: 'Quantum Computing',
      description: 'Leverage quantum algorithms for complex problem-solving and optimization.',
      icon: Cpu,
      features: ['Quantum Algorithms', 'Optimization Solutions', 'Research Tools', 'Educational Resources'],
      href: '/micro-saas/quantum-computing'
    },
    {
      title: 'Supply Chain',
      description: 'Optimize your supply chain with intelligent tracking and predictive analytics.',
      icon: Globe,
      features: ['Inventory Management', 'Demand Forecasting', 'Route Optimization', 'Risk Assessment'],
      href: '/micro-saas/supply-chain'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced threat detection and security automation.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      href: '/micro-saas/cybersecurity'
    },
    {
      title: 'IoT Edge',
      description: 'Connect and manage IoT devices with edge computing and real-time analytics.',
      icon: Cloud,
      features: ['Device Management', 'Edge Computing', 'Real-time Analytics', 'Predictive Maintenance'],
      href: '/micro-saas/iot-edge'
    },
    {
      title: 'Content Creation',
      description: 'Create engaging content with AI-powered tools and creative automation.',
      icon: Lightbulb,
      features: ['AI Writing Assistant', 'Content Optimization', 'Creative Templates', 'Performance Analytics'],
      href: '/micro-saas/content-creation'
    },
    {
      title: 'HR Platform',
      description: 'Streamline HR operations with intelligent automation and employee engagement tools.',
      icon: Target,
      features: ['Recruitment Automation', 'Employee Onboarding', 'Performance Management', 'Engagement Analytics'],
      href: '/micro-saas/hr-platform'
    }
  ];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months, with our pre-built solutions.',
      icon: Rocket
    },
    {
      title: 'Scalable Architecture',
      description: 'Grow your business without worrying about infrastructure limitations.',
      icon: TrendingUp
    },
    {
      title: 'Cost-Effective',
      description: 'Pay only for what you use with our flexible pricing models.',
      icon: Star
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance for your peace of mind.',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechFlow Inc.',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group\'s Micro SAAS solutions helped us launch our AI analytics platform in just 2 weeks. The speed and quality exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DataSense',
      company: 'DataSense',
      content: 'The customer experience platform transformed how we interact with our users. Our customer satisfaction scores increased by 40% in the first quarter.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, SupplyChain Pro',
      company: 'SupplyChain Pro',
      content: 'Implementing the supply chain optimization solution saved us $2M annually and improved our delivery times by 35%.',
      rating: 5
    }
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
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="text-gradient"> Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Launch your business with enterprise-grade software solutions. Our Micro SAAS platform 
              provides ready-to-deploy applications that scale with your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready-to-Deploy Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our comprehensive suite of Micro SAAS applications designed for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.a
                key={solution.title}
                href={solution.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 text-center">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, featureIndex) => (
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
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform delivers enterprise-grade solutions with the agility and cost-effectiveness 
              that growing businesses need.
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how businesses are transforming their operations with our Micro SAAS solutions.
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
              Ready to Launch Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have accelerated their growth with our Micro SAAS solutions. 
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;