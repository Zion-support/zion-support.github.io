import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  FileText, 
  Scale, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Gavel,
  Library,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Workflow,
  Target,
  Rocket,
  Star,
  Clock,
  DollarSign,
  Globe,
  Award,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Activity,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIAutonomousLegalResearchPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Legal Research",
      description: "Advanced AI algorithms that understand legal context and provide relevant case law, statutes, and precedents."
    },
    {
      icon: Search,
      title: "Intelligent Search & Discovery",
      description: "Natural language search with semantic understanding for finding relevant legal documents and cases."
    },
    {
      icon: FileText,
      title: "Document Analysis & Summarization",
      description: "Automated analysis of legal documents with AI-generated summaries and key insights extraction."
    },
    {
      icon: Scale,
      title: "Legal Precedent Tracking",
      description: "Track and analyze legal precedents across jurisdictions with predictive analytics."
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Team-based research platform with shared workspaces and collaborative annotations."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with SOC2 compliance and data protection measures."
    }
  ];

  const benefits = [
    "Reduce legal research time by 80%",
    "Improve case outcome predictions by 65%",
    "Save up to $150,000 annually on research costs",
    "Access to comprehensive legal databases",
    "Real-time updates on case law changes",
    "24/7 AI-powered research assistance"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for solo practitioners and small law firms",
      features: [
        "Basic AI research capabilities",
        "Access to core legal databases",
        "Document analysis (up to 100/month)",
        "Email support",
        "Basic reporting"
      ]
    },
    {
      plan: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Advanced AI research algorithms",
        "Full legal database access",
        "Unlimited document analysis",
        "Priority support",
        "Advanced analytics & reporting",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Custom AI model training",
        "API access & integrations",
        "Dedicated account manager",
        "Custom compliance features",
        "Advanced security options",
        "White-label solutions"
      ]
    }
  ];

  const useCases = [
    {
      title: "Case Law Research",
      description: "Find relevant precedents and analyze case outcomes across jurisdictions.",
      icon: BookOpen
    },
    {
      title: "Contract Analysis",
      description: "AI-powered contract review with risk assessment and clause analysis.",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "Stay updated on regulatory changes and compliance requirements.",
      icon: Shield
    },
    {
      title: "Legal Strategy Development",
      description: "Data-driven insights for developing winning legal strategies.",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-8">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Legal Research Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Legal Research Platform
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize legal research with AI-powered intelligence. Access comprehensive legal databases, 
              analyze documents, and discover insights faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Legal Professionals
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with deep legal expertise to deliver 
              unprecedented research capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300">
                <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Legal Research
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience unprecedented efficiency and accuracy in legal research with our AI platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your legal practice needs and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-zion-cyan bg-zion-slate-dark/70 scale-105' 
                  : 'border-zion-purple/30 bg-zion-slate-dark/50 hover:border-zion-purple/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how our AI platform transforms various aspects of legal practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-purple/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Legal Research?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join thousands of legal professionals who are already using AI to revolutionize their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Have questions about our AI Legal Research Platform? Our team is here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}