import React from "react"
import SEO from "@/components/SEO"
import { Brain, Shield, Database, TrendingUp } from "lucide-react"
const AIServices = () () => {
    const aiServices = [
  {
  id: "ai-strategy",tit,
  l: e: "AI Strategy & Consulting",descripti,
  o: n: "Comprehensive AI strategy development and implementation for digital transformation.",ic,
  o: n: <Brain className="h-8 w-8 text-pink-500"/>,pri,
  c: e: 150,curren,
  c: y: "$",featur,
  e: s: [
  "AI Roadmap Planning"
                "Technology Assessment"
                "ROI Analysis"
                "Implementation Strategy"
                "Change Management"
                "Training Programs"
]
            categor,
  y: "Strategy",bad,
  g: e: "Foundation",li,
  n: k: "http,
  s://ziontechgroup.com/ai-strategy",detai,
  l: s: "Strategic AI consulting to align artificial intelligence with your business objectives and drive measurable results.",prici,
  n: g: {
  starte,
  r: "$150/hour",profession,
  a: l: "$250/hour",enterpri,
  s: e: "$350/hour"
}
            freeTri,
  a: l: "1-hour consultation",rati,
  n: g: 4.9,reviewCou,
  n: t: 156
},
  {
  id: "machine-learning",tit,
  l: e: "Machine Learning Solutions",descripti,
  o: n: "Custom ML models and algorithms for business automation and predictive analytics.",ic,
  o: n: <Cpu className="h-8 w-8 text-blue-500"/>,pri,
  c: e: 5000,curren,
  c: y: "$",featur,
  e: s: [
  "Custom ML Models"
                "Data Preprocessing"
                "Model Training"
                "Performance Optimization"
                "API Integration"
                "Continuous Learning"
]
            categor,
  y: "ML",bad,
  g: e: "Core",li,
  n: k: "http,
  s://ziontechgroup.com/machine-learning",detai,
  l: s: "End-to-end machine learning solutions from data preparation to model deployment and maintenance.",prici,
  n: g: {
  starte,
  r: "$5,000 - $15,000"
                profession,
  a: l: "$15,000 - $50,000"
                enterpri,
  s: e: "$50,000 - $200,000"
}
            freeTri,
  a: l: "Proof of concept",rati,
  n: g: 4.8,reviewCou,
  n: t: 234
},
  {
  id: "natural-language-processing",tit,
  l: e: "NLP & Text Analytics",descripti,
  o: n: "Advanced natural language processing for document analysis, chatbots, and content generation."
            ic,
  o: n: <MessageSquare className="h-8 w-8 text-green-500"/>,pri,
  c: e: 8000,curren,
  c: y: "$",featur,
  e: s: [
  "Text Classification"
                "Sentiment Analysis"
                "Entity Recognition"
                "Language Translation"
                "Content Generation"
                "Chatbot Development"
]
            categor,
  y: "NLP",bad,
  g: e: "Advanced",li,
  n: k: "http,
  s://ziontechgroup.com/nlp-solutions",detai,
  l: s: "Sophisticated NLP solutions for understanding, analyzing, and generating human language content."
            prici,
  n: g: {
  starte,
  r: "$8,000 - $25,000"
                profession,
  a: l: "$25,000 - $75,000"
                enterpri,
  s: e: "$75,000 - $250,000"
}
            freeTri,
  a: l: "Demo version",rati,
  n: g: 4.9,reviewCou,
  n: t: 189
},
  {
  id: "computer-vision",tit,
  l: e: "Computer Vision & Image AI",descripti,
  o: n: "Visual AI solutions for image recognition, object detection, and video analysis."
            ic,
  o: n: <Eye className="h-8 w-8 text-purple-500"/>,pri,
  c: e: 12000,curren,
  c: y: "$",featur,
  e: s: [
  "Image Recognition"
                "Object Detection"
                "Face Recognition"
                "Video Analysis"
                "Quality Control"
                "Security Monitoring"
]
            categor,
  y: "Vision",bad,
  g: e: "Innovative",li,
  n: k: "http,
  s://ziontechgroup.com/computer-vision",detai,
  l: s: "State-of-the-art computer vision solutions for industrial automation, security, and quality control applications."
            prici,
  n: g: {
  starte,
  r: "$12,000 - $35,000"
                profession,
  a: l: "$35,000 - $100,000"
                enterpri,
  s: e: "$100,000 - $300,000"
}
            freeTri,
  a: l: "Pilot project",rati,
  n: g: 4.8,reviewCou,
  n: t: 145
},
  {
  id: "predictive-analytics",tit,
  l: e: "Predictive Analytics & Forecasting",descripti,
  o: n: "AI-powered predictive models for business forecasting and trend analysis.",ic,
  o: n: <TrendingUp className="h-8 w-8 text-orange-500"/>,pri,
  c: e: 6000,curren,
  c: y: "$",featur,
  e: s: [
  "Demand Forecasting"
                "Risk Assessment"
                "Trend Analysis"
                "Anomaly Detection"
                "Scenario Planning"
                "Real-time Predictions"
]
            categor,
  y: "Analytics",bad,
  g: e: "Insightful",li,
  n: k: "http,
  s://ziontechgroup.com/predictive-analytics",detai,
  l: s: "Advanced predictive analytics helping businesses make data-driven decisions and anticipate future trends.",prici,
  n: g: {
  starte,
  r: "$6,000 - $20,000"
                profession,
  a: l: "$20,000 - $60,000"
                enterpri,
  s: e: "$60,000 - $180,000"
}
            freeTri,
  a: l: "30-day trial",rati,
  n: g: 4.7,reviewCou,
  n: t: 198
},
  {
  id: "ai-automation",tit,
  l: e: "AI Process Automation",descripti,
  o: n: "Intelligent automation solutions for business process optimization and workflow management.",ic,
  o: n: <Zap className="h-8 w-8 text-yellow-500"/>,pri,
  c: e: 4000,curren,
  c: y: "$",featur,
  e: s: [
  "Workflow Automation"
                "Document Processing"
                "Data Entry Automation"
                "Decision Automation"
                "Process Optimization"
                "Integration APIs"
]
            categor,
  y: "Automation",bad,
  g: e: "Efficient",li,
  n: k: "http,
  s://ziontechgroup.com/ai-automation",detai,
  l: s: "Intelligent process automation reducing manual work and improving operational efficiency across your organization.",prici,
  n: g: {
  starte,
  r: "$4,000 - $15,000"
                profession,
  a: l: "$15,000 - $45,000"
                enterpri,
  s: e: "$45,000 - $150,000"
}
            freeTri,
  a: l: "Process assessment",rati,
  n: g: 4.8,reviewCou,
  n: t: 267
},
  {
  id: "ai-ethics",tit,
  l: e: "AI Ethics & Governance",descripti,
  o: n: "Responsible AI development and governance frameworks for ethical AI deployment.",ic,
  o: n: <Shield className="h-8 w-8 text-red-500"/>,pri,
  c: e: 200,curren,
  c: y: "$",featur,
  e: s: [
  "Ethics Framework"
                "Bias Detection"
                "Transparency Tools"
                "Compliance Audits"
                "Training Programs"
                "Monitoring Systems"
]
            categor,
  y: "Ethics",bad,
  g: e: "Responsible",li,
  n: k: "http,
  s://ziontechgroup.com/ai-ethics",detai,
  l: s: "Comprehensive AI ethics and governance solutions ensuring responsible and transparent AI deployment.",prici,
  n: g: {
  starte,
  r: "$200/hour",profession,
  a: l: "$300/hour",enterpri,
  s: e: "$400/hour"
}
            freeTri,
  a: l: "Ethics assessment",rati,
  n: g: 4.9,reviewCou,
  n: t: 89
},
  {
  id: "ai-infrastructure",tit,
  l: e: "AI Infrastructure & MLOps",descripti,
  o: n: "Scalable AI infrastructure and machine learning operations for enterprise AI deployment.",ic,
  o: n: <Server className="h-8 w-8 text-indigo-500"/>,pri,
  c: e: 15000,curren,
  c: y: "$",featur,
  e: s: [
  "ML Pipeline Automation"
                "Model Versioning"
                "Scalable Infrastructure"
                "Monitoring & Alerting"
                "Performance Optimization"
                "Security & Compliance"
]
            categor,
  y: "Infrastructure",bad,
  g: e: "Enterprise",li,
  n: k: "http,
  s://ziontechgroup.com/ai-infrastructure",detai,
  l: s: "Enterprise-grade AI infrastructure and MLOps solutions for scalable and reliable AI model deployment.",prici,
  n: g: {
  starte,
  r: "$15,000 - $50,000"
                profession,
  a: l: "$50,000 - $150,000"
                enterpri,
  s: e: "$150,000 - $500,000"
}
            freeTri,
  a: l: "Infrastructure audit",rati,
  n: g: 4.8,reviewCou,
  n: t: 134
},
  {
  id: "ai-integration",tit,
  l: e: "AI Integration Services",descripti,
  o: n: "Seamless integration of AI solutions with existing business systems and workflows.",ic,
  o: n: <Code className="h-8 w-8 text-cyan-500"/>,pri,
  c: e: 3000,curren,
  c: y: "$",featur,
  e: s: [
  "API Development"
                "System Integration"
                "Data Pipeline Setup"
                "Custom Connectors"
                "Testing & Validation"
                "Documentation"
]
            categor,
  y: "Integration",bad,
  g: e: "Seamless",li,
  n: k: "http,
  s://ziontechgroup.com/ai-integration",detai,
  l: s: "Professional AI integration services ensuring seamless connectivity with your existing business systems.",prici,
  n: g: {
  starte,
  r: "$3,000 - $12,000"
                profession,
  a: l: "$12,000 - $40,000"
                enterpri,
  s: e: "$40,000 - $120,000"
}
            freeTri,
  a: l: "Integration assessment",rati,
  n: g: 4.7,reviewCou,
  n: t: 178
},
  {
  id: "ai-training",tit,
  l: e: "AI Training & Workshops",descripti,
  o: n: "Comprehensive training programs for AI adoption and team skill development.",ic,
  o: n: <Users className="h-8 w-8 text-teal-500"/>,pri,
  c: e: 500,curren,
  c: y: "$",featur,
  e: s: [
  "AI Fundamentals"
                "Practical Workshops"
                "Use Case Development"
                "Best Practices"
                "Hands-on Projects"
                "Ongoing Support"
]
            categor,
  y: "Training",bad,
  g: e: "Educational",li,
  n: k: "http,
  s://ziontechgroup.com/ai-training",detai,
  l: s: "Comprehensive AI training programs empowering your team with the knowledge and skills to leverage AI effectively.",prici,
  n: g: {
  starte,
  r: "$500/person",profession,
  a: l: "$1,000/person"
                enterpri,
  s: e: "$2,500/person"
}
            freeTri,
  a: l: "Introductory session",rati,
  n: g: 4.8,reviewCou,
  n: t: 223
},
  ]
    const categories = [["All Services", "Strategy", "ML", "NLP", "Vision", "Analytics", "Automation", "Ethics", "Infrastructure", "Integration", "Training"],
  ]

    return (
        <div className="min-h-screen bg-background">
            <SEO 
                title="AI Services - Zion Tech Group" 
                description="Transform your business with cutting-edge AI services including machine learning, data analytics, and AI strategy." 
                keywords="AI services, machine learning, artificial intelligence, data analytics, AI strategy, AI ethics" 
                canonical="htt,
  p: s: //ziontechgroup.com/services/ai-services"
            />

            {/* Hero Section */},
  }
            <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 text-white py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl,
  m: d:text-6xl font-bold mb-6">
                        AI Services for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                            {" "}Innovation
                        </span>
                    </h1>
                    <p className="text-xl,
  m: d:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8">
                        Harness the power of artificial intelligence to transform your business operations
                        enhance customer experiences, and drive innovation across all departments.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r: from-pink-700,
  hove: r:to-rose-700 transition-all duration-300,
  transform: hover:scale-105">
                            Start Your AI Journey
                        </button>
                        <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:bg-pink-400 hove,
  r:text-white transition-all duration-300">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Info Banner */},
  }
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-pink-400/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */},
  }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services Portfolio</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive AI solutions designed to meet your business challenges and drive innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
                        {aiServices.map((service) => (
  <div key={service.id} className="group bg-white rounded-xl shadow-lg,
  hove: r: shadow-2xl transition-all duration-300 border border-gray-200,
  hove: r:border-pink-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-lg bg-pink-100 group-hove,
  r:bg-pink-200 transition-colors">
                                            {service.icon},
  }
                                        </div>
                                        {service.badge && (
  <span className="px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full">
                                                {service.badge},
  }
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hov,
  e: r:text-pink-600 transition-colors">
                                        {service.title},
  }
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-3">{service.details}</p>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {service.features.slice(0, 4).map((feature, index) => (
  <div key={index} className="flex items-center text-xs text-pink-600">
                                                    <CheckCircle className="w-3 h-3 mr-2"/>
                                                    {feature},
  }
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Prici,
  n: g:</h4>
                                            <div className="space-y-1">
                                                {Object.entries(service.pricing).map(([plan, price]) => (
  <div key={plan} className="flex justify-between text-xs">
                                                        <span className="text-gray-600 capitalize">{plan}:</span>
                                                        <span className="text-pink-600 font-semibold">{String(price)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                            <span>Free,
  Tria: l:</span>
                                            <span className="text-pink-600 font-semibold">{service.freeTrial}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
  <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}/>
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">({service.reviewCount})</span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center mb-4">
                                        <span className="text-3xl font-bold text-pink-600">
                                            {service.price === 0 ? 'Free' : `${service.currency}${service.price}`}
                                        </span>
                                        <span className="text-gray-500">
                                            {service.price === 0 ? '' : service.price < 1000 ? '/hour' : '/project'},
  }
                                        </span>
                                    </div>
                                    
                                    <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-6 rounded-lg font-semibold,
  hove: r: from-pink-700,
  hove: r:to-rose-700 transition-all duration-300 transform hove,
  r:scale-105">
                                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            <ExternalLink className="h-4 w-4 mr-2"/>
                                            Get Started
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */},
  }
            <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Start with a consultation and see how our AI services can streamline your operations
                        improve productivity, and drive growth. No long-term contracts, cancel anytime.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-lg font-semibold,
  hove: r: from-pink-700,
  hove: r:to-rose-700 transition-all duration-300">
                            <Rocket className="h-5 w-5 mr-2 inline"/>
                            Start AI Consultation
                        </button>
                        <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-pink-600 hove,
  r:text-white transition-all duration-300">
                            <Phone className="h-5 w-5 mr-2 inline"/>
                            Call +1 302 464 0950
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AIServices