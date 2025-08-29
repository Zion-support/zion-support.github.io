import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  TrendingUp, 
  Zap, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Shield,
  Activity,
  Users,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
  Target,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      title: "Predictive Patient Analytics",
      description: "AI-powered risk assessment with 96% accuracy for early disease detection",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Real-time Health Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical changes",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Treatment Outcome Prediction",
      description: "AI-driven treatment recommendations based on patient data and outcomes",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Population Health Insights",
      description: "Comprehensive analytics for population health management and prevention",
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support system for healthcare providers",
      icon: Stethoscope,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Comprehensive dashboards with KPIs and actionable insights",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 599,
      period: "month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Standard health monitoring",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: 1499,
      period: "month",
      description: "Ideal for growing healthcare organizations",
      features: [
        "Up to 10,000 patients",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Training sessions"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 3999,
      period: "month",
      description: "For large healthcare systems and hospitals",
      features: [
        "Unlimited patients",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label solutions",
        "Advanced risk management",
        "Custom compliance rules",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "96% Accuracy",
      description: "Industry-leading accuracy in disease prediction and diagnosis",
      icon: Target,
      metric: "96%"
    },
    {
      title: "40% Cost Reduction",
      description: "Significant reduction in healthcare costs and readmissions",
      icon: DollarSign,
      metric: "40%"
    },
    {
      title: "60% Faster Diagnosis",
      description: "Accelerated diagnosis and treatment planning",
      icon: Clock,
      metric: "60%"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock patient monitoring and alerting",
      icon: Activity,
      metric: "24/7"
    }
  ];

  const useCases = [
    {
      title: "Early Disease Detection",
      description: "AI-powered screening for early detection of chronic diseases",
      icon: Microscope,
      examples: ["Cancer screening", "Diabetes prediction", "Heart disease risk"]
    },
    {
      title: "Patient Risk Assessment",
      description: "Comprehensive risk scoring for patient stratification",
      icon: AlertTriangle,
      examples: ["Readmission risk", "Fall risk assessment", "Infection prediction"]
    },
    {
      title: "Treatment Optimization",
      description: "AI-driven treatment recommendations and outcome prediction",
      icon: Pill,
      examples: ["Medication optimization", "Dosage adjustment", "Side effect prediction"]
    },
    {
      title: "Population Health Management",
      description: "Analytics for managing population health and preventive care",
      icon: Users,
      examples: ["Preventive screening", "Vaccination campaigns", "Health education"]
    }
  ];

  const specialties = [
    {
      name: "Cardiology",
      icon: Heart,
      description: "Cardiovascular disease prediction and monitoring",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Oncology",
      icon: Microscope,
      description: "Cancer detection and treatment optimization",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Neurology",
      icon: Brain,
      description: "Neurological disorder analysis and prediction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pediatrics",
      icon: Users,
      description: "Child health monitoring and development tracking",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Emergency Medicine",
      icon: AlertTriangle,
      description: "Emergency triage and critical care support",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Primary Care",
      icon: Stethoscope,
      description: "Comprehensive primary care analytics",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <>
      <SEO 
        title="AI Healthcare Analytics | Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform. 96% accuracy, 40% cost reduction, and real-time patient monitoring. Start your free trial today."
        keywords="AI healthcare, healthcare analytics, patient monitoring, disease prediction, clinical decision support, population health"
        canonical="https://ziontechgroup.com/services/ai-healthcare-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-pink-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Healthcare Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Healthcare Analytics
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered analytics. 
                96% accuracy, 40% cost reduction, and real-time patient monitoring for better outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Healthcare AI Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep healthcare expertise 
                to deliver unprecedented accuracy and patient outcomes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Results & Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of healthcare providers who have transformed patient care 
                with our AI-powered analytics platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From early disease detection to population health management, our AI platform handles 
                every aspect of healthcare analytics.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-slate-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {example}
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

        {/* Specialties Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Medical Specialties
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform is designed to meet the unique challenges of various medical specialties 
                and healthcare delivery models.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${specialty.color} rounded-lg flex items-center justify-center mb-4`}>
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{specialty.name}</h3>
                  <p className="text-slate-300">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization size and needs. 
                All plans include our core AI features and 24/7 support.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-20 bg-gradient-to-r from-red-600/20 via-pink-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of healthcare providers who have already revolutionized 
                patient care with AI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-300">
                  Ready to revolutionize healthcare delivery? Contact our team to learn more.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}