import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  FileText, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Scale,
  Gavel,
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target
} from 'lucide-react';

const AILegalTech: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Document Analysis",
      description: "Advanced natural language processing that analyzes legal documents, contracts, and case files with human-like understanding.",
      benefits: ["Contract review automation", "Risk assessment", "Compliance checking"]
    },
    {
      icon: Search,
      title: "Intelligent Legal Research",
      description: "AI-driven research tools that find relevant case law, statutes, and precedents in seconds, not hours.",
      benefits: ["Case law discovery", "Precedent analysis", "Research automation"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast case outcomes, settlement probabilities, and litigation risks.",
      benefits: ["Case outcome prediction", "Risk assessment", "Strategic planning"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined legal processes that automate routine tasks and ensure consistency across all legal operations.",
      benefits: ["Document generation", "Process automation", "Quality control"]
    }
  ];

  const services = [
    {
      title: "Contract Management",
      description: "AI-powered contract analysis, review, and management for improved efficiency and risk mitigation.",
      icon: FileText,
      features: ["Contract review", "Risk assessment", "Compliance checking", "Automated generation"]
    },
    {
      title: "Legal Research",
      description: "Intelligent research tools that accelerate case preparation and improve legal strategy development.",
      icon: Search,
      features: ["Case law research", "Precedent analysis", "Statute interpretation", "Research automation"]
    },
    {
      title: "Litigation Support",
      description: "Comprehensive support for litigation processes with AI-powered analytics and document management.",
      icon: Gavel,
      features: ["Document review", "Evidence analysis", "Case strategy", "Outcome prediction"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting to ensure regulatory adherence across all legal operations.",
      icon: Shield,
      features: ["Regulatory monitoring", "Compliance reporting", "Risk assessment", "Audit support"]
    }
  ];

  const benefits = [
    {
      title: "Reduce Review Time",
      value: "80%",
      description: "Faster document analysis and contract review processes"
    },
    {
      title: "Improve Accuracy",
      value: "95%",
      description: "Higher accuracy in legal research and document analysis"
    },
    {
      title: "Lower Costs",
      value: "60%",
      description: "Reduced legal research and document review costs"
    },
    {
      title: "Increase Efficiency",
      value: "3x",
      description: "Faster case preparation and legal strategy development"
    }
  ];

  const useCases = [
    {
      title: "Law Firms",
      description: "Streamline operations, improve client service, and increase profitability with AI-powered legal tools.",
      icon: Users,
      features: ["Case management", "Client communication", "Billing optimization", "Resource allocation"]
    },
    {
      title: "Corporate Legal",
      description: "Manage corporate legal operations efficiently with automated compliance and contract management.",
      icon: Building,
      features: ["Contract lifecycle", "Compliance monitoring", "Risk management", "Policy enforcement"]
    },
    {
      title: "Government Agencies",
      description: "Improve public service delivery with efficient legal research and document processing capabilities.",
      icon: Shield,
      features: ["Policy research", "Regulatory analysis", "Public records", "Compliance reporting"]
    },
    {
      title: "Legal Tech Startups",
      description: "Leverage AI capabilities to build innovative legal technology solutions and services.",
      icon: Rocket,
      features: ["Product development", "API integration", "Custom solutions", "Scalability"]
    }
  ];

  const pricing = [
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Perfect for individual lawyers and small law firms",
      features: [
        "AI document analysis (up to 100 documents/month)",
        "Basic legal research tools",
        "Contract review automation",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Firm",
      price: "$999",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Unlimited document analysis",
        "Advanced legal research",
        "Predictive analytics",
        "Workflow automation",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Comprehensive solution for large legal organizations",
      features: [
        "Custom AI models",
        "Full platform integration",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom training & onboarding",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Legal Practice with
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your legal practice with AI-powered tools that automate research, analyze documents, 
              and provide intelligent insights. Work smarter, not harder, with cutting-edge legal technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-400">Faster Review Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-400">Improved Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Revolutionize Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform combines cutting-edge artificial intelligence with deep legal expertise 
              to deliver exceptional results for legal professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Legal Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From contract management to litigation support, our AI platform covers every aspect of modern legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Legal Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology solutions are tailored to meet the unique needs of different types of legal organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of AI-powered legal technology on your practice's efficiency and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking legal professionals who have already revolutionized their practice with AI. 
            Start working smarter today with intelligent legal technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
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