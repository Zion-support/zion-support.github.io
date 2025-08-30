import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Eye, 
  Stethoscope, 
  CheckCircle, 
  Star, 
  Users, 
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  BarChart3,
  ArrowRight,
  Sparkles,
  Atom,
  Workflow,
  Target,
  Rocket,
  Shield,
  Zap,
  TrendingUp,
  Activity,
  Microscope,
  Pill,
  Syringe,
  Thermometer,
  BrainCircuit
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIHealthcareDiagnostics() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis"
    },
    {
      icon: Eye,
      title: "Medical Imaging AI",
      description: "Computer vision for X-rays, MRIs, CT scans, and ultrasound analysis"
    },
    {
      icon: Heart,
      title: "Predictive Analytics",
      description: "Early disease prediction and risk assessment using patient data"
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "AI-powered recommendations for treatment plans and medication"
    }
  ];

  const diagnosticCapabilities = [
    {
      category: "Radiology",
      services: ["X-ray Analysis", "MRI Interpretation", "CT Scan Review", "Ultrasound Assessment"],
      accuracy: "98.5%",
      icon: Eye
    },
    {
      category: "Cardiology",
      services: ["ECG Analysis", "Heart Disease Detection", "Arrhythmia Detection", "Risk Assessment"],
      accuracy: "97.8%",
      icon: Heart
    },
    {
      category: "Oncology",
      services: ["Tumor Detection", "Cancer Screening", "Treatment Response", "Prognosis Analysis"],
      accuracy: "96.9%",
      icon: Microscope
    },
    {
      category: "Neurology",
      services: ["Brain Scan Analysis", "Stroke Detection", "Alzheimer's Screening", "Seizure Detection"],
      accuracy: "97.2%",
      icon: BrainCircuit
    }
  ];

  const benefits = [
    "Reduce diagnostic errors by up to 85%",
    "Improve early detection rates by 60%",
    "Cut diagnosis time by 70%",
    "Enhance treatment accuracy by 75%",
    "Reduce healthcare costs by 40%",
    "Enable remote diagnostics and telemedicine"
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$3,500",
      period: "/month",
      features: [
        "Up to 1,000 scans/month",
        "Basic AI diagnosis",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ]
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      features: [
        "Up to 10,000 scans/month",
        "Advanced AI algorithms",
        "Custom reporting",
        "Priority support",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$18,000",
      period: "/month",
      features: [
        "Unlimited scans",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom development"
      ]
    }
  ];

  const complianceFeatures = [
    "HIPAA Compliant",
    "FDA Approved Algorithms",
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "ISO 27001 Certified",
    "End-to-end Encryption"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Diagnostics - Zion Tech Group"
        description="Revolutionary AI-powered healthcare diagnostics platform for accurate disease detection, medical imaging analysis, and clinical decision support."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Stethoscope className="w-12 h-12 text-green-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Healthcare Diagnostics
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize healthcare with AI-powered diagnostics, medical imaging analysis, 
              and clinical decision support for accurate and timely patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Learn More
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with medical expertise 
              to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized Diagnostic Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered diagnostics across all major medical specialties 
              with industry-leading accuracy rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{capability.category}</h3>
                    <div className="flex items-center">
                      <span className="text-green-400 font-semibold text-lg">{capability.accuracy}</span>
                      <span className="text-gray-400 ml-2">accuracy</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {capability.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI diagnostics platform delivers measurable improvements in healthcare outcomes, 
              efficiency, and cost reduction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance standards to protect 
              patient data and ensure regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 text-center"
              >
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <span className="text-white font-semibold text-lg">{feature}</span>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare facility's needs. All plans include 
              our core AI diagnostic capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  index === 1 
                    ? 'border-green-400/50 shadow-lg shadow-green-500/25' 
                    : 'border-slate-600/50'
                } relative`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg hover:shadow-green-500/25'
                      : 'border border-green-400 text-green-400 hover:bg-green-400/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare facilities worldwide in adopting AI-powered diagnostics 
              for better patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
