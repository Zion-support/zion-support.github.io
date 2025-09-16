<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' }
  ];

=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      category: "ai",
      challenge: "Inefficient production lines causing 40% waste and $50M annual losses",
      solution: "Implemented our Conscious AI Systems for autonomous production optimization",
      results: [
        "400% efficiency improvement",
        "$50M annual cost savings",
        "99.9% quality control accuracy",
        "Zero downtime achieved"
      ],
      metrics: {
        roi: "1,200%",
        timeframe: "6 months",
        team: "15 AI specialists"
      },
<<<<<<< HEAD
=======
=======
      category: "manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Automotive Manufacturing",
      challenge: "Reduce production costs while increasing output quality and efficiency",
      solution: "Implemented autonomous AI agents for production line optimization and predictive maintenance",
      results: {
        efficiency: "+400%",
        costReduction: "40%",
        qualityImprovement: "99.9%",
        timeline: "6 months"
      },
      description: "A leading automotive manufacturer transformed their production line with our AI solutions, achieving unprecedented efficiency gains while maintaining the highest quality standards.",
      technologies: ["Autonomous AI Agents", "Predictive Analytics", "Computer Vision", "IoT Integration"],
      testimonial: "The AI implementation exceeded our wildest expectations. We've never seen such dramatic improvements in such a short time.",
      author: "Sarah Johnson, CEO",
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
      image: "🏭",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare AI Diagnosis Breakthrough",
      company: "Metropolitan Medical Center",
      industry: "Healthcare",
      category: "ai",
      challenge: "High misdiagnosis rates affecting patient outcomes and increasing costs",
      solution: "Deployed Quantum AI Processing for medical image analysis and diagnosis",
      results: [
        "99.9% diagnostic accuracy",
        "85% reduction in misdiagnosis",
        "50,000+ patients treated",
        "60% faster diagnosis time"
      ],
      metrics: {
        roi: "800%",
        timeframe: "4 months",
        team: "8 AI specialists"
      },
      image: "🏥",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Financial Trading Neural Interface",
      company: "Quantum Capital Group",
      industry: "Finance",
      category: "neural",
      challenge: "Traders unable to process market data fast enough for optimal decisions",
      solution: "Implemented Neural Interface AI for real-time market analysis",
      results: [
        "1000x faster data processing",
        "$2.5B additional revenue",
        "95% trade success rate",
        "24/7 autonomous trading"
      ],
      metrics: {
        roi: "2,500%",
        timeframe: "8 months",
        team: "12 neural interface specialists"
      },
      image: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Quantum Cryptography Implementation",
      company: "SecureData Systems",
      industry: "Cybersecurity",
      category: "quantum",
      challenge: "Traditional encryption vulnerable to quantum attacks",
      solution: "Deployed quantum-resistant cryptographic systems",
      results: [
        "100% quantum-resistant security",
        "Zero security breaches",
        "50% faster encryption",
        "Unlimited scalability"
      ],
      metrics: {
        roi: "600%",
        timeframe: "5 months",
        team: "10 quantum specialists"
      },
      image: "🔐",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 5,
      title: "Blockchain Supply Chain Optimization",
      company: "Global Logistics Inc",
      industry: "Logistics",
      category: "blockchain",
      challenge: "Supply chain transparency and traceability issues",
      solution: "Implemented blockchain-based supply chain tracking system",
      results: [
        "100% supply chain transparency",
        "60% reduction in fraud",
        "$15M cost savings",
        "Real-time tracking"
      ],
      metrics: {
        roi: "900%",
        timeframe: "7 months",
        team: "6 blockchain specialists"
      },
      image: "🚚",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Transformation",
      company: "TechStart Solutions",
      industry: "Technology",
      category: "cloud",
      challenge: "Legacy infrastructure causing performance bottlenecks",
      solution: "Migrated to advanced cloud infrastructure with AI optimization",
      results: [
        "99.9% uptime achieved",
        "60% faster performance",
        "70% cost reduction",
        "Unlimited scalability"
      ],
      metrics: {
        roi: "1,100%",
        timeframe: "3 months",
        team: "8 cloud specialists"
      },
      image: "☁️",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Revolutionary Case Studies 2025 | Zion Tech Group - Success Stories & Results</title>
        <meta name="description" content="Explore our revolutionary case studies showcasing successful AI, quantum computing, neural interface, and blockchain implementations. See real results from Fortune 500 companies and industry leaders." />
        <meta name="keywords" content="case studies, success stories, AI implementation, quantum computing results, neural interface success, blockchain case studies, business transformation, ROI results" />
        <meta property="og:title" content="Revolutionary Case Studies 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover how our revolutionary technologies have transformed businesses across industries, delivering unprecedented results and measurable impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pages/RevolutionaryCaseStudies2025" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revolutionary Case Studies 2025 | Zion Tech Group" />
        <meta name="twitter:description" content="Explore our revolutionary case studies showcasing successful AI, quantum computing, neural interface, and blockchain implementations." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Revolutionary Case Studies 2025",
            "description": "Explore our revolutionary case studies showcasing successful AI, quantum computing, neural interface, and blockchain implementations.",
            "url": "https://ziontechgroup.com/pages/RevolutionaryCaseStudies2025",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading provider of revolutionary technology solutions with proven results"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • 2025
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how our revolutionary technologies have transformed businesses across industries, delivering unprecedented results and measurable impact.
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-f1f3
      challenge: "Inefficient production processes and high operational costs",
      solution: "Implemented autonomous AI agents and quantum processing systems",
      results: {
        efficiency: "+400%",
        costSavings: "$12M",
        accuracy: "99.9%",
        timeReduction: "80%"
      },
      description: "Transformed a traditional manufacturing operation into a fully automated, AI-driven facility that increased efficiency by 400% while reducing costs by $12M annually.",
      technologies: ["Autonomous AI Agents", "Quantum Processing", "Predictive Analytics", "Computer Vision"],
      image: "🏭",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Healthcare AI Breakthrough",
      company: "Metropolitan Health System",
      industry: "Healthcare",
      challenge: "Slow diagnostic processes and high error rates",
      solution: "Deployed neural interface AI and quantum diagnostic systems",
      results: {
        efficiency: "+300%",
        costSavings: "$8M",
        accuracy: "99.7%",
        timeReduction: "75%"
      },
      description: "Revolutionized patient care with AI-powered diagnostic systems that reduced diagnosis time by 75% while achieving 99.7% accuracy in medical predictions.",
      technologies: ["Neural Interface AI", "Quantum Diagnostics", "Predictive Analytics", "Computer Vision"],
      image: "🏥",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Financial Services Transformation",
      company: "Global Investment Bank",
      industry: "Finance",
      challenge: "Fraud detection inefficiencies and manual processes",
      solution: "Integrated conversational AI and advanced analytics systems",
      results: {
        efficiency: "+500%",
        costSavings: "$25M",
        accuracy: "99.9%",
        timeReduction: "90%"
      },
      description: "Eliminated financial fraud with AI systems that achieved 99.9% accuracy in fraud detection, preventing $25M in potential losses while reducing processing time by 90%.",
      technologies: ["Conversational AI", "Predictive Analytics", "Computer Vision", "Quantum Processing"],
      image: "🏦",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Retail AI Revolution",
      company: "E-Commerce Giant",
      industry: "Retail",
      challenge: "Poor customer experience and inventory management",
      solution: "Deployed autonomous AI agents and computer vision systems",
      results: {
        efficiency: "+350%",
        costSavings: "$15M",
        accuracy: "99.8%",
        timeReduction: "85%"
      },
      description: "Transformed customer experience with AI-powered personalization and automated inventory management, increasing customer satisfaction by 350% while reducing costs by $15M.",
      technologies: ["Autonomous AI Agents", "Computer Vision", "Predictive Analytics", "Conversational AI"],
      image: "🛍️",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Transportation AI Innovation",
      company: "Global Logistics Corp",
      industry: "Transportation",
      challenge: "Route optimization and fleet management inefficiencies",
      solution: "Implemented quantum AI processing and predictive analytics",
      results: {
        efficiency: "+450%",
        costSavings: "$20M",
        accuracy: "99.6%",
        timeReduction: "70%"
      },
      description: "Optimized global logistics with AI systems that reduced fuel costs by 40% and improved delivery times by 70% through intelligent route optimization.",
      technologies: ["Quantum AI Processing", "Predictive Analytics", "Computer Vision", "Autonomous AI Agents"],
      image: "🚛",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 6,
      title: "Energy Sector Revolution",
      company: "Renewable Energy Corp",
      industry: "Energy",
      challenge: "Inefficient energy distribution and grid management",
      solution: "Deployed neural interface AI and quantum optimization systems",
      results: {
        efficiency: "+380%",
        costSavings: "$18M",
        accuracy: "99.8%",
        timeReduction: "65%"
      },
      description: "Revolutionized energy distribution with AI systems that optimized grid performance, reduced energy waste by 60%, and saved $18M in operational costs.",
      technologies: ["Neural Interface AI", "Quantum Optimization", "Predictive Analytics", "Computer Vision"],
      image: "⚡",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our cutting-edge AI solutions are transforming industries and delivering unprecedented results for businesses worldwide.
=======
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how leading companies are transforming their businesses with our cutting-edge AI and technology solutions
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
=======
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
=======
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
<<<<<<< HEAD
              <span className="mr-2">{category.icon}</span>
=======
<<<<<<< HEAD
              <span className="mr-2">{category.icon}</span>
=======
              <span className="text-xl mr-2">{category.icon}</span>
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
              {category.name}
            </button>
          ))}
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study) => (
<<<<<<< HEAD
=======
=======

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map((caseStudy, index) => (
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            <div
              key={study.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm opacity-75">{study.company}</span>
                      <span className="text-sm opacity-50">•</span>
                      <span className="text-sm opacity-75">{study.industry}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 bg-gradient-to-r ${study.color} text-white text-xs font-bold rounded-full`}>
                  {study.industry}
=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <div className="flex items-center space-x-2 text-sm opacity-80">
                      <span>{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 bg-gradient-to-r ${study.color} text-white text-xs font-semibold rounded-full`}>
                  SUCCESS
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Description:</h4>
                  <p className="text-gray-300 text-sm">{study.description}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                  <div className="text-xs opacity-80">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                  <div className="text-xs opacity-80">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{study.results.accuracy}</div>
                  <div className="text-xs opacity-80">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">{study.results.timeReduction}</div>
                  <div className="text-xs opacity-80">Time Reduction</div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                View Detailed Case Study →
              </button>
            </div>
          ))}
        </div>
<<<<<<< HEAD

=======
      </div>

<<<<<<< HEAD
      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact in Numbers</h2>
=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Overall Success Metrics</h2>
            <p className="text-xl opacity-90">Combined results across all our revolutionary AI implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
<<<<<<< HEAD
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">+400%</div>
              <div className="text-lg opacity-80">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">$98M</div>
              <div className="text-lg opacity-80">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.8%</div>
              <div className="text-lg opacity-80">Average Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-lg opacity-80">Companies Transformed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge AI solutions. Start your transformation journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
=======
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$2.5B+</div>
              <div className="text-lg opacity-90">Client Savings</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
<<<<<<< HEAD
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Industries Served</div>
=======
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-lg opacity-80">Companies Transformed</div>
>>>>>>> d40a2de63968dbef1437758fb9a66735771c35e1
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their businesses with our revolutionary technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
<<<<<<< HEAD
=======
=======
        {/* Detailed Case Study View */}
        {currentCase && (
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{currentCase.image}</div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{currentCase.title}</h2>
                    <p className="text-xl text-white/80">{currentCase.company}</p>
                    <p className="text-white/60">{currentCase.industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Challenge</h3>
                    <p className="text-white/90">{currentCase.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Solution</h3>
                    <p className="text-white/90">{currentCase.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white/10 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(currentCase.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-4xl font-bold text-yellow-300 mb-2">{value}</div>
                        <div className="text-sm text-white/70 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <blockquote className="text-lg italic text-white/90 mb-4">
                      "{currentCase.testimonial}"
                    </blockquote>
                    <div className="text-white/70">- {currentCase.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join these industry leaders and transform your business with our revolutionary AI solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
>>>>>>> cursor/create-and-deploy-new-content-f1f3
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;