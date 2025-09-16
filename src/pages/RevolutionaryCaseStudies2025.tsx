<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cad4ed638271abf0c299f946164227bf540b415a
import React, { useState } from 'react';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(0);

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'retail', name: 'Retail', icon: '🛒' },
    { id: 'technology', name: 'Technology', icon: '💻' }
  ];

  const caseStudies = [
    {
      id: 1,
<<<<<<< HEAD
      title: "Fortune 500 Manufacturing Revolution",
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
      image: "🏭",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Breakthrough",
      category: "healthcare",
      company: "HealthTech Solutions",
      industry: "Medical Diagnostics",
      challenge: "Improve early disease detection accuracy and reduce diagnostic time",
      solution: "Deployed advanced AI diagnostic systems with 99.9% accuracy for early-stage disease detection",
      results: {
        accuracy: "99.9%",
        timeReduction: "85%",
        livesSaved: "10,000+",
        timeline: "12 months"
      },
      description: "Revolutionary AI diagnostic system that can detect diseases in their earliest stages, saving countless lives through early intervention.",
      technologies: ["Deep Learning", "Medical Imaging AI", "Pattern Recognition", "Real-time Analysis"],
      testimonial: "This technology has revolutionized how we approach diagnostics. The accuracy is simply remarkable.",
      author: "Dr. Michael Chen, Chief Medical Officer",
      image: "🏥",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Financial Services AI Transformation",
      category: "finance",
      company: "FinTech Innovations",
      industry: "Investment Banking",
      challenge: "Enhance fraud detection and improve customer experience",
      solution: "Integrated AI-powered fraud detection and personalized financial advisory services",
      results: {
        fraudDetection: "99.8%",
        customerSatisfaction: "+300%",
        costSavings: "$50M",
        timeline: "8 months"
      },
      description: "Transformed financial services with AI-powered fraud detection and personalized advisory services, dramatically improving security and customer satisfaction.",
      technologies: ["Machine Learning", "Fraud Detection AI", "Natural Language Processing", "Predictive Analytics"],
      testimonial: "Our fraud detection capabilities have never been stronger, and our customers love the personalized experience.",
      author: "Jennifer Martinez, CTO",
      image: "💰",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "E-commerce Personalization Revolution",
      category: "retail",
      company: "TechCommerce Inc",
      industry: "Online Retail",
      challenge: "Increase conversion rates and customer engagement",
      solution: "Implemented AI-powered personalization engine with real-time recommendation system",
      results: {
        conversionRate: "+300%",
        revenueIncrease: "$50M",
        customerEngagement: "+250%",
        timeline: "4 months"
      },
      description: "Revolutionary e-commerce platform that uses AI to provide hyper-personalized shopping experiences, dramatically increasing conversions and revenue.",
      technologies: ["Recommendation Engine", "Behavioral Analytics", "Real-time Personalization", "A/B Testing AI"],
      testimonial: "The personalization engine has completely transformed our business. Our customers feel like we know them personally.",
      author: "David Kim, VP of Technology",
      image: "🛒",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Quantum Computing Research Breakthrough",
      category: "technology",
      company: "QuantumTech Labs",
      industry: "Research & Development",
      challenge: "Solve complex optimization problems that were previously impossible",
      solution: "Developed quantum-enhanced algorithms for molecular simulation and optimization",
      results: {
        speedImprovement: "10,000x",
        problemComplexity: "Exponential",
        researchAcceleration: "+500%",
        timeline: "18 months"
      },
      description: "Pioneering quantum computing research that has solved previously impossible optimization problems, accelerating scientific discovery.",
      technologies: ["Quantum Machine Learning", "Quantum Algorithms", "Molecular Simulation", "Optimization"],
      testimonial: "We've achieved breakthroughs that would have taken decades with classical computing. This is truly revolutionary.",
      author: "Dr. Elena Rodriguez, Chief Scientist",
      image: "💻",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Smart City Infrastructure AI",
      category: "technology",
      company: "UrbanTech Solutions",
      industry: "Smart Cities",
      challenge: "Optimize city infrastructure and improve citizen services",
      solution: "Deployed AI-powered smart city management system with real-time optimization",
      results: {
        energyEfficiency: "+60%",
        trafficReduction: "45%",
        citizenSatisfaction: "+200%",
        timeline: "24 months"
      },
      description: "Transformed urban infrastructure with AI-powered smart city solutions, improving efficiency and citizen quality of life.",
      technologies: ["IoT Integration", "Traffic Optimization", "Energy Management", "Citizen Services AI"],
      testimonial: "Our city has become a model for smart urban development. The AI system has revolutionized how we serve our citizens.",
      author: "Mayor Robert Thompson",
      image: "🏙️",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case => case.category === selectedCategory);

  const currentCase = filteredCases[selectedCase];
=======
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented conscious AI systems with autonomous decision-making capabilities",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        uptime: "99.9%",
        timeline: "6 months"
      },
      icon: "🏭",
      gradient: "from-blue-600 to-cyan-600",
      testimonial: "The conscious AI systems transformed our operations beyond our wildest expectations. We achieved 500% efficiency gains and saved $50M annually.",
      author: "Sarah Johnson, CTO"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Financial Services Inc",
      industry: "Finance",
      challenge: "Complex risk calculations taking 24 hours, limiting trading opportunities",
      solution: "Deployed quantum neural networks for real-time risk analysis and trading optimization",
      results: {
        efficiency: "+1000%",
        costSavings: "$25M",
        uptime: "99.95%",
        timeline: "4 months"
      },
      icon: "💰",
      gradient: "from-purple-600 to-pink-600",
      testimonial: "Quantum computing revolutionized our trading algorithms. We now process complex calculations in seconds instead of hours.",
      author: "Michael Chen, Head of Trading"
    },
    {
      id: 3,
      title: "Interdimensional Data Processing",
      company: "Tech Innovation Labs",
      industry: "Technology",
      challenge: "Big data processing bottlenecks limiting research capabilities",
      solution: "Implemented interdimensional computing for unlimited data processing capacity",
      results: {
        efficiency: "+2000%",
        costSavings: "$75M",
        uptime: "100%",
        timeline: "8 months"
      },
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      testimonial: "Interdimensional computing opened up possibilities we never thought possible. Our research capabilities are now limitless.",
      author: "Dr. Elena Rodriguez, Chief Scientist"
    },
    {
      id: 4,
      title: "Neural Interface Implementation",
      company: "Healthcare Systems Ltd",
      industry: "Healthcare",
      challenge: "Surgical precision limitations and human error in complex procedures",
      solution: "Deployed neural interface systems for direct brain-computer surgical control",
      results: {
        efficiency: "+300%",
        costSavings: "$30M",
        uptime: "99.8%",
        timeline: "12 months"
      },
      icon: "🏥",
      gradient: "from-emerald-600 to-teal-600",
      testimonial: "Neural interfaces have revolutionized our surgical procedures. Precision and success rates have never been higher.",
      author: "Dr. James Wilson, Chief Surgeon"
    },
    {
      id: 5,
      title: "Synthetic Intelligence Deployment",
      company: "Creative Solutions Agency",
      industry: "Creative Services",
      challenge: "Creative output limitations and client satisfaction issues",
      solution: "Implemented synthetic intelligence for creative problem-solving and client interaction",
      results: {
        efficiency: "+400%",
        costSavings: "$15M",
        uptime: "99.7%",
        timeline: "5 months"
      },
      icon: "🎨",
      gradient: "from-orange-600 to-red-600",
      testimonial: "Synthetic intelligence has transformed our creative process. Our clients are amazed by the innovative solutions we now deliver.",
      author: "Lisa Martinez, Creative Director"
    },
    {
      id: 6,
      title: "Autonomous AI Operations",
      company: "Logistics Global",
      industry: "Logistics",
      challenge: "Supply chain complexity and delivery inefficiencies",
      solution: "Deployed autonomous AI agents for end-to-end supply chain management",
      results: {
        efficiency: "+600%",
        costSavings: "$40M",
        uptime: "99.9%",
        timeline: "7 months"
      },
      icon: "🚚",
      gradient: "from-violet-600 to-purple-600",
      testimonial: "Autonomous AI agents have revolutionized our logistics operations. We've achieved unprecedented efficiency and cost savings.",
      author: "Robert Kim, Operations Director"
    }
  ];

  const stats = [
    { label: "Companies Transformed", value: "500+", icon: "🏢" },
    { label: "Total Cost Savings", value: "$2.5B+", icon: "💰" },
    { label: "Average Efficiency Gain", value: "400%", icon: "📈" },
    { label: "Success Rate", value: "99.8%", icon: "✅" }
  ];
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY SUCCESS STORIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover how leading companies are transforming their businesses with our cutting-edge AI and technology solutions
=======
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed businesses across industries. 
              Real results from real companies using cutting-edge AI and quantum computing solutions.
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
            </p>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              className={`bg-gradient-to-br ${caseStudy.gradient} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedCase === index ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{caseStudy.image}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {caseStudy.company} • {caseStudy.industry}
                </p>
                <p className="text-white/70 text-sm">
                  {caseStudy.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-xs text-white/70 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                View Full Case Study →
=======
      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">Real transformations from real companies</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{study.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <div className="text-indigo-400 font-semibold">{study.company}</div>
                  <div className="text-gray-400 text-sm">{study.industry}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-red-400">Challenge:</h4>
                <p className="text-gray-300 mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Solution:</h4>
                <p className="text-gray-300 mb-4">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{study.results.uptime}</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{study.results.timeline}</div>
                  <div className="text-sm text-gray-300">Timeline</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                <p className="text-gray-200 italic mb-2">"{study.testimonial}"</p>
                <div className="text-indigo-400 font-semibold">— {study.author}</div>
              </div>

              <button className={`w-full bg-gradient-to-r ${study.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
              </button>
            </motion.div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
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
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
<<<<<<< HEAD
=======
      {/* Industry Breakdown */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">📈 Industry Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-300 mb-4">500% efficiency gains through conscious AI systems</p>
              <div className="text-2xl font-bold text-indigo-400">$50M+ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-gray-300 mb-4">1000% faster processing with quantum computing</p>
              <div className="text-2xl font-bold text-indigo-400">$25M+ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-300 mb-4">300% precision improvement with neural interfaces</p>
              <div className="text-2xl font-bold text-indigo-400">$30M+ Saved</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies already experiencing revolutionary results. 
            Start your transformation journey with a free consultation and proof of concept.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
              Download Case Studies
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
=======
>>>>>>> cad4ed638271abf0c299f946164227bf540b415a
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;