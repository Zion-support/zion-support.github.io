import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  Users, 
  FileText, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Upload,
  Globe,
  Key,
  Fingerprint,
  Scan,
  Monitor
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIDataGovernance() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Data Classification",
      description: "Automatically identify and categorize sensitive data using machine learning algorithms"
    },
    {
      icon: Lock,
      title: "Advanced Access Control",
      description: "Role-based permissions with AI-driven risk assessment and adaptive authentication"
    },
    {
      icon: Eye,
      title: "Real-time Data Monitoring",
      description: "Continuous surveillance of data access patterns and anomaly detection"
    },
    {
      icon: FileText,
      title: "Compliance Automation",
      description: "Automated compliance reporting for GDPR, CCPA, HIPAA, and industry standards"
    },
    {
      icon: Users,
      title: "Data Lineage Tracking",
      description: "Complete audit trail of data movement, transformations, and usage across systems"
    },
    {
      icon: Search,
      title: "Intelligent Data Discovery",
      description: "AI-powered tools to find, map, and understand your data landscape"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Reduce data breaches by 95% with AI-powered threat detection",
      metric: "95%"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assurance",
      description: "100% audit readiness with automated compliance monitoring",
      metric: "100%"
    },
    {
      icon: Users,
      title: "Operational Efficiency",
      description: "Reduce manual data governance tasks by up to 80%",
      metric: "80%"
    },
    {
      icon: BarChart3,
      title: "Risk Reduction",
      description: "Identify and mitigate data risks before they become incidents",
      metric: "90%"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Comply with SOX, PCI-DSS, and Basel III regulations while protecting customer financial data",
      icon: Shield
    },
    {
      title: "Healthcare",
      description: "HIPAA compliance with AI-powered PHI detection and access control",
      icon: Users
    },
    {
      title: "Retail & E-commerce",
      description: "GDPR and CCPA compliance with customer data privacy management",
      icon: Lock
    },
    {
      title: "Manufacturing",
      description: "Protect intellectual property and trade secrets with intelligent data classification",
      icon: FileText
    }
  ];

  const pricing = [
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Perfect for mid-size organizations with compliance requirements",
      features: [
        "Up to 10TB data management",
        "AI-powered classification",
        "Basic compliance reporting",
        "Standard support",
        "Up to 100 users",
        "Data lineage tracking"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Ideal for large enterprises with complex data governance needs",
      features: [
        "Up to 100TB data management",
        "Advanced AI capabilities",
        "Full compliance automation",
        "Priority support",
        "Unlimited users",
        "Custom integrations",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "For organizations requiring custom solutions and dedicated support",
      features: [
        "Unlimited data management",
        "Custom AI models",
        "On-premise deployment",
        "Dedicated support team",
        "Custom compliance frameworks",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI Data Governance - Zion Tech Group"
        description="Protect your data with AI-powered governance solutions. Automate compliance, enhance security, and maintain data quality with intelligent data management."
        canonical="/services/ai-data-governance"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Data Protection
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              AI Data
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                Governance
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Secure, govern, and manage your data with AI intelligence. Automate compliance, enhance security, and maintain data quality across your entire organization.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose AI Data Governance?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your data management with intelligent automation and AI-powered insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See the measurable impact of AI Data Governance on your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored data governance solutions for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your data governance needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Custom" ? "/contact" : "/request-quote"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Data?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join leading organizations already protecting their data with AI-powered governance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}