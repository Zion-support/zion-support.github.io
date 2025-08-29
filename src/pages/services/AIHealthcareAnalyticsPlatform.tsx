import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  BarChart3,
  PieChart,
  LineChart,
  UserCheck,
  Heart,
  Star,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Server,
  Lock,
  Eye,
  Settings,
  Bell,
  Mail,
  Phone,
  MapPin,
  Building2,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms that analyze medical data to assist in diagnosis and treatment planning."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards and metrics that provide instant visibility into patient outcomes and healthcare performance."
    },
    {
      icon: Users,
      title: "Patient Journey Mapping",
      description: "Comprehensive tracking of patient interactions across all healthcare touchpoints and care settings."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes, identify risk factors, and predict healthcare trends with high accuracy."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with full HIPAA, GDPR, and SOC2 compliance for sensitive patient data."
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "Intelligent automation of healthcare analytics, alerts, and clinical decision support."
    }
  ];

  const analyticsModules = [
    {
      icon: Activity,
      title: "Clinical Analytics",
      description: "Real-time analysis of clinical data, patient outcomes, and treatment effectiveness"
    },
    {
      icon: LineChart,
      title: "Population Health",
      description: "Comprehensive population health analytics with risk stratification and intervention planning"
    },
    {
      icon: PieChart,
      title: "Quality Metrics",
      description: "Track and optimize healthcare quality indicators and performance metrics"
    },
    {
      icon: UserCheck,
      title: "Patient Engagement",
      description: "Analyze patient engagement patterns and optimize communication strategies"
    },
    {
      icon: BarChart3,
      title: "Cost Analytics",
      description: "Identify cost-saving opportunities and optimize healthcare resource allocation"
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "AI-powered models for predicting patient readmissions, complications, and outcomes"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small healthcare practices",
      features: [
        "Up to 1,000 patient records",
        "Basic AI analytics",
        "Standard dashboards",
        "Email support",
        "Basic integrations (5)",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing healthcare organizations",
      features: [
        "Up to 10,000 patient records",
        "Advanced AI algorithms",
        "Custom dashboards",
        "Priority support",
        "Advanced integrations (25)",
        "Real-time alerts",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patient records",
        "Custom AI models",
        "White-label solutions",
        "Dedicated healthcare analyst",
        "Advanced analytics",
        "Custom training",
        "On-premise options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improve Patient Outcomes",
      description: "AI-powered insights help healthcare providers make better clinical decisions and improve patient care.",
      icon: Heart
    },
    {
      title: "Reduce Healthcare Costs",
      description: "Identify inefficiencies, optimize resource allocation, and reduce unnecessary healthcare spending.",
      icon: TrendingUp
    },
    {
      title: "Enhance Care Quality",
      description: "Track quality metrics and implement evidence-based practices to improve overall care quality.",
      icon: Star
    },
    {
      title: "Streamline Operations",
      description: "Automate routine analytics tasks and focus your team on high-value clinical initiatives.",
      icon: Zap
    }
  ];

  const useCases = [
    {
      icon: Stethoscope,
      title: "Hospitals",
      description: "Optimize patient care, reduce readmissions, and improve operational efficiency"
    },
    {
      icon: Building2,
      title: "Clinics",
      description: "Track patient outcomes, optimize workflows, and improve care quality"
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description: "Analyze drug effectiveness, track adverse events, and optimize clinical trials"
    },
    {
      icon: Microscope,
      title: "Research Institutions",
      description: "Conduct advanced healthcare research and develop new treatment protocols"
    },
    {
      icon: Users,
      title: "Health Insurance",
      description: "Analyze claims data, identify fraud, and optimize coverage policies"
    },
    {
      icon: FileText,
      title: "Government Health",
      description: "Monitor public health trends and optimize healthcare policy decisions"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Advanced AI-powered healthcare analytics platform for improving patient outcomes, reducing costs, and optimizing healthcare operations with predictive analytics."
        canonical="/services/ai-healthcare-analytics-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    AI Healthcare Analytics Platform
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
                  Transform healthcare delivery with AI-powered analytics that improve patient outcomes, 
                  reduce costs, and optimize clinical operations with predictive insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-blue-500"
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Features for Healthcare Analytics
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive analytics and insights to transform healthcare delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Modules Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Healthcare Analytics Modules
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get deep insights into every aspect of healthcare operations with our specialized analytics modules.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
                  <p className="text-slate-300">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization's size and analytics needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-blue-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Healthcare Analytics?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transform healthcare delivery with data-driven insights and AI-powered analytics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Perfect for Every Healthcare Organization
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform is designed to meet the unique analytics needs of healthcare organizations across all sizes and specialties.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare Analytics?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of healthcare organizations that have revolutionized their analytics with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-blue-500"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}