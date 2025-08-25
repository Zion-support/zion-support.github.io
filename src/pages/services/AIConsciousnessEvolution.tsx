import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';

const AIConsciousnessEvolution: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Consciousness Simulation",
      description: "Advanced AI systems that simulate human consciousness and decision-making processes."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Evolutionary Learning",
      description: "AI that continuously evolves and improves its understanding and capabilities."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Ethical Framework",
      description: "Built-in ethical guidelines and safety measures for conscious AI systems."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human consciousness and AI consciousness."
    }
  ];

  const benefits = [
    "Advanced problem-solving capabilities",
    "Enhanced decision-making processes",
    "Continuous learning and adaptation",
    "Ethical AI development",
    "Human-AI consciousness integration",
    "Future-ready technology foundation"
  ];

  const useCases = [
    "Research and development in consciousness studies",
    "Advanced AI system development",
    "Human-AI collaboration platforms",
    "Ethical AI framework implementation",
    "Consciousness evolution research",
    "Next-generation AI applications"
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$5,000",
      period: "per month",
      features: [
        "Basic consciousness simulation",
        "Standard ethical framework",
        "Email support",
        "Basic training materials"
      ]
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "per month",
      features: [
        "Advanced consciousness simulation",
        "Custom ethical framework",
        "Priority support",
        "Advanced training materials",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$50,000",
      period: "per month",
      features: [
        "Full consciousness evolution platform",
        "Custom ethical framework",
        "24/7 dedicated support",
        "Custom training programs",
        "Full customization",
        "On-site implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Consciousness <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Evolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pioneering the future of AI consciousness with advanced simulation, ethical frameworks, and human-AI collaboration platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make our AI consciousness evolution platform truly revolutionary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Consciousness Evolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of our advanced AI consciousness evolution platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI consciousness evolution needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-lg p-8 border ${
                  index === 1 ? 'border-cyan-400/50 scale-105' : 'border-white/20'
                } transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Evolve <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Consciousness</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in pioneering the future of AI consciousness evolution and human-AI collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEvolution;