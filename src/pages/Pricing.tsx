import React from "react";

// PricingCard component
const PricingCard = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  isPopular 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  isPopular: boolean; 
}) => (
  <div className={`relative bg-white p-8 rounded-lg shadow-lg ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        <span className="text-lg font-normal text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
      isPopular 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    }`}>
      Get Started
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI consultation",
        "Email support",
        "Monthly reports",
        "Basic security features"
      ]
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI solutions",
        "Priority support",
        "Weekly reports",
        "Advanced security",
        "Cloud infrastructure"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Custom AI solutions",
        "24/7 dedicated support",
        "Real-time monitoring",
        "Enterprise security",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with different levels of support and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${index === 1 ? 'ring-2 ring-blue-500 relative' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                index === 1 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
