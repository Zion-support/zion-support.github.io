import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Shield, 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap, 
  TrendingUp,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AILegalDocumentAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Legal Document Automation Suite - Zion Tech Group"
        description="Intelligent legal document generation, review, and automation platform that reduces legal costs by 70% while ensuring compliance and accuracy across all document types."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/10 border border-purple-200/20 text-purple-200 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              AI & Legal Tech
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Legal Document
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Automation Suite
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Intelligent legal document generation, review, and automation platform that reduces legal costs by 70% while ensuring compliance and accuracy across all document types.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Legal Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform delivers unprecedented efficiency and accuracy in legal document management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "70% Cost Reduction",
                description: "Dramatically reduce legal document costs through intelligent automation and streamlined processes."
              },
              {
                icon: Clock,
                title: "85% Faster Processing",
                description: "Speed up contract processing and document review with AI-powered automation."
              },
              {
                icon: Shield,
                title: "99.9% Compliance",
                description: "Ensure regulatory compliance across all jurisdictions with automated compliance checking."
              },
              {
                icon: Users,
                title: "24/7 Availability",
                description: "Generate documents and conduct research around the clock without human intervention."
              },
              {
                icon: TrendingUp,
                title: "Scalable Operations",
                description: "Scale your legal operations efficiently to handle growing document volumes."
              },
              {
                icon: CheckCircle,
                title: "Risk Mitigation",
                description: "Identify and mitigate legal risks with AI-powered risk assessment and analysis."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive legal document automation capabilities designed for modern legal practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "AI-powered contract generation with customizable templates",
                "Automated legal document review and analysis",
                "Real-time compliance checking across multiple jurisdictions",
                "Comprehensive template library with 500+ document types",
                "E-signature integration and workflow automation",
                "Version control and document tracking systems",
                "Multi-jurisdiction legal research automation",
                "AI-powered risk assessment and analysis",
                "Secure client portal with role-based access",
                "Advanced analytics and performance reporting"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Specifications</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <span className="font-semibold text-white">Technology Stack:</span>
                  <p>GPT-4, BERT, React, Node.js, MongoDB</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Integrations:</span>
                  <p>DocuSign, Clio, PracticePanther, QuickBooks, Microsoft Office</p>
                </div>
                <div>
                  <span className="font-semibold text-white">API Endpoints:</span>
                  <p>200+ RESTful APIs</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Uptime:</span>
                  <p>99.95% guaranteed</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Security:</span>
                  <p>SOC 2, GDPR, HIPAA, End-to-end encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Competitive pricing designed for legal practices of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$1,899",
                period: "/month",
                description: "Perfect for small law firms and solo practitioners",
                features: [
                  "Up to 100 documents/month",
                  "Basic AI contract generation",
                  "Standard compliance checking",
                  "Email support",
                  "Basic templates (100+)"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$3,499",
                period: "/month",
                description: "Ideal for growing legal practices",
                features: [
                  "Up to 500 documents/month",
                  "Advanced AI capabilities",
                  "Multi-jurisdiction support",
                  "Priority support",
                  "Premium templates (300+)",
                  "Custom branding"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$4,999",
                period: "/month",
                description: "For large law firms and corporate legal departments",
                features: [
                  "Unlimited documents",
                  "Full AI suite",
                  "Custom integrations",
                  "Dedicated support",
                  "All templates (500+)",
                  "White-label solution",
                  "Custom development"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-600/20 to-pink-600/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/request-quote"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn how AI Legal Document Automation can revolutionize your practice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}