<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Cpu,; Zap,; Brain,; CheckCircle,; Clock,; DollarSign,; Users,; Shield,; Globe,; Award,; Star,; ArrowRight,; Phone,; Mail,; MapPin,; ExternalLink,; Database,; Cloud,; Smartphone,; Lock,; BarChart3,; TrendingUp,; Target,; Rocket,; Wifi,; Activity,; Server,; Network;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function IoTEdgeComputingPlatform() {; const features = [; {; icon: <Cpu className="w-6 h-6" />,";"";" title: "Edge Computing Nodes",";"";" description: "Distributed edge computing infrastructure with real-time processing capabilities and low-latency response";";" },;";" {;";"";" icon: <Activity className="w-6 h-6" />,";"";" title: "IoT Device Management",";"";" description: "Comprehensive management of IoT sensors, devices, and gateways with automated provisioning and monitoring";";" },;";" {;";"";" icon: <Brain className="w-6 h-6" />,";"";" title: "AI at the Edge",";"";" description: "Local AI processing and machine learning models for real-time decision making without cloud dependency";";" },;";" {;";"";" icon: <Network className="w-6 h-6" />,";"";" title: "5G & LPWAN Support",";"";" description: "Multi-network connectivity supporting 5G, LoRaWAN, Sigfox, and other IoT communication protocols";";" },;";" {;";"";" icon: <Database className="w-6 h-6" />,";"";" title: "Edge Data Processing",";"";" description: "Local data processing, filtering, and analytics to reduce bandwidth and improve response times";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "Edge Security",";"";" description: "Advanced security protocols, encryption, and access control for edge computing environments"; }; ];" ;";" const pricing = [;";" {;";"";" name: "IoT Starter",";"";" price: "$199",";"";" period: "/month",;"";" features: [";"Up to 100 IoT devices",";"Basic edge computing",";"Standard monitoring",";"Email alerts",";"Basic analytics dashboard",";"Email support",";"Community forum access"; ],;" popular: false;";" },;";" {;";"";" name: "IoT Professional",";"";" price: "$899",";"";" period: "/month",;"";" features: [";"Up to 1,000 IoT devices",";"Advanced edge computing",";"AI at the edge",";"Real-time monitoring",";"Custom dashboards",";"API access",";"Priority support",";"SLA guarantees"; ],;" popular: true;";" },;";" {;";"";" name: "IoT Enterprise",";"";" price: "$2,999",";"";" period: "/month",;"";" features: [";"Unlimited IoT devices",";"Custom edge solutions",";"On-premise deployment",";"Custom integrations",";"White-label options",";"Dedicated support team",";"Training and certification",";"24/7 monitoring"; ],; popular: false;" };";" ];";" ;"";" const benefits = [";"Reduce latency by 90% with edge processing",";"Lower bandwidth costs by 70%",";"Improve reliability with offline capabilities",";"Scale IoT deployments 10x faster",";"Real-time decision making at the edge",";"Enhanced security and privacy"; ];" ;";" const useCases = [;";" {;";"";" industry: "Smart Cities",";"";" description: "Traffic management, environmental monitoring, smart lighting, and public safety systems",";"";" advantage: "Real-time city management";";" },;";" {;";"";" industry: "Industrial IoT",";"";" description: "Predictive maintenance, quality control, supply chain optimization, and safety monitoring",";"";" advantage: "Zero-downtime operations";";" },;";" {;";"";" industry: "Healthcare",";"";" description: "Patient monitoring, medical device management, and remote healthcare delivery",";"";" advantage: "24/7 patient care";";" },;";" {;";"";" industry: "Agriculture",";"";" description: "Precision farming, crop monitoring, irrigation control, and livestock tracking",";"";" advantage: "Optimized crop yields";" };";" ];";" ;"";" const iotProtocols = [";"MQTT",";"CoAP",";"HTTP/HTTPS",";"LoRaWAN",";"Sigfox",";"NB-IoT",";"Bluetooth Low Energy",";"Zigbee";";" ];";" ;"";" const edgeCapabilities = [";"Real-time data processing",";"Local AI inference",";"Data filtering & aggregation",";"Edge-to-cloud synchronization",";"Offline operation",";"Local storage management",";"Device provisioning",";"Firmware updates";";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="IoT Edge Computing Platform - Zion Tech Group";"";" description="Comprehensive IoT edge computing platform for smart cities, industrial IoT, healthcare, and agriculture.Reduce latency by 90% and lower bandwidth costs by 70%.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" IoT Edge Computing Platform;"";" </h1>";"";" <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Transform your IoT deployments with our edge computing platform.Process data locally, reduce latency by 90%,;";" and enable real-time decision making without cloud dependency.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function IotEdgeComputingPlatform() {
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
            AI-Powered Iot Edge Computing Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Iot Edge Computing Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your iot edge computing platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Iot Edge Computing Platform Features</h2>
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
                <p className="text-gray-600">Comprehensive iot edge computing platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Iot Edge Computing Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered iot edge computing platform platform today.
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
