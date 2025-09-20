import React from "react"
import { motion } from "framer-motion"
import {
  ArrowRight
  CheckCircle,
  Cloud,
  Cpu,
  Shield,
  Zap,
  Brain,
  Globe,
  Lock
  BarChart3
  Users
  Rocket
} from "lucide-react"
import { SEO } from "../components/SEO"
const featuredServices = [
  {
  na,
  m: e: 'AI-Powered Analytics',descripti,
  o: n: 'Advanced machine learning algorithms that provide real-time insights and predictive analytics for your business.',catego,
  r: y: 'AI & ML',col,
  o: r: 'from-blue-500 to-cyan-500',ic,
  o: n: Brain,featur,
  e: s: ['Real-time data processingPredictive analytics', 'Custom ML modelsAPI integration']
    hr,
  e: f: '/services/ai-analytics'
},
  {
  na,
  m: e: 'Cloud Infrastructure',descripti,
  o: n: 'Scalable cloud solutions with automated deployment and management for optimal performance.',catego,
  r: y: 'Cloud',col,
  o: r: 'from-purple-500 to-pink-500',ic,
  o: n: Cloud,featur,
  e: s: ['Auto-scalingLoad balancing', 'Monitoring & alertsSecurity compliance']
    hr,
  e: f: '/services/cloud-infrastructure'
},
  {
  na,
  m: e: 'Cybersecurity Suite',descripti,
  o: n: 'Comprehensive security solutions protecting your digital assets from evolving threats.',catego,
  r: y: 'Security',col,
  o: r: 'from-red-500 to-orange-500',ic,
  o: n: Shield,featur,
  e: s: ['Threat detectionVulnerability assessment', 'Incident responseCompliance reporting']
    hr,
  e: f: '/services/cybersecurity'
},
  {
  na,
  m: e: 'Performance Optimization',descripti,
  o: n: 'Optimize your applications and infrastructure for maximum speed and efficiency.',catego,
  r: y: 'Performance',col,
  o: r: 'from-green-500 to-emerald-500',ic,
  o: n: Zap,featur,
  e: s: ['Performance monitoringOptimization recommendations', 'Load testingCaching strategies']
    hr,
  e: f: '/services/performance-optimization'
},
  {
  na,
  m: e: 'Data Management',descripti,
  o: n: 'Comprehensive data solutions including storage, processing, and analytics.'
    catego,
  r: y: 'Data',col,
  o: r: 'from-indigo-500 to-blue-500',ic,
  o: n: BarChart3,featur,
  e: s: ['Data warehousingETL pipelines', 'Data governanceBusiness intelligence']
    hr,
  e: f: '/services/data-management'
},
  {
  na,
  m: e: 'Team Collaboration',descripti,
  o: n: 'Tools and platforms to enhance team productivity and communication.',catego,
  r: y: 'Collaboration',col,
  o: r: 'from-yellow-500 to-orange-500',ic,
  o: n: Users,featur,
  e: s: ['Project managementCommunication tools', 'File sharingWorkflow automation']
    hr,
  e: f: '/services/team-collaboration'
},
  ]
const emergingTechnologies = [
  {
  na,
  m: e: 'Quantum Computing',descripti,
  o: n: 'Explore the future of computing with quantum algorithms and applications.',ic,
  o: n: Cpu,col,
  o: r: 'from-purple-600 to-indigo-600'
},
  {
  na,
  m: e: 'Edge Computing',descripti,
  o: n: 'Process data closer to the source for faster response times and reduced latency.',ic,
  o: n: Globe,col,
  o: r: 'from-blue-600 to-cyan-600'
},
  {
  na,
  m: e: 'Blockchain Solutions',descripti,
  o: n: 'Secure, transparent, and decentralized solutions for modern business needs.'
    ic,
  o: n: Lock,col,
  o: r: 'from-green-600 to-emerald-600'
},
  {
  na,
  m: e: 'IoT Integration',descripti,
  o: n: 'Connect and manage your devices for smart automation and insights.',ic,
  o: n: Rocket,col,
  o: r: 'from-orange-600 to-red-600'
},
  ]
export default function InnovativeServicesLanding2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="2025 Innovative Services Landing - Zion Tech Group"
        description="Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond."
        keywords="AI services, cloud infrastructure, cybersecurity, performance optimization, data management, emerging technologies"
        canonical="htt,
  p: s://ziontechgroup.com/innovative-services-2025"
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative
              </span>
              <br />
              <span className="text-white">Services Landing</span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold,
  hove: r:from-blue-600,
  hove: r:to-purple-700 transition-all duration-300,
  transform: hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-gray-900 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
  <motion.div
                key={service.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 * index },
  }
                className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20,
  hove: r: border-white/40 transition-all duration-300 group hove,
  r:scale-105";"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-medium">{service.category}</span>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={service.href},
  }
                  className="className="inline-flex items-center text-blue-400,
  hove: r: text-blue-300 text-sm font-medium transition-colors group-hov,
  e: r:text-blue-300";"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hove,
  r:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="px-4,
  s: m: px-6,
  l: g:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold,
  hove: r:bg-gray-100 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-blue-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with cutting-edge technologies that are shaping the future of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {emergingTechnologies.map((tech, index) => (
  <motion.div
                key={tech.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 * index },
  }
                className="className="text-center group";"
              >
                <div className={`p-6 bg-gradient-to-r ${tech.color} rounded-2xl mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-12 h-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have already transformed their operations with our innovative services.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-purple-700 transition-all duration-300 transform hove,
  r:scale-105">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}