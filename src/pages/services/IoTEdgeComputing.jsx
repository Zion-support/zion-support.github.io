<<<<<<< HEAD
import React from 'react'; import SEO from "@/components/SEO";";"";" import { Link  } from 'react-router-dom'; import { Check, Wifi, Cpu, Database, Shield, Zap, Globe, Target  } from 'lucide-react'; export default function IoTEdgeComputingServices() {; const iotServices = [; {; icon: Wifi,; title: 'IoT Device Management Platform',; description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices at scale.',; price: 'From $4,200/month',; marketPrice: '$3,500 - $9,000/month',; features: [; 'Device provisioning and onboarding',; 'Remote monitoring and diagnostics',; 'Firmware over-the-air updates',; 'Device lifecycle management',; 'Real-time status monitoring',; 'Bulk device operations'; ],; benefits: [; 'Reduced device downtime by 60%',; 'Lower maintenance costs',; 'Improved device reliability',; 'Scalable device management'; ]; },; {; icon: Cpu,; title: 'Edge Computing Infrastructure',; description: 'Deploy and manage edge computing nodes for real-time data processing and analytics.',; price: 'From $5,500/month',; marketPrice: '$4,500 - $12,000/month',; features: [; 'Edge node deployment and management',; 'Real-time data processing',; 'Local analytics and ML inference',; 'Edge-to-cloud synchronization',; 'Load balancing and failover',; 'Resource optimization'; ],; benefits: [; 'Reduced latency for real-time applications',; 'Lower bandwidth costs',; 'Improved data privacy',; 'Enhanced reliability and performance'; ]; },; {; icon: Database,; title: 'IoT Data Analytics & Insights',; description: 'Advanced analytics platform for IoT data streams with real-time processing and visualization.',; price: 'From $4,800/month',; marketPrice: '$4,000 - $10,000/month',; features: [; 'Real-time data streaming analytics',; 'Predictive maintenance algorithms',; 'Anomaly detection and alerting',; 'Custom dashboard creation',; 'Data visualization and reporting',; 'Machine learning model deployment'; ],; benefits: [; 'Proactive maintenance and reduced downtime',; 'Data-driven operational decisions',; 'Improved efficiency and cost savings',; 'Competitive advantage through insights'; ]; },; {; icon: Shield,; title: 'IoT Security & Compliance',; description: 'End-to-end security solutions for IoT ecosystems with threat detection and compliance management.',; price: 'From $4,500/month',; marketPrice: '$3,800 - $9,500/month',; features: [; 'Device authentication and authorization',; 'Encrypted data transmission',; 'Threat detection and response',; 'Compliance monitoring(GDPR, HIPAA)',; 'Security audit and reporting',; 'Vulnerability assessment'; ],; benefits: [; 'Enhanced data protection and privacy',; 'Reduced security risks',; 'Regulatory compliance',; 'Customer trust and confidence'; ]; },; {; icon: Zap,; title: 'Smart City & Industrial IoT',; description: 'Comprehensive IoT solutions for smart cities, manufacturing, and industrial automation.',; price: 'From $6,500/month',; marketPrice: '$5,500 - $15,000/month',; features: [; 'Smart city infrastructure monitoring',; 'Industrial automation and control',; 'Environmental monitoring systems',; 'Energy management and optimization',; 'Traffic and transportation solutions',; 'Waste management optimization'; ],; benefits: [; 'Improved operational efficiency',; 'Reduced environmental impact',; 'Enhanced public services',; 'Cost savings and sustainability'; ]; },; {; icon: Globe,; title: 'IoT Connectivity & Network Management',; description: 'Manage IoT connectivity across multiple networks and protocols with unified monitoring.',; price: 'From $3,800/month',; marketPrice: '$3,200 - $8,500/month',; features: [; 'Multi-protocol support(LoRaWAN, NB-IoT, 5G)',; 'Network performance monitoring',; 'Connectivity optimization',; 'Global roaming management',; 'Bandwidth allocation and QoS',; 'Network security and encryption'; ],; benefits: [; 'Optimized network performance',; 'Reduced connectivity costs',; 'Global IoT deployment capability',; 'Improved reliability and coverage'; ]; }; ]; const industries = [; 'Smart Cities & Municipalities',; 'Manufacturing & Industry 4.0',; 'Healthcare & Medical Devices',; 'Agriculture & Precision Farming',; 'Energy & Utilities',; 'Transportation & Logistics',; 'Retail & Smart Stores',; 'Building Management & Smart Homes'; ]; const technologies = [; 'LoRaWAN & NB-IoT',; '5G & Edge Computing',; 'MQTT & CoAP Protocols',; 'Kubernetes & Docker',; 'Apache Kafka & Spark',; 'TensorFlow Lite & ONNX',; 'AWS IoT & Azure IoT',; 'Google Cloud IoT & IBM Watson'; ]; const benefits = [; 'Real-time data processing and insights',; 'Reduced latency and improved performance',; 'Lower bandwidth and cloud costs',; 'Enhanced security and privacy',; 'Scalable IoT deployments',; 'Predictive maintenance and optimization'; ]; const useCases = [; {; title: 'Smart Manufacturing',; description: 'Real-time monitoring of production lines, predictive maintenance, and quality control automation.',; roi: '25-40% cost reduction',; implementation: '8-12 weeks'; },; {; title: 'Smart Cities',; description: 'Traffic management, environmental monitoring, public safety, and utility optimization.',; roi: '30-50% efficiency improvement',; implementation: '12-20 weeks'; },; {; title: 'Healthcare IoT',; description: 'Patient monitoring, medical device management, and healthcare facility optimization.',; roi: '20-35% operational improvement',; implementation: '10-16 weeks'; },; {; title: 'Agricultural IoT',; description: 'Precision farming, crop monitoring, irrigation control, and livestock management.',;" roi: '15-30% yield improvement',;";" implementation: '6-10 weeks';";" };"";" ];";"";" return (<div className="min-h-screen bg-background">";"";" <SEO title="IoT & Edge Computing Services - Zion Tech Group" description="Comprehensive IoT solutions, edge computing infrastructure, and smart device management platforms for connected ecosystems." keywords="IoT services, edge computing, smart devices, IoT platform, device management, IoT analytics, smart cities" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Iotedgecomputing() {
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
            AI-Powered Iotedgecomputing Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Iotedgecomputing Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your iotedgecomputing operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Iotedgecomputing Features</h2>
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
                <p className="text-gray-600">Comprehensive iotedgecomputing solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Iotedgecomputing?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered iotedgecomputing platform today.
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
