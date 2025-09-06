import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI Solutions",
        "Cloud Storage (100GB)",
        "Email Support",
        "Basic Analytics",
        "Standard Security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced AI Solutions",
        "Cloud Storage (1TB)",
        "Priority Support",
        "Advanced Analytics",
        "Enhanced Security",
        "Custom Integrations",
        "24/7 Monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI Solutions",
        "Unlimited Cloud Storage",
        "Dedicated Support",
        "Custom Analytics",
        "Enterprise Security",
        "Custom Integrations",
        "24/7 Monitoring",
        "SLA Guarantee",
        "On-site Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Pricing Plans</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card p-8 rounded-lg border relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-foreground/80">
                    <span className="w-5 h-5 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;