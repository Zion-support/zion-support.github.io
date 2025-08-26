import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  CheckCircle,
  Calendar,
  Mail
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const dataCollection = [
    {
      category: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Company name", "Job title"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser type", "Device information", "Usage analytics", "Cookies"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Business Information",
      examples: ["Company size", "Industry", "Project requirements", "Budget information"],
      purpose: "To tailor our solutions to your needs"
    }
  ];

  const dataUsage = [
    "Provide and maintain our services",
    "Improve and personalize user experience",
    "Communicate with you about our services",
    "Ensure security and prevent fraud",
    "Comply with legal obligations",
    "Conduct research and analytics"
  ];

  const dataProtection = [
    "End-to-end encryption for data transmission",
    "Secure data centers with 24/7 monitoring",
    "Regular security audits and penetration testing",
    "Access controls and authentication measures",
    "Data backup and disaster recovery",
    "Employee training on data protection"
  ];

  const userRights = [
    {
      right: "Access",
      description: "Request a copy of your personal data"
    },
    {
      right: "Rectification",
      description: "Correct inaccurate or incomplete data"
    },
    {
      right: "Erasure",
      description: "Request deletion of your personal data"
    },
    {
      right: "Portability",
      description: "Receive your data in a portable format"
    },
    {
      right: "Objection",
      description: "Object to certain types of data processing"
    },
    {
      right: "Restriction",
      description: "Limit how we process your data"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy ensures your information is secure and protected."
        keywords="privacy policy, data protection, GDPR, privacy, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Your privacy is our priority. Learn how we protect your data and ensure your information remains secure.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-5 w-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Information We Collect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCollection.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-300">• {example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Purpose:</h4>
                  <p className="text-sm text-gray-300">{category.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            How We Use Your Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataUsage.map((usage, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{usage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            How We Protect Your Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProtection.map((protection, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-cyan-400" />
                </div>
                <p className="text-gray-300 text-center">{protection}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{right.right}</h3>
                <p className="text-gray-300">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400">privacy@ziontechgroup.com</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Eye className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Data Protection Officer</h3>
              <p className="text-cyan-400">dpo@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Privacy Matters
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            We're committed to protecting your data and ensuring transparency in everything we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Privacy Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;