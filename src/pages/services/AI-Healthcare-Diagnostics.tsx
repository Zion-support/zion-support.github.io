import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  TrendingUp,
  Activity,
  Search,
  Eye,
  Target,
  Award,
  Phone,
  Play,
  Stethoscope,
  Microscope,
  Pill,
  Syringe,
  Thermometer,
  X,
  Scan,
  FileText,
  Shield,
  MapPin,
  Mail
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIHealthcareDiagnostics() {
  const features = [
    "AI-powered medical image analysis",
    "Automated disease detection and diagnosis",
    "Predictive health risk assessment",
    "Real-time patient monitoring",
    "Clinical decision support system",
    "Medical report generation",
    "Integration with EHR systems",
    "Multi-modal data analysis",
    "Compliance with healthcare standards",
    "Secure patient data handling"
  ];

  const benefits = [
    "Improve diagnostic accuracy by 25-40%",
    "Reduce diagnosis time by 60%",
    "Lower healthcare costs by 20-30%",
    "Enhance patient outcomes and care quality",
    "Reduce medical errors and misdiagnosis",
    "Enable early disease detection and prevention"
  ];

  const pricing = [
    {
      name: "Clinic",
      price: "$799",
      period: "/month",
      features: [
        "Up to 100 patients/month",
        "Basic diagnostic tools",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,499",
      period: "/month",
      features: [
        "Up to 1,000 patients/month",
        "Advanced AI diagnostics",
        "Real-time monitoring",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      features: [
        "Unlimited patients",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const specialties = [
    {
      title: "Radiology",
      description: "AI-powered analysis of X-rays, CT scans, MRIs, and other imaging modalities",
      icon: X
    },
    {
      title: "Pathology",
      description: "Automated analysis of tissue samples and cellular structures",
      icon: Microscope
    },
    {
      title: "Cardiology",
      description: "Heart disease detection and cardiovascular health monitoring",
      icon: Heart
    },
    {
      title: "Dermatology",
      description: "Skin condition analysis and skin cancer detection",
      icon: Eye
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Healthcare Diagnostics | Zion Tech Group"
        description="Revolutionary AI platform for medical diagnostics, disease detection, and patient care. Improve diagnostic accuracy by 25-40% and reduce diagnosis time by 60%."
        keywords="AI healthcare, medical diagnostics, disease detection, medical imaging, clinical decision support, patient monitoring"
        ogImage="https://ziontechgroup.com/images/ai-healthcare-diagnostics.jpg"
        ogUrl="https://ziontechgroup.com/services/ai-healthcare-diagnostics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered Healthcare Diagnostics
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Transform healthcare delivery with our advanced AI platform that enhances diagnostic accuracy, 
                  accelerates diagnosis, and improves patient outcomes across all medical specialties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Request Demo
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    View Pricing
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Healthcare Features for Modern Medicine
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge medical technology with machine learning 
                to deliver unprecedented diagnostic accuracy and patient care capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300"
                >
                  <CheckCircle className="h-8 w-8 text-pink-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and accuracy in medical diagnostics with our AI platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Medical Specialties
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform supports all major medical specialties with specialized diagnostic capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <specialty.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{specialty.title}</h3>
                  <p className="text-gray-300 text-sm">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your healthcare organization's needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-700/50 p-8 rounded-xl border-2 ${
                    plan.popular 
                      ? 'border-pink-500 bg-gradient-to-br from-slate-700/50 to-pink-900/20' 
                      : 'border-slate-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of healthcare organizations already using our AI platform to improve patient care and outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}