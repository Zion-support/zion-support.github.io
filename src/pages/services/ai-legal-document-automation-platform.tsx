import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Scale, 
  Shield, 
  Zap, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Globe,
  Lock,
  Brain,
  Search,
  Edit3,
  Download,
  Upload,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  TrendingUp,
  Eye,
  FileCheck,
  AlertTriangle,
  Calendar,
  Target,
  Rocket,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AILegalDocumentAutomationPlatform() {
  const features = [
    {
      title: "AI-Powered Document Analysis",
      description: "Advanced NLP algorithms analyze legal documents with 99.2% accuracy",
      icon: Brain,
      benefits: ["Extract key clauses automatically", "Identify potential risks", "Highlight compliance issues", "Generate executive summaries"]
    },
    {
      title: "Smart Contract Generation",
      description: "Generate legally compliant contracts based on industry standards and jurisdiction",
      icon: FileText,
      benefits: ["Template library with 500+ contracts", "Jurisdiction-specific compliance", "Real-time legal updates", "Custom clause builder"]
    },
    {
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring of regulatory changes and compliance requirements",
      icon: Shield,
      benefits: ["Real-time regulatory updates", "Compliance scoring", "Risk assessment", "Audit trail generation"]
    },
    {
      title: "Intelligent Document Review",
      description: "AI-powered review system that catches errors and suggests improvements",
      icon: Search,
      benefits: ["Error detection with 95% accuracy", "Style consistency checking", "Legal precedent suggestions", "Version control tracking"]
    },
    {
      title: "Workflow Automation",
      description: "Streamline legal processes with intelligent automation",
      icon: Zap,
      benefits: ["Approval workflows", "Deadline tracking", "Task assignment", "Progress monitoring"]
    },
    {
      title: "Advanced Security & Privacy",
      description: "Enterprise-grade security with SOC 2 Type II compliance",
      icon: Lock,
      benefits: ["End-to-end encryption", "Role-based access control", "Audit logging", "GDPR compliance"]
    }
  ];

  const pricingTiers = [
    {
      name: "Legal Professional",
      price: "$199",
      period: "/month",
      description: "Perfect for individual lawyers and small law firms",
      features: [
        "Document analysis (100 documents/month)",
        "Basic contract templates (50 templates)",
        "Compliance monitoring",
        "Email support",
        "Basic security features",
        "Mobile app access",
        "Standard integrations"
      ],
      popular: false,
      savings: null
    },
    {
      name: "Law Firm",
      price: "$499",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Everything in Legal Professional",
        "Document analysis (500 documents/month)",
        "Advanced contract templates (200+ templates)",
        "AI-powered review system",
        "Workflow automation",
        "Priority support",
        "Advanced security",
        "API access",
        "Custom branding",
        "Team collaboration (10 users)"
      ],
      popular: true,
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise Legal",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for large law firms and corporations",
      features: [
        "Everything in Law Firm",
        "Unlimited document analysis",
        "Full template library (500+ templates)",
        "Advanced AI review system",
        "Custom workflow creation",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom integrations",
        "White-label solutions",
        "Unlimited users",
        "Advanced analytics",
        "Compliance reporting"
      ],
      popular: false,
      savings: "Save 25% annually"
    }
  ];

  const useCases = [
    {
      title: "Contract Management",
      description: "Streamline contract creation, review, and management processes",
      icon: FileText,
      benefits: ["Reduce contract review time by 80%", "Improve accuracy by 95%", "Standardize contract language", "Track contract lifecycle"]
    },
    {
      title: "Compliance Monitoring",
      description: "Stay ahead of regulatory changes and maintain compliance",
      icon: Shield,
      benefits: ["Real-time regulatory updates", "Automated compliance checks", "Risk assessment reports", "Audit trail generation"]
    },
    {
      title: "Legal Research",
      description: "AI-powered research assistant for case law and legal precedents",
      icon: Search,
      benefits: ["Faster research completion", "Comprehensive case analysis", "Precedent identification", "Citation management"]
    },
    {
      title: "Document Review",
      description: "Efficient review of legal documents with AI assistance",
      icon: Eye,
      benefits: ["Error detection", "Consistency checking", "Version control", "Collaborative review"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Managing Partner",
      company: "Johnson & Associates Law Firm",
      content: "This platform has revolutionized our contract management process. We've reduced review time by 80% and improved accuracy significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "General Counsel",
      company: "TechCorp Solutions",
      content: "The AI-powered compliance monitoring has been invaluable. We're always ahead of regulatory changes now.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Senior Attorney",
      company: "Rodriguez Legal Services",
      content: "The document analysis features are incredibly accurate. It's like having an expert legal assistant available 24/7.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Legal Document Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your legal practice with AI-powered document automation, contract generation, and compliance monitoring. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI legal automation, legal document management, contract generation, compliance monitoring, legal tech, law firm software" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-legal-document-automation-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Industry Leading Legal Tech Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Legal Document
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Automation Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your legal practice with cutting-edge AI technology. Automate document analysis, 
              generate compliant contracts, and maintain regulatory compliance with unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Legal Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of legal practice with AI-powered automation that saves time, 
              reduces costs, and improves accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include our core AI features 
              with enterprise-grade security and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                  {tier.savings && (
                    <div className="mt-2">
                      <span className="text-cyan-400 text-sm font-medium">{tier.savings}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading law firms and legal departments are transforming their practices 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied legal professionals who have transformed their practices 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of legal technology. Start your free trial today and experience 
              the power of AI-powered legal automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}