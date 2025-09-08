import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Scale, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Zap,
  Brain,
  Lock,
  FileText,
  BarChart3,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIEthicsGuardianPlatform() {
  const features = [
    {
      icon: Shield,
      title: "AI Bias Detection",
      description: "Advanced algorithms that identify and flag potential biases in AI models and datasets, ensuring fair and equitable AI systems."
    },
    {
      icon: Scale,
      title: "Ethical Compliance",
      description: "Comprehensive compliance monitoring for AI regulations, industry standards, and ethical guidelines across multiple jurisdictions."
    },
    {
      icon: Eye,
      title: "Transparency Monitoring",
      description: "Real-time monitoring of AI decision-making processes, providing explainable AI insights and audit trails."
    },
    {
      icon: CheckCircle,
      title: "Responsible AI Guidelines",
      description: "Built-in ethical frameworks and best practices for responsible AI development and deployment."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Proactive identification and assessment of potential ethical risks and unintended consequences of AI systems."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting on AI ethics metrics, compliance status, and improvement recommendations."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Build Trust",
      description: "Demonstrate commitment to responsible AI and build trust with customers, stakeholders, and regulators."
    },
    {
      icon: Zap,
      title: "Reduce Risk",
      description: "Minimize legal, reputational, and operational risks associated with AI bias and ethical violations."
    },
    {
      icon: Brain,
      title: "Improve AI Quality",
      description: "Enhance AI system performance and reliability through ethical considerations and bias mitigation."
    },
    {
      icon: Lock,
      title: "Ensure Compliance",
      description: "Stay ahead of evolving AI regulations and maintain compliance with industry standards."
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Ensure fair lending algorithms, prevent discrimination in credit scoring, and maintain regulatory compliance.",
      icon: DollarSign
    },
    {
      title: "Healthcare",
      description: "Monitor AI diagnostic tools for bias, ensure equitable treatment recommendations, and maintain patient privacy.",
      icon: Users
    },
    {
      title: "Human Resources",
      description: "Audit AI-powered hiring tools, prevent discrimination in candidate selection, and ensure fair employment practices.",
      icon: Users
    },
    {
      title: "Criminal Justice",
      description: "Monitor AI risk assessment tools, prevent algorithmic bias in sentencing, and ensure fair treatment.",
      icon: Scale
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small organizations starting their AI ethics journey",
      features: [
        "Basic bias detection",
        "Compliance monitoring",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "one-time",
      description: "Ideal for growing companies with multiple AI systems",
      features: [
        "Advanced bias detection",
        "Real-time monitoring",
        "Custom compliance frameworks",
        "Priority support",
        "Training and consultation"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "one-time",
      description: "Comprehensive solution for large enterprises",
      features: [
        "Full AI ethics platform",
        "Custom integrations",
        "Dedicated support team",
        "Compliance certification",
        "Ongoing maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="AI Ethics Guardian Platform - Responsible AI Development | Zion Tech Group"
        description="Comprehensive AI ethics monitoring and compliance platform that ensures responsible AI development and deployment. Get ethical guidelines, bias detection, and compliance reporting."
        keywords="AI Ethics, AI Compliance, Bias Detection, Responsible AI, AI Governance, AI Regulations"
        canonical="https://ziontechgroup.com/services/ai-ethics-guardian-platform"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Ethics Guardian Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Comprehensive AI ethics monitoring and compliance platform that ensures responsible AI development and deployment. 
              Get ethical guidelines, bias detection, and compliance reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Bias Detection Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">500%</div>
              <div className="text-gray-600">ROI within 10 months</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">4-6</div>
              <div className="text-gray-600">Weeks Setup Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">95</div>
              <div className="text-gray-600">AI Ethics Score</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Ethics Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end AI ethics monitoring, from development to deployment, 
              ensuring your AI systems are responsible, fair, and compliant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Ethics Guardian?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your organization from AI-related risks while building trust and ensuring compliance 
              with evolving regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Ethics Guardian Platform is designed to meet the unique ethical challenges 
              faced by different industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your organization's AI ethics needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.featured ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ensure Responsible AI?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join leading organizations in building trustworthy, ethical, and compliant AI systems. 
              Get started with AI Ethics Guardian today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}