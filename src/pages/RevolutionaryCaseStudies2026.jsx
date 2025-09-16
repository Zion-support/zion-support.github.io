import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle,
  ExternalLink,
  Calendar,
  Building,
  Target,
  Zap,
  Shield,
  Globe,
  Cpu
} from 'lucide-react';

const RevolutionaryCaseStudies2026 = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Manufacturing Revolution",
      client: "TechManufacturing Corp",
      industry: "Manufacturing",
      duration: "6 months",
      results: {
        efficiency: "+45%",
        costReduction: "-32%",
        qualityImprovement: "+28%",
        roi: "340%"
      },
      challenge: "Traditional manufacturing processes were inefficient and error-prone, leading to high costs and quality issues.",
      solution: "Implemented AI-powered predictive maintenance, quality control systems, and automated optimization algorithms.",
      technologies: ["Machine Learning", "Computer Vision", "IoT Sensors", "Predictive Analytics"],
      icon: Cpu,
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/case-studies/manufacturing-ai-2026.jpg",
      testimonial: {
        text: "The AI implementation transformed our entire production line. We've seen unprecedented improvements in efficiency and quality.",
        author: "Sarah Johnson",
        role: "CTO, TechManufacturing Corp"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Financial Modeling",
      client: "QuantumFinance Group",
      industry: "Financial Services",
      duration: "8 months",
      results: {
        processingSpeed: "+1000x",
        accuracy: "+95%",
        riskReduction: "-60%",
        roi: "520%"
      },
      challenge: "Complex financial modeling required massive computational power and took days to complete.",
      solution: "Deployed quantum computing algorithms for portfolio optimization, risk assessment, and real-time trading decisions.",
      technologies: ["Quantum Computing", "Quantum Algorithms", "Financial Modeling", "Risk Analytics"],
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      image: "/images/case-studies/quantum-finance-2026.jpg",
      testimonial: {
        text: "Quantum computing gave us a competitive edge that was impossible to achieve with classical computing.",
        author: "Michael Chen",
        role: "Head of Quantitative Research"
      }
    },
    {
      id: 3,
      title: "Neural Interface Medical Breakthrough",
      client: "NeuroTech Medical",
      industry: "Healthcare",
      duration: "12 months",
      results: {
        patientRecovery: "+70%",
        treatmentAccuracy: "+85%",
        procedureTime: "-40%",
        roi: "280%"
      },
      challenge: "Traditional rehabilitation methods for stroke patients were slow and often ineffective.",
      solution: "Developed brain-computer interface systems for direct neural control of rehabilitation devices.",
      technologies: ["Neural Interfaces", "BCI Technology", "Machine Learning", "Medical Devices"],
      icon: Users,
      gradient: "from-emerald-500 to-teal-500",
      image: "/images/case-studies/neural-medical-2026.jpg",
      testimonial: {
        text: "This technology has revolutionized how we approach neurological rehabilitation. The results speak for themselves.",
        author: "Dr. Elena Rodriguez",
        role: "Chief Medical Officer"
      }
    },
    {
      id: 4,
      title: "Cybersecurity AI Defense System",
      client: "SecureGlobal Inc",
      industry: "Cybersecurity",
      duration: "4 months",
      results: {
        threatDetection: "+99.8%",
        responseTime: "-90%",
        falsePositives: "-75%",
        roi: "450%"
      },
      challenge: "Sophisticated cyber attacks were bypassing traditional security measures and causing significant damage.",
      solution: "Implemented AI-powered threat detection, automated response systems, and behavioral analytics.",
      technologies: ["AI Security", "Behavioral Analytics", "Threat Intelligence", "Automated Response"],
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      image: "/images/case-studies/cybersecurity-ai-2026.jpg",
      testimonial: {
        text: "Our security posture has been completely transformed. We can now detect and respond to threats in real-time.",
        author: "David Kim",
        role: "Chief Security Officer"
      }
    },
    {
      id: 5,
      title: "Edge AI Smart City Implementation",
      client: "SmartCity Solutions",
      industry: "Smart Cities",
      duration: "10 months",
      results: {
        trafficFlow: "+35%",
        energyEfficiency: "+25%",
        citizenSatisfaction: "+40%",
        roi: "380%"
      },
      challenge: "Urban infrastructure was inefficient and citizens were experiencing poor quality of life.",
      solution: "Deployed edge AI systems for traffic management, energy optimization, and citizen services.",
      technologies: ["Edge Computing", "IoT Networks", "Real-time Analytics", "Smart Infrastructure"],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      image: "/images/case-studies/smart-city-2026.jpg",
      testimonial: {
        text: "The transformation has been remarkable. Our city is now a model for smart urban development.",
        author: "Lisa Wang",
        role: "City Technology Director"
      }
    },
    {
      id: 6,
      title: "Synthetic Intelligence Research Platform",
      client: "FutureTech Research",
      industry: "Research & Development",
      duration: "15 months",
      results: {
        researchSpeed: "+300%",
        discoveryRate: "+150%",
        collaboration: "+200%",
        roi: "600%"
      },
      challenge: "Research processes were slow and limited by human cognitive constraints and traditional computing.",
      solution: "Developed synthetic intelligence systems that can think beyond human limitations and accelerate discovery.",
      technologies: ["Synthetic Intelligence", "Advanced AI", "Research Automation", "Knowledge Discovery"],
      icon: Award,
      gradient: "from-indigo-500 to-purple-500",
      image: "/images/case-studies/synthetic-intelligence-2026.jpg",
      testimonial: {
        text: "We've achieved breakthroughs that would have taken decades using traditional methods. This is the future of research.",
        author: "Dr. Marcus Thompson",
        role: "Research Director"
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentCaseStudy = caseStudies[activeCaseStudy];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/circuit.svg')] bg-center opacity-10"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Award className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Case Studies</span>
            <br />
            2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our cutting-edge solutions have transformed businesses across industries,
            delivering unprecedented results and ROI.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 cursor-pointer transition-all duration-300 ${
                activeCaseStudy === index ? 'ring-2 ring-purple-400 bg-white/15' : 'hover:bg-white/15'
              }`}
              onClick={() => setActiveCaseStudy(index)}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center mb-6`}>
                <caseStudy.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-purple-300">{caseStudy.industry}</span>
                <h3 className="text-xl font-bold text-white mt-1">{caseStudy.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{caseStudy.client}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{caseStudy.results.efficiency || caseStudy.results.processingSpeed || caseStudy.results.patientRecovery || caseStudy.results.threatDetection || caseStudy.results.trafficFlow || caseStudy.results.researchSpeed}</div>
                  <div className="text-xs text-gray-400">Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{caseStudy.results.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Featured</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCaseStudy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Case Study Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${currentCaseStudy.gradient} flex items-center justify-center`}>
                    <currentCaseStudy.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-300">{currentCaseStudy.industry}</span>
                    <h3 className="text-3xl font-bold text-white">{currentCaseStudy.title}</h3>
                    <p className="text-lg text-purple-200">{currentCaseStudy.client}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{currentCaseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{currentCaseStudy.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCaseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Client Testimonial</h4>
                  <p className="text-gray-300 italic mb-2">"{currentCaseStudy.testimonial.text}"</p>
                  <div className="text-sm text-purple-300">
                    <div className="font-semibold">{currentCaseStudy.testimonial.author}</div>
                    <div>{currentCaseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Results and Metrics */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white">Results & Impact</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentCaseStudy.results).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white/10 rounded-xl p-4 text-center"
                    >
                      <div className="text-3xl font-bold text-green-400 mb-2">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h5 className="text-lg font-semibold text-white mb-2">Project Duration</h5>
                  <p className="text-gray-300">{currentCaseStudy.duration}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Completed", value: "500+", icon: Award },
            { label: "Client Satisfaction", value: "99.2%", icon: Star },
            { label: "Average ROI", value: "380%", icon: TrendingUp },
            { label: "Industries Served", value: "25+", icon: Building }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;