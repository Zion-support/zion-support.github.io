import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Zap,
  Users,
  Globe,
  BarChart3,
  Settings,
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIDataGovernancePlatform: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Compliance Monitoring",
      description: "Real-time monitoring of data compliance across GDPR, CCPA, HIPAA, and other regulatory frameworks with automated violation detection and remediation suggestions."
    },
    {
      icon: Database,
      title: "Intelligent Data Classification",
      description: "Automated classification of sensitive data using AI to identify PII, PHI, financial data, and other sensitive information across all data sources."
    },
    {
      icon: Lock,
      title: "Dynamic Access Control",
      description: "AI-driven access management that adapts to user behavior patterns and automatically adjusts permissions based on risk assessment and compliance requirements."
    },
    {
      icon: Eye,
      title: "Privacy Impact Assessment",
      description: "Automated privacy impact assessments with AI-generated recommendations for data minimization, retention policies, and consent management."
    },
    {
      icon: FileText,
      title: "Smart Data Lineage",
      description: "End-to-end data lineage tracking with AI-powered impact analysis for data changes, helping organizations understand data flow and dependencies."
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics Dashboard",
      description: "Real-time compliance metrics, risk scoring, and predictive analytics to identify potential compliance issues before they become violations."
    }
  ];

  const benefits = [
    "Reduce compliance costs by up to 60% through automation",
    "Achieve 99.9% compliance accuracy with AI-powered monitoring",
    "Real-time violation detection and automated remediation",
    "Seamless integration with existing data infrastructure",
    "Scalable solution for enterprises of all sizes",
    "24/7 compliance monitoring and alerting"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1TB data monitoring",
        "Basic compliance frameworks (GDPR, CCPA)",
        "Standard reporting",
        "Email support",
        "Basic AI classification"
      ]
    },
    {
      plan: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10TB data monitoring",
        "Advanced compliance frameworks",
        "Custom reporting and dashboards",
        "Priority support",
        "Advanced AI classification",
        "API access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises with complex needs",
      features: [
        "Unlimited data monitoring",
        "All compliance frameworks",
        "Custom integrations",
        "Dedicated support team",
        "Advanced AI capabilities",
        "White-label options",
        "On-premise deployment"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Ensure HIPAA compliance with automated PHI detection and access control management across electronic health records and medical devices."
    },
    {
      industry: "Financial Services",
      description: "Maintain regulatory compliance for SOX, PCI-DSS, and other financial regulations with real-time monitoring and audit trails."
    },
    {
      industry: "E-commerce",
      description: "Protect customer data and ensure GDPR/CCPA compliance with intelligent consent management and data minimization."
    },
    {
      industry: "Manufacturing",
      description: "Secure intellectual property and sensitive operational data while maintaining compliance with industry-specific regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Data Governance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Data Governance Platform
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your data governance with AI-powered compliance monitoring, intelligent data classification, and automated risk management. 
            Stay ahead of regulatory requirements while protecting your most valuable asset - your data.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>CCPA Ready</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>HIPAA Certified</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>SOX Compliant</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Data Governance
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive data governance capabilities that adapt to your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Data Governance Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your data governance strategy with AI-powered automation and intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Organization
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your data governance needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-2xl p-8 ${
                  index === 1 
                    ? 'border-blue-500/50 bg-blue-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white/10 hover:bg-white/15 border border-white/20 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored data governance solutions for various industries and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data Governance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that trust our AI-powered platform to protect their data and maintain compliance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDataGovernancePlatform;