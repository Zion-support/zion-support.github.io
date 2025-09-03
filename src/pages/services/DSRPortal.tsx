<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../../components/SEO'; import { Shield,; FileText,; Target,; Zap,; BarChart3,; Clock,; Award,; Star,; Globe,; Cpu,; Database,; CheckCircle,; Eye,; Users,; Lock,; TrendingUp,; Search,; Download,; Upload,; Calendar,; AlertTriangle,; Trash,; ShoppingCart,; DollarSign,; Heart,; GraduationCap,; Home;  } from 'lucide-react'; ; export default function DSRPortal() {; const features = [; {; icon: Shield,; title: "Data Subject Rights Management",";"";" description: "Comprehensive management of GDPR, CCPA, and other privacy regulation rights.";";" },;";" {;"";" icon: FileText,";"";" title: "Automated Request Processing",";"";" description: "AI-powered processing of data subject requests with intelligent routing.";";" },;";" {;"";" icon: Target,";"";" title: "Data Discovery & Mapping",";"";" description: "Automated discovery and mapping of personal data across systems.";";" },;";" {;"";" icon: Zap,";"";" title: "Compliance Workflows",";"";" description: "Streamlined workflows for handling privacy requests and compliance tasks.";";" },;";" {;"";" icon: BarChart3,";"";" title: "Compliance Analytics",";"";" description: "Real-time insights into privacy compliance and request processing metrics.";";" },;";" {;"";" icon: Lock,";"";" title: "Secure Data Handling",";"";" description: "Enterprise-grade security for sensitive personal data processing.";" };";" ];";" ;"";" const benefits = [";"Ensure 100% GDPR and CCPA compliance with automated workflows",";"Reduce response time to data subject requests by 80-90%",";"Minimize compliance risks and potential fines by 95%",";"Streamline data discovery and mapping processes by 70%",";"Improve audit trail and compliance reporting efficiency",";"Enhance customer trust through transparent data handling"; ];" ;";" const dataRights = [;";" {;";"";" right: "Right to Access",";"";" description: "Individuals can request access to their personal data",;" icon: Eye;";" },;";" {;";"";" right: "Right to Rectification",";"";" description: "Individuals can request correction of inaccurate personal data",;" icon: FileText;";" },;";" {;";"";" right: "Right to Erasure",";"";" description: "Individuals can request deletion of their personal data",;" icon: Trash;";" },;";" {;";"";" right: "Right to Portability",";"";" description: "Individuals can request transfer of their data to another controller",;" icon: Download;";" },;";" {;";"";" right: "Right to Restriction",";"";" description: "Individuals can request limitation of data processing",;";" icon: Lock;";" },;"";" {;";"";" right: "Right to Object",;";"";" description: "Individuals can object to processing of their personal data",; icon: AlertTriangle; }; ];" ;";" const useCases = [;";" {;";"";" industry: "E-commerce",";"";" description: "Manage customer data rights and privacy requests for online retail",;" icon: ShoppingCart;";" },;";" {;";"";" industry: "Financial Services",";"";" description: "Comply with financial privacy regulations and customer data rights",;" icon: DollarSign;";" },;";" {;";"";" industry: "Healthcare",";"";" description: "Manage patient data rights and HIPAA compliance requirements",;" icon: Heart;";" },;";" {;";"";" industry: "Technology",";"";" description: "Handle user data rights for SaaS and digital service platforms",;" icon: Cpu;";" },;";" {;";"";" industry: "Education",";"";" description: "Student data, academic records, and educational service information";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="DSR Portal - Zion Tech Group";"";" description="Streamline data subject rights management with our AI-powered DSR portal.Ensure GDPR and CCPA compliance with automated request processing.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 lg:py-32">";"";" <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>;";"";" <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium mb-6">";"";" <Shield className="w-4 h-4 mr-2" />;";" Data Subject Rights;"";" </div>";"";" <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">;"";" DSR";"";" <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">;";" {' '}Portal;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">;";" Streamline data subject rights management with our AI-powered portal.;";" Ensure GDPR, CCPA, and other privacy regulation compliance with automated request processing.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg flex items-center justify-center">";"";" <Shield className="w-5 h-5 mr-2" />;";" Start Free Trial;"";" </button>";"";" <button className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 text-lg">";"";" <Download className="w-5 h-5 mr-2 inline" />; Download Brochure; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Key Features;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our DSR Portal provides comprehensive tools to manage data subject rights;" and ensure privacy regulation compliance.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <feature.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">;";" {feature.title};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {feature.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Platform Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Experience the advantages of AI-powered DSR management that ensures;" compliance and protects your organization's reputation.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={benefit.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <benefit.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">;";" {benefit.title};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {benefit.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Data Rights Supported;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our platform supports all major data subject rights under GDPR, CCPA,;" and other privacy regulations.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {dataRights.map((right, index) => (; <motion.div; key={right.right}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <right.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">;";" {right.right};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {right.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Industry Use Cases;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Discover how organizations across industries leverage our DSR Portal;" to manage data subject rights and ensure compliance.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={useCase.industry}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <useCase.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">;";" {useCase.industry};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {useCase.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">";"";" <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0;" }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Ready to Streamline DSR Management?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;";" Join organizations already leveraging our DSR Portal to ensure;";" privacy regulation compliance and protect customer data.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg flex items-center justify-center">";"";" <Star className="w-5 h-5 mr-2" />;";" Get Started Today;"";" </button>";"";" <button className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 text-lg">";"";" <Share2 className="w-5 h-5 mr-2 inline" />; Schedule Demo; </button>; </div>; </motion.div>; </div>; </section>;" </div>;";" );";" };";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Dsrportal() {
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
            AI-Powered Dsrportal Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dsrportal Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your dsrportal operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Dsrportal Features</h2>
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
                <p className="text-gray-600">Comprehensive dsrportal solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Dsrportal?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered dsrportal platform today.
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
