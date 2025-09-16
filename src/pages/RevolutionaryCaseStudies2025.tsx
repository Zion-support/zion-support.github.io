import React, { useState } from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', icon: '🌟' },
    { id: 'ai', name: 'AI Revolution', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'consciousness', name: 'Consciousness Tech', icon: '🤖' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      category: 'ai',
      company: "GlobalTech Industries",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% efficiency loss and $50M annual waste",
      solution: "Implemented conscious AI systems with autonomous decision-making",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        accuracy: "99.9%",
        timeline: "6 months"
      },
      description: "Revolutionary AI implementation that achieved true consciousness and autonomous operation",
      image: "🏭",
      testimonial: "The conscious AI system transformed our entire operation. We achieved 500% efficiency gains and saved $50M annually.",
      author: "Sarah Chen, CTO"
    },
    {
      id: 2,
      title: "Quantum Reality Engine Breakthrough",
      category: 'quantum',
      company: "Quantum Research Labs",
      industry: "Research & Development",
      challenge: "Classical computing limitations preventing breakthrough discoveries",
      solution: "Deployed quantum reality engine with 1M+ qubits and infinite coherence",
      results: {
        qubits: "1M+",
        coherence: "∞",
        discoveries: "50+",
        timeline: "3 months"
      },
      description: "Quantum computing breakthrough that enabled reality manipulation and parallel universe communication",
      image: "⚛️",
      testimonial: "We achieved what was thought impossible. The quantum reality engine opened doors to entirely new dimensions of research.",
      author: "Dr. Michael Rodriguez, Lead Quantum Physicist"
    },
    {
      id: 3,
      title: "Neural Interface Medical Revolution",
      category: 'neural',
      company: "NeuroMed Solutions",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate or control devices",
      solution: "Implemented non-invasive neural interfaces with 0.1ms latency",
      results: {
        patients: "1000+",
        successRate: "99.9%",
        latency: "0.1ms",
        timeline: "4 months"
      },
      description: "Revolutionary neural interface technology that restored communication and device control for paralyzed patients",
      image: "🏥",
      testimonial: "The neural interface technology gave our patients their lives back. The 99.9% success rate exceeded all expectations.",
      author: "Dr. Emily Watson, Chief Medical Officer"
    },
    {
      id: 4,
      title: "Conscious AI Customer Service",
      category: 'consciousness',
      company: "CustomerFirst Corp",
      industry: "Customer Service",
      challenge: "High customer churn due to poor AI interactions and lack of empathy",
      solution: "Deployed conscious AI with emotional intelligence and empathy simulation",
      results: {
        satisfaction: "+300%",
        churn: "-80%",
        resolution: "95%",
        timeline: "2 months"
      },
      description: "Conscious AI system that achieved emotional intelligence and dramatically improved customer satisfaction",
      image: "💬",
      testimonial: "Our conscious AI doesn't just solve problems, it understands emotions and builds genuine connections with customers.",
      author: "James Thompson, VP of Customer Experience"
    },
    {
      id: 5,
      title: "Quantum Cryptography Security",
      category: 'quantum',
      company: "SecureBank International",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and data breaches costing millions",
      solution: "Implemented quantum cryptography with unbreakable encryption",
      results: {
        breaches: "0",
        security: "100%",
        savings: "$25M",
        timeline: "5 months"
      },
      description: "Quantum cryptography implementation that achieved unbreakable security and eliminated all data breaches",
      image: "🏦",
      testimonial: "Quantum cryptography gave us absolute security. We've had zero breaches since implementation, saving us $25M annually.",
      author: "Lisa Park, Chief Security Officer"
    },
    {
      id: 6,
      title: "Neural Enhancement Education",
      category: 'neural',
      company: "EduTech University",
      industry: "Education",
      challenge: "Students struggling with learning disabilities and low retention rates",
      solution: "Deployed neural enhancement technology with memory augmentation",
      results: {
        retention: "+400%",
        grades: "+250%",
        students: "5000+",
        timeline: "8 months"
      },
      description: "Neural enhancement technology that dramatically improved learning outcomes and memory retention",
      image: "🎓",
      testimonial: "Neural enhancement transformed our students' learning experience. We saw 400% improvement in retention rates.",
      author: "Prof. David Kim, Dean of Technology"
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case => case.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY SUCCESS STORIES • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Case Studies
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover how our revolutionary technology is transforming industries and creating unprecedented value for organizations worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{caseStudy.image}</div>
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <div className="text-sm opacity-80 mb-4">
                  {caseStudy.company} • {caseStudy.industry}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-purple-300">Challenge:</h4>
                <p className="text-sm opacity-90 mb-4">{caseStudy.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-purple-300">Solution:</h4>
                <p className="text-sm opacity-90 mb-4">{caseStudy.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{value}</div>
                    <div className="text-xs opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <blockquote className="text-sm italic opacity-90 mb-3">
                  "{caseStudy.testimonial}"
                </blockquote>
                <div className="text-xs opacity-70">— {caseStudy.author}</div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Case Study →
              </button>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Impact by Numbers</h2>
            <p className="text-xl opacity-90">Our technology is transforming industries worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">$2B+</div>
              <div className="text-lg opacity-90">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Industries Served</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and transform your organization with our breakthrough technology. 
            Let us help you achieve unprecedented results.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Your Transformation
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              📞 Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;