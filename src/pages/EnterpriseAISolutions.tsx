import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Database,
  Cloud,
  Brain,
  BarChart3,
  Globe,
  Award,
  DollarSign,
  Calendar,
  Play,
  Download,
  FileText,
  Lightbulb,
  Settings,
  Monitor,
  Smartphone
} from "lucide-react";

const EnterpriseAISolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "AI Workflow Automation",
      icon: Zap,
      description: "Automate repetitive business processes with intelligent AI workflows that adapt and learn.",
      features: [
        "80% reduction in manual tasks",
        "Real-time process optimization",
        "Integration with existing systems",
        "24/7 automated monitoring"
      ],
      pricing: {
        starter: "$99/month",
        professional: "$299/month",
        enterprise: "Custom"
      },
      popular: true
    },
    {
      id: 2,
      title: "AI Virtual Assistant Platform",
      icon: Brain,
      description: "Deploy intelligent virtual assistants across customer service, sales, and internal operations.",
      features: [
        "Natural language processing",
        "Multi-channel deployment",
        "Custom training and tuning",
        "Analytics and insights"
      ],
      pricing: {
        starter: "$79/month",
        professional: "$199/month",
        enterprise: "Custom"
      },
      popular: false
    },
    {
      id: 3,
      title: "AI Data Analytics Suite",
      icon: BarChart3,
      description: "Transform raw data into actionable insights with advanced AI-powered analytics.",
      features: [
        "Predictive analytics",
        "Real-time dashboards",
        "Automated reporting",
        "Machine learning models"
      ],
      pricing: {
        starter: "$149/month",
        professional: "$399/month",
        enterprise: "Custom"
      },
      popular: false
    },
    {
      id: 4,
      title: "AI-Powered Security Platform",
      icon: Shield,
      description: "Advanced threat detection and response powered by AI and machine learning.",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Behavioral analysis",
        "Compliance monitoring"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "Custom"
      },
      popular: false
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: "RetailMax Corporation",
      industry: "E-commerce",
      challenge: "Manual order processing taking 24+ hours",
      solution: "AI Workflow Automation",
      results: [
        "99% reduction in processing time",
        "$2.3M annual cost savings",
        "50% increase in customer satisfaction"
      ],
      logo: "🏪"
    },
    {
      id: 2,
      company: "First National Bank",
      industry: "Banking",
      challenge: "High customer service wait times",
      solution: "AI Virtual Assistant",
      results: [
        "95% faster response times",
        "40% increase in conversions",
        "60% reduction in support costs"
      ],
      logo: "🏦"
    },
    {
      id: 3,
      company: "Precision Manufacturing",
      industry: "Manufacturing",
      challenge: "Production waste and inefficiencies",
      solution: "AI Data Analytics",
      results: [
        "70% reduction in waste",
        "25% improvement in efficiency",
        "$1.8M annual savings"
      ],
      logo: "🏭"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with AI",
      features: [
        "Up to 5 workflows",
        "Basic AI models",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses scaling AI initiatives",
      features: [
        "Unlimited workflows",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Real-time analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI development",
        "Dedicated support team",
        "On-premise deployment",
        "Advanced security",
        "SLA guarantees",
        "Training and consulting"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive Enterprise AI Solutions. AI workflow automation, virtual assistants, data analytics, and security platforms designed for enterprise scale." />
        <meta name="keywords" content="enterprise AI, AI automation, virtual assistant, data analytics, AI security, business transformation, AI consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Enterprise AI Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transform your business operations with our comprehensive AI platform. 
                From workflow automation to predictive analytics, we deliver enterprise-grade AI solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                </Link>
                <Link
                  to="/tools"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate ROI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
                <div className="text-gray-600">Client Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI solutions designed to address your specific business challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div key={solution.id} className={`bg-white rounded-xl shadow-lg border-2 p-8 hover:shadow-2xl transition-all duration-300 ${solution.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mr-4 ${solution.popular ? 'bg-purple-100' : 'bg-gray-100'}`}>
                        <solution.icon className={`w-8 h-8 ${solution.popular ? 'text-purple-600' : 'text-gray-600'}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                        {solution.popular && (
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">Starting from</span>
                      <span className="text-2xl font-bold text-gray-900">{solution.pricing.starter}</span>
                    </div>
                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                        solution.popular
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading enterprises are transforming their operations with our AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{study.logo}</div>
                    <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                    <p className="text-gray-500">{study.industry}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-purple-600 font-medium">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI platform with no hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg border-2 p-8 hover:shadow-2xl transition-all duration-300 ${tier.popular ? 'border-purple-500 scale-105' : 'border-gray-200'}`}>
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-500 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                      tier.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need a custom solution? We offer enterprise packages tailored to your specific needs.
              </p>
              <Link
                to="/contact"
                className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2"
              >
                Contact Sales Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises already using our AI solutions to drive growth, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Link>
              <Link
                to="/tools"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EnterpriseAISolutions;