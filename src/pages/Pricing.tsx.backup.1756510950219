import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Users,
  Building,
  Rocket,
  DollarSign,
  Clock,
  Globe,
  Lock,
  BarChart3,
  MessageCircle,
  Target,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  BookOpen,
  HelpCircle,
  Mail,
  Video,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: any;
  cta: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$499',
    period: '/month',
    features: [
      'AI-powered business intelligence dashboard',
      'Basic cloud infrastructure setup',
      'Security monitoring & alerts',
      'Email support',
      'Monthly performance reports',
      'Up to 5 team members',
      'Basic API access',
      'Standard compliance features'
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: Zap,
    cta: 'Get Started',
    ctaLink: '/contact'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: '$1,299',
    period: '/month',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Advanced AI workflow automation',
      'Custom cloud architecture design',
      'Advanced cybersecurity features',
      'Priority support (4-hour response)',
      'Up to 25 team members',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Compliance automation tools',
      'Monthly strategy sessions'
    ],
    color: 'from-zion-cyan to-zion-purple',
    icon: Brain,
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Professional, plus:',
      'Custom AI model development',
      'Multi-cloud architecture',
      'Advanced threat intelligence',
      '24/7 dedicated support',
      'Unlimited team members',
      'Custom software development',
      'Advanced data governance',
      'Compliance certification support',
      'Quarterly business reviews',
      'Dedicated success manager'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: Building,
    cta: 'Contact Sales',
    ctaLink: '/contact'
  }
];

const servicePricing = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Workflow Orchestrator', price: '$299/month', description: 'AI-powered workflow automation' },
      { name: 'AI Data Governance Platform', price: '$199/month', description: 'AI-powered data governance' },
      { name: 'AI Customer Experience Analytics', price: '$399/month', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', price: '$599/month', description: 'Advanced analytics & ML insights' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    services: [
      { name: 'Cloud DevOps', price: '$799/month', description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', price: '$1,199/month', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', price: '$299/month', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', price: '$499/month', description: 'Financial operations automation' }
    ]
  },
  {
    category: 'Cybersecurity & Privacy',
    icon: Shield,
    services: [
      { name: 'AI Cybersecurity Platform', price: '$899/month', description: 'Advanced AI-powered security' },
      { name: 'Security Headers & CSP', price: '$199/month', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', price: '$299/month', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', price: '$599/month', description: 'Modern security architecture' }
    ]
  },
  {
    category: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    services: [
      { name: 'Micro CRM', price: '$49/month', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', price: '$79/month', description: 'Customer support system' },
      { name: 'Website Analytics', price: '$29/month', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', price: '$99/month', description: 'IT support system' }
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Pricing & Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core features with flexible scaling options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with what you need and scale as you grow. All plans include our core features.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-8 bg-white/5 backdrop-blur-sm rounded-2xl border ${
                tier.popular 
                  ? 'border-zion-cyan/40 ring-2 ring-zion-cyan/20' 
                  : 'border-zion-cyan/20'
              } hover:border-zion-cyan/40 transition-all duration-300 h-full`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={tier.ctaLink}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-zion-cyan/20'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Individual Service Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need just one specific service? Check out our individual service pricing below.
          </p>
        </motion.div>

        <div className="space-y-12">
          {servicePricing.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 + serviceIndex * 0.05 }}
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                      <Link
                        to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">30-Day Free Trial</h3>
            <p className="text-gray-400">Try our Professional plan free for 30 days with no commitment.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
            <p className="text-gray-400">24/7 support available across all time zones for Enterprise customers.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-400">Bank-level security with SOC 2, ISO 27001, and GDPR compliance.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create a custom plan tailored to your specific business needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
