<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../../components/SEO'; import { Shield,; Lock,; Target,; Zap,; BarChart3,; Clock,; Award,; Star,; Globe,; Cpu,; Database,; CheckCircle,; Eye,; Users,; AlertTriangle,; TrendingUp,; Search,; Download,; Upload,; Calendar,; Server,; FileText,; Code,; Monitor,; Network,; Key,; Fingerprint,; Smartphone,; AlertCircle,; CheckSquare,; ShoppingCart,; DollarSign,; Heart,; Building,; GraduationCap;  } from 'lucide-react'; ; export default function SecurityHeadersCSP() {; const features = [; {; icon: Shield,; title: "Security Headers Implementation",";"";" description: "Comprehensive implementation of all essential security headers for web applications.";";" },;";" {;"";" icon: Lock,";"";" title: "Content Security Policy",";"";" description: "Advanced CSP configuration and monitoring for XSS protection.";";" },;";" {;"";" icon: Target,";"";" title: "Threat Detection",";"";" description: "Real-time monitoring and alerting for security violations.";";" },;";" {;"";" icon: Zap,";"";" title: "Automated Security",";"";" description: "Intelligent automation of security header management and updates.";";" },;";" {;"";" icon: BarChart3,";"";" title: "Security Analytics",";"";" description: "Comprehensive insights into security posture and threat landscape.";";" },;";" {;"";" icon: Server,";"";" title: "Infrastructure Security",";"";" description: "Server-level security hardening and configuration optimization.";" };";" ];";" ;"";" const benefits = [";"Reduce security vulnerabilities by 80-90% with proper headers",";"Improve security score by 40-60% on security testing platforms",";"Minimize XSS and injection attacks by 95%",";"Enhance compliance with security standards and regulations",";"Improve website security posture and trust indicators",";"Reduce security incident response time by 70%"; ];" ;";" const securityHeaders = [;";" {;";"";" header: "Content Security Policy(CSP)",";"";" description: "Prevent XSS attacks by controlling resource loading",;" icon: Shield;";" },;";" {;";"";" header: "X-Frame-Options",";"";" description: "Protect against clickjacking attacks",;" icon: Lock;";" },;";" {;";"";" header: "X-Content-Type-Options",";"";" description: "Prevent MIME type sniffing attacks",;" icon: Eye;";" },;";" {;";"";" header: "Strict-Transport-Security(HSTS)",";"";" description: "Enforce HTTPS connections",;" icon: Key;";" },;";" {;";"";" header: "X-XSS-Protection",";"";" description: "Enable browser XSS filtering",;" icon: AlertTriangle;";" },;";" {;";"";" header: "Referrer-Policy",";"";" description: "Control referrer information in HTTP requests",; icon: Eye; }; ];" ;";" const useCases = [;";" {;";"";" industry: "E-commerce",";"";" description: "Protect customer data and payment information in online stores",;" icon: ShoppingCart;";" },;";" {;";"";" industry: "Financial Services",";"";" description: "Secure banking and financial applications with strict security policies",;" icon: DollarSign;";" },;";" {;";"";" industry: "Healthcare",";"";" description: "Protect patient data and ensure HIPAA compliance",;" icon: Heart;";" },;";" {;";"";" industry: "Government",";"";" description: "Public data security, compliance requirements, and citizen information protection";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="Security Headers CSP - Zion Tech Group";"";" description="Secure your web applications with comprehensive security headers and Content Security Policy implementation.Protect against XSS, CSRF, and other web vulnerabilities.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 lg:py-32">";"";" <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-orange-900/20"></div>;";"";" <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-6">";"";" <Shield className="w-4 h-4 mr-2" />;";" Web Security;"";" </div>";"";" <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">;"";" Security Headers";"";" <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">;";" {' '}CSP;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">;";" Secure your web applications with comprehensive security headers and Content Security Policy.;";" Protect against XSS, CSRF, clickjacking, and other web vulnerabilities.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg flex items-center justify-center">";"";" <Shield className="w-5 h-5 mr-2" />;";" Start Free Trial;"";" </button>";"";" <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 text-lg">";"";" <Download className="w-5 h-5 mr-2 inline" />; Download Brochure; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Key Features;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our security headers platform provides comprehensive tools to protect;" web applications from various security threats.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-red-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <feature.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">;";" {feature.title};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {feature.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Platform Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Experience the advantages of comprehensive security headers that protect;" your applications and ensure compliance.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={benefit.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-red-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <benefit.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">;";" {benefit.title};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {benefit.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Security Headers Supported;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our platform implements all major security headers to provide;" comprehensive protection for your web applications.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {securityHeaders.map((header, index) => (; <motion.div; key={header.header}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-red-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <header.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">;";" {header.header};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {header.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Industry Use Cases;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Discover how organizations across industries leverage our security headers;" to protect their web applications and ensure compliance.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={useCase.industry}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {;" { duration: 0.5,;";" delay: index * 0.1;";" }};"";" viewport={{ once: true   }}";"";" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-red-500/50";";" >;"";" {}";"";" <div className="mb-6">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"";" <useCase.icon className="w-8 h-8 text-white" />;" </div>;";" </div>;";" {};"";" <div>";"";" <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">;";" {useCase.industry};"";" </h3>";"";" <p className="text-gray-300 text-sm leading-relaxed">;" {useCase.description};";" </p>;";" </div>;"";" {}";"";" <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">";"";" <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0;" }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;";" Ready to Secure Your Applications?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;";" Join organizations already leveraging our security headers to protect;";" web applications and ensure compliance.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg flex items-center justify-center">";"";" <Star className="w-5 h-5 mr-2" />;";" Get Started Today;"";" </button>";"";" <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 text-lg">";"";" <Share2 className="w-5 h-5 mr-2 inline" />; Schedule Demo; </button>; </div>; </motion.div>; </div>; </section>;" </div>;";" );";" };";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Securityheaderscsp() {
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
            AI-Powered Securityheaderscsp Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Securityheaderscsp Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your securityheaderscsp operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Securityheaderscsp Features</h2>
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
                <p className="text-gray-600">Comprehensive securityheaderscsp solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Securityheaderscsp?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered securityheaderscsp platform today.
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
