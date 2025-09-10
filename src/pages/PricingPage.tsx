import React from 'react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic website development",
        "Email support",
        "Monthly maintenance",
        "SSL certificate",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced website development",
        "Priority support",
        "Weekly maintenance",
        "Advanced security",
        "Advanced analytics",
        "Mobile app development"
      ]
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Custom development",
        "24/7 support",
        "Daily maintenance",
        "Enterprise security",
        "Custom analytics",
        "Full-stack development",
        "DevOps services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;