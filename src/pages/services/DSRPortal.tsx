import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import { ;
  Shield,;
  FileText, ;
  Target, ;
  Zap, ;
  BarChart3, ;
  Clock, ;
  Award, ;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  CheckCircle,;
  Eye,;
  Users,;
  Lock,;
  TrendingUp,;
  Search,;
  Download,;
  Upload,;
  Calendar,;
  AlertTriangle,;
  Trash;
} from "lucide-react"
export default function DSRPortal() {;
  const features = [;
    {;
      icon: Shield,title: "Data Subject Rights Management",description: "Comprehensive management of GDPR, CCPA, and other privacy regulation rights."
    },;
    {;
      icon: FileText,title: "Automated Request Processing",description: "AI-powered processing of data subject requests with intelligent routing."
    };
    {;
      icon: Target,title: "Data Discovery & Mapping",description: "Automated discovery and mapping of personal data across systems."
    };
    {;
      icon: Zap,title: "Compliance Workflows",description: "Streamlined workflows for handling privacy requests and compliance tasks."
    };
    {;
      icon: BarChart3,title: "Compliance Analytics",description: "Real-time insights into privacy compliance and request processing metrics."
    };
    {;
      icon: Lock,title: "Secure Data Handling",description: "Enterprise-grade security for sensitive personal data processing."
    };
  ];
  const benefits = [;
    "Ensure 100% GDPR and CCPA compliance with automated workflows",;
    "Reduce response time to data subject requests by 80-90%",;
    "Minimize compliance risks and potential fines by 95%",;
    "Streamline data discovery and mapping processes by 70%",;
    "Improve audit trail and compliance reporting efficiency",;
    "Enhance customer trust through transparent data handling"
  ],;

  const dataRights = [;
    {;
      right: "Right to Access",description: "Provide individuals with access to their personal data",icon: Eye;
    };
    {;
      right: "Right to Rectification",description: "Allow individuals to correct inaccurate personal data",icon: FileText;
    };
    {;
      right: "Right to Erasure",description: "Process requests to delete personal data (right to be forgotten)",icon: Trash;
    };
    {;
      right: "Right to Portability",description: "Provide personal data in a structured, machine-readable format",;
      icon: Download;
    };
    {;
      right: "Right to Restriction",description: "Limit processing of personal data in certain circumstances",icon: Lock;
    };
    {;
      right: "Right to Object",description: "Allow individuals to object to processing of their data",icon: AlertTriangle;
    };
  ];
  const useCases = [;
    {;
      industry: "E-commerce",description: "Customer data management, order history, and preference handling"
    },;
    {;
      industry: "Financial Services",description: "Account data, transaction history, and financial information management"
    },;
    {;
      industry: "Healthcare",description: "Patient data, medical records, and health information privacy"
    },;
    {;
      industry: "Technology & SaaS",description: "User data, application usage, and service-related information"
    },;
    {;
      industry: "Education",description: "Student data, academic records, and educational service information"
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="DSR Portal - Zion Tech Group"
        description="Ensure GDPR and CCPA compliance with our AI-powered Data Subject Rights portal. Automate privacy request processing and data management."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 lg:py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></[^>]*>
        <div className="container mx-auto px-4 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6">;
              <[^>]*/>
              <span className="text-indigo-300 font-medium">DSR Portal</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Ensure Privacy Compliance with;
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">;
                {" "}AI-Powered DSR Management;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your data privacy compliance with intelligent automation, comprehensive ;
              data subject rights management, and AI-powered insights for GDPR and CCPA compliance.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Advanced Privacy Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered DSR portal combines cutting-edge artificial intelligence ;
              with comprehensive privacy compliance methodologies to ensure regulatory adherence.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Measurable Compliance Impact;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See real results with our AI-powered DSR solutions that deliver quantifiable ;
              improvements across all aspects of your privacy compliance operations.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</[^>]*>
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <motion.div
                    key={index};
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.6, delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-xl border border-indigo-400/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Industry-leading AI privacy algorithms</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Enterprise-grade security & compliance</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Global privacy regulation expertise</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">24/7 compliance support & training</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Proven compliance success track record</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Data Rights Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Comprehensive Data Subject Rights;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our DSR portal supports all major privacy regulation rights, ensuring ;
              comprehensive compliance with GDPR, CCPA, and other privacy laws.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {dataRights.map((right, index) => (;
              <motion.div
                key={right.right};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{right.right}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{right.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered DSR solutions are designed to work across industries, providing ;
              tailored privacy compliance strategies for your specific data handling needs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={useCase.industry};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
              Ready to Ensure Privacy Compliance?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join hundreds of organizations that have already transformed their privacy ;
              compliance with our AI-powered DSR solutions.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};