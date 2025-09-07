import React from 'react';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
<<<<<<< HEAD
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
=======
      name: 'Basic',
      price: '$29',
      frequency: '/month',
      features: [
        '5 AI Models',
        '1000 API Calls',
        'Basic Analytics',
        'Email Support',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
      ],
      buttonText: 'Start Free Trial',
      highlight: false,
    },
    {
<<<<<<< HEAD
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
=======
      name: 'Pro',
      price: '$99',
      frequency: '/month',
      features: [
        '20 AI Models',
        '10000 API Calls',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
      ],
      buttonText: 'Get Started',
      highlight: true,
    },
    {
<<<<<<< HEAD
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
=======
      name: 'Enterprise',
      price: 'Custom',
      frequency: '',
      features: [
        'Unlimited AI Models',
        'Unlimited API Calls',
        'Dedicated Support',
        'On-premise Deployment',
        'SLA Guarantee',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
      ],
      buttonText: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Flexible Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Choose the plan that best fits your business needs, from startups to large enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-lg shadow-lg p-8 border ${
                tier.highlight ? 'border-blue-500 transform scale-105' : 'border-slate-700'
              } transition-all duration-300 hover:shadow-2xl`}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">{tier.name}</h2>
              <p className="text-5xl font-extrabold text-blue-500 mb-6">
                {tier.price}
                {tier.frequency && <span className="text-xl text-gray-400">{tier.frequency}</span>}
              </p>
              <ul className="text-gray-300 text-lg mb-8 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
                    {feature}
                  </li>
                ))}
              </ul>
<<<<<<< HEAD
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
=======
              <Button variant={tier.highlight ? 'primary' : 'outline'} size="large" className="w-full">
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            For unique requirements or large-scale deployments, our enterprise solutions are tailored to your specific needs.
          </p>
          <Button variant="primary" size="large">
            Contact Sales
          </Button>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
        </div>
      </div>
    </div>
  );
};

export default Pricing;