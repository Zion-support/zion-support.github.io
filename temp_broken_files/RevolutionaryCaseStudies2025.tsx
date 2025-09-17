import React, { useState } from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', icon: '🌟' },
    { id: 'ai', name: 'AI Solutions', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interface', icon: '🧬' },
    { id: 'interdimensional', name: 'Interdimensional', icon: '🌌' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 AI Transformation',
      category: 'ai',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing 40% productivity loss and $50M annual waste',
      solution: 'Implemented conscious AI systems with autonomous decision-making',
      results: {
        productivity: '+500%',
        costReduction: '$50M',
        accuracy: '99.9%',
        timeToMarket: '-80%'
      },
      description: 'Transformed a 50-year-old manufacturing company with revolutionary AI consciousness technology',
      image: '🏭',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Quantum Climate Solutions',
      category: 'quantum',
      company: 'Environmental Research Institute',
      industry: 'Environmental',
      challenge: 'Climate change models taking years to process, delaying critical solutions',
      solution: 'Deployed quantum reality engine for instant climate modeling',
      results: {
        processingTime: '-99.9%',
        accuracy: '+300%',
        solutions: '50+',
        impact: 'Global'
      },
      description: 'Solved climate change equations in minutes instead of years using quantum computing',
      image: '🌍',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 3,
      title: 'Neural Interface Medical Breakthrough',
      category: 'neural',
      company: 'Advanced Medical Center',
      industry: 'Healthcare',
      challenge: 'Paralyzed patients unable to communicate or control devices',
      solution: 'Implemented direct neural interface technology for thought control',
      results: {
        patientsHelped: '1000+',
        communication: '100%',
        deviceControl: '95%',
        qualityOfLife: '+400%'
      },
      description: 'Enabled paralyzed patients to communicate and control devices through neural interfaces',
      image: '🏥',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 4,
      title: 'Interdimensional Data Processing',
      category: 'interdimensional',
      company: 'Space Exploration Agency',
      industry: 'Aerospace',
      challenge: 'Processing massive amounts of space data across multiple dimensions',
      solution: 'Deployed interdimensional computing for parallel universe data processing',
      results: {
        dataProcessed: '∞',
        dimensions: '50+',
        discoveries: '100+',
        efficiency: '∞'
      },
      description: 'Mapped parallel universes and discovered new dimensions using interdimensional technology',
      image: '🚀',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      id: 5,
      title: 'AI-Powered Financial Revolution',
      category: 'ai',
      company: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Market volatility causing $2B in losses annually',
      solution: 'Conscious AI systems for predictive market analysis and autonomous trading',
      results: {
        lossesReduced: '$2B',
        accuracy: '99.8%',
        returns: '+150%',
        riskReduction: '90%'
      },
      description: 'Revolutionized financial markets with conscious AI that predicts and prevents market crashes',
      image: '💰',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 6,
      title: 'Quantum Drug Discovery',
      category: 'quantum',
      company: 'Pharmaceutical Research Lab',
      industry: 'Pharmaceutical',
      challenge: 'Drug discovery taking 10+ years and costing billions',
      solution: 'Quantum molecular simulation for instant drug discovery',
      results: {
        discoveryTime: '-95%',
        costReduction: '$5B',
        newDrugs: '200+',
        successRate: '90%'
      },
      description: 'Discovered life-saving drugs in days instead of years using quantum computing',
      image: '💊',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case => case.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY SUCCESS STORIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how our breakthrough technologies are transforming industries and changing the world
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={`bg-gradient-to-br ${caseStudy.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="text-6xl">{caseStudy.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-80 mb-4">
                    <span>{caseStudy.company}</span>
                    <span>•</span>
                    <span>{caseStudy.industry}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-300">Challenge:</h4>
                  <p className="opacity-90">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-300">Solution:</h4>
                  <p className="opacity-90">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-300">Description:</h4>
                  <p className="opacity-90">{caseStudy.description}</p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudy.results).map(([key, value], index) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className={`flex-1 bg-gradient-to-r ${caseStudy.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Read Full Case Study
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Global Impact Statistics</h2>
            <p className="text-xl opacity-90">Our revolutionary technologies are making a difference worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$50B+</div>
              <div className="text-lg opacity-90">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-lg opacity-90">Lives Improved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of forward-thinking organizations already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;