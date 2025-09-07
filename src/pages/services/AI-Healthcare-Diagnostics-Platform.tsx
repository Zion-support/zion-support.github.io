import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Eye, 
  Stethoscope, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Lock,
  Eye as EyeIcon,
  Clock,
  Users,
  Star,
  Target,
  PieChart,
  LineChart,
  Microscope,
  Pill,
  Syringe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIHealthcareDiagnosticsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms for accurate disease detection"
    },
    {
      icon: Eye,
      title: "Medical Imaging AI",
      description: "Computer vision for X-rays, MRIs, CT scans, and ultrasounds"
    },
    {
      icon: Heart,
      title: "Predictive Analytics",
      description: "Early disease prediction and risk assessment using patient data"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security and privacy protection for patient data"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant diagnostic results for emergency situations"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Cloud-based platform accessible from anywhere in the world"
    }
  ];

  const diagnosticCapabilities = [
    {
      title: "Radiology",
      description: "AI-powered analysis of X-rays, CT scans, and MRIs",
      icon: Eye,
      accuracy: "96.8%"
    },
    {
      title: "Pathology",
      description: "Digital pathology analysis for cancer detection and classification",
      icon: Microscope,
      accuracy: "94.2%"
    },
    {
      title: "Cardiology",
      description: "ECG analysis and cardiovascular disease prediction",
      icon: Heart,
      accuracy: "97.1%"
    },
    {
      title: "Dermatology",
      description: "Skin lesion analysis and skin cancer detection",
      icon: Eye,
      accuracy: "93.7%"
    },
    {
      title: "Ophthalmology",
      description: "Retinal image analysis for diabetic retinopathy detection",
      icon: Eye,
      accuracy: "95.9%"
    },
    {
      title: "Neurology",
      description: "Brain scan analysis for neurological disorders",
      icon: Brain,
      accuracy: "96.3%"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small medical clinics",
      features: [
        "Up to 1,000 scans/month",
        "Basic AI models",
        "Standard support",
        "Cloud storage (100GB)",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Hospital",
      price: "$15,000",
      period: "/month",
      description: "Ideal for medium-sized hospitals",
      features: [
        "Up to 10,000 scans/month",
        "Advanced AI models",
        "Priority support",
        "Cloud storage (1TB)",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Training & onboarding"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Healthcare Network",
      price: "$50,000",
      period: "/month",
      description: "For large healthcare networks",
      features: [
        "Unlimited scans/month",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited cloud storage",
        "Full customization",
        "On-premise deployment",
        "SLA guarantees",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improved Accuracy",
      description: "AI algorithms achieve higher accuracy than traditional methods",
      improvement: "+15%"
    },
    {
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time from hours to minutes",
      improvement: "-80%"
    },
    {
      title: "Cost Reduction",
      description: "Lower healthcare costs through early detection",
      improvement: "-25%"
    },
    {
      title: "Better Outcomes",
      description: "Improved patient outcomes through early intervention",
      improvement: "+30%"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Diagnostics Platform | Zion Tech Group"
        description="Revolutionize healthcare with our AI Healthcare Diagnostics Platform. Advanced medical imaging, predictive analytics, and real-time diagnosis for better patient outcomes."
        keywords="AI healthcare, medical diagnostics, medical imaging, healthcare AI, diagnostic platform, medical technology"
        canonical="https://ziontechgroup.com/services/ai-healthcare-diagnostics-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-red-400 text-sm font-medium">AI Healthcare</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare
                <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                  Diagnostics Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform healthcare delivery with AI-powered diagnostics. 
                Achieve unprecedented accuracy, speed, and patient outcomes through advanced medical technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center space-x-2 border border-red-500/30 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                  <span>Watch Demo</span>
                  <EyeIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-sm text-gray-400 mb-2">{benefit.title}</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">{benefit.improvement}</div>
                  <div className="text-sm text-gray-300">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Healthcare Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with medical expertise to deliver 
                unprecedented diagnostic capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Capabilities Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Diagnostic Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Covering all major medical specialties with AI-powered accuracy 
                that exceeds human capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diagnosticCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">{capability.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Healthcare-Focused Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your healthcare facility's needs. 
                Scale as you grow and improve patient care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-red-500/50 bg-gradient-to-br from-slate-800/80 to-red-900/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Healthcare Network" ? "/contact" : "/contact"}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                        : 'border border-red-500/30 text-red-400 hover:bg-red-500/10'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/10 to-pink-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the AI healthcare revolution and provide better patient care 
                through advanced diagnostic technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 border border-red-500/30 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
                >
                  <span>Schedule Demo</span>
                  <Clock className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthcareDiagnosticsPlatform;