import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Sparkles
  Users,
  Target,
  CheckCircle,
  ArrowRight
  Star
  Zap
  Brain
  Shield
  Cloud
  Cpu
  Database
  Rocket
  MessageCircle
  Search
  Filter
  Settings
  RefreshCw
  Heart
  Bookmark
  Share2
  Download
  Upload
  FileText
  BarChart3
  Globe
  Award
  TrendingUp
  Clock
  Eye
  Lock
  Key
  Wifi
  Server
  Network
  Settings as SettingsIcon
} from "lucide-react"
import SEO from "../components/SEO"
const,
  Matc: h: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: Sparkles, cou,
  n: t: 150 },
  },
  { id: 'ai', na,
  m: e: 'AI Services', ic,
  o: n: Brain, cou,
  n: t: 45 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud, cou,
  n: t: 32 },
  },
  { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: 28 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', ic,
  o: n: Database, cou,
  n: t: 25 },
  },
  { id: 'iot', na,
  m: e: 'IoT & Edge', ic,
  o: n: Cpu, cou,
  n: t: 20 },
  },
  ]
  const matchedServices = [
  {
  id: 1,na,
  m: e: "AI Business Intelligence",catego,
  r: y: "ai",descripti,
  o: n: "Transform raw data into actionable insights with our advanced AI-powered analytics platform.",rati,
  n: g: 4.9,revie,
  w: s: 127,pri,
  c: e: "$2,999/mo"
      featur,
  e: s: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Data Visualization"]
      matchSco,
  r: e: 98,ic,
  o: n: Brain,featur,
  e: d: true
},
  {
  id: 2,na,
  m: e: "Cloud DevOps Automation",catego,
  r: y: "cloud",descripti,
  o: n: "Streamline your development and operations with intelligent automation and CI/CD pipelines.",rati,
  n: g: 4.8,revie,
  w: s: 89,pri,
  c: e: "$1,999/mo"
      featur,
  e: s: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Auto-scaling"]
      matchSco,
  r: e: 95,ic,
  o: n: Cloud,featur,
  e: d: false
},
  {
  id: 3,na,
  m: e: "AI Cybersecurity Platform",catego,
  r: y: "security",descripti,
  o: n: "Protect your digital assets with AI-powered threat detection and response systems.",rati,
  n: g: 4.9,revie,
  w: s: 156,pri,
  c: e: "$3,499/mo"
      featur,
  e: s: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Risk Assessment"]
      matchSco,
  r: e: 92,ic,
  o: n: Shield,featur,
  e: d: true
},
  {
  id: 4,na,
  m: e: "Data Analytics Suite",catego,
  r: y: "data",descripti,
  o: n: "Unlock the full potential of your data with advanced analytics and business intelligence.",rati,
  n: g: 4.7,revie,
  w: s: 73,pri,
  c: e: "$1,799/mo"
      featur,
  e: s: ["Data Mining", "Pattern Recognition", "Custom Reports", "Real-time Insights"]
      matchSco,
  r: e: 90,ic,
  o: n: Database,featur,
  e: d: false
},
  {
  id: 5,na,
  m: e: "IoT Edge Computing",catego,
  r: y: "iot",descripti,
  o: n: "Build and deploy intelligent IoT solutions with edge computing capabilities.",rati,
  n: g: 4.8,revie,
  w: s: 94,pri,
  c: e: "$2,499/mo"
      featur,
  e: s: ["Edge Processing", "Real-time Analytics", "Device Management", "Security"]
      matchSco,
  r: e: 88,ic,
  o: n: Cpu,featur,
  e: d: false
},
  {
  id: 6,na,
  m: e: "AI Workflow Automation",catego,
  r: y: "ai",descripti,
  o: n: "Automate complex business processes with intelligent AI workflows and decision engines.",rati,
  n: g: 4.9,revie,
  w: s: 112,pri,
  c: e: "$2,799/mo"
      featur,
  e: s: ["Process Automation", "Smart Routing", "Exception Handling", "Performance Analytics"]
      matchSco,
  r: e: 87,ic,
  o: n: Zap,featur,
  e: d: true
},
  ]
  const filteredServices = matchedServices.filter(service () => {
  const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
})

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Service Matcher - Zion Tech Group"
        description="Find the perfect AI and technology services for your business with our intelligent matching algorithm. Get personalized recommendations based on your needs."
        keywords="AI service matcher, technology matching, business solutions, Zion Tech Group"
      />

      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">AI Service Matcher</h1>
            </div>
            
            <h2 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technology Match
              </span>
            </h2>
            
            <p className="text-xl,
  m: d:text-2xl text-slate-300 mb-8 leading-relaxed">
              Our AI-powered matching algorithm analyzes your business needs and connects you 
              with the perfect technology solutions. Get personalized recommendations in seconds.
            </p>
            
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
              >
                Get Matched
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Browse All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */},
  }
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */},
  }
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for services, features, or use cases..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400,
  focu: s: outline-none,
  focu: s:border-cyan-400,
  focu: s:ring-2 focu,
  s:ring-cyan-400/20 transition-all duration-200";"
              />
            </div>

            {/* Category Filters */},
  }
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
  <button
                  key={category.id},
  }
                  onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
  selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-slate-300,
  hove: r: bg-slate-600/50 hove,
  r:text-white border border-slate-600/50'
}`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name},
  }
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count},
  }
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Matched Services Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your <span className="text-cyan-400">Perfect Matches</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Based on your business profile and requirements, here are the services 
              that best match your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
  <motion.div
                key={service.id},
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
                className={`bg-slate-800/50 border rounded-xl p-6,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105 ${
  service.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
}`}
              >
                {/* Header */},
  }
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    {service.featured && (
  <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 text-xs font-semibold">Featured</span>
                      </div>
                    )}
                    <div className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {service.matchScore}% Match
                    </div>
                  </div>
                </div>

                {/* Service Info */},
  }
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Rating and Price */},
  }
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
  <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm">{service.rating} ({service.reviews})</span>
                  </div>
                  <div className="text-cyan-400 font-bold">{service.price}</div>
                </div>

                {/* Features */},
  }
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature},
  }
                    </div>
                  ))},
  {service.features.length > 3 && (
  <div className="text-slate-500 text-sm text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Actions */},
  }
                <div className="flex gap-2">
                  <Link
                    to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg,
  hove: r: from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200";"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="className="inline-flex items-center justify-center px-4 py-2 border border-cyan-400/30 text-cyan-400 text-sm font-medium rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
  <motion.div
              initial={ opaci,
  t: y: 0 },
  }
              animate={ opaci,
  t: y: 1 },
  }
              className="className="text-center py-16";"
            >
              <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No matches found</h3>
              <p className="text-slate-300 mb-6">
                Try adjusting your search criteria or browse all our services.
              </p>
              <Link
                to="/services"
                className="className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg,
  hove: r:bg-cyan-400 transition-all duration-200";"
              >
                Browse All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* How It Works Section */},
  }
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How Our <span className="text-cyan-400">AI Matcher</span> Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our intelligent matching algorithm uses advanced AI to analyze your business needs 
              and find the perfect technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
  {
  ste,
  p: "01",tit,
  l: e: "Analyze Your Needs",descripti,
  o: n: "Our AI analyzes your business profile, industry, and specific requirements."
                ic,
  o: n: Brain
},
  {
  st,
  e: p: "02",tit,
  l: e: "Match with Services",descripti,
  o: n: "We match you with services that best fit your needs and budget.",ic,
  o: n: Target
},
  {
  st,
  e: p: "03",tit,
  l: e: "Get Recommendations",descripti,
  o: n: "Receive personalized recommendations with match scores and detailed analysis.",ic,
  o: n: Sparkles
},
  ].map((step, index) => (
  <motion.div
                key={index},
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
                className="className="text-center";"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
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
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let our AI matcher find the perfect technology solutions for your business. 
              Get started today and discover services tailored to your needs.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
              >
                Start Matching
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Browse All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Match