<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Server, 
  Lock, 
  BarChart3, 
  Code, 
  TrendingUp, 
  Award, 
  Clock, 
  Mail, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesPricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI Business Intelligence Basic',
        'Up to 5 users',
        'Basic reporting & analytics',
        'Email support',
        'Standard security features'
      ],
      popular: false,
      icon: Brain
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 599, annual: 5999 },
      features: [
        'AI Business Intelligence Pro',
        'AI Sales Copilot',
        'Up to 25 users',
        'Advanced analytics & dashboards',
        'Priority support',
        'Enhanced security features',
        'Custom integrations'
      ],
      popular: true,
      icon: Zap
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: { monthly: 1299, annual: 12999 },
      features: [
        'All AI services included',
        'Unlimited users',
        'Custom AI model training',
        'Advanced security & compliance',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom development',
        'On-premise deployment option'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics',
      startingPrice: 299,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'API Integration']
    },
    {
      icon: Zap,
      title: 'AI Sales Copilot',
      description: 'Boost sales performance with intelligent automation and insights',
      startingPrice: 199,
      features: ['Lead Scoring', 'Sales Forecasting', 'Automated Follow-ups', 'Performance Analytics']
    },
    {
      icon: Shield,
      title: 'AI Compliance Assistant',
      description: 'Ensure regulatory compliance with AI-powered monitoring and reporting',
      startingPrice: 399,
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Audit Trails']
    },
    {
      icon: Cloud,
      title: 'Cloud DevOps',
      description: 'Streamline development and deployment with modern cloud practices',
      startingPrice: 499,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Integration']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock the value of your data with comprehensive analytics solutions',
      startingPrice: 349,
      features: ['Data Warehousing', 'Business Intelligence', 'Advanced Analytics', 'Data Governance']
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions',
      startingPrice: 599,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    }
  ];

  const addOns = [
    {
      icon: Server,
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your business needs',
      price: 'Custom Quote'
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Comprehensive training for your team and ongoing support',
      price: 'From $199/month'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep-dive analytics and custom reporting solutions',
      price: 'From $299/month'
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Full API access for custom integrations and automation',
      price: 'From $99/month'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const getSavings = (monthlyPrice: number, annualPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - annualPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <>
      <SEO 
        title="Services & Pricing - Zion Tech Group"
        description="Explore our comprehensive AI, cloud, and cybersecurity services with transparent pricing plans designed for businesses of all sizes."
        keywords="pricing, services, AI pricing, cloud services, cybersecurity pricing, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transparent pricing for our comprehensive AI, cloud, and cybersecurity services. 
                Choose the plan that fits your business needs and budget.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                  {billingCycle === 'annual' && (
                    <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Save up to 20%
                    </span>
                  )}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price[billingCycle]}
                      <span className="text-lg text-gray-400 font-normal">
                        /{billingCycle === 'monthly' ? 'mo' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-green-400 text-sm">
                        Save ${getSavings(plan.price.monthly, plan.price.annual)}% annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to transform your business with cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">
                      From ${service.startingPrice}
                    </span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors duration-200">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with our specialized add-on services and custom solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{addon.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="text-cyan-400 font-semibold">{addon.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your needs and get a personalized quote for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPricingPage;
=======
>>>>>>> origin/main
