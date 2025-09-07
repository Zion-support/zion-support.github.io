import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  BarChart3,
  Zap,
  AlertTriangle
} from 'lucide-react';

export default function AIHealthcarePredictiveAnalytics() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const features = [
    {
      title: 'Patient Risk Prediction',
      description: 'AI algorithms predict patient deterioration and readmission risks',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Treatment Outcome Forecasting',
      description: 'Predict treatment effectiveness and patient recovery timelines',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize hospital resources and staff scheduling',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Early Disease Detection',
      description: 'Identify disease patterns before symptoms appear',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Hospital',
      price: '$2,999',
      period: '/month',
      description: 'For small to medium hospitals',
      features: [
        'Up to 500 beds',
        'Basic predictive models',
        'Standard support',
        'Monthly reports'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Health System',
      price: '$7,999',
      period: '/month',
      description: 'For large health systems',
      features: [
        'Up to 2,000 beds',
        'Advanced AI models',
        'Priority support',
        'Custom integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For major healthcare networks',
      features: [
        'Unlimited beds',
        'Full AI suite',
        'Dedicated support',
        'Custom development'
      ],
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Readmissions',
      description: 'Predict and prevent patient readmissions',
      metric: '25%',
      icon: Heart
    },
    {
      title: 'Improve Outcomes',
      description: 'Better treatment planning and monitoring',
      metric: '40%',
      icon: TrendingUp
    },
    {
      title: 'Cost Savings',
      description: 'Optimize resources and reduce waste',
      metric: '30%',
      icon: Shield
    },
    {
      title: 'Staff Efficiency',
      description: 'Streamline workflows and scheduling',
      metric: '35%',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Predictive Analytics - Patient Care Optimization | Zion Tech Group"
        description="AI-powered healthcare predictive analytics platform. Predict patient outcomes, optimize resources, and improve care quality. HIPAA compliant and FDA approved."
        keywords="AI healthcare, predictive analytics, patient care, healthcare AI, medical analytics, health prediction"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8"
            >
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Healthcare Predictive Analytics
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Transform patient care with AI-powered predictive analytics. Predict outcomes, 
              optimize resources, and improve healthcare quality while reducing costs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200"
              >
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              HIPAA compliant and FDA approved predictive analytics for healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See measurable improvements in patient care and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-pink-600 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare-Specific Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored pricing for healthcare organizations of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500 shadow-lg shadow-red-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600/10 to-pink-600/10 border border-red-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Patient Care?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading healthcare organizations using AI to improve outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}