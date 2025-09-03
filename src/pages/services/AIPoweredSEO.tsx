<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../../components/SEO'; import { Search,; TrendingUp,; Target,; Zap,; BarChart3,; Globe,; Users,; Clock,; Award,; Star,; Cpu,; Database,; Filter,; Download,; Share2,; CheckCircle,; Eye,; MousePointer,; Smartphone,; Monitor;  } from 'lucide-react'; ; export default function AIPoweredSEO() {; const features = [; {; icon: Search,; title: "AI Keyword Research",";"";" description: "Intelligent keyword discovery and analysis using machine learning algorithms.";";" },;";" {;"";" icon: TrendingUp,";"";" title: "Content Optimization",";"";" description: "AI-powered content analysis and optimization for better search rankings.";";" },;";" {;"";" icon: Target,";"";" title: "Competitive Analysis",";"";" description: "Advanced competitor research and gap analysis with AI insights.";";" },;";" {;"";" icon: BarChart3,";"";" title: "Performance Tracking",";"";" description: "Real-time SEO performance monitoring and analytics dashboard.";";" },;";" {;"";" icon: Globe,";"";" title: "Local SEO",";"";" description: "AI-driven local search optimization and Google My Business management.";" };";" ];";" ;"";" const benefits = [";"Increase organic traffic by 40-80% with AI-optimized strategies",";"Improve search rankings by 3-5 positions on average",";"Reduce SEO implementation time by 60-70%",";"Boost conversion rates by 25-45% through better targeting",";"Enhance user experience and engagement metrics",";"Achieve sustainable long-term SEO results"; ];" ;";" const seoProcess = [;";" {;";"";" stage: "Research & Analysis",";"";" description: "AI-powered keyword research, competitor analysis, and technical audit",;" icon: Search;";" },;";" {;";"";" stage: "Content Strategy",";"";" description: "Data-driven content planning and optimization recommendations",;" icon: Target;";" },;";" {;";"";" stage: "Technical Optimization",";"";" description: "Automated technical SEO improvements and performance optimization",;" icon: Cpu;";" },;";" {;";"";" stage: "Monitoring & Reporting",";"";" description: "Real-time performance tracking and actionable insights",;" icon: BarChart3;";" },;";" {;";"";" stage: "Optimization",";"";" description: "Continuous improvement based on AI insights and data",;" icon: TrendingUp;";" },;";" {;";"";" stage: "Reporting",";"";" description: "Comprehensive reporting and ROI measurement",; icon: Eye; }; ];" ;";" const useCases = [;";" {;";"";" industry: "E-commerce",";"";" description: "Optimize product pages, category pages, and search functionality",;" icon: ShoppingCart;";" },;";" {;";"";" industry: "B2B Services",";"";" description: "Improve lead generation through targeted keyword optimization",;" icon: Building;";" },;";" {;";"";" industry: "Content Marketing",";"";" description: "Enhance content discoverability and engagement metrics",;" icon: FileText;";" },;";" {;";"";" industry: "Local Businesses",";"";" description: "Boost local search visibility and Google My Business optimization",;" icon: MapPin;";" },;";" {;";"";" industry: "Technology",";"";" description: "SaaS SEO, technical content optimization, and developer targeting";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="AI-Powered SEO - Zion Tech Group";"";" description="Transform your search engine optimization with AI-powered tools.Improve rankings, increase traffic, and drive organic growth.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 lg:py-32">";"";" <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>";"";" <div className="container mx-auto px-4 relative z-10">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.8   }}";"";" className="text-center max-w-4xl mx-auto";"";" >";"";" <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">";"";" <Search className="w-4 h-4 mr-2" />;";" AI-Powered SEO;"";" </div>";"";" <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">;"";" AI-Powered";"";" <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">;";" {' '}SEO;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">;";" Transform your search engine optimization with intelligent AI tools that analyze,;";" optimize, and continuously improve your website's search performance.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"; >; Start SEO Audit;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"; >; Schedule Demo; </motion.button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;";" Advanced SEO Features;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our AI-powered SEO platform combines cutting-edge artificial intelligence with;" proven optimization strategies to deliver exceptional search results.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <feature.icon className="w-8 h-8 text-white" />;";" </div>;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>";"";" <p className="text-gray-300">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;";" Measurable SEO Results;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; See real results with our AI-powered SEO solutions that deliver quantifiable;" improvements in search rankings, traffic, and conversions.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";"";" <div className="space-y-6">";"";" <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>";"";" <div className="space-y-4">; {benefits.map((benefit, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, x: -20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.6, delay: index * 0.1 }}";"";" className="flex items-start space-x-3";"";" >";"";" <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </motion.div>;" ))};";" </div>;";" </div>;";"";" <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-400/20">";"";" <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>";"";" <div className="space-y-4">";"";" <div className="flex items-center space-x-3">";"";" <Star className="w-5 h-5 text-yellow-400" />";"";" <span className="text-gray-300">Industry-leading AI SEO algorithms</span>;"";" </div>";"";" <div className="flex items-center space-x-3">";"";" <Globe className="w-5 h-5 text-blue-400" />";"";" <span className="text-gray-300">Global SEO expertise and strategies</span>;"";" </div>";"";" <div className="flex items-center space-x-3">";"";" <BarChart3 className="w-5 h-5 text-green-400" />";"";" <span className="text-gray-300">Data-driven optimization approach</span>;"";" </div>";"";" <div className="flex items-center space-x-3">";"";" <Users className="w-5 h-5 text-purple-400" />";"";" <span className="text-gray-300">24/7 SEO monitoring & support</span>;"";" </div>";"";" <div className="flex items-center space-x-3">";"";" <Award className="w-5 h-5 text-purple-400" />";"";" <span className="text-gray-300">Proven SEO success track record</span>; </div>; </div>; </div>;" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" SEO Process;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our comprehensive SEO process ensures systematic optimization;" and continuous improvement of your search performance.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {seoProcess.map((stage, index) => (; <motion.div; key={stage.stage}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <stage.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">;";" {stage.stage};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {stage.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Industry Use Cases;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Discover how organizations across industries leverage our AI-powered SEO;" to improve search rankings and drive organic growth.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={useCase.industry}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <useCase.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">;";" {useCase.industry};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {useCase.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.8   }}";"";" className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 p-12 rounded-2xl border border-purple-400/20 text-center";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Ready to Transform Your SEO?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;";" Join organizations already leveraging AI-powered SEO to improve;";" search rankings and drive organic growth.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"; >; Start Free Trial;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"; >; Contact Sales; </motion.button>; </div>; </motion.div>; </div>;" </section>;";" </div>;";" );"";" </div></div></div>}}}}}}";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Aipoweredseo() {
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
            AI-Powered Aipoweredseo Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Aipoweredseo Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your aipoweredseo operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Aipoweredseo Features</h2>
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
                <p className="text-gray-600">Comprehensive aipoweredseo solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Aipoweredseo?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered aipoweredseo platform today.
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
