import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Rocket
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight
  CheckCircle
  Star
  Lock
  Activity
  BarChart3
  Settings
  Bell
  Download
  Upload
  RefreshCw
  Monitor
  Smartphone
  Server
  Chip
  Wifi
  Radar
  Camera
  Video
  FileText
  Calendar
  Tag
  TrendingUp
  PieChart
  LineChart
  Scatter
  Layers
  Cube
  Box
  Package
  Truck
  Building
  Factory
  Warehouse
  Home
  Car
  Plane
  Ship
  Database
  Cloud
  Eye
  Brain
  Network
  Cpu
} from "lucide-react"
export default function SpaceTech() {
  const features = [
    {
      ic,
  o: n: Rocket,tit,
  l: e: "Space Launch Systems",descripti,
  o: n: "Advanced propulsion and launch vehicle technologies",col,
  o: r: "from-red-500 to-orange-500"
    }, {
      ic,
  o: n: Satellite,tit,
  l: e: "Satellite Technology",descripti,
  o: n: "Earth observation and communication satellites",col,
  o: r: "from-blue-500 to-cyan-500"
    }, {
      ic,
  o: n: Globe,tit,
  l: e: "Earth Observation",descripti,
  o: n: "Remote sensing and environmental monitoring",col,
  o: r: "from-green-500 to-emerald-500"
    }, {
      ic,
  o: n: Zap,tit,
  l: e: "Space Communications",descripti,
  o: n: "High-speed data transmission and networking",col,
  o: r: "from-yellow-500 to-orange-500"
    }, {
      ic,
  o: n: Shield,tit,
  l: e: "Space Security",descripti,
  o: n: "Cybersecurity and space defense systems",col,
  o: r: "from-purple-500 to-pink-500"
    }, {
      ic,
  o: n: Target,tit,
  l: e: "Navigation Systems",descripti,
  o: n: "Precise positioning and navigation technologies",col,
  o: r: "from-indigo-500 to-blue-500"
    }
  ]
  const applications = [
    {
      tit,
  l: e: "Telecommunications",descripti,
  o: n: "Global communication networks and internet connectivity",ic,
  o: n: Wifi,benefi,
  t: s: [["Global coverage", "High bandwidth", "Low latency"];]
    }, {
      tit,
  l: e: "Environmental Monitoring",descripti,
  o: n: "Climate change tracking and natural disaster prediction",ic,
  o: n: Activity,benefi,
  t: s: [["Climate data", "Disaster response", "Resource management"];]
    }, {
      tit,
  l: e: "Navigation & GPS",descripti,
  o: n: "Precise positioning and location services",ic,
  o: n: Target,benefi,
  t: s: [["Global positioning", "Navigation systems", "Timing services"];]
    }, {
      tit,
  l: e: "Scientific Research",descripti,
  o: n: "Space exploration and astronomical discoveries",ic,
  o: n: Eye,benefi,
  t: s: [["Astronomy", "Planetary science", "Space physics"];]
    }
  ]

  const technologies = [
    "Propulsion Systems", "Satellite Design", "Ground Stations", "Launch Vehicles", 
    "Earth Observation", "Space Communications", "Navigation Systems", "Space Robotics", "Space Mining", "Space Habitats"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Space Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the final frontier with our cutting-edge space technology solutions. 
              From satellite systems to space communications, we're pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500,
  hove: r:from-red-600,
  hove: r:to-orange-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-red-500/25 flex items-center space-x-2";"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-red-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-red-400/50 flex items-center space-x-2";"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Space Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive space technology platform provides everything you need to explore
              communicate, and operate in the vast expanse of space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-red-400/40 transition-all duration-300";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how space technology is transforming industries and improving life on Earth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-2xl p-8,
  hove: r: bg-white/10 hove,
  r:border-red-400/40 transition-all duration-300";"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{application.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Space Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge space technologies for maximum performance, reliability, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2,
  m: d:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-xl p-4 text-center,
  hove: r: bg-white/10 hove,
  r:border-red-400/40 transition-all duration-300";"
              >
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the space technology revolution with Zion Tech Group. Our space solutions are designed to explore 
              new frontiers, connect the world, and advance human knowledge beyond Earth's boundaries.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500,
  hove: r:from-red-600,
  hove: r:to-orange-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-red-500/25 flex items-center space-x-2";"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-red-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-red-400/50 flex items-center space-x-2";"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}