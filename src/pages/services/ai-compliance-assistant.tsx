import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Zap, 
  Brain, 
  ArrowRight,
  Star,
  PieChart,
  Activity,
  Clock,
  Target,
  Settings,
  Monitor,
  Lock,
  Scale,
  Gauge,
  TrendingUp
} from 'lucide-react';

const AIComplianceAssistant: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Compliance Monitoring",
      description: "24/7 monitoring of regulatory requirements with real-time alerts and notifications"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Regulatory Updates",
      description: "Automatic updates on new regulations and compliance requirements across all jurisdictions"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Management",
      description: "AI-powered document analysis and compliance verification with automated reporting"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Intelligent risk scoring and predictive analytics to identify compliance vulnerabilities"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Compliance Analytics",
      description: "Comprehensive dashboards showing compliance status, trends, and improvement areas"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Audit Trail",
      description: "Complete audit trail with blockchain-verified compliance actions and decisions"
    }
  ];

  const benefits = [
    "Reduce compliance violations by 90%",
    "Automate 80% of compliance tasks",
    "Real-time regulatory updates and alerts",
    "Comprehensive audit trails and reporting",
    "Multi-jurisdiction compliance support",
    "AI-powered risk assessment and mitigation"
  ];

  const complianceFrameworks = [
    { name: "GDPR", icon: "🇪🇺", description: "European data protection regulations" },
    { name: "SOX", icon: "📊", description: "Sarbanes-Oxley financial compliance" },
    { name: "HIPAA", icon: "🏥", description: "Healthcare information privacy" },
    { name: "PCI DSS", icon: "💳", description: "Payment card industry security" },
    { name: "ISO 27001", icon: "🔒", description: "Information security management" },
    { name: "SOC 2", icon: "🏢", description: "Service organization controls" }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small organizations",
      features: [
        "Up to 100 employees",
        "Basic compliance monitoring",
        "GDPR & HIPAA support",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 500 employees",
        "Advanced AI monitoring",
        "All major frameworks",
        "Custom dashboards",
        "Priority support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Custom AI models",
        "White-label solution",
        "Dedicated compliance officer",
        "24/7 phone support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Compliance Assistant - Automated Regulatory Compliance | Zion Tech Group</title>
        <meta name="description" content="Stay compliant with AI-powered monitoring, automated reporting, and real-time regulatory updates. Reduce compliance violations by 90% with intelligent automation." />
        <meta name="keywords" content="AI compliance, regulatory compliance, GDPR, SOX, HIPAA, compliance automation, risk assessment, audit trail" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-compliance-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                AI-Powered Compliance
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Compliance Assistant
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Stay Compliant, Stay Protected
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                Transform your compliance operations with AI-powered monitoring, automated reporting, and real-time regulatory updates. 
                Reduce compliance violations by 90% while automating 80% of compliance tasks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-zinc-400">Reduction in Violations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-zinc-400">Task Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-zinc-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-zinc-400">Audit Trail</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Supported Compliance Frameworks
              </h2>
              <p className="text-zinc-400">
                Comprehensive coverage across all major regulatory requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                  <div className="text-4xl mb-3">{framework.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{framework.name}</h3>
                  <p className="text-sm text-zinc-400">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Compliance Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our AI-powered platform provides end-to-end compliance management and monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Compliance Assistant?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Join thousands of organizations who have transformed their compliance operations with AI-powered automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing for Every Organization
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Choose the plan that fits your organization size and compliance needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-zinc-800/50 to-green-900/20' 
                    : 'border-zinc-700/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Compliance Operations?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Stay ahead of regulations and protect your organization with AI-powered compliance automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIComplianceAssistant;