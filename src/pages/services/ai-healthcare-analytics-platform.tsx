<<<<<<< HEAD
<= icon: Shield}; ]; const complianceStandards = [;" "HIPAA Compliant",;" "FDA Approved",;" "ISO 13485",;" "SOC 2 Type II",;" "GDPR Compliant",;" "HITECH Certified"; 
=======
import React from 'react';
import { motion } from 'framer-motion';
import {

  Activity, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Database,
  Zap,
  Eye,
  Lock
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform = () => {

  const features = [
    {

      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Patient Monitoring",
      description: "AI-powered continuous monitoring with predictive alerts for critical health events and early intervention."
    },
    {

      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Diagnostics",
      description: "Advanced machine learning algorithms that predict disease progression and treatment outcomes with 95% accuracy."
    },
    {

      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare regulations."
    },
    {

      icon: <Users className="w-6 h-6" />,
      title: "Care Team Collaboration",
      description: "Seamless communication between doctors, nurses, and specialists with real-time updates and shared insights."
    },
    {

      icon: <Database className="w-6 h-6" />,
      title: "Data Integration Hub",
      description: "Connect with existing EHR systems, medical devices, and third-party applications for unified data access."
    },
    {

      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reporting and visualization tools for population health, quality metrics, and operational insights."
    }
  ];

  const pricingPlans = [
    {

      name: "Clinic",
      price: "$499",
      period: "/month",
      description: "Perfect for small clinics and private practices",
      features: [
        "Up to 1,000 patients",
        "Basic AI analytics",
        "Standard reporting",
        "Email support",
        "HIPAA compliance",
        "Basic integrations"
      ],
      popular: false
    },
    {

      name: "Hospital",
      price: "$1,299",
      period: "/month",
      description: "Ideal for hospitals and healthcare networks",
      features: [
        "Up to 10,000 patients",
        "Advanced AI models",
        "Custom dashboards",
        "Priority support",
        "Full compliance suite",
        "Advanced integrations",
        "Predictive analytics",
        "Care team collaboration"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Research tools",
        "API access",
        "Custom training",
        "Multi-site management"
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: <Clock className="w-8 h-8" />,
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time by up to 60% with AI-powered symptom analysis"
    },
    {

      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Lower healthcare costs by 25-30% through preventive care and early intervention"
    },
    {

      icon: <Shield className="w-8 h-8" />,
      title: "Better Outcomes",
      description: "Improve patient outcomes by 40% with predictive analytics and personalized care"
    },
    {

      icon: <TrendingUp className="w-8 h-8" />,
      title: "Operational Efficiency",
      description: "Streamline workflows and reduce administrative burden by 50%"
    }
  ];

  const useCases = [
    {

      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Predict heart disease risk and monitor cardiac health in real-time"
    },
    {

      icon: <Brain className="w-8 h-8" />,
      title: "Neurology",
      description: "Early detection of neurological disorders and treatment optimization"
    },
    {

      icon: <Stethoscope className="w-8 h-8" />,
      title: "Primary Care",
      description: "Comprehensive health monitoring and preventive care recommendations"
    },
    {

      icon: <Eye className="w-8 h-8" />,
      title: "Radiology",
      description: "AI-powered image analysis for faster and more accurate diagnoses"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Healthcare
                <span className="text-red-500 block">Analytics Platform</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics. Monitor patients in real-time, 
              predict health outcomes, and deliver personalized care with unprecedented precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-red-500 transition-colors"
              >
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
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with medical expertise to deliver 
              insights that improve patient care and operational efficiency.
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
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-red-500 transition-colors"
              >
                <div className="text-red-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform adapts to various medical specialties, providing tailored insights 
              and analytics for different healthcare domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-red-500 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
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
              Why Healthcare Leaders Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in patient care, operational efficiency, and cost management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-red-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare organization's size and needs. 
              All plans include our core AI capabilities and HIPAA compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800 p-8 rounded-lg border ${

                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join leading healthcare organizations that have already improved patient outcomes with AI analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
