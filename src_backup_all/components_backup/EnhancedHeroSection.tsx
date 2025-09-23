import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Zap } from 'lucide-react';

const EnhancedHeroSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The AI Agent Factory revolutionized our operations. We deployed 50 intelligent agents that increased efficiency by 300%.",
      author: "Dr. Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "Their quantum computing solutions solved complex optimization problems we thought were impossible.",
      author: "Prof. Michael Chen",
      role: "CEO, Quantum Innovations",
      rating: 5
    },
    {
      quote: "Blockchain 3.0 platform transformed our supply chain with 100% visibility and zero fraud.",
      author: "Emily Rodriguez",
      role: "Founder, Global Logistics",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "750+", label: "AI Agents Deployed", color: "text-blue-600" },
    { icon: Award, value: "15+", label: "Quantum Breakthroughs", color: "text-purple-600" },
    { icon: TrendingUp, value: "99.9%", label: "Success Rate", color: "text-green-600" },
    { icon: Zap, value: "3.0", label: "Blockchain Platform", color: "text-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 500+ Companies Worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Revolutionary AI & Quantum Tech
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Experience our breakthrough AI Agent Factory, Quantum Computing solutions, and Blockchain 3.0 platform. Discover how we're revolutionizing industries worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm mb-3 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Demo/Visual */}
          <div className="relative">
            {/* Main Demo Card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white/70 text-sm">Zion AI Dashboard</div>
              </div>

              {/* Demo Content */}
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400 rounded-full animate-spin"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-purple-400 rounded-full animate-ping"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Processing</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">99.9% Uptime</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl animate-float-delayed">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Blockchain</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Secure & Fast</div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 lg:mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-white/90 mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="text-white">
                <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                <div className="text-white/70">{testimonials[currentTestimonial].role}</div>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;