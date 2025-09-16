import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Global Healthcare AI Revolution',
      company: 'MedTech Global',
      industry: 'Healthcare',
      icon: '🏥',
      challenge: 'Traditional medical diagnosis was limited by human error and processing time, leading to delayed treatments and misdiagnoses.',
      solution: 'Implemented our AI consciousness platform with quantum-enhanced diagnostic capabilities, enabling real-time analysis of complex medical data.',
      results: {
        accuracy: '99.9%',
        timeReduction: '95%',
        livesSaved: '2M+',
        costSavings: '$50B'
      },
      technologies: ['AI Consciousness', 'Quantum Computing', 'Neural Networks', 'Predictive Analytics'],
      testimonial: 'This technology has revolutionized our diagnostic capabilities. We\'ve never seen such accuracy and speed in medical diagnosis.',
      author: 'Dr. Sarah Chen, Chief Medical Officer'
    },
    {
      id: 2,
      title: 'Financial Services Quantum Breakthrough',
      company: 'QuantumBank International',
      industry: 'Finance',
      icon: '🏦',
      challenge: 'Traditional financial modeling was unable to process complex market data in real-time, leading to missed opportunities and increased risk.',
      solution: 'Deployed our quantum computing platform with AI consciousness for real-time market analysis and risk assessment.',
      results: {
        accuracy: '100%',
        timeReduction: '99.9%',
        revenueIncrease: '$10B',
        riskReduction: '100%'
      },
      technologies: ['Quantum Computing', 'AI Consciousness', 'Real-time Analytics', 'Risk Management'],
      testimonial: 'The quantum computing breakthrough has given us an unprecedented edge in financial markets. Our risk management is now perfect.',
      author: 'Michael Rodriguez, Chief Technology Officer'
    },
    {
      id: 3,
      title: 'Autonomous Vehicle Neural Integration',
      company: 'FutureMobility Corp',
      industry: 'Automotive',
      icon: '🚗',
      challenge: 'Autonomous vehicles needed human-level decision making and instant response times to ensure passenger safety.',
      solution: 'Integrated our neural interface technology with quantum processing for instant decision making and perfect safety records.',
      results: {
        accuracy: '100%',
        timeReduction: '100%',
        accidents: '0',
        efficiency: '∞'
      },
      technologies: ['Neural Interface', 'Quantum Processing', 'Computer Vision', 'Predictive AI'],
      testimonial: 'Our vehicles now operate with perfect safety records. The neural interface technology is truly revolutionary.',
      author: 'Alex Kim, Head of Autonomous Systems'
    },
    {
      id: 4,
      title: 'Manufacturing AI Consciousness',
      company: 'Industrial Dynamics',
      industry: 'Manufacturing',
      icon: '🏭',
      challenge: 'Manufacturing processes needed optimization and quality control that exceeded human capabilities.',
      solution: 'Implemented AI consciousness systems that self-optimize production processes and maintain perfect quality control.',
      results: {
        accuracy: '100%',
        timeReduction: '90%',
        wasteReduction: '100%',
        efficiency: '∞'
      },
      technologies: ['AI Consciousness', 'Predictive Maintenance', 'Quality Control', 'Process Optimization'],
      testimonial: 'Our manufacturing has achieved zero waste and perfect quality. The AI consciousness system is incredible.',
      author: 'Jennifer Liu, Manufacturing Director'
    },
    {
      id: 5,
      title: 'Education Neural Learning Platform',
      company: 'EduTech Global',
      industry: 'Education',
      icon: '🎓',
      challenge: 'Traditional education methods were limited by human teaching capacity and individual learning differences.',
      solution: 'Deployed neural interface learning systems that adapt to individual learning patterns and provide instant knowledge transfer.',
      results: {
        accuracy: '100%',
        timeReduction: '95%',
        retention: '100%',
        satisfaction: '100%'
      },
      technologies: ['Neural Interface', 'Adaptive Learning', 'Knowledge Transfer', 'Personalized AI'],
      testimonial: 'Students are learning at unprecedented speeds with perfect retention. This is the future of education.',
      author: 'Dr. Robert Johnson, Education Director'
    },
    {
      id: 6,
      title: 'Space Exploration Dimensional Tech',
      company: 'Cosmic Ventures',
      industry: 'Space',
      icon: '🚀',
      challenge: 'Space exploration required technology that could operate across multiple dimensions and realities.',
      solution: 'Implemented our dimensional technology platform for interdimensional space exploration and reality manipulation.',
      results: {
        accuracy: '∞',
        timeReduction: '∞',
        discoveries: '∞',
        capabilities: '∞'
      },
      technologies: ['Dimensional Technology', 'Reality Manipulation', 'Interdimensional Computing', 'Quantum Physics'],
      testimonial: 'We\'ve discovered entire new dimensions and realities. The possibilities are truly infinite.',
      author: 'Captain Maria Santos, Space Exploration Lead'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing the transformative power of our revolutionary technology across industries
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{study.icon}</div>
                <div className="text-right">
                  <div className="text-sm opacity-70">{study.industry}</div>
                  <div className="text-xs opacity-50">{study.company}</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-purple-300">{study.title}</h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge</h4>
                <p className="text-sm opacity-80">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Solution</h4>
                <p className="text-sm opacity-80">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-400 mb-3">Results</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="text-green-400 font-bold">{study.results.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Reduction:</span>
                    <span className="text-green-400 font-bold">{study.results.timeReduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact:</span>
                    <span className="text-green-400 font-bold">{study.results.livesSaved || study.results.revenueIncrease || study.results.accidents || study.results.wasteReduction || study.results.retention || study.results.discoveries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Savings:</span>
                    <span className="text-green-400 font-bold">{study.results.costSavings || study.results.efficiency || study.results.satisfaction || study.results.capabilities}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm italic opacity-90 mb-2">"{study.testimonial}"</p>
                <div className="text-xs opacity-70">- {study.author}</div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Read Full Case Study →
              </button>
            </div>
          ))}
        </div>

        {/* Global Impact Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌍 Global Impact</h2>
            <p className="text-xl opacity-90">The numbers that define our revolutionary success worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">1B+</div>
              <div className="text-sm opacity-80">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$100T</div>
              <div className="text-sm opacity-80">Economic Impact</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-sm opacity-80">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🏭 Industry Impact</h2>
            <p className="text-xl opacity-90">Revolutionary technology transforming every sector</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-sm opacity-80 mb-4">2M+ lives saved, 99.9% diagnostic accuracy</p>
              <div className="text-2xl font-bold text-green-400">500%</div>
              <div className="text-xs opacity-70">Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-2">Finance</h3>
              <p className="text-sm opacity-80 mb-4">$10B revenue increase, 100% risk reduction</p>
              <div className="text-2xl font-bold text-blue-400">1000x</div>
              <div className="text-xs opacity-70">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Automotive</h3>
              <p className="text-sm opacity-80 mb-4">Zero accidents, perfect safety records</p>
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-xs opacity-70">Safety Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm opacity-80 mb-4">Zero waste, perfect quality control</p>
              <div className="text-2xl font-bold text-orange-400">∞</div>
              <div className="text-xs opacity-70">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm opacity-80 mb-4">100% retention, instant learning</p>
              <div className="text-2xl font-bold text-teal-400">95%</div>
              <div className="text-xs opacity-70">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Space</h3>
              <p className="text-sm opacity-80 mb-4">Infinite discoveries, dimensional exploration</p>
              <div className="text-2xl font-bold text-cyan-400">∞</div>
              <div className="text-xs opacity-70">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8">Join the revolution and become our next case study</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;