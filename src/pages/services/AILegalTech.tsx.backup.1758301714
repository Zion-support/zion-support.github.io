import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Brain, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Lock,
  Eye,
  Database,
  Search,
  Target,
  Zap,
  BarChart3,
  AlertTriangle,
  Briefcase,
  Globe
} from 'lucide-react';

const AILegalTech: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Legal Research",
      description: "Advanced AI algorithms that analyze legal documents, case law, and regulations to provide comprehensive research insights.",
      benefits: ["Faster research", "Comprehensive analysis", "Precedent identification"]
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "Intelligent document generation and automation for contracts, legal briefs, and other legal documents.",
      benefits: ["Template automation", "Custom document generation", "Compliance checking"]
    },
    {
      icon: Scale,
      title: "Legal Analytics",
      description: "Data-driven insights into case outcomes, judge tendencies, and legal strategy optimization.",
      benefits: ["Case outcome prediction", "Strategy optimization", "Risk assessment"]
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated compliance checking and monitoring for regulatory requirements and legal obligations.",
      benefits: ["Regulatory updates", "Compliance alerts", "Audit trails"]
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "AI-powered e-discovery tools that streamline document review and evidence identification.",
      benefits: ["Faster review", "Relevance scoring", "Cost reduction"]
    },
    {
      icon: Target,
      title: "Contract Analysis",
      description: "Automated contract review and analysis with risk identification and clause optimization.",
      benefits: ["Risk detection", "Clause optimization", "Standardization"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Processing",
      description: "Reduce legal document processing time by up to 70%"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower legal costs through automation and efficiency"
    },
    {
      icon: Star,
      title: "Better Accuracy",
      description: "Improve accuracy with AI-powered analysis and review"
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      description: "Better team collaboration with centralized legal tools"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      period: "per month",
      features: [
        "Up to 100 documents/month",
        "Basic AI research tools",
        "Standard templates",
        "Email support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI algorithms",
        "Contract analysis",
        "Compliance monitoring",
        "Priority support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "Advanced analytics dashboard",
        "API access",
        "Dedicated support team"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Legal Tech
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Transform legal practice with AI-powered tools that streamline research, automate documents, and optimize legal strategies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI-Powered Legal Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Legal Tech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  plan.recommended 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our AI experts help you implement intelligent legal technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILegalTech;
