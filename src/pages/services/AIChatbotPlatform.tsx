import React from 'react';

export default function AIChatbotPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Chatbot Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build intelligent chatbots with natural language processing capabilities. 
            Deploy across multiple channels and provide exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🧠"
            title="Natural Language Processing"
            description="Advanced NLP capabilities for human-like conversations"
            features={["Intent recognition", "Entity extraction", "Sentiment analysis", "Context awareness"]}
          />
          <FeatureCard
            icon="📱"
            title="Multi-Channel Deployment"
            description="Deploy your chatbot across all customer touchpoints"
            features={["Website chat", "Mobile apps", "Social media", "Voice assistants"]}
          />
          <FeatureCard
            icon="🎨"
            title="Visual Builder"
            description="No-code chatbot builder with drag-and-drop interface"
            features={["Flow designer", "Template library", "A/B testing", "Custom branding"]}
          />
          <FeatureCard
            icon="🤖"
            title="Machine Learning"
            description="AI that learns and improves from every conversation"
            features={["Continuous learning", "Performance analytics", "Auto-optimization", "Smart routing"]}
          />
          <FeatureCard
            icon="🔗"
            title="Easy Integration"
            description="Seamlessly integrate with your existing systems"
            features={["CRM integration", "API connections", "Webhook support", "Custom plugins"]}
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Insights"
            description="Comprehensive analytics to optimize chatbot performance"
            features={["Conversation analytics", "User satisfaction", "Performance metrics", "Custom reports"]}
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
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses starting with chatbots",
      features: [
        "Up to 1,000 conversations/month",
        "Basic NLP",
        "Website integration",
        "Email support",
        "Standard templates"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced NLP",
        "Multi-channel deployment",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited conversations",
        "Full AI suite",
        "White-label solution",
        "24/7 dedicated support",
        "Custom development",
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
      <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Contact our AI experts to discuss how our chatbot platform can 
        enhance your customer experience and automate your support.
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