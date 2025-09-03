<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Activity,; Heart,; Brain,; Zap,; CheckCircle,; Clock,; DollarSign,; Users,; BarChart3,; Shield,; TrendingUp,; Award,; Star,; ArrowRight,; Phone,; Mail,; MapPin,; ExternalLink,; Stethoscope,; Pill,; Microscope,; Database;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function AIHealthcareAnalytics() {; const features = [; {; icon: <Brain className="w-6 h-6" />,";"";" title: "Predictive Patient Analytics",";"";" description: "AI algorithms predict patient outcomes, readmission risks, and treatment effectiveness with 96% accuracy";";" },;";" {;";"";" icon: <Activity className="w-6 h-6" />,";"";" title: "Real-time Health Monitoring",";"";" description: "Continuous monitoring of patient vitals with early warning systems and automated alerts for critical changes";";" },;";" {;";"";" icon: <Database className="w-6 h-6" />,";"";" title: "Clinical Data Integration",";"";" description: "Seamless integration with EHR systems, medical devices, and wearable technology for comprehensive data analysis";";" },;";" {;";"";" icon: <Microscope className="w-6 h-6" />,";"";" title: "Medical Image Analysis",";"";" description: "Advanced AI-powered analysis of X-rays, MRIs, and CT scans for faster and more accurate diagnoses";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "HIPAA-Compliant Security",";"";" description: "Enterprise-grade security with end-to-end encryption and full HIPAA compliance for patient data protection";";" },;";" {;";"";" icon: <BarChart3 className="w-6 h-6" />,";"";" title: "Population Health Insights",";"";" description: "Comprehensive analytics for population health management, disease trends, and preventive care strategies"; }; ];" ;";" const pricing = [;";" {;";"";" name: "Clinic",";"";" price: "$399",";"";" period: "/month",;"";" features: [";"Up to 1,000 patients",";"Basic predictive analytics",";"Standard reporting",";"Email support",";"HIPAA compliance"; ],;" popular: false;";" },;";" {;";"";" name: "Hospital",";"";" price: "$1,199",";"";" period: "/month",;"";" features: [";"Up to 10,000 patients",";"Advanced AI analytics",";"Real-time monitoring",";"Priority support",";"Custom dashboards",";"API access",";"Integration support"; ],;" popular: true;";" },;";" {;";"";" name: "Health System",";"";" price: "$2,999",";"";" period: "/month",;"";" features: [";"Unlimited patients",";"Custom AI models",";"Advanced analytics",";"Dedicated support",";"White-label options",";"SLA guarantees",";"On-premise deployment"; ],; popular: false;" };";" ];";" ;"";" const benefits = [";"Reduce readmission rates by 30%",";"Improve diagnostic accuracy by 25%",";"Reduce healthcare costs by 20-35%",";"Enhance patient outcomes and satisfaction",";"Streamline clinical workflows",";"Enable proactive patient care"; ];" ;";" const useCases = [;";" {;";"";" specialty: "Cardiology",";"";" description: "Predict heart failure risks, monitor cardiac function, and optimize treatment plans",";"";" improvement: "40% risk reduction";";" },;";" {;";"";" specialty: "Oncology",";"";" description: "Personalized treatment recommendations, drug response prediction, and survival analysis",";"";" improvement: "35% treatment efficacy";";" },;";" {;";"";" specialty: "Emergency Medicine",";"";" description: "Triage optimization, resource allocation, and patient flow management",";"";" improvement: "50% efficiency gain";";" },;";" {;";"";" specialty: "Primary Care",";"";" description: "Preventive care planning, chronic disease management, and population health insights",";"";" improvement: "45% preventive care";" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="AI-Powered Healthcare Analytics Platform - Zion Tech Group";"";" description="Revolutionary AI platform for healthcare analytics, patient monitoring, and clinical insights.Improve patient outcomes while reducing healthcare costs by 20-35%.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" AI-Powered Healthcare Analytics;"";" </h1>";"";" <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Transform healthcare delivery with intelligent analytics, predictive insights, and real-time patient monitoring.;";" Improve patient outcomes while reducing costs by 20-35%.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiHealthcareAnalytics() {
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
            AI-Powered Ai Healthcare Analytics Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Healthcare Analytics Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai healthcare analytics operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Healthcare Analytics Features</h2>
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
                <p className="text-gray-600">Comprehensive ai healthcare analytics solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Healthcare Analytics?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai healthcare analytics platform today.
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
