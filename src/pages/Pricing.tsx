import React from "react";
import { Link } from "react-router-dom";
import { Check, Star, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$29",
      period: "per month",
      features: [
        "Basic AI features",
        "Email support",
        "5 projects",
        "1GB storage",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$99",
      period: "per month",
      features: [
        "Advanced AI features",
        "Priority support",
        "Unlimited projects",
        "10GB storage",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$299",
      period: "per month",
      features: [
        "All AI features",
        "24/7 support",
        "Unlimited everything",
        "Custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Pricing - Zion Website</title>
        <meta name="description" content="Choose the perfect plan for your AI needs. Flexible pricing options for every business size." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your AI needs. Flexible pricing options for every business size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.popular ? (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started
                  </>
                ) : (
                  'Choose Plan'
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
