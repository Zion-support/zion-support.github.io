import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Users, 
  BarChart3,
  Lock,
  Globe,
  Target,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Eye,
  Search,
  AlertTriangle,
  FileCheck,
  Scale,
  Gavel,
  Building,
  Heart
} from 'lucide-react';

export default function AIPoweredContractAnalysis() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced NLP models analyze contracts with 98% accuracy, identifying risks, obligations, and opportunities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Automated risk scoring and compliance checking against industry standards and regulatory requirements."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Process contracts in seconds, not hours. Instant insights and recommendations for legal teams."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Track regulatory changes and automatically flag non-compliant clauses and terms."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Search",
      description: "Semantic search across contract databases with natural language queries and advanced filtering."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting on contract performance, risks, and opportunities across your portfolio."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small legal teams and startups",
      features: [
        "Up to 100 contracts/month",
        "Basic risk assessment",
        "Standard compliance checks",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing law firms and mid-size companies",
      features: [
        "Up to 1,000 contracts/month",
        "Advanced AI analysis",
        "Custom compliance rules",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited contracts",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "On-premise deployment options",
        "SLA guarantees",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "10x Faster Review",
      description: "Reduce contract review time from days to hours with AI-powered analysis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Reduction",
      description: "Identify 95% more risks and compliance issues than manual review"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      description: "Save up to 70% on legal review costs and reduce contract cycle times"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Better Decisions",
      description: "Data-driven insights help negotiate better terms and avoid costly mistakes"
    }
  ];

  const useCases = [
    {
      title: "Legal Departments",
      description: "Streamline contract review processes and ensure compliance across all agreements",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Real Estate",
      description: "Analyze lease agreements, purchase contracts, and property management contracts",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Review medical contracts, vendor agreements, and compliance documentation",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Financial Services",
      description: "Analyze loan agreements, investment contracts, and regulatory compliance",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Contract Analysis Platform | Zion Tech Group"
        description="Transform your contract review process with AI-powered analysis, risk assessment, and compliance monitoring. 98% accuracy, real-time processing, and enterprise-grade security."
        keywords="AI contract analysis, legal tech, contract review, risk assessment, compliance monitoring, legal automation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Contract Analysis
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-slate-300">
                Transform Legal Review with 98% AI Accuracy
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionize your contract review process with our advanced AI platform. 
              Analyze contracts in seconds, identify risks automatically, and ensure compliance 
              across your entire contract portfolio.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Contract Analysis Demo Request&body=Hi, I'm interested in a demo of your AI Contract Analysis platform. Please provide more details about features, pricing, and implementation timeline."
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Modern Legal Teams</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with legal expertise to deliver 
              unprecedented efficiency and accuracy in contract analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs. All plans include our core AI analysis capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-slate-800/70' 
                  : 'border-slate-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry - AI Contract Analysis&body=Hi, I'm interested in the {plan.name} plan for your AI Contract Analysis platform. Please provide more details about implementation and next steps."
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 w-full justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Contract Analysis</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform delivers measurable results that transform how legal teams work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform adapts to your industry's specific needs and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Competitive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our AI platform compares to traditional contract review methods and other solutions.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Traditional Review</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Time per contract:</span>
                    <span className="text-red-400">2-4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Accuracy:</span>
                    <span className="text-red-400">85-90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost per contract:</span>
                    <span className="text-red-400">$200-500</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our AI Platform</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Time per contract:</span>
                    <span className="text-green-400">2-5 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Accuracy:</span>
                    <span className="text-green-400">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost per contract:</span>
                    <span className="text-green-400">$5-15</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Other AI Solutions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Time per contract:</span>
                    <span className="text-yellow-400">15-30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Accuracy:</span>
                    <span className="text-yellow-400">90-95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost per contract:</span>
                    <span className="text-yellow-400">$25-75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contract Review Process</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of legal teams already using AI to review contracts faster, more accurately, and at a fraction of the cost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Contract Analysis Demo Request&body=Hi, I'm interested in a demo of your AI Contract Analysis platform. Please provide more details about features, pricing, and implementation timeline."
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
          
          {/* Quick Contact Info */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
            <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Middletown DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
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