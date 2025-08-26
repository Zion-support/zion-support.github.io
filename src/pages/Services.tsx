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

    // Existing Micro SAAS Services
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

    // NEW INNOVATIVE MICRO SAAS SERVICES
    {
      title: "AI-Powered HR Assistant",
      description: "Intelligent HR automation for recruitment, onboarding, and employee management",
      icon: "👥",
      features: ["Resume screening", "Interview scheduling", "Employee onboarding", "Performance tracking"],
      path: "/services/hr-assistant",
      pricing: "$199 - $799/month",
      benefits: ["70% faster hiring", "Reduced bias", "Improved retention"]
    },
    {
      title: "Smart Inventory Management",
      description: "AI-driven inventory optimization and supply chain management",
      icon: "📦",
      features: ["Demand forecasting", "Automated reordering", "Supplier management", "Real-time tracking"],
      path: "/services/inventory-management",
      pricing: "$149 - $599/month",
      benefits: ["30% inventory reduction", "Zero stockouts", "Cost optimization"]
    },
    {
      title: "AI Legal Document Analyzer",
      description: "Automated legal document review and contract analysis",
      icon: "⚖️",
      features: ["Contract analysis", "Risk assessment", "Compliance checking", "Legal research"],
      path: "/services/legal-ai",
      pricing: "$299 - $1,199/month",
      benefits: ["90% faster review", "Risk identification", "Compliance assurance"]
    },
    {
      title: "Smart Financial Planning",
      description: "AI-powered financial planning and investment advisory platform",
      icon: "💰",
      features: ["Portfolio optimization", "Risk assessment", "Tax planning", "Goal tracking"],
      path: "/services/financial-planning",
      pricing: "$99 - $399/month",
      benefits: ["Optimized returns", "Risk management", "Tax efficiency"]
    },
    {
      title: "AI Sales Intelligence",
      description: "Predictive sales analytics and lead scoring automation",
      icon: "🎯",
      features: ["Lead scoring", "Sales forecasting", "Pipeline analytics", "Performance insights"],
      path: "/services/sales-intelligence",
      pricing: "$179 - $699/month",
      benefits: ["25% increase in conversions", "Better lead quality", "Sales optimization"]
    },
    {
      title: "Smart Customer Feedback",
      description: "AI-powered sentiment analysis and customer feedback management",
      icon: "💬",
      features: ["Sentiment analysis", "Feedback categorization", "Trend identification", "Action recommendations"],
      path: "/services/feedback-management",
      pricing: "$79 - $299/month",
      benefits: ["Real-time insights", "Improved satisfaction", "Proactive support"]
    },
    {
      title: "AI Marketing Attribution",
      description: "Multi-channel marketing attribution and ROI optimization",
      icon: "📈",
      features: ["Cross-channel tracking", "ROI analysis", "Budget optimization", "Performance insights"],
      path: "/services/marketing-attribution",
      pricing: "$199 - $799/month",
      benefits: ["Accurate ROI tracking", "Budget optimization", "Performance improvement"]
    },
    {
      title: "Smart Vendor Management",
      description: "AI-powered vendor selection, performance tracking, and relationship management",
      icon: "🤝",
      features: ["Vendor scoring", "Performance monitoring", "Contract management", "Cost optimization"],
      path: "/services/vendor-management",
      pricing: "$129 - $499/month",
      benefits: ["Better vendor selection", "Cost reduction", "Performance improvement"]
    },
    {
      title: "AI Compliance Monitor",
      description: "Automated compliance monitoring and regulatory reporting",
      icon: "✅",
      features: ["Regulatory tracking", "Compliance alerts", "Audit preparation", "Risk assessment"],
      path: "/services/compliance-monitor",
      pricing: "$249 - $999/month",
      benefits: ["Compliance assurance", "Risk mitigation", "Audit readiness"]
    },
    {
      title: "Smart Energy Management",
      description: "AI-powered energy consumption optimization and sustainability tracking",
      icon: "⚡",
      features: ["Usage optimization", "Cost analysis", "Sustainability tracking", "Predictive maintenance"],
      path: "/services/energy-management",
      pricing: "$179 - $699/month",
      benefits: ["20% energy savings", "Cost reduction", "Sustainability goals"]
    },

    // NEW ADVANCED IT SERVICES
    {
      title: "Quantum Computing Consulting",
      description: "Expert guidance on quantum computing implementation and strategy",
      icon: "⚛️",
      features: ["Quantum strategy", "Use case identification", "Vendor selection", "Implementation planning"],
      path: "/services/quantum-consulting",
      pricing: "$5,000 - $25,000/month",
      benefits: ["Future-ready strategy", "Competitive advantage", "Innovation leadership"]
    },
    {
      title: "Edge Computing Solutions",
      description: "Distributed computing infrastructure for IoT and real-time applications",
      icon: "🌐",
      features: ["Edge deployment", "Latency optimization", "IoT integration", "Real-time processing"],
      path: "/services/edge-computing",
      pricing: "$3,000 - $20,000/month",
      benefits: ["Ultra-low latency", "Real-time processing", "Cost optimization"]
    },
    {
      title: "5G Network Optimization",
      description: "5G network design, deployment, and optimization services",
      icon: "📡",
      features: ["Network planning", "Performance optimization", "Coverage analysis", "Capacity planning"],
      path: "/services/5g-optimization",
      pricing: "$4,000 - $30,000/month",
      benefits: ["Maximum performance", "Optimal coverage", "Future scalability"]
    },
    {
      title: "Blockchain Infrastructure",
      description: "Enterprise blockchain development and deployment services",
      icon: "🔗",
      features: ["Smart contracts", "DApp development", "Consensus mechanisms", "Security auditing"],
      path: "/services/blockchain",
      pricing: "$5,000 - $40,000/month",
      benefits: ["Transparency", "Security", "Automation"]
    },
    {
      title: "IoT Platform Development",
      description: "Custom IoT platform development and device management",
      icon: "🌍",
      features: ["Device management", "Data collection", "Analytics dashboard", "Security framework"],
      path: "/services/iot-platform",
      pricing: "$3,500 - $25,000/month",
      benefits: ["Connected ecosystem", "Data insights", "Operational efficiency"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Modern security architecture implementation and management",
      icon: "🛡️",
      features: ["Identity verification", "Access control", "Network segmentation", "Continuous monitoring"],
      path: "/services/zero-trust",
      pricing: "$4,500 - $35,000/month",
      benefits: ["Enhanced security", "Compliance", "Risk reduction"]
    },

    // NEW ADVANCED AI SERVICES
    {
      title: "AI Ethics & Governance",
      description: "AI ethics framework development and governance implementation",
      icon: "⚖️",
      features: ["Ethics framework", "Bias detection", "Compliance monitoring", "Audit trails"],
      path: "/services/ai-ethics",
      pricing: "$1,500 - $12,000/month",
      benefits: ["Ethical AI", "Compliance assurance", "Risk mitigation"]
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
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and language understanding",
      icon: "📝",
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Custom models"],
      path: "/services/nlp",
      pricing: "$2,500 - $20,000/month",
      benefits: ["Text understanding", "Automated processing", "Insight extraction"]
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
      title: "Predictive Analytics Platform",
      description: "AI-powered predictive analytics for business forecasting",
      icon: "🔮",
      features: ["Data modeling", "Forecasting algorithms", "Visualization tools", "API integration"],
      path: "/services/predictive-analytics",
      pricing: "$3,500 - $25,000/month",
      benefits: ["Data-driven decisions", "Risk mitigation", "Opportunity identification"]
    },
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
      title: "AI-Powered Fraud Detection",
      description: "Advanced fraud detection and prevention using machine learning",
      icon: "🚨",
      features: ["Real-time monitoring", "Pattern recognition", "Risk scoring", "Alert system"],
      path: "/services/fraud-detection",
      pricing: "$3,000 - $25,000/month",
      benefits: ["Fraud prevention", "Cost savings", "Risk reduction"]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization and demand forecasting",
      icon: "🚚",
      features: ["Demand forecasting", "Route optimization", "Inventory management", "Supplier analytics"],
      path: "/services/supply-chain-ai",
      pricing: "$4,000 - $30,000/month",
      benefits: ["Cost reduction", "Efficiency improvement", "Risk mitigation"]
    },
    {
      title: "AI-Powered Quality Control",
      description: "Automated quality control and defect detection systems",
      icon: "🔍",
      features: ["Visual inspection", "Defect detection", "Quality metrics", "Process optimization"],
      path: "/services/quality-control-ai",
      pricing: "$2,500 - $20,000/month",
      benefits: ["Quality improvement", "Cost reduction", "Process efficiency"]
    },
    {
      title: "AI Customer Segmentation",
      description: "Intelligent customer segmentation and personalized marketing",
      icon: "👥",
      features: ["Behavioral analysis", "Segmentation models", "Personalization", "Campaign optimization"],
      path: "/services/customer-segmentation",
      pricing: "$1,500 - $12,000/month",
      benefits: ["Better targeting", "Higher conversions", "ROI improvement"]
    },

    // NEW EMERGING TECHNOLOGY SERVICES
    {
      title: "Metaverse Development",
      description: "Virtual and augmented reality platform development",
      icon: "🥽",
      features: ["VR/AR development", "3D modeling", "Interactive experiences", "Platform integration"],
      path: "/services/metaverse",
      pricing: "$8,000 - $60,000/month",
      benefits: ["Innovation leadership", "New revenue streams", "Customer engagement"]
    },
    {
      title: "Web3 Development",
      description: "Decentralized application development and blockchain integration",
      icon: "🌐",
      features: ["DApp development", "Smart contracts", "DeFi solutions", "NFT platforms"],
      path: "/services/web3",
      pricing: "$6,000 - $45,000/month",
      benefits: ["Decentralization", "Innovation", "New business models"]
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Next-generation cybersecurity using artificial intelligence",
      icon: "🤖🔒",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Predictive security"],
      path: "/services/ai-cybersecurity",
      pricing: "$5,000 - $40,000/month",
      benefits: ["Proactive protection", "Zero-day prevention", "Automated response"]
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Post-quantum cryptography implementation and migration",
      icon: "🔐",
      features: ["Algorithm selection", "Implementation", "Testing", "Migration planning"],
      path: "/services/quantum-crypto",
      pricing: "$4,000 - $30,000/month",
      benefits: ["Future security", "Quantum resistance", "Compliance"]
    },
    {
      title: "AI-Powered Healthcare",
      description: "Healthcare AI solutions for diagnosis and patient care",
      icon: "🏥",
      features: ["Medical imaging", "Diagnostic assistance", "Patient monitoring", "Drug discovery"],
      path: "/services/healthcare-ai",
      pricing: "$8,000 - $60,000/month",
      benefits: ["Improved diagnosis", "Better care", "Cost reduction"]
    },
    {
      title: "Green Tech Solutions",
      description: "Sustainable technology solutions for environmental impact",
      icon: "🌱",
      features: ["Carbon tracking", "Energy optimization", "Sustainability reporting", "Green infrastructure"],
      path: "/services/green-tech",
      pricing: "$3,000 - $25,000/month",
      benefits: ["Environmental impact", "Cost savings", "Compliance"]
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
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your success
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
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
