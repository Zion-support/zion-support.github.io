import React from 'react.ts';
import { SEO  } from '@/components/SEO';
import { motion  } from 'framer-motion.ts';
import { Heart, Brain, Shield, Zap, Target, CheckCircle, Star, ArrowRight, Phone, Mail, ExternalLink, Activity, Users, Clock, DollarSign, Database, Lock, BarChart3, TrendingUp  } from 'lucide-react.ts';

const AIHealthcareAnalyticsPlatform: React.FC = (): JSX.Element => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Diagnostics',
      description: 'AI algorithms predict disease progression and treatment outcomes with 89% accuracy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Patient Risk Scoring',
      description: 'Real-time risk assessment for readmissions, complications, and adverse events',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Population Health Analytics',
      description: 'Comprehensive analysis of patient populations for preventive care strategies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Clinical Decision Support',
      description: 'Evidence-based recommendations for treatment plans and medication management',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring with instant alerts for critical changes',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Treatment Optimization',
      description: 'AI-driven treatment recommendations based on patient history and outcomes',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Community Hospital',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small to medium healthcare facilities',
      features: [
        'Up to 500 patient beds',
        'Basic predictive analytics',
        'Patient risk scoring',
        'Clinical decision support',
        'Basic reporting',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Regional Medical Center',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing healthcare networks',
      features: [
        'Up to 2,000 patient beds',
        'Advanced AI algorithms',
        'Population health analytics',
        'Custom dashboards',
        'API access',
        'Priority support',
        'HIPAA compliance tools'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Academic Medical Center',
      price: '$8,999',
      period: '/month',
      description: 'For large healthcare systems and research institutions',
      features: [
        'Unlimited patient capacity',
        'Custom AI models',
        'Research analytics tools',
        'White-label solution',
        'Dedicated support team',
        '24/7 phone support',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Hospitals & Health Systems',
      description: 'Optimize patient care, reduce readmissions, and improve operational efficiency across multiple facilities',
      metrics: ['Reduce readmissions by 25%', 'Improve patient outcomes by 30%', 'Cut operational costs by 20%']
    },
    {
      title: 'Primary Care Practices',
      description: 'Preventive care strategies, chronic disease management, and population health optimization',
      metrics: ['Increase preventive care by 40%', 'Reduce ER visits by 35%', 'Improve patient satisfaction by 45%']
    },
    {
      title: 'Specialty Clinics',
      description: 'Disease-specific analytics, treatment optimization, and patient outcome tracking',
      metrics: ['Optimize treatment plans by 50%', 'Reduce complications by 30%', 'Improve recovery times by 25%']
    }
  ];

  const integrations = [
    'Epic', 'Cerner', 'Allscripts', 'Meditech', 'NextGen', 'Athenahealth',
    'Practice Fusion', 'eClinicalWorks', 'Kareo', 'DrChrono', 'AdvancedMD',
    'HL7 FHIR', 'DICOM', 'HL7 v2', 'CCDA', 'X12', 'Webhooks'
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '25% Fewer Readmissions',
      description: 'Predict and prevent patient readmissions with AI-powered risk assessment'
    },
    {
      icon: Users,
      title: '30% Better Outcomes',
      description: 'Improve patient outcomes through personalized treatment recommendations'
    },
    {
      icon: DollarSign,
      title: '20% Cost Reduction',
      description: 'Optimize resource allocation and reduce unnecessary procedures'
    },
    {
      icon: Clock,
      title: '50% Faster Diagnosis',
      description: 'Accelerate diagnosis and treatment planning with AI insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered analytics. Reduce readmissions by 25%, improve patient outcomes by 30%, and optimize clinical decision-making with predictive insights."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with artificial intelligence. Predict patient outcomes, 
              optimize treatment plans, and improve population health with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements in patient care and operational efficiency
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to deliver better patient care with AI-powered intelligence
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Healthcare Facility
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Healthcare Settings
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different healthcare organizations are transforming patient care with AI
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless EHR Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing electronic health record systems and healthcare platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center hover:border-slate-600 transition-all duration-200"
              >
                <span className="text-slate-300 font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare-Grade Security & Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your patient data is protected with the highest standards of security and compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>
              <p className="text-slate-300">Full HIPAA compliance with end-to-end encryption and secure data handling</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">SOC 2 Type II</h3>
              <p className="text-slate-300">SOC 2 Type II certification for enterprise-grade security and reliability</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Monitoring</h3>
              <p className="text-slate-300">24/7 security monitoring with automated threat detection and response</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of healthcare organizations already using AI to improve patient care and outcomes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>Cancel time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <ExternalLink className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;