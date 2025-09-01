import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Users, 
  TrendingUp,
  Globe,
  BarChart3,
  LineChart,
  Target,
  Clock,
  DollarSign,
  Star,
  Award,
  CheckCircle,
  Database,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  AlertCircle,
  Mail,
  Zap,
  Cpu,
  PieChart
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Patient Outcome Prediction",
      description: "AI models that predict patient outcomes with 94% accuracy using comprehensive health data analysis"
    },
    {
      icon: Brain,
      title: "Clinical Decision Support",
      description: "Real-time AI recommendations for treatment plans based on patient history and medical research"
    },
    {
      icon: Activity,
      title: "Population Health Analytics",
      description: "Advanced analytics for identifying health trends and managing population health outcomes"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance and data encryption at rest and in transit"
    },
    {
      icon: Users,
      title: "Care Team Collaboration",
      description: "Integrated platform for seamless communication and coordination among healthcare providers"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast disease outbreaks, patient readmissions, and resource utilization with AI precision"
    }
  ];

  const pricingPlans = [
    {
      name: "Community Health",
      price: "$2,499",
      period: "/month",
      description: "For community health centers and small healthcare organizations",
      features: [
        "Up to 10,000 patient records",
        "Basic AI analytics",
        "Standard reporting",
        "Email support",
        "HIPAA compliance",
        "Basic integrations",
        "Monthly updates",
        "Training sessions"
      ],
      popular: false
    },
    {
      name: "Hospital System",
      price: "$8,999",
      period: "/month",
      description: "For hospital systems and large healthcare networks",
      features: [
        "Up to 100,000 patient records",
        "Advanced AI algorithms",
        "Custom dashboards",
        "Priority support",
        "Full HIPAA compliance",
        "Advanced integrations",
        "Real-time analytics",
        "Dedicated success manager"
      ],
      popular: true
    },
    {
      name: "Enterprise Healthcare",
      price: "$24,999",
      period: "/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patient records",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Advanced compliance tools",
        "Custom integrations",
        "Research collaboration",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "35%+",
      description: "Average reduction in healthcare operational costs"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "50+ hours",
      description: "Per week saved on manual data analysis"
    },
    {
      icon: TrendingUp,
      title: "Patient Outcomes",
      value: "28%+",
      description: "Improvement in patient outcome scores"
    },
    {
      icon: Users,
      title: "Provider Satisfaction",
      value: "92%+",
      description: "Healthcare provider satisfaction rate"
    }
  ];

  const useCases = [
    "Patient Risk Stratification",
    "Treatment Optimization",
    "Resource Allocation",
    "Population Health Management",
    "Clinical Research",
    "Quality Improvement",
    "Cost Containment",
    "Regulatory Compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare Analytics Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with our advanced AI platform. Get real-time insights, 
              predictive analytics, and evidence-based recommendations that improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with healthcare expertise to deliver 
              insights that transform patient care and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform addresses the most critical challenges in modern healthcare delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of healthcare organizations that have transformed their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Healthcare Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing designed for healthcare organizations of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-700 p-8 rounded-xl relative ${
                  plan.popular ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with healthcare-grade security and full regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">HIPAA Compliant</h3>
              <p className="text-gray-300">Full HIPAA compliance with audit trails and data encryption</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p className="text-gray-300">Enterprise-grade security with role-based access control</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audit Trails</h3>
              <p className="text-gray-300">Comprehensive logging and monitoring for compliance</p>
            </motion.div>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that are already improving patient outcomes 
              with AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+13024640950" className="hover:text-green-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;