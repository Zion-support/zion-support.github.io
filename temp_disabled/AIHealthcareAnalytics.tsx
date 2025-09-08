import React from 'react';
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
  Database,
  Users,
  Lock,
  Eye,
  Calendar,
  DollarSign,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
  LineChart,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIHealthcareAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data to predict outcomes and optimize treatment plans.",
      benefits: ["Predictive modeling", "Treatment optimization", "Risk assessment"]
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of patient vital signs and health indicators with instant alerts for critical changes.",
      benefits: ["24/7 monitoring", "Instant alerts", "Early intervention"]
    },
    {
      icon: Target,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on individual patient data and medical history.",
      benefits: ["Customized care", "Evidence-based", "Outcome optimization"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes, readmission risks, and resource needs using historical data patterns.",
      benefits: ["Risk prediction", "Resource planning", "Quality improvement"]
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and privacy protection for sensitive healthcare data.",
      benefits: ["Data encryption", "Access control", "Audit trails"]
    },
    {
      icon: Clock,
      title: "Real-time Insights",
      description: "Instant access to critical patient information and treatment recommendations.",
      benefits: ["Quick decisions", "Time savings", "Better outcomes"]
    }
  ];

  const useCases = [
    {
      title: "Patient Risk Assessment",
      description: "Identify high-risk patients and predict potential complications before they occur.",
      benefits: ["Early intervention", "Reduced readmissions", "Better outcomes"]
    },
    {
      title: "Treatment Optimization",
      description: "Optimize treatment plans based on patient response and historical success rates.",
      benefits: ["Improved efficacy", "Reduced side effects", "Cost savings"]
    },
    {
      title: "Resource Planning",
      description: "Predict patient volumes and resource needs to optimize hospital operations.",
      benefits: ["Efficient staffing", "Better resource allocation", "Cost optimization"]
    },
    {
      title: "Clinical Decision Support",
      description: "Provide evidence-based recommendations to support clinical decision making.",
      benefits: ["Standardized care", "Reduced errors", "Quality improvement"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,999",
      period: "month",
      features: [
        "Basic AI Analytics",
        "Patient Risk Scoring",
        "Real-time Monitoring",
        "HIPAA Compliance",
        "Up to 1,000 patients"
      ]
    },
    {
      plan: "Professional",
      price: "$7,999",
      period: "month",
      features: [
        "Advanced AI Analytics",
        "Predictive Modeling",
        "Treatment Optimization",
        "Clinical Decision Support",
        "Up to 10,000 patients",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$15,999",
      period: "month",
      features: [
        "Full AI Platform",
        "Custom AI Models",
        "Advanced Analytics",
        "Multi-site Support",
        "Unlimited patients",
        "Dedicated Support",
        "Custom Development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI Healthcare
              </span>
              <br />
              <span className="text-white">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics that predict outcomes, 
              optimize treatments, and improve patient care through data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI-powered solutions are designed to meet the unique needs of healthcare providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-blue-200 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how AI analytics is revolutionizing healthcare delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-blue-200">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare organization's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-400 scale-105' : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our healthcare AI experts to discuss your organization's needs and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;
