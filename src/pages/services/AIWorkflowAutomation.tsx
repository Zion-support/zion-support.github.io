import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Star,
  TrendingUp
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AIWorkflowAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Process Discovery",
      description: "AI automatically maps your existing workflows and identifies optimization opportunities.",
      benefit: "Reduce manual mapping time by 90%"
    },
    {
      icon: Zap,
      title: "Smart Automation Rules",
      description: "Machine learning algorithms create and optimize automation rules based on your data patterns.",
      benefit: "Increase automation accuracy by 95%"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor workflow performance with advanced analytics and predictive insights.",
      benefit: "Improve decision-making speed by 80%"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications.",
      benefit: "100% compliance with industry standards"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Automated workflows run continuously without human intervention.",
      benefit: "Reduce operational costs by 75%"
    },
    {
      icon: Users,
      title: "Collaborative Workflows",
      description: "Enable seamless collaboration across teams with intelligent task routing.",
      benefit: "Boost team productivity by 60%"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with automation",
      features: [
        "Up to 10 automated workflows",
        "5 user accounts",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations (5)",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing businesses with complex workflows",
      features: [
        "Unlimited automated workflows",
        "25 user accounts",
        "Advanced analytics & AI insights",
        "Priority support",
        "Advanced integrations (25)",
        "Real-time monitoring",
        "Custom workflow templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited everything",
        "Unlimited user accounts",
        "Enterprise-grade analytics",
        "Dedicated success manager",
        "Unlimited integrations",
        "Advanced security features",
        "Custom development",
        "SLA guarantee",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      content: "Zion's AI Workflow Automation reduced our processing time by 85% and eliminated manual errors completely. ROI achieved in just 3 months.",
      rating: 5,
      company: "TechFlow Solutions"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director, Global Manufacturing Co.",
      content: "The intelligent process discovery feature identified $2M in savings opportunities we never knew existed. Game-changing technology.",
      rating: 5,
      company: "Global Manufacturing Co."
    },
    {
      name: "Dr. Lisa Wang",
      role: "VP Operations, HealthTech Innovations",
      content: "Implementation was seamless and the results exceeded our expectations. Our team productivity increased by 70% within the first quarter.",
      rating: 5,
      company: "HealthTech Innovations"
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Manufacturing",
      challenge: "Manual workflow processes causing delays and errors",
      solution: "Implemented AI-driven automation for supply chain management",
      results: [
        "85% reduction in processing time",
        "99.7% accuracy improvement",
        "$15M annual cost savings",
        "ROI achieved in 4 months"
      ]
    },
    {
      title: "Global Financial Services",
      challenge: "Complex compliance workflows requiring manual oversight",
      solution: "Deployed intelligent automation with real-time monitoring",
      results: [
        "90% faster compliance reporting",
        "100% audit compliance rate",
        "$8M operational savings",
        "50% reduction in compliance team workload"
      ]
    },
    {
      title: "Healthcare System",
      challenge: "Patient data processing bottlenecks",
      solution: "Automated patient intake and data processing workflows",
      results: [
        "75% faster patient processing",
        "95% reduction in data entry errors",
        "40% improvement in patient satisfaction",
        "$12M annual efficiency gains"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group | Transform Your Business Processes</title>
        <meta
          name="description"
          content="Revolutionary AI workflow automation that reduces costs by 75%, increases efficiency by 10x, and eliminates manual errors. Enterprise-grade security and 24/7 operations."
        />
        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization, enterprise automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-workflow-automation" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                AI Workflow <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Transform your business processes with intelligent automation that reduces costs by 75%, 
                increases efficiency by 10x, and eliminates manual errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Workflow Automation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable results through cutting-edge AI technology and proven methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">75% Cost Reduction</h3>
                <p className="text-gray-600">Average operational cost savings across all implementations</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10x Efficiency Gain</h3>
                <p className="text-gray-600">Dramatic improvement in process speed and accuracy</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">Enterprise-grade reliability with guaranteed SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Enterprise Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered capabilities designed to transform your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing for Every Business Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI automation features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Need a custom solution?</p>
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact our Enterprise Team
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading organizations have transformed their operations with our AI workflow automation.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who have transformed their operations with our AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already using our AI workflow automation to achieve unprecedented efficiency and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIWorkflowAutomation;