import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, LightBulbIcon, ChartBarIcon, RocketLaunchIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
const AIAutonomousResearchAssistant = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <MagnifyingGlassIcon className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your research capabilities with our AI-powered autonomous research assistant. 
              Discover insights, analyze data, and accelerate breakthroughs across all domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
                Get Started Today
              </Link>
              <Link to="/case-studies" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Autonomous Research Assistant */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is AI Autonomous Research Assistant?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI Autonomous Research Assistant is a cutting-edge artificial intelligence system designed to 
                autonomously conduct comprehensive research across multiple domains. It combines advanced natural 
                language processing, machine learning algorithms, and vast knowledge databases to deliver 
                unprecedented research capabilities.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Unlike traditional research tools, our AI assistant works independently, continuously learning 
                and adapting to new information, identifying patterns, and generating insights that human 
                researchers might miss.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Autonomous Operation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Multi-Domain Expertise</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <AcademicCapIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Academic Research</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <ChartBarIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Market Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <LightBulbIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Innovation Discovery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <GlobeAltIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Global Trends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <MagnifyingGlassIcon className="h-8 w-8 text-blue-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Search & Discovery</h3>
              <p className="text-gray-300">
                Advanced semantic search capabilities that understand context and find relevant information 
                across multiple sources and languages.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <LightBulbIcon className="h-8 w-8 text-green-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
              <p className="text-gray-300">
                Identifies hidden patterns, correlations, and trends in large datasets that human researchers 
                might overlook.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-purple-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analysis & Visualization</h3>
              <p className="text-gray-300">
                Comprehensive data analysis with interactive visualizations and automated report generation.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <AcademicCapIcon className="h-8 w-8 text-orange-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Domain Expertise</h3>
              <p className="text-gray-300">
                Specialized knowledge across scientific, business, medical, and technological domains with 
                continuous learning capabilities.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Operation</h3>
              <p className="text-gray-300">
                Self-directed research processes that can work independently, prioritize tasks, and adapt 
                to new information automatically.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-pink-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Knowledge Access</h3>
              <p className="text-gray-300">
                Access to worldwide databases, research papers, patents, and real-time information sources 
                across multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Request</h3>
              <p className="text-gray-300">
                Submit your research query or topic through our intuitive interface. The AI analyzes your 
                requirements and develops a research strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Investigation</h3>
              <p className="text-gray-300">
                The AI independently searches multiple sources, analyzes data, identifies patterns, and 
                cross-references information across domains.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Insight Generation</h3>
              <p className="text-gray-300">
                Advanced algorithms process the collected data to generate insights, identify trends, and 
                create comprehensive research summaries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deliver Results</h3>
              <p className="text-gray-300">
                Receive detailed reports, visualizations, and actionable insights with source citations and 
                recommendations for further research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Academic Research</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Literature reviews and meta-analyses</li>
                <li>• Research gap identification</li>
                <li>• Citation analysis and impact assessment</li>
                <li>• Cross-disciplinary research connections</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Business Intelligence</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Market trend analysis</li>
                <li>• Competitive intelligence</li>
                <li>• Consumer behavior research</li>
                <li>• Industry landscape mapping</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Scientific Discovery</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Hypothesis generation</li>
                <li>• Experimental design optimization</li>
                <li>• Data pattern recognition</li>
                <li>• Research collaboration identification</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Patent Research</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Prior art searches</li>
                <li>• Patent landscape analysis</li>
                <li>• Innovation opportunity identification</li>
                <li>• Technology trend forecasting</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Medical Research</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Clinical trial analysis</li>
                <li>• Drug discovery research</li>
                <li>• Medical literature synthesis</li>
                <li>• Treatment effectiveness studies</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Technology Innovation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Emerging technology tracking</li>
                <li>• Innovation opportunity analysis</li>
                <li>• Technology convergence research</li>
                <li>• Future trend prediction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose AI Autonomous Research Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unprecedented Speed</h3>
                  <p className="text-gray-300">
                    Complete research tasks in minutes that would take human researchers weeks or months, 
                    dramatically accelerating your innovation timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-300">
                    Access and analyze information from thousands of sources simultaneously, ensuring no 
                    relevant data is missed in your research.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pattern Discovery</h3>
                  <p className="text-gray-300">
                    Identify hidden connections and patterns across multiple domains that human researchers 
                    might never discover, leading to breakthrough insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-gray-300">
                    Research never stops with our autonomous AI that works around the clock, continuously 
                    learning and updating information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                  <p className="text-gray-300">
                    Reduce research costs significantly by automating time-consuming tasks and eliminating 
                    the need for extensive manual research teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Research</h3>
                  <p className="text-gray-300">
                    Handle multiple research projects simultaneously without compromising quality, scaling 
                    your research capabilities exponentially.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous research with Zion Tech Group's AI Research Assistant. 
            Accelerate discoveries, uncover insights, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
              Start Your Research Project
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default AIAutonomousResearchAssistant;
