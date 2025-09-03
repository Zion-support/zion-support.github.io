<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Link,; Shield,; Eye,; CheckCircle,; Clock,; DollarSign,; Users,; Globe,; Lock,; Brain,; ArrowRight,; Star,; TrendingUp,; Award,; Phone,; Mail,; MapPin,; ExternalLink,; BarChart3,; Zap,; Database;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function BlockchainSupplyChainTransparency() {; const features = [; "End-to-end supply chain traceability with blockchain",";"Real-time product journey tracking from source to consumer",";"Smart contracts for automated compliance verification",";"Immutable audit trail for regulatory compliance",";"Supplier performance scoring and verification",";"Sustainability and ESG metrics tracking",";"Counterfeit detection and prevention",";"Integration with IoT sensors and RFID systems";";" ];";" ;"";" const benefits = [";"Increase supply chain transparency by 100%",";"Reduce compliance costs by 40-60%",";"Improve supplier accountability and performance",";"Enable real-time risk assessment and mitigation",";"Build consumer trust and brand loyalty",";"Meet regulatory requirements automatically"; ];" ;";" const pricing = [;";" {;";"";" plan: "Starter",";"";" price: "$1,499",";"";" period: "/month",;"";" features: [";"Up to 1,000 products tracked",";"Basic blockchain traceability",";"Standard compliance reporting",";"Email support",";"Basic analytics dashboard";" ];";" },;";" {;";"";" plan: "Professional",";"";" price: "$3,999",";"";" period: "/month",;"";" features: [";"Up to 10,000 products tracked",";"Advanced traceability features",";"Smart contract automation",";"Priority support",";"Advanced analytics",";"API access";" ];";" },;";" {;";"";" plan: "Enterprise",";"";" price: "$8,999",";"";" period: "/month",;"";" features: [";"Unlimited products tracked",";"Custom blockchain solutions",";"Dedicated support team",";"Full transparency suite",";"White-label solution",";"Custom integrations"; ];" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="Blockchain Supply Chain Transparency Platform - Zion Tech Group";"";" description="Revolutionary blockchain-based supply chain transparency platform with end-to-end traceability, smart contracts, and automated compliance.Increase transparency by 100% and reduce compliance costs by 40-60%.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center";"";" >";"";" <div className="flex justify-center mb-6">";"";" <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full">";"";" <Link className="h-8 w-8 text-white" />;";" </div>;"";" </div>";"";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;";" Blockchain Supply Chain Transparency Platform;"";" </h1>";"";" <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Transform your supply chain with blockchain-powered transparency, end-to-end traceability,;";" and automated compliance.Build trust with consumers and meet regulatory requirements seamlessly.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function BlockchainSupplyChainTransparency() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Blockchain Supply Chain Transparency Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Blockchain Supply Chain Transparency Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your blockchain supply chain transparency operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Blockchain Supply Chain Transparency Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive blockchain supply chain transparency solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Blockchain Supply Chain Transparency?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered blockchain supply chain transparency platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
