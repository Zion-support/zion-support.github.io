import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryCaseStudies2026: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Revolution",
      company: "MedTech Global",
      industry: "Healthcare",
      challenge: "Reducing diagnostic time by 80% while improving accuracy",
      solution: "Implemented advanced AI diagnostic systems with quantum-enhanced processing",
      results: "95% accuracy improvement, 80% faster diagnosis, $2M annual savings",
      image: "🏥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum Computing Financial Optimization",
      company: "Quantum Finance Corp",
      industry: "Financial Services",
      challenge: "Optimizing complex trading algorithms in real-time",
      solution: "Deployed quantum computing solutions for portfolio optimization",
      results: "300% faster processing, 25% better returns, $50M additional revenue",
      image: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Neural Interface Manufacturing",
      company: "NeuroTech Industries",
      industry: "Manufacturing",
      challenge: "Enhancing worker productivity through brain-computer interfaces",
      solution: "Integrated neural interface technology for hands-free operation",
      results: "60% productivity increase, 90% error reduction, 40% cost savings",
      image: "🏭",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Blockchain Supply Chain Transparency",
      company: "Global Logistics Ltd",
      industry: "Logistics",
      challenge: "Ensuring complete transparency in global supply chains",
      solution: "Implemented blockchain-based tracking and verification system",
      results: "100% traceability, 50% fraud reduction, 30% efficiency gain",
      image: "📦",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "Cybersecurity Quantum Defense",
      company: "SecureNet Solutions",
      industry: "Cybersecurity",
      challenge: "Protecting against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and AI threat detection",
      results: "99.9% threat prevention, 0% data breaches, 200% faster response",
      image: "🛡️",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Space Technology Communication",
      company: "OrbitComm Systems",
      industry: "Space Technology",
      challenge: "Establishing reliable interplanetary communication networks",
      solution: "Developed quantum communication satellites and AI routing",
      results: "99.99% uptime, 10x faster transmission, global coverage",
      image: "🛰️",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2026
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how leading organizations are transforming their industries with our cutting-edge 
              technologies. Real results, real impact, real transformation.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/pages/RevolutionaryTechInsights2026" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Explore Technologies →
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">Real-world implementations delivering extraordinary results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {study.image}
              </div>
              <div className={`inline-block bg-gradient-to-r ${study.color} text-white px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                {study.industry}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
              <p className="text-gray-300 mb-4 font-semibold">{study.company}</p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Results:</h4>
                  <p className="text-gray-300 text-sm">{study.results}</p>
                </div>
              </div>

              <Link 
                to={`/case-studies/${study.id}`}
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Read Full Case Study →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Impact */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Industry Impact</h2>
          <p className="text-xl text-gray-300">Transforming industries across the globe</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">500+</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Projects Delivered</h3>
            <p className="text-gray-300">Successfully completed across 50+ countries</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">$2B+</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Value Created</h3>
            <p className="text-gray-300">Total value generated for our clients</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">99%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Success Rate</h3>
            <p className="text-gray-300">Projects delivered on time and within budget</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">24/7</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Support</h3>
            <p className="text-gray-300">Round-the-clock expert assistance</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-300">What our clients say about working with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300 mb-4 italic">
              "Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented 
              increased our efficiency by 300% and saved us millions in operational costs."
            </p>
            <div className="text-cyan-400 font-semibold">Sarah Johnson, CTO</div>
            <div className="text-gray-400 text-sm">MedTech Global</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300 mb-4 italic">
              "The quantum computing solutions they provided revolutionized our financial modeling. 
              We're now able to process complex algorithms in real-time that previously took hours."
            </p>
            <div className="text-cyan-400 font-semibold">Michael Chen, CEO</div>
            <div className="text-gray-400 text-sm">Quantum Finance Corp</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300 mb-4 italic">
              "Their neural interface technology has completely changed how we operate. Our workers 
              are more productive and our error rates have dropped to nearly zero."
            </p>
            <div className="text-cyan-400 font-semibold">Dr. Emily Rodriguez, Director</div>
            <div className="text-gray-400 text-sm">NeuroTech Industries</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the ranks of industry leaders who have transformed their businesses with our 
            revolutionary technologies. Let's create your success story together.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Start Your Transformation
            </Link>
            <Link 
              to="/pages/NextGenInnovationHub2026" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;