import React, { useState } from 'react';
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

export default Pricing;
