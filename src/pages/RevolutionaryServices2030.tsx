import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  BarChart,
  MessageCircle,
  ShoppingCart,
  HelpCircle,
  BookOpen,
  Heart,
  Atom,
  Gauge,
  PenTool,
  Satellite,
  Leaf,
  Coins,
  Lightbulb
} from 'lucide-react';
import SEO from "@/components/SEO";
import { REVOLUTIONARY_SERVICES_2030 } from "@/data/revolutionaryServices2030";
import { EMERGING_TECH_SERVICES_2030 } from "@/data/emergingTechServices2030";
import { REVOLUTIONARY_PRICING_GUIDE_2030 } from "@/data/revolutionaryPricingGuide2030";

const RevolutionaryServices2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 25 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'ai', name: 'Advanced AI', icon: Brain, count: 10 },
    { id: 'space', name: 'Space Technology', icon: Satellite, count: 4 },
    { id: 'biotech', name: 'Biotechnology', icon: Heart, count: 3 }
  ];

  const revolutionaryServices = [
    // Quantum Computing Services
    {
      id: 'quantum-supremacy-platform',
      category: 'quantum',
      icon: Atom,
      title: "Quantum Supremacy Platform",
      description: "Achieve quantum advantage with our next-generation quantum computing platform that solves previously impossible problems.",
      features: [
        "1000+ qubit quantum processors",
        "Quantum error correction",
        "Hybrid quantum-classical algorithms",
        "Real-time quantum simulation",
        "Quantum cloud access",
        "Custom quantum applications",
        "Performance benchmarking",
        "Expert quantum consulting"
      ],
      pricing: "$5,000/month",
      marketPrice: "$15,000-50,000/month",
      benefits: ["Solve NP-hard problems", "Achieve quantum advantage", "Future-proof technology"],
      link: "/services/quantum-supremacy-platform",
      featured: true,
      color: "from-purple-500 to-indigo-500",
      availability: "Q2 2030"
    },
    {
      id: 'quantum-financial-trading',
      category: 'quantum',
      icon: Coins,
      title: "Quantum Financial Trading",
      description: "Revolutionary trading platform using quantum algorithms for ultra-fast market analysis and risk assessment.",
      features: [
        "Quantum portfolio optimization",
        "Real-time risk assessment",
        "Quantum machine learning models",
        "High-frequency trading algorithms",
        "Market prediction models",
        "Risk management tools",
        "Compliance reporting",
        "24/7 monitoring"
      ],
      pricing: "$3,500/month",
      marketPrice: "$10,000-25,000/month",
      benefits: ["1000x faster analysis", "Superior risk assessment", "Quantum advantage in trading"],
      link: "/services/quantum-financial-trading",
      featured: true,
      color: "from-green-500 to-emerald-500",
      availability: "Q3 2030"
    },
    {
      id: 'quantum-cryptography',
      category: 'quantum',
      icon: Lock,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography algorithms.",
      features: [
        "Quantum key distribution (QKD)",
        "Post-quantum cryptography",
        "Quantum-resistant algorithms",
        "Secure communication channels",
        "Quantum random number generation",
        "Cryptographic agility",
        "Compliance frameworks",
        "Integration APIs"
      ],
      pricing: "$2,500/month",
      marketPrice: "$8,000-20,000/month",
      benefits: ["Unbreakable encryption", "Future-proof security", "Quantum-resistant"],
      link: "/services/quantum-cryptography",
      featured: false,
      color: "from-red-500 to-pink-500",
      availability: "Q1 2030"
    },
    {
      id: 'quantum-drug-discovery',
      category: 'quantum',
      icon: Heart,
      title: "Quantum Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum computing for molecular simulation and drug design.",
      features: [
        "Quantum molecular simulation",
        "Drug molecule optimization",
        "Protein folding prediction",
        "Chemical reaction modeling",
        "Toxicity prediction",
        "Clinical trial optimization",
        "Research collaboration tools",
        "Regulatory compliance"
      ],
      pricing: "$4,000/month",
      marketPrice: "$12,000-30,000/month",
      benefits: ["100x faster drug discovery", "Accurate molecular modeling", "Life-saving breakthroughs"],
      link: "/services/quantum-drug-discovery",
      featured: false,
      color: "from-blue-500 to-cyan-500",
      availability: "Q4 2030"
    },
    {
      id: 'quantum-climate-modeling',
      category: 'quantum',
      icon: Globe,
      title: "Quantum Climate Modeling",
      description: "Advanced climate prediction using quantum computing for complex atmospheric and ocean modeling.",
      features: [
        "Quantum atmospheric modeling",
        "Ocean circulation simulation",
        "Climate pattern prediction",
        "Extreme weather forecasting",
        "Carbon sequestration modeling",
        "Policy impact assessment",
        "Real-time data integration",
        "Scientific collaboration"
      ],
      pricing: "$3,000/month",
      marketPrice: "$8,000-20,000/month",
      benefits: ["Accurate climate predictions", "Policy decision support", "Environmental protection"],
      link: "/services/quantum-climate-modeling",
      featured: false,
      color: "from-teal-500 to-green-500",
      availability: "Q2 2030"
    },
    {
      id: 'quantum-logistics',
      category: 'quantum',
      icon: Network,
      title: "Quantum Logistics Optimization",
      description: "Revolutionary supply chain optimization using quantum algorithms for complex routing and scheduling.",
      features: [
        "Quantum route optimization",
        "Supply chain simulation",
        "Inventory optimization",
        "Demand forecasting",
        "Real-time tracking",
        "Cost optimization",
        "Sustainability metrics",
        "Integration with ERP systems"
      ],
      pricing: "$2,800/month",
      marketPrice: "$7,000-18,000/month",
      benefits: ["Optimal supply chains", "Cost reduction", "Sustainability improvement"],
      link: "/services/quantum-logistics",
      featured: false,
      color: "from-orange-500 to-red-500",
      availability: "Q3 2030"
    },
    {
      id: 'quantum-energy-optimization',
      category: 'quantum',
      icon: Zap,
      title: "Quantum Energy Optimization",
      description: "Optimize energy grids and renewable energy systems using quantum computing algorithms.",
      features: [
        "Grid load balancing",
        "Renewable energy integration",
        "Energy storage optimization",
        "Demand response modeling",
        "Carbon footprint reduction",
        "Real-time monitoring",
        "Predictive maintenance",
        "Regulatory compliance"
      ],
      pricing: "$3,200/month",
      marketPrice: "$9,000-22,000/month",
      benefits: ["Energy efficiency", "Renewable integration", "Cost savings"],
      link: "/services/quantum-energy-optimization",
      featured: false,
      color: "from-yellow-500 to-orange-500",
      availability: "Q1 2030"
    },
    {
      id: 'quantum-materials-science',
      category: 'quantum',
      icon: Atom,
      title: "Quantum Materials Science",
      description: "Discover new materials with quantum computing for advanced electronics, batteries, and nanotechnology.",
      features: [
        "Material property prediction",
        "Crystal structure optimization",
        "Electronic property simulation",
        "Battery material design",
        "Nanomaterial modeling",
        "Manufacturing optimization",
        "Research collaboration",
        "Patent support"
      ],
      pricing: "$3,800/month",
      marketPrice: "$11,000-28,000/month",
      benefits: ["New material discovery", "Technology advancement", "Innovation leadership"],
      link: "/services/quantum-materials-science",
      featured: false,
      color: "from-indigo-500 to-purple-500",
      availability: "Q4 2030"
    },

    // Advanced AI Services
    {
      id: 'consciousness-ai',
      category: 'ai',
      icon: Brain,
      title: "Consciousness AI Platform",
      description: "Next-generation AI with advanced consciousness simulation and emotional intelligence capabilities.",
      features: [
        "Emotional intelligence AI",
        "Consciousness simulation",
        "Advanced natural language processing",
        "Contextual understanding",
        "Empathy modeling",
        "Creative problem solving",
        "Ethical decision making",
        "Human-AI collaboration"
      ],
      pricing: "$4,500/month",
      marketPrice: "$12,000-35,000/month",
      benefits: ["Human-like AI interaction", "Advanced problem solving", "Ethical AI development"],
      link: "/services/consciousness-ai",
      featured: true,
      color: "from-pink-500 to-red-500",
      availability: "Q3 2030"
    },
    {
      id: 'autonomous-ai-systems',
      category: 'ai',
      icon: Bot,
      title: "Autonomous AI Systems",
      description: "Fully autonomous AI systems that can operate independently and make complex decisions without human intervention.",
      features: [
        "Full autonomy capabilities",
        "Complex decision making",
        "Self-learning algorithms",
        "Risk assessment",
        "Adaptive behavior",
        "Performance optimization",
        "Safety protocols",
        "Human oversight tools"
      ],
      pricing: "$5,500/month",
      marketPrice: "$15,000-40,000/month",
      benefits: ["Complete automation", "Reduced human intervention", "24/7 operation"],
      link: "/services/autonomous-ai-systems",
      featured: true,
      color: "from-blue-500 to-indigo-500",
      availability: "Q4 2030"
    },
    {
      id: 'ai-creativity-engine',
      category: 'ai',
      icon: Lightbulb,
      title: "AI Creativity Engine",
      description: "Revolutionary AI system that generates original creative content, art, music, and innovative solutions.",
      features: [
        "Original content generation",
        "Creative problem solving",
        "Artistic expression AI",
        "Musical composition",
        "Innovation brainstorming",
        "Design optimization",
        "Creative collaboration",
        "Intellectual property management"
      ],
      pricing: "$3,200/month",
      marketPrice: "$8,000-20,000/month",
      benefits: ["Unlimited creativity", "Innovation acceleration", "Original content"],
      link: "/services/ai-creativity-engine",
      featured: false,
      color: "from-yellow-500 to-orange-500",
      availability: "Q2 2030"
    },
    {
      id: 'ai-ethics-framework',
      category: 'ai',
      icon: ShieldCheck,
      title: "AI Ethics Framework",
      description: "Comprehensive ethical framework for AI development, ensuring responsible and fair AI systems.",
      features: [
        "Ethical AI guidelines",
        "Bias detection & mitigation",
        "Fairness algorithms",
        "Transparency tools",
        "Accountability systems",
        "Ethical decision making",
        "Compliance monitoring",
        "Stakeholder engagement"
      ],
      pricing: "$2,800/month",
      marketPrice: "$7,000-18,000/month",
      benefits: ["Ethical AI development", "Bias elimination", "Responsible technology"],
      link: "/services/ai-ethics-framework",
      featured: false,
      color: "from-green-500 to-teal-500",
      availability: "Q1 2030"
    },
    {
      id: 'ai-consensus-building',
      category: 'ai',
      icon: Users,
      title: "AI Consensus Building",
      description: "AI-powered system that facilitates consensus building and decision making in complex group scenarios.",
      features: [
        "Group decision facilitation",
        "Consensus algorithms",
        "Conflict resolution",
        "Stakeholder analysis",
        "Decision optimization",
        "Collaboration tools",
        "Outcome prediction",
        "Implementation support"
      ],
      pricing: "$3,500/month",
      marketPrice: "$9,000-22,000/month",
      benefits: ["Better group decisions", "Conflict reduction", "Efficient consensus"],
      link: "/services/ai-consensus-building",
      featured: false,
      color: "from-purple-500 to-pink-500",
      availability: "Q3 2030"
    },
    {
      id: 'ai-predictive-society',
      category: 'ai',
      icon: Eye,
      title: "AI Predictive Society",
      description: "Advanced AI system that predicts societal trends, behaviors, and future developments.",
      features: [
        "Societal trend prediction",
        "Behavioral analysis",
        "Future scenario modeling",
        "Policy impact assessment",
        "Social dynamics simulation",
        "Cultural evolution tracking",
        "Predictive analytics",
        "Strategic planning support"
      ],
      pricing: "$4,200/month",
      marketPrice: "$11,000-28,000/month",
      benefits: ["Future insights", "Strategic planning", "Societal understanding"],
      link: "/services/ai-predictive-society",
      featured: false,
      color: "from-indigo-500 to-blue-500",
      availability: "Q4 2030"
    },
    {
      id: 'ai-bio-interface',
      category: 'ai',
      icon: Heart,
      title: "AI-Bio Interface",
      description: "Revolutionary interface between AI systems and biological systems for enhanced human capabilities.",
      features: [
        "Brain-computer interface",
        "Biological signal processing",
        "Neural enhancement",
        "Health monitoring",
        "Cognitive augmentation",
        "Biofeedback systems",
        "Medical applications",
        "Research collaboration"
      ],
      pricing: "$6,000/month",
      marketPrice: "$18,000-45,000/month",
      benefits: ["Enhanced human capabilities", "Medical breakthroughs", "Human-AI integration"],
      link: "/services/ai-bio-interface",
      featured: true,
      color: "from-red-500 to-pink-500",
      availability: "Q4 2030"
    },
    {
      id: 'ai-quantum-hybrid',
      category: 'ai',
      icon: Atom,
      title: "AI-Quantum Hybrid Systems",
      description: "Revolutionary systems combining AI and quantum computing for unprecedented computational power.",
      features: [
        "Quantum-AI algorithms",
        "Hybrid processing",
        "Quantum machine learning",
        "Advanced optimization",
        "Complex problem solving",
        "Performance acceleration",
        "Research applications",
        "Custom development"
      ],
      pricing: "$7,500/month",
      marketPrice: "$25,000-60,000/month",
      benefits: ["Unprecedented power", "Problem solving", "Research advancement"],
      link: "/services/ai-quantum-hybrid",
      featured: true,
      color: "from-purple-500 to-indigo-500",
      availability: "Q4 2030"
    },
    {
      id: 'ai-emotional-intelligence',
      category: 'ai',
      icon: Heart,
      title: "AI Emotional Intelligence",
      description: "Advanced AI systems with deep emotional understanding and empathetic response capabilities.",
      features: [
        "Emotional recognition",
        "Empathetic responses",
        "Mood analysis",
        "Emotional support",
        "Relationship building",
        "Conflict resolution",
        "Mental health support",
        "Human connection"
      ],
      pricing: "$3,800/month",
      marketPrice: "$10,000-25,000/month",
      benefits: ["Emotional support", "Better relationships", "Mental health"],
      link: "/services/ai-emotional-intelligence",
      featured: false,
      color: "from-pink-500 to-red-500",
      availability: "Q2 2030"
    },
    {
      id: 'ai-creative-collaboration',
      category: 'ai',
      icon: Users,
      title: "AI Creative Collaboration",
      description: "AI-powered platform that enhances human creativity through collaborative intelligence.",
      features: [
        "Creative collaboration tools",
        "Idea generation",
        "Project management",
        "Team coordination",
        "Innovation tracking",
        "Creative workflows",
        "Performance analytics",
        "Integration platforms"
      ],
      pricing: "$2,900/month",
      marketPrice: "$7,500-19,000/month",
      benefits: ["Enhanced creativity", "Better collaboration", "Innovation acceleration"],
      link: "/services/ai-creative-collaboration",
      featured: false,
      color: "from-blue-500 to-cyan-500",
      availability: "Q1 2030"
    },

    // Space Technology Services
    {
      id: 'space-mining-platform',
      category: 'space',
      icon: Satellite,
      title: "Space Mining Platform",
      description: "Revolutionary platform for asteroid mining and space resource extraction using advanced robotics and AI.",
      features: [
        "Asteroid identification",
        "Mining robotics",
        "Resource extraction",
        "Processing facilities",
        "Transport systems",
        "Safety protocols",
        "Regulatory compliance",
        "Investment opportunities"
      ],
      pricing: "$15,000/month",
      marketPrice: "$50,000-150,000/month",
      benefits: ["Space resources", "Investment returns", "Technology advancement"],
      link: "/services/space-mining-platform",
      featured: true,
      color: "from-blue-500 to-indigo-500",
      availability: "Q4 2030"
    },
    {
      id: 'mars-colony-simulation',
      category: 'space',
      icon: Globe,
      title: "Mars Colony Simulation",
      description: "Advanced simulation platform for Mars colonization planning and sustainable habitat design.",
      features: [
        "Colony design simulation",
        "Resource management",
        "Life support systems",
        "Sustainability modeling",
        "Risk assessment",
        "Mission planning",
        "Research collaboration",
        "Educational tools"
      ],
      pricing: "$8,000/month",
      marketPrice: "$20,000-60,000/month",
      benefits: ["Mars colonization", "Sustainable design", "Space exploration"],
      link: "/services/mars-colony-simulation",
      featured: false,
      color: "from-red-500 to-orange-500",
      availability: "Q3 2030"
    },
    {
      id: 'space-debris-cleanup',
      category: 'space',
      icon: Shield,
      title: "Space Debris Cleanup",
      description: "Innovative solutions for cleaning up space debris and maintaining orbital sustainability.",
      features: [
        "Debris detection",
        "Cleanup robotics",
        "Orbital mechanics",
        "Safety protocols",
        "Regulatory compliance",
        "Performance monitoring",
        "Cost optimization",
        "International collaboration"
      ],
      pricing: "$12,000/month",
      marketPrice: "$35,000-100,000/month",
      benefits: ["Orbital sustainability", "Space safety", "Environmental protection"],
      link: "/services/space-debris-cleanup",
      featured: false,
      color: "from-green-500 to-teal-500",
      availability: "Q2 2030"
    },
    {
      id: 'quantum-space-communication',
      category: 'space',
      icon: Wifi,
      title: "Quantum Space Communication",
      description: "Revolutionary quantum communication systems for secure, instant communication across space.",
      features: [
        "Quantum entanglement",
        "Instant communication",
        "Secure transmission",
        "Interplanetary networks",
        "Quantum satellites",
        "Network infrastructure",
        "Security protocols",
        "Integration APIs"
      ],
      pricing: "$18,000/month",
      marketPrice: "$60,000-180,000/month",
      benefits: ["Instant communication", "Unbreakable security", "Space networks"],
      link: "/services/quantum-space-communication",
      featured: true,
      color: "from-purple-500 to-pink-500",
      availability: "Q4 2030"
    },

    // Biotechnology Services
    {
      id: 'synthetic-biology-platform',
      category: 'biotech',
      icon: Leaf,
      title: "Synthetic Biology Platform",
      description: "Revolutionary platform for designing and engineering biological systems for various applications.",
      features: [
        "DNA design tools",
        "Biological engineering",
        "Gene editing",
        "Metabolic engineering",
        "Biosafety protocols",
        "Regulatory compliance",
        "Research collaboration",
        "Commercial applications"
      ],
      pricing: "$10,000/month",
      marketPrice: "$30,000-80,000/month",
      benefits: ["Biological innovation", "Medical breakthroughs", "Sustainable solutions"],
      link: "/services/synthetic-biology-platform",
      featured: true,
      color: "from-green-500 to-emerald-500",
      availability: "Q3 2030"
    },
    {
      id: 'brain-computer-interface',
      category: 'biotech',
      icon: Brain,
      title: "Advanced Brain-Computer Interface",
      description: "Next-generation brain-computer interface for enhanced human capabilities and medical applications.",
      features: [
        "Neural signal processing",
        "Brain mapping",
        "Cognitive enhancement",
        "Medical applications",
        "Safety protocols",
        "Performance monitoring",
        "Research tools",
        "Clinical integration"
      ],
      pricing: "$25,000/month",
      marketPrice: "$80,000-200,000/month",
      benefits: ["Enhanced capabilities", "Medical breakthroughs", "Human advancement"],
      link: "/services/brain-computer-interface",
      featured: true,
      color: "from-indigo-500 to-purple-500",
      availability: "Q4 2030"
    },
    {
      id: 'quantum-biology-research',
      category: 'biotech',
      icon: Atom,
      title: "Quantum Biology Research",
      description: "Revolutionary research platform exploring quantum effects in biological systems.",
      features: [
        "Quantum biology simulation",
        "Biological quantum effects",
        "Research collaboration",
        "Data analysis tools",
        "Publication support",
        "Grant assistance",
        "Industry partnerships",
        "Educational resources"
      ],
      pricing: "$6,000/month",
      marketPrice: "$18,000-45,000/month",
      benefits: ["Scientific breakthroughs", "Research advancement", "Industry innovation"],
      link: "/services/quantum-biology-research",
      featured: false,
      color: "from-teal-500 to-blue-500",
      availability: "Q2 2030"
    }
  ];

  const filteredServices = revolutionaryServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Revolutionary Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              2030 & Beyond
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Experience the future of technology with our revolutionary services. From quantum computing to space technology, 
            we're building tomorrow's solutions today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  service.featured ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-yellow-400 text-zion-slate-dark px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                    <Clock className="w-3 h-3" />
                    Available: {service.availability}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-sm text-zion-slate-light ml-2">/month</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-zion-slate-light line-through">{service.marketPrice}</span>
                      <span className="text-xs text-green-400 ml-2">market rate</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={service.link}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Shaping the Future of Technology
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Our revolutionary services represent the cutting edge of human innovation. We're not just building 
              the future – we're defining it. Join us in creating tomorrow's world today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-purple-100">Revolutionary Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2030</div>
                <div className="text-purple-100">Future Technology</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-purple-100">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Be among the first to experience these revolutionary technologies. Our team of experts is ready 
              to guide you into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
            </div>
            <div className="text-purple-100">
              <p className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServices2030;