import React, { useState } from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(0);

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'retail', name: 'Retail', icon: '🛒' },
    { id: 'technology', name: 'Technology', icon: '💻' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      category: "manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Automotive Manufacturing",
      challenge: "Reduce production costs while increasing output quality and efficiency",
      solution: "Implemented autonomous AI agents for production line optimization and predictive maintenance",
      results: {
        efficiency: "+400%",
        costReduction: "40%",
        qualityImprovement: "99.9%",
        timeline: "6 months"
      },
      description: "A leading automotive manufacturer transformed their production line with our AI solutions, achieving unprecedented efficiency gains while maintaining the highest quality standards.",
      technologies: ["Autonomous AI Agents", "Predictive Analytics", "Computer Vision", "IoT Integration"],
      testimonial: "The AI implementation exceeded our wildest expectations. We've never seen such dramatic improvements in such a short time.",
      author: "Sarah Johnson, CEO",
      image: "🏭",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Breakthrough",
      category: "healthcare",
      company: "HealthTech Solutions",
      industry: "Medical Diagnostics",
      challenge: "Improve early disease detection accuracy and reduce diagnostic time",
      solution: "Deployed advanced AI diagnostic systems with 99.9% accuracy for early-stage disease detection",
      results: {
        accuracy: "99.9%",
        timeReduction: "85%",
        livesSaved: "10,000+",
        timeline: "12 months"
      },
      description: "Revolutionary AI diagnostic system that can detect diseases in their earliest stages, saving countless lives through early intervention.",
      technologies: ["Deep Learning", "Medical Imaging AI", "Pattern Recognition", "Real-time Analysis"],
      testimonial: "This technology has revolutionized how we approach diagnostics. The accuracy is simply remarkable.",
      author: "Dr. Michael Chen, Chief Medical Officer",
      image: "🏥",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Financial Services AI Transformation",
      category: "finance",
      company: "FinTech Innovations",
      industry: "Investment Banking",
      challenge: "Enhance fraud detection and improve customer experience",
      solution: "Integrated AI-powered fraud detection and personalized financial advisory services",
      results: {
        fraudDetection: "99.8%",
        customerSatisfaction: "+300%",
        costSavings: "$50M",
        timeline: "8 months"
      },
      description: "Transformed financial services with AI-powered fraud detection and personalized advisory services, dramatically improving security and customer satisfaction.",
      technologies: ["Machine Learning", "Fraud Detection AI", "Natural Language Processing", "Predictive Analytics"],
      testimonial: "Our fraud detection capabilities have never been stronger, and our customers love the personalized experience.",
      author: "Jennifer Martinez, CTO",
      image: "💰",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "E-commerce Personalization Revolution",
      category: "retail",
      company: "TechCommerce Inc",
      industry: "Online Retail",
      challenge: "Increase conversion rates and customer engagement",
      solution: "Implemented AI-powered personalization engine with real-time recommendation system",
      results: {
        conversionRate: "+300%",
        revenueIncrease: "$50M",
        customerEngagement: "+250%",
        timeline: "4 months"
      },
      description: "Revolutionary e-commerce platform that uses AI to provide hyper-personalized shopping experiences, dramatically increasing conversions and revenue.",
      technologies: ["Recommendation Engine", "Behavioral Analytics", "Real-time Personalization", "A/B Testing AI"],
      testimonial: "The personalization engine has completely transformed our business. Our customers feel like we know them personally.",
      author: "David Kim, VP of Technology",
      image: "🛒",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Quantum Computing Research Breakthrough",
      category: "technology",
      company: "QuantumTech Labs",
      industry: "Research & Development",
      challenge: "Solve complex optimization problems that were previously impossible",
      solution: "Developed quantum-enhanced algorithms for molecular simulation and optimization",
      results: {
        speedImprovement: "10,000x",
        problemComplexity: "Exponential",
        researchAcceleration: "+500%",
        timeline: "18 months"
      },
      description: "Pioneering quantum computing research that has solved previously impossible optimization problems, accelerating scientific discovery.",
      technologies: ["Quantum Machine Learning", "Quantum Algorithms", "Molecular Simulation", "Optimization"],
      testimonial: "We've achieved breakthroughs that would have taken decades with classical computing. This is truly revolutionary.",
      author: "Dr. Elena Rodriguez, Chief Scientist",
      image: "💻",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Smart City Infrastructure AI",
      category: "technology",
      company: "UrbanTech Solutions",
      industry: "Smart Cities",
      challenge: "Optimize city infrastructure and improve citizen services",
      solution: "Deployed AI-powered smart city management system with real-time optimization",
      results: {
        energyEfficiency: "+60%",
        trafficReduction: "45%",
        citizenSatisfaction: "+200%",
        timeline: "24 months"
      },
      description: "Transformed urban infrastructure with AI-powered smart city solutions, improving efficiency and citizen quality of life.",
      technologies: ["IoT Integration", "Traffic Optimization", "Energy Management", "Citizen Services AI"],
      testimonial: "Our city has become a model for smart urban development. The AI system has revolutionized how we serve our citizens.",
      author: "Mayor Robert Thompson",
      image: "🏙️",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case => case.category === selectedCategory);

  const currentCase = filteredCases[selectedCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY SUCCESS STORIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how leading companies are transforming their businesses with our cutting-edge AI and technology solutions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              className={`bg-gradient-to-br ${caseStudy.gradient} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedCase === index ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{caseStudy.image}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {caseStudy.company} • {caseStudy.industry}
                </p>
                <p className="text-white/70 text-sm">
                  {caseStudy.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-xs text-white/70 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                View Full Case Study →
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Case Study View */}
        {currentCase && (
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{currentCase.image}</div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{currentCase.title}</h2>
                    <p className="text-xl text-white/80">{currentCase.company}</p>
                    <p className="text-white/60">{currentCase.industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Challenge</h3>
                    <p className="text-white/90">{currentCase.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Solution</h3>
                    <p className="text-white/90">{currentCase.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white/10 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(currentCase.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-4xl font-bold text-yellow-300 mb-2">{value}</div>
                        <div className="text-sm text-white/70 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <blockquote className="text-lg italic text-white/90 mb-4">
                      "{currentCase.testimonial}"
                    </blockquote>
                    <div className="text-white/70">- {currentCase.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join these industry leaders and transform your business with our revolutionary AI solutions
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