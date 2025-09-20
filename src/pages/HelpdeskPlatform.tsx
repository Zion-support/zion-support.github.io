import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  MessageCircle
  Users, 
  Ticket, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Filter
  ArrowRight
  Star
  Globe
  Cpu
  Shield
  Cloud
  Zap
  Target
  Activity
  BarChart3
  Settings
  Bell
  Download
  Upload
  RefreshCw
  Eye
  Lock
  Database
  Network
  Smartphone
  Monitor
  Headphones
  Mail
  Phone
  Video
  FileText
  Calendar
  Tag
  UserCheck
  UserX
  TrendingUp
  PieChart
  LineChart
} from "lucide-react"
export default function HelpdeskPlatform() {
  const features = [
    {
      ic,
  o: n: Ticket,tit,
  l: e: "Ticket Management",descripti,
  o: n: "Comprehensive ticket tracking and resolution workflow",col,
  o: r: "from-blue-500 to-cyan-500"
    }, {
      ic,
  o: n: Users,tit,
  l: e: "Team Collaboration",descripti,
  o: n: "Multi-agent support with role-based access control",col,
  o: r: "from-green-500 to-emerald-500"
    }, {
      ic,
  o: n: Clock,tit,
  l: e: "Response Time Tracking",descripti,
  o: n: "Monitor and optimize support response times",col,
  o: r: "from-yellow-500 to-orange-500"
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: "Analytics & Reporting",descripti,
  o: n: "Comprehensive performance metrics and insights",col,
  o: r: "from-purple-500 to-pink-500"
    }, {
      ic,
  o: n: Shield,tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Enterprise-grade security and data protection",col,
  o: r: "from-red-500 to-pink-500"
    }, {
      ic,
  o: n: Cloud,tit,
  l: e: "Cloud Platform",descripti,
  o: n: "Scalable cloud infrastructure for global support",col,
  o: r: "from-indigo-500 to-blue-500"
    }
  ]
  const services = [
    {
      tit,
  l: e: "Customer Support",descripti,
  o: n: "Multi-channel customer support and ticket management",ic,
  o: n: MessageCircle,benefi,
  t: s: [["Email support", "Live chat", "Phone support", "Social media integration"];]
    }, {
      tit,
  l: e: "Internal IT Support",descripti,
  o: n: "Employee IT support and technical assistance",ic,
  o: n: Cpu,benefi,
  t: s: [["Hardware support", "Software assistance", "Network issues", "Access management"];]
    }, {
      tit,
  l: e: "Knowledge Base",descripti,
  o: n: "Self-service knowledge base and documentation",ic,
  o: n: FileText,benefi,
  t: s: [["FAQ management", "Documentation", "Video tutorials", "Search functionality"];]
    }, {
      tit,
  l: e: "Automation & AI",descripti,
  o: n: "AI-powered automation and intelligent routing",ic,
  o: n: Brain,benefi,
  t: s: [["Auto-routing", "Chatbots", "Predictive analytics", "Smart suggestions"];]
    }
  ]

  const integrations = [
    "CRM Systems", "Email Platforms", "Chat Tools", "Social Media", 
    "Project Management", "Analytics Tools", "Cloud Services", "Mobile Apps", "API Access", "Webhooks"
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
              Helpdesk Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your support operations with our comprehensive helpdesk platform. 
              Manage tickets, collaborate with teams, and deliver exceptional customer service.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500,
  hove: r:from-green-600,
  hove: r:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-green-500/25 flex items-center space-x-2";"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-green-400/50 flex items-center space-x-2";"
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
  m: d: text-5xl font-bold text-white mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our helpdesk platform provides everything you need to deliver exceptional 
              customer support and manage internal IT operations efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
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
                className="className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-green-400/40 transition-all duration-300";"
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

      {/* Services Section */}
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
              Our Helpdesk Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive helpdesk solutions designed to improve support efficiency and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                className="className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8,
  hove: r: bg-white/10 hove,
  r:border-green-400/40 transition-all duration-300";"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
  m: d: text-5xl font-bold text-white mb-6">
              Integrations & Connectivity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with your existing tools and workflows for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 m,
  d:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
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
                className="className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 text-center,
  hove: r: bg-white/10 hove,
  r:border-green-400/40 transition-all duration-300";"
              >
                <span className="text-white font-medium">{integration}</span>
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
              Ready to Transform Your Support Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the modern helpdesk revolution with Zion Tech Group. Our platform is designed to 
              streamline support operations, improve customer satisfaction, and boost team productivity.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500,
  hove: r:from-green-600,
  hove: r:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-green-500/25 flex items-center space-x-2";"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-green-400/50 flex items-center space-x-2";"
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