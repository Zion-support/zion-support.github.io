import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check,
  Star,
  Zap,
  Brain,
  Shield,
  Cloud,
  Atom,
  Rocket,
  Code,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  Network,
  Briefcase,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Cpu,
  Database,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Handshake,
  Calendar,
  CreditCard,
  RefreshCw,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billing: string;
  features: string[];
  popular?: boolean;
  icon: any;
  color: string;
  cta: string;
  ctaLink: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  plans: PricingPlan[];
}

const Pricing: React.FC = () => {
  const [selectedBilling, setSelectedBilling] = useState<'monthly' | 'annual'>('annual');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'ai-platforms',
      name: 'AI Platforms',
      description: 'Enterprise AI and machine learning solutions',
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          description: 'Perfect for small teams getting started with AI',
          price: selectedBilling === 'annual' ? '$299' : '$349',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'Up to 5 AI models',
            'Basic analytics dashboard',
            'Email support',
            'Standard security',
            'API access (1,000 calls/month)',
            'Community forum access'
          ],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          cta: 'Get Started',
          ctaLink: '/request-quote'
        },
        {
          id: 'professional',
          name: 'Professional',
          description: 'Ideal for growing businesses with advanced AI needs',
          price: selectedBilling === 'annual' ? '$799' : '$899',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'Up to 25 AI models',
            'Advanced analytics & reporting',
            'Priority support (4-hour response)',
            'Enhanced security & compliance',
            'API access (10,000 calls/month)',
            'Custom model training',
            'Integration support',
            'Monthly consultation'
          ],
          popular: true,
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          cta: 'Start Free Trial',
          ctaLink: '/request-quote'
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          description: 'Full-scale AI solutions for large organizations',
          price: 'Custom',
          billing: 'Contact sales for pricing',
          features: [
            'Unlimited AI models',
            'Custom analytics & dashboards',
            '24/7 dedicated support',
            'Enterprise security & compliance',
            'Unlimited API access',
            'Custom model development',
            'Dedicated success manager',
            'Quarterly business reviews',
            'On-premise deployment options',
            'Custom integrations'
          ],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          cta: 'Contact Sales',
          ctaLink: '/contact'
        }
      ]
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Quantum computing platforms and solutions',
      plans: [
        {
          id: 'quantum-starter',
          name: 'Quantum Starter',
          description: 'Access to quantum computing resources',
          price: selectedBilling === 'annual' ? '$499' : '$599',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'Access to quantum simulators',
            'Basic quantum algorithms',
            'Documentation & tutorials',
            'Community support',
            'Up to 100 qubit simulations',
            'Standard security protocols'
          ],
          icon: Atom,
          color: 'from-cyan-500 to-blue-500',
          cta: 'Get Started',
          ctaLink: '/request-quote'
        },
        {
          id: 'quantum-pro',
          name: 'Quantum Professional',
          description: 'Advanced quantum computing capabilities',
          price: selectedBilling === 'annual' ? '$1,299' : '$1,499',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'Access to real quantum hardware',
            'Advanced quantum algorithms',
            'Priority support',
            'Custom quantum circuits',
            'Up to 1,000 qubit simulations',
            'Quantum error correction',
            'Performance optimization',
            'Monthly quantum consultation'
          ],
          icon: Atom,
          color: 'from-cyan-500 to-blue-500',
          cta: 'Start Free Trial',
          ctaLink: '/request-quote'
        },
        {
          id: 'quantum-enterprise',
          name: 'Quantum Enterprise',
          description: 'Full quantum computing infrastructure',
          price: 'Custom',
          billing: 'Contact sales for pricing',
          features: [
            'Dedicated quantum resources',
            'Custom quantum hardware access',
            '24/7 quantum support',
            'Quantum security protocols',
            'Unlimited qubit simulations',
            'Custom quantum algorithms',
            'Quantum consulting services',
            'Research collaboration opportunities',
            'On-premise quantum deployment',
            'Quantum workforce training'
          ],
          icon: Atom,
          color: 'from-cyan-500 to-blue-500',
          cta: 'Contact Sales',
          ctaLink: '/contact'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'AI-powered security and compliance solutions',
      plans: [
        {
          id: 'security-basic',
          name: 'Security Basic',
          description: 'Essential cybersecurity protection',
          price: selectedBilling === 'annual' ? '$199' : '$249',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'Threat detection & monitoring',
            'Basic security analytics',
            'Email support',
            'Standard compliance reports',
            'Up to 5 security policies',
            'Monthly security updates'
          ],
          icon: Shield,
          color: 'from-red-500 to-orange-500',
          cta: 'Get Started',
          ctaLink: '/request-quote'
        },
        {
          id: 'security-pro',
          name: 'Security Professional',
          description: 'Advanced security with AI-powered protection',
          price: selectedBilling === 'annual' ? '$599' : '$699',
          billing: selectedBilling === 'annual' ? '/month billed annually' : '/month',
          features: [
            'AI-powered threat detection',
            'Advanced security analytics',
            'Priority support (2-hour response)',
            'Comprehensive compliance',
            'Up to 25 security policies',
            'Real-time threat intelligence',
            'Security automation',
            'Weekly security reviews'
          ],
          icon: Shield,
          color: 'from-red-500 to-orange-500',
          cta: 'Start Free Trial',
          ctaLink: '/request-quote'
        },
        {
          id: 'security-enterprise',
          name: 'Security Enterprise',
          description: 'Enterprise-grade security infrastructure',
          price: 'Custom',
          billing: 'Contact sales for pricing',
          features: [
            'Custom security solutions',
            'Advanced threat hunting',
            '24/7 security operations center',
            'Full compliance framework',
            'Unlimited security policies',
            'Custom security integrations',
            'Dedicated security team',
            'Quarterly security audits',
            'On-premise security deployment',
            'Security training & certification'
          ],
          icon: Shield,
          color: 'from-red-500 to-orange-500',
          cta: 'Contact Sales',
          ctaLink: '/contact'
        }
      ]
    }
  ];

  const allPlans = serviceCategories.flatMap(category => category.plans);
  const filteredPlans = selectedCategory === 'all' 
    ? allPlans 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.plans || [];

  const benefits = [
    {
      icon: Zap,
      title: 'No Setup Fees',
      description: 'Get started immediately with zero upfront costs'
    },
    {
      icon: RefreshCw,
      title: 'Flexible Billing',
      description: 'Switch between monthly and annual billing anytime'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for all your data and applications'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Expert support team available when you need help'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deploy anywhere with our worldwide data centers'
    },
    {
      icon: Award,
      title: '99.9% Uptime SLA',
      description: 'Guaranteed reliability for your critical applications'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Absolutely! We offer significant discounts for annual commitments and volume purchases. Contact our sales team for custom enterprise pricing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for Professional plans. Enterprise plans include a proof-of-concept period.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you hit your limits and can help you upgrade or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer custom pricing for startups?',
      answer: 'Yes! We have special startup programs with discounted pricing and additional support to help you grow.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business. Start small and scale up as you grow. 
                All plans include enterprise-grade security and support.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-2 border border-slate-700/50 inline-flex">
              <button
                onClick={() => setSelectedBilling('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedBilling === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedBilling('annual')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedBilling === 'annual'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Service</h2>
            <p className="text-xl text-gray-300">Select the service category that best fits your needs</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                  : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-cyan-500/30'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                    : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-cyan-500/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.billing}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.ctaLink}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Built for modern businesses with enterprise-grade reliability</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Pricing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have specific requirements or need a custom solution? 
              Our sales team is here to help you find the perfect fit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
              <a
                href="mailto:sales@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Sales
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">sales@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
