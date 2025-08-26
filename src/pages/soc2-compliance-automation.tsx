import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Zap, 
  BarChart3, 
  FileText, 
  Users,
  Settings,
  Workflow,
  Target,
  Rocket,
  Lock,
  AlertTriangle
} from 'lucide-react';

const SOC2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring and validation of SOC2 compliance requirements"
    },
    {
      icon: CheckCircle,
      title: "Evidence Collection",
      description: "Automated collection and organization of compliance evidence"
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Instant notifications for compliance violations and risks"
    },
    {
      icon: BarChart3,
      title: "Compliance Dashboards",
      description: "Visual insights into compliance status and trends"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate compliance reports and documentation automatically"
    },
    {
      icon: Users,
      title: "Role-based Access",
      description: "Secure access controls for compliance team members"
    }
  ];

  const complianceAreas = [
    {
      title: "Security",
      description: "Protect information and systems from unauthorized access",
      controls: ["Access Controls", "Data Encryption", "Security Monitoring"]
    },
    {
      title: "Availability",
      description: "Ensure systems are available for operation and use",
      controls: ["System Monitoring", "Backup Procedures", "Disaster Recovery"]
    },
    {
      title: "Processing Integrity",
      description: "Ensure accurate and complete processing of data",
      controls: ["Data Validation", "Error Handling", "Audit Trails"]
    },
    {
      title: "Confidentiality",
      description: "Protect sensitive information from unauthorized disclosure",
      controls: ["Data Classification", "Encryption", "Access Logging"]
    },
    {
      title: "Privacy",
      description: "Protect personal information in accordance with privacy principles",
      controls: ["Data Minimization", "Consent Management", "Privacy Impact Assessment"]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Faster Certification",
      description: "Reduce time to SOC2 certification by 60%"
    },
    {
      icon: Target,
      title: "Reduced Risk",
      description: "Minimize compliance violations and security risks"
    },
    {
      icon: Rocket,
      title: "Cost Savings",
      description: "Lower compliance costs through automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>SOC2 Compliance Automation - Zion Tech Group</title>
        <meta name="description" content="Automate SOC2 compliance with AI-powered tools for security, availability, processing integrity, confidentiality, and privacy controls." />
        <meta name="keywords" content="SOC2 compliance, compliance automation, security controls, audit automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            SOC2 Compliance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Automation
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Streamline your SOC2 compliance process with AI-powered automation. 
            Achieve certification faster while reducing costs and minimizing risks.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive SOC2 compliance automation powered by AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              SOC2 Trust Service Criteria
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive coverage of all SOC2 compliance areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-8 border border-indigo-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.controls.map((control, controlIndex) => (
                    <li key={controlIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      {control}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your compliance process and achieve measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Automated Compliance Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Streamlined workflow from assessment to certification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: AlertTriangle, title: "Risk Assessment", description: "Identify and assess compliance risks" },
              { icon: Settings, title: "Control Implementation", description: "Deploy and configure compliance controls" },
              { icon: Workflow, title: "Continuous Monitoring", description: "Monitor compliance status in real-time" },
              { icon: CheckCircle, title: "Audit & Reporting", description: "Generate compliance reports and evidence" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                  <step.icon className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations using AI to streamline their compliance processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SOC2ComplianceAutomation;