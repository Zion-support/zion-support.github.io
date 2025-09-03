import React from "react";
import Link from "next/link";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Globe, 
  Lock, 
  Cpu, 
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Star,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Headphones
} from "lucide-react";

export default function ComprehensiveMicroSaasShowcase() {
  const services = [
    {
      id: "ai-legal-analyzer",
      title: "Zion AI Legal Document Analyzer",
      category: "AI & Legal Tech",
      price: "$599/month",
      description: "Advanced AI-powered legal document analysis with 99.2% accuracy for contract review, risk assessment, and compliance checking.",
      features: [
        "AI-powered contract analysis",
        "Legal risk assessment",
        "Automated compliance checking",
        "Multi-language support",
        "Real-time summarization"
      ],
      benefits: [
        "Reduce legal review time by 90%",
        "Cut legal costs by 70%",
        "Improve compliance accuracy by 95%"
      ],
      roi: "400-600%",
      link: "/services/ai-legal-document-analyzer"
    },
    {
      id: "quantum-secure-communication",
      title: "Zion Quantum-Secure Communication Platform",
      category: "Cybersecurity",
      price: "$1,299/month",
      description: "Next-generation quantum-secured communication using QKD and post-quantum cryptography for unbreakable enterprise encryption.",
      features: [
        "Quantum key distribution (QKD)",
        "Post-quantum cryptography",
        "End-to-end encryption",
        "Real-time threat detection",
        "Compliance reporting"
      ],
      benefits: [
        "Unbreakable encryption",
        "Future-proof security",
        "Regulatory compliance"
      ],
      roi: "500-800%",
      link: "/services/quantum-secure-communication"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Revolutionary AI Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Comprehensive Micro SAAS Solutions
          </h1>
          <p className="text-indigo-100 text-xl mb-8">
            Transform your business with our suite of 20+ cutting-edge AI micro SAAS services. 
            From legal tech to quantum computing, we provide real solutions with proven ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>20+ Revolutionary Services</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>400-1000% ROI</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Revolutionary Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-semibold text-green-600">ROI: {service.roi}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}