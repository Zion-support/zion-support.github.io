<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    return this.props.children;
  }
}
import React from 'react';
const Pricing: React.FC = () => {;
  return (
    <div className="min-h-screen bg-gray-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">Basic</h3>;
            <p className="text-3xl font-bold mb-4">$99/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>Basic features</li>;
              <li>Email support</li>;
              <li>5GB storage</li>;
            </ul>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">;
            <h3 className="text-xl font-semibold mb-4">Pro</h3>;
            <p className="text-3xl font-bold mb-4">$199/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>All basic features</li>;
              <li>Priority support</li>;
              <li>50GB storage</li>;
            </ul>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>;
            <p className="text-3xl font-bold mb-4">$499/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>All pro features</li>;
              <li>24/7 support</li>;
              <li>Unlimited storage</li>;
            </ul>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
  );
};
;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 5 team members',
        'Basic AI features',
        'Email support',
        '5GB storage',
        'Basic analytics',
        'Standard security',
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Enhanced security',
        'API access',
        'Custom integrations',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        'Unlimited team members',
        'Premium AI features',
        '24/7 phone support',
        'Unlimited storage',
        'Custom analytics',
        'Enterprise security',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
    },
    {
      question: 'What happens if I exceed my limits?',
      answer: 'We\'ll notify you before you reach your limits and offer options to upgrade or purchase additional capacity.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onMenuClick={() => {}} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <GradientHeading text="Simple, Transparent Pricing" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or surprises.
            </p>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-8 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  !isAnnual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  isAnnual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? 'ring-2 ring-blue-500 shadow-xl scale-105'
                      : 'hover:shadow-lg'
                  } transition-all duration-200`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12} per year
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using our platform.
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];

  const servicePricing = [
    {
      service: "Micro SaaS Development",
      starting: "$5,000",
      monthly: "$2,500",
      description: "End-to-end product development with billing, auth, and analytics"
    },
    {
      service: "AI Services",
      starting: "$3,500",
      monthly: "$1,500",
      description: "LLM applications, RAG systems, and MLOps pipelines"
    },
    {
      service: "IT Services",
      starting: "$2,500",
      monthly: "$1,200",
      description: "Cloud migration, DevOps, and security solutions"
    },
    {
      service: "Blockchain Development",
      starting: "$4,000",
      monthly: "$2,000",
      description: "Smart contracts, DeFi protocols, and Web3 applications"
    },
    {
      service: "Data Analytics",
      starting: "$2,000",
      monthly: "$800",
      description: "Business intelligence, predictive modeling, and real-time analytics"
    },
    {
      service: "Cybersecurity",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Security audits, threat monitoring, and compliance management"
    },
    {
      service: "Cloud Migration",
      starting: "$4,500",
      monthly: "$2,200",
      description: "Seamless migration to AWS, Azure, or Google Cloud"
    },
    {
      service: "DevOps & SRE",
      starting: "$3,500",
      monthly: "$1,800",
      description: "CI/CD pipelines, infrastructure automation, and monitoring"
    },
    {
      service: "Mobile Development",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Native and cross-platform mobile applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for all your technology needs. Choose the plan that fits your business.
          </p>
        </div>
      </div>

  );
}
  );
};
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default Pricing;