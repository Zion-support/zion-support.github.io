import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  Award,
  Target,
  Brain,
  Zap,
  Shield,
  Eye,
  Download,
  Upload,
  Settings,
  Bell,
  Search,
  Filter,
  Calendar,
  Headphones,
  Bot,
  Languages,
  Heart,
  ThumbsUp,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function AICustomerSupportAutomation() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that understand context and provide accurate responses 24/7",
      benefits: ["Natural language processing", "Context awareness", "Multi-turn conversations", "Learning capabilities"]
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Support customers in 50+ languages with real-time translation and localization",
      benefits: ["50+ languages", "Real-time translation", "Cultural adaptation", "Regional preferences"]
    },
    {
      icon: Heart,
      title: "Sentiment Analysis",
      description: "Monitor customer emotions and automatically escalate urgent or frustrated customers",
      benefits: ["Emotion detection", "Automatic escalation", "Priority routing", "Mood tracking"]
    },
    {
      icon: Users,
      title: "Escalation Management",
      description: "Seamlessly transfer complex issues to human agents with full context",
      benefits: ["Smart routing", "Context preservation", "Agent handoff", "Queue management"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$499/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic chatbot",
        "5 languages",
        "Email support",
        "Basic analytics",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 5,000 conversations/month",
        "Advanced chatbot",
        "25 languages",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Sentiment analysis",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Premium chatbot",
        "50+ languages",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label options",
        "API access",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Inquiries resolved instantly",
      icon: Zap
    },
    {
      metric: "60%",
      description: "Reduction in support costs",
      icon: TrendingUp
    },
    {
      metric: "24/7",
      description: "Customer availability",
      icon: Clock
    },
    {
      metric: "95%",
      description: "Customer satisfaction",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Customer Support Automation - Zion Tech Group</title>
        <meta name="description" content="Resolve 80% of customer inquiries instantly with intelligent chatbots and automated workflows. Reduce support costs by 60% and improve customer satisfaction." />
        <meta name="keywords" content="customer support automation, AI chatbots, customer service, support automation, chatbot platform" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-support-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-20 text-center text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            AI-Powered Solution
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Customer Support Automation</h1>
          <p className="text-orange-100 text-xl max-w-3xl mx-auto mb-8">
            Resolve 80% of customer inquiries instantly with intelligent chatbots and automated workflows. 
            Reduce support costs by 60% and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Start Free Trial
            </Link>
            <Link href="#demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Customer Support</h2>
            <p className="text-gray-600 text-lg">See the measurable impact on your support operations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-gray-600 text-lg">Everything you need to automate customer support</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your support needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white border rounded-xl p-6 shadow-lg ${tier.popular ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-200'}`}>
                {tier.popular && (
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-orange-600 mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Support?</h2>
            <p className="text-gray-300 text-lg">Contact our automation experts today</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-orange-400 mr-3" />
                  <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">https://ziontechgroup.com</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Free Trial</h3>
              <p className="text-gray-600 mb-4">Get started with a 14-day free trial. No credit card required.</p>
              <Link href="https://ziontechgroup.com/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}