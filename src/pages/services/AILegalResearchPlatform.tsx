import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Brain, 
  BookOpen, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Calendar,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  MessageSquare,
  Share2,
  Analytics,
  Palette,
  Clock,
  DollarSign,
  Shield,
  Headphones,
  Rocket,
  Scale,
  FileText,
  Search,
  Gavel,
  Library,
  Briefcase,
  Award
 } from 'lucide-react.ts';

export default function AILegalResearchPlatform(...args: any[]): any {
  const features = [
    "AI-powered case law research and analysis",
    "Intelligent document review and contract analysis",
    "Automated legal citation checking and validation",
    "Real-time legal precedent tracking",
    "Advanced search with natural language queries",
    "Legal document generation and templates",
    "Compliance monitoring and risk assessment",
    "Multi-jurisdiction legal research",
    "Legal trend analysis and predictions",
    "Automated case outcome prediction",
    "Legal knowledge base management",
    "Collaborative research and sharing tools"
  ];

  const benefits = [
    "Reduce research time by 70%",
    "Improve case outcome accuracy by 45%",
    "Increase billable hours by 30%",
    "Reduce legal research costs by 50%",
    "Enhance client service quality"
  ];

  const useCases = [
    "Law firms and attorneys",
    "Corporate legal departments",
    "Legal research institutions",
    "Government agencies",
    "Compliance officers",
    "Risk management teams",
    "Legal technology companies",
    "Academic legal research"
  ];

  const pricing = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Perfect for individual attorneys and small law firms",
      features: [
        "AI legal research (up to 100 queries/month)",
        "Basic document analysis",
        "Case law database access",
        "Citation checking",
        "Email support",
        "Up to 5 users"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Firm",
      price: "$799",
      period: "/month",
      description: "Ideal for growing law firms and legal teams",
      features: [
        "AI legal research (unlimited queries)",
        "Advanced document analysis",
        "Multi-jurisdiction research",
        "Legal trend analysis",
        "Priority support",
        "Up to 25 users",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Custom AI model training",
        "White-label solutions",
        "Advanced analytics and reporting",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited users"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Legal Research Platform - Zion Tech Group"
        description="Revolutionize your legal research with AI-powered case analysis, document review, and legal insights. Save time and improve case outcomes."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Legal Research
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Legal
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Research Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your legal research with AI that analyzes cases, reviews documents, and provides insights. 
              Save time, improve accuracy, and deliver better outcomes for your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Watch Demo
              </motion.button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Legal Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to research, analyze, and win cases with AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See measurable improvements in your research efficiency and case outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Leading Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven solutions across diverse legal practices and organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-amber-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing for Legal Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your practice and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricing.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-amber-500 ring-2 ring-amber-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
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
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who have already revolutionized their research with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Need help choosing the right plan? Contact our sales team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <span>📞 +1 302 464 0950</span>
            <span>📧 kleber@ziontechgroup.com</span>
            <span>🌐 https://ziontechgroup.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}