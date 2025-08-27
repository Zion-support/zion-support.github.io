import React from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Shield,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Users,
  Globe,
  Zap,
  Target,
  Award,
  ArrowRight,
  Accessibility,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const AccessibilityAuditor: React.FC = () => {
  const features = [
    {
      title: "Automated Testing",
      description: "Comprehensive automated accessibility testing for WCAG 2.1 AA compliance",
      icon: "🔍"
    },
    {
      title: "Manual Review",
      description: "Expert manual accessibility audits by certified professionals",
      icon: "👁️"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for accessibility issues",
      icon: "📊"
    },
    {
      title: "Compliance Reporting",
      description: "Detailed reports with actionable recommendations",
      icon: "📋"
    }
  ];

  const complianceStandards = [
    "WCAG 2.1 AA",
    "Section 508",
    "ADA Title III",
    "EN 301 549",
    "ISO 9241-171"
  ];

  const testingAreas = [
    {
      category: "Visual Accessibility",
      items: ["Color contrast", "Text sizing", "Screen reader compatibility", "Keyboard navigation"]
    },
    {
      category: "Content Accessibility",
      items: ["Alt text for images", "Semantic HTML", "ARIA labels", "Form accessibility"]
    },
    {
      category: "Technical Accessibility",
      items: ["Code validation", "Performance optimization", "Mobile responsiveness", "Cross-browser compatibility"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accessibility
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Auditor
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensure your digital products are accessible to everyone. Our comprehensive
              accessibility auditing service helps you meet compliance standards and
              provide inclusive user experiences.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Accessibility Testing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Compliance Standards We Test</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                    <span className="text-blue-400 font-semibold">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testing Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Testing Areas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testingAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{area.category}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Audit Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Initial Assessment</h3>
                <p className="text-gray-300 text-sm">Comprehensive review of your current accessibility status</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Automated Testing</h3>
                <p className="text-gray-300 text-sm">Run comprehensive automated accessibility tests</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Manual Review</h3>
                <p className="text-gray-300 text-sm">Expert manual testing and validation</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Report & Recommendations</h3>
                <p className="text-gray-300 text-sm">Detailed findings and actionable solutions</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Accessibility Auditor?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Business Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Expand your audience reach to users with disabilities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Reduce legal risk and ensure compliance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Improve overall user experience for all users
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    Enhance brand reputation and social responsibility
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Automated testing for consistent results
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Expert manual review and validation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Detailed technical recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    Ongoing monitoring and support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Make Your Digital Products Accessible?</h3>
              <p className="text-gray-300 mb-6">
                Get a comprehensive accessibility audit and ensure your products are
                inclusive for all users. Contact us today to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Accessibility Audit
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityAuditor;