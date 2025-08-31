import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Brain, 
  Search, 
  FileText, 
  Scale, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  Globe,
  BookOpen,
  Gavel,
  Target,
  TrendingUp,
  Lock,
  Cpu,
  Database,
  Network,
  Cloud,
  Activity,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const seoConfig = {
  ...defaultSEO,
  title: "AI Autonomous Legal Research Platform | Zion Tech Group",
  description: "Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal documents. Streamline legal research with advanced AI algorithms.",
  keywords: "AI legal research, autonomous legal analysis, legal AI platform, case law analysis, legal document review, Zion Tech Group",
  url: "https://ziontechgroup.com/services/ai-autonomous-legal-research-platform"
};

export default function AIAutonomousLegalResearchPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Case Analysis",
      description: "AI automatically analyzes and categorizes case law, identifying relevant precedents and legal patterns"
    },
    {
      icon: Search,
      title: "Intelligent Legal Search",
      description: "Advanced semantic search across millions of legal documents with context-aware results"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automated extraction and analysis of key legal information from contracts, briefs, and legal documents"
    },
    {
      icon: Scale,
      title: "Legal Risk Assessment",
      description: "AI-powered risk analysis and compliance checking for legal documents and business decisions"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Continuous monitoring of legal changes and automatic updates to relevant case law and regulations"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated compliance tracking and regulatory change management across jurisdictions"
    }
  ];

  const benefits = [
    "Reduce legal research time by 80%",
    "Improve case outcome prediction accuracy",
    "Automate routine legal document review",
    "Ensure compliance with latest regulations",
    "Scale legal operations without additional staff",
    "Provide 24/7 legal research capabilities"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small law firms and solo practitioners",
      features: [
        "Up to 1,000 document analyses/month",
        "Basic legal research tools",
        "Email support",
        "Standard compliance monitoring"
      ]
    },
    {
      plan: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for mid-size law firms and legal departments",
      features: [
        "Up to 10,000 document analyses/month",
        "Advanced AI legal research",
        "Priority support",
        "Enhanced compliance monitoring",
        "Custom legal templates"
      ]
    },
    {
      plan: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited document analyses",
        "Full AI autonomous capabilities",
        "Dedicated support team",
        "Custom integrations",
        "Advanced analytics dashboard",
        "Multi-jurisdiction support"
      ]
    }
  ];

  return (
    <>
      <SEOOptimizer config={seoConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Legal Research
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Legal
                <span className="text-zion-cyan"> Research Platform</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                Revolutionize your legal research with autonomous AI that analyzes case law, 
                statutes, and legal documents 24/7. Streamline operations and improve outcomes 
                with intelligent legal insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Legal Research Features
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with deep legal expertise to deliver 
                unprecedented research capabilities and insights.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Legal Operations
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Experience unprecedented efficiency and accuracy in legal research and analysis.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that best fits your legal practice needs and scale as you grow.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-zion-slate-dark/80 border rounded-xl p-8 ${
                    index === 1 
                      ? 'border-zion-cyan scale-105' 
                      : 'border-zion-purple/30'
                  }`}
                >
                  {index === 1 && (
                    <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      index === 1
                        ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                        : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Legal Research?
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
                Join leading law firms and legal departments that are already using our 
                AI platform to revolutionize their legal operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}