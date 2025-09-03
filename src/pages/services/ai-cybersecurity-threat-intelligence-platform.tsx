<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Shield,; Eye,; AlertTriangle,; Zap,; Lock,; Users,; Globe,; Clock,; CheckCircle,; Star,; ArrowRight,; Play,; BookOpen,; MessageCircle,; Phone,; Mail,; MapPin,; Brain,; BarChart3,; Target;  } from 'lucide-react'; ; export default function AICybersecurityThreatIntelligencePlatform() {; const features = [; {; icon: Brain,; title: "AI-Powered Threat Detection",";"";" description: "Machine learning algorithms identify threats before they become attacks";";" },;";" {;"";" icon: Eye,";"";" title: "Real-time Monitoring",";"";" description: "24/7 surveillance of your entire digital infrastructure";";" },;";" {;"";" icon: AlertTriangle,";"";" title: "Threat Intelligence",";"";" description: "Global threat feed with contextual analysis and risk scoring";";" },;";" {;"";" icon: Zap,";"";" title: "Automated Response",";"";" description: "Instant threat mitigation and incident response automation";";" },;";" {;"";" icon: Lock,";"";" title: "Zero Trust Security",";"";" description: "Advanced authentication and access control systems";";" },;";" {;"";" icon: Users,";"";" title: "Security Operations Center",";"";" description: "Dedicated team of cybersecurity experts monitoring your systems"; }; ];" ;";" const pricingPlans = [;";" {;";"";" name: "Essential",";"";" price: "$499",";"";" period: "/month",";"";" description: "Perfect for small businesses",;"";" features: [";"Basic threat detection",";"Email security",";"Firewall management",";"Security reports",";"Email support",";"Up to 50 users"; ],;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$1,299",";"";" period: "/month",";"";" description: "Ideal for growing companies",;"";" features: [";"Advanced threat detection",";"Real-time monitoring",";"Incident response",";"Vulnerability scanning",";"Priority support",";"Up to 200 users",";"API access"; ],;" popular: true;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$2,999",";"";" period: "/month",";"";" description: "For large organizations",;"";" features: [";"Full threat intelligence",";"Custom security policies",";"Advanced analytics",";"24/7 SOC support",";"White-label options",";"Unlimited users",";"Custom integrations"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;";"";" title: "Threat Prevention",";"";" description: "Stop attacks before they happen with predictive AI",";"";" metric: "99.9% threat prevention";";" },;";" {;";"";" title: "Response Time",";"";" description: "Automated response reduces incident resolution time",";"";" metric: "90% faster response";";" },;";" {;";"";" title: "Cost Savings",";"";" description: "Prevent costly data breaches and downtime",";"";" metric: "60% cost reduction";";" },;";" {;";"";" title: "Compliance",";"";" description: "Meet industry standards and regulatory requirements",";"";" metric: "100% compliance ready"; }; ];" ;";" const securityMetrics = [;";" {;";"";" metric: "10M+",";"";" label: "Threats Blocked Daily";";" },;";" {;";"";" metric: "500+",";"";" label: "Enterprise Clients";";" },;";" {;";"";" metric: "24/7",";"";" label: "Security Monitoring";";" },;";" {;";"";" metric: "<1min",";"";" label: "Response Time";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">";"";" <Shield className="w-4 h-4 mr-2" />;";" AI-Powered Cybersecurity;";" </div>;";"";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;"";" AI Cybersecurity";"";" <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">";"";" {"}Threat Intelligence Platform;";" </span>;";" </h1>;";"";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;" Protect your business with next-generation AI that detects, analyzes, and;";" neutralizes cyber threats in real-time before they can cause damage.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">";"";" <Play className="w-5 h-5 mr-2" />;";" Start Free Trial;"";" </button>";"";" <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-200 flex items-center justify-center">";"";" <BookOpen className="w-5 h-5 mr-2" />; Security Assessment; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-500/10">";"";" <div className="max-w-7xl mx-auto">";"";" <div className="grid grid-cols-2 md:grid-cols-4 gap-8">; {securityMetrics.map((item, index) => (; <motion.div; key={index};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.5, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="text-center";"";" >";"";" <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{item.metric}</div>";"";" <div className="text-gray-300 text-sm md:text-base">{item.label}</div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Advanced Security Features;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">;" Comprehensive cybersecurity protection powered by artificial intelligence;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={index};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.5, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>";"";" <p className="text-gray-400">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">";"";" <div className="max-w-7xl mx-auto">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Proven Security Results;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">;" See measurable improvements in your cybersecurity posture;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={index};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.5, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="text-center";"";" >";"";" <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>";"";" <p className="text-gray-400">{benefit.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Comprehensive Security Plans;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">;" Choose the security level that matches your business needs;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">; {pricingPlans.map((plan, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.5, delay: index * 0.1 }}; viewport={{ once: true   }}; className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${; plan.popular; ? 'border-red-500/50 ring-2 ring-red-500/20';" : 'border-gray-700';";" }`};";" >;"";" {plan.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";"";" <div className="flex items-baseline justify-center mb-2">";"";" <span className="text-4xl font-bold text-white">{plan.price}</span>";"";" <span className="text-gray-400 ml-1">{plan.period}</span>;"";" </div>";"";" <p className="text-gray-400">{plan.description}</p>;";" </div>;";"";" <ul className="space-y-4 mb-8">;"";" {plan.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center">";"";" <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>; </li>; ))}; </ul>; <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${; plan.popular; ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'; : 'bg-gray-700 text-white hover:bg-gray-600'; }`}>; Get Protected; </button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-orange-500/10">";"";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Ready to Secure Your Business?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;";" Don't wait until it's too late.Join thousands of businesses that trust;";" our AI-powered cybersecurity platform to protect their digital assets.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">;"";" Start Free Trial";"";" <ArrowRight className="w-5 h-5 ml-2" />;"";" </button>";"";" <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-200 flex items-center justify-center">;"";" Security Assessment";"";" <Target className="w-5 h-5 ml-2" />; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Need Security Expertise?;"";" </h2>";"";" <p className="text-xl text-gray-400 mb-8">;" Our cybersecurity experts are here to help you implement and optimize your;";" security infrastructure.;";" </p>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";"";" <div className="flex flex-col items-center">";"";" <Phone className="w-8 h-8 text-red-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>";"";" <p className="text-gray-400">+1 302 464 0950</p>;"";" </div>";"";" <div className="flex flex-col items-center">";"";" <Mail className="w-8 h-8 text-red-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>";"";" <p className="text-gray-400">kleber@ziontechgroup.com</p>;"";" </div>";"";" <div className="flex flex-col items-center">";"";" <MapPin className="w-8 h-8 text-red-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>";"";" <p className="text-gray-400">364 E Main St STE 1008<br / / / / / />Middletown DE 19709</p>; </div>; </div>; </motion.div>; </div>;" </section>;";" </div>;";" );"";" }";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiCybersecurityThreatIntelligencePlatform() {
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
            AI-Powered Ai Cybersecurity Threat Intelligence Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Cybersecurity Threat Intelligence Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai cybersecurity threat intelligence platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Cybersecurity Threat Intelligence Platform Features</h2>
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
                <p className="text-gray-600">Comprehensive ai cybersecurity threat intelligence platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Cybersecurity Threat Intelligence Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai cybersecurity threat intelligence platform platform today.
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
