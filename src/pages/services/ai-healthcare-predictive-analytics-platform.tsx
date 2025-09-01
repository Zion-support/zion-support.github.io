import React from 'react';
import { motion } from 'framer-motion';
import {

  Heart, 
  Activity, 
  TrendingUp, 
  Users, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Database,
  AlertTriangle,
  Lightbulb,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Zap,
  Clock,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertCircle,
  FileCheck,
  Calendar,
  Lock,
  Cloud,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcarePredictiveAnalyticsPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Disease Prediction",
      description: "Advanced machine learning algorithms that analyze patient data to predict disease onset, progression, and treatment outcomes with high accuracy",
      benefits: ["Early disease detection", "Treatment optimization", "Risk stratification"]
    },
    {

      icon: Activity,
      title: "Real-time Patient Monitoring",
      description: "Continuous monitoring of patient vital signs, symptoms, and biomarkers with AI-driven alert systems for early intervention",
      benefits: ["24/7 monitoring", "Early warning systems", "Proactive care"]
    },
    {

      icon: TrendingUp,
      title: "Predictive Analytics Dashboard",
      description: "Comprehensive analytics platform that provides healthcare providers with actionable insights and predictive models",
      benefits: ["Data visualization", "Trend analysis", "Decision support"]
    },
    {

      icon: Users,
      title: "Population Health Management",
      description: "AI-driven analysis of population health data to identify trends, risk factors, and opportunities for preventive care",
      benefits: ["Population insights", "Risk assessment", "Preventive strategies"]
    },
    {

      icon: Shield,
      title: "Clinical Decision Support",
      description: "Intelligent clinical decision support system that provides evidence-based recommendations and treatment guidelines",
      benefits: ["Evidence-based care", "Treatment guidelines", "Clinical protocols"]
    },
    {

      icon: FileText,
      title: "Automated Medical Reporting",
      description: "AI-powered generation of comprehensive medical reports, treatment summaries, and patient care documentation",
      benefits: ["Automated reporting", "Documentation efficiency", "Compliance automation"]
    }
  ];

  const pricingPlans = [
    {

      name: "Clinical",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 25 patients",
        "Basic predictive analytics",
        "Patient monitoring tools",
        "Standard reporting",
        "Email support",
        "Basic AI models",
        "HIPAA compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Hospital",
      price: "$1,299",
      period: "/month",
      description: "Ideal for hospitals and healthcare networks",
      features: [
        "Up to 500 patients",
        "Advanced predictive models",
        "Real-time monitoring",
        "Population health analytics",
        "Priority support",
        "Custom AI models",
        "API access",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patients",
        "Full AI capabilities",
        "Research-grade analytics",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Advanced compliance",
        "Multi-site deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    "Chronic disease management",
    "Early disease detection",
    "Treatment outcome prediction",
    "Population health monitoring",
    "Clinical trial optimization",
    "Healthcare resource planning"
  ];

  const targetIndustries = [
    "Hospitals",
    "Medical Clinics",
    "Research Institutions",
    "Pharmaceutical Companies",
    "Insurance Providers",
    "Public Health Agencies",
    "Telemedicine Platforms",
    "Medical Device Companies"
  ];

  const benefits = [
    "Improve patient outcomes by 35%",
    "Reduce hospital readmissions by 40%",
    "Cut healthcare costs by 25%",
    "Enable early intervention",
    "Optimize treatment plans",
    "Enhance population health"
  ];

  const complianceFeatures = [
    "HIPAA Compliance",
    "GDPR Compliance",
    "SOC 2 Type II",
    "HITECH Act",
    "FDA Guidelines",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "Medical Device Regulations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Healthcare Predictive Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Transform healthcare delivery with AI-driven predictive analytics, real-time patient monitoring, and intelligent clinical decision support. 
              Improve patient outcomes and reduce healthcare costs with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with healthcare expertise to deliver unprecedented insights and predictive capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance standards to protect patient data and ensure regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-center"
              >
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Healthcare-Focused Pricing Plans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best fits your healthcare organization's needs. All plans include our core AI capabilities and compliance features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${

                  plan.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform addresses the full spectrum of healthcare analytics needs, from individual patient care to population health management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-slate-200"
              >
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <span className="font-semibold text-slate-900">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience unprecedented insights and predictive capabilities with AI-powered healthcare analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mr-4" />
                  <span className="font-semibold text-slate-900">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading healthcare organizations that trust our AI-powered platform for predictive analytics and patient care optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-slate-300 mb-2">Mobile: +1 302 464 0950</p>
              <p className="text-slate-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Healthcare Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-healthcare-predictive-analytics-platform" className="text-slate-300 hover:text-white">Predictive Analytics</Link></li>
                <li><Link to="/services/ai-healthcare-analytics-platform" className="text-slate-300 hover:text-white">Healthcare Analytics</Link></li>
                <li><Link to="/services/ai-healthcare-diagnostics-platform" className="text-slate-300 hover:text-white">Diagnostics Platform</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-white">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}