import React from 'react';

export default function AIPredictiveAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Predictive Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage machine learning for accurate forecasting and strategic decision-making. 
            Transform your data into predictive insights that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="📈"
            title="Demand Forecasting"
            description="Predict future demand with advanced machine learning models"
            features={["Time series analysis", "Seasonal adjustments", "External factor modeling", "Confidence intervals"]}
          />
          <FeatureCard
            icon="⚠️"
            title="Risk Modeling"
            description="Identify and quantify business risks before they impact operations"
            features={["Credit risk assessment", "Market volatility", "Operational risks", "Scenario analysis"]}
          />
          <FeatureCard
            icon="🎯"
            title="Resource Optimization"
            description="Optimize resource allocation for maximum efficiency and ROI"
            features={["Workforce planning", "Inventory optimization", "Budget allocation", "Capacity planning"]}
          />
          <FeatureCard
            icon="📊"
            title="Market Trend Analysis"
            description="Analyze market trends and predict future movements"
            features={["Price forecasting", "Market sentiment", "Competitive analysis", "Growth projections"]}
          />
          <FeatureCard
            icon="🔮"
            title="Customer Behavior Prediction"
            description="Predict customer actions and preferences"
            features={["Churn prediction", "Purchase likelihood", "Lifetime value", "Engagement patterns"]}
          />
          <FeatureCard
            icon="⚡"
            title="Real-time Predictions"
            description="Get instant predictions as data changes"
            features={["Stream processing", "Live dashboards", "Automated alerts", "Dynamic updates"]}
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
      name: "Analyst",
      price: "$149",
      period: "/month",
      description: "Essential predictive analytics for small teams",
      features: [
        "Up to 5 data sources",
        "Basic ML models",
        "Monthly reports",
        "Email support",
        "Standard dashboards"
      ]
    },
    {
      name: "Data Scientist",
      price: "$299",
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Up to 20 data sources",
        "Advanced ML models",
        "Real-time predictions",
        "Priority support",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete predictive analytics platform",
      features: [
        "Unlimited data sources",
        "Custom ML models",
        "Real-time streaming",
        "24/7 dedicated support",
        "White-label solution",
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
      <h3 className="text-3xl font-bold text-white mb-4">Ready to Predict the Future?</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Contact our data science experts to discuss how AI predictive analytics 
        can transform your business decision-making process.
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