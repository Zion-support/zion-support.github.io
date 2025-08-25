import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Shield, Eye, CheckCircle, AlertTriangle, BarChart3, Users, Globe, Zap } from 'lucide-react';

export default function AccessibilityAuditor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SEOHead 
        title="Accessibility Auditor - Zion Tech Group"
        description="Professional accessibility auditing services to ensure your digital products meet WCAG guidelines and provide inclusive user experiences."
        keywords="accessibility audit, WCAG compliance, digital accessibility, inclusive design, user experience, ADA compliance"
        type="website"
        url="https://ziontechgroup.com/accessibility-auditor"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Eye className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Accessibility Auditor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ensure your digital products are accessible to everyone with our comprehensive accessibility auditing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Accessibility Audit
            </Link>
            <Link
              to="/services/accessibility"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Comprehensive Accessibility Auditing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">WCAG 2.1 Compliance</h3>
              <p className="text-gray-300">
                Full compliance assessment against WCAG 2.1 AA standards with detailed reporting and recommendations.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <Eye className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Visual Accessibility</h3>
              <p className="text-gray-300">
                Color contrast analysis, typography assessment, and visual hierarchy evaluation for optimal readability.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-6">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Keyboard Navigation</h3>
              <p className="text-gray-300">
                Complete keyboard accessibility testing including focus management and tab order validation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Screen Reader Testing</h3>
              <p className="text-gray-300">
                Comprehensive screen reader compatibility testing with NVDA, JAWS, and VoiceOver.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Performance Metrics</h3>
              <p className="text-gray-300">
                Accessibility performance scoring and benchmarking against industry standards.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">User Testing</h3>
              <p className="text-gray-300">
                Real user testing with individuals who have disabilities to ensure practical accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Accessibility Auditing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Discovery</h3>
              <p className="text-gray-300">
                Initial assessment of your digital product and identification of accessibility requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Testing</h3>
              <p className="text-gray-300">
                Comprehensive automated and manual testing using industry-standard tools and methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Analysis</h3>
              <p className="text-gray-300">
                Detailed analysis of findings with prioritized recommendations for improvement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Report</h3>
              <p className="text-gray-300">
                Comprehensive report with actionable insights and roadmap for accessibility improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Ready to Make Your Digital Products Accessible?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our accessibility experts are ready to help you create inclusive digital experiences that work for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Accessibility Audit
            </Link>
            <Link
              to="/services/accessibility"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              View Accessibility Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}