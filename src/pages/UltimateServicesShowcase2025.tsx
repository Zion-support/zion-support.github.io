import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const UltimateServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      title: "AI-Powered Business Automation",
      description: "Transform your business operations with intelligent automation solutions that learn, adapt, and optimize continuously.",
      icon: "🤖",
      category: "Artificial Intelligence",
      features: ["Process Automation", "Predictive Analytics", "Intelligent Decision Making", "Self-Optimizing Systems"],
      link: "/services/ai-business-automation",
      trending: true
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness quantum computing power to solve complex problems that are impossible for classical computers.",
      icon: "⚛️",
      category: "Quantum Technology",
      features: ["Quantum Algorithms", "Cryptography", "Optimization", "Machine Learning"],
      link: "/services/quantum-computing",
      trending: true
    },
    {
      title: "Blockchain 3.0 Platform",
      description: "Next-generation blockchain solutions with enhanced security, scalability, and interoperability.",
      icon: "🔗",
      category: "Blockchain",
      features: ["Smart Contracts 2.0", "Cross-Chain Integration", "DeFi Solutions", "NFT Marketplaces"],
      link: "/services/blockchain-3-0",
      trending: false
    },
    {
      title: "Metaverse Development",
      description: "Create immersive virtual worlds and experiences that engage users and drive business value.",
      icon: "🌐",
      category: "Metaverse",
      features: ["3D World Building", "Avatar Systems", "Virtual Economy", "Social Integration"],
      link: "/services/metaverse-development",
      trending: true
    },
    {
      title: "Edge Computing AI",
      description: "Ultra-low latency AI processing at the edge for real-time applications and decision making.",
      icon: "⚡",
      category: "Edge Computing",
      features: ["Real-time Processing", "Low Latency", "Distributed AI", "IoT Integration"],
      link: "/services/edge-computing-ai",
      trending: false
    },
    {
      title: "Autonomous IoT Networks",
      description: "Self-managing IoT networks that optimize themselves for maximum efficiency and minimal intervention.",
      icon: "🌐",
      category: "IoT & Automation",
      features: ["Self-Healing Networks", "Predictive Maintenance", "Energy Optimization", "Smart Management"],
      link: "/services/autonomous-iot",
      trending: false
    }
  ];

  const newContent = [
    {
      title: "The Future of AI in Business 2025",
      description: "Explore how artificial intelligence is revolutionizing business operations with autonomous decision-making and predictive analytics.",
      type: "Blog Post",
      link: "/blog/the-future-of-ai-in-business-2025",
      publishDate: "January 15, 2025"
    },
    {
      title: "Innovative Tech Solutions 2025",
      description: "Discover cutting-edge technology solutions including AI-powered quantum computing and neural network automation.",
      type: "Service Page",
      link: "/innovative-tech-solutions-2025",
      publishDate: "January 10, 2025"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing solutions for businesses with quantum algorithms, machine learning, and cryptography.",
      type: "Service Page",
      link: "/services/quantum-computing-solutions",
      publishDate: "January 8, 2025"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: "🚀" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "24/7", label: "Expert Support", icon: "🛡️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Ultimate Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of cutting-edge technology solutions including AI, quantum computing, blockchain, and metaverse development services."
        keywords="technology services, AI solutions, quantum computing, blockchain, metaverse development, edge computing, IoT automation, Zion Tech Group"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              New Content Alert
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ultimate Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our latest and greatest technology solutions, featuring brand new content and cutting-edge innovations 
            that are reshaping the future of business and technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Explore All Services
            </Button>
            <Button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg">
              View New Content
            </Button>
          </div>
        </div>

        {/* New Content Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🆕 Fresh Content & Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Check out our latest blog posts, service pages, and innovative solutions that we've just added to our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newContent.map((content, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {content.type}
                    </span>
                    <span className="text-xs text-gray-400">{content.publishDate}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{content.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{content.description}</p>
                  <Link to={content.link}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300">
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Featured Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our most popular and trending technology solutions that are transforming businesses worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 h-full relative">
                {service.trending && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    🔥 Trending
                  </div>
                )}
                <div className="p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-300">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🛠️ Technology Stack</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies and modern frameworks for optimal performance and scalability.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "React 18", icon: "⚛️", description: "Modern UI Framework" },
              { name: "TypeScript", icon: "📘", description: "Type-Safe Development" },
              { name: "Node.js", icon: "🟢", description: "Server-Side Runtime" },
              { name: "Quantum Computing", icon: "⚛️", description: "Next-Gen Processing" },
              { name: "AI/ML", icon: "🤖", description: "Intelligent Automation" },
              { name: "Blockchain", icon: "🔗", description: "Decentralized Solutions" },
              { name: "Cloud Native", icon: "☁️", description: "Scalable Infrastructure" },
              { name: "Edge Computing", icon: "⚡", description: "Low-Latency Processing" }
            ].map((tech, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our innovative technology solutions. 
              Get started today and experience the future of business automation and digital transformation.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
                Get Started Now
              </Button>
              <Button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2025;