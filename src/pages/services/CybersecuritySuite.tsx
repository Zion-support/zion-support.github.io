import React from 'react';

export default function CybersecuritySuite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions with advanced threat detection, 
            vulnerability assessment, and 24/7 SOC monitoring to protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🛡️"
            title="Threat Detection"
            description="Advanced AI-powered threat detection and response"
            features={["Real-time monitoring", "Behavioral analysis", "Threat intelligence", "Automated response"]}
          />
          <FeatureCard
            icon="🔍"
            title="Vulnerability Assessment"
            description="Comprehensive security scanning and risk assessment"
            features={["Network scanning", "Penetration testing", "Code analysis", "Compliance checks"]}
          />
          <FeatureCard
            icon="📊"
            title="Compliance Management"
            description="Ensure compliance with industry standards and regulations"
            features={["GDPR compliance", "SOC 2 Type II", "ISO 27001", "HIPAA ready"]}
          />
          <FeatureCard
            icon="👥"
            title="24/7 SOC Monitoring"
            description="Round-the-clock security operations center monitoring"
            features={["Expert analysts", "Incident response", "Threat hunting", "Forensic analysis"]}
          />
          <FeatureCard
            icon="🔐"
            title="Identity & Access Management"
            description="Secure user authentication and authorization"
            features={["Multi-factor auth", "Single sign-on", "Role-based access", "Privileged access"]}
          />
          <FeatureCard
            icon="📱"
            title="Mobile Security"
            description="Comprehensive mobile device and app security"
            features={["Mobile device management", "App security", "Data encryption", "Remote wipe"]}
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
      name: "Essential",
      price: "$2,500",
      period: "/month",
      description: "Basic security for small to medium businesses",
      features: [
        "Basic threat detection",
        "Monthly vulnerability scans",
        "Email security",
        "Standard support",
        "Basic reporting"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced threat detection",
        "Weekly vulnerability scans",
        "24/7 monitoring",
        "Priority support",
        "Compliance reporting",
        "Incident response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$10,000",
      period: "/month",
      description: "Complete security solution for large organizations",
      features: [
        "Full security suite",
        "Daily vulnerability scans",
        "Dedicated SOC team",
        "24/7 dedicated support",
        "Custom compliance",
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
      <h3 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Contact our cybersecurity experts to discuss how our comprehensive security 
        suite can protect your business from evolving threats.
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