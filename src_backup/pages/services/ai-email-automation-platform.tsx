import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Bot, 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Brain,
  MessageSquare,
  Target,
  DollarSign,
  Globe,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  ExternalLink
} from 'lucide-react';

const AIEmailAutomationPlatform = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Email Analysis",
      description: "Advanced AI analyzes incoming emails, categorizes them, and generates intelligent responses with 95% accuracy.",
      benefits: ["95% response accuracy", "Instant categorization", "Smart priority detection", "Context-aware responses"]
    },
    {
      icon: Zap,
      title: "Automated Response Generation",
      description: "Generate personalized, professional email responses automatically based on email content and context.",
      benefits: ["Personalized responses", "Brand consistency", "Multi-language support", "Tone adaptation"]
    },
    {
      icon: BarChart3,
      title: "Email Analytics Dashboard",
      description: "Comprehensive analytics to track email performance, response times, and customer satisfaction metrics.",
      benefits: ["Real-time analytics", "Performance insights", "Customer satisfaction tracking", "ROI measurement"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless team collaboration with shared inboxes, assignment features, and collaborative response editing.",
      benefits: ["Shared inboxes", "Team assignments", "Collaborative editing", "Workflow management"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and audit trails for all communications.",
      benefits: ["GDPR compliant", "End-to-end encryption", "Audit trails", "Data protection"]
    },
    {
      icon: Brain,
      title: "Machine Learning Optimization",
      description: "Continuous learning from interactions to improve response quality and customer satisfaction over time.",
      benefits: ["Continuous learning", "Quality improvement", "Customer satisfaction", "Adaptive responses"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI responses",
        "Email analytics",
        "Standard support",
        "5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI responses",
        "Advanced analytics",
        "Priority support",
        "25 team members",
        "Custom templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Premium AI responses",
        "Custom analytics",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom integrations",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description: "Automate 80% of customer support emails with intelligent responses and smart routing.",
      icon: MessageSquare,
      results: ["80% automation rate", "50% faster response times", "95% customer satisfaction"]
    },
    {
      title: "Sales Lead Management",
      description: "Automatically qualify and respond to sales inquiries with personalized follow-ups.",
      icon: Target,
      results: ["3x faster lead response", "40% higher conversion", "Automated follow-ups"]
    },
    {
      title: "Internal Communication",
      description: "Streamline internal communications with smart routing and automated responses.",
      icon: Users,
      results: ["60% time savings", "Improved efficiency", "Better organization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>AI Email Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email automation platform that transforms your email management with intelligent responses, analytics, and team collaboration." />
        <meta name="keywords" content="AI email automation, email management, customer support, sales automation, email analytics" />
        <link rel="canonical" href={`${contactInfo.website}/services/ai-email-automation-platform`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              AI Email Automation Platform
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Revolutionize your email management with AI-powered automation that responds intelligently, 
              analyzes performance, and scales your communication efficiency by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Email Platform?</h2>
          <p className="text-xl text-gray-600">Transform your email management with cutting-edge AI technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
              <p className="text-blue-800 font-semibold">
                💰 Market Price: $399-2,999/month | Save up to 50% with Zion Tech Group
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Inquiry about ${plan.name} Plan`}
                    className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-600">See how businesses are transforming with our AI email platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.results.map((result, idx) => (
                  <div key={idx} className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI email automation platform to scale their communication efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-100">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 <a href={contactInfo.website} className="hover:text-white underline">{contactInfo.website}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEmailAutomationPlatform;