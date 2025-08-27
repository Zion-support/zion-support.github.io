import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  HeartPulse, 
  Landmark, 
  ShoppingBag, 
  Rocket, 
  Users, 
  Code, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Cloud,
  Database,
  Network,
  Lock,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive digital transformation and enterprise-grade technology solutions for large organizations.',
      icon: Building2,
      href: '/solutions/enterprise',
      features: ['Digital Transformation', 'Enterprise Architecture', 'Legacy System Modernization', 'Scalable Infrastructure']
    },
    {
      title: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology solutions that improve patient care and operational efficiency.',
      icon: HeartPulse,
      href: '/solutions/healthcare',
      features: ['AI Diagnostics', 'Patient Management Systems', 'Healthcare Analytics', 'Telemedicine Platforms']
    },
    {
      title: 'Government Solutions',
      description: 'Secure, compliant technology solutions designed specifically for government agencies and public sector.',
      icon: Landmark,
      href: '/solutions/government',
      features: ['Cybersecurity Compliance', 'Digital Services', 'Data Management', 'Citizen Engagement']
    },
    {
      title: 'Retail Solutions',
      description: 'Next-generation retail technology solutions that enhance customer experience and operational efficiency.',
      icon: ShoppingBag,
      href: '/solutions/retail',
      features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Solutions']
    }
  ];

  const businessSolutions = [
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      icon: Rocket,
      href: '/services/digital-transformation',
      features: ['Process Automation', 'Cloud Migration', 'Data Strategy', 'Change Management']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to align technology with your business objectives.',
      icon: Users,
      href: '/services/it-consulting',
      features: ['Technology Strategy', 'Architecture Design', 'Risk Assessment', 'Performance Optimization']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software development solutions designed to meet your specific business needs.',
      icon: Code,
      href: '/services/custom-development',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6">
              Business Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions designed for the modern digital landscape.
              From enterprise transformation to industry-specific solutions, we deliver results that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Business Transformation Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive business solutions that drive digital transformation and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300 font-semibold group"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our experts help you identify the right solutions for your business needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
