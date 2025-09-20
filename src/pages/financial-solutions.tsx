import React from "react"
import { motion   } from "framer-motion";
import {
  DollarSign;
  TrendingUp,
  Shield,
  BarChart3,
  Brain,
  Zap;
  Lock;
  Eye;
  Cloud;
  Star;
  Calculator;
  PieChart;
}
}
 } from "lucide-react";
import { Link   } from "react-router-dom";
const,
  FinancialSolution: s: React.FC = () () => {
  const solutions = [
  {
  titl,
  e: 'AI Financial Analytics',descripti,
  o: n: 'Advanced AI-powered analytics for comprehensive financial insights and decision-making.',ic,
  o: n: BarChart3,featur,
  e: s: [['Real-time analyticsPredictive modeling', 'Risk assessmentPerformance tracking'],
  ],
  },
  {
  tit,
  l: e: 'AI Financial Risk Management',descripti,
  o: n: 'Intelligent risk assessment and management systems for financial institutions.',ic,
  o: n: Shield,featur,
  e: s: [['Risk modelingCompliance monitoring', 'Fraud detectionPortfolio optimization'],
  ],
  },
  {
  tit,
  l: e: 'AI Financial Trading',descripti,
  o: n: 'AI-driven trading algorithms and market analysis for optimal investment decisions.',ic,
  o: n: TrendingUp,featur,
  e: s: [['Algorithmic tradingMarket analysis', 'Portfolio managementRisk mitigation'],
  ],
  },
  {
  tit,
  l: e: 'FinOps Advisor',descripti,
  o: n: 'Cloud financial operations optimization for cost management and efficiency.',ic,
  o: n: Calculator,featur,
  e: s: [['Cost optimizationResource management', 'Budget planningROI analysis'],
  ],
  },
  {
  tit,
  l: e: 'Cloud FinOps Optimizer',descripti,
  o: n: 'Comprehensive cloud financial operations management and optimization.',ic,
  o: n: Cloud,featur,
  e: s: [['Cloud cost managementResource optimization', 'Budget trackingEfficiency metrics'],
  ],
  },
  {
  tit,
  l: e: 'AI Compliance Assistant',descripti,
  o: n: 'Automated compliance monitoring and reporting for financial regulations.',ic,
  o: n: Lock,featur,
  e: s: [['Regulatory complianceAutomated reporting', 'Audit trailsRisk monitoring'],
  ],
  },
  ]

  const benefits = [
  {
  tit,
  l: e: 'Risk Mitigation',descripti,
  o: n: 'Advanced AI algorithms identify and mitigate financial risks',ic,
  o: n: Shield;
},
  {
  tit,
  l: e: 'Cost Optimization',descripti,
  o: n: 'Intelligent systems optimize financial operations and reduce costs',ic,
  o: n: TrendingUp;
},
  {
  tit,
  l: e: 'Compliance Assurance',descripti,
  o: n: 'Automated compliance monitoring ensures regulatory adherence',ic,
  o: n: Lock;
},
  {
  tit,
  l: e: 'Data-Driven Decisions',descripti,
  o: n: 'AI-powered insights enable better financial decision-making',ic,
  o: n: Brain;
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
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Financial Solutions;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your financial operations with Zion Tech Group's AI-powered financial technology solutions. 
              From risk management to trading algorithms, we help financial institutions achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */},
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
  a: y: 0.2 },
  }
          className="className="text-center mb-12";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Financial Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI-powered financial technology delivers measurable results and competitive advantages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
  <motion.div;
              key={benefit.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 + index * 0.1 },
  }
              className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r:border-cyan-400/50 transition-all duration-300";"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */},
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
  a: y: 0.4 },
  }
          className="className="text-center mb-12";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Financial Solutions;
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial technology solutions designed for modern financial institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
  <motion.div;
              key={solution.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 + index * 0.1 },
  }
              className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6,
  hove: r: border-cyan-400/50 transition-all duration-300 group";"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hove,
  r:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {solution.description},
  }
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Feature: s:</h4>
                <ul className="space-y-1">
                  {solution.features.map((feature, idx) => (
  <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
  a: y: 0.6 },
  }
          className="className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our financial solutions can optimize your operations and drive growth.
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
export default FinancialSolutions;