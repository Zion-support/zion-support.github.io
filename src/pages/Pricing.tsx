import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features 
            with transparent pricing and no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-card p-8 rounded-xl border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
              <p className="text-foreground/70 mb-4">Perfect for small businesses</p>
              <div className="text-4xl font-bold text-primary mb-2">$99</div>
              <div className="text-foreground/70">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Up to 5 team members</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Basic AI features</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Email support</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">5GB storage</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-card p-8 rounded-xl border border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-foreground/70 mb-4">Ideal for growing businesses</p>
              <div className="text-4xl font-bold text-primary mb-2">$199</div>
              <div className="text-foreground/70">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Up to 25 team members</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Advanced AI features</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Priority support</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">50GB storage</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">API access</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card p-8 rounded-xl border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-foreground/70 mb-4">For large organizations</p>
              <div className="text-4xl font-bold text-primary mb-2">$499</div>
              <div className="text-foreground/70">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Premium AI features</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">24/7 phone support</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Unlimited storage</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span className="text-foreground/80">Dedicated account manager</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-primary/5 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Can I change plans anytime?
              </h3>
              <p className="text-foreground/70">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-foreground/70">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Is there a free trial?
              </h3>
              <p className="text-foreground/70">
                Yes, we offer a 14-day free trial for all plans. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What happens if I exceed my limits?
              </h3>
              <p className="text-foreground/70">
                We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;