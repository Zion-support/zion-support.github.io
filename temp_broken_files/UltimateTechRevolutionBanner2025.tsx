import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Rocket, Award, TrendingUp, Users, Shield, Globe, Cpu } from 'lucide-react';

const UltimateTechRevolutionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "This technology completely revolutionized our business operations. We achieved 450% productivity increase in just 6 months.",
      author: "Sarah Chen",
      position: "CEO, TechCorp Global",
      industry: "Manufacturing"
    },
    {
      quote: "The quantum neural networks transformed our trading algorithms. We're now making decisions 300% faster than our competitors.",
      author: "Marcus Rodriguez",
      position: "CTO, FinanceMax International",
      industry: "Financial Services"
    },
    {
      quote: "Our diagnostic accuracy improved to 95% with the consciousness AI system. It's like having a super-intelligent medical expert 24/7.",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer, HealthTech Solutions",
      industry: "Healthcare"
    }
  ];

  const technologies = [
    { icon: <Brain className="w-5 h-5" />, name: "Consciousness AI", color: "text-cyan-400" },
    { icon: <Zap className="w-5 h-5" />, name: "Quantum Neural", color: "text-purple-400" },
    { icon: <Shield className="w-5 h-5" />, name: "Autonomous Security", color: "text-green-400" },
    { icon: <Globe className="w-5 h-5" />, name: "Global Neural Mesh", color: "text-blue-400" },
    { icon: <Cpu className="w-5 h-5" />, name: "Quantum Computing", color: "text-yellow-400" },
    { icon: <Rocket className="w-5 h-5" />, name: "Space Tech", color: "text-pink-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 border border-purple-500/30 rounded-3xl mx-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(147,51,234,0.3),transparent_70%)] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.3),transparent_70%)] blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(236,72,153,0.2),transparent_70%)] blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-400">Ultimate Technology Revolution 2025</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Your Reality
              </span>
              <br />
              <span className="text-white">
                Beyond Imagination
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join the most advanced technological revolution in human history. 
              Experience consciousness AI, quantum neural networks, and reality-engineering 
              technologies that were once science fiction.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Technology Showcase */}
            <div className="lg:col-span-2">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Revolutionary Technologies</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">{tech.name}</h4>
                      <p className="text-xs text-gray-400">Next-Gen Tech</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div className="bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Success Stories</h3>
                
                <div className="min-h-[200px] flex flex-col justify-center">
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="font-semibold text-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-sm text-purple-400">
                      {testimonials[currentTestimonial].position}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonials[currentTestimonial].industry}
                    </div>
                  </div>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-purple-400 w-8' 
                          : 'bg-gray-600'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-gray-400">Faster AI Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-sm text-gray-400">Quantum Speed Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-400">Security Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">450%</div>
              <div className="text-sm text-gray-400">Productivity Increase</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join the Revolution?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Be among the first to experience the most advanced technologies ever created. 
                Transform your business, your industry, and your future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pages/RevolutionaryTechBreakthrough2025"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Explore the Revolution
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-semibold rounded-xl transition-all duration-300"
                >
                  Start Your Journey
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-md animate-pulse delay-500"></div>
    </div>
  );
};

export default UltimateTechRevolutionBanner2025;