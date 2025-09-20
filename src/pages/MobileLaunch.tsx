import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Smartphone
  Download,
  Zap,
  Shield,
  Cloud,
  Users,
  CheckCircle,
  ArrowRight
  Star
  Globe
  Lock
  Wifi
  Battery
  Settings
  Bell
  Search
  Home
  User
  BarChart3
  MessageCircle
  ShoppingCart
  Calendar
  FileText
  Heart
  Bookmark
  Share2
  Play
  Pause
  SkipBack
  SkipForward
  Volume2
  Maximize2
  RotateCcw
  Wifi as WifiIcon
  Battery as BatteryIcon
  Signal
} from "lucide-react"
import SEO from "../components/SEO"
const,
  MobileLaunc: h: React.FC = () () => {
  const features = [
  {
  titl,
  e: "AI-Powered Insights",descripti,
  o: n: "Get intelligent recommendations and insights powered by our advanced AI algorithms",ic,
  o: n: Zap,col,
  o: r: "from-cyan-400 to-blue-500"
},
  {
  tit,
  l: e: "Real-time Sync",descripti,
  o: n: "Seamlessly sync data across all your devices with cloud-based synchronization",ic,
  o: n: Cloud,col,
  o: r: "from-blue-400 to-purple-500"
},
  {
  tit,
  l: e: "Secure & Private",descripti,
  o: n: "Enterprise-grade security with end-to-end encryption and privacy controls",ic,
  o: n: Shield,col,
  o: r: "from-green-400 to-emerald-500"
},
  {
  tit,
  l: e: "Smart Notifications",descripti,
  o: n: "Intelligent alerts that adapt to your preferences and schedule",ic,
  o: n: Bell,col,
  o: r: "from-orange-400 to-red-500"
},
  ]
  const appScreens = [
  {
  na,
  m: e: "Dashboard",descripti,
  o: n: "Overview of your business metrics and key performance indicators",ic,
  o: n: Home,featur,
  e: s: [["Real-time metrics", "Customizable widgets", "Quick actions"],
  ],
  },
  {
  na,
  m: e: "AI Assistant",descripti,
  o: n: "Your personal AI companion for business insights and automation",ic,
  o: n: Zap,featur,
  e: s: [["Natural language queries", "Smart recommendations", "Automated tasks"],
  ],
  },
  {
  na,
  m: e: "Analytics",descripti,
  o: n: "Comprehensive data visualization and business intelligence tools",ic,
  o: n: BarChart3,featur,
  e: s: [["Interactive charts", "Custom reports", "Data export"],
  ],
  },
  {
  na,
  m: e: "Services",descripti,
  o: n: "Access to all Zion Tech Group services and solutions",ic,
  o: n: Settings,featur,
  e: s: [["Service catalog", "Quick setup", "Support access"],
  ],
  },
  ]

  const downloadOptions = [
  {
  platfo,
  r: m: "iOS App Store",ic,
  o: n: "🍎",descripti,
  o: n: "Download for iPhone and iPad",li,
  n: k: "#",featur,
  e: d: true
},
  {
  platfo,
  r: m: "Google Play Store",ic,
  o: n: "🤖",descripti,
  o: n: "Download for Android devices",li,
  n: k: "#",featur,
  e: d: true
},
  {
  platfo,
  r: m: "Web App",ic,
  o: n: "🌐",descripti,
  o: n: "Access via browser",li,
  n: k: "/",featur,
  e: d: false
},
  ]
  const systemRequirements = [
  { requireme,
  n: t: "iOS 14.0+", ic,
  o: n: "🍎" },
  },
  { requireme,
  n: t: "Android 8.0+", ic,
  o: n: "🤖" },
  },
  { requireme,
  n: t: "2GB RAM", ic,
  o: n: "💾" },
  },
  { requireme,
  n: t: "100MB Storage", ic,
  o: n: "💿" },
  },
  { requireme,
  n: t: "Internet Connection", ic,
  o: n: "🌐" },
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Mobile App - Zion Tech Group"
        description="Take Zion Tech Group with you on the go! Download our mobile app for iOS and Android to access AI services, analytics, and business solutions anywhere."
        keywords="mobile app, iOS app, Android app, Zion Tech Group mobile, business app"
      />

      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1,
  l: g: grid-cols-2 gap-12 items-center">
            <motion.div
              initial={ opacit,
  y: 0, x: -30 },
  }
              animate={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white">Mobile App</h1>
              </div>
              
              <h2 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6 leading-tight">
                Take Zion
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Everywhere
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Access your business solutions, AI services, and analytics on the go with our 
                powerful mobile application. Available for iOS and Android devices.
              </p>
              
              <div className="flex flex-col,
  s: m: flex-row gap-4">
                <Link
                  to="#download"
                  className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Now
                </Link>
                <Link
                  to="/contact"
                  className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400/10 transition-all duration-200";"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={ opacit,
  y: 0, x: 30 },
  }
              animate={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="relative";"
            >
              {/* Mock Phone */},
  }
              <div className="relative mx-auto w-80 h-96 bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl">
                {/* Phone Screen */},
  }
                <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[2rem] overflow-hidden">
                  {/* Status Bar */},
  }
                  <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <Signal className="w-4 h-4" />
                      <WifiIcon className="w-4 h-4" />
                      <BatteryIcon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* App Content */},
  }
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">Zion Tech</h3>
                      <p className="text-cyan-300 text-sm">AI-Powered Business</p>
                    </div>
                    
                    {/* Quick Actions */},
  }
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <BarChart3 className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <span className="text-white text-xs">Analytics</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <MessageCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <span className="text-white text-xs">AI Chat</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <Settings className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <span className="text-white text-xs">Services</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <User className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <span className="text-white text-xs">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */},
  }
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-4 h-4 text-yellow-900" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */},
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
              Powerful <span className="text-cyan-400">Mobile Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the full power of Zion Tech Group's services in the palm of your hand 
              with our feature-rich mobile application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screens Section */},
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
              App <span className="text-cyan-400">Screens</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore the intuitive interface and powerful features available in our mobile application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {appScreens.map((screen, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-8,
  hove: r:border-cyan-400/30 transition-all duration-300";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <screen.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{screen.name}</h3>
                <p className="text-slate-300 mb-6">{screen.description}</p>
                
                <div className="space-y-3">
                  {screen.features.map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-center text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature},
  }
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */},
  }
      <section id="download" className="py-20">
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
              Download <span className="text-cyan-400">Now</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get started with Zion Tech Group's mobile app today. Available on all major platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {downloadOptions.map((option, index) => (
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
                className={`bg-slate-800/50 border rounded-xl p-8 text-center,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105 ${
  option.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
}`}
              >
                {option.featured && (
  <div className="flex items-center justify-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Recommended</span>
                  </div>
                )}
                
                <div className="text-6xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{option.platform}</h3>
                <p className="text-slate-300 mb-6">{option.description}</p>
                
                <Link
                  to={option.link},
  }
                  className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r: from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200 hove,
  r:scale-105";"
                >
                  Download
                  <Download className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */},
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
              System <span className="text-cyan-400">Requirements</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ensure your device meets the requirements for optimal performance and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {systemRequirements.map((req, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6 text-center,
  hove: r:border-cyan-400/30 transition-all duration-300";"
              >
                <div className="text-4xl mb-3">{req.icon}</div>
                <p className="text-white font-medium">{req.requirement}</p>
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
              Ready to Go Mobile?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Download our mobile app today and take Zion Tech Group's powerful solutions 
              with you wherever you go.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="#download"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/25";"
              >
                <Download className="mr-2 w-5 h-5" />
                Download App
              </Link>
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200";"
              >
                Get Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default MobileLaunch