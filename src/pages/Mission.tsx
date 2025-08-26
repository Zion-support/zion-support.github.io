import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users, 
  Globe, 
  Rocket, 
  Shield, 
  Award, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Building,
  Star,
  TrendingUp,
  Eye,
  Lightbulb
} from 'lucide-react';

const Mission = () => {
  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket,
      details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches",
        "Future-focused solutions"
      ]
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award,
      details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Attention to detail",
        "Customer satisfaction focus"
      ]
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users,
      details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Client partnership approach",
        "Knowledge sharing culture"
      ]
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield,
      details: [
        "Transparent communication",
        "Ethical AI development",
        "Data privacy protection",
        "Trust-based relationships"
      ]
    }
  ];

  const missionPillars = [
    {
      title: "AI-Powered Transformation",
      description: "Leveraging artificial intelligence to revolutionize business operations and decision-making",
      icon: Brain,
      goals: [
        "Democratize AI access for businesses of all sizes",
        "Develop autonomous systems that enhance human capabilities",
        "Create intelligent solutions that learn and adapt",
        "Bridge the gap between AI research and practical applications"
      ],
      metrics: ["500+ AI implementations", "40% average efficiency improvement", "99.9% system reliability"]
    },
    {
      title: "Quantum Computing Innovation",
      description: "Pioneering quantum computing solutions for complex computational challenges",
      icon: Cpu,
      goals: [
        "Advance quantum computing research and development",
        "Create quantum-safe security solutions",
        "Develop quantum algorithms for real-world problems",
        "Establish quantum computing as a mainstream technology"
      ],
      metrics: ["3 quantum research partnerships", "2 quantum patents filed", "10x computational speed improvement"]
    },
    {
      title: "Cybersecurity Excellence",
      description: "Protecting businesses from evolving threats with advanced security solutions",
      icon: Shield,
      goals: [
        "Provide comprehensive security protection",
        "Automate compliance and risk management",
        "Implement zero-trust security architecture",
        "Develop proactive threat detection systems"
      ],
      metrics: ["100% security compliance", "Zero major security breaches", "24/7 threat monitoring"]
    }
  ];

  const visionTimeline = [
    {
      year: "2025",
      title: "Foundation Phase",
      description: "Establish core AI and quantum computing capabilities",
      milestones: [
        "Launch AI development platform",
        "Establish quantum research partnerships",
        "Deploy first autonomous systems"
      ]
    },
    {
      year: "2027",
      title: "Expansion Phase",
      description: "Scale solutions across multiple industries and geographies",
      milestones: [
        "Global AI platform deployment",
        "Quantum computing commercial launch",
        "Autonomous business operations"
      ]
    },
    {
      year: "2030",
      title: "Transformation Phase",
      description: "Achieve full autonomous business ecosystem",
      milestones: [
        "Autonomous business platform launch",
        "Zero-touch business operations",
        "AI-human collaboration ecosystem"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission & Vision
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are driven by a powerful mission to democratize access to cutting-edge technology, 
            enabling businesses of all sizes to thrive in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Target className="h-16 w-16 text-blue-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, quantum computing, and autonomous systems for unprecedented 
                growth and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every organization deserves access to the tools and expertise needed to thrive 
                in the digital age, regardless of their current technological maturity or budget constraints.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">What This Means:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Making advanced technology accessible to all</li>
                  <li>• Breaking down barriers to digital transformation</li>
                  <li>• Empowering businesses to compete globally</li>
                  <li>• Creating sustainable technological solutions</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                    to leverage the power of AI, quantum computing, and autonomous systems for unprecedented 
                    growth and innovation."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="h-16 w-16 text-cyan-400 mr-4" />
              <h2 className="text-4xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To create a future where advanced technology is accessible to every business, 
              driving innovation and growth across all industries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 mb-6">{pillar.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Goals:</h4>
                  <ul className="space-y-2">
                    {pillar.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-gray-300 text-sm flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Metrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pillar.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 mb-4">{value.description}</p>
                <ul className="text-left space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 text-sm flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Vision Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A roadmap to achieving our mission and realizing our vision for the future
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            <div className="space-y-16">
              {visionTimeline.map((phase, index) => (
                <motion.div
                  key={phase.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + (index * 0.2) }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{phase.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="text-gray-400 text-sm flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Us in Shaping the Future</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of our mission to democratize technology and create a more innovative, 
              connected, and prosperous world for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;