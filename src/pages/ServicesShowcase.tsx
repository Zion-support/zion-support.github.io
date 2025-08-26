import React from 'react';
import { Link } from 'react-router-dom';

const ServicesShowcase: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Solutions",
      description: "Cutting-edge artificial intelligence services that transform your business",
      services: [
        {
          name: "AI Solutions",
          description: "Comprehensive AI and machine learning solutions",
          pricing: "$2,500 - $15,000/month",
          features: ["Machine Learning", "Predictive Analytics", "NLP", "Computer Vision"],
          benefits: ["30% efficiency increase", "Real-time decisions", "Scalable infrastructure"]
        },
        {
          name: "AI-Powered Content Generator",
          description: "Automated content creation for all your marketing needs",
          pricing: "$99 - $499/month",
          features: ["Multi-language", "SEO optimization", "Brand consistency", "Scheduling"],
          benefits: ["10x faster creation", "SEO-optimized", "24/7 generation"]
        },
        {
          name: "AI Chatbot Development",
          description: "Custom AI chatbots for customer service",
          pricing: "$2,000 - $15,000/month",
          features: ["Natural language", "Multi-language", "API integration", "Analytics"],
          benefits: ["24/7 support", "Instant responses", "Cost reduction"]
        },
        {
          name: "Predictive Analytics Platform",
          description: "AI-powered business forecasting and insights",
          pricing: "$3,500 - $25,000/month",
          features: ["Data modeling", "Forecasting", "Visualization", "API access"],
          benefits: ["Data-driven decisions", "Risk mitigation", "Opportunity identification"]
        },
        {
          name: "Computer Vision Solutions",
          description: "AI-powered image and video analysis",
          pricing: "$4,000 - $30,000/month",
          features: ["Object detection", "Classification", "Video analysis", "Custom training"],
          benefits: ["Automated analysis", "Quality control", "Process automation"]
        },
        {
          name: "Natural Language Processing",
          description: "Advanced text analysis and language understanding",
          pricing: "$2,500 - $20,000/month",
          features: ["Text analysis", "Sentiment analysis", "Translation", "Custom models"],
          benefits: ["Text understanding", "Automated processing", "Insight extraction"]
        },
        {
          name: "AI Model Training",
          description: "Custom AI model development and training",
          pricing: "$5,000 - $50,000/month",
          features: ["Data preparation", "Model development", "Training optimization", "Deployment"],
          benefits: ["Custom solutions", "Performance optimization", "Ongoing support"]
        },
        {
          name: "AI Ethics & Governance",
          description: "AI ethics framework and governance implementation",
          pricing: "$1,500 - $12,000/month",
          features: ["Ethics framework", "Bias detection", "Compliance monitoring", "Audit trails"],
          benefits: ["Ethical AI", "Compliance assurance", "Risk mitigation"]
        }
      ]
    },
    {
      title: "Micro SAAS Services",
      description: "Affordable, specialized software solutions for modern businesses",
      services: [
        {
          name: "Smart Invoice Management",
          description: "Automated invoice processing and payment tracking",
          pricing: "$79 - $299/month",
          features: ["OCR processing", "Automated approvals", "Payment integration", "Analytics"],
          benefits: ["90% time reduction", "Real-time tracking", "Compliance automation"]
        },
        {
          name: "Customer Success Automation",
          description: "AI-driven customer onboarding and retention",
          pricing: "$149 - $599/month",
          features: ["Onboarding automation", "Predictive churn", "Ticket routing", "Success metrics"],
          benefits: ["25% retention increase", "Automated onboarding", "Proactive support"]
        },
        {
          name: "Data Analytics Dashboard",
          description: "Real-time business intelligence and KPI monitoring",
          pricing: "$199 - $799/month",
          features: ["Real-time metrics", "Custom dashboards", "Data visualization", "Alerts"],
          benefits: ["Data-driven decisions", "Real-time insights", "Custom reporting"]
        },
        {
          name: "Email Marketing Automation",
          description: "Intelligent email campaigns with personalization",
          pricing: "$89 - $399/month",
          features: ["Behavioral triggers", "A/B testing", "Personalization", "Analytics"],
          benefits: ["3x higher engagement", "Automated campaigns", "ROI tracking"]
        },
        {
          name: "Project Management AI",
          description: "AI-powered project planning and resource management",
          pricing: "$129 - $549/month",
          features: ["Smart scheduling", "Resource optimization", "Risk prediction", "Progress tracking"],
          benefits: ["20% faster delivery", "Resource optimization", "Risk mitigation"]
        }
      ]
    },
    {
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and automated development operations",
      services: [
        {
          name: "Cloud & DevOps",
          description: "Comprehensive cloud and DevOps solutions",
          pricing: "$1,800 - $12,000/month",
          features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"],
          benefits: ["50% deployment reduction", "99.9% uptime", "Cost optimization"]
        },
        {
          name: "IT Infrastructure",
          description: "Complete IT infrastructure management",
          pricing: "$2,200 - $18,000/month",
          features: ["Network Management", "System Administration", "Data Center Operations", "Performance Optimization"],
          benefits: ["Proactive maintenance", "Performance optimization", "Scalable solutions"]
        }
      ]
    },
    {
      title: "Cybersecurity & IT Security",
      description: "Enterprise-grade security solutions and comprehensive protection",
      services: [
        {
          name: "Cybersecurity",
          description: "Complete cybersecurity protection suite",
          pricing: "$3,000 - $20,000/month",
          features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Security Training"],
          benefits: ["24/7 monitoring", "Zero-day protection", "Compliance assurance"]
        },
        {
          name: "Network Security Monitoring",
          description: "24/7 network security monitoring and threat detection",
          pricing: "$1,500 - $8,000/month",
          features: ["Real-time monitoring", "Threat intelligence", "Incident response", "Compliance reporting"],
          benefits: ["Proactive detection", "24/7 monitoring", "Compliance assurance"]
        },
        {
          name: "Data Backup & Recovery",
          description: "Automated backup solutions with disaster recovery",
          pricing: "$800 - $5,000/month",
          features: ["Automated backups", "Cloud storage", "Recovery testing", "RTO optimization"],
          benefits: ["99.99% recovery success", "Automated testing", "Cloud redundancy"]
        }
      ]
    },
    {
      title: "IT Management & Support",
      description: "Comprehensive IT management and support services",
      services: [
        {
          name: "IT Asset Management",
          description: "Complete IT asset tracking and lifecycle management",
          pricing: "$500 - $3,000/month",
          features: ["Asset tracking", "License management", "Depreciation tracking", "Maintenance scheduling"],
          benefits: ["Cost optimization", "Compliance tracking", "Maintenance automation"]
        },
        {
          name: "Help Desk Automation",
          description: "AI-powered help desk with intelligent routing",
          pricing: "$299 - $1,999/month",
          features: ["Smart routing", "Knowledge base", "Self-service portal", "Performance analytics"],
          benefits: ["60% faster resolution", "24/7 support", "Reduced workload"]
        },
        {
          name: "Software License Optimization",
          description: "License cost optimization and compliance management",
          pricing: "$400 - $2,500/month",
          features: ["Usage analytics", "Cost optimization", "Compliance monitoring", "Renewal management"],
          benefits: ["30% cost reduction", "Compliance assurance", "Usage optimization"]
        },
        {
          name: "IT Performance Monitoring",
          description: "Comprehensive performance monitoring and optimization",
          pricing: "$600 - $4,000/month",
          features: ["Performance metrics", "Capacity planning", "Optimization recommendations", "Alert system"],
          benefits: ["Proactive optimization", "Capacity planning", "Performance improvement"]
        }
      ]
    },
    {
      title: "Digital Transformation & Consulting",
      description: "Strategic consulting and end-to-end transformation services",
      services: [
        {
          name: "Digital Transformation",
          description: "Complete digital transformation consulting and implementation",
          pricing: "$5,000 - $50,000/month",
          features: ["Process Automation", "Workflow Optimization", "Change Management", "Technology Strategy"],
          benefits: ["End-to-end transformation", "ROI optimization", "Change management support"]
        },
        {
          name: "Consulting",
          description: "Strategic technology consulting and advisory",
          pricing: "$200 - $500/hour",
          features: ["Technology Assessment", "Strategic Planning", "Vendor Selection", "Project Management"],
          benefits: ["Expert guidance", "Strategic insights", "Risk mitigation"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Services Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of innovative technology solutions designed to transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-white/5' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing:</h4>
                    <p className="text-sm text-gray-300 font-semibold">{service.pricing}</p>
                  </div>

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
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Get Started
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
          <div className="text-sm text-gray-400 space-y-1">
            <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
            <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;