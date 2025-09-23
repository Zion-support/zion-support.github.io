import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveServices2025: React.FC = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      services: [
        {
          name: "AI Sales Copilot",
          description: "Automate prospecting, personalize outreach, and accelerate pipeline with conversational AI",
          features: ["Lead Qualification", "Personalized Messaging", "Pipeline Automation", "Performance Analytics"],
          price: "Starting at $2,999/month"
        },
        {
          name: "Autonomous Business Agents",
          description: "Self-learning AI systems that handle complex business processes autonomously",
          features: ["Process Automation", "Decision Making", "Learning & Adaptation", "24/7 Operations"],
          price: "Starting at $5,999/month"
        },
        {
          name: "AI Content Generation",
          description: "Generate high-quality content at scale using advanced AI models",
          features: ["Blog Posts", "Social Media", "Product Descriptions", "Marketing Copy"],
          price: "Starting at $1,999/month"
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: "☁️",
      services: [
        {
          name: "Cloud Cost Optimizer",
          description: "Cut multi-cloud spend with automated rightsizing, scheduling, and anomaly detection",
          features: ["Cost Analysis", "Auto Rightsizing", "Scheduling Optimization", "Anomaly Detection"],
          price: "Starting at $3,499/month"
        },
        {
          name: "Hybrid Cloud Migration",
          description: "Seamlessly migrate your infrastructure to hybrid cloud environments",
          features: ["Assessment", "Migration Planning", "Zero Downtime", "Post-Migration Support"],
          price: "Starting at $15,000"
        },
        {
          name: "DevOps Automation",
          description: "Automate your entire development and deployment pipeline",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Auto-scaling"],
          price: "Starting at $4,999/month"
        }
      ]
    },
    {
      category: "Cybersecurity",
      icon: "🛡️",
      services: [
        {
          name: "Cyber Threat Intelligence Hub",
          description: "Unify threat feeds and correlate signals with AI to reduce alert fatigue",
          features: ["Threat Detection", "Risk Assessment", "Incident Response", "Compliance Monitoring"],
          price: "Starting at $7,999/month"
        },
        {
          name: "Zero Trust Security",
          description: "Implement comprehensive zero trust architecture for your organization",
          features: ["Identity Verification", "Network Segmentation", "Access Control", "Continuous Monitoring"],
          price: "Starting at $12,999/month"
        },
        {
          name: "Security Operations Center (SOC)",
          description: "24/7 security monitoring and incident response services",
          features: ["24/7 Monitoring", "Incident Response", "Threat Hunting", "Security Analytics"],
          price: "Starting at $25,000/month"
        }
      ]
    },
    {
      category: "Blockchain & Web3",
      icon: "⛓️",
      services: [
        {
          name: "Smart Contract Development",
          description: "Build secure and efficient smart contracts for your business needs",
          features: ["Contract Design", "Security Auditing", "Testing", "Deployment"],
          price: "Starting at $8,999"
        },
        {
          name: "DeFi Protocol Development",
          description: "Create decentralized finance protocols and applications",
          features: ["Protocol Design", "Tokenomics", "Frontend Development", "Security Auditing"],
          price: "Starting at $25,000"
        },
        {
          name: "NFT Marketplace Development",
          description: "Build custom NFT marketplaces with advanced features",
          features: ["Custom Marketplace", "Payment Integration", "User Management", "Analytics Dashboard"],
          price: "Starting at $15,000"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 COMPREHENSIVE SERVICES 2025
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our cutting-edge technology services. From AI and blockchain to cloud infrastructure and cybersecurity.
          </p>
        </div>

        {/* Services by Category */}
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.category}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-purple-600 mb-4">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Get Started
                    </button>
                    <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;