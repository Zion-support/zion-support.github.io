import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Shield, TrendingUp, Target, Zap, CheckCircle, ArrowRight,
  Users, Activity, Database, Lock, BarChart3, AlertTriangle, Calendar,
  Clock, Globe, Smartphone, Monitor, Tablet, Stethoscope, Pill, Syringe,
  Microscope, Thermometer, Eye, Brain, Lung, Liver, Kidney
} from 'lucide-react';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Patient Analytics",
      description: "AI-powered prediction of patient outcomes, readmission risks, and treatment effectiveness"
    },
    {
      icon: Heart,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of vital signs and health metrics with instant alerts"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security and compliance for sensitive patient data"
    },
    {
      icon: TrendingUp,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and disease patterns"
    },
    {
      icon: Target,
      title: "Treatment Optimization",
      description: "AI-recommended treatment plans based on patient history and outcomes"
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
      description: "Real-time clinical insights and recommendations for healthcare providers"
    }
  ];

  const benefits = [
    "Reduce patient readmission rates by 35% with predictive analytics",
    "Improve treatment outcomes by 40% through AI-optimized care plans",
    "Save 25+ hours weekly on patient monitoring and documentation",
    "Enhance diagnostic accuracy by 30% with AI-powered insights",
    "Optimize resource allocation and reduce healthcare costs by 20%",
    "Improve patient satisfaction scores by 45% with personalized care"
  ];

  const pricing = [
    {
      name: "Clinic",
      price: "$299",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 1,000 patient records",
        "Basic predictive analytics",
        "Patient monitoring dashboard",
        "HIPAA compliance",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$899",
      period: "/month",
      description: "Ideal for hospitals and large medical facilities",
      features: [
        "Unlimited patient records",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Clinical decision support",
        "Population health analytics",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for healthcare systems",
      features: [
        "Everything in Hospital",
        "Custom AI models",
        "Multi-facility management",
        "Advanced reporting",
        "Dedicated support team",
        "On-premise deployment",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>AI-Powered Healthcare Analytics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics, predictive insights, 
              and intelligent clinical decision support for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to improve patient care, optimize operations, and enhance clinical outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-powered insights and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Healthcare Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your healthcare analytics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-lg shadow-red-500/25' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-blue-600 text-white shadow-lg shadow-red-500/25'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join leading healthcare providers who trust AI-powered analytics for better patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300"
              >
                Start Your Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}