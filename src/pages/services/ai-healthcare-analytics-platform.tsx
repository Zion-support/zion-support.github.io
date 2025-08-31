import React from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
=======
  Heart, 
  Brain, 
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  Activity, 
  Heart, 
  Brain, 
  Shield, 
<<<<<<< HEAD
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Target,
  Lock,
  Search,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  PieChart,
  LineChart,
  Eye,
  Settings,
  Filter,
  Globe,
  Database,
  DollarSign,
  Star,
  Play,
  Stethoscope,
  Microscope,
  Pill,
  Hospital,
  UserCheck,
  FileText,
  Monitor,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
=======
  Users, 
  Globe, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Target,
  Zap,
  Eye,
  Lock
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms that predict patient outcomes, readmission risks, and disease progression",
      benefits: ["Early disease detection", "Risk stratification", "Treatment optimization", "Population health insights"]
    },
    {
      icon: Activity,
      title: "Real-time Patient Monitoring",
      description: "Continuous monitoring of patient vital signs, symptoms, and health metrics with AI-powered alerts",
      benefits: ["24/7 monitoring", "Early warning systems", "Automated alerts", "Mobile notifications"]
    },
    {
      icon: Heart,
      title: "Clinical Decision Support",
      description: "AI-powered recommendations for diagnosis, treatment plans, and medication management",
      benefits: ["Evidence-based recommendations", "Drug interaction alerts", "Treatment guidelines", "Clinical pathways"]
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption, access controls, and comprehensive audit trails",
      benefits: ["HIPAA compliance", "SOC 2 Type II", "End-to-end encryption", "Role-based access"]
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
      description: "Comprehensive analytics for population health management, risk assessment, and preventive care",
      benefits: ["Population risk scoring", "Preventive care insights", "Health trend analysis", "Resource optimization"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline healthcare processes with automated documentation, scheduling, and communication",
      benefits: ["Automated documentation", "Smart scheduling", "Patient communication", "Staff workflow optimization"]
=======
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms for accurate disease detection and prediction"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with predictive health insights"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive healthcare data analysis and reporting"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and regulatory compliance"
    },
    {
      icon: Users,
      title: "Care Team Collaboration",
      description: "Seamless communication between healthcare providers"
    },
    {
      icon: Target,
      title: "Treatment Optimization",
      description: "AI-driven treatment recommendations and outcome prediction"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    }
  ];

  const pricingPlans = [
    {
<<<<<<< HEAD
      name: "Clinical",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 25 providers",
        "Basic patient analytics",
        "Clinical decision support",
        "Email support",
        "Standard security",
        "Basic reporting"
=======
      name: "Clinic",
      price: "$399",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Up to 100 patients",
        "Basic analytics dashboard",
        "Patient monitoring",
        "HIPAA compliance",
        "Email support",
        "Standard integrations"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
<<<<<<< HEAD
      price: "$1,299",
      period: "/month",
      description: "Ideal for hospitals and healthcare systems",
      features: [
        "Up to 200 providers",
        "Advanced analytics suite",
        "Real-time monitoring",
        "Priority support",
        "Advanced security",
        "Population health analytics",
        "Workflow automation",
=======
      price: "$1,199",
      period: "/month",
      description: "Ideal for hospitals",
      features: [
        "Up to 1,000 patients",
        "Advanced analytics",
        "Real-time monitoring",
        "AI diagnostics",
        "Priority support",
        "Custom integrations",
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
<<<<<<< HEAD
      description: "For large healthcare networks and academic medical centers",
      features: [
        "Unlimited providers",
        "Custom AI models",
        "Advanced integrations",
        "24/7 dedicated support",
        "Custom training",
        "Multi-site management",
        "Research capabilities",
        "White-label options"
=======
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Full AI capabilities",
        "Custom dashboards",
        "24/7 support",
        "White-label options",
        "Advanced security",
        "Multi-location support"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      ],
      cta: "Contact Sales",
      popular: false
    }
<<<<<<< HEAD
=======
  ];

  const benefits = [
    {
      title: "Improved Diagnosis",
      description: "AI algorithms increase diagnostic accuracy",
      metric: "95% accuracy"
    },
    {
      title: "Faster Treatment",
      description: "Reduce time to treatment with predictive insights",
      metric: "40% faster"
    },
    {
      title: "Cost Reduction",
      description: "Lower healthcare costs through prevention",
      metric: "30% savings"
    },
    {
      title: "Better Outcomes",
      description: "Improve patient outcomes with data-driven care",
      metric: "25% improvement"
    }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  ];

  const healthcareMetrics = [
    {
<<<<<<< HEAD
      industry: "Hospitals",
      description: "Improve patient outcomes, reduce readmissions, and optimize resource allocation with AI-powered insights",
      metrics: ["25% reduction in readmissions", "30% faster diagnosis", "40% cost savings"]
    },
    {
      industry: "Primary Care",
      description: "Enhance preventive care, identify at-risk patients, and improve chronic disease management",
      metrics: ["90% preventive care compliance", "60% better chronic disease management", "Enhanced patient engagement"]
    },
    {
      industry: "Specialty Clinics",
      description: "Optimize treatment plans, improve patient outcomes, and streamline clinical workflows",
      metrics: ["85% treatment plan optimization", "70% workflow efficiency", "Improved patient satisfaction"]
    },
    {
      industry: "Research Institutions",
      description: "Accelerate clinical research, identify patterns in large datasets, and develop new treatment protocols",
      metrics: ["50% faster research insights", "90% data accuracy", "Enhanced collaboration"]
    }
  ];

  const benefits = [
    "Reduce patient readmissions by 25% through predictive analytics",
    "Improve diagnosis accuracy by 30% with AI-powered insights",
    "Save up to $100,000 annually in healthcare costs",
    "Enhance patient outcomes and satisfaction scores",
    "Streamline clinical workflows and reduce administrative burden",
    "Ensure 100% HIPAA compliance and data security"
  ];

  const complianceFeatures = [
    "HIPAA Compliance",
    "SOC 2 Type II Certification",
    "HITECH Act Compliance",
    "FDA Regulatory Support",
    "GDPR Compliance",
    "State-specific Healthcare Regulations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
      metric: "1M+",
      label: "Patients Monitored"
    },
    {
      metric: "200+",
      label: "Healthcare Partners"
    },
    {
      metric: "24/7",
      label: "Patient Monitoring"
    },
    {
      metric: "99.9%",
      label: "Uptime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics, predictive insights, and clinical decision support. 
              Improve patient outcomes, reduce costs, and enhance operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </motion.div>
              ))}
=======
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {" "}Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered analytics that improve patient outcomes, 
              reduce costs, and enable data-driven medical decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-200 flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {healthcareMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-gray-300 text-sm md:text-base">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Healthcare Technology Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to modernize healthcare delivery and improve patient outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive healthcare analytics powered by artificial intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Compliance Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance standards to protect patient data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
=======
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Healthcare Results
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in patient care and operational efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your healthcare organization and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-slate-800/50 to-green-900/20' 
                    : 'border-slate-700/50'
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare-Focused Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that matches your healthcare organization's needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-gray-700'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
=======
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>
<<<<<<< HEAD

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
=======
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored AI analytics solutions for different healthcare settings and specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-green-400 font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-green-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join hundreds of healthcare organizations that have already revolutionized patient care with AI-powered analytics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that are already using AI to improve 
              patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-200 flex items-center justify-center">
                Schedule Demo
                <MessageCircle className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Healthcare Expertise?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our healthcare technology experts are here to help you implement and optimize 
              your AI-powered healthcare analytics platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </motion.div>
        </div>
      </section>
    </div>
  );
}