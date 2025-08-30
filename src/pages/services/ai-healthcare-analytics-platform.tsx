import React from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from '../components/SEO';
import { Heart, 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  Users,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Lock,
  Eye,
  PieChart,
  TrendingUp,
  AlertTriangle
 } from 'lucide-react';

export default function AIHealthcareAnalyticsPlatform(...args: []):  {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis Support',
      description: 'Advanced machine learning algorithms assist doctors with accurate diagnosis and treatment recommendations'
    },
    {
      icon: Activity,
      title: 'Predictive Health Analytics',
      description: 'AI predicts health risks and disease progression based on patient data and medical history'
    },
    {
      icon: Heart,
      title: 'Patient Outcome Prediction',
      description: 'Machine learning models forecast treatment outcomes and recovery probabilities'
    },
    {
      icon: Shield,
      title: 'Drug Interaction Analysis',
      description: 'AI identifies potential drug interactions and adverse effects in real-time'
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Continuous patient monitoring with instant alerts for critical health changes'
    },
    {
      icon: Eye,
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans for faster, more accurate diagnosis'
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$799',
      period: '/month',
      description: 'Perfect for small medical practices',
      features: [
        'Up to 50 patients',
        'Basic AI diagnosis support',
        'Patient analytics dashboard',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Hospital',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for hospitals and large practices',
      features: [
        'Up to 500 patients',
        'Advanced AI algorithms',
        'Predictive analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom dashboards',
        'Advanced integrations',
        'Compliance reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      description: 'For healthcare systems and networks',
      features: [
        'Unlimited patients',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support team',
        'Advanced compliance',
        'On-premise options',
        'SLA guarantees',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: '30% Faster Diagnosis',
      description: 'AI assistance reduces diagnosis time and improves accuracy'
    },
    {
      icon: Target,
      title: '95% Accuracy Rate',
      description: 'Advanced algorithms provide highly accurate medical insights'
    },
    {
      icon: Clock,
      title: '24/7 Patient Monitoring',
      description: 'Continuous monitoring ensures patient safety around the clock'
    },
    {
      icon: BarChart3,
      title: '40% Cost Reduction',
      description: 'AI optimization reduces healthcare costs and improves efficiency'
    }
  ];

  const useCases = [
    {
      title: 'Diagnostic Imaging',
      description: 'AI analyzes medical images to detect abnormalities and assist radiologists',
      icon: Eye
    },
    {
      title: 'Patient Risk Assessment',
      description: 'Predictive models identify high-risk patients for proactive care',
      icon: AlertTriangle
    },
    {
      title: 'Treatment Optimization',
      description: 'AI recommends optimal treatment plans based on patient data and outcomes',
      icon: Heart
    },
    {
      title: 'Drug Safety Monitoring',
      description: 'Real-time monitoring of drug interactions and adverse effects',
      icon: Shield
    }
  ];

  const complianceStandards = [
    'HIPAA Compliant',
    'FDA Approved',
    'ISO 13485',
    'SOC 2 Type II',
    'GDPR Compliant',
    'HITECH Certified'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform with 95% accuracy rate. Diagnostic support, predictive analytics, and patient monitoring. Start from $799/month."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI-powered healthcare platform delivers 95% accuracy in diagnosis support, predictive analytics, 
              and patient monitoring. Revolutionize patient care with the future of medical technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to revolutionize healthcare delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of healthcare providers already experiencing the benefits of AI-powered analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform addresses the full spectrum of healthcare challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet healthcare industry standards and regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center hover:border-blue-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{standard}</p>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Healthcare Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed for healthcare providers of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare providers already using our AI-powered platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Contact Healthcare Team
              </button>
            </div>
            
            <p className="text-gray-400 mt-6">
              No credit card required • 30-day free trial • HIPAA compliant
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}