<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import SEO from '@/components/SEO'; import { motion  } from 'framer-motion'; import { ArrowRight  } from 'lucide-react'; const DigitalTransformation = () => {; const transformationServices = [; {; title: "Process Automation",";"";" description: "Streamline operations with intelligent automation solutions",";"";" features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"],";"";" icon: "🤖";";" },;";" {;";"";" title: "Workflow Optimization",";"";" description: "Redesign and optimize business workflows for maximum efficiency",";"";" features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"],";"";" icon: "📊";";" },;";" {;";"";" title: "Change Management",";"";" description: "Guide your organization through digital transformation with expert change management",";"";" features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],";"";" icon: "🔄";";" },;";" {;";"";" title: "Business Process Optimization",";"";" description: "Streamline operations and improve efficiency through digital workflows",";"";" features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"],";"";" icon: "⚡";";" },;";" {;";"";" title: "Customer Experience Enhancement",";"";" description: "Create seamless digital experiences that delight your customers",";"";" features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"],";"";" icon: "🎯";";" },;";" {;";"";" title: "Data & Analytics Strategy",";"";" description: "Leverage data insights to drive informed business decisions",";"";" features: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"],";"";" icon: "📊";";" },;";" {;";"";" title: "Technology Infrastructure",";"";" description: "Modernize your technology stack for scalability and performance",";"";" features: ["Cloud Migration", "API Integration", "Microservices", "DevOps Practices"],";"";" icon: "🏗️";";" };";" ];"";" const benefits = [";"Increased operational efficiency by 50%",";"Enhanced customer experience and satisfaction",";"Reduced operational costs and waste",";"Improved decision-making with real-time data",";"Competitive advantage in the digital marketplace";";" ];"";" const transformationApproach = [";"";" { step: "Assessment", icon: "🔍", description: "Evaluate current state and identify opportunities" },";"";" { step: "Strategy", icon: "📋", description: "Develop comprehensive transformation roadmap" },";"";" { step: "Implementation", icon: "🚀", description: "Execute changes with agile methodology" },";"";" { step: "Optimization", icon: "📈", description: "Continuous improvement and scaling" };"";" ];";"";" return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">";"";" <SEO title="Digital Transformation - Zion Tech Group" description="Transform your business for the digital age with our comprehensive digital transformation services." keywords="digital transformation, process automation, digital strategy, change management, performance optimization" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Digitaltransformation() {
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
            AI-Powered Digitaltransformation Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Digitaltransformation Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your digitaltransformation operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Digitaltransformation Features</h2>
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
                <p className="text-gray-600">Comprehensive digitaltransformation solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digitaltransformation?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered digitaltransformation platform today.
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
