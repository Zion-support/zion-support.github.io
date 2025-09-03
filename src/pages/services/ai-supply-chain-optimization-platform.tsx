<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Truck,; Package,; Brain,; Shield,; Users,; CheckCircle,; ArrowRight,; BarChart3,; Clock,; DollarSign,; Target,; Zap,; Eye,; Lock,; Globe,; Activity,; LineChart,; PieChart,; AlertTriangle,; Settings,; Database,; Phone,; Mail,; MapPin;  } from 'lucide-react'; ; const AISupplyChainOptimizationPlatform = () => {; const features = [; {; icon: <Brain className="w-6 h-6" />,";"";" title: "AI-Powered Demand Forecasting",";"";" description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations.";";" },;";" {;";"";" icon: <Truck className="w-6 h-6" />,";"";" title: "Route Optimization",";"";" description: "Intelligent route planning that reduces delivery times by 30% and cuts transportation costs by 25%.";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "Risk Management",";"";" description: "Real-time risk assessment and mitigation strategies for supply chain disruptions and supplier issues.";";" },;";" {;";"";" icon: <Users className="w-6 h-6" />,";"";" title: "Supplier Management",";"";" description: "AI-driven supplier performance analysis and automated procurement recommendations.";";" },;";" {;";"";" icon: <Database className="w-6 h-6" />,";"";" title: "Inventory Optimization",";"";" description: "Smart inventory management that maintains optimal stock levels while minimizing carrying costs.";";" },;";" {;";"";" icon: <BarChart3 className="w-6 h-6" />,";"";" title: "Performance Analytics",";"";" description: "Comprehensive supply chain KPIs and real-time performance monitoring dashboards."; }; ];" ;";" const pricingPlans = [;";" {;";"";" name: "Small Business",";"";" price: "$399",";"";" period: "/month",";"";" description: "Perfect for small businesses and startups",;"";" features: [";"Up to 100 SKUs",";"Basic demand forecasting",";"Standard reporting",";"Email support",";"Basic integrations",";"Mobile app access"; ],;" popular: false;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$1,199",";"";" period: "/month",";"";" description: "Ideal for growing companies and mid-market businesses",;"";" features: [";"Up to 10,000 SKUs",";"Advanced AI algorithms",";"Custom dashboards",";"Priority support",";"Full integration suite",";"Advanced analytics",";"Risk management",";"API access"; ],;" popular: true;";" },;";" {;";"";" name: "Global Enterprise",";"";" price: "$2,999",";"";" period: "/month",";"";" description: "For large multinational corporations",;"";" features: [";"Unlimited SKUs",";"Custom AI models",";"White-label solution",";"Dedicated support",";"Multi-warehouse management",";"Custom integrations",";"Training and consultation",";"SLA guarantees"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;";"";" icon: <DollarSign className="w-8 h-8" />,";"";" title: "Cost Reduction",";"";" description: "Reduce supply chain costs by 20-35% through AI optimization";";" },;";" {;";"";" icon: <Clock className="w-8 h-8" />,";"";" title: "Faster Delivery",";"";" description: "Improve delivery times by 30-40% with route optimization";";" },;";" {;";"";" icon: <Shield className="w-8 h-8" />,";"";" title: "Risk Mitigation",";"";" description: "Identify and prevent supply chain disruptions before they occur";";" },;";" {;";"";" icon: <Truck className="w-8 h-8" />,";"";" title: "Improved Efficiency",";"";" description: "Streamline operations and reduce manual processes by 50%"; }; ];" ;";" const industries = [;";" {;";"";" icon: <Package className="w-8 h-8" />,";"";" title: "E-commerce",";"";" description: "Optimize fulfillment and last-mile delivery for online retailers";";" },;";" {;";"";" icon: <Truck className="w-8 h-8" />,";"";" title: "Manufacturing",";"";" description: "Streamline production planning and raw material procurement";";" },;";" {;";"";" icon: <Globe className="w-8 h-8" />,";"";" title: "Retail",";"";" description: "Improve inventory management and store replenishment";";" },;";" {;";"";" icon: <Activity className="w-8 h-8" />,";"";" title: "Healthcare",";"";" description: "Ensure critical medical supplies are always available";" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" {}";"";" <section className="relative py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="flex items-center justify-center mb-6">";"";" <Truck className="w-12 h-12 text-blue-500 mr-3" />";"";" <h1 className="text-4xl md:text-6xl font-bold text-white">;"";" AI Supply Chain";"";" <span className="text-blue-500 block">Optimization Platform</span>;";" </h1>;"";" </div>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;";" Transform your supply chain with AI-powered optimization.Predict demand,;";" optimize routes, and manage inventory with unprecedented precision.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiSupplyChainOptimizationPlatform() {
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
            AI-Powered Ai Supply Chain Optimization Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Supply Chain Optimization Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai supply chain optimization platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Supply Chain Optimization Platform Features</h2>
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
                <p className="text-gray-600">Comprehensive ai supply chain optimization platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Supply Chain Optimization Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai supply chain optimization platform platform today.
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
