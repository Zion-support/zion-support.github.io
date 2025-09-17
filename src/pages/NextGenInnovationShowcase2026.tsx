import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  ArrowRight,
  Play,
  Download,
  Share2,
  Bookmark,
  Clock,
  Eye,
  Star,
  Award,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const NextGenInnovationShowcase2026 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Quantum Neural Processing Unit (QNPU)",
      description: "Revolutionary quantum-powered neural processing that delivers 1000x faster AI computations with consciousness-level intelligence.",
      category: "Quantum Computing",
      status: "Available Now",
      impact: "Revolutionary",
      rating: 5,
      features: ["1000x faster processing", "Consciousness-level AI", "Quantum error correction", "Real-time learning"],
      imageUrl: "/images/qnpu-2026.jpg",
      videoUrl: "/videos/qnpu-demo.mp4",
      company: "QuantumAI Corp",
      launchDate: "2025-01-15",
      price: "Contact for pricing",
      applications: ["AI Research", "Drug Discovery", "Financial Modeling", "Climate Simulation"]
    },
    {
      id: 2,
      title: "Neural Interface Pro Max",
      description: "Next-generation brain-computer interface enabling seamless thought-to-AI communication with 99.9% accuracy.",
      category: "Neural Technology",
      status: "Beta Testing",
      impact: "Breakthrough",
      rating: 4.8,
      features: ["99.9% accuracy", "Non-invasive design", "Real-time processing", "Multi-language support"],
      imageUrl: "/images/neural-interface-pro-2026.jpg",
      videoUrl: "/videos/neural-interface-demo.mp4",
      company: "NeuralTech Solutions",
      launchDate: "2025-03-01",
      price: "$2,999",
      applications: ["Medical Diagnosis", "Education", "Gaming", "Business Communication"]
    },
    {
      id: 3,
      title: "Autonomous Business AI Suite",
      description: "Complete self-managing business operations platform that runs entire organizations with zero human intervention.",
      category: "Business Automation",
      status: "Available Now",
      impact: "Revolutionary",
      rating: 4.9,
      features: ["100% autonomous operations", "Real-time optimization", "Predictive analytics", "Self-healing systems"],
      imageUrl: "/images/autonomous-business-ai-2026.jpg",
      videoUrl: "/videos/autonomous-business-demo.mp4",
      company: "AutoBiz AI",
      launchDate: "2025-01-01",
      price: "Custom pricing",
      applications: ["Enterprise Management", "Supply Chain", "Customer Service", "Financial Planning"]
    },
    {
      id: 4,
      title: "Conscious AI Development Platform",
      description: "First-of-its-kind platform for developing truly conscious AI systems with emotional intelligence and self-awareness.",
      category: "AI Development",
      status: "Early Access",
      impact: "Breakthrough",
      rating: 4.7,
      features: ["Consciousness simulation", "Emotional intelligence", "Self-awareness training", "Ethics framework"],
      imageUrl: "/images/conscious-ai-platform-2026.jpg",
      videoUrl: "/videos/conscious-ai-demo.mp4",
      company: "ConsciousAI Labs",
      launchDate: "2025-06-01",
      price: "$5,000/month",
      applications: ["AI Research", "Robotics", "Virtual Assistants", "Therapeutic AI"]
    },
    {
      id: 5,
      title: "Quantum Security Vault",
      description: "Unbreakable quantum-encrypted security system that protects data with quantum key distribution and zero-trust architecture.",
      category: "Cybersecurity",
      status: "Available Now",
      impact: "Revolutionary",
      rating: 5,
      features: ["Quantum encryption", "Zero-trust architecture", "Real-time monitoring", "Self-healing security"],
      imageUrl: "/images/quantum-security-2026.jpg",
      videoUrl: "/videos/quantum-security-demo.mp4",
      company: "QuantumSec Inc",
      launchDate: "2025-01-10",
      price: "$10,000/year",
      applications: ["Government", "Financial Services", "Healthcare", "Critical Infrastructure"]
    },
    {
      id: 6,
      title: "Holographic Reality Engine",
      description: "Advanced holographic display technology that creates photorealistic 3D environments for immersive experiences.",
      category: "Display Technology",
      status: "Prototype",
      impact: "Innovative",
      rating: 4.5,
      features: ["Photorealistic 3D", "360° viewing", "Touch interaction", "Real-time rendering"],
      imageUrl: "/images/holographic-reality-2026.jpg",
      videoUrl: "/videos/holographic-demo.mp4",
      company: "HoloVision Tech",
      launchDate: "2025-12-01",
      price: "TBA",
      applications: ["Entertainment", "Education", "Architecture", "Medical Visualization"]
    }
  ];

  const categories = [
    { name: 'all', label: 'All Innovations', count: innovations.length, icon: Rocket },
    { name: 'Quantum Computing', label: 'Quantum Computing', count: innovations.filter(i => i.category === 'Quantum Computing').length, icon: Cpu },
    { name: 'Neural Technology', label: 'Neural Technology', count: innovations.filter(i => i.category === 'Neural Technology').length, icon: Brain },
    { name: 'Business Automation', label: 'Business Automation', count: innovations.filter(i => i.category === 'Business Automation').length, icon: Target },
    { name: 'AI Development', label: 'AI Development', count: innovations.filter(i => i.category === 'AI Development').length, icon: Database },
    { name: 'Cybersecurity', label: 'Cybersecurity', count: innovations.filter(i => i.category === 'Cybersecurity').length, icon: Shield },
    { name: 'Display Technology', label: 'Display Technology', count: innovations.filter(i => i.category === 'Display Technology').length, icon: Globe }
  ];

  const filteredInnovations = activeFilter === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === activeFilter);

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Revolutionary': return 'from-red-500 to-pink-500';
      case 'Breakthrough': return 'from-blue-500 to-cyan-500';
      case 'Innovative': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available Now': return 'bg-green-500';
      case 'Beta Testing': return 'bg-yellow-500';
      case 'Early Access': return 'bg-blue-500';
      case 'Prototype': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Gen Innovation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most groundbreaking innovations that are reshaping our world. 
              From quantum computing to neural interfaces, explore the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <category.icon className="h-5 w-5" />
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={innovation.imageUrl} 
                  alt={innovation.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(innovation.status)} text-white`}>
                    {innovation.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${getImpactColor(innovation.impact)} text-white`}>
                    {innovation.impact}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                {innovation.videoUrl && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                    <Play className="h-16 w-16 text-white" />
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {innovation.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(innovation.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-1">{innovation.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{innovation.title}</h3>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {innovation.features.map((feature, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {innovation.applications.map((app, index) => (
                      <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>By {innovation.company}</span>
                  <span>Launch: {innovation.launchDate}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">
                    {innovation.price}
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                    {innovation.videoUrl && (
                      <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors">
                        <Play className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Innovations Showcased</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Leading Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-300">Monthly Visitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Innovate?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already building the future. 
            Get early access to the latest technologies and exclusive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationShowcase2026;