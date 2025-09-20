import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import {
  Shield
  FileText,
  Target,
  Zap,
  BarChart3,
  Clock,
  Award,
  Star
  Globe
  Cpu
  Database
  CheckCircle
  Eye
  Users
  Lock
  TrendingUp
  Search
  Download
  Upload
  Calendar
  AlertTriangle
  Trash
} from "lucide-react"
export default function DSRPortal() {
  const features = [
  {
  ic,
  o: n: Shield,tit,
  l: e: "Data Subject Rights Management",descripti,
  o: n: "Comprehensive management of GDPR, CCPA, and other privacy regulation rights."
},
  {
  ic,
  o: n: FileText,tit,
  l: e: "Automated Request Processing",descripti,
  o: n: "AI-powered processing of data subject requests with intelligent routing."
},
  {
  ic,
  o: n: Target,tit,
  l: e: "Data Discovery & Mapping",descripti,
  o: n: "Automated discovery and mapping of personal data across systems."
},
  {
  ic,
  o: n: Zap,tit,
  l: e: "Compliance Workflows",descripti,
  o: n: "Streamlined workflows for handling privacy requests and compliance tasks."
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Compliance Analytics",descripti,
  o: n: "Real-time insights into privacy compliance and request processing metrics."
},
  {
  ic,
  o: n: Lock,tit,
  l: e: "Secure Data Handling",descripti,
  o: n: "Enterprise-grade security for sensitive personal data processing."
},
  ]
  const benefits = [
  "Ensure 100% GDPR and CCPA compliance with automated workflows"
    "Reduce response time to data subject requests by 80-90%"
    "Minimize compliance risks and potential fines by 95%"
    "Streamline data discovery and mapping processes by 70%"
    "Improve audit trail and compliance reporting efficiency"
    "Enhance customer trust through transparent data handling"
]

  const dataRights = [
  {
  rig,
  h: t: "Right to Access",descripti,
  o: n: "Provide individuals with access to their personal data",ic,
  o: n: Eye
},
  {
  rig,
  h: t: "Right to Rectification",descripti,
  o: n: "Allow individuals to correct inaccurate personal data",ic,
  o: n: FileText
},
  {
  rig,
  h: t: "Right to Erasure",descripti,
  o: n: "Process requests to delete personal data (right to be forgotten)",ic,
  o: n: Trash
},
  {
  rig,
  h: t: "Right to Portability",descripti,
  o: n: "Provide personal data in a structured, machine-readable format"
      ic,
  o: n: Download
},
  {
  rig,
  h: t: "Right to Restriction",descripti,
  o: n: "Limit processing of personal data in certain circumstances",ic,
  o: n: Lock
},
  {
  rig,
  h: t: "Right to Object",descripti,
  o: n: "Allow individuals to object to processing of their data",ic,
  o: n: AlertTriangle
},
  ]
  const useCases = [
  {
  indust,
  r: y: "E-commerce",descripti,
  o: n: "Customer data management, order history, and preference handling"
},
  {
  indust,
  r: y: "Financial Services",descripti,
  o: n: "Account data, transaction history, and financial information management"
},
  {
  indust,
  r: y: "Healthcare",descripti,
  o: n: "Patient data, medical records, and health information privacy"
},
  {
  indust,
  r: y: "Technology & SaaS",descripti,
  o: n: "User data, application usage, and service-related information"
},
  {
  indust,
  r: y: "Education",descripti,
  o: n: "Student data, academic records, and educational service information"
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="DSR Portal - Zion Tech Group"
        description="Ensure GDPR and CCPA compliance with our AI-powered Data Subject Rights portal. Automate privacy request processing and data management."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20,
  l: g: py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6">
              <Shield className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">DSR Portal</span>
            </div>
            
            <h1 className="text-4xl,
  l: g:text-6xl font-bold text-white mb-6">
              Ensure Privacy Compliance with
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                {" "}AI-Powered DSR Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data privacy compliance with intelligent automation, comprehensive 
              data subject rights management, and AI-powered insights for GDPR and CCPA compliance.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg,
  hove: r: from-indigo-600,
  hove: r:to-purple-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-indigo-500/25";"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg,
  hove: r:bg-indigo-400/10 transition-all duration-300";"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Advanced Privacy Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered DSR portal combines cutting-edge artificial intelligence 
              with comprehensive privacy compliance methodologies to ensure regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div
                key={feature.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30,
  hove: r: border-indigo-400/30 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Measurable Compliance Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered DSR solutions that deliver quantifiable 
              improvements across all aspects of your privacy compliance operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
  <motion.div
                    key={index},
  }
                    initial={ opaci,
  t: y: 0, x: -20 },
  }
                    whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                    className="className="flex items-start space-x-3";"
                  >
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-xl border border-indigo-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI privacy algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global privacy regulation expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 compliance support & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-300">Proven compliance success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Rights Section */},
  }
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-4">
              Comprehensive Data Subject Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DSR portal supports all major privacy regulation rights, ensuring 
              comprehensive compliance with GDPR, CCPA, and other privacy laws.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {dataRights.map((right, index) => (
  <motion.div
                key={right.right},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20,
  hove: r:border-indigo-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <right.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{right.right}</h3>
                </div>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered DSR solutions are designed to work across industries, providing 
              tailored privacy compliance strategies for your specific data handling needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
  <motion.div
                key={useCase.industry},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20,
  hove: r:border-indigo-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-12 rounded-2xl border border-indigo-400/20 text-center";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
              Ready to Ensure Privacy Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their privacy 
              compliance with our AI-powered DSR solutions.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg,
  hove: r: from-indigo-600,
  hove: r:to-purple-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-indigo-500/25";"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg,
  hove: r: bg-indigo-400/10 transition-all duration-300";"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}