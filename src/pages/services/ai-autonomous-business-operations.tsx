import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Activity,
  Workflow,
  Target,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock as ClockIcon,
  Check,
  X
} from 'lucide-react';

const AIAutonomousBusinessOperations = () => {
  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered workflow automation that learns and optimizes business processes in real-time',
      icon: Workflow,
      benefits: ['Reduce manual tasks by 80%', '24/7 operation capability', 'Continuous process improvement']
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Advanced machine learning algorithms that predict business outcomes and market trends',
      icon: BarChart3,
      benefits: ['95% prediction accuracy', 'Real-time market insights', 'Risk assessment automation']
    },
    {
      title: 'Autonomous Decision Making',
      description: 'AI systems that make intelligent business decisions based on data analysis and predefined rules',
      icon: Brain,
      benefits: ['Faster decision cycles', 'Reduced human bias', 'Scalable decision making']
    },
    {
      title: 'Intelligent Resource Management',
      description: 'AI-driven optimization of human, financial, and operational resources',
      icon: Users,
      benefits: ['Optimal resource allocation', 'Cost reduction up to 30%', 'Improved efficiency metrics']
    },
    {
      title: 'Real-time Performance Monitoring',
      description: 'Continuous monitoring and analysis of business performance with instant alerts',
      icon: Activity,
      benefits: ['Instant performance insights', 'Proactive issue detection', 'Real-time KPI tracking']
    },
    {
      title: 'Adaptive Learning Systems',
      description: 'Self-improving AI systems that learn from business outcomes and adapt strategies',
      icon: Lightbulb,
      benefits: ['Continuous improvement', 'Adaptive strategies', 'Learning from failures']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'Basic process automation',
        'Up to 10 workflows',
        'Standard analytics dashboard',
        'Email support',
        'Basic reporting',
        '5 user licenses'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for growing businesses with complex operations',
      features: [
        'Advanced AI automation',
        'Unlimited workflows',
        'Predictive analytics',
        'Priority support',
        'Custom reporting',
        '25 user licenses',
        'API access',
        'Advanced integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large enterprises requiring maximum automation',
      features: [
        'Full autonomous operations',
        'Custom AI models',
        'Advanced machine learning',
        'Dedicated support team',
        'Custom development',
        'Unlimited users',
        'White-label options',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      description: 'Automated production scheduling, quality control, and supply chain optimization',
      roi: '45% cost reduction',
      icon: Cpu
    },
    {
      industry: 'Healthcare',
      description: 'Patient care automation, resource allocation, and predictive diagnostics',
      roi: '60% efficiency improvement',
      icon: Activity
    },
    {
      industry: 'Financial Services',
      description: 'Risk assessment, fraud detection, and automated trading systems',
      roi: '35% risk reduction',
      icon: Shield
    },
    {
      industry: 'Retail',
      description: 'Inventory management, customer service automation, and demand forecasting',
      roi: '40% inventory optimization',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechFlow Industries',
      content: 'The AI Autonomous Business Operations platform has transformed our company. We\'ve seen a 40% increase in operational efficiency and a 25% reduction in costs.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Manufacturing Co.',
      content: 'Implementing this system was the best decision we made. Our production processes are now fully automated and optimized.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'Healthcare Solutions Inc.',
      content: 'The predictive analytics have revolutionized our resource planning. We can now anticipate needs before they arise.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Business Automation</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Autonomous Business Operations
            </h1>
            
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transform your business with fully autonomous AI systems that operate 24/7, 
              make intelligent decisions, and continuously optimize your operations
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <button className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Operations?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience unprecedented efficiency, cost savings, and competitive advantage with our AI-powered autonomous systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/get-started'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI autonomous operations platform delivers measurable results across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                    <p className="text-zion-slate-light mb-3">{useCase.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>{useCase.roi}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their businesses with AI autonomous operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of business operations with AI-powered automation that works 24/7
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light mb-8">
                Ready to transform your business with AI autonomous operations? 
                Our team of experts is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperations;