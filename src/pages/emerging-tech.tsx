import React from "react"
import { motion   } from "framer-motion";
import {
  Atom;
  Brain,
  Network,
  Satellite,
  TrendingUp,
  Leaf;
  Zap;
  Shield;
  Cloud;
  Globe;
  Rocket;
  Star;
}
}
 } from "lucide-react";
import { Link   } from "react-router-dom";
const,
  EmergingTec: h: React.FC = () () => {
  const technologies = [
  {
  titl,
  e: 'Quantum Computing',descripti,
  o: n: 'Revolutionary quantum computing solutions for complex problem-solving and optimization.',ic,
  o: n: Atom,pa,
  t: h: '/services/quantum-computing',featur,
  e: s: [['Quantum algorithmsOptimization problems', 'CryptographyMachine learning'],
  ],
  },
  {
  tit,
  l: e: 'IoT Edge Computing',descripti,
  o: n: 'Next-generation IoT solutions with edge computing capabilities for real-time processing.',ic,
  o: n: Network,pa,
  t: h: '/services/iot-edge-computing',featur,
  e: s: [['Real-time processingLow latency', 'Edge AISmart sensors'],
  ],
  },
  {
  tit,
  l: e: 'AI Quantum Hybrid Platform',descripti,
  o: n: 'Combining AI and quantum computing for unprecedented computational power.',ic,
  o: n: Brain,pa,
  t: h: '/services/ai-quantum-hybrid-platform',featur,
  e: s: [['Hybrid algorithmsQuantum ML', 'AI optimizationQuantum AI'],
  ],
  },
  {
  tit,
  l: e: 'Space Technology',descripti,
  o: n: 'Cutting-edge space technology solutions for satellite and aerospace applications.',ic,
  o: n: Satellite,pa,
  t: h: '/space-tech',featur,
  e: s: [['Satellite systemsAerospace solutions', 'Space dataOrbital mechanics'],
  ],
  },
  {
  tit,
  l: e: 'Quantum Machine Learning',descripti,
  o: n: 'Quantum-enhanced machine learning algorithms for superior pattern recognition.',ic,
  o: n: Atom,pa,
  t: h: '/services/quantum-machine-learning',featur,
  e: s: [['Quantum neural networksPattern recognition', 'OptimizationQuantum algorithms'],
  ],
  },
  {
  tit,
  l: e: 'AI Predictive Maintenance',descripti,
  o: n: 'AI-powered predictive maintenance systems for industrial equipment and machinery.',ic,
  o: n: TrendingUp,pa,
  t: h: '/services/ai-predictive-maintenance',featur,
  e: s: [['Equipment monitoringPredictive analytics', 'Maintenance schedulingCost optimization'],
  ],
  },
  {
  tit,
  l: e: 'Sustainable Technology',descripti,
  o: n: 'Green technology solutions for environmental sustainability and energy efficiency.',ic,
  o: n: Leaf,pa,
  t: h: '/services/sustainable-technology',featur,
  e: s: [['Energy efficiencyGreen computing', 'Carbon reductionSustainable AI'],
  ],
  },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */},
  }
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[si,
  z: e: 50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4,
  s: m:px-6,
  l: g:px-8 pt-32 pb-16">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Emerging Technologies;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the future of technology with Zion Tech Group's cutting-edge emerging technology solutions. 
              From quantum computing to sustainable AI, we're pushing the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
  <motion.div;
              key={tech.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6,
  hove: r: border-cyan-400/50 transition-all duration-300 group";"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hove,
  r:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {tech.description},
  }
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Feature: s:</h4>
                <ul className="space-y-1">
                  {tech.features.map((feature, idx) => (
  <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link;
                to={tech.path},
  }
                className="className="inline-flex items-center space-x-2 text-cyan-400,
  hove: r: text-cyan-300 transition-colors duration-200 group";"
              >
                <span className="font-medium">Learn More</span>
                <Zap className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div;
          initial={ opacit,
  y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.5 },
  }
          className="className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how these emerging technologies can transform your business and give you a competitive edge.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link;
              to="/contact"
              className="className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 transition-all duration-200,
  transform: hover:scale-105";"
            >
              Get Started;
            </Link>
            <Link;
              to="/services"
              className="className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-200";"
            >
              View All Services;
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default EmergingTech;