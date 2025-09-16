import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented autonomous AI agents for predictive maintenance and process optimization",
      results: {
        efficiency: "+300%",
        costSavings: "$50M",
        downtime: "-85%",
        roi: "1200%"
      },
      timeline: "6 months",
      team: "15 AI specialists",
      technologies: ["Machine Learning", "Predictive Analytics", "IoT Integration", "Process Automation"],
      icon: "🏭",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Pharmaceutical Research Institute",
      industry: "Healthcare",
      challenge: "Drug discovery taking 10+ years with 90% failure rate",
      solution: "Deployed quantum computing for molecular simulation and drug interaction modeling",
      results: {
        efficiency: "+500%",
        costSavings: "$200M",
        timeReduction: "-70%",
        successRate: "+45%"
      },
      timeline: "12 months",
      team: "25 quantum specialists",
      technologies: ["Quantum Computing", "Molecular Simulation", "AI Drug Discovery", "High-Performance Computing"],
      icon: "🧬",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Neural Interface Implementation",
      company: "Medical Rehabilitation Center",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate or control devices",
      solution: "Deployed non-invasive neural interfaces for thought-to-text communication and device control",
      results: {
        communication: "100%",
        independence: "+80%",
        qualityOfLife: "+95%",
        recovery: "+60%"
      },
      timeline: "8 months",
      team: "20 neuroscientists",
      technologies: ["Neural Interfaces", "Brain-Computer Interfaces", "Machine Learning", "Rehabilitation Tech"],
      icon: "🧠",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Autonomous Supply Chain",
      company: "Global Logistics Network",
      industry: "Logistics",
      challenge: "Supply chain disruptions causing $100M+ annual losses",
      solution: "Implemented fully autonomous supply chain with AI-driven optimization and predictive analytics",
      results: {
        efficiency: "+250%",
        costSavings: "$150M",
        disruptions: "-90%",
        deliveryTime: "-40%"
      },
      timeline: "10 months",
      team: "30 automation specialists",
      technologies: ["Autonomous Systems", "Predictive Analytics", "IoT", "Blockchain"],
      icon: "🚚",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Synthetic Biology Manufacturing",
      company: "Sustainable Materials Corp",
      industry: "Manufacturing",
      challenge: "Traditional manufacturing causing environmental damage and high costs",
      solution: "Deployed synthetic biology for bio-manufacturing of sustainable materials",
      results: {
        sustainability: "+400%",
        costSavings: "$75M",
        wasteReduction: "-95%",
        innovation: "+300%"
      },
      timeline: "14 months",
      team: "35 bioengineers",
      technologies: ["Synthetic Biology", "Bio-manufacturing", "AI Design", "Sustainable Materials"],
      icon: "🌱",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 6,
      title: "Extended Reality Workspace",
      company: "Global Tech Corporation",
      industry: "Technology",
      challenge: "Remote work inefficiency and collaboration barriers",
      solution: "Created immersive XR workspace with virtual collaboration and haptic feedback",
      results: {
        productivity: "+180%",
        collaboration: "+220%",
        satisfaction: "+95%",
        costSavings: "$120M"
      },
      timeline: "9 months",
      team: "40 XR developers",
      technologies: ["Extended Reality", "Haptic Technology", "Virtual Collaboration", "AI Avatars"],
      icon: "🥽",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: "✅" },
    { label: "Client Satisfaction", value: "99.2%", icon: "😊" },
    { label: "Average ROI", value: "450%", icon: "📈" },
    { label: "Time to Market", value: "6 months", icon: "⏱️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🏆 REVOLUTIONARY CASE STUDIES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Discover how we've transformed businesses across industries with cutting-edge technology solutions
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View All Cases →
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world implementations that delivered measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${caseStudy.color} p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedCase(index)}
              >
                <div className="text-6xl mb-4 text-center">{caseStudy.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{caseStudy.title}</h3>
                <div className="text-center mb-4">
                  <span className="text-lg font-semibold">{caseStudy.company}</span>
                  <div className="text-sm opacity-75">{caseStudy.industry}</div>
                </div>
                <p className="text-sm opacity-90 mb-6 text-center">{caseStudy.challenge}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.results.efficiency}</div>
                    <div className="text-xs opacity-75">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.results.costSavings}</div>
                    <div className="text-xs opacity-75">Cost Savings</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Case Study View */}
      {selectedCase !== null && (
        <div className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{caseStudies[selectedCase].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{caseStudies[selectedCase].title}</h3>
                    <p className="text-lg text-gray-300">{caseStudies[selectedCase].company} • {caseStudies[selectedCase].industry}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Challenge</h4>
                    <p className="text-gray-300 mb-6">{caseStudies[selectedCase].challenge}</p>
                    <h4 className="text-xl font-semibold mb-4">Solution</h4>
                    <p className="text-gray-300">{caseStudies[selectedCase].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Project Details</h4>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-semibold">{caseStudies[selectedCase].timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Size:</span>
                        <span className="font-semibold">{caseStudies[selectedCase].team}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Industry:</span>
                        <span className="font-semibold">{caseStudies[selectedCase].industry}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-400">{caseStudies[selectedCase].results.efficiency}</div>
                    <div className="text-sm text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">{caseStudies[selectedCase].results.costSavings}</div>
                    <div className="text-sm text-gray-300">Cost Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">{caseStudies[selectedCase].results.downtime || caseStudies[selectedCase].results.timeReduction || caseStudies[selectedCase].results.independence || caseStudies[selectedCase].results.disruptions || caseStudies[selectedCase].results.wasteReduction || caseStudies[selectedCase].results.collaboration}</div>
                    <div className="text-sm text-gray-300">Improvement</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-400">{caseStudies[selectedCase].results.roi || caseStudies[selectedCase].results.successRate || caseStudies[selectedCase].results.qualityOfLife || caseStudies[selectedCase].results.deliveryTime || caseStudies[selectedCase].results.innovation || caseStudies[selectedCase].results.satisfaction}</div>
                    <div className="text-sm text-gray-300">ROI/Success</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedCase].technologies.map((tech, index) => (
                      <span key={index} className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-8 rounded-xl border border-indigo-400/30"
            >
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                "The AI transformation exceeded our expectations. We achieved 300% efficiency gains and saved $50M annually. The team's expertise is unmatched."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-400">CTO, Global Manufacturing Corp</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 rounded-xl border border-cyan-400/30"
            >
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                "Quantum computing revolutionized our drug discovery process. We reduced development time by 70% and increased success rates by 45%."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Dr. Michael Chen</div>
                <div className="text-gray-400">Research Director, Pharmaceutical Institute</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-8 rounded-xl border border-emerald-400/30"
            >
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                "The neural interface technology gave our patients their independence back. The impact on their quality of life has been incredible."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Dr. Lisa Rodriguez</div>
                <div className="text-gray-400">Medical Director, Rehabilitation Center</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;