import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  BarChart3,
  Cloud,
  Lock,
  Database,
  Globe
} from 'lucide-react';

// Service comparison data
const SERVICE_COMPARISONS = [
  {
    category: "AI & Automation",
    services: [
      {
        name: "AI Business Process Automation",
        starter: { price: "$2,999", features: ["Basic workflow automation", "Email automation", "Document processing", "Standard support"] },
        professional: { price: "$4,999", features: ["Advanced AI capabilities", "Custom integrations", "Priority support", "Training sessions", "Analytics dashboard"] },
        enterprise: { price: "$7,999+", features: ["Full AI suite", "Custom development", "24/7 support", "On-site training", "SLA guarantees", "White-label options"] }
      },
      {
        name: "AI Customer Intelligence",
        starter: { price: "$3,999", features: ["Basic customer analytics", "Churn prediction", "Email support"] },
        professional: { price: "$5,999", features: ["Advanced analytics", "Personalization engine", "Priority support", "Custom dashboards", "API access"] },
        enterprise: { price: "$8,999+", features: ["Full customer intelligence suite", "Custom algorithms", "Dedicated support", "Advanced integrations", "Compliance features"] }
      }
    ]
  },
  {
    category: "Cybersecurity & Compliance",
    services: [
      {
        name: "AI Threat Detection System",
        starter: { price: "$5,999", features: ["Basic threat detection", "Email alerts", "Standard support"] },
        professional: { price: "$7,999", features: ["Advanced threat detection", "Behavioral analysis", "Priority support", "Custom rules", "Training"] },
        enterprise: { price: "$12,999+", features: ["Full security suite", "Custom development", "24/7 monitoring", "Dedicated team", "Compliance reporting"] }
      },
      {
        name: "Compliance Management Platform",
        starter: { price: "$2,999", features: ["Basic compliance monitoring", "GDPR support", "Email support"] },
        professional: { price: "$4,999", features: ["Multi-framework support", "Automated reporting", "Priority support", "Custom workflows", "Training"] },
        enterprise: { price: "$6,999+", features: ["Full compliance suite", "Custom frameworks", "Dedicated support", "Advanced integrations", "Audit preparation"] }
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    services: [
      {
        name: "Cloud Cost Optimization",
        starter: { price: "$1,999", features: ["Basic cost analysis", "Resource optimization", "Email support"] },
        professional: { price: "$3,999", features: ["Advanced optimization", "Automated scaling", "Priority support", "Custom policies", "Training"] },
        enterprise: { price: "$5,999+", features: ["Full optimization suite", "Custom algorithms", "Dedicated support", "Advanced analytics", "Multi-cloud support"] }
      },
      {
        name: "DevOps Automation Platform",
        starter: { price: "$2,999", features: ["Basic CI/CD", "Automated testing", "Email support"] },
        professional: { price: "$4,999", features: ["Advanced automation", "Custom pipelines", "Priority support", "Advanced testing", "Training"] },
        enterprise: { price: "$7,999+", features: ["Full DevOps suite", "Custom development", "Dedicated support", "Advanced monitoring", "Multi-environment support"] }
      }
    ]
  },
  {
    category: "Data & Analytics",
    services: [
      {
        name: "Data Quality Platform",
        starter: { price: "$3,999", features: ["Basic data validation", "Data cleaning", "Email support"] },
        professional: { price: "$5,999", features: ["Advanced validation", "Custom rules", "Priority support", "Advanced analytics", "Training"] },
        enterprise: { price: "$8,999+", features: ["Full data suite", "Custom algorithms", "Dedicated support", "Advanced governance", "Compliance features"] }
      },
      {
        name: "Real-Time Analytics Dashboard",
        starter: { price: "$1,999", features: ["Basic dashboard", "Real-time data", "Email support"] },
        professional: { price: "$3,999", features: ["Advanced dashboards", "Custom visualizations", "Priority support", "Advanced analytics", "Training"] },
        enterprise: { price: "$5,999+", features: ["Full analytics suite", "Custom development", "Dedicated support", "Advanced integrations", "White-label options"] }
      }
    ]
  }
];

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState("AI & Automation");

  const selectedCategoryData = SERVICE_COMPARISONS.find(cat => cat.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Comparison - Zion Tech Group"
        description="Compare our comprehensive range of AI, cybersecurity, cloud, and data analytics services. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services Comparison
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Compare our comprehensive range of technology services and find the perfect solution for your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SERVICE_COMPARISONS.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="container mx-auto px-4 py-16">
        {selectedCategoryData && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {selectedCategoryData.category} Services
            </h2>
            
            {selectedCategoryData.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {service.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Starter Plan */}
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
                      <div className="text-3xl font-bold text-cyan-400">{service.starter.price}</div>
                      <p className="text-slate-400 text-sm">Perfect for small businesses</p>
                    </div>
                    <ul className="space-y-3">
                      {service.starter.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Professional Plan */}
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Professional</h4>
                      <div className="text-3xl font-bold text-blue-400">{service.professional.price}</div>
                      <p className="text-slate-400 text-sm">Ideal for growing companies</p>
                    </div>
                    <ul className="space-y-3">
                      {service.professional.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
                      <div className="text-3xl font-bold text-purple-400">{service.enterprise.price}</div>
                      <p className="text-slate-400 text-sm">For large organizations</p>
                    </div>
                    <ul className="space-y-3">
                      {service.enterprise.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team of experts can create a tailored solution that perfectly fits your business requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              Request Custom Quote
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-slate-400">+1 302 464 0950</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-slate-400">kleber@ziontechgroup.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}