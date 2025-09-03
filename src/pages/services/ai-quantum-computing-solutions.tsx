<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { ; Atom,; Brain,; Cpu,; Zap,; Shield,; BarChart3,; Globe,; Clock,; CheckCircle,; ArrowRight,; TrendingUp,; Target,; Rocket,; Star,; Award,; Phone,; Mail,; MapPin,; Database,; Network,; Lock,; Cloud,; Workflow,; Users,; Eye,; Search,; Code,; Microchip,; Satellite,; Wifi,; Activity,; Monitor;  } from 'lucide-react'; ; const AIQuantumComputingSolutions = () => {; const features = [; {; icon: Atom,; title: "Quantum AI Processing",";"";" description: "Leverage quantum computing power for AI algorithms, achieving 1000x faster computation than classical systems";";" },;";" {;"";" icon: Brain,";"";" title: "Quantum Neural Networks",";"";" description: "Advanced quantum neural networks that process complex patterns and solve previously intractable problems";";" },;";" {;"";" icon: Cpu,";"";" title: "Hybrid Quantum-Classical",";"";" description: "Seamless integration between quantum and classical computing for optimal performance and reliability";";" },;";" {;"";" icon: Database,";"";" title: "Quantum Database Optimization",";"";" description: "Revolutionary database queries and optimization using quantum algorithms for massive datasets";";" },;";" {;"";" icon: Shield,";"";" title: "Quantum Cryptography",";"";" description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography standards";";" },;";" {;"";" icon: Network,";"";" title: "Quantum Internet",";"";" description: "Next-generation quantum networking for ultra-secure, high-speed data transmission"; }; ];" ;";" const pricing = [;";" {;";"";" name: "Quantum Starter",";"";" price: "$1,999",";"";" period: "/month",";"";" description: "For research institutions and small quantum projects",;"";" features: [";"Basic quantum computing access",";"5 quantum algorithm templates",";"Email support",";"Standard security",";"Basic quantum simulator",";"10 hours/month quantum processing"; ],;" popular: false;";" },;";" {;";"";" name: "Quantum Professional",";"";" price: "$4,999",";"";" period: "/month",";"";" description: "For enterprises and advanced research teams",;"";" features: [";"All Starter features",";"Advanced quantum algorithms",";"Custom quantum circuits",";"Priority support",";"Quantum error correction",";"100 hours/month processing",";"API access",";"Custom integrations"; ],;" popular: true;";" },;";" {;";"";" name: "Quantum Enterprise",";"";" price: "$12,999",";"";" period: "/month",";"";" description: "For large organizations and government agencies",;"";" features: [";"All Professional features",";"Unlimited quantum processing",";"Custom quantum hardware",";"24/7 dedicated support",";"White-label solutions",";"Advanced security features",";"Custom development",";"On-premise deployment"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;"";" icon: Zap,";"";" title: "1000x Faster Processing",";"";" description: "Quantum advantage for complex computational problems and AI training";";" },;";" {;"";" icon: Lock,";"";" title: "Unbreakable Security",";"";" description: "Quantum cryptography provides mathematically proven security";";" },;";" {;"";" icon: Target,";"";" title: "Revolutionary AI",";"";" description: "Quantum AI algorithms solve previously impossible problems";";" },;";" {;"";" icon: Globe,";"";" title: "Future-Proof Technology",";"";" description: "Stay ahead with cutting-edge quantum computing capabilities"; }; ];" ;";" const useCases = [;";" {;"";" icon: BarChart3,";"";" title: "Financial Modeling",";"";" description: "Quantum algorithms for portfolio optimization, risk assessment, and market prediction";";" },;";" {;"";" icon: Search,";"";" title: "Drug Discovery",";"";" description: "Molecular simulation and protein folding for pharmaceutical research";";" },;";" {;"";" icon: Network,";"";" title: "Logistics Optimization",";"";" description: "Complex routing and supply chain optimization problems";";" },;";" {;"";" icon: Code,";"";" title: "Cryptography",";"";" description: "Post-quantum cryptography and quantum-resistant algorithms";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">;"";" {}";"";" <section className="relative pt-32 pb-20 overflow-hidden">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center max-w-4xl mx-auto";"";" >";"";" <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">";"";" <Atom className="w-4 h-4" />;";" Next-Generation Quantum Computing;"";" </div>";"";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;"";" AI Quantum Computing";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">;";" Solutions;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 mb-8 leading-relaxed">;" Experience the future of computing with our revolutionary AI-powered quantum computing platform.;";" Solve previously intractable problems with 1000x faster processing power and unlock new possibilities;";" in AI, cryptography, and scientific research.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;"";" <Link";"";" to="/contact";"";" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";" >;"";" Start Quantum Journey";"";" <ArrowRight className="w-5 h-5 ml-2 inline" />;";" </Link>;"";" <a";"";" href="tel:+1 302 464 0950";"";" className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300";"";" >";"";" <Phone className="w-5 h-5 mr-2 inline" />; Call +1 302 464 0950; </a>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Revolutionary Quantum Features;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-3xl mx-auto">; Harness the power of quantum mechanics combined with artificial intelligence to solve;" the most complex computational challenges of our time.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-slate-800/50 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300";"";" >";"";" <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">";"";" <feature.icon className="w-8 h-8 text-blue-400" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">;";" {feature.title};"";" </h3>";"";" <p className="text-gray-300 leading-relaxed">; {feature.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-900/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Transformative Use Cases;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-3xl mx-auto">; Discover how quantum computing is revolutionizing industries and solving previously;" impossible problems across various domains.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={useCase.title};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="text-center";"";" >";"";" <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">";"";" <useCase.icon className="w-10 h-10 text-blue-400" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">;";" {useCase.title};"";" </h3>";"";" <p className="text-gray-300 leading-relaxed">; {useCase.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Quantum Computing Pricing;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-3xl mx-auto">; Access the future of computing with our flexible quantum computing solutions.;" Choose the plan that fits your quantum computing needs and budget.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">; {pricing.map((plan, index) => (; <motion.div; key={plan.name}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }}; viewport={{ once: true   }}; className={`relative bg-slate-800/50 border rounded-2xl p-8 ${; plan.popular; ? 'border-blue-500 shadow-2xl shadow-blue-500/25';" : 'border-slate-700';";" }`};";" >;"";" {plan.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;" Most Popular;";" </span>;";" </div>;"";" )}";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";"";" <div className="text-4xl font-bold text-white mb-2">;"";" {plan.price}";"";" <span className="text-lg text-gray-400 font-normal">{plan.period}</span>;"";" </div>";"";" <p className="text-gray-300">{plan.description}</p>;"";" </div>";"";" <ul className="space-y-4 mb-8">;"";" {plan.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center text-gray-300">";"";" <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />; {feature};" </li>;";" ))};";" </ul>;"";" <Link";"";" to="/contact"; className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${; plan.popular; ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'; : 'bg-slate-700 text-white hover:bg-slate-600'; }`}; >; Get Started; </Link>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-900/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;";" Quantum Advantage Benefits;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-3xl mx-auto">; Experience unprecedented computational power and capabilities that were previously;" impossible with classical computing systems.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={benefit.title};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="text-center";"";" >";"";" <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">";"";" <benefit.icon className="w-10 h-10 text-blue-400" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">;";" {benefit.title};"";" </h3>";"";" <p className="text-gray-300 leading-relaxed">; {benefit.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="max-w-4xl mx-auto";"";" >";"";" <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;";" Ready for the Quantum Future?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;" Join the quantum revolution and unlock computational power that was previously;";" impossible.Start your quantum computing journey today.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">;"";" <Link";"";" to="/contact";"";" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";" >;"";" Start Quantum Journey";"";" <ArrowRight className="w-5 h-5 ml-2 inline" />;";" </Link>;"";" <a";"";" href="tel:+1 302 464 0950";"";" className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300";"";" >";"";" <Phone className="w-5 h-5 mr-2 inline" />;" Call +1 302 464 0950;";" </a>;";" </div>;";"";" <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">";"";" <div className="flex items-center">";"";" <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />;";" <span>Free Quantum Consultation</span>;"";" </div>";"";" <div className="flex items-center">";"";" <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />;";" <span>No Setup Fees</span>;"";" </div>";"";" <div className="flex items-center">";"";" <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />; <span>24/7 Expert Support</span>; </div>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-slate-900">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">";"";" <div className="flex flex-col items-center">";"";" <Phone className="w-8 h-8 text-blue-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>";"";" <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-blue-400 transition-colors">;";" +1 302 464 0950;";" </a>;"";" </div>";"";" <div className="flex flex-col items-center">";"";" <Mail className="w-8 h-8 text-blue-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>";"";" <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">;";" kleber@ziontechgroup.com;";" </a>;"";" </div>";"";" <div className="flex flex-col items-center">";"";" <MapPin className="w-8 h-8 text-blue-400 mb-4" />";"";" <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>";"";" <p className="text-gray-300">; 364 E Main St STE 1008<br / / / / / />; Middletown DE 19709; </p>; </div>; </div>; </div>; </section>; </div>;" );";" };";" ;"";" export default AIQuantumComputingSolutions;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiQuantumComputingSolutions() {
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
            AI-Powered Ai Quantum Computing Solutions Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Quantum Computing Solutions Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai quantum computing solutions operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Quantum Computing Solutions Features</h2>
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
                <p className="text-gray-600">Comprehensive ai quantum computing solutions solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Quantum Computing Solutions?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai quantum computing solutions platform today.
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
