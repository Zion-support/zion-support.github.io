import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Rocket, Target, Brain, Cloud, Zap } from 'lucide-react';

export default function ServicesShowcase() {
  const serviceCategories = [
    {
      title: "AI-Powered Micro SAAS Solutions",
      subtitle: "Intelligent software-as-a-service solutions that automate and optimize business processes",
      icon: "🤖",
      services: [
        {
          name: "AI-Powered Content Generator",
          description: "Revolutionary content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing materials.",
          features: [
            "Multi-language content generation",
            "SEO optimization algorithms",
            "Brand voice consistency",
            "Content scheduling automation",
            "Performance analytics"
          ],
          pricing: "$99 - $499/month",
          benefits: [
            "10x faster content creation",
            "SEO-optimized output",
            "24/7 content generation",
            "Cost-effective marketing",
            "Improved engagement rates"
          ],
          marketPosition: "Leading AI content generation platform",
          competitors: ["Jasper", "Copy.ai", "Writesonic"],
          competitiveAdvantage: "Advanced AI algorithms, comprehensive automation, and brand voice consistency"
        }
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      icon: Shield,
      services: [
        {
          name: "Cybersecurity Services",
          description: "Comprehensive cybersecurity solutions for modern threats",
          href: "/services/cybersecurity",
          features: ["Threat Detection", "Vulnerability Assessment", "Incident Response"]
        },
        {
          name: "SOC2 Compliance Automation",
          description: "Automated SOC2 compliance and audit preparation",
          href: "/soc2-compliance-automation",
          features: ["Compliance Monitoring", "Audit Preparation", "Risk Management"]
        },
        {
          name: "Zero Trust Architecture",
          description: "Modern zero trust security implementation",
          href: "/zero-trust-network-architecture",
          features: ["Identity Verification", "Access Control", "Continuous Monitoring"]
        }
      ]
    },
    {
      category: "Emerging Technologies",
      icon: Rocket,
      services: [
        {
          name: "Quantum Technology",
          description: "Next-generation quantum computing solutions",
          href: "/quantum-technology",
          features: ["Quantum Algorithms", "Quantum Security", "Research & Development"]
        },
        {
          name: "Space Technology",
          description: "Innovative space technology and satellite solutions",
          href: "/space-tech",
          features: ["Satellite Systems", "Space Analytics", "Ground Station Solutions"]
        },
        {
          name: "5G Enterprise Solutions",
          description: "Enterprise-grade 5G network optimization",
          href: "/5g-enterprise-solutions",
          features: ["Network Optimization", "Edge Computing", "IoT Integration"]
        }
      ]
    },
    {
      category: "Specialized Solutions",
      icon: Target,
      services: [
        {
          name: "AI-Powered IT Asset Management",
          description: "Intelligent IT asset tracking and management",
          href: "/ai-powered-it-asset-management",
          features: ["Asset Tracking", "Predictive Maintenance", "Cost Optimization"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of innovative technology solutions designed to transform your business.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title || category.category}</h2>
              </div>
              
              {category.subtitle && (
                <p className="text-gray-600 mb-6">{category.subtitle}</p>
              )}

              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    
                    {service.features && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.href && (
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
