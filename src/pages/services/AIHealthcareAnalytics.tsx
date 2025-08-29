import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Shield, 
  Zap,
  TrendingUp,
  Target,
  Clock,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Stethoscope,
  Microscope,
  Pill,
  Hospital
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "Patient Outcome Prediction",
      description: "AI-powered algorithms that predict patient outcomes, treatment responses, and recovery trajectories with high accuracy"
    },
    {
      icon: Activity,
      title: "Disease Pattern Recognition",
      description: "Advanced pattern recognition to identify early disease indicators and predict disease progression"
    },
    {
      icon: Target,
      title: "Treatment Optimization",
      description: "Personalized treatment recommendations based on patient data, medical history, and genetic factors"
    },
    {
      icon: Users,
      title: "Resource Allocation",
      description: "Intelligent resource management to optimize hospital operations, staffing, and equipment utilization"
    },
    {
      icon: Shield,
      title: "Clinical Decision Support",
      description: "Real-time clinical decision support system that assists healthcare providers with evidence-based recommendations"
    },
    {
      icon: Globe,
      title: "Population Health Analytics",
      description: "Comprehensive population health insights for public health planning and preventive care strategies"
    }
  ];

  const benefits = [
    "Improve patient outcomes by 40% through predictive analytics",
    "Reduce healthcare costs by 25% with optimized resource allocation",
    "Optimize resource utilization and reduce waste",
    "Early disease detection and prevention strategies",
    "Personalized treatment plans for better patient care"
  ];

  const useCases = [
    "Hospital operations and patient flow management",
    "Clinical research and drug development",
    "Population health and preventive care",
    "Telemedicine and remote patient monitoring",
    "Healthcare quality improvement and compliance"
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small clinics and healthcare facilities",
      features: [
        "Basic patient outcome prediction",
        "Disease pattern recognition",
        "Treatment optimization",
        "Email support",
        "Up to 1,000 patients",
        "Standard integrations"
      ]
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "/month",
      description: "Ideal for growing hospitals and healthcare networks",
      features: [
        "Everything in Essential",
        "Advanced analytics dashboard",
        "Resource allocation optimization",
        "Priority support",
        "Up to 10,000 patients",
        "Custom integrations",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large healthcare systems with complex needs",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated healthcare team",
        "24/7 phone support",
        "Unlimited patients",
        "On-premise deployment",
        "Custom research projects"
      ]
    }
  ];

  const healthcareMetrics = [
    {
      title: "Patient Outcomes",
      description: "40% improvement in patient recovery rates",
      icon: TrendingUp
    },
    {
      title: "Cost Reduction",
      description: "25% decrease in healthcare operational costs",
      icon: Zap
    },
    {
      title: "Early Detection",
      description: "60% faster disease detection and diagnosis",
      icon: Microscope
    },
    {
      title: "Resource Efficiency",
      description: "30% improvement in resource utilization",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Advanced healthcare analytics platform that uses AI to analyze patient data, predict outcomes, and optimize healthcare delivery for better patient care."
        canonical="/services/ai-healthcare-analytics"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                AI Healthcare Analytics
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Healthcare Analytics Platform
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced healthcare analytics platform that uses AI to analyze patient data, predict outcomes, 
                and optimize healthcare delivery for better patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Healthcare
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-400">Improvement in Patient Outcomes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-gray-400">Reduction in Healthcare Costs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-400">Faster Disease Detection</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">30%</div>
              <div className="text-gray-400">Resource Efficiency Improvement</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Transformative Healthcare Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI platform delivers measurable improvements across all aspects of healthcare delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced AI-Powered Healthcare Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with healthcare expertise to deliver 
              comprehensive analytics and insights for better patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our AI Healthcare Analytics Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your healthcare delivery with intelligent analytics and predictive insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Healthcare Analytics Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare facility's needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-green-500 scale-105' 
                    : 'border-slate-700'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise-Grade Healthcare Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technologies and healthcare compliance standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">AI/ML Framework</span>
                  <span className="text-white font-medium">TensorFlow, PyTorch</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Frontend</span>
                  <span className="text-white font-medium">React, TypeScript</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Backend</span>
                  <span className="text-white font-medium">Python, Node.js</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Database</span>
                  <span className="text-white font-medium">PostgreSQL, Redis</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Healthcare Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">HIPAA Compliance</span>
                  <span className="text-white font-medium">Full Compliance</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">HITECH Act</span>
                  <span className="text-white font-medium">Certified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">SOC 2 Type II</span>
                  <span className="text-white font-medium">Certified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Data Encryption</span>
                  <span className="text-white font-medium">End-to-end AES-256</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading healthcare organizations that trust our AI platform to improve patient care and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Visit our website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}