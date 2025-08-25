import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  ArrowRight,
  Stethoscope,
  Pill,
  Microscope,
  Search,
  Edit3,
  Download,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Headphones,
  Database,
  Zap,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  FileText
=======
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Briefcase,
  Award,
  TrendingUp,
  Stethoscope,
  Database
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: "Predictive Diagnostics",
      description: "AI-powered early disease detection and risk assessment using advanced machine learning algorithms"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical health indicators"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with EHR systems, medical devices, and healthcare applications"
=======
      title: "Predictive Patient Analytics",
      description: "AI-powered prediction of patient outcomes and risk assessment"
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring and alerting for critical health indicators"
    },
    {
      icon: Target,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient data"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
<<<<<<< HEAD
      description: "Comprehensive analysis of population health trends and disease patterns"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and full HIPAA compliance for patient data protection"
=======
      description: "Comprehensive analysis of population health trends and patterns"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
<<<<<<< HEAD
      description: "AI-powered clinical recommendations and treatment optimization suggestions"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$799",
      period: "/month",
      description: "For individual healthcare providers and small clinics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Standard monitoring tools",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,499",
      period: "/month",
      description: "Ideal for hospitals and large healthcare facilities",
      features: [
        "Up to 10,000 patients",
        "Advanced AI diagnostics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "API integration",
        "Multi-department access",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For healthcare systems and large organizations",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Custom integrations",
        "On-premise deployment",
        "Advanced security",
        "Compliance automation"
      ],
      cta: "Contact Sales",
      popular: false
=======
      description: "Intelligent assistance for healthcare professionals"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      icon: Heart,
      title: "Improved Patient Outcomes",
      description: "Early detection and intervention lead to better treatment results and patient recovery"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce healthcare costs by preventing complications and optimizing resource allocation"
    },
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "AI-powered analysis reduces diagnosis time from days to minutes"
    },
    {
      icon: Users,
      title: "Enhanced Care Coordination",
      description: "Better communication and coordination between healthcare teams and departments"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential health risks before they become critical issues"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions based on comprehensive healthcare analytics and trends"
    }
  ];

  const useCases = [
    {
      icon: Stethoscope,
      title: "Cardiology",
      description: "Predictive analysis for heart disease, arrhythmia detection, and cardiac risk assessment"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Early detection of neurological disorders, stroke prediction, and cognitive decline monitoring"
    },
    {
      icon: Microscope,
      title: "Oncology",
      description: "Cancer screening, treatment response monitoring, and recurrence prediction"
    },
    {
      icon: Pill,
      title: "Pharmacology",
      description: "Drug interaction analysis, dosage optimization, and adverse reaction prediction"
    },
    {
      icon: Users,
      title: "Population Health",
      description: "Community health monitoring, disease outbreak prediction, and preventive care planning"
    },
    {
      icon: Activity,
      title: "Emergency Medicine",
      description: "Triage optimization, critical care monitoring, and emergency response coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            AI-Powered Healthcare Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Analytics</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize healthcare delivery with AI-powered analytics. Predict, prevent, and optimize patient care with unprecedented accuracy and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-demo"
              className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-400">Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-gray-400">Faster Diagnosis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Healthcare Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Healthcare Specialties & Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  {plan.popular ? (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white block">
                      {plan.cta}
                    </span>
                  ) : (
                    <span className="border border-gray-600 text-gray-300 block hover:border-green-500 hover:text-green-400">
                      {plan.cta}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Healthcare Analytics?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers who are already leveraging AI to improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
    "Improve patient outcomes by 25-40%",
    "Reduce hospital readmissions by 30%",
    "Lower healthcare costs by 20-35%",
    "Enhance diagnostic accuracy",
    "Streamline clinical workflows",
    "Better resource allocation"
  ];

  const solutions = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis and insights"
    },
    {
      title: "Clinical Analytics",
      description: "Clinical performance metrics and quality improvement"
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization and efficiency"
    },
    {
      title: "Research Analytics",
      description: "Advanced analytics for medical research and trials"
    }
  ];

  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Pediatrics",
    "Emergency Medicine",
    "Primary Care",
    "Surgery",
    "Mental Health"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with intelligent analytics powered by artificial intelligence. 
              Improve patient outcomes, optimize operations, and advance medical research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI healthcare analytics platform combines advanced machine learning with 
              medical expertise to revolutionize patient care and healthcare operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented insights and improvements in healthcare delivery with AI-powered analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI healthcare analytics solutions are designed to support various medical specialties 
              and clinical areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <Stethoscope className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold">{specialty}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of healthcare analytics and start improving patient outcomes today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    </div>
  );
}