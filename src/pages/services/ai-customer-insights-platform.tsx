import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Target, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Star,
  Award,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  PieChart,
  LineChart,
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  FileText,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function AICustomerInsightsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and value using advanced machine learning algorithms.",
      benefits: ["Increase conversion rates by 35%", "Reduce customer acquisition costs by 40%", "Improve customer lifetime value by 50%"]
    },
    {
      icon: Eye,
      title: "Real-Time Customer Journey Mapping",
      description: "Track and visualize customer interactions across all touchpoints with intelligent journey analytics.",
      benefits: ["Identify friction points instantly", "Optimize customer experience", "Increase retention by 45%"]
    },
    {
      icon: BarChart3,
      title: "Predictive Customer Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value with 95% accuracy using advanced AI models.",
      benefits: ["Predict churn 30 days in advance", "Increase revenue by 25%", "Reduce customer service costs by 30%"]
    },
    {
      icon: MessageSquare,
      title: "Sentiment Analysis & Feedback Intelligence",
      description: "Analyze customer feedback, reviews, and social media mentions to understand sentiment and trends.",
      benefits: ["Monitor brand sentiment in real-time", "Identify improvement opportunities", "Enhance customer satisfaction"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customer profiles",
        "Basic AI segmentation",
        "Standard analytics dashboard",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced AI insights",
        "Real-time analytics",
        "Priority support",
        "Custom integrations",
        "Weekly reports",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations",
      features: [
        "Unlimited customer profiles",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom reporting",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      challenge: "High cart abandonment rates",
      solution: "AI-powered cart abandonment prediction and personalized recovery campaigns",
      result: "35% reduction in cart abandonment, 40% increase in recovery revenue"
    },
    {
      industry: "SaaS",
      challenge: "Customer churn and low engagement",
      solution: "Predictive churn modeling with automated retention campaigns",
      result: "50% reduction in churn rate, 60% improvement in customer engagement"
    },
    {
      industry: "Financial Services",
      challenge: "Complex customer behavior patterns",
      solution: "Advanced segmentation for personalized financial product recommendations",
      result: "45% increase in cross-sell success, 30% improvement in customer satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Customer Insights Platform - Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with our AI-powered customer analytics platform. Increase revenue by 25-50% with predictive analytics and intelligent segmentation." />
        <meta name="keywords" content="AI customer insights, customer analytics, predictive analytics, customer segmentation, churn prediction, customer journey mapping" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-insights-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Brain className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Customer Insights Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform customer data into actionable insights with advanced AI analytics. 
              Increase revenue by 25-50% with predictive customer intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Customer Insights Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI to understand your customers like never before
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25-50% Revenue Increase</h3>
              <p className="text-gray-600">Proven results across industries with AI-driven customer insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">Get instant insights and make data-driven decisions immediately</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with GDPR and SOC2 compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Connect with 200+ tools and platforms in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced machine learning capabilities that transform your customer data into competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across industries are transforming with AI customer insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.industry}</h3>
                  <p className="text-gray-600 mb-4"><strong>Challenge:</strong> {useCase.challenge}</p>
                  <p className="text-gray-600 mb-4"><strong>Solution:</strong> {useCase.solution}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium"><strong>Result:</strong> {useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Customer Insights?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already using AI to understand their customers better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-purple-600">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-purple-600">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}