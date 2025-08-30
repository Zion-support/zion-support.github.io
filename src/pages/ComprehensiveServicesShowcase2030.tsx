import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Truck, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  Activity,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2030() {
  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS Services',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI HR Recruitment Suite',
          description: 'AI-powered candidate matching, intelligent sourcing, and automated screening',
          price: 'From $2,999/month',
          features: ['AI candidate matching', 'Smart screening', 'Interview automation', 'Predictive analytics'],
          link: '/services/ai-hr-recruitment-suite',
          popular: true,
          benefits: ['Reduce time-to-hire by 60%', 'Improve candidate quality by 40%', 'Cut recruitment costs by 35%']
        },
        {
          title: 'AI Supply Chain Optimization',
          description: 'AI-powered demand forecasting, route optimization, and inventory management',
          price: 'From $4,999/month',
          features: ['AI demand forecasting', 'Route optimization', 'Inventory management', 'Real-time monitoring'],
          link: '/services/ai-supply-chain-optimization',
          popular: false,
          benefits: ['Reduce costs by 30%', 'Improve delivery accuracy by 95%', 'Cut inventory costs by 40%']
        },
        {
          title: 'AI Cyber Threat Intelligence',
          description: 'Advanced AI threat detection with 99.7% accuracy and zero false positives',
          price: 'From $3,999/month',
          features: ['AI threat detection', 'Real-time monitoring', 'Predictive intelligence', 'Behavioral analysis'],
          link: '/services/ai-cyber-threat-intelligence',
          popular: true,
          benefits: ['Detect threats 10x faster', 'Reduce false positives by 95%', 'Prevent 99.7% of attacks']
        },
        {
          title: 'AI Financial Analytics',
          description: 'AI-powered market prediction, portfolio optimization, and automated trading',
          price: 'From $5,999/month',
          features: ['AI market prediction', 'Portfolio optimization', 'Risk management', 'Trading automation'],
          link: '/services/ai-financial-analytics',
          popular: false,
          benefits: ['Increase returns by 35%', 'Reduce portfolio risk by 40%', 'Real-time decision making']
        }
      ]
    },
    {
      name: 'Advanced IT Solutions',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Cloud DevOps',
          description: 'Cloud migration and DevOps transformation services',
          price: 'From $5,000',
          features: ['Cloud migration', 'DevOps implementation', '24/7 managed services'],
          link: '/services/cloud-devops',
          popular: false,
          benefits: ['Deploy 10x faster', 'Reduce costs by 40%', 'Achieve 99.9% uptime']
        },
        {
          title: 'Zero Trust Network Architecture',
          description: 'Modern security framework implementation and network protection',
          price: 'From $8,000',
          features: ['Network segmentation', 'Identity verification', 'Continuous monitoring'],
          link: '/services/zero-trust-network-architecture',
          popular: false,
          benefits: ['Enhanced security', 'Compliance ready', 'Reduced attack surface']
        }
      ]
    },
    {
      name: 'Enterprise AI Solutions',
      description: 'Scalable AI solutions for enterprise organizations',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'AI Business Intelligence',
          description: 'Next-generation BI with AI-powered insights and analytics',
          price: 'From $2,999/month',
          features: ['AI data analysis', 'Predictive analytics', 'Custom dashboards'],
          link: '/services/ai-business-intelligence',
          popular: false,
          benefits: ['Data-driven decisions', 'Predict future trends', 'Real-time insights']
        },
        {
          title: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation and workflow optimization',
          price: 'From $3,500',
          features: ['Process mapping', 'AI implementation', 'Ongoing optimization'],
          link: '/services/ai-workflow-orchestrator',
          popular: false,
          benefits: ['Automate workflows', 'Increase efficiency', 'Reduce errors']
        }
      ]
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for predictive analytics and automation' },
    { name: 'Natural Language Processing', description: 'AI-powered text analysis and understanding' },
    { name: 'Computer Vision', description: 'Image and video analysis for business applications' },
    { name: 'Predictive Analytics', description: 'Data-driven forecasting and trend prediction' },
    { name: 'Cloud Computing', description: 'Scalable and reliable cloud infrastructure' },
    { name: 'Blockchain', description: 'Secure and transparent data management' }
  ];

  const testimonials = [
    {
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group\'s AI services transformed our operations. We saw a 40% increase in efficiency and significant cost savings.',
      rating: 5
    },
    {
      company: 'Global Industries',
      role: 'Head of IT',
      content: 'The AI-powered cybersecurity suite has been game-changing. We feel more protected than ever with real-time threat detection.',
      rating: 5
    },
    {
      company: 'Innovation Labs',
      role: 'CEO',
      content: 'Their AI financial analytics platform helped us optimize our investment strategy and increase returns by 35%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Zion Tech Group 2030
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of business with our comprehensive suite of AI-powered micro SAAS services, 
              IT solutions, and enterprise-grade technology. Transform your operations with cutting-edge AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From AI-powered micro SAAS to enterprise solutions, we cover all your technology needs
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                      service.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-slate-700'
                    }`}
                  >
                    {service.popular && (
                      <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full mb-4">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    )}
                    
                    <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-white mb-2">Key Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={service.link}
                      className="w-full inline-flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest AI, machine learning, and cloud technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.company}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading companies already using our AI services to revolutionize their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400">Ready to start your AI transformation journey? Contact us today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://ziontechgroup.com"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Visit ziontechgroup.com →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}