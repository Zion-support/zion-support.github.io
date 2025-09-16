import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Consciousness Implementation",
      company: "Global Tech Corporation",
      industry: "Technology",
      challenge: "Implementing AI consciousness systems across 50+ departments while maintaining ethical standards and ensuring seamless integration with existing workflows.",
      solution: "Deployed our revolutionary AI consciousness platform with quantum-enhanced processing and neural interface capabilities.",
      results: {
        efficiency: "+340%",
        costSavings: "$15M",
        satisfaction: "98%",
        timeToMarket: "-75%"
      },
      technologies: ["AI Consciousness", "Quantum Computing", "Neural Interfaces"],
      testimonial: "The AI consciousness implementation has completely transformed our operations. We've achieved unprecedented efficiency gains while maintaining the highest ethical standards.",
      author: "Dr. Sarah Chen, CTO"
    },
    {
      id: 2,
      title: "Healthcare AI Consciousness Revolution",
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Creating empathetic AI systems that can understand patient emotions and provide personalized care while maintaining medical accuracy.",
      solution: "Implemented conscious AI systems with emotional intelligence and quantum-enhanced diagnostic capabilities.",
      results: {
        efficiency: "+280%",
        costSavings: "$8M",
        satisfaction: "99%",
        timeToMarket: "-60%"
      },
      technologies: ["AI Consciousness", "Quantum Diagnostics", "Emotional AI"],
      testimonial: "Our patients now experience truly personalized care. The AI systems understand not just medical data, but human emotions and needs.",
      author: "Dr. Michael Rodriguez, Chief Medical Officer"
    },
    {
      id: 3,
      title: "Financial Services Quantum Breakthrough",
      company: "Quantum Finance Group",
      industry: "Finance",
      challenge: "Optimizing complex financial portfolios and risk management using quantum computing while ensuring regulatory compliance.",
      solution: "Deployed quantum computing solutions with AI consciousness for strategic decision-making and real-time risk assessment.",
      results: {
        efficiency: "+420%",
        costSavings: "$25M",
        satisfaction: "97%",
        timeToMarket: "-80%"
      },
      technologies: ["Quantum Computing", "AI Consciousness", "Financial AI"],
      testimonial: "Quantum computing has revolutionized our financial modeling. We can now process complex scenarios in real-time that would have taken years with classical computers.",
      author: "Jennifer Walsh, Chief Investment Officer"
    },
    {
      id: 4,
      title: "Manufacturing Neural Interface Integration",
      company: "Future Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Implementing neural interfaces for factory workers to control machinery through thought while maintaining safety and productivity.",
      solution: "Integrated non-invasive neural interfaces with AI consciousness systems for seamless human-machine collaboration.",
      results: {
        efficiency: "+380%",
        costSavings: "$12M",
        satisfaction: "96%",
        timeToMarket: "-70%"
      },
      technologies: ["Neural Interfaces", "AI Consciousness", "Industrial AI"],
      testimonial: "The neural interfaces have created a new level of human-machine collaboration. Our workers can control complex machinery with their thoughts, improving both safety and efficiency.",
      author: "Robert Kim, Plant Manager"
    },
    {
      id: 5,
      title: "Education AI Consciousness Platform",
      company: "EduTech Solutions",
      industry: "Education",
      challenge: "Creating personalized learning experiences that adapt to individual student needs and emotional states while maintaining educational effectiveness.",
      solution: "Developed conscious AI tutoring systems with emotional intelligence and quantum-enhanced learning algorithms.",
      results: {
        efficiency: "+320%",
        costSavings: "$6M",
        satisfaction: "99%",
        timeToMarket: "-65%"
      },
      technologies: ["AI Consciousness", "Educational AI", "Quantum Learning"],
      testimonial: "Students are now learning at their own pace with AI tutors that understand their emotional needs and learning styles. The results have been remarkable.",
      author: "Dr. Lisa Thompson, Director of Education"
    },
    {
      id: 6,
      title: "Space Exploration Quantum AI",
      company: "AstroTech Industries",
      industry: "Aerospace",
      challenge: "Developing AI systems for autonomous space missions that can make complex decisions while dealing with extreme conditions and communication delays.",
      solution: "Created quantum-enhanced AI consciousness systems capable of autonomous decision-making in space environments.",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        satisfaction: "100%",
        timeToMarket: "-85%"
      },
      technologies: ["Quantum Computing", "AI Consciousness", "Space AI"],
      testimonial: "Our quantum AI systems have enabled autonomous space missions that were previously impossible. The AI can make complex decisions in real-time while millions of miles from Earth.",
      author: "Commander Alex Johnson, Mission Director"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge technologies have transformed industries and created unprecedented value for our clients
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                  <span className="text-purple-400 text-sm">Case Study #{study.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-purple-200 text-lg font-semibold">{study.company}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-cyan-400">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-emerald-400">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-pink-400">Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                    <div className="text-sm text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                    <div className="text-sm text-gray-300">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{study.results.satisfaction}</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{study.results.timeToMarket}</div>
                    <div className="text-sm text-gray-300">Time to Market</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-gray-200 text-sm italic mb-2">"{study.testimonial}"</p>
                <p className="text-purple-300 text-sm font-semibold">— {study.author}</p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Cumulative Success Metrics</h2>
            <p className="text-xl opacity-90">The combined impact of our revolutionary technologies across all case studies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">$116M+</div>
              <div className="text-lg opacity-80">Total Cost Savings</div>
              <div className="text-sm text-purple-200">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">+350%</div>
              <div className="text-lg opacity-80">Average Efficiency</div>
              <div className="text-sm text-cyan-200">Improvement across clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-lg opacity-80">Client Satisfaction</div>
              <div className="text-sm text-emerald-200">Average satisfaction rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">-70%</div>
              <div className="text-lg opacity-80">Time to Market</div>
              <div className="text-sm text-pink-200">Average reduction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies that have already transformed their operations with our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;