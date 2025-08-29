import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  TrendingUp,
  Lock,
  Search,
  AlertTriangle,
  FileCheck,
  Scale,
  Gavel,
  BookOpen,
  Target,
  Award,
  Phone,
  Play
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIContractAnalysis() {
  const features = [
    "AI-powered contract review and analysis",
    "Risk assessment and compliance checking",
    "Automated clause identification and categorization",
    "Legal document summarization",
    "Contract template generation",
    "Multi-language support",
    "Version control and tracking",
    "Integration with legal management systems",
    "Real-time collaboration tools",
    "Advanced security and encryption"
  ];

  const benefits = [
    "Reduce contract review time by 80%",
    "Improve accuracy and reduce human errors",
    "Ensure compliance with latest regulations",
    "Save on legal consultation costs",
    "Streamline contract management workflows",
    "Enhance risk mitigation strategies"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Up to 50 contracts/month",
        "Basic AI analysis",
        "Standard templates",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      features: [
        "Up to 200 contracts/month",
        "Advanced AI analysis",
        "Custom templates",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      features: [
        "Unlimited contracts",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Contract Analysis Platform | Zion Tech Group"
        description="Revolutionary AI platform for automated contract analysis, risk assessment, and legal document management. Reduce review time by 80% and improve accuracy."
        keywords="AI contract analysis, legal tech, contract management, risk assessment, compliance checking, legal automation"
        ogImage="https://ziontechgroup.com/images/ai-contract-analysis.jpg"
        ogUrl="https://ziontechgroup.com/services/ai-contract-analysis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered Contract Analysis
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Revolutionize your legal operations with our advanced AI platform that analyzes contracts, 
                  identifies risks, and ensures compliance in minutes, not hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Request Demo
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    View Pricing
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Legal Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with legal expertise to deliver 
                unprecedented efficiency and accuracy in contract management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
                >
                  <CheckCircle className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Legal Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and accuracy in contract management with our AI platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your organization's needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-700/50 p-8 rounded-xl border-2 ${
                    plan.popular 
                      ? 'border-blue-500 bg-gradient-to-br from-slate-700/50 to-blue-900/20' 
                      : 'border-slate-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Contract Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of legal teams already using our AI platform to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}