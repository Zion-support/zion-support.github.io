import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
CogBarChart3TargetArrowRightCheckCircle

export default function EnterpriseAutomation2026Banner() {
  return (
    <section className="bg-gradient-to-r from-green-800 via-blue-800 to-purple-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Cog className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">ENTERPRISE AUTOMATION 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform $100B+ in Business Operations
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Achieve 99.8% process accuracy and 500% efficiency improvements with the ultimate enterprise automation revolution 'that', 's reshaping how organizations operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$100B+</div>
            <div className="text-lg font-semibold mb-2">Operations Automated</div>
            <div className="text-sm opacity-80">Global enterprise operations transformed</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
            <div className="text-lg font-semibold mb-2">Process Accuracy</div>
            <div className="text-sm opacity-80">Revolutionary precision in automated processes</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
            <div className="text-lg font-semibold mb-2">Efficiency Improvement</div>
            <div className="text-sm opacity-80">Unprecedented operational efficiency gains</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">$2.3T</div>
            <div className="text-lg font-semibold mb-2">Value Created</div>
            <div className="text-sm opacity-80">Cumulative value through AI automation</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Industry-Specific Breakthroughs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">$25B</div>
              <div className="font-semibold mb-2">Financial Services</div>
              <div className="text-sm opacity-80">Algorithmic trading with 99.97% accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">$30B</div>
              <div className="font-semibold mb-2">Manufacturing</div>
              <div className="text-sm opacity-80">Smart manufacturing with predictive maintenance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">$20B</div>
              <div className="font-semibold mb-2">Healthcare</div>
              <div className="text-sm opacity-80">Medical process automation with 99.8% accuracy</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/blog/ai-2026-enterprise-automation-revolution-ultimate-guide"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-green-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Read Ultimate Automation Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Automation Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          <div className="flex items-center justify-center text-sm opacity-70">
            <CheckCircle className="w-4 h-4 mr-2" />
            Join 500+ enterprises achieving 340% ROI with AI automation
          </div>
        </div>
      </div>
    </section>
  );
}