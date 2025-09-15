import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI Services",
        "Email Support",
        "Standard Security",
        "5GB Storage",
        "Basic Analytics",
        "Monthly Reports"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Services",
        "Priority Support",
        "Enhanced Security",
        "50GB Storage",
        "Advanced Analytics",
        "Weekly Reports",
        "Custom Integrations",
        "API Access"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Full AI Suite",
        "24/7 Dedicated Support",
        "Enterprise Security",
        "Unlimited Storage",
        "Real-time Analytics",
        "Daily Reports",
        "Custom Development",
        "Full API Access",
        "SLA Guarantee",
        "Dedicated Account Manager"
      ],
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

  const microSaaSProducts = [
    {
      name: "AI Customer Success Platform",
      price: "$99",
      period: "per month",
      description: "Automate customer success workflows",
      features: ["Customer Health Scoring", "Automated Workflows", "Predictive Analytics"],
      popular: true
    },
    {
      name: "Smart CRM Intelligence Suite",
      price: "$149",
      period: "per month",
      description: "Enhance your CRM with AI insights",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups"],
      popular: false
    },
    {
      name: "Intelligent Content Automation",
      price: "$199",
      period: "per month",
      description: "Create and optimize content at scale",
      features: ["Content Generation", "SEO Optimization", "Multi-channel Distribution"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
          </p>
        </div>
      </div>

      {/* Main Pricing Plans */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 btn-hover flex items-center justify-center`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Micro SaaS Products */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Micro SaaS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use SaaS solutions that can be deployed quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 ${
                  product.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-gray-300 ml-2">{product.period}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 btn-hover flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our pricing and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I change my plan at any time?
            </h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is there a free trial available?
            </h3>
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do you offer custom pricing for large organizations?
            </h3>
            <p className="text-gray-600">
              Yes, we offer custom pricing and solutions for enterprise customers. Contact us to discuss your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your plan and start transforming your business today. No setup fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 btn-hover"
            >
              Start Free Trial
              <Zap className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;