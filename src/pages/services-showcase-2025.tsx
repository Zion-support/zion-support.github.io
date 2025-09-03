<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Brain,; Scale,; Heart,; TrendingUp,; Truck,; Shield,; Users,; CheckCircle,; ArrowRight,; Star,; Award,; Globe,; Lock,; BarChart3,; Target,; Zap,; Phone,; Mail,; MapPin,; FileText,; Activity,; Database,; Eye,; Settings;  } from 'lucide-react'; ; const ServicesShowcase2025 = () => {; const featuredServices = [; {; icon: <Scale className="w-12 h-12" />,";"";" title: "AI Legal Document Automation Platform",";"";" description: "Transform your legal practice with AI-powered document automation.Generate, analyze, and manage legal documents with unprecedented speed and accuracy.",";"";" features: ["Smart Document Analysis", "Compliance Automation", "Contract Generation", "Risk Assessment"],";"";" pricing: "Starting at $299/month",";"";" color: "from-blue-500 to-blue-600",";"";" link: "/services/ai-legal-document-automation-platform";";" },;";" {;";"";" icon: <Heart className="w-12 h-12" />,";"";" title: "AI Healthcare Analytics Platform",";"";" description: "Revolutionize healthcare delivery with AI-powered analytics.Monitor patients in real-time, predict health outcomes, and deliver personalized care.",";"";" features: ["Real-time Patient Monitoring", "Predictive Diagnostics", "HIPAA Compliant Security", "Care Team Collaboration"],";"";" pricing: "Starting at $499/month",";"";" color: "from-red-500 to-red-600",";"";" link: "/services/ai-healthcare-analytics-platform";";" },;";" {;";"";" icon: <TrendingUp className="w-12 h-12" />,";"";" title: "AI Financial Trading Platform",";"";" description: "Revolutionize your trading with AI-powered market analysis, predictive signals, and automated portfolio management.",";"";" features: ["AI-Powered Market Analysis", "Predictive Trading Signals", "Risk Management", "Portfolio Optimization"],";"";" pricing: "Starting at $99/month",";"";" color: "from-green-500 to-green-600",";"";" link: "/services/ai-financial-trading-platform";";" },;";" {;";"";" icon: <Truck className="w-12 h-12" />,";"";" title: "AI Supply Chain Optimization Platform",";"";" description: "Transform your supply chain with AI-powered optimization.Predict demand, optimize routes, and manage inventory with precision.",";"";" features: ["AI-Powered Demand Forecasting", "Route Optimization", "Risk Management", "Inventory Optimization"],";"";" pricing: "Starting at $399/month",";"";" color: "from-blue-500 to-blue-600",";"";" link: "/services/ai-supply-chain-optimization-platform";";" },;";" {;";"";" icon: <Home className="w-12 h-12" />,";"";" title: "AI Real Estate Analytics Platform",";"";" description: "Transform your real estate investments with AI-powered market analysis, predictive valuations, and portfolio optimization.",";"";" features: ["AI-Powered Market Analysis", "Predictive Property Valuation", "Portfolio Optimization", "Geographic Intelligence"],";"";" pricing: "Starting at $199/month",";"";" color: "from-green-500 to-green-600",";"";" link: "/services/ai-real-estate-analytics-platform"; }; ];" ;";" const allServices = [;";" {;";"";" category: "AI & Machine Learning",;"";" services: [";"AI Content Creation Studio Pro",";"AI Customer Experience Analytics",";"AI Cybersecurity Suite",";"AI HR Platform",";"AI IoT Edge Computing Platform",";"AI Marketing Automation",";"AI Predictive Maintenance",";"AI Project Management Platform",";"AI Workflow Automation",";"AI Business Intelligence Platform";" ];";" },;";" {;";"";" category: "Financial Technology",;"";" services: [";"AI Financial Trading Platform",";"AI Financial Risk Management",";"AI Financial Analytics",";"FinOps Advisor",";"Cloud FinOps Optimizer",";"Blockchain Enterprise Solutions";" ];";" },;";" {;";"";" category: "Healthcare Technology",;"";" services: [";"AI Healthcare Analytics Platform",";"AI Healthcare Diagnostics",";"AI Healthcare Predictive Analytics",";"Healthcare Tech Solutions";" ];";" },;";" {;";"";" category: "Legal Technology",;"";" services: [";"AI Legal Document Automation Platform",";"AI Legal Research Assistant",";"AI Compliance Assistant";" ];";" },;";" {;";"";" category: "Supply Chain & Logistics",;"";" services: [";"AI Supply Chain Optimization Platform",";"AI Supply Chain Risk Management",";"IoT Edge Computing Solutions",";"Edge Computing Platform";" ];";" },;";" {;";"";" category: "Real Estate Technology",;"";" services: [";"AI Real Estate Analytics Platform",";"AI Property Valuation",";"AI Market Intelligence",";"AI Portfolio Optimization";" ];";" },;";" {;";"";" category: "Security & Compliance",;"";" services: [";"AI Cybersecurity Platform",";"AI Cyber Threat Intelligence",";"Security Headers CSP Manager",";"Zero Trust Network Access",";"SOC2 Compliance Tracker"; ]; }; ];" ;";" const benefits = [;";" {;";"";" icon: <Brain className="w-8 h-8" />,";"";" title: "AI-Powered Intelligence",";"";" description: "Advanced machine learning algorithms deliver insights and automation that transform business operations";";" },;";" {;";"";" icon: <Shield className="w-8 h-8" />,";"";" title: "Enterprise Security",";"";" description: "Bank-grade security with compliance certifications including SOC2, HIPAA, and industry-specific standards";";" },;";" {;";"";" icon: <Zap className="w-8 h-8" />,";"";" title: "Lightning Fast",";"";" description: "Optimized performance with sub-second response times and 99.9% uptime guarantees";";" },;";" {;";"";" icon: <Globe className="w-8 h-8" />,";"";" title: "Global Scale",";"";" description: "Deploy anywhere with multi-region support and automatic scaling capabilities";" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" {}";"";" <section className="relative py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="flex items-center justify-center mb-6">";"";" <Brain className="w-12 h-12 text-purple-500 mr-3" />";"";" <h1 className="text-4xl md:text-6xl font-bold text-white">;"";" Zion Tech Group";"";" <span className="text-purple-500 block">Services Showcase 2025</span>;";" </h1>;"";" </div>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;";" Discover our comprehensive suite of AI-powered micro SAAS services designed to transform;";" your business operations and drive innovation across industries.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function ServicesShowcase2025() {
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
      details: ["Unlimited users", "Custom AI models", "Full services showcase2025 suite", "24/7 dedicated support"]

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Services Showcase2025 Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Services Showcase2025 Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your services showcase2025 operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Services Showcase2025 Features</h2>
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
                <p className="text-gray-600">Comprehensive services showcase2025 solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Services Showcase2025?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered services showcase2025 platform today.
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
