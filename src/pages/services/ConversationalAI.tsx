// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Video } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Video } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ConversationalAI: React.FC = () => {
  const features: [,
    {
      icon: Brain,,
      title: "Advanced NLP & NLU",,
      description: "State-of-the-art natural language processing that understands context, intent, and sentiment with 96% accuracy.",,
      title: "Advanced NLP & NLU",,
      description: "State-of-the-art natural language processing that understands context, intent, and sentiment with 96% accuracy.",,
      benefit: "96% conversation understanding",
    },
    {
      icon: MessageCircle,,
      title: "Multi-Modal Conversations",,
      description: "Support for text, voice, and video conversations with seamless transitions between modalities.",,
      title: "Multi-Modal Conversations",,
      description: "Support for text, voice, and video conversations with seamless transitions between modalities.",,
      benefit: "Unified conversation experience",
    },
    {
      icon: Languages,,
      title: "150+ Language Support",,
      description: "Real-time translation and multilingual support with cultural context awareness.",,
      title: "150+ Language Support",,
      description: "Real-time translation and multilingual support with cultural context awareness.",,
      benefit: "Global reach capability",
    },
    {
      icon: Zap,,
      title: "Real-Time Processing",,
      description: "Sub-second response times with intelligent context retention across conversation threads.",,
      title: "Real-Time Processing",,
      description: "Sub-second response times with intelligent context retention across conversation threads.",,
      benefit: "Instant response delivery",
    },
    {
      icon: Shield,,
      title: "Enterprise Security",,
      description: "End-to-end encryption, GDPR compliance, and advanced privacy protection for sensitive conversations.",,
      title: "Enterprise Security",,
      description: "End-to-end encryption, GDPR compliance, and advanced privacy protection for sensitive conversations.",,
      benefit: "100% privacy compliance",
    },
    {
      icon: Users,,
      title: "Human-AI Collaboration",,
      description: "Seamless handoff between AI and human agents with full context preservation.",,
      title: "Human-AI Collaboration",,
      description: "Seamless handoff between AI and human agents with full context preservation.",,
      benefit: "Perfect escalation flow",
    }],
;

  const pricing: [,
    {
      name="Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses wanting to add conversational AI capabilities",
      features: [,,
      name="Starter
      price: ", $399
      period: "/month
      description: ", Perfect for small businesses wanting to add conversational AI capabilities
      features: [,,",
        "Up to 1,000 conversations/month",;
        "Basic NLP capabilities",;
        "Text & voice support",;
        "Email support",;
        "Basic analytics",;
        "Standard integrations",;
        "5 language support",;
        "Basic customization"],

      popular: false,
    },
    {
      name="Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with complex conversational needs",
      features: [,,
      name="Professional
      price: ", $1,299
      period: "/month
      description: ", Ideal for growing companies with complex conversational needs
      features: [,,",
        "Up to 10,000 conversations/month",;
        "Advanced NLP & NLU",;
        "Text, voice & video support",;
        "Priority support",;
        "Advanced analytics & insights",;
        "Advanced integrations",;
        "25 language support",;
        "Custom model training",;
        "API access",;
        "A/B testing",;
        "Sentiment analysis"],

      popular: true,
    },
    {
      name="Enterprise",
      price: "$4,999",
      period: "/month",
      description: "Complete solution for large organizations with enterprise requirements",
      features: [,,
      name="Enterprise
      price: ", $4,999
      period: "/month
      description: ", Complete solution for large organizations with enterprise requirements
      features: [,,",
        "Unlimited conversations",;
        "Enterprise NLP & NLU",;
        "Full multi-modal support",;
        "Dedicated AI specialist",;
        "Enterprise analytics suite",;
        "Unlimited integrations",;
        "150+ language support",;
        "Custom AI development",;
        "White-label solutions",;
        "Advanced security features",;
        "SLA guarantee",;
        "On-premise deployment",;
        "Training & consultation"],

      popular: false,,
      name="Starter",,
      price: "$399",,
      period: "/month",,
      description: "Perfect for small businesses wanting to add conversational AI capabilities",,
      features: [,,
        "Up to 1,000 conversations/month",
        "Basic NLP capabilities",
        "Text & voice support",
        "Email support",
        "Basic analytics",
        "Standard integrations",
        "5 language support",
        "Basic customization"],

      popular: false,
    },
    {
      name="Professional",,
      price: "$1,299",,
      period: "/month",,
      description: "Ideal for growing companies with complex conversational needs",,
      features: [,,
        "Up to 10,000 conversations/month",
        "Advanced NLP & NLU",
        "Text, voice & video support",
        "Priority support",
        "Advanced analytics & insights",
        "Advanced integrations",
        "25 language support",
        "Custom model training",
        "API access",
        "A/B testing",
        "Sentiment analysis"],

      popular: true,
    },
    {
      name="Enterprise",,
      price: "$4,999",,
      period: "/month",,
      description: "Complete solution for large organizations with enterprise requirements",,
      features: [,,
        "Unlimited conversations",
        "Enterprise NLP & NLU",
        "Full multi-modal support",
        "Dedicated AI specialist",
        "Enterprise analytics suite",
        "Unlimited integrations",
        "150+ language support",
        "Custom AI development",
        "White-label solutions",
        "Advanced security features",
        "SLA guarantee",
        "On-premise deployment",
        "Training & consultation"],

      popular: false,
    }
  ];

  const testimonials: [,
    {
      name="Amanda Foster",,
      role: "VP Customer Experience, E-Commerce Giant",,
      content: "Conversational AI reduced our customer service response time from 4 hours to 30 seconds. Customer satisfaction increased by 45% while reducing support costs by 60%.",,
      name="Amanda Foster",,
      role: "VP Customer Experience, E-Commerce Giant",,
      content: "Conversational AI reduced our customer service response time from 4 hours to 30 seconds. Customer satisfaction increased by 45% while reducing support costs by 60%.",,
      rating: 5,,
      company: "E-Commerce Giant",
    },
    {
      name="Dr. Robert Chen",,
      role: "Head of Digital Health, Medical Systems",,
      content: "The multi-modal conversation capabilities enabled us to provide personalized patient support 24/7. Patient engagement improved by 70% with better health outcomes.",,
      name="Dr. Robert Chen",,
      role: "Head of Digital Health, Medical Systems",,
      content: "The multi-modal conversation capabilities enabled us to provide personalized patient support 24/7. Patient engagement improved by 70% with better health outcomes.",,
      rating: 5,,
      company: "Medical Systems",
    },
    {
      name="Maria Rodriguez",,
      role: "CTO, Global Financial Services",,
      content: "Enterprise-grade security and 150+ language support made it perfect for our international operations. Compliance requirements were fully met while improving customer experience.",,
      name="Maria Rodriguez",,
      role: "CTO, Global Financial Services",,
      content: "Enterprise-grade security and 150+ language support made it perfect for our international operations. Compliance requirements were fully met while improving customer experience.",,
      rating: 5,,
      company: "Global Financial Services",
    }
  ];

  const useCases: [,
    {
      title: "Customer Support",,
      icon: Users,,
      description: "24/7 intelligent customer service with instant responses and seamless human handoff.",,
      benefits: ["60% cost reduction", "45% faster resolution", "95% customer satisfaction"]",
    },
    {
      title: "Sales & Lead Generation",,
      icon: Zap,,
      description: "Intelligent sales conversations that qualify leads and nurture prospects automatically.",,
      benefits: ["35% increase in conversions", "50% more qualified leads", "40% sales team efficiency"]",
    },
    {
      title: "Healthcare Support",,
      icon: MessageCircle,,
      description: "Patient engagement, appointment scheduling, and health information delivery.",,
      benefits: ["70% patient engagement", "30% appointment compliance", "25% readmission reduction"]",
    },
    {
      title: "Education & Training",,
      icon: Brain,,
      description: "Personalized learning assistants and interactive training experiences.",,
      benefits: ["50% learning retention", "40% course completion", "60% student satisfaction"]",
      title: "Customer Support",,
      icon: Users,,
      description: "24/7 intelligent customer service with instant responses and seamless human handoff.",,
      benefits: ["60% cost reduction", "45% faster resolution", "95% customer satisfaction"]",
    },
    {
      title: "Sales & Lead Generation",,
      icon: Zap,,
      description: "Intelligent sales conversations that qualify leads and nurture prospects automatically.",,
      benefits: ["35% increase in conversions", "50% more qualified leads", "40% sales team efficiency"]",
    },
    {
      title: "Healthcare Support",,
      icon: MessageCircle,,
      description: "Patient engagement, appointment scheduling, and health information delivery.",,
      benefits: ["70% patient engagement", "30% appointment compliance", "25% readmission reduction"]",
    },
    {
      title: "Education & Training",,
      icon: Brain,,
      description: "Personalized learning assistants and interactive training experiences.",,
      benefits: ["50% learning retention", "40% course completion", "60% student satisfaction"]",
    }
  ];

  const integrations: [,
    {
      name="CRM Systems",,
      name="CRM Systems",,
      icon: Database,,
      description: "Seamless integration with Salesforce, HubSpot, and custom CRM platforms.",
    },
    {
      name="Communication Platforms",,
      name="Communication Platforms",,
      icon: Globe,,
      description: "Native support for Slack, Teams, WhatsApp, and enterprise messaging systems.",
    },
    {
      name="Voice & Video",,
      name="Voice & Video",,
      icon: Mic,,
      description: "Integration with Twilio, Zoom, WebRTC, and custom voice/video solutions.",
    },
    {
      name="Analytics Platforms",,
      name="Analytics Platforms",,
      icon: Zap,,
      description: "Connect with Google Analytics, Mixpanel, and custom business intelligence tools.",
    },
    {
      name="AI/ML Services",,
      name="AI/ML Services",,
      icon: Brain,,
      description: "Integration with OpenAI, Azure AI, AWS AI services, and custom ML models.",
    },
    {
      name="Enterprise Systems",,
      name="Enterprise Systems",,
      icon: Shield,,
      description: "Connect with ERP, HR systems, and enterprise resource planning platforms.",
    }
  ];

  return (
    <>
      <Helmet >
        <title >Conversational AI - Zion Tech Group | Advanced Multi-Modal AI Conversations</title>
        <meta name="description",
  content: "Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations. Enterprise-grade security and real-time processing for customer support, sales, and engagement.", /><meta name="keywords", content ="conversational AI, chatbot, voice AI, multi-modal AI, customer support AI, sales automation, natural language processing, AI conversations" /><link rel="canonical", href="https://ziontechgroup.com/services/conversational-ai/>",
        <meta name="description
  content: ", Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations. Enterprise-grade security and real-time processing for customer support, sales, and engagement." /><meta name="keywords", content="conversational AI, chatbot, voice AI, multi-modal AI, customer support AI, sales automation, natural language processing, AI conversations" /><link rel="canonical", href="https://ziontechgroup.com/services/conversational-ai/>
  content: "Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations. Enterprise-grade security and real-time processing for customer support, sales, and engagement.",
        />
        <meta name="keywords", content="conversational AI, chatbot, voice AI, multi-modal AI, customer support AI, sales automation, natural language processing, AI conversations" />",
        <link rel="canonical", href ="https: //ziontechgroup.com/services/conversational-ai" />",
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Deploy advanced conversational AI with 96% accuracy, 150+ language support
                and multi-modal conversations for customer support, sales, and engagement.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Demo
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Conversational <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Deploy advanced conversational AI with 96% accuracy, 150+ language support
                and multi-modal conversations for customer support, sales, and engagement.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Conversational <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Deploy advanced conversational AI with 96% accuracy, 150+ language support
                and multi-modal conversations for customer support, sales, and engagement.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Demo
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Why Choose Our Conversational AI?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Advanced AI technology that understands, responds, and engages like never before.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Brain className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Brain className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">96% Accuracy</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Industry-leading conversation understanding</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Instant Response</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Sub-second response times</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Languages className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Languages className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">150+ Languages</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Global reach with cultural context</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise Security</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Bank-grade encryption & compliance</p>",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Brain className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Brain className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">96% Accuracy</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Industry-leading conversation understanding</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Instant Response</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Sub-second response times</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Languages className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">150+ Languages</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Global reach with cultural context</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise Security</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Bank-grade encryption & compliance</p>",
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Industry Applications
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transform customer engagement across multiple industries with intelligent conversations.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.description}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <li key: {benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.description}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
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
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Seamless Integrations
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Connect with your existing tools and systems for a unified experience.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: integration.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: integration.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{integration.name}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{integration.description}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {integrations.map((integration, index) => {
                const Icon: integration.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{integration.name}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{integration.description}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Advanced AI Capabilities
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Powerful features that make conversations natural, intelligent, and effective.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transparent Pricing for Every Business Size
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose the plan that fits your conversational AI needs and conversation volume.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-violet-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <li key: {featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className={,
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className= {,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-violet-600 text-white hover: bg-violet-700',';,
? 'bg-violet-600 text-white hover: bg-violet-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom conversational AI solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our AI Team
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom conversational AI solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our AI Team
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  What Our Clients Say
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join hundreds of companies already using our conversational AI to transform customer engagement.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      <Star key: {i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Demo
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Success Stories
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Ready to Transform Your Customer Conversations?
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Deploy advanced conversational AI that understands, responds, and engages with 96% accuracy across 150+ languages.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Demo
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Success Stories
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Component;