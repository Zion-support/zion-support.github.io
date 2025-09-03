<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../../components/SEO'; import { ; Server,; Network,; Database,; Shield,; Cloud,; Cpu,; Zap,; Target,; CheckCircle,; ArrowRight,; Play,; Users,; Building,; Factory,; Car,; Home,; City,; Leaf,; Brain,; Eye,; Search,; Filter,; Download,; Share2,; Settings,; Key,; Globe2,; ShieldCheck,; Leaf as LeafIcon,; Scale,; Building2,; CheckCircle2;  } from 'lucide-react'; ; const ITInfrastructurePage: React.FC = () => {; const features = [; {; icon: Server,; title: 'Server Management',; description: 'Comprehensive server infrastructure design and administration'; },; {; icon: Network,; title: 'Network Infrastructure',; description: 'High-performance networking solutions and security'; },; {; icon: Database,; title: 'Database Systems',; description: 'Scalable database architecture and optimization'; },; {; icon: Shield,; title: 'Security Solutions',; description: 'Multi-layered security and compliance frameworks'; },; {; icon: Cloud,; title: 'Cloud Infrastructure',; description: 'Hybrid and multi-cloud deployment strategies'; },; {; icon: Cpu,; title: 'Hardware Optimization',; description: 'Performance tuning and capacity planning'; }; ]; ; const services = [; {; icon: Brain,; title: 'Infrastructure Design',; description: 'Custom architecture planning and implementation'; },; {; icon: Eye,; title: 'Monitoring & Alerting',; description: '24/7 system monitoring and proactive maintenance'; },; {; icon: Search,; title: 'Performance Analysis',; description: 'Comprehensive performance optimization and tuning'; },; {; icon: Filter,; title: 'Capacity Planning',; description: 'Scalability assessment and growth planning'; },; {; icon: Download,; title: 'Backup & Recovery',; description: 'Robust disaster recovery and business continuity'; },; {; icon: Share2,; title: 'Integration Services',; description: 'Seamless system integration and migration'; }; ]; ; const useCases = [; {; icon: Building,; title: 'Enterprise Infrastructure',; description: 'Large-scale corporate IT infrastructure management'; },; {; icon: Factory,; title: 'Manufacturing Systems',; description: 'Industrial automation and control infrastructure'; },; {; icon: Car,; title: 'Transportation Networks',; description: 'Fleet management and logistics infrastructure'; },; {; icon: Home,; title: 'Smart Building Systems',; description: 'IoT and building automation infrastructure'; },; {; icon: Leaf,; title: 'Healthcare IT',; description: 'Medical systems and patient data infrastructure'; },; {; icon: City,; title: 'Government Systems',; description: 'Public sector IT infrastructure and security'; }; ]; ; const benefits = [; 'Improve system reliability and uptime by 99.9%',; 'Reduce infrastructure costs by 25-40%',; 'Enhance security and compliance posture',; 'Increase operational efficiency and productivity',; 'Enable rapid scaling and growth',; 'Streamline IT operations and management'; ]; ; return(; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="IT Infrastructure Services - Zion Tech Group";"";" description="Build robust, scalable, and secure IT infrastructure with our comprehensive services.From server management to cloud solutions, we ensure your technology foundation supports business growth.";";" />;"";" {}";"";" <section className="relative pt-32 pb-20 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>";"";" <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center";"";" >";"";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-400/10 text-green-400 text-sm font-medium mb-6">";"";" <Server className="w-4 h-4 mr-2" />;";" IT Infrastructure Services;"";" </div>";"";" <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">;"";" IT Infrastructure";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">;";" Services;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;" Build robust, scalable, and secure IT infrastructure that supports your business growth.;";" From server management to cloud solutions, we provide comprehensive infrastructure;";" services for modern enterprises.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200";"";" >";"";" <Play className="w-5 h-5 mr-2" />; Watch Demo;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200";"";" >";"";" <ArrowRight className="w-5 h-5 mr-2" />; Learn More; </motion.button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Core Infrastructure Services;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Comprehensive IT infrastructure solutions designed for enterprise-scale operations;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-green-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {feature.title};"";" </h3>";"";" <p className="text-gray-400">; {feature.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Professional Services;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Expert consulting and implementation services for your infrastructure needs;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {services.map((service, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-green-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">";"";" <service.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {service.title};"";" </h3>";"";" <p className="text-gray-400">; {service.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Applications;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Transform operations across diverse industries with robust IT infrastructure;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-green-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">";"";" <useCase.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {useCase.title};"";" </h3>";"";" <p className="text-gray-400">; {useCase.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Business Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Measurable improvements in reliability, security, and operational efficiency;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;" <motion.div;";" initial={{ opacity: 0, x: -20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="space-y-4";";" >;"";" {benefits.slice(0, 3).map((benefit, index) => (";"";" <div key={index} className="flex items-center space-x-3">";"";" <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </div>; ))}; </motion.div>;" <motion.div;";" initial={{ opacity: 0, x: 20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="space-y-4";";" >;"";" {benefits.slice(3).map((benefit, index) => (";"";" <div key={index} className="flex items-center space-x-3">";"";" <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </div>; ))}; </motion.div>;" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20">";"";" <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Ready to Build Your IT Foundation?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;";" Discover how our IT Infrastructure services can support your business growth;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200";"";" >";"";" <Users className="w-5 h-5 mr-2" />; Schedule Consultation;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200";"";" >";"";" <ArrowRight className="w-5 h-5 mr-2" />; View Case Studies; </motion.button>; </div>; </motion.div>; </div>; </section>; </div>;" );";" };";" ;"";" export default ITInfrastructurePage;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function ItInfrastructure() {
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
            AI-Powered It Infrastructure Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">It Infrastructure Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your it infrastructure operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced It Infrastructure Features</h2>
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
                <p className="text-gray-600">Comprehensive it infrastructure solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your It Infrastructure?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered it infrastructure platform today.
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
