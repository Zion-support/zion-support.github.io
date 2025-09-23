import React from 'react';
import Link from 'next/link';
import { Rocket, Brain, Zap, Target, ArrowRight, Star } from 'lucide-react';

const RevolutionaryTechBanner2026: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Revolutionary AI systems that automate complex business processes"
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Breakthrough quantum algorithms for unprecedented computational power"
    },
    {
      icon: Target,
      title: "Neural Interfaces",
      description: "Next-generation brain-computer interfaces for seamless interaction"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Revolutionary Technology 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future is
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of technology that's transforming industries and reshaping the digital landscape. 
            From quantum computing to neural interfaces, discover what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-solutions"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Research
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-white font-medium">Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-pink-400 mb-2">10x</div>
            <div className="text-white font-medium">Performance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white font-medium">Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
            <div className="text-white font-medium">Projects</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default RevolutionaryTechBanner2026;