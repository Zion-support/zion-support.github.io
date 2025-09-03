<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Atom,; Zap,; Brain,; CheckCircle,; Clock,; DollarSign,; Users,; Shield,; Globe,; Award,; Star,; ArrowRight,; Phone,; Mail,; MapPin,; ExternalLink,; Cpu,; Database,; Cloud,; Smartphone,; Lock,; BarChart3,; TrendingUp,; Target,; Rocket;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function QuantumComputingAsAService() {; const features = [; {; icon: <Atom className="w-6 h-6" />,";"";" title: "Quantum Processing Units",";"";" description: "Access to state-of-the-art quantum processors with 100+ qubits for complex computational tasks";";" },;";" {;";"";" icon: <Brain className="w-6 h-6" />,";"";" title: "Quantum Machine Learning",";"";" description: "Advanced quantum algorithms for machine learning, optimization, and pattern recognition";";" },;";" {;";"";" icon: <Zap className="w-6 h-6" />,";"";" title: "Quantum Simulation Engine",";"";" description: "High-fidelity quantum simulation for chemistry, materials science, and drug discovery";";" },;";" {;";"";" icon: <Database className="w-6 h-6" />,";"";" title: "Quantum Database",";"";" description: "Quantum-enhanced database systems for ultra-fast search and optimization queries";";" },;";" {;";"";" icon: <Target className="w-6 h-6" />,";"";" title: "Quantum Cryptography",";"";" description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms";";" },;";" {;";"";" icon: <Rocket className="w-6 h-6" />,";"";" title: "Quantum API Gateway",";"";" description: "RESTful APIs and SDKs for seamless integration with existing applications"; }; ];" ;";" const pricing = [;";" {;";"";" name: "Quantum Starter",";"";" price: "$999",";"";" period: "/month",;"";" features: [";"Up to 100 quantum operations/day",";"Basic quantum algorithms",";"Standard simulation tools",";"Email support",";"Basic quantum education resources",";"Community forum access"; ],;" popular: false;";" },;";" {;";"";" name: "Quantum Professional",";"";" price: "$2,999",";"";" period: "/month",;"";" features: [";"Up to 1,000 quantum operations/day",";"Advanced quantum algorithms",";"Full simulation suite",";"Priority support",";"Custom algorithm development",";"API access",";"Dedicated quantum engineer"; ],;" popular: true;";" },;";" {;";"";" name: "Quantum Enterprise",";"";" price: "$9,999",";"";" period: "/month",;"";" features: [";"Unlimited quantum operations",";"Custom quantum circuits",";"White-label solutions",";"On-premise deployment",";"Custom integrations",";"Dedicated support team",";"SLA guarantees",";"Training and certification"; ],; popular: false;" };";" ];";" ;"";" const benefits = [";"Solve complex problems 1000x faster than classical computers",";"Breakthrough discoveries in drug discovery and materials science",";"Unbreakable quantum encryption for data security",";"Revolutionary optimization for logistics and finance",";"Access to cutting-edge quantum technology without infrastructure costs",";"Future-proof your organization with quantum capabilities"; ];" ;";" const useCases = [;";" {;";"";" industry: "Pharmaceuticals",";"";" description: "Quantum simulation for drug discovery, protein folding, and molecular dynamics",";"";" advantage: "1000x faster drug discovery";";" },;";" {;";"";" industry: "Financial Services",";"";" description: "Quantum optimization for portfolio management, risk assessment, and trading algorithms",";"";" advantage: "Exponential speed improvement";";" },;";" {;";"";" industry: "Materials Science",";"";" description: "Quantum simulation for new materials, battery technology, and superconductors",";"";" advantage: "Revolutionary material discovery";";" },;";" {;";"";" industry: "Logistics & Supply Chain",";"";" description: "Quantum optimization for route planning, inventory management, and resource allocation",";"";" advantage: "Optimal solutions in seconds";" };";" ];";" ;"";" const quantumAlgorithms = [";"Grover's Algorithm for database search",";"Shor's Algorithm for factoring",";"Quantum Fourier Transform",";"Quantum Approximate Optimization Algorithm(QAOA)",";"Variational Quantum Eigensolver(VQE)",";"Quantum Machine Learning algorithms";";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="Quantum Computing as a Service Platform - Zion Tech Group";"";" description="Access cutting-edge quantum computing power through our cloud platform.Solve complex problems 1000x faster with quantum algorithms and simulation tools.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" Quantum Computing as a Service;"";" </h1>";"";" <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Access the power of quantum computing without the complexity.Our cloud platform provides quantum processing,;";" algorithms, and simulation tools to solve previously impossible computational challenges.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function QuantumComputingAsAService() {
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
            AI-Powered Quantum Computing As A Service Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Quantum Computing As A Service Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your quantum computing as a service operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Quantum Computing As A Service Features</h2>
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
                <p className="text-gray-600">Comprehensive quantum computing as a service solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Quantum Computing As A Service?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered quantum computing as a service platform today.
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
