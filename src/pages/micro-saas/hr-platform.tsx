import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Shield,
  Globe,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  UserCheck,
  FileText,
  Calendar,
  Award,
  Heart,
  MessageCircle,
  Settings,
  Search,
  Filter,
  Download,
  Share2
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Recruitment AI',
    description: 'Streamline hiring with AI-powered candidate screening and matching.',
    benefits: ['Resume parsing', 'Skill matching', 'Interview scheduling', 'Candidate ranking']
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track employee performance and provide data-driven insights.',
    benefits: ['KPI tracking', 'Goal management', 'Performance reviews', '360 feedback']
  },
  {
    icon: Heart,
    title: 'Employee Engagement',
    description: 'Measure and improve employee satisfaction and retention.',
    benefits: ['Surveys', 'Pulse checks', 'Recognition programs', 'Wellness tracking']
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Ensure HR compliance with automated tracking and reporting.',
    benefits: ['Policy management', 'Training tracking', 'Audit trails', 'Regulatory updates']
  }
];

const useCases = [
  {
    title: 'Small Business',
    description: 'Streamline HR processes for growing companies with limited resources.',
    icon: Users,
    metrics: ['Employee onboarding', 'Time tracking', 'Basic reporting', 'Policy management']
  },
  {
    title: 'Enterprise',
    description: 'Manage complex HR operations across multiple locations and departments.',
    icon: Briefcase,
    metrics: ['Multi-location support', 'Advanced analytics', 'Custom workflows', 'Integration support']
  },
  {
    title: 'Remote Teams',
    description: 'Support distributed teams with cloud-based HR solutions.',
    icon: Globe,
    metrics: ['Remote onboarding', 'Virtual collaboration', 'Time zone management', 'Digital signatures']
  },
  {
    title: 'Compliance-Focused',
    description: 'Ensure regulatory compliance in highly regulated industries.',
    icon: Shield,
    metrics: ['Audit trails', 'Compliance reporting', 'Training management', 'Policy enforcement']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$149',
    period: '/month',
    description: 'Perfect for small businesses with basic HR needs.',
    features: [
      'Up to 50 employees',
      'Basic recruitment tools',
      'Employee database',
      'Email support',
      'Standard reports',
      'Mobile app access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$399',
    period: '/month',
    description: 'Ideal for growing businesses with advanced HR requirements.',
    features: [
      'Up to 500 employees',
      'Advanced recruitment',
      'Performance management',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'Integration support',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade HR solutions.',
    features: [
      'Unlimited employees',
      'Custom HR solutions',
      'Advanced analytics',
      '24/7 support',
      'Custom integrations',
      'Advanced ML models',
      'White-label options',
      'Advanced security',
      'Dedicated infrastructure',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function HRPlatform() {
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
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              HR Platform
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Streamline HR processes with intelligent automation and analytics. 
              From recruitment to retention, manage your workforce efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
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
            <h2 className="text-4xl font-bold text-white mb-4">
              HR Management Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive HR platform provides everything you need to manage 
              your workforce efficiently and drive employee engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our HR platform is designed to meet the unique needs of different 
              business sizes and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4 text-center text-sm">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-zion-cyan text-center">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business size. 
              Start optimizing your HR processes today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/5' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/20'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our HR platform to streamline 
              processes and improve employee engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}