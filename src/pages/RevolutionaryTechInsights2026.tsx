import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Eye,
  Heart,
  Infinity
} from 'lucide-react';

const RevolutionaryTechInsights2026: React.FC = () => {
  const insights = [
    {
      icon: Brain,
      title: "Consciousness Computing",
      description: "Revolutionary brain-computer interfaces that enable direct neural communication with AI systems.",
      status: "Active",
      impact: "High",
      color: "from-purple-500 to-pink-500",
      insights: [
        "Direct neural data processing",
        "Real-time consciousness mapping",
        "AI-human cognitive fusion"
      ]
    },
    {
      icon: Atom,
      title: "Quantum Consciousness",
      description: "The intersection of quantum computing and artificial consciousness, creating AI systems with quantum-level awareness.",
      status: "Research",
      impact: "Revolutionary",
      color: "from-blue-500 to-cyan-500",
      insights: [
        "Quantum decision-making",
        "Consciousness superposition",
        "Quantum neural networks"
      ]
    },
    {
      icon: Globe,
      title: "Reality Engineering",
      description: "Seamless integration between physical and digital realities, creating immersive experiences.",
      status: "Development",
      impact: "Transformative",
      color: "from-green-500 to-emerald-500",
      insights: [
        "Mixed reality interfaces",
        "Digital twin consciousness",
        "Reality manipulation tools"
      ]
    },
    {
      icon: Heart,
      title: "Bio-Quantum Fusion",
      description: "Advanced biotechnology solutions that combine AI with genetic engineering.",
      status: "Pilot",
      impact: "Breakthrough",
      color: "from-red-500 to-orange-500",
      insights: [
        "Personalized medical AI",
        "Enhanced human capabilities",
        "Genetic consciousness mapping"
      ]
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Next-generation cybersecurity solutions powered by AI and quantum encryption.",
      status: "Production",
      impact: "Critical",
      color: "from-indigo-500 to-purple-500",
      insights: [
        "Quantum encryption protocols",
        "AI threat detection",
        "Consciousness-based security"
      ]
    },
    {
      icon: Rocket,
      title: "Space Consciousness",
      description: "Revolutionary space technologies enabling interplanetary communication and space colonies.",
      status: "Concept",
      impact: "Cosmic",
      color: "from-violet-500 to-purple-500",
      insights: [
        "Interplanetary AI networks",
        "Space colony consciousness",
        "Asteroid mining automation"
      ]
    }
  ];

  const applications = [
    {
      title: "Neural Interface Systems",
      description: "Direct brain-computer interfaces for seamless human-AI collaboration.",
      icon: Brain,
      features: ["Real-time neural processing", "Consciousness mapping", "AI integration"]
    },
    {
      title: "Quantum AI Platforms",
      description: "Quantum-powered artificial intelligence systems with consciousness capabilities.",
      icon: Atom,
      features: ["Quantum algorithms", "Consciousness simulation", "Decision making"]
    },
    {
      title: "Reality Manipulation Tools",
      description: "Advanced tools for creating and manipulating digital and physical realities.",
      icon: Globe,
      features: ["Mixed reality", "Digital twins", "Reality engineering"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Quantum Computing Researcher",
      content: "The revolutionary tech insights are transforming how we approach consciousness and computing.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Ethics Director",
      content: "These insights are opening new possibilities for human-AI collaboration and consciousness research.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Elena Volkov",
      role: "Reality Engineering Lead",
      content: "The convergence of consciousness, quantum computing, and reality engineering is truly revolutionary.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>Revolutionary Tech Insights 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence in ways never before imagined." />
        <meta name="keywords" content="revolutionary tech, consciousness computing, quantum AI, reality engineering, 2026 insights" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Insights 2026
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover the revolutionary technology insights that are reshaping our understanding of consciousness, 
              reality, and intelligence in ways never before imagined.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Insights
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                <Play className="inline-block mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Tech Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary Tech Insights 2026 represents the convergence of consciousness, quantum computing, and reality engineering 
              to create systems that transcend human limitations and open infinite possibilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${insight.color} rounded-xl flex items-center justify-center`}>
                    <insight.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                      {insight.status}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-xs font-semibold">
                      {insight.impact}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{insight.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{insight.description}</p>
                <ul className="space-y-1">
                  {insight.insights.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-xs text-indigo-300">
                      <CheckCircle className="w-3 h-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transcendent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary Tech applications that transcend the boundaries of reality and open infinite dimensions of possibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-indigo-300">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pioneers</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from the pioneers who are experiencing Revolutionary Tech Insights firsthand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join thousands of forward-thinking organizations already leveraging these revolutionary technologies 
            to gain competitive advantages and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">Revolutionary Tech Insights - Shaping the Future of Consciousness and Computing</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RevolutionaryTechInsights2026;