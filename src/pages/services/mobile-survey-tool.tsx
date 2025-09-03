import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Smartphone, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  MessageSquare,
  Filter,
  Target,
  Clock,
  Download,
  Share2,
  Eye
} from 'lucide-react';

const MobileSurveyTool: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with responsive design that adapts to any screen size for maximum engagement."
    }, {
      icon: Zap,
      title: "Adaptive Question Flow",
      description: "Dynamic surveys that change based on user responses, providing personalized experiences and richer data."
    }, {
      icon: Download,
      title: "Offline Data Collection",
      description: "Collect responses even without internet connection, syncing automatically when connectivity is restored."
    }, {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Instant insights with live dashboards, charts, and reports to track survey performance and responses."
    }, {
      icon: Share2,
      title: "Multi-Channel Distribution",
      description: "Share surveys via SMS, email, social media, QR codes, and embeddable widgets for maximum reach."
    }, {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, GDPR compliance, and secure data storage."
    }
  ];

  const benefits = [
    "Increase survey completion rates by 65%",
    "Reduce survey creation time by 80%",
    "Collect data from any device, anywhere",
    "Get real-time insights and analytics",
    "Improve data quality with smart validation",
    "Scale to thousands of respondents"
  ];

  const useCases = [
    {
      title: "Customer Feedback",
      description: "Gather real-time customer satisfaction and feedback across all touchpoints.",
      icon: MessageSquare
    }, {
      title: "Market Research",
      description: "Conduct comprehensive market research with adaptive questioning techniques.",
      icon: Target
    }, {
      title: "Employee Surveys",
      description: "Measure employee engagement and satisfaction with confidential, mobile-friendly surveys.",
      icon: Users
    }, {
      title: "Event Feedback",
      description: "Collect instant feedback at events, conferences, and workshops using QR codes.",
      icon: Star
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$20",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 500 responses/month",
        "Basic survey templates",
        "Mobile-optimized design",
        "Basic analytics",
        "Email support"
      ]
    }, {
      name: "Professional",
      price: "$45",
      period: "/month",
      description: "Ideal for growing teams",
      features: [
        "Up to 5,000 responses/month",
        "Advanced question types",
        "Custom branding",
        "Real-time analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    }, {
      name: "Enterprise",
      price: "$95",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited responses",
        "White-label solution",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "SSO integration",
        "Custom reporting"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile-First Survey Tool | Zion Tech Group</title>
        <meta name="description" content="Create engaging, mobile-optimized surveys that adapt based on user responses. Increase completion rates by 65% with our intelligent survey platform." />
        <meta name="keywords" content="mobile survey tool, survey software, market research, customer feedback, mobile surveys" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile-First Survey Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Mobile-First Survey Tool
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Create engaging, mobile-optimized surveys that adapt based on user responses. 
                Increase completion rates by 65% and gather richer data with our intelligent survey platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="https://ziontechgroup.com/demo" 
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                <div className="text-gray-600">Higher Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-600">Faster Creation Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Question Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Data Collection</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powerful Features for Modern Surveys
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our mobile-first survey tool combines intuitive design with advanced functionality to maximize response rates and data quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-green-100">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From customer feedback to market research, our survey tool adapts to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-green-100">
                      <useCase.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Mobile Survey Tool?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of mobile-first survey design that delivers better results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-semibold text-green-600">+65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-green-600">-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Data Quality</span>
                    <span className="font-semibold text-green-600">+40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">User Engagement</span>
                    <span className="font-semibold text-green-600">+80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your survey needs. All plans include mobile optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-xl border-2 ${plan.popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} hover:shadow-lg transition-shadow`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
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
                    href="https://ziontechgroup.com/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Better Surveys?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of businesses using our mobile-first survey tool to gather better data and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-green-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )};

export default MobileSurveyTool;