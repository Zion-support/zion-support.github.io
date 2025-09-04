import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Database,
  PieChart,
  LineChart
} from 'lucide-react';

export default function PredictiveAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Advanced ML algorithms for accurate predictions"
    },
    {
      icon: Database,
      title: "Real-time Data Processing",
      description: "Process millions of data points in real-time"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Beautiful, customizable analytics dashboards"
    }
  ];

  const benefits = [
    "Increase revenue by 25-40% through better forecasting",
    "Reduce operational costs by 30% with predictive maintenance",
    "Improve customer retention by 45% with churn prediction",
    "Optimize inventory management with demand forecasting",
    "Enhance decision-making with data-driven insights"
  ];

  const useCases = [
    {
      title: "Sales Forecasting",
      description: "Predict future sales with 95% accuracy using historical data and market trends",
      icon: TrendingUp
    },
    {
      title: "Customer Churn Prediction",
      description: "Identify customers likely to churn and take proactive retention measures",
      icon: Users
    },
    {
      title: "Demand Planning",
      description: "Optimize inventory and supply chain with accurate demand predictions",
      icon: Target
    },
    {
      title: "Risk Assessment",
      description: "Evaluate business risks and opportunities with predictive modeling",
      icon: Shield
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499/month",
      features: ["Up to 1M data points", "Basic ML models", "Email support", "Standard dashboards"],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299/month",
      features: ["Up to 10M data points", "Advanced ML models", "Priority support", "Custom dashboards", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: ["Unlimited data points", "Custom ML models", "Dedicated support", "White-label solution", "On-premise deployment"],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Predictive Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced predictive analytics platform with ML models. Increase revenue by 25-40% with accurate forecasting and data-driven insights." />
        <meta name="keywords" content="predictive analytics, machine learning, forecasting, business intelligence, data analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Predictive Analytics Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Transform your business with advanced predictive analytics and machine learning. 
                Increase revenue by 25-40% with accurate forecasting and data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge machine learning and data science technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how predictive analytics transforms different business functions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                  <useCase.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-700">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with data-driven decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">25-40%</div>
                  <div className="text-lg text-gray-700 mb-4">Revenue Increase</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-lg text-gray-700 mb-4">Cost Reduction</div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-lg text-gray-700">Better Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that scales with your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${plan.popular ? 'border-green-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Predict Your Success?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join industry leaders using our predictive analytics platform to make smarter business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-green-100">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}