import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Scale, 
  FileText, 
  Brain, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Database,
  Network,
  Cpu,
  Server,
  Globe,
  Target,
  TrendingUp,
  Activity,
  Fingerprint,
  Key,
  Search,
  Gavel,
  BookOpen,
  Briefcase,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AILegalTechPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Document Analysis",
      description: "Advanced NLP algorithms that analyze legal documents with 99.2% accuracy"
    },
    {

      icon: Scale,
      title: "Intelligent Contract Review",
      description: "Automated contract analysis with risk assessment and compliance checking"
    },
    {

      icon: Clock,
      title: "24/7 Legal Research",
      description: "Instant access to case law, statutes, and legal precedents worldwide"
    },
    {

      icon: Shield,
      title: "Compliance Automation",
      description: "Automated compliance monitoring and regulatory updates across jurisdictions"
    }
  ];

  const services = [
    {

      title: "Contract Intelligence",
      description: "AI-powered contract analysis, risk assessment, and automated clause generation",
      icon: FileText,
      features: ["Smart clause detection", "Risk scoring", "Automated drafting", "Version control"]
    },
    {

      title: "Legal Research AI",
      description: "Intelligent legal research with case law analysis and precedent identification",
      icon: BookOpen,
      features: ["Case law search", "Precedent analysis", "Citation checking", "Research automation"]
    },
    {

      title: "Compliance Management",
      description: "Automated compliance monitoring and regulatory change management",
      icon: Shield,
      features: ["Regulatory tracking", "Compliance alerts", "Audit trails", "Risk assessment"]
    },
    {

      title: "Document Automation",
      description: "Intelligent document generation and workflow automation",
      icon: Briefcase,
      features: ["Template library", "Smart forms", "Workflow automation", "E-signature integration"]
    }
  ];

  const technologies = [
    "GPT-4 & Claude 3.5 Integration",
    "Natural Language Processing (NLP)",
    "Machine Learning Algorithms",
    "Blockchain for Document Integrity",
    "Cloud-Native Architecture",
    "API-First Design",
    "Multi-jurisdiction Support",
    "Real-time Collaboration Tools"
  ];

  const pricing = [
    {

      plan: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Standard legal research",
        "Email support",
        "Basic compliance alerts"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      plan: "Professional",
      price: "$799",
      period: "/month",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI analysis",
        "Priority legal research",
        "Phone & email support",
        "Advanced compliance features",
        "Custom templates"
      ],
      cta: "Get Started",
      popular: true
    },
    {

      plan: "Enterprise",
      price: "$2,499",
      period: "/month",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "Dedicated legal research",
        "24/7 priority support",
        "Full compliance suite",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Legal Tech Platform - Zion Tech Group"
        description="Revolutionary AI-powered legal technology platform for contract analysis, legal research, and compliance automation. Transform your legal practice with intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Legal Tech
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your legal practice with our AI-powered platform that automates contract analysis, 
              legal research, and compliance management. Save 40+ hours per week while improving accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Legal Tech Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered legal platform combines cutting-edge technology with legal expertise 
              to provide comprehensive automation for your legal practice.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-400/40 group-hover:to-purple-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From contract analysis to compliance management, our AI legal platform covers every aspect 
              of modern legal practice automation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include our core AI features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${

                  plan.popular 
                    ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500'
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

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Legal Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to provide the most advanced legal automation available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-400/30 transition-all duration-200"
              >
                <Scale className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Understand the market landscape and potential return on investment for AI legal technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Market Growth</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">24.3% CAGR</p>
              <p className="text-slate-300">Global legal tech market growing rapidly</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">340%</p>
              <p className="text-slate-300">Return on investment within 12 months</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Time Savings</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">40+ hrs</p>
              <p className="text-slate-300">Per week saved with automation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of legal professionals who have already automated their practice with AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to revolutionize your legal practice? Contact our team for a personalized demo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}