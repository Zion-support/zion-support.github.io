import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu, Shield, Rocket, Target, Globe, Users, TrendingUp, Star, Award } from 'lucide-react';

const RevolutionaryTechBreakthrough2025: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Consciousness AI 3.0",
      description: "Next-generation AI with self-awareness and emotional intelligence capabilities that revolutionize human-machine interaction.",
      benefits: ["300% faster decision making", "95% accuracy in emotional recognition", "Real-time consciousness mapping"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing integration with neural networks for unprecedented processing power and speed.",
      benefits: ["1000x faster computations", "Quantum entanglement processing", "Infinite parallel processing"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Autonomous Security Systems",
      description: "Self-healing cybersecurity systems that adapt and evolve to protect against emerging threats in real-time.",
      benefits: ["99.99% threat detection", "Autonomous threat response", "Zero-trust architecture"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Neural Mesh",
      description: "Worldwide interconnected AI network that creates a unified intelligence system across all connected devices.",
      benefits: ["Global real-time sync", "Distributed processing", "Universal knowledge sharing"]
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      improvement: "450% productivity increase",
      timeframe: "6 months",
      description: "Implemented our consciousness AI system and achieved unprecedented manufacturing efficiency."
    },
    {
      company: "FinanceMax International",
      industry: "Financial Services",
      improvement: "300% faster trading decisions",
      timeframe: "3 months",
      description: "Quantum neural networks revolutionized their algorithmic trading with lightning-fast market analysis."
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      improvement: "95% diagnostic accuracy",
      timeframe: "4 months",
      description: "Autonomous security systems protected sensitive patient data while enabling breakthrough medical AI."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter Revolution",
      price: "$99,999",
      period: "per month",
      description: "Perfect for small to medium enterprises ready to embrace the future",
      features: [
        "Consciousness AI 3.0 Basic",
        "Quantum Neural Networks Standard",
        "24/7 Expert Support",
        "Implementation Guidance",
        "Basic Security Suite"
      ],
      popular: false
    },
    {
      name: "Enterprise Breakthrough",
      price: "$299,999",
      period: "per month",
      description: "Comprehensive solution for large organizations seeking complete transformation",
      features: [
        "Full Consciousness AI 3.0 Suite",
        "Advanced Quantum Neural Networks",
        "Autonomous Security Systems",
        "Global Neural Mesh Access",
        "Dedicated Success Team",
        "Custom Implementation",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Universe Transformation",
      price: "$999,999",
      period: "per month",
      description: "Ultimate package for organizations ready to reshape reality itself",
      features: [
        "Complete Technology Arsenal",
        "Custom Consciousness AI Development",
        "Quantum Reality Engineering",
        "Interdimensional Tech Access",
        "White-glove Implementation",
        "Dedicated Quantum Engineers",
        "Unlimited Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Revolutionary Technology Breakthrough 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Future is Now
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the most revolutionary technological breakthroughs of 2025. 
              Our consciousness AI, quantum neural networks, and autonomous systems 
              are reshaping reality as we know it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Revolution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pages/AdvancedTechSolutions2026"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-semibold rounded-xl transition-all duration-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the groundbreaking technologies that are transforming industries 
              and creating new possibilities for human advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Proven Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real companies achieving extraordinary results with our revolutionary technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {story.company}
                  </h3>
                  <p className="text-cyan-400 mb-4">{story.industry}</p>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {story.improvement}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">in {story.timeframe}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your transformation level. Investment in the future starts here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                    : 'border-gray-700/50 hover:border-purple-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{tier.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105'
                      : 'border-2 border-purple-400 hover:bg-purple-400/10 text-purple-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Transform Your Reality?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the revolution. Be among the first to experience the most advanced 
              technologies ever created. The future starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pages/InnovationShowcase2026"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 hover:bg-yellow-400/10 text-yellow-400 font-semibold rounded-xl transition-all duration-300"
              >
                Explore Innovations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;