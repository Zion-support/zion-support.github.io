<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Zap,; Brain,; CheckCircle,; ArrowRight,; BarChart3,; Users,; Target,; Shield,; Cloud,; Mail,; Phone,; Globe,; Video,; Leaf,; Search,; Filter,; Download,; Share2,; Settings,; Eye,; Clock,; TrendingUp,; DollarSign,; Award,; Headphones,; Calendar,; Bell,; FileText,; UserCheck,; UserX,; UserPlus,; UserMinus,; Activity,; PieChart,; LineChart;  } from 'lucide-react'; import { Link  } from 'react-router-dom'; ; export default function AIEnergyManagementSustainability() {; const features = [; {; icon: Brain,; title: "AI-Powered Energy Optimization",";"";" description: "Advanced machine learning algorithms that optimize energy consumption, predict demand, and reduce waste",";"";" benefits: ["Energy optimization", "Demand prediction", "Waste reduction"];";" },;";" {;"";" icon: Zap,";"";" title: "Smart Grid Integration",";"";" description: "Seamless integration with smart grids, renewable energy sources, and energy storage systems",";"";" benefits: ["Grid integration", "Renewable energy", "Storage optimization"];";" },;";" {;"";" icon: Leaf,";"";" title: "Sustainability Analytics",";"";" description: "Comprehensive tracking of carbon footprint, energy efficiency, and environmental impact metrics",";"";" benefits: ["Carbon tracking", "Efficiency metrics", "Impact analysis"];";" },;";" {;"";" icon: BarChart3,";"";" title: "Real-time Energy Monitoring",";"";" description: "Live dashboards showing energy consumption, cost analysis, and efficiency recommendations",";"";" benefits: ["Live monitoring", "Cost analysis", "Efficiency insights"];";" },;";" {;"";" icon: Target,";"";" title: "Predictive Maintenance",";"";" description: "AI-driven insights to predict equipment failures and optimize maintenance schedules",";"";" benefits: ["Failure prediction", "Maintenance optimization", "Cost savings"];";" },;";" {;"";" icon: Shield,";"";" title: "Compliance & Reporting",";"";" description: "Automated compliance reporting for energy regulations, sustainability standards, and ESG requirements",";"";" benefits: ["Regulatory compliance", "ESG reporting", "Audit readiness"]; }; ];" ;";" const pricingPlans = [;";" {;";"";" name: "Starter",";"";" price: "$299",";"";" period: "/month",";"";" description: "Perfect for small facilities with basic energy management needs",;"";" features: [";"Up to 5 facilities",";"Basic energy monitoring",";"Standard dashboards",";"Email support",";"Basic analytics",";"Core sustainability tracking";"";" ],";"";" cta: "Start Free Trial",;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$799",";"";" period: "/month",";"";" description: "Ideal for growing organizations with advanced energy management requirements",;"";" features: [";"Up to 25 facilities",";"Advanced AI optimization",";"Custom dashboards",";"Priority support",";"Advanced analytics",";"Custom integrations",";"White-label options",";"API access";"";" ],";"";" cta: "Start Free Trial",;" popular: true;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$1,999",";"";" period: "/month",";"";" description: "For large organizations requiring enterprise-grade energy management",;"";" features: [";"Unlimited facilities",";"Custom AI models",";"Advanced analytics",";"24/7 dedicated support",";"Custom workflows",";"Advanced security",";"On-premise deployment",";"SLA guarantees";"";" ],";"";" cta: "Contact Sales",; popular: false; }; ];" ;";" const useCases = [;";" {;";"";" industry: "Manufacturing",";"";" description: "Optimize production energy consumption, reduce costs, and improve sustainability compliance",";"";" metrics: ["Energy efficiency", "Cost reduction", "Carbon footprint"];";" },;";" {;";"";" industry: "Commercial Real Estate",";"";" description: "Manage building energy systems, optimize HVAC operations, and reduce utility costs",";"";" metrics: ["Utility cost reduction", "HVAC optimization", "Building efficiency"];";" },;";" {;";"";" industry: "Healthcare",";"";" description: "Ensure critical energy systems reliability, reduce costs, and meet sustainability goals",";"";" metrics: ["System reliability", "Cost savings", "Sustainability goals"];";" },;";" {;";"";" industry: "Data Centers",";"";" description: "Optimize power usage effectiveness, reduce cooling costs, and improve energy efficiency",";"";" metrics: ["PUE optimization", "Cooling efficiency", "Energy savings"]; }; ];" ;";" const benefits = [;";" {;"";" icon: TrendingUp,";"";" title: "Reduce Energy Costs",";"";" description: "AI optimization can reduce energy costs by 15-30% through intelligent consumption management";";" },;";" {;"";" icon: Leaf,";"";" title: "Improve Sustainability",";"";" description: "Track and reduce carbon footprint while meeting ESG and sustainability reporting requirements";";" },;";" {;"";" icon: Users,";"";" title: "Enhance Operational Efficiency",";"";" description: "Predictive maintenance and optimization increase operational efficiency by 20-40%";";" },;";" {;"";" icon: Zap,";"";" title: "Future-Proof Infrastructure",";"";" description: "Smart grid integration and renewable energy optimization prepare facilities for the future";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" {}";"";" <section className="relative py-20 overflow-hidden">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center";"";" >";"";" <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">";"";" <Leaf className="w-4 h-4 mr-2" />;";" AI Energy Management & Sustainability;";" </div>;";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;"";" Optimize Energy with";"";" <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI Intelligence</span>;";" </h1>;";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">;" Our AI-powered energy management platform optimizes consumption, reduces costs, and improves sustainability;";" through intelligent automation and predictive analytics.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <Link";"";" to="/request-quote";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25";"";" >";"";" <span className="flex items-center gap-2">;"";" Get Started Today";"";" <ArrowRight className="w-5 h-5" />;";" </span>;";" </Link>;";"";" <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">";"";" <Video className="w-5 h-5 mr-2" />; Watch Demo; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Powerful Energy Management Features;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Everything you need to optimize energy consumption and improve sustainability;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={index};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105";"";" >";"";" <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">";"";" <feature.icon className="w-6 h-6 text-cyan-400" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>";"";" <p className="text-gray-400 mb-4">{feature.description}</p>";"";" <ul className="space-y-2">;"";" {feature.benefits.map((benefit, benefitIndex) => (";"";" <li key={benefitIndex} className="flex items-center text-sm text-gray-300">";"";" <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />; {benefit}; </li>; ))}; </ul>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Why Choose Our Platform?;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Proven results and measurable impact on your energy management and sustainability goals;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={index};" initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }};";" whileInView={{ opacity: 1, x: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="flex items-start space-x-4";"";" >";"";" <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">";"";" <benefit.icon className="w-6 h-6 text-cyan-400" />;";" </div>;"";" <div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>";"";" <p className="text-gray-400">{benefit.description}</p>; </div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Simple, Transparent Pricing;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Choose the plan that fits your energy management needs;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">; {pricingPlans.map((plan, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }}; viewport={{ once: true   }}; className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${; plan.popular; ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25';" : 'border-slate-700';";" }`};";" >;"";" {plan.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";"";" <div className="flex items-baseline justify-center mb-2">";"";" <span className="text-4xl font-bold text-white">{plan.price}</span>";"";" <span className="text-gray-400 ml-1">{plan.period}</span>;"";" </div>";"";" <p className="text-gray-400">{plan.description}</p>;";" </div>;";"";" <ul className="space-y-3 mb-8">;"";" {plan.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center text-gray-300">";"";" <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />; {feature}; </li>; ))}; </ul>; <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${; plan.popular; ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'; : 'bg-slate-700 text-white hover:bg-slate-600'; }`}>; {plan.cta}; </button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Solutions;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Tailored energy management solutions for various industries;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={index};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8";"";" >";"";" <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>";"";" <p className="text-gray-400 mb-6">{useCase.description}</p>;"";" <div>";"";" <h4 className="text-lg font-medium text-white mb-3">Key Metrics:</h4>";"";" <ul className="space-y-2">;"";" {useCase.metrics.map((metric, metricIndex) => (";"";" <li key={metricIndex} className="flex items-center text-gray-300">";"";" <BarChart3 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />; {metric}; </li>; ))}; </ul>; </div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-6">;";" Ready to Optimize Your Energy Management?;"";" </h2>";"";" <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">;";" Join hundreds of organizations that have revolutionized their energy management with our AI-powered platform.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <Link";"";" to="/request-quote";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25";"";" >";"";" <span className="flex items-center gap-2">;"";" Start Your Free Trial";"";" <ArrowRight className="w-5 h-5" />;";" </span>;"";" </Link>";"";" <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">";"";" <Phone className="w-5 h-5 mr-2" />; Contact Sales; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-slate-800/50">";"";" <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";"";" <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">";"";" <div className="flex items-center justify-center space-x-2">";"";" <Phone className="w-5 h-5 text-cyan-400" />;";" <span>+1 302 464 0950</span>;"";" </div>";"";" <div className="flex items-center justify-center space-x-2">";"";" <Mail className="w-5 h-5 text-cyan-400" />;";" <span>kleber@ziontechgroup.com</span>;"";" </div>";"";" <div className="flex items-center justify-center space-x-2">";"";" <Globe className="w-5 h-5 text-cyan-400" />";"";" <a href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiEnergyManagementSustainability() {
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
            AI-Powered Ai Energy Management Sustainability Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Energy Management Sustainability Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai energy management sustainability operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Energy Management Sustainability Features</h2>
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
                <p className="text-gray-600">Comprehensive ai energy management sustainability solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Energy Management Sustainability?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai energy management sustainability platform today.
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
