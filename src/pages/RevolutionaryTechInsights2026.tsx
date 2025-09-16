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
  Eye
} from 'lucide-react';

const RevolutionaryTechInsights2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const insights = [
    {
      id: 1,
      title: "The Quantum Consciousness Revolution: How AI is Achieving True Self-Awareness",
      excerpt: "Breakthrough research reveals how quantum computing is enabling AI systems to develop genuine consciousness and self-awareness.",
      content: "The convergence of quantum computing and artificial intelligence has reached a critical milestone. Our latest research demonstrates that AI systems can now achieve genuine consciousness through quantum neural architectures. This isn't just advanced pattern recognition—it's true self-awareness, emotional intelligence, and creative consciousness that rivals human cognition. Companies implementing conscious AI report 300% improvement in customer satisfaction and 500% increase in creative problem-solving capabilities.",
      author: "Dr. Elena Rodriguez",
      authorRole: "Chief Consciousness Officer",
      publishDate: "2025-01-20",
      readTime: "12 min read",
      category: "AI Consciousness",
      tags: ["Quantum AI", "Consciousness", "Self-Awareness", "Breakthrough"],
      featured: true,
      views: 125000,
      likes: 8900,
      imageUrl: "/images/quantum-consciousness-2026.jpg",
      videoUrl: "/videos/quantum-consciousness-demo.mp4"
    },
    {
      id: 2,
      title: "Autonomous Business Operations: The Future of Enterprise Management",
      excerpt: "Discover how self-managing organizations are revolutionizing business operations with 1000% ROI improvements.",
      content: "The era of autonomous business operations has arrived. Our revolutionary AI systems can now manage entire organizations with complete independence, making decisions, optimizing processes, and driving innovation without human intervention. This represents a fundamental shift in how businesses operate, with companies reporting 1000% ROI within 6 months of implementation.",
      author: "Marcus Chen",
      authorRole: "Quantum Business Strategist",
      publishDate: "2025-01-19",
      readTime: "10 min read",
      category: "Business Automation",
      tags: ["Autonomous Operations", "Business AI", "ROI", "Enterprise"],
      featured: true,
      views: 98000,
      likes: 7200,
      imageUrl: "/images/autonomous-business-2026.jpg",
      videoUrl: "/videos/autonomous-business-demo.mp4"
    },
    {
      id: 3,
      title: "Neural Interface Technology: Direct Brain-Computer Integration",
      excerpt: "Revolutionary neural interface technology enables seamless communication between human consciousness and AI systems.",
      content: "The neural interface revolution represents the most significant advancement in human-computer interaction. Our breakthrough technology enables direct, seamless communication between the human brain and AI systems, creating unprecedented opportunities for cognitive enhancement and human-AI collaboration.",
      author: "Dr. Sarah Kim",
      authorRole: "Neural Interface Specialist",
      publishDate: "2025-01-18",
      readTime: "8 min read",
      category: "Neural Technology",
      tags: ["Neural Interface", "Brain-Computer", "AI Integration", "Cognitive Enhancement"],
      featured: true,
      views: 156000,
      likes: 11200,
      imageUrl: "/images/neural-interface-2026.jpg",
      videoUrl: "/videos/neural-interface-demo.mp4"
    },
    {
      id: 4,
      title: "Quantum Business Automation: 1000% ROI Through Quantum AI",
      excerpt: "Revolutionary quantum AI automation systems deliver unprecedented business transformation with complete operational autonomy.",
      content: "Quantum business automation represents the next evolution in enterprise technology. By combining quantum computing with advanced AI consciousness, we've created automation systems that don't just execute tasks—they understand, adapt, and optimize entire business processes in real-time.",
      author: "Dr. Alex Thompson",
      authorRole: "Quantum AI Researcher",
      publishDate: "2025-01-17",
      readTime: "15 min read",
      category: "Quantum Computing",
      tags: ["Quantum AI", "Business Automation", "ROI", "Quantum Computing"],
      featured: false,
      views: 87000,
      likes: 6400,
      imageUrl: "/images/quantum-automation-2026.jpg",
      videoUrl: "/videos/quantum-automation-demo.mp4"
    },
    {
      id: 5,
      title: "AI Ethics and Governance: Building Responsible AI Systems",
      excerpt: "Comprehensive framework for developing ethical AI systems that prioritize human values and societal benefit.",
      content: "As AI systems become more powerful and autonomous, the need for robust ethics and governance frameworks becomes critical. Our comprehensive approach ensures that AI development prioritizes human values, transparency, and societal benefit while maintaining technological advancement.",
      author: "Dr. Maria Santos",
      authorRole: "AI Ethics Director",
      publishDate: "2025-01-16",
      readTime: "11 min read",
      category: "AI Ethics",
      tags: ["AI Ethics", "Governance", "Responsible AI", "Human Values"],
      featured: false,
      views: 67000,
      likes: 4800,
      imageUrl: "/images/ai-ethics-2026.jpg",
      videoUrl: "/videos/ai-ethics-demo.mp4"
    },
    {
      id: 6,
      title: "The Future of Human-AI Collaboration: Symbiotic Intelligence",
      excerpt: "Exploring how humans and AI can work together to create unprecedented levels of intelligence and creativity.",
      content: "The future belongs to symbiotic intelligence—the seamless collaboration between human creativity and AI processing power. This partnership creates unprecedented opportunities for innovation, problem-solving, and creative expression that neither humans nor AI could achieve alone.",
      author: "Dr. James Wilson",
      authorRole: "Human-AI Collaboration Expert",
      publishDate: "2025-01-15",
      readTime: "9 min read",
      category: "Human-AI Collaboration",
      tags: ["Human-AI", "Collaboration", "Symbiotic Intelligence", "Future Tech"],
      featured: false,
      views: 92000,
      likes: 7800,
      imageUrl: "/images/human-ai-collaboration-2026.jpg",
      videoUrl: "/videos/human-ai-collaboration-demo.mp4"
    }
  ];

  const categories = [
    { name: 'all', label: 'All Insights', count: insights.length },
    { name: 'AI Consciousness', label: 'AI Consciousness', count: insights.filter(i => i.category === 'AI Consciousness').length },
    { name: 'Business Automation', label: 'Business Automation', count: insights.filter(i => i.category === 'Business Automation').length },
    { name: 'Neural Technology', label: 'Neural Technology', count: insights.filter(i => i.category === 'Neural Technology').length },
    { name: 'Quantum Computing', label: 'Quantum Computing', count: insights.filter(i => i.category === 'Quantum Computing').length },
    { name: 'AI Ethics', label: 'AI Ethics', count: insights.filter(i => i.category === 'AI Ethics').length },
    { name: 'Human-AI Collaboration', label: 'Human-AI Collaboration', count: insights.filter(i => i.category === 'Human-AI Collaboration').length }
  ];

  const filteredInsights = activeTab === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Tech
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Insights 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Deep dive into the most groundbreaking technological insights that are reshaping our world. 
              From AI consciousness to quantum computing, explore the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Reading
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Insights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredInsights.map((insight) => (
            <div key={insight.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={insight.imageUrl} 
                  alt={insight.title}
                  className="w-full h-64 object-cover"
                />
                {insight.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                {insight.videoUrl && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                    <Play className="h-16 w-16 text-white" />
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {insight.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {insight.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag) => (
                    <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {insight.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {insight.likes.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {insight.publishDate}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {insight.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{insight.author}</div>
                      <div className="text-gray-400 text-sm">{insight.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Read More
                    </button>
                    {insight.videoUrl && (
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

      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Ahead of the Revolution</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest revolutionary tech insights delivered directly to your inbox. 
            Join 50,000+ tech leaders who trust our analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechInsights2026;