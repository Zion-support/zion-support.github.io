import React from 'react';

export default function AICustomerInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Insights Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform customer data into actionable insights with our AI-powered analytics platform. 
            Real-time sentiment analysis, predictive churn modeling, and automated customer journey mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🧠"
            title="Predictive Analytics"
            description="AI-powered customer behavior prediction and churn prevention"
            features={["Churn prediction models", "Lifetime value forecasting", "Purchase propensity scoring", "Risk assessment algorithms"]}
          />
          <FeatureCard
            icon="💬"
            title="Sentiment Analysis"
            description="Real-time analysis of customer feedback across all channels"
            features={["Social media monitoring", "Review sentiment tracking", "Support ticket analysis", "Brand mention alerts"]}
          />
          <FeatureCard
            icon="📊"
            title="Customer Journey Mapping"
            description="Automated visualization of customer touchpoints and interactions"
            features={["Journey visualization", "Touchpoint analysis", "Conversion optimization", "Funnel analytics"]}
          />
          <FeatureCard
            icon="🎯"
            title="Personalization Engine"
            description="AI-driven personalization for marketing and product recommendations"
            features={["Dynamic content", "Product recommendations", "Email personalization", "A/B testing automation"]}
          />
          <FeatureCard
            icon="📈"
            title="Real-time Dashboards"
            description="Live customer insights and performance metrics"
            features={["Live dashboards", "Custom reports", "Alert systems", "Mobile app"]}
          />
          <FeatureCard
            icon="🔍"
            title="Advanced Segmentation"
            description="Intelligent customer segmentation and targeting"
            features={["Behavioral segmentation", "Demographic analysis", "Cohort analysis", "RFM modeling"]}
          />
        </div>

        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with AI insights",
      features: [
        "Up to 10,000 customer records",
        "Basic sentiment analysis",
        "Standard dashboards",
        "Email support",
        "Monthly reports"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100,000 customer records",
        "Advanced predictive analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time alerts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Complete solution for large enterprises",
      features: [
        "Unlimited customer records",
        "Full AI suite",
        "White-label dashboards",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white/10 backdrop-blur-sm border rounded-xl p-8 ${
              plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-300 ml-1">{plan.period}</span>
            </div>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Insights?</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Contact our AI experts to discuss how our platform can help your business 
        make data-driven decisions and improve customer satisfaction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-gray-300">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}