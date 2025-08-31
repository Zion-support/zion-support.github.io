import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Sparkles,
  BarChart3,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Clock,
  DollarSign,
  Stethoscope,
  Pill,
  Microscope,
  Syringe,
  Thermometer,
  Eye,
  BrainCircuit
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcarePlatform() {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis",
      icon: Brain,
      benefits: ["Early disease detection", "Pattern recognition", "Symptom analysis", "Differential diagnosis"]
    },
    {
      title: "Predictive Analytics",
      description: "Predict patient outcomes and identify risk factors before they become critical",
      icon: Activity,
      benefits: ["Risk assessment", "Outcome prediction", "Preventive care", "Population health insights"]
    },
    {
      title: "Medical Imaging AI",
      description: "Computer vision algorithms for radiology, pathology, and medical imaging analysis",
      icon: Eye,
      benefits: ["Radiology assistance", "Pathology analysis", "Image segmentation", "Anomaly detection"]
    },
    {
      title: "Personalized Medicine",
      description: "AI-driven treatment recommendations based on individual patient data and genetics",
      icon: Heart,
      benefits: ["Genomic analysis", "Treatment optimization", "Drug response prediction", "Personalized care plans"]
    }
  ];

  const healthcareModules = [
    {
      name: "Clinical Decision Support",
      capabilities: ["Diagnosis assistance", "Treatment recommendations", "Drug interaction checking", "Clinical guidelines"],
      aiFeatures: ["Evidence-based suggestions", "Learning from outcomes", "Risk stratification", "Real-time alerts"]
    },
    {
      name: "Patient Management",
      capabilities: ["Electronic health records", "Appointment scheduling", "Patient communication", "Care coordination"],
      aiFeatures: ["Smart scheduling", "Predictive follow-ups", "Automated reminders", "Patient engagement"]
    },
    {
      name: "Research & Analytics",
      capabilities: ["Clinical trials", "Data analysis", "Outcome research", "Population health"],
      aiFeatures: ["Predictive modeling", "Data mining", "Trend analysis", "Research insights"]
    },
    {
      name: "Telemedicine & Remote Care",
      capabilities: ["Virtual consultations", "Remote monitoring", "Home health", "Mobile health"],
      aiFeatures: ["Symptom assessment", "Remote diagnostics", "Health monitoring", "Care coordination"]
    }
  ];

  const useCases = [
    {
      specialty: "Oncology",
      challenges: ["Early cancer detection", "Treatment planning", "Drug resistance", "Patient monitoring"],
      solutions: ["AI screening tools", "Personalized treatment", "Predictive analytics", "Continuous monitoring"],
      outcomes: "30-50% earlier detection"
    },
    {
      specialty: "Cardiology",
      challenges: ["Heart disease prediction", "ECG interpretation", "Risk assessment", "Preventive care"],
      solutions: ["AI ECG analysis", "Risk modeling", "Preventive algorithms", "Lifestyle recommendations"],
      outcomes: "40-60% risk reduction"
    },
    {
      specialty: "Neurology",
      challenges: ["Stroke prediction", "Cognitive decline", "Seizure detection", "Treatment response"],
      solutions: ["Predictive models", "Cognitive assessment", "Real-time monitoring", "Personalized therapy"],
      outcomes: "25-45% improvement in outcomes"
    },
    {
      specialty: "Radiology",
      challenges: ["Image interpretation", "Workflow efficiency", "Error reduction", "Report generation"],
      solutions: ["AI image analysis", "Automated reporting", "Quality assurance", "Workflow optimization"],
      outcomes: "50-70% faster diagnosis"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$800",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "AI diagnosis assistance (basic)",
        "Patient management (up to 1,000 patients)",
        "Basic analytics",
        "Email support",
        "Standard compliance templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,500",
      period: "/month",
      description: "Ideal for hospitals and healthcare systems",
      features: [
        "Advanced AI diagnostics",
        "Patient management (up to 10,000 patients)",
        "Medical imaging AI",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom compliance reporting",
        "24/7 monitoring"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$8,000",
      period: "/month",
      description: "Comprehensive platform for large healthcare networks",
      features: [
        "Full AI healthcare suite",
        "Unlimited patient capacity",
        "Custom AI models",
        "Dedicated healthcare team",
        "24/7 premium support",
        "White-label solutions",
        "On-premise deployment",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceStandards = [
    "HIPAA", "HITECH", "FDA 21 CFR Part 11", "SOC 2 Type II", "ISO 27001", 
    "NIST Cybersecurity Framework", "GDPR", "CCPA", "HITRUST", "Meaningful Use"
  ];

  const aiCapabilities = [
    {
      technology: "Natural Language Processing",
      applications: ["Clinical documentation", "Patient communication", "Research analysis", "Regulatory compliance"],
      accuracy: "95%+ accuracy"
    },
    {
      technology: "Computer Vision",
      applications: ["Medical imaging", "Pathology analysis", "Surgical assistance", "Quality control"],
      accuracy: "98%+ accuracy"
    },
    {
      technology: "Machine Learning",
      applications: ["Predictive modeling", "Risk assessment", "Treatment optimization", "Outcome prediction"],
      accuracy: "90%+ accuracy"
    },
    {
      technology: "Deep Learning",
      applications: ["Complex pattern recognition", "Multi-modal analysis", "Advanced diagnostics", "Research insights"],
      accuracy: "92%+ accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="AI-Powered Healthcare Platform | Zion Tech Group"
        description="Revolutionary AI-driven healthcare platform providing intelligent diagnosis, predictive analytics, and personalized medicine for modern healthcare providers."
        keywords="AI healthcare, medical AI, diagnosis, predictive analytics, personalized medicine, telemedicine"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with artificial intelligence. 
              Enhance diagnosis accuracy, predict patient outcomes, and 
              deliver personalized care with our comprehensive AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating healthcare elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 7 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with intelligent automation and predictive medicine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-green-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Healthcare Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete healthcare solutions with AI-enhanced capabilities across all specialties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcareModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{module.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Core Capabilities:</h4>
                  <ul className="space-y-2 mb-4">
                    {module.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Stethoscope className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">AI Features:</h4>
                  <ul className="space-y-1">
                    {module.aiFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Brain className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Specialty Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions for every medical specialty with proven outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.specialty}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Activity className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2 mb-4">
                    {useCase.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg border border-blue-500/30">
                  <p className="text-blue-400 font-semibold">
                    Expected Outcomes: {useCase.outcomes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-green-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Technology Capabilities
              </h2>
              <p className="text-gray-300 mb-6">
                State-of-the-art artificial intelligence technologies powering our healthcare platform.
              </p>
              <div className="space-y-4">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">{capability.technology}</h4>
                    <div className="mb-2">
                      <p className="text-gray-300 text-sm mb-1">Applications:</p>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {capability.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-green-400 text-sm font-semibold">Accuracy: {capability.accuracy}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-gray-300 mb-6">
                Meet healthcare industry standards and regulatory requirements with built-in compliance features.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{standard}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the healthcare platform plan that fits your organization's needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transform Healthcare Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare providers using AI to improve patient outcomes and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                Contact Healthcare Team
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free trial includes full platform access for 30 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}