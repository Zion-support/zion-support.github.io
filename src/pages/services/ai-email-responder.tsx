import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  MessageSquare,
  Filter,
  Target,
  Smartphone
} from 'lucide-react';

const AIEmailResponder: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Response Generation",
      description: "AI-powered email responses that understand context and tone, providing personalized and professional replies automatically."
    }, {
      icon: Filter,
      title: "Smart Email Prioritization",
      description: "Automatically categorize and prioritize emails based on importance, sender, and content analysis."
    }, {
      icon: MessageSquare,
      title: "Multi-Language Support",
      description: "Respond in multiple languages with perfect grammar and cultural context awareness."
    }, {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with end-to-end encryption and GDPR compliance."
    }, {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed analytics on email patterns, response times, and communication effectiveness."
    }, {
      icon: Target,
      title: "Custom Templates",
      description: "Create and manage custom response templates for different scenarios and industries."
    }
  ];

  const benefits = [
    "Reduce email response time by 80%",
    "Improve customer satisfaction scores",
    "Handle 24/7 email communication",
    "Eliminate repetitive email tasks",
    "Scale customer support operations",
    "Maintain consistent brand voice"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$15",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI responses",
        "Email prioritization",
        "Standard templates",
        "Email support"
      ]
    }, {
      name: "Professional",
      price: "$35",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI responses",
        "Custom templates",
        "Analytics dashboard",
        "Priority support",
        "Multi-language support"
      ],
      popular: true
    }, {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI training",
        "Advanced analytics",
        "API integration",
        "Dedicated support",
        "Custom branding",
        "SSO integration"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Email Responder | Zion Tech Group</title>
        <meta name="description" content="Automate email responses with AI-powered intelligence. Reduce response time by 80% and improve customer satisfaction with our smart email responder." />
        <meta name="keywords" content="AI email responder, email automation, customer support, AI assistant, email management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Mail className="w-4 h-4 mr-2" />
                AI-Powered Email Automation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Email Responder
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your email communication with intelligent automation. Our AI-powered email responder understands context, 
                prioritizes messages, and provides instant, professional responses 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-gray-600">Faster Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Languages Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powerful Features for Modern Communication
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI email responder combines cutting-edge technology with intuitive design to revolutionize your email management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our AI Email Responder?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of intelligent email automation that scales with your business needs.
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
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-green-600">-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-green-600">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Support Efficiency</span>
                    <span className="font-semibold text-green-600">+300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-semibold text-green-600">-60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-xl border-2 ${plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} hover:shadow-lg transition-shadow`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI email responder to improve efficiency and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>

  )};

export default AIEmailResponder;