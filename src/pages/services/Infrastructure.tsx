import React from "react"
import { Server, Network, Database, Shield, Cpu, HardDrive, Zap, BarChart3 } from "lucide-react"
const InfrastructureServices = () () => {
  const infrastructureServices = [
  {
  tit,
  l: e: "Network Design & Management",descripti,
  o: n: "Scalable network architecture and optimization for enterprise needs.",pri,
  c: e: "From $5,000/month"
      featur,
  e: s: ["Network architecture design", "Performance optimization", "Security implementation", "24/7 monitoring"]
      ic,
  o: n: Network
},
  {
  tit,
  l: e: "System Administration",descripti,
  o: n: "Comprehensive system management and maintenance services.",pri,
  c: e: "From $3,500/month"
      featur,
  e: s: ["Server management", "Performance tuning", "Backup & recovery", "Security updates"]
      ic,
  o: n: Server
},
  {
  tit,
  l: e: "Data Center Solutions",descripti,
  o: n: "Reliable hosting, colocation, and data center management."
      pri,
  c: e: "From $8,000/month"
      featur,
  e: s: ["Colocation services", "Managed hosting", "Disaster recovery", "Compliance support"]
      ic,
  o: n: Database
},
  ]
  const technologies = [
  {
  na,
  m: e: "Virtualization",descripti,
  o: n: "VMware, Hyper-V, and container solutions"
      ic,
  o: n: Cpu,featur,
  e: s: [["VMware vSphere", "Docker containers", "Kubernetes orchestration", "Resource optimization"],
  ],
  },
  {
  na,
  m: e: "Storage Solutions",descripti,
  o: n: "Enterprise storage and backup systems",ic,
  o: n: HardDrive,featur,
  e: s: [["SAN/NAS systems", "Backup solutions", "Data replication", "Disaster recovery"],
  ],
  },
  {
  na,
  m: e: "Network Security",descripti,
  o: n: "Advanced network protection and monitoring",ic,
  o: n: Shield,featur,
  e: s: [["Firewall management", "Intrusion detection", "VPN solutions", "Security monitoring"],
  ],
  },
  ]

  const benefits = [
  "Improved system reliability and uptime"
    "Enhanced security and compliance"
    "Scalable infrastructure that grows with your business"
    "Reduced operational costs and complexity"
    "Expert support and maintenance"
    "Future-proof technology solutions"
]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */},
  }
      <section className="relative pt-24 pb-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2"/>
              IT Infrastructure
            </div>
            <h1 className="text-4xl m,
  d:text-6xl font-bold text-white mb-6">
              IT Infrastructure
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build robust, scalable infrastructure that provides the foundation
              for your business growth and digital transformation.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg,
  hove: r:from-purple-700,
  hove: r:to-pink-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Services */},
  }
      <section id="services" className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions designed to provide the
              reliability and performance your business demands.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
  <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6,
  hove: r:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-purple-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and platforms to build robust
              scalable infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
  <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center,
  hove: r:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
  <li key={idx} className="text-sm text-gray-400">
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-6">
                Why Choose Our Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our infrastructure solutions provide the reliability, security
                and scalability your business needs to succeed.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {benefit},
  }
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Zap className="w-24 h-24 text-purple-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Excellence</h3>
                <p className="text-gray-300 mb-6">
                  Our team has decades of combined experience building and
                  maintaining enterprise-grade infrastructure solutions.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Certified professionals</p>
                  <p>• Industry best practices</p>
                  <p>• 24/7 support available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-6">
            Build Your Foundation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to build a robust, scalable infrastructure that supports
            your business growth and digital transformation?
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg,
  hove: r:from-purple-700,
  hove: r:to-pink-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
              Get Started
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default InfrastructureServices