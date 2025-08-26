import React from 'react';
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const dataCategories = [
    {
      icon: Users,
      title: "Personal Information",
      description: "Name, email address, phone number, company name, and job title",
      examples: ["Contact forms", "Newsletter signups", "Service inquiries"]
    },
    {
      icon: Database,
      title: "Technical Data",
      description: "IP address, browser type, device information, and usage analytics",
      examples: ["Website visits", "Service usage", "Performance monitoring"]
    },
    {
      icon: Globe,
      title: "Business Information",
      description: "Company details, project requirements, and service preferences",
      examples: ["Service consultations", "Project proposals", "Client communications"]
    }
  ];

  const dataUsage = [
    {
      icon: Mail,
      title: "Communication",
      description: "Respond to inquiries, provide support, and send important updates"
    },
    {
      icon: Shield,
      title: "Service Delivery",
      description: "Provide requested services, manage accounts, and ensure quality"
    },
    {
      icon: Users,
      title: "Improvement",
      description: "Enhance our services, develop new features, and optimize performance"
    }
  ];

  const dataProtection = [
    {
      icon: Lock,
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols"
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Strict access controls and authentication measures protect your data"
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "Continuous monitoring and regular security audits ensure data protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Privacy is Our
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Priority</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our services, or interact with us in any way.
              </p>
              <p className="text-lg text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We collect various types of information to provide and improve our services while ensuring your privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-green-400">Examples:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use the information we collect for specific, legitimate business purposes to serve you better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataUsage.map((usage, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <usage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{usage.title}</h3>
                <p className="text-gray-300">{usage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataProtection.map((protection, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <protection.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{protection.title}</h3>
                <p className="text-gray-300">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Information Sharing */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>To comply with legal obligations or court orders</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>To protect our rights, property, or safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>With trusted service providers who assist in operating our business</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Access:</strong> Request a copy of the personal information we hold about you</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Portability:</strong> Request transfer of your data to another service provider</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Objection:</strong> Object to processing of your personal information</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Essential Cookies:</strong> Required for basic website functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                You can control cookie settings through your browser preferences. However, disabling certain cookies 
                may affect website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Active Accounts:</strong> For the duration of your account and service relationship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Marketing Communications:</strong> Until you opt out or request deletion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> As required by applicable laws and regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this Privacy Policy or our data practices, 
            please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>privacy@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 (302) 464-0950</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;