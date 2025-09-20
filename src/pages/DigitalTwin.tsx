import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import {
  Globe
  Brain,
  Zap,
  CheckCircle
  Star
  TrendingUp
  Award
  Lock
  Database
  Cpu
  Network
  BarChart3
  FileText
  MessageCircle
  Phone
  Mail
  MapPin
  Building
  Video
  Eye
  Target
  Users
  ArrowRight
  Key
  Fingerprint
  EyeOff
  Server
  Globe2
  ShieldCheck
  Wifi
  Smartphone
  Cloud
  Activity
  Clock
  BarChart
  PieChart
  Cube
  Layers
  Monitor
  Smartphone
  Factory
  Car
  Heart
} from "lucide-react"
export default function DigitalTwin() {
  const features = [
  {
  ic,
  o: n: Globe,tit,
  l: e: 'Virtual Replicas',descripti,
  o: n: 'Create accurate digital representations of physical assets and systems',col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  ic,
  o: n: Brain,tit,
  l: e: 'AI-Powered Analytics',descripti,
  o: n: 'Intelligent insights and predictive modeling for optimization',col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Real-Time Monitoring',descripti,
  o: n: 'Live data synchronization and instant status updates',col,
  o: r: 'from-yellow-500 to-orange-500'
},
  {
  ic,
  o: n: Cube,tit,
  l: e: '3D Visualization',descripti,
  o: n: 'Immersive 3D models and interactive simulations',col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  ic,
  o: n: Network,tit,
  l: e: 'IoT Integration',descripti,
  o: n: 'Seamless connection with sensors and connected devices',col,
  o: r: 'from-red-500 to-pink-500'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Comprehensive metrics and optimization insights',col,
  o: r: 'from-indigo-500 to-blue-500'
},
  ]
  const benefits = [
  'Reduce operational costs by 30% with predictive maintenanceImprove asset performance by 25% through optimization'
    'Minimize downtime with real-time monitoring and alertsEnable remote operations and virtual collaboration'
    'Optimize resource allocation and energy efficiencyAccelerate decision-making with data-driven insights'
]

  const useCases = [
  {
  tit,
  l: e: 'Manufacturing',descripti,
  o: n: 'Digital twins for production lines and industrial processes',ic,
  o: n: Factory
},
  {
  tit,
  l: e: 'Smart Cities',descripti,
  o: n: 'Urban infrastructure monitoring and management',ic,
  o: n: Building
},
  {
  tit,
  l: e: 'Healthcare',descripti,
  o: n: 'Patient monitoring and medical device management',ic,
  o: n: Heart
},
  {
  tit,
  l: e: 'Transportation',descripti,
  o: n: 'Vehicle fleet management and infrastructure optimization',ic,
  o: n: Car
},
  ]
  const digitalTwinCapabilities = [
  {
  na,
  m: e: 'Real-Time Monitoring',descripti,
  o: n: 'Live data synchronization and instant status updates',exampl,
  e: s: [['Live sensor dataPerformance metrics', 'Status monitoring'],
  ],
  },
  {
  na,
  m: e: 'Predictive Analytics',descripti,
  o: n: 'AI-powered forecasting and predictive maintenance',exampl,
  e: s: [['Failure predictionPerformance optimization', 'Trend analysis'],
  ],
  },
  {
  na,
  m: e: '3D Visualization',descripti,
  o: n: 'Immersive 3D models and interactive simulations',exampl,
  e: s: [['Virtual walkthroughsInteractive models', 'Spatial analysis'],
  ],
  },
  {
  na,
  m: e: 'Simulation & Testing',descripti,
  o: n: 'Virtual testing and scenario modeling',exampl,
  e: s: [['What-if scenariosPerformance testing', 'Risk assessment'],
  ],
  },
  ]

  return (
    <>
      <SEO 
        title="Digital Twin Platform - Zion Tech Group"
        description="Revolutionary digital twin platform with real-time monitoring, AI analytics, and 3D visualization. Transform your assets with virtual replicas and predictive insights."
        keywords="digital twin, virtual replicas, IoT monitoring, predictive analytics, 3D visualization, asset optimization, real-time monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */},
  }
        <section className="relative overflow-hidden py-20,
  l: g: py-32">
          <div className="container-responsive">
            <motion.div
              initial={ opacit,
  y: 0, y: 30 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Digital Innovation
              </div>
              
              <h1 className="text-4xl,
  l: g:text-6xl font-bold text-white mb-6">
                Digital Twin
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your physical assets with our revolutionary digital twin platform. 
                Create virtual replicas, monitor performance in real-time, and optimize 
                operations with AI-powered insights and predictive analytics.
              </p>
              
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-cyan-500/25";"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: border-gray-500 hove,
  r:bg-gray-800/50 transition-all duration-300";"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */},
  }
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Revolutionary Digital Twin Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our digital twin platform combines cutting-edge technology with practical 
                applications to deliver unprecedented insights and optimization capabilities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {features.map((feature, index) => (
  <motion.div
                  key={feature.title},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-cyan-500/30 transition-all duration-300 hove,
  r:bg-slate-800/70";"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors">
                    {feature.title},
  }
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description},
  }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1,
  l: g: grid-cols-2 gap-16 items-center">
              <motion.div
                initial={ opacit,
  y: 0, x: -30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.8 },
  }
                viewport={ on,
  c: e: true },
  }
              >
                <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-6">
                  Transform Your Asset Management
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our digital twin platform delivers measurable improvements in operational 
                  efficiency, cost reduction, and performance optimization while enabling 
                  predictive maintenance and data-driven decision making.
                </p>
                
                <div className="grid grid-cols-1,
  s: m:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
  <motion.div
                      key={benefit},
  }
                      initial={ opaci,
  t: y: 0, x: -20 },
  }
                      whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                      transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                      viewport={ on,
  c: e: true },
  }
                      className="className="flex items-center gap-3";"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={ opaci,
  t: y: 0, x: 30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.8 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="relative";"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Digital Twin Impact
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                        <div className="text-sm text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
                        <div className="text-sm text-gray-400">Performance Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
                        <div className="text-sm text-gray-400">Downtime Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Digital Twin Capabilities Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Digital Twin Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive digital twin capabilities that 
                enable virtual representation and optimization of physical assets.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
              {digitalTwinCapabilities.map((capability, index) => (
  <motion.div
                  key={capability.name},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-cyan-500/30 transition-all duration-300 group";"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,
  r:text-cyan-400 transition-colors">
                    {capability.name},
  }
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {capability.description},
  }
                  </p>
                  
                  <div className="space-y-2">
                    {capability.examples.map((example, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {example},
  }
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Digital Twin Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our digital twin platform adapts to various industries and applications
                providing tailored solutions for different asset management needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
  <motion.div
                  key={useCase.title},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-cyan-500/30 transition-all duration-300 group";"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,
  r:text-cyan-400 transition-colors">
                        {useCase.title},
  }
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description},
  }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */},
  }
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
                Ready to Create Your Digital Twin?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our digital twin 
                platform to revolutionize their asset management and operations.
              </p>
              
              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-cyan-500/25";"
                >
                  Start Today
                </motion.button>
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: border-gray-500 hove,
  r:bg-gray-800/50 transition-all duration-300";"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}