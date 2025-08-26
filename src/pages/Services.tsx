import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    // Existing Core Services
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: "🤖",
      features: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      path: "/services/ai",
      pricing: "$2,500 - $15,000/month",
      benefits: ["30% increase in operational efficiency", "Real-time decision making", "Scalable AI infrastructure"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated development operations",
      icon: "☁️",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"],
      path: "/services/cloud",
      pricing: "$1,800 - $12,000/month",
      benefits: ["50% reduction in deployment time", "99.9% uptime guarantee", "Cost optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions and threat protection",
      icon: "🔒",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Security Training"],
      path: "/services/cybersecurity",
      pricing: "$3,000 - $20,000/month",
      benefits: ["24/7 threat monitoring", "Zero-day attack protection", "Compliance assurance"]
    },
    {
      title: "IT Infrastructure",
      description: "Comprehensive IT infrastructure management and optimization",
      icon: "🖥️",
      features: ["Network Management", "System Administration", "Data Center Operations", "Performance Optimization"],
      path: "/services/infrastructure",
      pricing: "$2,200 - $18,000/month",
      benefits: ["Proactive maintenance", "Performance optimization", "Scalable solutions"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: "🚀",
      features: ["Process Automation", "Workflow Optimization", "Change Management", "Technology Strategy"],
      path: "/services/transformation",
      pricing: "$5,000 - $50,000/month",
      benefits: ["End-to-end transformation", "ROI optimization", "Change management support"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting and advisory services",
      icon: "💡",
      features: ["Technology Assessment", "Strategic Planning", "Vendor Selection", "Project Management"],
      path: "/services/consulting",
      pricing: "$200 - $500/hour",
      benefits: ["Expert guidance", "Strategic insights", "Risk mitigation"]
    },

    // New Micro SAAS Services
    {
      title: "AI-Powered Content Generator",
      description: "Automated content creation for blogs, social media, and marketing materials",
      icon: "✍️",
      features: ["Multi-language support", "SEO optimization", "Brand voice consistency", "Content scheduling"],
      path: "/services/ai-content",
      pricing: "$99 - $499/month",
      benefits: ["10x faster content creation", "SEO-optimized output", "24/7 content generation"]
    },
    {
      title: "Smart Invoice Management",
      description: "Automated invoice processing, approval workflows, and payment tracking",
      icon: "📄",
      features: ["OCR processing", "Automated approvals", "Payment integration", "Analytics dashboard"],
      path: "/services/invoice-management",
      pricing: "$79 - $299/month",
      benefits: ["90% reduction in processing time", "Real-time tracking", "Compliance automation"]
    },
    {
      title: "Customer Success Automation",
      description: "AI-driven customer onboarding, support, and retention automation",
      icon: "🎯",
      features: ["Onboarding automation", "Predictive churn", "Support ticket routing", "Success metrics"],
      path: "/services/customer-success",
      pricing: "$149 - $599/month",
      benefits: ["25% increase in retention", "Automated onboarding", "Proactive support"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence and KPI monitoring platform",
      icon: "📊",
      features: ["Real-time metrics", "Custom dashboards", "Data visualization", "Alert system"],
      path: "/services/analytics-dashboard",
      pricing: "$199 - $799/month",
      benefits: ["Data-driven decisions", "Real-time insights", "Custom reporting"]
    },
    {
      title: "Email Marketing Automation",
      description: "Intelligent email campaigns with personalization and automation",
      icon: "📧",
      features: ["Behavioral triggers", "A/B testing", "Personalization", "Analytics"],
      path: "/services/email-automation",
      pricing: "$89 - $399/month",
      benefits: ["3x higher engagement", "Automated campaigns", "ROI tracking"]
    },
    {
      title: "Project Management AI",
      description: "AI-powered project planning, resource allocation, and risk management",
      icon: "📋",
      features: ["Smart scheduling", "Resource optimization", "Risk prediction", "Progress tracking"],
      path: "/services/project-ai",
      pricing: "$129 - $549/month",
      benefits: ["20% faster delivery", "Resource optimization", "Risk mitigation"]
    },

    // New IT Services
    {
      title: "Network Security Monitoring",
      description: "24/7 network security monitoring and threat detection",
      icon: "🛡️",
      features: ["Real-time monitoring", "Threat intelligence", "Incident response", "Compliance reporting"],
      path: "/services/network-security",
      pricing: "$1,500 - $8,000/month",
      benefits: ["Proactive threat detection", "24/7 monitoring", "Compliance assurance"]
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with disaster recovery planning",
      icon: "💾",
      features: ["Automated backups", "Cloud storage", "Recovery testing", "RTO optimization"],
      path: "/services/backup-recovery",
      pricing: "$800 - $5,000/month",
      benefits: ["99.99% recovery success", "Automated testing", "Cloud redundancy"]
    },
    {
      title: "IT Asset Management",
      description: "Comprehensive IT asset tracking and lifecycle management",
      icon: "🏷️",
      features: ["Asset tracking", "License management", "Depreciation tracking", "Maintenance scheduling"],
      path: "/services/asset-management",
      pricing: "$500 - $3,000/month",
      benefits: ["Cost optimization", "Compliance tracking", "Maintenance automation"]
    },
    {
      title: "Help Desk Automation",
      description: "AI-powered help desk with ticket routing and knowledge base",
      icon: "🎧",
      features: ["Smart routing", "Knowledge base", "Self-service portal", "Performance analytics"],
      path: "/services/help-desk",
      pricing: "$299 - $1,999/month",
      benefits: ["60% faster resolution", "24/7 support", "Reduced workload"]
    },
    {
      title: "Software License Optimization",
      description: "License cost optimization and compliance management",
      icon: "🔑",
      features: ["Usage analytics", "Cost optimization", "Compliance monitoring", "Renewal management"],
      path: "/services/license-optimization",
      pricing: "$400 - $2,500/month",
      benefits: ["30% cost reduction", "Compliance assurance", "Usage optimization"]
    },
    {
      title: "IT Performance Monitoring",
      description: "Comprehensive IT infrastructure performance monitoring and optimization",
      icon: "⚡",
      features: ["Performance metrics", "Capacity planning", "Optimization recommendations", "Alert system"],
      path: "/services/performance-monitoring",
      pricing: "$600 - $4,000/month",
      benefits: ["Proactive optimization", "Capacity planning", "Performance improvement"]
    },

    // New AI Services
    {
      title: "AI Chatbot Development",
      description: "Custom AI chatbots for customer service and support",
      icon: "🤖",
      features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      path: "/services/ai-chatbot",
      pricing: "$2,000 - $15,000/month",
      benefits: ["24/7 customer support", "Instant responses", "Cost reduction"]
    },
    {
      title: "Predictive Analytics Platform",
      description: "AI-powered predictive analytics for business forecasting",
      icon: "🔮",
      features: ["Data modeling", "Forecasting algorithms", "Visualization tools", "API integration"],
      path: "/services/predictive-analytics",
      pricing: "$3,500 - $25,000/month",
      benefits: ["Data-driven decisions", "Risk mitigation", "Opportunity identification"]
    },
    {
      title: "Computer Vision Solutions",
      description: "AI-powered image and video analysis for various industries",
      icon: "👁️",
      features: ["Object detection", "Image classification", "Video analysis", "Custom training"],
      path: "/services/computer-vision",
      pricing: "$4,000 - $30,000/month",
      benefits: ["Automated analysis", "Quality control", "Process automation"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and language understanding",
      icon: "📝",
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Custom models"],
      path: "/services/nlp",
      pricing: "$2,500 - $20,000/month",
      benefits: ["Text understanding", "Automated processing", "Insight extraction"]
    },
    {
      title: "AI Model Training",
      description: "Custom AI model development and training services",
      icon: "🧠",
      features: ["Data preparation", "Model development", "Training optimization", "Deployment support"],
      path: "/services/ai-training",
      pricing: "$5,000 - $50,000/month",
      benefits: ["Custom solutions", "Performance optimization", "Ongoing support"]
    },
    {
      title: "AI Ethics & Governance",
      description: "AI ethics framework development and governance implementation",
      icon: "⚖️",
      features: ["Ethics framework", "Bias detection", "Compliance monitoring", "Audit trails"],
      path: "/services/ai-ethics",
      pricing: "$1,500 - $12,000/month",
      benefits: ["Ethical AI", "Compliance assurance", "Risk mitigation"]
    },

    // Advanced Innovative Services 2025
    {
      title: "Quantum AI Orchestrator",
      description: "Revolutionary platform that orchestrates quantum computing resources with AI for complex optimization problems",
      icon: "⚛️",
      features: ["Quantum resource orchestration", "AI-powered problem decomposition", "Hybrid classical-quantum workflows", "Real-time quantum simulation"],
      path: "/services/quantum-ai",
      pricing: "$4,999 - $15,000/month",
      benefits: ["Solve problems 1000x faster", "Access to cutting-edge quantum technology", "Competitive advantage in R&D"]
    },
    {
      title: "AI Autonomous Fleet Management",
      description: "Next-generation autonomous fleet management platform for self-driving vehicles and logistics optimization",
      icon: "🚛",
      features: ["Real-time vehicle coordination", "AI route optimization", "Predictive maintenance", "Safety compliance monitoring"],
      path: "/services/ai-fleet",
      pricing: "$2,999 - $8,000/month",
      benefits: ["90% reduction in accidents", "40% fuel efficiency improvement", "24/7 autonomous operation"]
    },
    {
      title: "DeFi Yield Optimization",
      description: "Advanced DeFi yield optimization platform with AI-powered strategy optimization across multiple protocols",
      icon: "💰",
      features: ["Multi-protocol yield farming", "AI-powered strategy optimization", "Risk assessment algorithms", "Automated rebalancing"],
      path: "/services/defi-yield",
      pricing: "$199 - $599/month",
      benefits: ["2-5x higher yields than manual farming", "Automated risk management", "24/7 yield optimization"]
    },
    {
      title: "AI Threat Hunting Platform",
      description: "Next-generation threat hunting platform using AI to detect and neutralize advanced persistent threats",
      icon: "🔍",
      features: ["AI-powered threat detection", "Behavioral analysis", "Zero-day threat prevention", "Automated response"],
      path: "/services/ai-threat-hunting",
      pricing: "$3,999 - $12,000/month",
      benefits: ["99.9% threat detection rate", "Zero false positives", "Automated incident response"]
    },
    {
      title: "Edge AI Inference Platform",
      description: "High-performance edge AI inference platform for real-time AI processing on IoT devices",
      icon: "🌐",
      features: ["Real-time AI inference", "Edge model optimization", "Multi-device coordination", "Low-latency processing"],
      path: "/services/edge-ai",
      pricing: "$899 - $2,999/month",
      benefits: ["10x faster inference", "Reduced cloud costs", "Offline AI processing"]
    },
    {
      title: "Real-Time Streaming Analytics",
      description: "High-performance real-time streaming analytics platform processing millions of events per second",
      icon: "📡",
      features: ["Real-time data processing", "Streaming SQL queries", "Complex event processing", "Real-time dashboards"],
      path: "/services/streaming-analytics",
      pricing: "$2,499 - $8,000/month",
      benefits: ["Instant business insights", "Real-time decision making", "Scalable processing"]
    },
    {
      title: "Multi-Cloud Orchestration",
      description: "Intelligent multi-cloud orchestration platform managing resources across AWS, Azure, and Google Cloud",
      icon: "☁️",
      features: ["Multi-cloud management", "AI-powered optimization", "Cost optimization", "Unified monitoring"],
      path: "/services/multi-cloud",
      pricing: "$3,499 - $12,000/month",
      benefits: ["30% cost reduction", "99.9% uptime guarantee", "Vendor lock-in prevention"]
    },
    {
      title: "AI Model Marketplace",
      description: "Comprehensive AI model marketplace with one-click deployment and pre-trained models",
      icon: "🏪",
      features: ["Pre-trained AI models", "One-click deployment", "Model customization", "Performance monitoring"],
      path: "/services/ai-marketplace",
      pricing: "$599 - $1,999/month",
      benefits: ["Instant AI deployment", "No ML expertise required", "Cost-effective AI adoption"]
    },
    {
      title: "AI Business Intelligence Suite",
      description: "Next-generation BI platform using AI to automatically discover insights and generate reports",
      icon: "📈",
      features: ["AI-powered insights", "Automated reporting", "Predictive analytics", "Natural language queries"],
      path: "/services/ai-bi",
      pricing: "$799 - $2,499/month",
      benefits: ["10x faster insights", "Automated analysis", "Predictive capabilities"]
    },
    {
      title: "AI Marketing Automation Suite",
      description: "Comprehensive AI-powered marketing automation platform for personalized customer experiences",
      icon: "🎯",
      features: ["AI-powered personalization", "Multi-channel automation", "Predictive analytics", "A/B testing automation"],
      path: "/services/ai-marketing",
      pricing: "$699 - $2,999/month",
      benefits: ["3x higher conversion rates", "Personalized experiences", "Automated optimization"]
    },
    {
      title: "AI Customer Experience Platform",
      description: "Intelligent customer experience platform delivering personalized and predictive customer service",
      icon: "💬",
      features: ["AI-powered personalization", "Predictive customer service", "Omnichannel support", "Sentiment analysis"],
      path: "/services/ai-cx",
      pricing: "$899 - $3,499/month",
      benefits: ["40% higher customer satisfaction", "25% reduction in churn", "Proactive customer service"]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization platform using AI for demand forecasting and inventory management",
      icon: "📦",
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier management"],
      path: "/services/ai-supply-chain",
      pricing: "$1,999 - $6,000/month",
      benefits: ["30% inventory reduction", "25% cost savings", "Improved delivery times"]
    },
    {
      title: "AI HR & Talent Platform",
      description: "Intelligent HR platform streamlining recruitment and optimizing employee performance",
      icon: "👥",
      features: ["AI-powered recruitment", "Candidate matching", "Performance analytics", "Employee engagement"],
      path: "/services/ai-hr",
      pricing: "$599 - $2,499/month",
      benefits: ["50% faster hiring", "Better candidate matches", "Improved retention"]
    },
    {
      title: "AI Financial Advisory",
      description: "Intelligent financial advisory platform providing personalized investment advice and portfolio optimization",
      icon: "💼",
      features: ["AI-powered investment advice", "Portfolio optimization", "Risk assessment", "Financial planning"],
      path: "/services/ai-financial",
      pricing: "$299 - $999/month",
      benefits: ["Professional investment advice", "Portfolio optimization", "Risk management"]
    },
    {
      title: "AI Healthcare Analytics",
      description: "Comprehensive healthcare analytics platform improving patient outcomes and clinical decision-making",
      icon: "🏥",
      features: ["Patient outcome prediction", "Clinical decision support", "Operational optimization", "Population health analytics"],
      path: "/services/ai-healthcare",
      pricing: "$3,999 - $15,000/month",
      benefits: ["Improved patient outcomes", "Reduced healthcare costs", "Operational efficiency"]
    },
    {
      title: "AI Adaptive Learning",
      description: "Intelligent adaptive learning platform personalizing education content and optimizing learning outcomes",
      icon: "🎓",
      features: ["Personalized learning paths", "Adaptive content", "Progress tracking", "Performance analytics"],
      path: "/services/ai-learning",
      pricing: "$399 - $1,499/month",
      benefits: ["Personalized learning", "Improved outcomes", "Engagement increase"]
    },
    {
      title: "AI Legal Research",
      description: "Intelligent legal research platform analyzing case law and predicting outcomes using AI",
      icon: "⚖️",
      features: ["AI-powered case analysis", "Legal research automation", "Outcome prediction", "Document analysis"],
      path: "/services/ai-legal",
      pricing: "$799 - $2,999/month",
      benefits: ["90% faster research", "Better case outcomes", "Automated analysis"]
    },
    {
      title: "AI Real Estate Analytics",
      description: "Comprehensive real estate analytics platform predicting market trends and optimizing investments",
      icon: "🏠",
      features: ["Market trend prediction", "Investment optimization", "Property valuation", "Risk assessment"],
      path: "/services/ai-real-estate",
      pricing: "$599 - $2,499/month",
      benefits: ["Better investment decisions", "Market insights", "Risk mitigation"]
    },

    // Specialized Innovative Services 2025
    {
      title: "Metaverse Commerce Platform",
      description: "Next-generation metaverse commerce platform for immersive virtual shopping experiences",
      icon: "🌐",
      features: ["3D virtual store creation", "Virtual product showcases", "Digital asset marketplace", "VR shopping experiences"],
      path: "/services/metaverse-commerce",
      pricing: "$1,299 - $4,999/month",
      benefits: ["Immersive shopping experiences", "24/7 virtual store access", "Reduced physical overhead"]
    },
    {
      title: "Web3 Identity Management",
      description: "Advanced decentralized identity platform with self-sovereign identity and verifiable credentials",
      icon: "🔐",
      features: ["Self-sovereign identity", "Verifiable credentials", "Zero-knowledge proofs", "Privacy-preserving auth"],
      path: "/services/web3-identity",
      pricing: "$799 - $2,999/month",
      benefits: ["User privacy protection", "Reduced identity fraud", "Cross-platform portability"]
    },
    {
      title: "AI Creative Studio",
      description: "Comprehensive AI-powered creative platform generating images, videos, music, and written content",
      icon: "🎨",
      features: ["AI image generation", "Video creation tools", "Music composition", "Text generation"],
      path: "/services/ai-creative",
      pricing: "$599 - $1,999/month",
      benefits: ["10x faster content creation", "Cost-effective production", "Consistent brand voice"]
    },
    {
      title: "Smart City IoT Platform",
      description: "Comprehensive smart city platform managing IoT sensors and urban services optimization",
      icon: "🏙️",
      features: ["IoT sensor management", "Infrastructure monitoring", "Traffic optimization", "Energy management"],
      path: "/services/smart-city",
      pricing: "$4,999 - $25,000/month",
      benefits: ["Improved urban efficiency", "Reduced operational costs", "Better citizen services"]
    },
    {
      title: "AI Robotics & Automation",
      description: "Intelligent robotics platform combining AI with industrial automation for manufacturing",
      icon: "🤖",
      features: ["AI-powered robotics", "Industrial automation", "Quality control", "Predictive maintenance"],
      path: "/services/ai-robotics",
      pricing: "$3,999 - $15,000/month",
      benefits: ["Increased productivity", "Improved quality", "Reduced downtime"]
    },
    {
      title: "AI Biotechnology Research",
      description: "Advanced AI-powered biotechnology platform accelerating drug discovery and genetic research",
      icon: "🧬",
      features: ["AI drug discovery", "Protein engineering", "Genetic analysis", "Molecular modeling"],
      path: "/services/ai-biotech",
      pricing: "$8,999 - $50,000/month",
      benefits: ["10x faster drug discovery", "Reduced research costs", "Improved success rates"]
    },
    {
      title: "Space Technology Analytics",
      description: "Comprehensive space technology platform managing satellite operations and space data analytics",
      icon: "🚀",
      features: ["Satellite operations", "Space data analytics", "Earth observation", "Orbital tracking"],
      path: "/services/space-tech",
      pricing: "$6,999 - $30,000/month",
      benefits: ["Real-time space monitoring", "Global coverage", "Environmental insights"]
    },
    {
      title: "AI Energy Optimization",
      description: "Intelligent energy optimization platform managing smart grids and renewable energy integration",
      icon: "⚡",
      features: ["Smart grid management", "Renewable energy integration", "Energy consumption optimization", "Demand response"],
      path: "/services/ai-energy",
      pricing: "$3,499 - $15,000/month",
      benefits: ["30% energy cost reduction", "Improved grid stability", "Renewable integration"]
    },
    {
      title: "AI Transportation Optimization",
      description: "Comprehensive transportation optimization platform reducing congestion and improving efficiency",
      icon: "🚗",
      features: ["Route optimization", "Traffic prediction", "Public transit optimization", "Fleet management"],
      path: "/services/ai-transportation",
      pricing: "$2,999 - $12,000/month",
      benefits: ["25% travel time reduction", "Improved public transit", "Reduced congestion"]
    },
    {
      title: "AI Precision Agriculture",
      description: "Intelligent precision agriculture platform optimizing crop production and sustainability",
      icon: "🌾",
      features: ["Precision farming", "Crop monitoring", "Soil analysis", "Weather prediction"],
      path: "/services/ai-agriculture",
      pricing: "$899 - $3,999/month",
      benefits: ["20% yield increase", "30% water savings", "Reduced pesticide use"]
    },
    {
      title: "AI Gaming Optimization",
      description: "Advanced AI gaming platform optimizing player experiences and content personalization",
      icon: "🎮",
      features: ["Player behavior analysis", "Content personalization", "Real-time optimization", "Performance monitoring"],
      path: "/services/ai-gaming",
      pricing: "$699 - $2,999/month",
      benefits: ["Increased player engagement", "Higher retention rates", "Better monetization"]
    },
    {
      title: "AI Media Production",
      description: "Comprehensive AI-powered media production platform automating video editing and content creation",
      icon: "🎬",
      features: ["AI video editing", "Content generation", "Media optimization", "Automated workflows"],
      path: "/services/ai-media",
      pricing: "$799 - $3,999/month",
      benefits: ["90% faster production", "Reduced production costs", "Consistent quality"]
    },
    {
      title: "AI Security & Surveillance",
      description: "Advanced AI-powered security platform providing intelligent surveillance and threat detection",
      icon: "🔒",
      features: ["AI threat detection", "Intelligent surveillance", "Facial recognition", "Behavioral analysis"],
      path: "/services/ai-security",
      pricing: "$599 - $2,999/month",
      benefits: ["24/7 security monitoring", "Reduced false alarms", "Faster threat response"]
    },
    {
      title: "AI FinTech Risk Management",
      description: "Comprehensive AI-powered fintech platform for real-time risk assessment and fraud detection",
      icon: "💳",
      features: ["Real-time risk assessment", "Fraud detection", "Regulatory compliance", "Credit scoring"],
      path: "/services/ai-fintech",
      pricing: "$3,999 - $15,000/month",
      benefits: ["99.9% fraud detection", "Real-time risk monitoring", "Automated compliance"]
    },
    {
      title: "AI Telecom Optimization",
      description: "Intelligent telecommunications platform optimizing network performance and capacity planning",
      icon: "📡",
      features: ["Network optimization", "Capacity planning", "Performance monitoring", "Predictive maintenance"],
      path: "/services/ai-telecom",
      pricing: "$4,499 - $20,000/month",
      benefits: ["Improved network performance", "Reduced downtime", "Better capacity utilization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Innovative Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <p>🚀 50+ Cutting-Edge Services • 💡 AI-Powered Solutions • 🌐 Global Reach</p>
              <p>💰 Competitive Pricing • ⚡ Rapid Deployment • 🔒 Enterprise Security</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing:</h4>
                  <p className="text-sm text-gray-300">{service.pricing}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Innovation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cutting-edge services can help drive your success and competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6">
            <Link
              to="/services-showcase"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View Complete Services Portfolio →
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
            <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
