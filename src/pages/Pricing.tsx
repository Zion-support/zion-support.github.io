<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Micro SaaS MVP',
      price: '$8k - $20k',
      period: '2-4 weeks',
      description: 'Perfect for validating your micro SaaS idea',
      features: [
        'Core features only',
        'Basic Stripe integration',
        'Simple analytics',
        'Email support',
        '2 weeks maintenance'
      ],
      popular: false
    },
    {
      name: 'AI Discovery',
      price: '$5k - $12k',
      period: '2-3 weeks',
      description: 'Explore AI possibilities for your business',
      features: [
        'Use case design',
        'Technology selection',
        'Implementation roadmap',
        'Proof of concept',
        'Consultation included'
      ],
      popular: true
    },
    {
      name: 'IT Infrastructure',
      price: '$10k - $30k',
      period: '4-8 weeks',
      description: 'Complete IT infrastructure setup',
      features: [
        'Cloud migration',
        'DevOps setup',
        'Security hardening',
        'Monitoring & alerting',
        '3 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-gray-300 mb-6">
            Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </Link>
=======
import React from "react";

// PricingCard component;
const PricingCard = ({}
  name, 
  price, 
  period, 
  description, 
  features, 
  isPopular;
}: {}
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  isPopular: boolean; 
}) => (
  <div className={`relative bg-white p-8 rounded-lg shadow-lg ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
    {isPopular && ("
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular;
        </span>
      </div>
    )}"
    <div className="text-center mb-6">"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}"
        <span className="text-lg font-normal text-gray-600">/{period}</span>
      </div>"
      <p className="text-gray-600">{description}</p>
    </div>"
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => ("
        <li key={index} className="flex items-center">"
          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>"
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>`
    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${}
      isPopular '
        ? 'bg-blue-600 text-white hover:bg-blue-700' '
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'`
    }`}>
      Get Started;
    </button>
  </div>
);

const Pricing: React.FC = () => {}
  return ("
    <div className="min-h-screen bg-white py-20">"
      <div className="container mx-auto px-4">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with flexible options.
          </p>
        </div>
        "
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard"
            name="Starter""
            price="$2,500""
            period="month""
            description="Perfect for small businesses getting started with AI and automation"
            features={["
              "Basic AI services","
              "Micro SaaS development","
              "IT support","
              "Email support","
              "Monthly reports"
            ]}
            isPopular={false}
          />
          <PricingCard"
            name="Professional""
            price="$7,500""
            period="month""
            description="Ideal for growing businesses that need advanced AI and automation"
            features={["
              "Advanced AI services","
              "Custom micro SaaS","
              "Full IT services","
              "Priority support","
              "Weekly reports","
              "API access"
            ]}
            isPopular={true}
          />
          <PricingCard"
            name="Enterprise""
            price="$25,000""
            period="month""
            description="Complete solution for large enterprises with complex needs"
            features={["
              "Full AI suite","
              "White-label solutions","
              "Dedicated team","
              "24/7 support","
              "Custom integrations","
              "SLA guarantee"
            ]}
            isPopular={false}
          />
        </div>
"
        <div className="text-center">"
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>"
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your specific needs and get a custom quote.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a"
              href="tel:+13024640950""
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950;
            </a>
            <a"
              href="mailto:kleber@ziontechgroup.com""
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us;
            </a>
          </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:bg-white/20 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-white/20'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-3xl font-bold text-white mb-2">{price}</div>
      <div className="text-gray-300 mb-4">{period}</div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default Pricing;
=======
export default Pricing;
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
