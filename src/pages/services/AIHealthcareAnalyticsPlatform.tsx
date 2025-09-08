import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Shield, 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Lightbulb,
  Target,
  AlertTriangle,
  Award,
  Globe,
  Cpu,
  Lock,
  PieChart,
  Database,
  Microscope,
  Stethoscope,
  Pill
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical images, lab results, and patient data for accurate diagnosis."
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Predict patient outcomes, disease progression, and treatment effectiveness using historical data patterns."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and full HIPAA compliance for patient data protection and privacy."
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with AI-driven alerts for critical health indicators and trends."
    },
    {
      icon: Users,
      title: "Population Health",
      description: "Analyze population health trends, identify risk factors, and optimize healthcare resource allocation."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate with existing EHR systems, medical devices, and healthcare databases."
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 30-50% with AI assistance",
    "Reduce healthcare costs by 25-40% through predictive insights",
    "Enhance patient outcomes with personalized treatment plans",
    "Streamline clinical workflows and reduce administrative burden",
    "Enable proactive healthcare through early risk detection"
  ];

  const pricing = [
    {
      name: "Clinical",
      price: "$299",
      period: "/month",
      description: "Perfect for individual practitioners",
      features: [
        "Basic AI diagnostic tools",
        "Up to 1,000 patient records",
        "Standard analytics dashboard",
        "Email support",
        "HIPAA compliance",
        "5 AI models"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$999",
      period: "/month",
      description: "Ideal for hospitals and clinics",
      features: [
        "Advanced AI analytics",
        "Up to 50,000 patient records",
        "Custom dashboards",
        "Priority support",
        "Advanced security",
        "Unlimited AI models",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Custom AI solutions",
        "Unlimited patient records",
        "Enterprise integrations",
        "Dedicated support",
        "Custom compliance",
        "White-label options",
        "Multi-facility management"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      specialty: "Radiology",
      description: "AI-powered image analysis for X-rays, CT scans, and MRIs with 95%+ accuracy",
      applications: "Chest X-ray analysis, tumor detection, fracture identification"
    },
    {
      specialty: "Cardiology",
      description: "Predictive analytics for heart disease risk assessment and treatment optimization",
      applications: "ECG analysis, heart failure prediction, medication optimization"
    },
    {
      specialty: "Oncology",
      description: "AI-driven cancer detection, staging, and personalized treatment planning",
      applications: "Tumor classification, treatment response prediction, survival analysis"
    },
    {
      specialty: "Emergency Medicine",
      description: "Real-time triage optimization and critical care decision support",
      applications: "Patient prioritization, resource allocation, outcome prediction"
    }
  ];

  const aiModels = [
    "Medical Image Analysis (X-ray, CT, MRI, Ultrasound)",
    "Natural Language Processing for Clinical Notes",
    "Predictive Risk Modeling",
    "Treatment Response Prediction",
    "Population Health Analytics",
    "Clinical Trial Optimization",
    "Drug Interaction Analysis",
    "Patient Outcome Forecasting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-pink-600/20 to-rose-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics Platform
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics that improve diagnosis accuracy, 
              predict patient outcomes, and optimize treatment plans for better patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Healthcare AI Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with healthcare expertise 
              to deliver insights that improve patient care and clinical outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Patient Care with AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience unprecedented improvements in diagnostic accuracy, treatment planning, and patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Specialized Healthcare Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform delivers specialized solutions across multiple medical specialties 
              to improve patient care and clinical decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.specialty}</h3>
                </div>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Applications:</h4>
                  <p className="text-gray-300 text-sm">{useCase.applications}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Comprehensive AI Model Library
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access a wide range of specialized AI models designed for healthcare applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
              >
                <Brain className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">{model}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Choose Your Healthcare Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of healthcare providers at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-gray-700'
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
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading healthcare providers who have already improved patient care with AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;