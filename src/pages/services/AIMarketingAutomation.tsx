import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Lock,
  Sparkles,
  ShoppingCart,
  Building,
  FileText,
  Share2
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Intelligent algorithms that automatically optimize marketing campaigns for maximum ROI and engagement."
    },
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Advanced segmentation and targeting using machine learning to identify high-value prospects."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics & Insights",
      description: "Comprehensive dashboards providing actionable insights and performance metrics."
    },
    {
      icon: Zap,
      title: "Automated Workflow Management",
      description: "Streamlined marketing processes with intelligent automation and workflow optimization."
    },
    {
      icon: Users,
      title: "Personalized Customer Journeys",
      description: "Dynamic content personalization based on user behavior and preferences."
    },
    {
      icon: TrendingUp,
      title: "Predictive Performance Modeling",
      description: "AI-driven forecasting to predict campaign performance and optimize strategies."
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 300%",
    "Reduce marketing costs by 40-60%",
    "Improve customer engagement by 200%",
    "Automate 80% of repetitive marketing tasks",
    "Real-time campaign optimization",
    "Advanced ROI tracking and attribution"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic AI campaign optimization",
        "Email marketing automation",
        "Social media scheduling",
        "Basic analytics dashboard",
        "Up to 5,000 contacts",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI optimization",
        "Multi-channel automation",
        "Advanced segmentation",
        "Predictive analytics",
        "Up to 25,000 contacts",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI suite access",
        "Custom AI models",
        "Advanced attribution",
        "Dedicated account manager",
        "Unlimited contacts",
        "24/7 phone support",
        "Custom development"
      ]
    }
  ];

  const useCases = [
    {
      title: "E-commerce Marketing",
      description: "Automated product recommendations, abandoned cart recovery, and personalized shopping experiences.",
      icon: ShoppingCart
    },
    {
      title: "B2B Lead Generation",
      description: "Intelligent lead scoring, automated nurturing sequences, and account-based marketing.",
      icon: Building
    },
    {
      title: "Content Marketing",
      description: "AI-powered content optimization, automated distribution, and performance tracking.",
      icon: FileText
    },
    {
      title: "Social Media Management",
      description: "Automated posting, engagement monitoring, and trend analysis across all platforms.",
      icon: Share2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Marketing with
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automate your marketing campaigns with cutting-edge AI that learns, optimizes, and delivers results. 
              From email marketing to social media, our platform handles it all intelligently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform combines cutting-edge technology with proven strategies 
              to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Marketing Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented growth and efficiency with our intelligent marketing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform adapts to your specific needs and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-purple-500 hover:text-purple-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}