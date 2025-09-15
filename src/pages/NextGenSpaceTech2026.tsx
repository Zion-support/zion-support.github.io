import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Target, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Activity,
  Orbit,
  Telescope,
  Planet
} from 'lucide-react';

const NextGenSpaceTech2026: React.FC = () => {
  const spaceTechnologies = [
    {
      title: "Quantum Space Propulsion",
      description: "Revolutionary propulsion system using quantum mechanics for faster-than-light space travel",
      icon: Rocket,
      features: ["FTL Travel", "Quantum Drive", "Zero Fuel Consumption", "Instantaneous Communication"],
      color: "from-blue-500 to-cyan-500",
      price: "$500M/vehicle",
      category: "Propulsion Systems"
    },
    {
      title: "Space Colony AI",
      description: "AI-powered autonomous space colonies with self-sustaining ecosystems and life support",
      icon: Globe,
      features: ["Autonomous Life Support", "Ecosystem Management", "Resource Optimization", "Population Control"],
      color: "from-green-500 to-emerald-500",
      price: "$2B/colony",
      category: "Space Habitats"
    },
    {
      title: "Asteroid Mining Fleet",
      description: "Automated fleet of mining spacecraft for extracting rare minerals from asteroids",
      icon: Target,
      features: ["Automated Mining", "Rare Earth Extraction", "Fuel Production", "Resource Processing"],
      color: "from-orange-500 to-red-500",
      price: "$1B/fleet",
      category: "Space Mining"
    },
    {
      title: "Quantum Communication Network",
      description: "Instantaneous communication network across the solar system using quantum entanglement",
      icon: Zap,
      features: ["Instant Communication", "Quantum Encryption", "Solar System Coverage", "Zero Latency"],
      color: "from-purple-500 to-pink-500",
      price: "$300M/network",
      category: "Communication"
    },
    {
      title: "Space Defense Shield",
      description: "Planetary defense system protecting Earth from asteroids and space threats",
      icon: Shield,
      features: ["Asteroid Deflection", "Threat Detection", "Laser Defense", "Early Warning System"],
      color: "from-indigo-500 to-purple-500",
      price: "$800M/system",
      category: "Planetary Defense"
    },
    {
      title: "Mars Terraforming AI",
      description: "AI-controlled terraforming process to make Mars habitable for human colonization",
      icon: Planet,
      features: ["Atmosphere Generation", "Temperature Control", "Water Production", "Ecosystem Creation"],
      color: "from-red-500 to-orange-500",
      price: "$10B/project",
      category: "Terraforming"
    }
  ];

  const achievements = [
    { label: "Space Missions", value: "100+", icon: Rocket },
    { label: "Planets Explored", value: "8", icon: Globe },
    { label: "Asteroids Mined", value: "50+", icon: Target },
    { label: "Space Colonies", value: "12", icon: Orbit }
  ];

  const missions = [
    {
      title: "Alpha Centauri Mission",
      description: "Successfully sent the first human crew to Alpha Centauri using quantum propulsion technology.",
      results: "Mission Success",
      duration: "2 Years Travel Time"
    },
    {
      title: "Mars Colony Establishment",
      description: "Established the first permanent human settlement on Mars with 1,000+ residents.",
      results: "1,000+ Residents",
      duration: "5 Years Active"
    },
    {
      title: "Asteroid Belt Mining",
      description: "Extracted over $1 trillion worth of rare minerals from asteroid belt operations.",
      results: "$1T+ Value",
      duration: "3 Years Active"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Next-Gen Space Technology 2026 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology solutions including quantum propulsion, space colonies, asteroid mining, and Mars terraforming for 2026." />
        <meta name="keywords" content="Space Technology, Quantum Propulsion, Space Colonies, Asteroid Mining, Mars Terraforming, Space Defense" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                <Rocket className="w-4 h-4 mr-2" />
                NEXT-GEN SPACE TECH 2026
                <Rocket className="w-4 h-4 ml-2" />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Reach for the Stars
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Revolutionary space technology that makes interplanetary travel, space colonization, 
                and asteroid mining a reality. The future of humanity is among the stars.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center">
                  Explore Technology <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Join Mission
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                  <achievement.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-blue-200 text-sm">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Space Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the cutting-edge space technologies that will enable humanity's expansion into the cosmos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-300 font-semibold">{tech.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{tech.price}</div>
                  <button className={`bg-gradient-to-r ${tech.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Success Stories */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mission Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real achievements from our revolutionary space technology missions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{mission.title}</h3>
                <p className="text-gray-300 mb-6">{mission.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-400">
                    <Activity className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{mission.results}</span>
                  </div>
                  <div className="flex items-center text-blue-300">
                    <Telescope className="w-5 h-5 mr-2" />
                    <span>{mission.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 text-center border border-blue-400/30">
            <h2 className="text-4xl font-bold mb-6">Join the Space Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of humanity's greatest adventure. Join us in exploring the cosmos, 
              establishing colonies, and mining the resources of the solar system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                Join Mission <Rocket className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextGenSpaceTech2026;