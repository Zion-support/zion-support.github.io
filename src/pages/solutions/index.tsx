import React from "react"
import { Link     } from "react-router-dom";
import { motion     } from "framer-motion";
import {
  Brain;
  Shield,
  Cloud,
  Server,
  BarChart3,
  Users,
  ShoppingCart,
  Building;
  Heart;
  Globe;
  Zap;
  Atom;
  Network;
  TrendingUp;
  Rocket;
  Target;
  Star;
  Cpu;
  Lock;
  Eye;
  Activity;
  Workflow;
  Sparkles;
  Award;
}
}
}
}
 } from "lucide-react";
import { SEO     } from "../../components/SEO";
export default function Solutions() {
  const solutionCategories = [
  {
  tit,
  l: e: 'AI & Machine Learning Solutions',ic,
  o: n: Brain,descripti,
  o: n: 'Cutting-edge artificial intelligence and machine learning solutions for modern businesses',col,
  o: r: 'from-purple-500 to-pink-500',solutio,
  n: s: [
  { nam,
  e: 'AI Business Intelligence', hr,
  e: f: '/solutions/ai-business-intelligence', ic,
  o: n: BarChart3, descripti,
  o: n: 'Advanced analytics and insights powered by AI' },
  },
  { na,
  m: e: 'AI Content Generation', hr,
  e: f: '/solutions/ai-content-generation', ic,
  o: n: Users, descripti,
  o: n: 'Automated content creation and management' },
  },
  { na,
  m: e: 'AI-Powered Security', hr,
  e: f: '/solutions/ai-powered-security', ic,
  o: n: Shield, descripti,
  o: n: 'Intelligent threat detection and prevention' },
  },
  { na,
  m: e: 'AI Autonomous Research', hr,
  e: f: '/solutions/ai-autonomous-research', ic,
  o: n: Brain, descripti,
  o: n: 'Self-directed research and analysis systems' },
  },
  { na,
  m: e: 'AI Autonomous Business', hr,
  e: f: '/solutions/ai-autonomous-business', ic,
  o: n: Building, descripti,
  o: n: 'End-to-end business automation solutions' },
  },
  { na,
  m: e: 'AI Autonomous Ecosystem', hr,
  e: f: '/solutions/ai-autonomous-ecosystem', ic,
  o: n: Globe, descripti,
  o: n: 'Comprehensive AI ecosystem management' },
  },
  ],
  },
  {
  tit,
  l: e: 'Enterprise Solutions',ic,
  o: n: Building,descripti,
  o: n: 'Scalable enterprise-grade solutions for large organizations',col,
  o: r: 'from-blue-500 to-cyan-500',solutio,
  n: s: [
  { nam,
  e: 'Enterprise Solutions', hr,
  e: f: '/solutions/enterprise', ic,
  o: n: Building, descripti,
  o: n: 'Comprehensive enterprise technology solutions' },
  },
  { na,
  m: e: 'Financial Solutions', hr,
  e: f: '/solutions/financial-solutions', ic,
  o: n: TrendingUp, descripti,
  o: n: 'Advanced financial technology and analytics' },
  },
  { na,
  m: e: 'Government Solutions', hr,
  e: f: '/solutions/government-solutions', ic,
  o: n: Shield, descripti,
  o: n: 'Secure government technology infrastructure' },
  },
  { na,
  m: e: 'Manufacturing Solutions', hr,
  e: f: '/solutions/manufacturing-solutions', ic,
  o: n: Cpu, descripti,
  o: n: 'Smart manufacturing and Industry 4.0' },
  },
  { na,
  m: e: 'Retail Solutions', hr,
  e: f: '/solutions/retail-solutions', ic,
  o: n: ShoppingCart, descripti,
  o: n: 'Digital retail transformation and e-commerce' },
  },
  ],
  },
  {
  tit,
  l: e: 'Healthcare Solutions',ic,
  o: n: Heart,descripti,
  o: n: 'Innovative healthcare technology solutions for better patient care',col,
  o: r: 'from-green-500 to-emerald-500',solutio,
  n: s: [
  { nam,
  e: 'Healthcare Solutions', hr,
  e: f: '/solutions/healthcare', ic,
  o: n: Heart, descripti,
  o: n: 'Comprehensive healthcare technology solutions' },
  },
  { na,
  m: e: 'AI Healthcare Platform', hr,
  e: f: '/services/ai-healthcare-platform', ic,
  o: n: Brain, descripti,
  o: n: 'AI-powered healthcare management systems' },
  },
  { na,
  m: e: 'Digital Health Solutions', hr,
  e: f: '/services/digital-health', ic,
  o: n: Activity, descripti,
  o: n: 'Digital transformation for healthcare providers' },
  },
  { na,
  m: e: 'Telemedicine Solutions', hr,
  e: f: '/services/telemedicine', ic,
  o: n: Users, descripti,
  o: n: 'Remote healthcare delivery platforms' },
  },
  ],
  },
  {
  tit,
  l: e: 'Quantum Computing Solutions',ic,
  o: n: Atom,descripti,
  o: n: 'Next-generation quantum computing and hybrid AI solutions',col,
  o: r: 'from-indigo-500 to-purple-500',solutio,
  n: s: [
  { nam,
  e: 'Quantum Edge Computing', hr,
  e: f: '/solutions/quantum-edge-computing', ic,
  o: n: Network, descripti,
  o: n: 'Quantum-powered edge computing solutions' },
  },
  { na,
  m: e: 'Quantum Neural Network', hr,
  e: f: '/solutions/quantum-neural-network', ic,
  o: n: Brain, descripti,
  o: n: 'Quantum neural network architectures' },
  },
  { na,
  m: e: 'Quantum AI Hybrid Platform', hr,
  e: f: '/services/ai-quantum-hybrid-platform', ic,
  o: n: Atom, descripti,
  o: n: 'Combined quantum and AI computing' },
  },
  { na,
  m: e: 'Quantum Machine Learning', hr,
  e: f: '/services/quantum-machine-learning', ic,
  o: n: Brain, descripti,
  o: n: 'ML algorithms optimized for quantum systems' },
  },
  ],
  },
  {
  tit,
  l: e: 'Cybersecurity & Privacy',ic,
  o: n: Shield,descripti,
  o: n: 'Advanced security solutions for the digital age',col,
  o: r: 'from-red-500 to-orange-500',solutio,
  n: s: [
  { nam,
  e: 'Zero Trust Network Architecture', hr,
  e: f: '/solutions/zero-trust-network-architecture', ic,
  o: n: Lock, descripti,
  o: n: 'Modern zero-trust security frameworks' },
  },
  { na,
  m: e: 'AI Cybersecurity Platform', hr,
  e: f: '/services/ai-cybersecurity-platform', ic,
  o: n: Shield, descripti,
  o: n: 'AI-powered threat detection and response' },
  },
  { na,
  m: e: 'Privacy & Compliance', hr,
  e: f: '/services/privacy-compliance', ic,
  o: n: Lock, descripti,
  o: n: 'GDPR, CCPA, and regulatory compliance' },
  { na,
  m: e: 'Incident Response', hr,
  e: f: '/services/incident-response', ic,
  o: n: Activity, descripti,
  o: n: 'Rapid security incident response systems' },
  },
  ],
  },
  {
  tit,
  l: e: 'Digital Transformation',ic,
  o: n: Rocket,descripti,
  o: n: 'Comprehensive digital transformation solutions for modern businesses',col,
  o: r: 'from-yellow-500 to-orange-500',solutio,
  n: s: [
  { nam,
  e: 'Digital Twin Solutions', hr,
  e: f: '/services/digital-twin', ic,
  o: n: Eye, descripti,
  o: n: 'Virtual system replicas and simulation' },
  },
  { na,
  m: e: 'IoT Edge Computing', hr,
  e: f: '/services/iot-edge-computing', ic,
  o: n: Network, descripti,
  o: n: 'Smart device networks and edge processing' },
  },
  { na,
  m: e: 'Sustainable Technology', hr,
  e: f: '/services/sustainable-technology', ic,
  o: n: Globe, descripti,
  o: n: 'Green IT and sustainability solutions' },
  },
  { na,
  m: e: '5G Enterprise Solutions', hr,
  e: f: '/services/5g-enterprise', ic,
  o: n: Network, descripti,
  o: n: 'Next-generation enterprise connectivity' },
  },
  ],
  },
  ]
  const featuredSolutions = [
  {
  na,
  m: e: 'AI Business Intelligence',hr,
  e: f: '/solutions/ai-business-intelligence',ic,
  o: n: BarChart3,descripti,
  o: n: 'Transform your data into actionable insights with AI-powered analytics',featur,
  e: d: true;
},
  {
  na,
  m: e: 'Quantum Computing Solutions',hr,
  e: f: '/solutions/quantum-computing',ic,
  o: n: Atom,descripti,
  o: n: 'Leverage the power of quantum computing for complex problem-solving',featur,
  e: d: true;
},
  {
  na,
  m: e: 'Enterprise Digital Transformation',hr,
  e: f: '/solutions/enterprise',ic,
  o: n: Building,descripti,
  o: n: 'Comprehensive digital transformation for enterprise organizations',featur,
  e: d: true;
},
  {
  na,
  m: e: 'AI-Powered Security',hr,
  e: f: '/solutions/ai-powered-security',ic,
  o: n: Shield,descripti,
  o: n: 'Next-generation cybersecurity powered by artificial intelligence',featur,
  e: d: true;
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions including AI, quantum computing, enterprise solutions, healthcare technology, and digital transformation services."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6">
              Comprehensive;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge technology solutions designed to transform your business. 
              From AI and quantum computing to enterprise solutions and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-500,
  hove: r:to-blue-600 transition-all duration-300,
  hove: r:scale-105 shadow-lg,
  hove: r:shadow-cyan-400/25";"
              >
                Get Started;
              </Link>
              <Link;
                to="/services"
                className="className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-300";"
              >
                View All Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Solutions */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming industries worldwide;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {featuredSolutions.map((solution, index) => (
  <motion.div;
                key={solution.name},
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
                className="className="group";"
              >
                <Link;
                  to={solution.href},
  }
                  className="className="block p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl,
  hove: r: border-cyan-400/50 transition-all duration-300,
  hove: r:scale-105 group-hov,
  e: r:shadow-2xl group-hov,
  e: r:shadow-cyan-400/20";"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hov,
  e: r:from-cyan-400/40 group-hov,
  e: r:to-blue-500/40 transition-all duration-300">
                    <solution.icon className="w-6 h-6 text-cyan-400 group-hov,
  e: r:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hove,
  r:text-cyan-400 transition-colors">
                    {solution.name},
  }
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {solution.description},
  }
                  </p>
                  {solution.featured && (
  <div className="mt-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-medium">Featured</span>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solution Categories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category;
            </p>
          </motion.div>

          <div className="space-y-12">
            {solutionCategories.map((category, categoryIndex) => (
  <motion.div;
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
  a: y: 0.1 * categoryIndex },
  }
                className="className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8";"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                  {category.solutions.map((solution, solutionIndex) => (
  <Link;
                      key={solution.name},
  }
                      to={solution.href},
  }
                      className="className="group p-6 bg-slate-700/30 border border-slate-600/30 rounded-xl,
  hove: r: border-cyan-400/50,
  hove: r:bg-slate-700/50 transition-all duration-300,
  hove: r:scale-105";"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hov,
  e: r:from-cyan-400/40 group-hov,
  e: r:to-blue-500/40 transition-all duration-300">
                          <solution.icon className="w-5 h-5 text-cyan-400 group-hov,
  e: r:text-cyan-300 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hove,
  r:text-cyan-400 transition-colors">
                            {solution.name},
  }
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {solution.description},
  }
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you implement the right solutions for your organization's unique needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link;
                  to="/contact"
                  className="className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-cyan-500,
  hove: r:to-blue-600 transition-all duration-300,
  hove: r:scale-105 shadow-lg,
  hove: r:shadow-cyan-400/25";"
                >
                  Schedule a Consultation;
                </Link>
                <Link;
                  to="/request-quote"
                  className="className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-300";"
                >
                  Request a Quote;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}