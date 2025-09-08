import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Zap, 
  Brain, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Bot,
  Sparkles,
  Target,
  Settings,
  Globe,
  Rocket,
  Shield,
  Lock,
  Network,
  Server,
  Database,
  Cpu,
  BarChart3,
  LineChart,
  PieChart,
  Award,
  Star,
  Clock,
  Eye,
  AlertTriangle,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  UserCheck,
  Activity,
  Monitor
} from 'lucide-react';

export default function AIHealthcarePredictiveAnalyticsPlatform() {
  const features = [
    {
      title: "Predictive Disease Detection",
      description: "AI algorithms that identify disease patterns and predict health risks before symptoms appear",
      icon: Brain,
      benefits: ["Early disease detection", "Risk assessment", "Preventive care planning"]
    },
    {
      title: "Patient Data Analytics",
      description: "Comprehensive analysis of patient data to identify trends and improve treatment outcomes",
      icon: BarChart3,
      benefits: ["Data-driven insights", "Treatment optimization", "Outcome prediction"]
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered recommendations to assist healthcare providers in making informed decisions",
      icon: Stethoscope,
      benefits: ["Evidence-based guidance", "Treatment recommendations", "Drug interaction alerts"]
    },
    {
      title: "Population Health Management",
      description: "Monitor and manage health outcomes across patient populations and communities",
      icon: Users,
      benefits: ["Population insights", "Health trend analysis", "Resource optimization"]
    }
  ];

  const pricing = [
    {
      plan: "Clinical",
      price: "$2,800",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Email support",
        "Standard reports",
        "HIPAA compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Hospital",
      price: "$6,500",
      period: "/month",
      description: "Ideal for hospitals",
      features: [
        "Up to 10,000 patients",
        "Advanced analytics",
        "Priority support",
        "Custom dashboards",
        "API integration",
        "Clinical workflows"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom integrations",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const healthcareApplications = [
    {
      category: "Diagnostics",
      applications: [
        "Medical Imaging Analysis",
        "Lab Result Interpretation",
        "Symptom Assessment",
        "Disease Classification",
        "Risk Stratification"
      ],
      icon: Microscope
    },
    {
      category: "Treatment Planning",
      applications: [
        "Personalized Medicine",
        "Drug Selection",
        "Dosage Optimization",
        "Treatment Pathways",
        "Outcome Prediction"
      ],
      icon: Pill
    },
    {
      category: "Patient Monitoring",
      applications: [
        "Vital Signs Tracking",
        "Medication Adherence",
        "Remote Monitoring",
        "Alert Systems",
        "Trend Analysis"
      ],
      icon: Monitor
    },
    {
      category: "Research & Development",
      applications: [
        "Clinical Trials",
        "Drug Discovery",
        "Epidemiology Studies",
        "Population Studies",
        "Outcome Research"
      ],
      icon: FileText
    }
  ];

  const complianceStandards = [
    { name: "HIPAA", status: "Compliant", icon: CheckCircle },
    { name: "HITECH", status: "Compliant", icon: CheckCircle },
    { name: "GDPR", status: "Compliant", icon: CheckCircle },
    { name: "SOC 2 Type II", status: "Certified", icon: CheckCircle },
    { name: "ISO 27001", status: "Certified", icon: CheckCircle },
    { name: "FDA", status: "Approved", icon: CheckCircle }
  ];

  const successMetrics = [
    { metric: "Early Detection Rate", value: "85%", icon: Eye },
    { metric: "Treatment Accuracy", value: "92%", icon: CheckCircle },
    { metric: "Patient Outcomes", value: "+28%", icon: TrendingUp },
    { metric: "Cost Reduction", value: "32%", icon: DollarSign },
    { metric: "Response Time", value: "<2min", icon: Clock },
    { metric: "User Satisfaction", value: "96%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI-Powered Healthcare Predictive Analytics Platform | Zion Tech Group"
        description="Transform healthcare delivery with our AI-powered predictive analytics platform. Early disease detection, personalized treatment, and improved patient outcomes."
        keywords="AI healthcare, predictive analytics, disease detection, clinical decision support, healthcare analytics, medical AI"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-zion-blue to-rose-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-pink-900/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>AI-Powered Healthcare Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Predictive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with intelligent predictive analytics. Early disease detection, 
              personalized treatment plans, and improved patient outcomes through AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with medical expertise to deliver unprecedented 
              insights and improve patient care outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-pink-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Applications Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform covers every aspect of healthcare delivery, from diagnostics to treatment planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {healthcareApplications.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.applications.map((application, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-pink-400" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform meets the highest healthcare security and compliance standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 text-center hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <standard.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{standard.name}</h3>
                <p className="text-xs text-pink-400 font-medium">{standard.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Success Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our healthcare platform consistently delivers measurable improvements in patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{metric.metric}</h3>
                <p className="text-lg text-pink-400 font-bold">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Healthcare Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the healthcare analytics plan that fits your organization's needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-pink-400 shadow-lg shadow-pink-500/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/25'
                    : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/20 to-rose-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading healthcare organizations already using our AI-powered platform to improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}