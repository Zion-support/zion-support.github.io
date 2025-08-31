import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO, SEOConfigs } from '../../components/EnhancedSEO.tsx';
import { SEO } from "@/components/SEO";
import {
  Heart,
  Brain,
  Shield,
  Activity,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Microscope,
  Pill,
  Syringe,
  Thermometer,
  Eye,
  Brain as BrainIcon,
  HeartPulse
} from 'lucide-react';

const AIAutonomousHealthcareDiagnostics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical images, lab results, and patient symptoms with 99.7% accuracy."
    },
    {
      icon: Microscope,
      title: "Medical Image Analysis",
      description: "Intelligent analysis of X-rays, MRIs, CT scans, and pathology slides for early disease detection."
    },
    {
      icon: HeartPulse,
      title: "Predictive Health Analytics",
      description: "AI-driven risk assessment and early warning systems for chronic diseases and health conditions."
    },
    {
      icon: Shield,
      title: "Clinical Decision Support",
      description: "Evidence-based treatment recommendations and drug interaction analysis for healthcare providers."
    },
    {
      icon: Users,
      title: "Personalized Medicine",
      description: "Tailored treatment plans based on genetic profiles, medical history, and lifestyle factors."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring with instant alerts for critical health indicators and trends."
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 40-60%",
    "Reduce diagnostic time from days to minutes",
    "Enable early detection of diseases",
    "Reduce healthcare costs by 25-35%",
    "Provide 24/7 diagnostic support",
    "Enhance patient outcomes and survival rates"
  ];

  const pricing = [
    {
      name: "Healthcare Provider",
      price: "$499",
      period: "/month",
      description: "Perfect for clinics and small practices",
      features: [
        "Basic AI diagnostics",
        "Medical image analysis",
        "Patient risk assessment",
        "Clinical decision support",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital System",
      price: "$1,999",
      period: "/month",
      description: "Ideal for hospitals and medical centers",
      features: [
        "Advanced AI diagnostics",
        "Multi-modality imaging",
        "Predictive analytics",
        "Integration with EMR systems",
        "Priority support",
        "Custom training",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Research Institution",
      price: "$4,999",
      period: "/month",
      description: "For medical research and development",
      features: [
        "Custom AI models",
        "Research data analysis",
        "Clinical trial support",
        "API access",
        "Dedicated support",
        "White-label solution",
        "Publication support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Radiology",
      description: "AI-powered analysis of medical images for faster and more accurate diagnoses",
      icon: Monitor
    },
    {
      title: "Pathology",
      description: "Intelligent analysis of tissue samples and cellular structures",
      icon: Microscope
    },
    {
      title: "Cardiology",
      description: "Heart disease detection and cardiovascular risk assessment",
      icon: Heart
    },
    {
      title: "Oncology",
      description: "Early cancer detection and treatment planning",
      icon: Target
    }
  ];

  const specialties = [
    "Cardiology",
    "Radiology",
    "Pathology",
    "Oncology",
    "Neurology",
    "Dermatology",
    "Ophthalmology",
    "Orthopedics",
    "Emergency Medicine",
    "Primary Care"
  ];

  return (
    <EnhancedSEO data={SEOConfigs.aiAutonomousHealthcareDiagnostics}>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark">
        <SEO
          title="AI Autonomous Healthcare Diagnostics - Revolutionary Medical AI"
          description="Transform healthcare with AI-powered diagnostics, medical image analysis, and predictive health analytics. Achieve 99.7% diagnostic accuracy and improve patient outcomes."
          keywords="AI healthcare, medical diagnostics, medical AI, healthcare automation, medical imaging, predictive health, clinical decision support, telemedicine"
          canonical="https://ziontechgroup.com/services/ai-autonomous-healthcare-diagnostics"
        />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                New for 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                  Healthcare Diagnostics
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare with AI-powered diagnostics, medical image analysis, 
                and predictive health analytics. Achieve 99.7% diagnostic accuracy and 
                transform patient care outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 hover:border-red-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines advanced machine learning with medical expertise 
                to deliver accurate diagnoses, predictive analytics, and personalized treatment plans.
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
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Healthcare Platform?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the future of healthcare with AI-powered diagnostics, 
                automated analysis, and evidence-based clinical decision support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Specialties Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Medical Coverage
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI platform covers all major medical specialties, providing 
                accurate diagnostics and clinical support across the healthcare spectrum.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{specialty}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Specialized Medical Applications
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From radiology to pathology, our AI platform delivers specialized 
                diagnostic capabilities for every medical discipline.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <useCase.icon className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Healthcare-Focused Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your healthcare organization's needs. 
                All plans include our core AI diagnostic features and clinical support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zion-blue-dark border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-red-400/50 bg-red-500/5' 
                      : 'border-zion-purple/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white hover:from-red-600 hover:to-blue-600'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading healthcare institutions that have already revolutionized 
                their diagnostic capabilities with AI-powered medical intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 hover:border-red-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Schedule Demo
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>Free pilot program</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>HIPAA compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>24/7 clinical support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-red-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedSEO>
  );
};

export default AIAutonomousHealthcareDiagnostics;