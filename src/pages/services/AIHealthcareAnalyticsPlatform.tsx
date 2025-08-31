import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Lock,
  Globe,
  Smartphone,
  Heart,
  Stethoscope,
  Database,
  TrendingUp
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI-powered disease prediction and patient outcome forecasting using advanced machine learning algorithms"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical health indicators and anomalies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with full HIPAA compliance and data encryption at rest and in transit"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Care Team Collaboration",
      description: "Integrated communication tools for doctors, nurses, and specialists to coordinate patient care"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Population Health Insights",
      description: "Comprehensive analytics for population health management and preventive care strategies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Interoperability",
      description: "Seamless integration with existing EHR systems and healthcare data sources"
    }
  ];

  const pricingPlans = [
    {
      name: "Community Hospital",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small to medium community hospitals",
      features: [
        "Up to 100 beds",
        "Basic predictive analytics",
        "Standard monitoring tools",
        "Email support",
        "Basic reporting",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Regional Medical Center",
      price: "$4,999",
      period: "/month",
      description: "Ideal for regional hospitals and medical centers",
      features: [
        "Up to 500 beds",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Care team collaboration"
      ],
      popular: true
    },
    {
      name: "Academic Medical Center",
      price: "$9,999",
      period: "/month",
      description: "For large academic medical centers and health systems",
      features: [
        "Unlimited beds",
        "Custom AI models",
        "Research capabilities",
        "Dedicated support",
        "White-label solution",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Reduce readmission rates by 25% through predictive analytics"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Improve patient outcomes by 30% with AI-powered insights"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Save $2M+ annually through operational efficiency gains"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Reduce physician burnout with automated monitoring and alerts"
    }
  ];

  const useCases = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Predictive analytics for heart disease, arrhythmia detection, and cardiac event prevention"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology",
      description: "Stroke prediction, seizure detection, and neurodegenerative disease monitoring"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Primary Care",
      description: "Population health management, preventive care optimization, and chronic disease management"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Emergency Medicine",
      description: "Triage optimization, resource allocation, and critical care decision support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Healthcare Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with AI-powered analytics. Predictive insights, real-time monitoring, and population health management for modern healthcare organizations." />
        <meta name="keywords" content="AI healthcare analytics, predictive medicine, population health, patient monitoring, healthcare AI, medical analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-healthcare-analytics-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="text-green-400 block">Analytics Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered analytics. Get predictive insights, 
              real-time monitoring, and population health management for modern healthcare organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
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
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to revolutionize patient care and operational efficiency
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered solutions for every medical specialty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-green-400 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Proven Healthcare Outcomes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results that transform patient care and hospital operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                {benefit.icon}
                <span className="text-lg text-gray-300">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scalable solutions for healthcare organizations of all sizes
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
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join leading healthcare organizations using AI to improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Healthcare AI Implementation Help?
          </h3>
          <p className="text-gray-300 mb-6">
            Our healthcare technology experts are here to guide your AI transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-5 h-5 mr-2" />
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Lock className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;