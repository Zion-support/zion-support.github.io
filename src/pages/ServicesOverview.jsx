import React from "react"
import SEO from "@/components/SEO"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Cloud, Shield, Database, Wifi, Link as LinkIcon, Zap, Server, Users, Target, Check, ArrowRight } from "lucide-react"
export default function ServicesOverview() {
  const serviceCategories = [
  {
  na,
  m: e: "AI & Machine Learning",descripti,
  o: n: "Cutting-edge artificial intelligence solutions for business transformation",ic,
  o: n: Brain,col,
  o: r: "from-purple-600 to-blue-600",servic,
  e: s: [
  {
  nam,
  e: "AI Strategy & Consulting",descripti,
  o: n: "Strategic guidance on implementing AI solutions",pri,
  c: e: "From $2,500"
                    hr,
  e: f: "/services/ai"
},
  {
  na,
  m: e: "Machine Learning Development",descripti,
  o: n: "Custom ML models and algorithms",pri,
  c: e: "From $5,000"
                    hr,
  e: f: "/services/ai"
},
  {
  na,
  m: e: "AI-Powered Applications",descripti,
  o: n: "Intelligent automation and insights",pri,
  c: e: "From $8,500"
                    hr,
  e: f: "/services/ai"
},
  ],
  },
  {
  na,
  m: e: "Data Analytics & BI",descripti,
  o: n: "Transform raw data into actionable business intelligence",ic,
  o: n: Database,col,
  o: r: "from-blue-600 to-indigo-600",servic,
  e: s: [
  {
  nam,
  e: "Business Intelligence & Reporting",descripti,
  o: n: "Interactive dashboards and automated reporting",pri,
  c: e: "From $3,500/month"
                    hr,
  e: f: "/services/data-analytics"
},
  {
  na,
  m: e: "Predictive Analytics & Forecasting",descripti,
  o: n: "Machine learning for future insights",pri,
  c: e: "From $5,000/month"
                    hr,
  e: f: "/services/data-analytics"
},
  {
  na,
  m: e: "Data Engineering & ETL",descripti,
  o: n: "Robust data pipelines and warehouses",pri,
  c: e: "From $4,500/month"
                    hr,
  e: f: "/services/data-analytics"
},
  ],
  },
  {
  na,
  m: e: "IoT & Edge Computing",descripti,
  o: n: "Connected ecosystems and real-time edge processing",ic,
  o: n: Wifi,col,
  o: r: "from-green-600 to-emerald-600",servic,
  e: s: [
  {
  nam,
  e: "IoT Device Management Platform",descripti,
  o: n: "Comprehensive IoT device management",pri,
  c: e: "From $4,200/month"
                    hr,
  e: f: "/services/iot-edge-computing"
},
  {
  na,
  m: e: "Edge Computing Infrastructure",descripti,
  o: n: "Real-time data processing at the edge",pri,
  c: e: "From $5,500/month"
                    hr,
  e: f: "/services/iot-edge-computing"
},
  {
  na,
  m: e: "Smart City & Industrial IoT",descripti,
  o: n: "IoT solutions for smart cities and manufacturing",pri,
  c: e: "From $6,500/month"
                    hr,
  e: f: "/services/iot-edge-computing"
},
  ],
  },
  {
  na,
  m: e: "Blockchain & Web3",descripti,
  o: n: "Decentralized applications and blockchain solutions",ic,
  o: n: LinkIcon,col,
  o: r: "from-purple-600 to-indigo-600",servic,
  e: s: [
  {
  nam,
  e: "Smart Contract Development",descripti,
  o: n: "Secure, audited smart contracts"
                    pri,
  c: e: "From $8,500/project"
                    hr,
  e: f: "/services/blockchain-web3"
},
  {
  na,
  m: e: "DeFi Platform Development",descripti,
  o: n: "Complete DeFi platforms and protocols",pri,
  c: e: "From $25,000/project"
                    hr,
  e: f: "/services/blockchain-web3"
},
  {
  na,
  m: e: "NFT Marketplace & Collections",descripti,
  o: n: "Custom NFT platforms and generative art",pri,
  c: e: "From $12,000/project"
                    hr,
  e: f: "/services/blockchain-web3"
},
  ],
  },
  {
  na,
  m: e: "DevOps & Cloud",descripti,
  o: n: "Modern software delivery and cloud infrastructure",ic,
  o: n: Cloud,col,
  o: r: "from-orange-600 to-red-600",servic,
  e: s: [
  {
  nam,
  e: "Cloud Migration & Strategy",descripti,
  o: n: "Multi-cloud strategy and migration",pri,
  c: e: "From $8,500/project"
                    hr,
  e: f: "/services/devops-cloud"
},
  {
  na,
  m: e: "CI/CD Pipeline Development",descripti,
  o: n: "Automated software delivery pipelines",pri,
  c: e: "From $6,500/project"
                    hr,
  e: f: "/services/devops-cloud"
},
  {
  na,
  m: e: "Container Orchestration & Kubernetes",descripti,
  o: n: "Enterprise-grade container management",pri,
  c: e: "From $7,500/project"
                    hr,
  e: f: "/services/devops-cloud"
},
  ],
  },
  {
  na,
  m: e: "Cybersecurity",descripti,
  o: n: "Advanced security solutions and threat protection",ic,
  o: n: Shield,col,
  o: r: "from-red-600 to-pink-600",servic,
  e: s: [
  {
  nam,
  e: "Security Assessment & Auditing",descripti,
  o: n: "Comprehensive security evaluations",pri,
  c: e: "From $5,000"
                    hr,
  e: f: "/services/cybersecurity"
},
  {
  na,
  m: e: "Threat Detection & Response",descripti,
  o: n: "Real-time security monitoring",pri,
  c: e: "From $4,500/month"
                    hr,
  e: f: "/services/cybersecurity"
},
  {
  na,
  m: e: "Compliance & Governance",descripti,
  o: n: "Regulatory compliance and security frameworks",pri,
  c: e: "From $6,000/month"
                    hr,
  e: f: "/services/cybersecurity"
},
  ],
  },
  ]
    const stats = [
  { lab,
  e: l: "Services Offered", val,
  u: e: "50+", ic,
  o: n: Target },
  },
  { lab,
  e: l: "Industries Served", val,
  u: e: "15+", ic,
  o: n: Users },
  },
  { lab,
  e: l: "Technologies", val,
  u: e: "100+", ic,
  o: n: Server },
  },
  { lab,
  e: l: "Client Satisfaction", val,
  u: e: "98%", ic,
  o: n: Check },
  },
  ]
    const const containerVariants = {
  = {
        hidd,
  e: n: { opacit,
  y: 0 },
  }
        visib,
  l: e: {
  opacit,
  y: 1,transiti,
  o: n: {
  staggerChildre,
  n: 0.1
},
  },
  }
    const const itemVariants = {
  = {
        hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 },
  }
        visib,
  l: e: {
  ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
  duratio,
  n: 0.5,ea,
  s: e: "easeOut"
},
  },
  }
    return (<div className="min-h-screen bg-background">
      <SEO title="All Services - Zion Tech Group Comprehensive Technology Solutions" description="Explore our complete range of technology services including AI, data analytics, IoT, blockchain, DevOps, and cybersecurity solutions." keywords="technology services, AI services, data analytics, IoT solutions, blockchain development, DevOps consulting, cybersecurity services" canonical="htt,
  p: s://ziontechgroup.com/services"/>

      {/* Hero Section */},
  }
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl,
  m: d: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Complete Service Portfolio
          </h1>
          <p className="text-xl m,
  d:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of technology solutions designed to transform your business. 
            From AI and data analytics to IoT and blockchain, we have the expertise to drive your success.
          </p>
        </div>
      </section>

      {/* Stats Section */},
  }
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            {stats.map((stat, index) => (<motion.div key={stat.label} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white"/>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */},
  }
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            {serviceCategories.map((category, index) => (<motion.div key={category.name} variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-6">
                      <category.icon className="w-8 h-8"/>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                      <p className="text-xl opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid,
  m: d:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200,
  hove: r:border-blue-300 transition-colors">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                          <Link to={service.href} className="inline-flex items-center text-blue-600,
  hove: r:text-blue-700 font-medium">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1"/>
                          </Link>
                        </div>
                      </div>))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link to={category.services[0].href} className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hov,
  e: r:opacity-90 transition-opacity`}>
                      Explore All {category.name} Services
                      <ArrowRight className="w-5 h-5 ml-2"/>
                    </Link>
                  </div>
                </div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */},
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real value
            </p>
          </motion.div>

          <motion.div className="grid,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with deep expertise across multiple technology domains
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful implementations and measurable business outcomes
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Stay ahead with cutting-edge technologies and emerging industry trends
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="text-xl mb-8 max-w-3xl mx-auto" variants={itemVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            Let our technology experts help you choose the right solutions and implement them successfully
          </motion.p>
          <motion.div className="flex flex-col,
  s: m:flex-row gap-4 justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true },
  }>
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold,
  hove: r: bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>)
}
