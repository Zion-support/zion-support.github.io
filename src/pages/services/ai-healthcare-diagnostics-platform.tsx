import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Cpu,
  Network,
  BookOpen,
  GraduationCap,
  Building2,
  Atom,
  Satellite,
  Activity,
  Search,
  FileText,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  ShieldCheck,
  AlertCircle,
  Target2,
  LockKeyhole,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  AlertOctagon,
  Microscope,
  TestTube,
  Flask,
  Beaker,
  Pill,
  Syringe,
  Bandage,
  X,
  Eye,
  Dna,
  Pill
} from 'lucide-react';

export default function AIHealthcareDiagnosticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical data with 99.7% accuracy for early disease detection"
    },
    {
      icon: Microscope,
      title: "Multi-Modal Analysis",
      description: "Comprehensive analysis of medical images, lab results, patient history, and genetic data"
    },
    {
      icon: TrendingUp,
      title: "Predictive Healthcare",
      description: "AI algorithms predict health risks and recommend preventive measures before symptoms appear"
    },
    {
      icon: Users,
      title: "Collaborative Care",
      description: "Enable healthcare teams to collaborate seamlessly with shared diagnostic insights and treatment plans"
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "Continuous health monitoring with instant alerts for critical changes and emergency situations"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring patient data privacy and regulatory compliance"
    }
  ];

  const useCases = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart disease detection, ECG analysis, and cardiovascular risk assessment"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Brain imaging analysis, stroke detection, and neurological disorder diagnosis"
    },
    {
      icon: Microscope,
      title: "Pathology",
      description: "Digital pathology analysis, cancer detection, and tissue sample examination"
    },
    {
      icon: Eye,
      title: "Radiology",
      description: "Medical imaging analysis, tumor detection, and diagnostic radiology support"
    },
    {
      icon: Dna,
      title: "Genomics",
      description: "Genetic risk assessment, personalized medicine, and hereditary disease analysis"
    },
    {
      icon: Pill,
      title: "Pharmacology",
      description: "Drug interaction analysis, dosage optimization, and personalized medication plans"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$799",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 50 patients/month",
        "Basic AI diagnostics",
        "Standard medical imaging",
        "Email support",
        "Basic reporting",
        "Cloud dashboard"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,499",
      period: "/month",
      description: "Ideal for hospitals and large medical facilities",
      features: [
        "Up to 500 patients/month",
        "Advanced AI diagnostics",
        "Multi-modal analysis",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Clinical decision support"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "Research capabilities",
        "24/7 support",
        "Custom integrations",
        "Compliance reporting",
        "SLA guarantees",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time from days to hours with AI-powered analysis"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Save up to 40% on diagnostic costs and improve resource utilization"
    },
    {
      icon: Target,
      title: "Higher Accuracy",
      description: "AI algorithms reduce diagnostic errors and improve patient outcomes"
    },
    {
      icon: Rocket,
      title: "Preventive Care",
      description: "Identify health risks early and implement preventive measures proactively"
    }
  ];

  const diagnosticCapabilities = [
    {
      icon: Microscope,
      title: "Medical Imaging",
      description: "AI analysis of X-rays, CT scans, MRIs, and ultrasound images"
    },
    {
      icon: TestTube,
      title: "Laboratory Tests",
      description: "Comprehensive analysis of blood work, urine tests, and other lab results"
    },
    {
      icon: Dna,
      title: "Genetic Testing",
      description: "DNA analysis for hereditary diseases and personalized medicine"
    },
    {
      icon: Activity,
      title: "Vital Signs",
      description: "Real-time monitoring and analysis of patient vital signs"
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "AI-powered analysis of patient history and medical documentation"
    },
    {
      icon: Users,
      title: "Patient Symptoms",
      description: "Symptom analysis and differential diagnosis support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>AI-Powered Healthcare Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Healthcare
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400"> Diagnostics Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionize healthcare delivery with our AI-powered diagnostics platform. 
              Detect diseases earlier, improve diagnostic accuracy, and enhance patient outcomes 
              with cutting-edge artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                <Stethoscope className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Healthcare AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI healthcare platform combines cutting-edge machine learning with medical expertise 
              to provide unprecedented diagnostic accuracy and patient care insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform analyzes multiple types of medical data to provide comprehensive 
              diagnostic insights and treatment recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform supports healthcare professionals across all medical specialties, 
              providing specialized diagnostic tools and insights for better patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Healthcare Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the healthcare AI plan that fits your facility's needs and scale as you grow. 
              All plans include our core AI diagnostic capabilities and HIPAA compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-green-500 shadow-lg shadow-green-500/25' 
                    : 'border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Healthcare AI Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-powered diagnostics that improve 
              patient outcomes and reduce healthcare costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-green-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of healthcare providers who trust our AI platform to improve 
              diagnostic accuracy and enhance patient care outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
              >
                Schedule Healthcare Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}