import React from 'react';
import { Brain, Circle, Cloud, Shield, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const RevolutionaryTech2026Showcase: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: "AI Consciousness Revolution",
      description: "Self-aware AI systems with genuine consciousness and emotional intelligence",
      link: "/ai-consciousness-revolution-2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Quantum Cloud Computing",
      description: "Infinite scalability and instant processing with quantum principles",
      link: "/quantum-cloud-computing-2026",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Defense",
      description: "Zero-trust autonomous defense with 99.9% threat prevention",
      link: "/ai-cybersecurity-revolution-2026",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Quantum Business Automation",
      description: "1000% ROI through quantum AI automation systems",
      link: "/quantum-business-automation-2027",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Circle,
      title: "Autonomous Business Intelligence",
      description: "Self-learning analytics platform with predictive insights",
      link: "/autonomous-business-intelligence-2026",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Star,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer integration for enhanced cognition",
      link: "/neural-interface-revolution-2027",
      color: "from-red-500 to-pink-500"
    }
  ];
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              REVOLUTIONARY
            </span>
            <br />
            <span className="text-white">TECH 2026</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Experience the future of technology with breakthrough innovations that are reshaping industries and transforming the way we work, think, and create.
          </p>
        </div>
        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Link
                key={index}
                to={tech.link}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">
                    Explore Technology
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
};
          })}
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already leveraging these revolutionary technologies to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <Star className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-services-2025"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 border border-white/30 transform hover:scale-105 transition-all duration-300"
              >
                View All Services
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



export default RevolutionaryTech2026Showcase;
