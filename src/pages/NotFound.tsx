import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Home
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Search,
  HelpCircle
  Cloud
  Shield
  Brain
  Zap
  Users
  BarChart3
} from "lucide-react"
import { SEO } from "../components/SEO"
const popularCategories = [
  {
  tit,
  l: e: 'AI & Machine Learning',ic,
  o: n: Brain,servic,
  e: s: [
  { nam,
  e: 'AI Business Intelligence', pa,
  t: h: '/services/ai-business-intelligence' },
  },
  { na,
  m: e: 'AI Content Creation', pa,
  t: h: '/services/ai-content-creation' },
  },
  { na,
  m: e: 'AI Cybersecurity', pa,
  t: h: '/services/ai-cybersecurity' },
  },
  { na,
  m: e: 'AI Project Management', pa,
  t: h: '/services/ai-project-management' },
  },
  ],
  },
  {
  tit,
  l: e: 'Cloud & Infrastructure',ic,
  o: n: Cloud,servic,
  e: s: [
  { nam,
  e: 'Cloud DevOps', pa,
  t: h: '/services/cloud-devops' },
  },
  { na,
  m: e: 'IT Infrastructure', pa,
  t: h: '/services/it-infrastructure' },
  },
  { na,
  m: e: 'Digital Twin', pa,
  t: h: '/services/digital-twin' },
  },
  { na,
  m: e: 'Micro SaaS Solutions', pa,
  t: h: '/services/micro-saas' },
  },
  ],
  },
  {
  tit,
  l: e: 'Cybersecurity',ic,
  o: n: Shield,servic,
  e: s: [
  { nam,
  e: 'Zero Trust Network', pa,
  t: h: '/services/zero-trust-network-access' },
  },
  { na,
  m: e: 'Security Headers & CSP', pa,
  t: h: '/services/security-headers-csp' },
  },
  { na,
  m: e: 'Compliance Assistant', pa,
  t: h: '/services/ai-compliance-assistant' },
  },
  { na,
  m: e: 'Threat Intelligence', pa,
  t: h: '/services/ai-autonomous-threat-intelligence' },
  },
  ],
  },
  {
  tit,
  l: e: 'Emerging Technologies',ic,
  o: n: Zap,servic,
  e: s: [
  { nam,
  e: 'Quantum Computing', pa,
  t: h: '/services/quantum-computing' },
  },
  { na,
  m: e: 'IoT Edge Computing', pa,
  t: h: '/services/iot-edge-computing' },
  },
  { na,
  m: e: 'Space Technology', pa,
  t: h: '/services/space-tech' },
  },
  { na,
  m: e: 'AI Quantum Hybrid', pa,
  t: h: '/services/ai-quantum-hybrid-platform' },
  },
  ],
  },
  ]
export default function NotFound() {
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Page Not Found - Zion Tech Group"
        description="The page you're looking for doesn't exist. Explore our services or contact our support team for assistance."
        keywords="404, page not found, error, help, support"
        canonical="htt,
  p: s://ziontechgroup.com/404"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />
        <div className="absolute inset-0 bg-[url('da,
  t: a:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
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
          >
            {/* 404 Number */},
  }
            <div className="mb-8">
              <h1 className="text-9xl,
  m: d:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-blue-400 leading-none">
                404
              </h1>
            </div>

            {/* Error Message */},
  }
            <h2 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-xl m,
  d:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Oops! The page you're looking for doesn't exist. But don't worry, we've got plenty of amazing services to explore.
            </p>

            {/* Action Buttons */},
  }
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-500 text-white font-semibold text-lg rounded-xl,
  hove: r:from-zion-cyan-dark,
  hove: r:to-blue-600 transition-all duration-300";"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold text-lg rounded-xl,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Services Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="className="text-center mb-16";"
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
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Popular Services You Might Like
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While you're here, check out some of our most popular services that are transforming businesses.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8";"
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
          >
            {popularCategories.map((category, index) => (
  <motion.div
                key={category.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index },
  }
                className="className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6";"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
  <Link
                      key={service.path},
  }
                      to={service.path},
  }
                      className="className="flex items-center justify-between p-3 rounded-lg,
  hove: r: bg-slate-700/50 transition-all duration-200 group";"
                    >
                      <span className="text-cyan-400 group-hove,
  r:text-cyan-300 transition-colors">
                        {service.name},
  }
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hov,
  e: r:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Help Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
            className="className="text-center";"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Still Can't Find What You're Looking For?</h3>
              <p className="text-slate-300 mb-6">
                Our team is here to help you navigate our services and find the right solution for your needs.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 transition-all duration-200";"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
                <Link
                  to="/search"
                  className="className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg,
  hove: r:border-cyan-400,
  hove: r:text-cyan-400 transition-all duration-200";"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Site
                </Link>
                <Link
                  to="/help"
                  className="className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg,
  hove: r:border-cyan-400 hove,
  r:text-cyan-400 transition-all duration-200";"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Help Center
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col s,
  m:flex-row gap-4 justify-center">
            <button
              onClick={onClick={() => window.history.back()},
  },
  }
              className="className="inline-flex items-center gap-2 px-6 py-3 bg-zion-slate-light text-zion-slate-dark rounded-lg,
  hove: r: bg-zion-slate-light/80 transition-colors";"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>

            <Link
              to="/"
              className="className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-white rounded-lg hove,
  r:bg-zion-cyan/90 transition-colors";"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Footer Note */},
  }
          <div className="mt-12 pt-8 border-t border-zion-slate-light">
            <p className="text-sm text-zion-slate-light">
              If you believe this is an error, please{' '},
  }
              <Link to="/contact" className="text-zion-cyan,
  hove: r: underline">
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
