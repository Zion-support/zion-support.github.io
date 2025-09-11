import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Image,
  Video,
  Music,
  Type,
  Layout,
  Camera,
  Mic,
  Edit3,
  Copy,
  Search,
  Share2,
  Download,
  Upload,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Crop,
  Filter,
  Layers,
  Grid,
  List,
  Calendar,
  Clock,
  Tag,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal
} from 'lucide-react';

const contentCreationSolutions = [
  {
    id: 1,
    title: "Content Management System",
    description: "Comprehensive platform for creating, managing, and publishing digital content across multiple channels.",
    icon: FileText,
    features: [
      "Content creation tools",
      "Multi-channel publishing",
      "Version control",
      "Workflow management"
    ],
    price: "From $50,000",
    timeline: "12-20 weeks",
    category: "CMS",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "Video Production Platform",
    description: "Professional video creation and editing tools for marketing and educational content.",
    icon: Video,
    features: [
      "Video editing",
      "Motion graphics",
      "Audio processing",
      "Export options"
    ],
    price: "From $80,000",
    timeline: "16-24 weeks",
    category: "Video",
    technologies: ["WebRTC", "Canvas API", "Web Audio API", "FFmpeg"]
  },
  {
    id: 3,
    title: "Graphic Design Suite",
    description: "Web-based graphic design tools for creating marketing materials and visual content.",
    icon: Palette,
    features: [
      "Design templates",
      "Asset library",
      "Collaboration tools",
      "Export formats"
    ],
    price: "From $60,000",
    timeline: "14-22 weeks",
    category: "Design",
    technologies: ["Canvas API", "SVG", "WebGL", "Three.js"]
  },
  {
    id: 4,
    title: "Audio Production Tools",
    description: "Professional audio recording, editing, and processing applications.",
    icon: Music,
    features: [
      "Audio recording",
      "Sound editing",
      "Effects processing",
      "Mixing tools"
    ],
    price: "From $70,000",
    timeline: "16-24 weeks",
    category: "Audio",
    technologies: ["Web Audio API", "MediaRecorder", "AudioWorklet", "WebAssembly"]
  },
  {
    id: 5,
    title: "Content Analytics Platform",
    description: "Advanced analytics and insights for content performance and audience engagement.",
    icon: BarChart3,
    features: [
      "Performance metrics",
      "Audience insights",
      "A/B testing",
      "ROI tracking"
    ],
    price: "From $40,000",
    timeline: "12-18 weeks",
    category: "Analytics",
    technologies: ["Google Analytics", "Mixpanel", "Amplitude", "Custom APIs"]
  },
  {
    id: 6,
    title: "Content Distribution Network",
    description: "Global content delivery and distribution platform for maximum reach and performance.",
    icon: Globe,
    features: [
      "Global CDN",
      "Load balancing",
      "Performance optimization",
      "Analytics tracking"
    ],
    price: "From $100,000",
    timeline: "20-32 weeks",
    category: "Distribution",
    technologies: ["CDN", "Edge Computing", "Load Balancing", "Performance Monitoring"]
  }
];

const contentTechnologies = [
  {
    name: "Content Creation Tools",
    description: "Professional tools for creating digital content",
    icon: PenTool,
    useCase: "Content Production",
    reliability: "High"
  },
  {
    name: "Media Processing",
    description: "Advanced audio and video processing capabilities",
    icon: Video,
    useCase: "Media Editing",
    reliability: "Critical"
  },
  {
    name: "AI Content Generation",
    description: "AI-powered content creation and optimization",
    icon: Brain,
    useCase: "Content Automation",
    reliability: "High"
  },
  {
    name: "Content Analytics",
    description: "Data-driven insights for content optimization",
    icon: BarChart3,
    useCase: "Performance Analysis",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Digital Marketing Agency",
    industry: "Marketing",
    challenge: "Needed scalable content creation platform for 100+ clients",
    solution: "Built custom CMS with AI-powered content generation and multi-channel publishing",
    results: "300% increase in content production, 50% reduction in creation time, improved client satisfaction",
    logo: "DMA"
  },
  {
    id: 2,
    company: "Educational Platform",
    industry: "Education",
    challenge: "Required video production tools for online course creation",
    solution: "Developed web-based video editing platform with collaboration features",
    results: "200% increase in course production, 40% improvement in video quality, enhanced student engagement",
    logo: "EP"
  },
  {
    id: 3,
    company: "E-commerce Brand",
    industry: "Retail",
    challenge: "Needed automated content generation for product descriptions",
    solution: "Implemented AI-powered content creation system with brand voice consistency",
    results: "500% increase in content output, 60% improvement in SEO performance, higher conversion rates",
    logo: "EB"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Content Strategy",
    description: "Define content goals, target audience, and distribution channels",
    icon: Target,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Platform Development",
    description: "Build content creation and management tools",
    icon: Code,
    duration: "12-32 weeks"
  },
  {
    step: 3,
    title: "Content Production",
    description: "Create and optimize content using the new platform",
    icon: PenTool,
    duration: "4-8 weeks"
  },
  {
    step: 4,
    title: "Distribution & Analytics",
    description: "Publish content and track performance metrics",
    icon: BarChart3,
    duration: "Ongoing"
  }
];

const contentBenefits = [
  {
    title: "Increased Productivity",
    description: "Streamlined workflows and automated processes boost content creation efficiency",
    icon: Zap,
    examples: ["Faster content creation", "Automated workflows", "Collaboration tools", "Template libraries"]
  },
  {
    title: "Better Quality",
    description: "Professional tools and AI assistance improve content quality and consistency",
    icon: Award,
    examples: ["Professional templates", "AI assistance", "Quality checks", "Brand consistency"]
  },
  {
    title: "Multi-channel Reach",
    description: "Distribute content across multiple platforms and channels simultaneously",
    icon: Globe,
    examples: ["Social media", "Website", "Email marketing", "Mobile apps"]
  },
  {
    title: "Data-driven Insights",
    description: "Analytics and performance tracking optimize content strategy",
    icon: BarChart3,
    examples: ["Performance metrics", "Audience insights", "A/B testing", "ROI tracking"]
  }
];

export default function ContentCreation() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'CMS', 'Video', 'Design', 'Audio', 'Analytics', 'Distribution'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? contentCreationSolutions 
    : contentCreationSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <PenTool className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Content Creation &
              <span className="text-gradient block">Digital Media</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your content creation process with cutting-edge digital tools and platforms. 
              From video production to AI-powered content generation, we help you create engaging content at scale.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <PenTool className="w-4 h-4" />
                <span>Creative Tools</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Brain className="w-4 h-4" />
                <span>AI Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Globe className="w-4 h-4" />
                <span>Multi-channel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Creation Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Content Creation Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make content creation technology essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Content Creation Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading content creation platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Content Creation Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful content creation platform implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Content Creation Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for modern content creation and management
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Content Creation Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their content creation with technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how content creation technology can streamline your workflows, 
              improve quality, and increase your content output.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Content Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Content Creation Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}