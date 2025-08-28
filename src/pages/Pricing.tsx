import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  TrendingUp,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Database,
  Cloud,
  Eye,
  Brain,
  Network,
  Rocket
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Pricing & Plans
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
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
      </section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

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
    );
  }
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-gray-400/30 hover:border-gray-400/50'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our premium add-on services and specialized solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-2xl font-bold text-white">{addon.price}</span>
                    <span className="text-gray-400 ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white border border-gray-400/30 hover:border-gray-400/50 rounded-xl font-semibold text-center transition-all duration-300 text-sm"
                >
                  Add Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business and start transforming your operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> cursor/website-audit-and-enhancement-bc66
    </div>
  );
}
