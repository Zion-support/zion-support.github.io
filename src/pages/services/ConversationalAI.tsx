import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Video } from 'lucide-react';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Video } from 'lucide-react';'
import Header from '../../components/Header';'
import Footer from '../../components/Footer';'

const ConversationalAI: React.FC = () => {
  const features: [
    {
      icon: Brain,
      title: "Advanced NLP & NLU",
      description: "State-of-the-art natural language processing that understands context, intent, and sentiment with 96% accuracy.",
      title: "Advanced NLP & NLU",","
      description: "State-of-the-art natural language processing that understands context, intent, and sentiment with 96% accuracy.",","
      benefit: "96% conversation understanding","
    },
    {
      icon: MessageCircle,
      title: "Multi-Modal Conversations",
      description: "Support for text, voice, and video conversations with seamless transitions between modalities.",
      title: "Multi-Modal Conversations",","
      description: "Support for text, voice, and video conversations with seamless transitions between modalities.",","
      benefit: "Unified conversation experience","
    },
    {
      icon: Languages,
      title: "150+ Language Support",
      description: "Real-time translation and multilingual support with cultural context awareness.",
      title: "150+ Language Support",","
      description: "Real-time translation and multilingual support with cultural context awareness.",","
      benefit: "Global reach capability","
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Sub-second response times with intelligent context retention across conversation threads.",
      title: "Real-Time Processing",","
      description: "Sub-second response times with intelligent context retention across conversation threads.",","
      benefit: "Instant response delivery","
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, GDPR compliance, and advanced privacy protection for sensitive conversations.",
      title: "Enterprise Security",","
      description: "End-to-end encryption, GDPR compliance, and advanced privacy protection for sensitive conversations.",","
      benefit: "100% privacy compliance","
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamless handoff between AI and human agents with full context preservation.",
      title: "Human-AI Collaboration",","
      description: "Seamless handoff between AI and human agents with full context preservation.",","
      benefit: "Perfect escalation flow","
    }
  ];

  const pricing: [
    {
      name: "Starter
      price: "$399
      period: "/month
      description: "Perfect for small businesses wanting to add conversational AI capabilities
      features: [
        "Up to 1,000 conversations/month",";"
        "Basic NLP capabilities",";"
        "Text & voice support",";"
        "Email support",";"
        "Basic analytics",";"
        "Standard integrations",";"
        "5 language support",";"
        "Basic customization"
      ]
      popular: false,
    },
    {
      name: "Professional
      price: "$1,299
      period: "/month
      description: "Ideal for growing companies with complex conversational needs
      features: [
        "Up to 10,000 conversations/month",";"
        "Advanced NLP & NLU",";"
        "Text, voice & video support",";"
        "Priority support",";"
        "Advanced analytics & insights",";"
        "Advanced integrations",";"
        "25 language support",";"
        "Custom model training",";"
        "API access",";"
        "A/B testing",";"
        "Sentiment analysis"
      ]
      popular: true,
    },
    {
      name: "Enterprise
      price: "$4,999
      period: "/month
      description: "Complete solution for large organizations with enterprise requirements
      features: [
        "Unlimited conversations",";"
        "Enterprise NLP & NLU",";"
        "Full multi-modal support",";"
        "Dedicated AI specialist",";"
        "Enterprise analytics suite",";"
        "Unlimited integrations",";"
        "150+ language support",";"
        "Custom AI development",";"
        "White-label solutions",";"
        "Advanced security features",";"
        "SLA guarantee",";"
        "On-premise deployment",";"
        "Training & consultation"
      ]
      popular: false,
      name: "Starter",","
      price: "$399",","
      period: "/month",","
      description: "Perfect for small businesses wanting to add conversational AI capabilities",","
      features: [
        "Up to 1,000 conversations/month","
        "Basic NLP capabilities","
        "Text & voice support","
        "Email support","
        "Basic analytics","
        "Standard integrations","
        "5 language support","
        "Basic customization"
      ]
      popular: false,
    },
    {
      name: "Professional",","
      price: "$1,299",","
      period: "/month",","
      description: "Ideal for growing companies with complex conversational needs",","
      features: [
        "Up to 10,000 conversations/month","
        "Advanced NLP & NLU","
        "Text, voice & video support","
        "Priority support","
        "Advanced analytics & insights","
        "Advanced integrations","
        "25 language support","
        "Custom model training","
        "API access","
        "A/B testing","
        "Sentiment analysis"
      ]
      popular: true,
    },
    {
      name: "Enterprise",","
      price: "$4,999",","
      period: "/month",","
      description: "Complete solution for large organizations with enterprise requirements",","
      features: [
        "Unlimited conversations","
        "Enterprise NLP & NLU","
        "Full multi-modal support","
        "Dedicated AI specialist","
        "Enterprise analytics suite","
        "Unlimited integrations","
        "150+ language support","
        "Custom AI development","
        "White-label solutions","
        "Advanced security features","
        "SLA guarantee","
        "On-premise deployment","
        "Training & consultation"
      ]
      popular: false,
    }
  ];

  const testimonials: [
    {
      name: "Amanda Foster",
      role: "VP Customer Experience, E-Commerce Giant",
      content: "Conversational AI reduced our customer service response time from 4 hours to 30 seconds. Customer satisfaction increased by 45% while reducing support costs by 60%.",
      name: "Amanda Foster",","
      role: "VP Customer Experience, E-Commerce Giant",","
      content: "Conversational AI reduced our customer service response time from 4 hours to 30 seconds. Customer satisfaction increased by 45% while reducing support costs by 60%.",","
      rating: 5,
      company: "E-Commerce Giant","
    },
    {
      name: "Dr. Robert Chen",
      role: "Head of Digital Health, Medical Systems",
      content: "The multi-modal conversation capabilities enabled us to provide personalized patient support 24/7. Patient engagement improved by 70% with better health outcomes.",
      name: "Dr. Robert Chen",","
      role: "Head of Digital Health, Medical Systems",","
      content: "The multi-modal conversation capabilities enabled us to provide personalized patient support 24/7. Patient engagement improved by 70% with better health outcomes.",","
      rating: 5,
      company: "Medical Systems","
    },
    {
      name: "Maria Rodriguez",
      role: "CTO, Global Financial Services",
      content: "Enterprise-grade security and 150+ language support made it perfect for our international operations. Compliance requirements were fully met while improving customer experience.",
      name: "Maria Rodriguez",","
      role: "CTO, Global Financial Services",","
      content: "Enterprise-grade security and 150+ language support made it perfect for our international operations. Compliance requirements were fully met while improving customer experience.",","
      rating: 5,
      company: "Global Financial Services","
    }
  ];

  const useCases: [
    {
      title: "Customer Support",
      icon: Users,
      description: "24/7 intelligent customer service with instant responses and seamless human handoff.",
      benefits: ["60% cost reduction", "45% faster resolution", "95% customer satisfaction"]","
    },
    {
      title: "Sales & Lead Generation",
      icon: Zap,
      description: "Intelligent sales conversations that qualify leads and nurture prospects automatically.",
      benefits: ["35% increase in conversions", "50% more qualified leads", "40% sales team efficiency"]","
    },
    {
      title: "Healthcare Support",
      icon: MessageCircle,
      description: "Patient engagement, appointment scheduling, and health information delivery.",
      benefits: ["70% patient engagement", "30% appointment compliance", "25% readmission reduction"]","
    },
    {
      title: "Education & Training",
      icon: Brain,
      description: "Personalized learning assistants and interactive training experiences.",
      benefits: ["50% learning retention", "40% course completion", "60% student satisfaction"]
      title: "Customer Support",","
      icon: Users,
      description: "24/7 intelligent customer service with instant responses and seamless human handoff.",","
      benefits: ["60% cost reduction", "45% faster resolution", "95% customer satisfaction"]","
    },
    {
      title: "Sales & Lead Generation",","
      icon: Zap,
      description: "Intelligent sales conversations that qualify leads and nurture prospects automatically.",","
      benefits: ["35% increase in conversions", "50% more qualified leads", "40% sales team efficiency"]","
    },
    {
      title: "Healthcare Support",","
      icon: MessageCircle,
      description: "Patient engagement, appointment scheduling, and health information delivery.",","
      benefits: ["70% patient engagement", "30% appointment compliance", "25% readmission reduction"]","
    },
    {
      title: "Education & Training",","
      icon: Brain,
      description: "Personalized learning assistants and interactive training experiences.",","
      benefits: ["50% learning retention", "40% course completion", "60% student satisfaction"]","
    }
  ];

  const integrations: [
    {
      name: "CRM Systems",
      name: "CRM Systems",","
      icon: Database,
      description: "Seamless integration with Salesforce, HubSpot, and custom CRM platforms.","
    },
    {
      name: "Communication Platforms",
      name: "Communication Platforms",","
      icon: Globe,
      description: "Native support for Slack, Teams, WhatsApp, and enterprise messaging systems.","
    },
    {
      name: "Voice & Video",
      name: "Voice & Video",","
      icon: Mic,
      description: "Integration with Twilio, Zoom, WebRTC, and custom voice/video solutions.","
    },
    {
      name: "Analytics Platforms",
      name: "Analytics Platforms",","
      icon: Zap,
      description: "Connect with Google Analytics, Mixpanel, and custom business intelligence tools.","
    },
    {
      name: "AI/ML Services",
      name: "AI/ML Services",","
      icon: Brain,
      description: "Integration with OpenAI, Azure AI, AWS AI services, and custom ML models.","
    },
    {
      name: "Enterprise Systems",
      name: "Enterprise Systems",","
      icon: Shield,
      description: "Connect with ERP, HR systems, and enterprise resource planning platforms.","
    }
  ];

  return (
    <>
      <Helmet >
        <title >Conversational AI - Zion Tech Group | Advanced Multi-Modal AI Conversations</title>
        <meta name: "description
  content: "Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations. Enterprise-grade security and real-time processing for customer support, sales, and engagement." /><meta name: "keywords" content ="conversational AI, chatbot, voice AI, multi-modal AI, customer support AI, sales automation, natural language processing, AI conversations" /><link rel: "canonical" href="https://ziontechgroup.com/services/conversational-ai/>
  content: "Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations. Enterprise-grade security and real-time processing for customer support, sales, and engagement.","
        />
        <meta name: "keywords" content ="conversational AI, chatbot, voice AI, multi-modal AI, customer support AI, sales automation, natural language processing, AI conversations" />","
        <link rel: "canonical" href ="https: //ziontechgroup.com/services/conversational-ai" />","
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-pink-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  Conversational <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-violet-100 max-w-4xl mx-auto mb-8">,
  Deploy advanced conversational AI with 96% accuracy, 150+ language support
                and multi-modal conversations for customer support, sales, and engagement.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-pink-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  Conversational <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">AI</span>","
              </h1>
              <p className="text-xl md: text-2xl text-violet-100 max-w-4xl mx-auto mb-8">
  Deploy advanced conversational AI with 96% accuracy, 150+ language support
                and multi-modal conversations for customer support, sales, and engagement.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact
  className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />
  Schedule Demo
                </a>
                <a href="#pricing
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-violet-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2" />","
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Why Choose Our Conversational AI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Advanced AI technology that understands, responds, and engages like never before.
              </p>
            </div>

            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-violet-600/>
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-4">","
                  <Brain className="w-8 h-8 text-violet-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">96% Accuracy</h3>","
                <p className="text-gray-600">Industry-leading conversation understanding</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-purple-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">","
                  <Clock className="w-8 h-8 text-purple-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Response</h3>","
                <p className="text-gray-600">Sub-second response times</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Languages className="w-8 h-8 text-pink-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">","
                  <Languages className="w-8 h-8 text-pink-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">150+ Languages</h3>","
                <p className="text-gray-600">Global reach with cultural context</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-blue-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-blue-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>","
                <p className="text-gray-600">Bank-grade encryption & compliance</p>","
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Transform customer engagement across multiple industries with intelligent conversations.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-violet-600/>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-violet-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>"
                    <p className="text-gray-600 mb-6">{useCase.description}</p>"
                    <ul className="space-y-2">","
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key: {benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{benefit}</span>";"
                        <li key: {benefitIndex} className="flex items-center text-sm">","
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />","
                          <span className="text-gray-700">{benefit}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Seamless Integrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Connect with your existing tools and systems for a unified experience.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {integrations.map((integration, index) => {
                const Icon: integration.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-violet-600/>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {integrations.map((integration, index) => {
                const Icon: integration.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-violet-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{integration.name}</h3>"
                    <p className="text-gray-600">{integration.description}</p>"
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Powerful features that make conversations natural, intelligent, and effective.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-violet-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-violet-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id: "pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section id: "pricing" className ="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Transparent Pricing for Every Business Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Choose the plan that fits your conversational AI needs and conversation volume.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key: {index} className: {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-violet-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">/{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key: {featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>";"
                      <li key: {featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact
  className: {,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-violet-600 text-white hover:bg-violet-700',';,
? 'bg-violet-600 text-white hover:bg-violet-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom conversational AI solution?</p>","
              <a href="/contact
  className="inline-flex items-center text-violet-600 hover: text-violet-700 font-semibold","
              >
                Contact our AI Team
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1" />","
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Join hundreds of companies already using our conversational AI to transform customer engagement.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-violet-600 text-sm font-medium">{testimonial.company}</div>"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-800 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">
        <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-800 to-pink-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">
  Ready to Transform Your Customer Conversations?
            </h2>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
  Deploy advanced conversational AI that understands, responds, and engages with 96% accuracy across 150+ languages.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact
  className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />
  Schedule Demo
              </a>
              <a href="/case-studies
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-violet-900 font-semibold rounded-lg transition-colors","
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2" />","
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConversationalAI;