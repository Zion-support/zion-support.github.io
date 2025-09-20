import React from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  MessageCircle;
  Users,
  Ticket,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter;
  ArrowRight;
  Star;
  Globe;
  Cpu;
  Shield;
  Cloud;
  Zap;
  Target;
  Activity;
  BarChart3;
  Settings;
  Bell;
  Download;
  Upload;
  RefreshCw;
  Eye;
  Lock;
  Database;
  Network;
  Smartphone;
  Monitor;
  Headphones;
  Mail;
  Phone;
  Video;
  FileText;
  Calendar;
  Tag;
  UserCheck;
  UserX;
  TrendingUp;
  PieChart;
  LineChart;
}
}
 } from "lucide-react";
export default function Helpdesk() {
  const features = [
  {
  ic,
  o: n: Ticket,tit,
  l: e: "Ticket Management",descripti,
  o: n: "Comprehensive ticket tracking and resolution workflow",col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  ic,
  o: n: Users,tit,
  l: e: "Team Collaboration",descripti,
  o: n: "Multi-agent support with role-based access control",col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  ic,
  o: n: Clock,tit,
  l: e: "SLA Management",descripti,
  o: n: "Service level agreement monitoring and alerts",col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  ic,
  o: n: Search,tit,
  l: e: "Knowledge Base",descripti,
  o: n: "Self-service portal with intelligent search",col,
  o: r: "from-orange-500 to-red-500"
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Analytics & Reporting",descripti,
  o: n: "Performance metrics and customer satisfaction tracking",col,
  o: r: "from-indigo-500 to-blue-500"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Enterprise-grade security and data protection",col,
  o: r: "from-red-500 to-pink-500"
},
  ]
  const capabilities = [
  {
  tit,
  l: e: "Multi-Channel Support",descripti,
  o: n: "Handle support requests across email, chat, phone, and social media"
      ic,
  o: n: Globe,benefi,
  t: s: [["Unified inbox", "Channel routing", "Response templates"],
  ],
  },
  {
  tit,
  l: e: "AI-Powered Automation",descripti,
  o: n: "Intelligent ticket routing and automated responses",ic,
  o: n: Cpu,benefi,
  t: s: [["Smart categorization", "Auto-assignment", "Predictive analytics"],
  ],
  },
  {
  tit,
  l: e: "Customer Self-Service",descripti,
  o: n: "Empower customers with knowledge base and FAQ systems",ic,
  o: n: Users,benefi,
  t: s: [["Knowledge management", "Community forums", "Video tutorials"],
  ],
  },
  {
  tit,
  l: e: "Performance Analytics",descripti,
  o: n: "Monitor team performance and customer satisfaction metrics",ic,
  o: n: TrendingUp,benefi,
  t: s: [["Response time tracking", "Resolution rates", "CSAT scores"],
  ],
  },
  ]

  const integrations = [
  "Slack", "Microsoft Teams", "Zendesk", "Salesforce", "Jira",
  "ServiceNow", "HubSpot", "Intercom", "Freshdesk", "Help Scout"
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h1 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6">
              Helpdesk Platform;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline customer support operations with our comprehensive helpdesk platform. 
              Deliver exceptional customer experiences with intelligent automation and powerful analytics.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25 flex items-center space-x-2";"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link;
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-cyan-400/50 flex items-center space-x-2";"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
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
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Powerful Helpdesk Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive helpdesk platform provides everything you need to deliver exceptional customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-cyan-400/40 transition-all duration-300";"
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

      {/* Capabilities Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
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
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Platform Capabilities;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our helpdesk platform can transform your customer support operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
  <motion.div;
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
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8,
  hove: r: bg-white/10 hove,
  r:border-cyan-400/40 transition-all duration-300";"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit},
  }
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
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
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Seamless Integrations;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 m,
  d:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
  <motion.div;
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
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 text-center,
  hove: r: bg-white/10 hove,
  r:border-cyan-400/40 transition-all duration-300";"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
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
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the customer support revolution with Zion Tech Group. Our helpdesk platform is designed to drive efficiency;
              improve customer satisfaction, and scale your support operations.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 text-white font-bold rounded-xl transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25 flex items-center space-x-2";"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link;
                to="/services"
                className="className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30,
  hove: r:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hove,
  r:border-cyan-400/50 flex items-center space-x-2";"
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