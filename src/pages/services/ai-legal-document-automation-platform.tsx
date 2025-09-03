<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; FileText,; Shield,; Zap,; Users,; CheckCircle,; ArrowRight,; Scale,; Clock,; DollarSign,; Star,; Award,; Globe,; Lock,; BarChart3,; Target,; TrendingUp,; Phone,; Mail,; MapPin;  } from 'lucide-react'; ; const AILegalDocumentAutomationPlatform = () => {; const features = [; {; icon: <FileText className="w-6 h-6" />,";"";" title: "Smart Document Analysis",";"";" description: "AI-powered analysis of legal documents with 99.9% accuracy for contract review, compliance checking, and risk assessment.";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "Compliance Automation",";"";" description: "Automated compliance checking against regulatory frameworks including GDPR, SOX, HIPAA, and industry-specific requirements.";";" },;";" {;";"";" icon: <Zap className="w-6 h-6" />,";"";" title: "Contract Generation",";"";" description: "Intelligent contract generation with customizable templates, clause libraries, and automated negotiation support.";";" },;";" {;";"";" icon: <Users className="w-6 h-6" />,";"";" title: "Collaborative Workflow",";"";" description: "Multi-user collaboration with role-based access control, approval workflows, and audit trails.";";" },;";" {;";"";" icon: <CheckCircle className="w-6 h-6" />,";"";" title: "Risk Assessment",";"";" description: "AI-powered risk identification and scoring for contracts, legal documents, and business agreements.";";" },;";" {;";"";" icon: <BarChart3 className="w-6 h-6" />,";"";" title: "Analytics Dashboard",";"";" description: "Comprehensive analytics on document processing, compliance status, and legal risk metrics."; }; ];" ;";" const pricingPlans = [;";" {;";"";" name: "Starter",";"";" price: "$299",";"";" period: "/month",";"";" description: "Perfect for small law firms and solo practitioners",;"";" features: [";"Up to 100 documents/month",";"Basic AI analysis",";"Standard templates",";"Email support",";"Basic compliance checking"; ],;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$799",";"";" period: "/month",";"";" description: "Ideal for growing law firms and legal departments",;"";" features: [";"Up to 500 documents/month",";"Advanced AI analysis",";"Custom templates",";"Priority support",";"Full compliance suite",";"Risk assessment tools",";"Collaborative workflows"; ],;" popular: true;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$1,999",";"";" period: "/month",";"";" description: "For large law firms and corporate legal departments",;"";" features: [";"Unlimited documents",";"Enterprise AI models",";"Custom integrations",";"Dedicated support",";"Advanced analytics",";"API access",";"White-label options",";"Custom training"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;";"";" icon: <Clock className="w-8 h-8" />,";"";" title: "90% Time Savings",";"";" description: "Reduce document review time from hours to minutes with AI automation";";" },;";" {;";"";" icon: <DollarSign className="w-8 h-8" />,";"";" title: "Cost Reduction",";"";" description: "Cut legal document processing costs by up to 70%";";" },;";" {;";"";" icon: <Shield className="w-8 h-8" />,";"";" title: "Risk Mitigation",";"";" description: "Identify and prevent legal risks before they become issues";";" },;";" {;";"";" icon: <TrendingUp className="w-8 h-8" />,";"";" title: "Scalability",";"";" description: "Handle increasing document volumes without proportional cost increases";" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" {}";"";" <section className="relative py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="flex items-center justify-center mb-6">";"";" <Scale className="w-12 h-12 text-blue-500 mr-3" />";"";" <h1 className="text-4xl md:text-6xl font-bold text-white">;"";" AI Legal Document";"";" <span className="text-blue-500 block">Automation Platform</span>;";" </h1>;"";" </div>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;";" Transform your legal practice with AI-powered document automation.;";" Generate, analyze, and manage legal documents with unprecedented speed and accuracy.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiLegalDocumentAutomationPlatform() {
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
            AI-Powered Ai Legal Document Automation Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Legal Document Automation Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai legal document automation platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Legal Document Automation Platform Features</h2>
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
                <p className="text-gray-600">Comprehensive ai legal document automation platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Legal Document Automation Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai legal document automation platform platform today.
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
