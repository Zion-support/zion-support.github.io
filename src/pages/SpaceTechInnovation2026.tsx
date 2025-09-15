import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeSpaceTech, setActiveSpaceTech] = useState('propulsion');
  const [missionProgress, setMissionProgress] = useState(0);

  const spaceTechnologies = {
    propulsion: {
      title: "Advanced Propulsion",
      icon: "🚀",
      description: "Revolutionary propulsion systems for interstellar travel",
      features: [
        "Fusion engines",
        "Antimatter drives",
        "Warp field generators",
        "Solar sail technology"
      ],
      applications: ["Mars colonization", "Asteroid mining", "Interstellar missions", "Space tourism"]
    },
    habitats: {
      title: "Space Habitats",
      icon: "🏠",
      description: "Self-sustaining space colonies and stations",
      features: [
        "Closed-loop life support",
        "Artificial gravity",
        "Radiation shielding",
        "Modular construction"
      ],
      applications: ["Lunar bases", "Mars cities", "Orbital stations", "Deep space outposts"]
    },
    mining: {
      title: "Asteroid Mining",
      icon: "⛏️",
      description: "Extracting resources from asteroids and celestial bodies",
      features: [
        "Autonomous mining robots",
        "In-situ resource utilization",
        "Refining in space",
        "Resource transportation"
      ],
      applications: ["Rare earth metals", "Water extraction", "Fuel production", "Construction materials"]
    },
    communication: {
      title: "Space Communication",
      icon: "📡",
      description: "Advanced communication networks across the solar system",
      features: [
        "Quantum communication",
        "Laser data links",
        "Relay satellites",
        "Deep space networks"
      ],
      applications: ["Mars communication", "Mission control", "Data transmission", "Emergency systems"]
    }
  };

  const spaceMissions = [
    {
      mission: "Mars Colony Alpha",
      icon: "🔴",
      description: "Establishing the first permanent human settlement on Mars",
      timeline: "2026-2030",
      status: "In Progress",
      achievements: [
        "Landing site selected",
        "First cargo missions launched",
        "Habitat modules deployed",
        "Life support systems active"
      ],
      impact: "First human colony on another planet"
    },
    {
      mission: "Lunar Gateway",
      icon: "🌙",
      description: "International space station orbiting the Moon",
      timeline: "2025-2027",
      status: "Completed",
      achievements: [
        "Gateway modules assembled",
        "Crew quarters operational",
        "Research facilities active",
        "Lunar lander docked"
      ],
      impact: "Stepping stone to Mars and beyond"
    },
    {
      mission: "Asteroid Mining Initiative",
      icon: "☄️",
      description: "Commercial asteroid mining operations",
      timeline: "2026-2028",
      status: "Planning",
      achievements: [
        "Target asteroids identified",
        "Mining technology tested",
        "Legal framework established",
        "Investment secured"
      ],
      impact: "Unlimited resources from space"
    },
    {
      mission: "Interstellar Probe",
      icon: "⭐",
      description: "First mission to another star system",
      timeline: "2027-2035",
      status: "Development",
      achievements: [
        "Propulsion system designed",
        "Navigation systems tested",
        "Communication array built",
        "Launch vehicle prepared"
      ],
      impact: "Humanity's first interstellar mission"
    }
  ];

  const spaceBenefits = [
    {
      benefit: "Resource Abundance",
      icon: "💎",
      description: "Access to unlimited resources from space",
      details: [
        "Rare earth metals",
        "Water from asteroids",
        "Helium-3 for fusion",
        "Construction materials"
      ],
      impact: "End resource scarcity on Earth"
    },
    {
      benefit: "Scientific Discovery",
      icon: "🔬",
      description: "Unprecedented scientific research opportunities",
      details: [
        "Zero-gravity experiments",
        "Astronomical observations",
        "Planetary science",
        "Life in extreme environments"
      ],
      impact: "Revolutionary scientific breakthroughs"
    },
    {
      benefit: "Backup Civilization",
      icon: "🛡️",
      description: "Ensuring human survival beyond Earth",
      details: [
        "Multi-planetary species",
        "Disaster protection",
        "Population expansion",
        "Cultural preservation"
      ],
      impact: "Guarantee human species survival"
    },
    {
      benefit: "Economic Growth",
      icon: "💰",
      description: "Trillion-dollar space economy",
      details: [
        "Space tourism",
        "Asteroid mining",
        "Satellite services",
        "Space manufacturing"
      ],
      impact: "Unprecedented economic expansion"
    }
  ];

  // Animate mission progress
  useEffect(() => {
    const interval = setInterval(() => {
      setMissionProgress(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Space Tech Innovation 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore revolutionary space technology including Mars colonization, asteroid mining, advanced propulsion systems, and space habitats. The future of humanity in space starts here." />
        <meta name="keywords" content="Space Technology, Mars Colonization, Asteroid Mining, Space Habitats, Interstellar Travel, Space Innovation, 2026" />
        <meta property="og:title" content="Space Tech Innovation 2026 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary space technology that's taking humanity to the stars" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space Tech Innovation 2026" />
        <meta name="twitter:description" content="The future of space exploration is here" />
        <link rel="canonical" href="https://ziontechgroup.com/pages/SpaceTechInnovation2026" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="publish_date" content="2026-01-25" />
        <meta name="last_modified" content="2026-01-25" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
                🚀 SPACE REVOLUTION • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Space Tech Innovation 2026
              </h1>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Experience the space revolution with advanced propulsion, Mars colonization, asteroid mining, and the future of human civilization in space
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Space Tech →
                </button>
                <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors font-semibold">
                  View Missions
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Space Technologies */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-blue-300">🚀 Space Technologies</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Revolutionary space technologies that are making humanity a multi-planetary species
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {Object.entries(spaceTechnologies).map(([key, tech], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeSpaceTech === key ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => setActiveSpaceTech(key)}
                >
                  <div className="text-5xl mb-6 text-center animate-pulse">{tech.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">{tech.title}</h3>
                  <p className="text-blue-100 mb-6 text-center">{tech.description}</p>
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-2">Applications:</div>
                    <div className="text-xs text-blue-300">{tech.applications.join(', ')}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Technology Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpaceTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 animate-spin">{spaceTechnologies[activeSpaceTech as keyof typeof spaceTechnologies].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-300 mb-2">
                      {spaceTechnologies[activeSpaceTech as keyof typeof spaceTechnologies].title}
                    </h3>
                    <p className="text-blue-100">
                      {spaceTechnologies[activeSpaceTech as keyof typeof spaceTechnologies].description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {spaceTechnologies[activeSpaceTech as keyof typeof spaceTechnologies].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-blue-100">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-4">Applications:</h4>
                    <ul className="space-y-2">
                      {spaceTechnologies[activeSpaceTech as keyof typeof spaceTechnologies].applications.map((app, index) => (
                        <li key={index} className="flex items-center text-blue-100">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Space Missions */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-indigo-300">🌌 Active Space Missions</h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Revolutionary space missions that are transforming humanity's future
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {spaceMissions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30"
                >
                  <div className="text-5xl mb-6 text-center">{mission.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-indigo-300">{mission.mission}</h3>
                  <p className="text-indigo-100 mb-6 text-center">{mission.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-indigo-200 mb-2">Timeline: {mission.timeline}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      mission.status === 'Completed' ? 'bg-green-600 text-white' :
                      mission.status === 'In Progress' ? 'bg-yellow-600 text-white' :
                      mission.status === 'Planning' ? 'bg-blue-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {mission.status}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {mission.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-indigo-100 text-sm">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-sm text-indigo-200 mb-2">Impact:</div>
                    <div className="text-sm font-bold text-indigo-300">{mission.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Progress Visualization */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-cyan-300">📊 Mission Progress</h2>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
                Real-time progress of our space missions and technological development
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 font-bold text-cyan-300">
                  {missionProgress}%
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Overall Mission Progress</h3>
                <p className="text-cyan-100 mb-6">Combined progress across all active space missions</p>
                <div className="max-w-md mx-auto">
                  <div className="w-full bg-cyan-600/30 rounded-full h-4 mb-4">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${missionProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Launch Systems</h4>
                  <p className="text-cyan-100 text-sm">Advanced propulsion ready</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Habitats</h4>
                  <p className="text-cyan-100 text-sm">Life support systems active</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⛏️</div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Mining Tech</h4>
                  <p className="text-cyan-100 text-sm">Resource extraction ready</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📡</div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Communication</h4>
                  <p className="text-cyan-100 text-sm">Deep space networks active</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Benefits */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-blue-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-300">🌟 Benefits of Space Technology</h2>
              <p className="text-xl text-slate-100 max-w-3xl mx-auto">
                How space technology is transforming life on Earth and beyond
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {spaceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30"
                >
                  <div className="text-5xl mb-6 text-center">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-slate-300">{benefit.benefit}</h3>
                  <p className="text-slate-100 mb-6 text-center">{benefit.description}</p>
                  <ul className="space-y-2 mb-6">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-slate-100 text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-sm text-slate-200 mb-2">Impact:</div>
                    <div className="text-sm font-bold text-slate-300">{benefit.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join us in the space revolution and be part of humanity's greatest adventure
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Space Journey →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  Join Mission
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceTechInnovation2026;