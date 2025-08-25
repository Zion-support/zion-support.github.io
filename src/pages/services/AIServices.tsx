import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  MessageSquare,
  FileText,
  Camera,
  Mic,
  Code,
  Palette,
  Search,
  Bot,
  Network,
  CpuIcon
} from 'lucide-react';

export default function AIServices() {
  const aiServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with AI-driven analytics, predictive modeling, and automated reporting.",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Insights", "Natural Language Queries", "Custom Alerts"],
      price: "$599/month",
      marketPrice: "$1,500/month",
      savings: "60% savings",
      category: "Business Intelligence",
      rating: 4.9,
      reviewCount: 456,
      useCases: ["Sales Forecasting", "Customer Behavior Analysis", "Market Trend Prediction", "Performance Optimization"]
    },
    {
      title: "AI Marketing Automation Platform",
      description: "Intelligent marketing automation with AI-powered audience segmentation, content optimization, and campaign performance prediction.",
      icon: Target,
      features: ["AI Audience Segmentation", "Content Optimization", "Campaign Prediction", "A/B Testing AI", "ROI Optimization"],
      price: "$399/month",
      marketPrice: "$1,200/month",
      savings: "67% savings",
      category: "Marketing",
      rating: 4.8,
      reviewCount: 289,
      useCases: ["Email Marketing", "Social Media Ads", "Content Marketing", "Lead Nurturing"]
    },
    {
      title: "AI-Powered Customer Support",
      description: "24/7 intelligent customer support with natural language processing, automated ticket routing, and sentiment analysis.",
      icon: MessageSquare,
      features: ["Natural Language Processing", "Automated Ticket Routing", "Sentiment Analysis", "Multi-language Support", "24/7 Availability"],
      price: "$299/month",
      marketPrice: "$800/month",
      savings: "63% savings",
      category: "Customer Support",
      rating: 4.7,
      reviewCount: 234,
      useCases: ["Customer Service", "Technical Support", "Sales Support", "FAQ Automation"]
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis with OCR, data extraction, and automated form processing for any document type.",
      icon: FileText,
      features: ["Advanced OCR", "Data Extraction", "Form Processing", "Document Classification", "Automated Workflows"],
      price: "$199/month",
      marketPrice: "$600/month",
      savings: "67% savings",
      category: "Document Processing",
      rating: 4.6,
      reviewCount: 167,
      useCases: ["Invoice Processing", "Contract Analysis", "Resume Screening", "Legal Document Review"]
    },
    {
      title: "AI Image & Video Analysis",
      description: "Computer vision solutions for image recognition, object detection, and video content analysis with real-time processing.",
      icon: Camera,
      features: ["Object Detection", "Image Recognition", "Video Analysis", "Real-time Processing", "Custom Model Training"],
      price: "$499/month",
      marketPrice: "$1,500/month",
      savings: "67% savings",
      category: "Computer Vision",
      rating: 4.8,
      reviewCount: 198,
      useCases: ["Quality Control", "Security Monitoring", "Content Moderation", "Product Recognition"]
    },
    {
      title: "AI Voice & Speech Recognition",
      description: "Advanced speech-to-text, text-to-speech, and voice biometrics for seamless voice interactions.",
      icon: Mic,
      features: ["Speech-to-Text", "Text-to-Speech", "Voice Biometrics", "Multi-language Support", "Real-time Processing"],
      price: "$349/month",
      marketPrice: "$900/month",
      savings: "61% savings",
      category: "Voice AI",
      rating: 4.7,
      reviewCount: 145,
      useCases: ["Call Centers", "Voice Assistants", "Accessibility Tools", "Voice Commands"]
    },
    {
      title: "AI Code Generation & Review",
      description: "Intelligent code generation, automated testing, and code review with AI-powered suggestions and optimization.",
      icon: Code,
      features: ["Code Generation", "Automated Testing", "Code Review", "Bug Detection", "Performance Optimization"],
      price: "$449/month",
      marketPrice: "$1,200/month",
      savings: "63% savings",
      category: "Development",
      rating: 4.9,
      reviewCount: 312,
      useCases: ["Software Development", "Code Review", "Testing Automation", "Performance Optimization"]
    },
    {
      title: "AI Design & Creative Tools",
      description: "AI-powered design generation, creative content creation, and automated design optimization for marketing and branding.",
      icon: Palette,
      features: ["Design Generation", "Content Creation", "Brand Optimization", "A/B Testing", "Creative Analytics"],
      price: "$299/month",
      marketPrice: "$800/month",
      savings: "63% savings",
      category: "Creative AI",
      rating: 4.6,
      reviewCount: 178,
      useCases: ["Logo Design", "Marketing Materials", "Social Media Content", "Brand Identity"]
    },
    {
      title: "AI Search & Recommendation Engine",
      description: "Intelligent search with semantic understanding, personalized recommendations, and predictive user behavior analysis.",
      icon: Search,
      features: ["Semantic Search", "Personalized Recommendations", "Behavior Analysis", "Search Analytics", "Auto-completion"],
      price: "$399/month",
      marketPrice: "$1,000/month",
      savings: "60% savings",
      category: "Search & Recommendations",
      rating: 4.8,
      reviewCount: 223,
      useCases: ["E-commerce", "Content Discovery", "Product Recommendations", "Search Optimization"]
    },
    {
      title: "AI Chatbot & Virtual Assistant",
      description: "Intelligent conversational AI with natural language understanding, multi-turn conversations, and seamless integrations.",
      icon: Bot,
      features: ["Natural Language Understanding", "Multi-turn Conversations", "Integration APIs", "Analytics Dashboard", "Custom Training"],
      price: "$249/month",
      marketPrice: "$700/month",
      savings: "64% savings",
      category: "Conversational AI",
      rating: 4.7,
      reviewCount: 189,
      useCases: ["Customer Service", "Sales Support", "Internal Help Desk", "Lead Qualification"]
    },
    {
      title: "AI Network Security & Monitoring",
      description: "Intelligent threat detection, network monitoring, and automated security response with machine learning algorithms.",
      icon: Shield,
      features: ["Threat Detection", "Network Monitoring", "Automated Response", "Behavioral Analysis", "Compliance Reporting"],
      price: "$599/month",
      marketPrice: "$1,500/month",
      savings: "60% savings",
      category: "Cybersecurity",
      rating: 4.9,
      reviewCount: 267,
      useCases: ["Network Security", "Threat Prevention", "Compliance Monitoring", "Incident Response"]
    },
    {
      title: "AI Data Processing & ETL",
      description: "Intelligent data pipeline automation with AI-powered data quality, transformation, and real-time processing capabilities.",
      icon: Database,
      features: ["Data Quality AI", "Automated ETL", "Real-time Processing", "Data Validation", "Pipeline Monitoring"],
      price: "$349/month",
      marketPrice: "$900/month",
      savings: "61% savings",
      category: "Data Processing",
      rating: 4.7,
      reviewCount: 156,
      useCases: ["Data Integration", "ETL Automation", "Data Quality", "Real-time Analytics"]
    }
  ];

  const benefits = [
    {
      title: "Rapid Implementation",
      description: "Deploy AI solutions in weeks, not months, with pre-trained models and customizable templates",
      icon: Zap,
      details: "90% faster deployment vs. custom AI development"
    },
    {
      title: "Cost-Effective",
      description: "Access enterprise-grade AI capabilities at a fraction of the cost of building custom solutions",
      icon: DollarSign,
      details: "60-70% cost savings vs. custom AI development"
    },
    {
      title: "Scalable Architecture",
      description: "Built to handle growing data volumes and user demands with cloud-native infrastructure",
      icon: TrendingUp,
      details: "Handles 100x data growth without performance degradation"
    },
    {
      title: "Continuous Learning",
      description: "AI models that improve over time with new data and user interactions",
      icon: Brain,
      details: "Models improve accuracy by 15-25% monthly through learning"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient monitoring, and medical image analysis",
      icon: Building,
      solutions: ["Medical Imaging AI", "Patient Risk Assessment", "Drug Discovery", "Telemedicine AI"]
    },
    {
      name: "Finance",
      description: "Fraud detection, risk assessment, and automated financial analysis",
      icon: Building,
      solutions: ["Fraud Detection", "Credit Scoring", "Trading Algorithms", "Compliance AI"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: Building,
      solutions: ["Predictive Maintenance", "Quality Control", "Supply Chain AI", "Process Optimization"]
    },
    {
      name: "Retail",
      description: "Customer behavior analysis, inventory optimization, and personalized marketing",
      icon: Building,
      solutions: ["Customer Analytics", "Inventory AI", "Personalization", "Demand Forecasting"]
    },
    {
      name: "Education",
      description: "Personalized learning, student performance analysis, and adaptive content",
      icon: Building,
      solutions: ["Learning Analytics", "Content Adaptation", "Student Assessment", "Administrative AI"]
    },
    {
      name: "Legal",
      description: "Document analysis, contract review, and legal research automation",
      icon: Building,
      solutions: ["Contract Analysis", "Legal Research", "Document Review", "Compliance AI"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jennifer Martinez",
      role: "Chief Medical Officer",
      company: "Advanced Healthcare Systems",
      content: "The AI-powered diagnostic platform has improved our diagnostic accuracy by 35% and reduced patient wait times by 60%. It's revolutionizing how we deliver care.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      role: "VP of Technology",
      company: "FinTech Innovations",
      content: "Our fraud detection system catches 95% of fraudulent transactions in real-time. The AI has saved us millions in potential losses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Retail Dynamics",
      content: "The AI marketing automation has increased our conversion rates by 40% and reduced our customer acquisition costs by 25%. Game changer!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group" 
        description="Comprehensive AI services and micro SAAS solutions for businesses. AI-powered business intelligence, marketing automation, customer support, and more. Starting at $199/month."
        keywords="AI services, artificial intelligence, machine learning, AI solutions, business intelligence, marketing automation, customer support AI, document processing AI"
        canonical="https://ziontechgroup.com/services/ai-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business with Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Leverage the power of artificial intelligence with our comprehensive AI services and micro SAAS solutions. 
            From business intelligence to customer support automation, we deliver AI that drives real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore AI Solutions
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              AI-Powered Micro SAAS Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Ready-to-deploy AI solutions that transform your business operations, enhance customer experiences, 
              and drive measurable growth across all departments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full font-medium">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-sm text-zion-slate line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">{service.savings}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of enterprise-grade AI capabilities delivered as accessible, 
              scalable micro SAAS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate mb-3">
                  {benefit.description}
                </p>
                <p className="text-sm text-zion-cyan font-medium">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored AI solutions designed for the unique challenges and compliance requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              AI Success Stories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Real results from real businesses using our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark">{testimonial.name}</h4>
                    <p className="text-sm text-zion-slate">{testimonial.role}</p>
                    <p className="text-xs text-zion-cyan">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate text-sm italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Start your AI journey today with our proven solutions. Get a free consultation and discover 
            how AI can revolutionize your business operations and customer experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start AI Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          <p className="text-zion-slate-light mt-4">
            Contact us: <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a> | 
            <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline ml-2">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}