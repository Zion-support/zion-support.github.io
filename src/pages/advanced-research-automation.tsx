import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Brain, Search, BarChart3, Zap, Globe, Database, Users, Lightbulb, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function AdvancedResearchAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <SEOHead 
        title="Advanced Research Automation - Zion Tech Group"
        description="AI-powered research automation platform that accelerates discovery, analysis, and insights generation across multiple domains and industries."
        keywords="research automation, AI research, automated analysis, data discovery, research insights, machine learning research"
        type="website"
        url="https://ziontechgroup.com/advanced-research-automation"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Advanced Research Automation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform research workflows with AI-powered automation that accelerates discovery and generates actionable insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Research Automation
            </Link>
            <Link
              to="/ai-autonomous-research-assistant"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Research Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Intelligent Research Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <Search className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Automated Literature Review</h3>
              <p className="text-gray-300">
                AI-powered systematic review of research papers, patents, and publications across multiple databases.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Data Analysis & Mining</h3>
              <p className="text-gray-300">
                Advanced analytics and pattern recognition to extract insights from large datasets and research findings.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Real-time Collaboration</h3>
              <p className="text-gray-300">
                Multi-user research environment with real-time collaboration and version control capabilities.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-6">
                <Globe className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Cross-Domain Research</h3>
              <p className="text-gray-300">
                Interdisciplinary research capabilities that connect insights across multiple fields and industries.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-6">
                <Database className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Knowledge Graph</h3>
              <p className="text-gray-300">
                Intelligent knowledge mapping that reveals connections and relationships between research concepts.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-6">
                <Lightbulb className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Hypothesis Generation</h3>
              <p className="text-gray-300">
                AI-driven hypothesis generation based on data patterns and research gaps identification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Workflow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Streamlined Research Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Discovery</h3>
              <p className="text-gray-300">
                Automated literature search and research gap identification across multiple sources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Collection</h3>
              <p className="text-gray-300">
                Intelligent data collection and organization from various research databases and sources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Analysis</h3>
              <p className="text-gray-300">
                AI-powered data analysis, pattern recognition, and statistical modeling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Synthesis</h3>
              <p className="text-gray-300">
                Automated synthesis of findings and generation of comprehensive research reports.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                5
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Dissemination</h3>
              <p className="text-gray-300">
                Automated report generation, presentation creation, and publication preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Healthcare & Pharma</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Drug discovery research, clinical trial analysis, and medical literature review automation.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Clinical research automation</li>
                <li>• Drug repurposing analysis</li>
                <li>• Medical literature synthesis</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Financial Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Market research, risk analysis, and regulatory compliance research automation.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Market trend analysis</li>
                <li>• Risk assessment research</li>
                <li>• Regulatory compliance review</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                  <Lightbulb className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Technology & Innovation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Patent research, technology trend analysis, and competitive intelligence automation.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Patent landscape analysis</li>
                <li>• Technology trend research</li>
                <li>• Competitive intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Research Automation Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">10x Faster Research</h3>
                  <p className="text-gray-300">Accelerate research timelines with automated data collection and analysis.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-300">Access and analyze research from multiple databases and sources simultaneously.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-300">Discover hidden patterns and connections that human researchers might miss.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cost Reduction</h3>
                  <p className="text-gray-300">Reduce research costs by automating repetitive tasks and manual processes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
                  <p className="text-gray-300">Enable real-time collaboration across research teams and organizations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
                  <p className="text-gray-300">Ensure research quality with automated validation and consistency checks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Accelerate Your Research Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that are transforming their research capabilities with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Research Automation
            </Link>
            <Link
              to="/ai-autonomous-research-assistant"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Research Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}