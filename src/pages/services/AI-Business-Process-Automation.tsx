import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Workflow,
  Settings,
  Bot,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Code,
  Settings,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Sparkles
} from 'lucide-react';

const AIBusinessProcessAutomation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Workflow Design',
      description: 'AI-powered workflow creation with drag-and-drop interface and intelligent suggestions',
      benefits: ['Reduce design time by 70%', 'Auto-optimize processes', 'Smart routing decisions']
    },
    {
      icon: Settings,
      title: 'Advanced Process Automation',
      description: 'End-to-end automation of complex business processes with AI decision making',
      benefits: ['95% process accuracy', '24/7 operation', 'Real-time monitoring']
    },
    {
      icon: Bot,
      title: 'RPA Integration',
      description: 'Seamless integration with existing systems and legacy applications',
      benefits: ['Non-invasive deployment', 'Quick ROI', 'Scalable automation']
    },
    {
      icon: Cpu,
      title: 'Machine Learning Engine',
      description: 'Continuous learning and improvement of automation processes',
      benefits: ['Self-optimizing workflows', 'Predictive analytics', 'Adaptive processes']
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Advanced data processing and analytics for process optimization',
      benefits: ['Real-time insights', 'Performance metrics', 'Trend analysis']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, secure, and reliable cloud-based automation platform',
      benefits: ['Global accessibility', '99.9% uptime', 'Enterprise security']
    }
  ];

  const useCases = [
    {
      industry: 'Finance & Banking',
      processes: ['Loan Processing', 'KYC Verification', 'Fraud Detection', 'Compliance Reporting'],
      roi: '300-500%',
      timeSaved: '60-80%'
    },
    {
      industry: 'Healthcare',
      processes: ['Patient Onboarding', 'Claims Processing', 'Appointment Scheduling', 'Medical Records'],
      roi: '250-400%',
      timeSaved: '50-75%'
    },
    {
      industry: 'Manufacturing',
      processes: ['Quality Control', 'Inventory Management', 'Supply Chain', 'Maintenance'],
      roi: '200-350%',
      timeSaved: '40-70%'
    },
    {
      industry: 'Retail & E-commerce',
      processes: ['Order Processing', 'Customer Service', 'Inventory Tracking', 'Returns Management'],
      roi: '180-300%',
      timeSaved: '45-65%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses starting their automation journey',
      features: [
        'Up to 10 automated processes',
        'Basic AI workflow engine',
        'Standard integrations',
        'Email support',
        'Basic analytics dashboard',
        '5 user licenses'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies with complex automation needs',
      features: [
        'Up to 50 automated processes',
        'Advanced AI workflow engine',
        'Premium integrations',
        'Priority support',
        'Advanced analytics & reporting',
        '25 user licenses',
        'Custom workflow templates',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises with unlimited automation',
      features: [
        'Unlimited automated processes',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support team',
        'Advanced security features',
        'Unlimited user licenses',
        'Custom integrations',
        'On-premise deployment option'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group\'s AI automation platform transformed our operations. We reduced manual processing time by 75% and improved accuracy to 99.2%.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Manufacturing Co.',
      content: 'The intelligent workflow automation has streamlined our manufacturing processes, resulting in 40% faster production cycles and significant cost savings.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'Healthcare Innovations',
      content: 'Implementing AI process automation improved our patient care efficiency by 60% while maintaining the highest quality standards.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Automation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Business Process
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation that learns, adapts, and scales. 
              Reduce manual work by up to 80% while improving accuracy and efficiency.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Average</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Operation</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Powerful Features for Intelligent Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver 
              the most advanced business process automation solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI automation transforms operations across different industries with proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">Top Performer</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-300 mb-3">Automated Processes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.processes.map((process, processIndex) => (
                      <div key={processIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{process}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{useCase.roi}</div>
                    <div className="text-sm text-gray-400">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{useCase.timeSaved}</div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI automation features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their business with AI automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI automation journey today and see the transformation in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessProcessAutomation;