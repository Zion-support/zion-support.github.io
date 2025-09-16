import React, { useState } from 'react';

const DigitalTransformationHub2025: React.FC = () => {
  const [activePhase, setActivePhase] = useState('assessment');

  const transformationPhases = [
    {
      id: 'assessment',
      title: 'Digital Assessment',
      icon: '🔍',
      description: 'Comprehensive analysis of your current digital landscape',
      duration: '2-4 weeks',
      deliverables: ['Current state analysis', 'Gap identification', 'ROI projections', 'Strategic roadmap']
    },
    {
      id: 'strategy',
      title: 'Strategy Development',
      icon: '📋',
      description: 'Custom digital transformation strategy aligned with business goals',
      duration: '3-6 weeks',
      deliverables: ['Digital strategy document', 'Technology roadmap', 'Change management plan', 'Success metrics']
    },
    {
      id: 'implementation',
      title: 'Implementation',
      icon: '⚙️',
      description: 'Phased rollout of digital solutions with continuous optimization',
      duration: '3-12 months',
      deliverables: ['Deployed solutions', 'Training programs', 'Performance monitoring', 'Continuous improvement']
    },
    {
      id: 'optimization',
      title: 'Optimization',
      icon: '🚀',
      description: 'Continuous improvement and scaling of digital capabilities',
      duration: 'Ongoing',
      deliverables: ['Performance analytics', 'Optimization recommendations', 'Scaling strategies', 'Innovation pipeline']
    }
  ];

  const industrySolutions = [
    {
      title: 'Healthcare',
      icon: '🏥',
      solutions: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics', 'Patient Engagement'],
      benefits: ['40% efficiency gain', 'Improved patient outcomes', 'Reduced costs', 'Better data insights']
    },
    {
      title: 'Manufacturing',
      icon: '🏭',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control'],
      benefits: ['30% productivity increase', '25% cost reduction', '99.9% uptime', 'Real-time monitoring']
    },
    {
      title: 'Financial Services',
      icon: '💰',
      solutions: ['Digital Banking', 'AI Fraud Detection', 'Blockchain Integration', 'Customer Analytics'],
      benefits: ['50% faster processing', '99.9% fraud prevention', 'Enhanced security', 'Better customer experience']
    },
    {
      title: 'Retail & E-commerce',
      icon: '🛒',
      solutions: ['Omnichannel Experience', 'AI Personalization', 'Inventory Optimization', 'Customer Analytics'],
      benefits: ['35% sales increase', '60% customer satisfaction', 'Reduced inventory costs', 'Personalized experiences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔄 DIGITAL TRANSFORMATION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Digital Transformation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Accelerate your digital transformation journey with our comprehensive suite of solutions, 
            expert guidance, and proven methodologies that drive measurable business outcomes.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Transformation
            </button>
            <button className="border-2 border-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-300 font-semibold">
              Download Guide
            </button>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Transformation Journey</h2>
            <p className="text-xl opacity-90">Four phases to digital excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {transformationPhases.map((phase, index) => (
              <div
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 border-2 ${
                  activePhase === phase.id
                    ? 'bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border-indigo-400 scale-105'
                    : 'bg-white/10 border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{phase.description}</p>
                  <div className="text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
                    {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {transformationPhases.map((phase) => (
              activePhase === phase.id && (
                <div key={phase.id} className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 flex items-center">
                      <span className="text-4xl mr-4">{phase.icon}</span>
                      {phase.title}
                    </h3>
                    <p className="text-lg mb-6 opacity-90">{phase.description}</p>
                    <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Duration: {phase.duration}</h4>
                      <p className="text-sm opacity-90">Flexible timeline based on your organization's needs and complexity</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Deliverables</h4>
                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <span className="text-indigo-400">✓</span>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl opacity-90">Tailored digital transformation for your sector</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center">{industry.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-sm">Solutions:</h4>
                  <div className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="text-xs opacity-90">• {solution}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-sm">Benefits:</h4>
                  <div className="space-y-1">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs text-indigo-300">✓ {benefit}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transformation Success Stories</h2>
            <p className="text-xl opacity-90">Real results from real companies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-4">Healthcare Network</h3>
              <p className="opacity-90 mb-4">
                Transformed a 50-hospital network with integrated EHR, AI diagnostics, and telemedicine platforms.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Patient satisfaction:</span>
                  <span className="font-bold text-green-400">+45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Operational efficiency:</span>
                  <span className="font-bold text-blue-400">+60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cost reduction:</span>
                  <span className="font-bold text-purple-400">$12M annually</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-4">Manufacturing Giant</h3>
              <p className="opacity-90 mb-4">
                Implemented IoT, AI, and predictive maintenance across 25 manufacturing facilities worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Productivity:</span>
                  <span className="font-bold text-green-400">+35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Downtime reduction:</span>
                  <span className="font-bold text-blue-400">-70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Quality improvement:</span>
                  <span className="font-bold text-purple-400">+25%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-400/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">Financial Institution</h3>
              <p className="opacity-90 mb-4">
                Digital transformation of banking operations with AI, blockchain, and advanced analytics.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Transaction speed:</span>
                  <span className="font-bold text-green-400">+80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Fraud detection:</span>
                  <span className="font-bold text-blue-400">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer satisfaction:</span>
                  <span className="font-bold text-purple-400">+55%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced Technology Stack</h2>
            <p className="text-xl opacity-90">Cutting-edge tools for digital transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🤖</span>
                Artificial Intelligence
              </h3>
              <div className="space-y-2 text-sm">
                <div>• Machine Learning & Deep Learning</div>
                <div>• Natural Language Processing</div>
                <div>• Computer Vision</div>
                <div>• Predictive Analytics</div>
                <div>• Autonomous Systems</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">☁️</span>
                Cloud & Infrastructure
              </h3>
              <div className="space-y-2 text-sm">
                <div>• Multi-cloud Architecture</div>
                <div>• Container Orchestration</div>
                <div>• Serverless Computing</div>
                <div>• Edge Computing</div>
                <div>• DevOps & CI/CD</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔗</span>
                Emerging Technologies
              </h3>
              <div className="space-y-2 text-sm">
                <div>• Blockchain & Web3</div>
                <div>• Internet of Things (IoT)</div>
                <div>• Augmented Reality (AR)</div>
                <div>• Quantum Computing</div>
                <div>• 5G Networks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful organizations that have accelerated their growth through digital transformation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-indigo-400 px-10 py-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationHub2025;