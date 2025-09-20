import React from "react"
import { motion } from "framer-motion"
import {
  Building
  Heart,
  Factory,
  DollarSign,
  Car,
  Zap
  Globe
  Star
  Brain
  Cloud
  Shield
  TrendingUp
} from "lucide-react"
import { Link } from "react-router-dom"
const,
  IndustrySolution: s: React.FC = () () => {
  const industries = [
  {
  titl,
  e: 'Healthcare',descripti,
  o: n: 'AI-powered healthcare solutions for improved patient care and operational efficiency.',ic,
  o: n: Heart,pa,
  t: h: '/solutions/healthcare',solutio,
  n: s: [['AI Healthcare AnalyticsPredictive Diagnostics', 'Patient Care OptimizationCompliance Management'],
  ],
  },
  {
  tit,
  l: e: 'Manufacturing',descripti,
  o: n: 'Smart manufacturing solutions with IoT, AI, and automation technologies.'
      ic,
  o: n: Factory,pa,
  t: h: '/manufacturing-solutions',solutio,
  n: s: [['Smart Factory AutomationPredictive Maintenance', 'Quality ControlSupply Chain Optimization'],
  ],
  },
  {
  tit,
  l: e: 'Financial Services',descripti,
  o: n: 'Advanced financial technology solutions for risk management and operational efficiency.',ic,
  o: n: DollarSign,pa,
  t: h: '/financial-solutions',solutio,
  n: s: [['AI Financial AnalyticsRisk Management', 'Trading AlgorithmsCompliance Automation'],
  ],
  },
  {
  tit,
  l: e: 'Automotive',descripti,
  o: n: 'Connected vehicle solutions and automotive technology innovations.',ic,
  o: n: Car,pa,
  t: h: '/automotive-solutions',solutio,
  n: s: [['Connected VehiclesPredictive Maintenance', 'Fleet ManagementSafety Systems'],
  ],
  },
  {
  tit,
  l: e: 'Energy & Utilities',descripti,
  o: n: 'Smart grid and energy management solutions for sustainability and efficiency.',ic,
  o: n: Zap,pa,
  t: h: '/energy-solutions',solutio,
  n: s: [['Smart Grid ManagementEnergy Optimization', 'Predictive MaintenanceSustainability Analytics'],
  ],
  },
  {
  tit,
  l: e: 'Retail & E-commerce',descripti,
  o: n: 'Digital transformation solutions for modern retail and e-commerce operations.',ic,
  o: n: Globe,pa,
  t: h: '/retail-solutions',solutio,
  n: s: [['Customer AnalyticsInventory Management', 'PersonalizationSupply Chain Optimization'],
  ],
  },
  ]

  const benefits = [
  {
  tit,
  l: e: 'Industry Expertise',descripti,
  o: n: 'Deep understanding of industry-specific challenges and requirements',ic,
  o: n: Brain
},
  {
  tit,
  l: e: 'Customized Solutions',descripti,
  o: n: 'Tailored technology solutions for your specific industry needs',ic,
  o: n: Building
},
  {
  tit,
  l: e: 'Proven Results',descripti,
  o: n: 'Track record of successful implementations across industries',ic,
  o: n: Star
},
  {
  tit,
  l: e: 'Future-Ready',descripti,
  o: n: 'Scalable solutions that grow with your business',ic,
  o: n: TrendingUp
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
          <motion.div
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
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers industry-specific technology solutions that address unique challenges 
              and drive transformation across diverse sectors. From healthcare to manufacturing, we understand your industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div
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
            Why Choose Our Industry Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our deep industry knowledge combined with cutting-edge technology delivers measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
  <motion.div
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

      {/* Industries Grid */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div
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
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed specifically for your industry challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
  <motion.div
              key={industry.title},
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
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {industry.description},
  }
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Solution: s:</h4>
                <ul className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
  <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={industry.path},
  }
                className="className="inline-flex items-center space-x-2 text-cyan-400,
  hove: r: text-cyan-300 transition-colors duration-200 group";"
              >
                <span className="font-medium">Learn More</span>
                <TrendingUp className="w-4 h-4 group-hove,
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
        <motion.div
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
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 transition-all duration-200,
  transform: hover:scale-105";"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-200";"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default IndustrySolutions