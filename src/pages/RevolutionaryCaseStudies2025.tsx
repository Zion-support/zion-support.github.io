import React, { useState } from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and high operational costs",
      solution: "Implemented autonomous AI agents and quantum processing systems",
      results: {
        efficiency: "+400%",
        costSavings: "$12M",
        accuracy: "99.9%",
        timeReduction: "80%"
      },
      testimonial: "The AI revolution has completely transformed our operations. We've achieved results we never thought possible.",
      author: "Sarah Johnson, CEO"
    },
    {
      id: 2,
      title: "Healthcare AI Transformation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Slow diagnosis processes and medical error rates",
      solution: "Deployed conscious AI diagnostic systems with neural interface integration",
      results: {
        accuracy: "99.8%",
        speed: "+500%",
        errorReduction: "95%",
        patientSatisfaction: "98%"
      },
      testimonial: "Our AI systems now diagnose conditions faster and more accurately than ever before.",
      author: "Dr. Michael Chen, Chief Medical Officer"
    },
    {
      id: 3,
      title: "Educational Revolution Platform",
      company: "Future Learning Institute",
      industry: "Education",
      challenge: "Personalized learning at scale and student engagement",
      solution: "Implemented quantum-enhanced AI tutoring systems",
      results: {
        engagement: "+300%",
        performance: "+250%",
        completion: "95%",
        satisfaction: "97%"
      },
      testimonial: "Students are achieving learning outcomes we never imagined possible.",
      author: "Prof. Lisa Rodriguez, Director of Innovation"
    }
  ];

  const getResultColor = (value: string) => {
    if (value.includes('∞') || value.includes('100%')) return 'text-green-400';
    if (value.includes('+')) return 'text-cyan-400';
    if (value.includes('$')) return 'text-emerald-400';
    return 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold mb-6">
              📊 REVOLUTIONARY CASE STUDIES 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing the transformative power of our revolutionary technologies
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Navigation */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(index)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
                }`}
              >
                <div className="text-2xl mb-2">
                  {caseStudy.industry === 'Manufacturing' ? '🏭' : 
                   caseStudy.industry === 'Healthcare' ? '🏥' :
                   caseStudy.industry === 'Education' ? '🎓' : '🚀'}
                </div>
                <h3 className="font-semibold mb-1">{caseStudy.company}</h3>
                <p className="text-sm opacity-75">{caseStudy.industry}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Details */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{caseStudies[selectedCase].title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-300">Challenge</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Solution</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].solution}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white/10 rounded-lg">
                    <div className={`text-2xl font-bold ${getResultColor(value)}`}>{value}</div>
                    <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <blockquote className="text-lg italic mb-3">
                  "{caseStudies[selectedCase].testimonial}"
                </blockquote>
                <cite className="text-orange-300 font-semibold">
                  — {caseStudies[selectedCase].author}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors font-semibold text-lg">
              View More Cases
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;