import React from "react"
import { SEO } from "../../components/SEO"
import { motion } from "framer-motion"
import { Globe, Leaf, Zap, Shield, TrendingUp, Users, CheckCircle, Lightbulb, Database, Cloud } from "lucide-react"
export default function GreenIT() {
  const features = [
  {
  ic,
  o: n: Leaf,tit,
  l: e: 'Sustainable Infrastructure',descripti,
  o: n: 'Eco-friendly IT infrastructure solutions that reduce carbon footprint while maintaining performance.'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Energy Optimization',descripti,
  o: n: 'AI-powered energy management systems that optimize power consumption across your IT infrastructure.'
},
  {
  ic,
  o: n: Cloud,tit,
  l: e: 'Green Cloud Solutions',descripti,
  o: n: 'Carbon-neutral cloud computing options with renewable energy-powered data centers.'
},
  {
  ic,
  o: n: Database,tit,
  l: e: 'Efficient Data Management',descripti,
  o: n: 'Smart data storage and processing solutions that minimize energy consumption and waste.'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Environmental Compliance',descripti,
  o: n: 'Built-in compliance monitoring for environmental regulations and sustainability standards.'
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: 'Performance Monitoring',descripti,
  o: n: 'Real-time tracking of environmental impact and sustainability metrics for continuous improvement.'
},
  ]
  const benefits = [
  'Reduce carbon footprint by up to 70%Lower energy costs by 40-60%'
    'Meet sustainability compliance requirementsEnhance brand reputation and ESG scores'
    'Future-proof your IT infrastructureContribute to global climate goals'
]

  const solutions = [
  {
  tit,
  l: e: 'Green Data Centers',descripti,
  o: n: 'Energy-efficient data center design with renewable energy integration and advanced cooling systems.',ic,
  o: n: Database
},
  {
  tit,
  l: e: 'Sustainable Cloud Migration',descripti,
  o: n: 'Migrate to eco-friendly cloud platforms with carbon-neutral computing options.',ic,
  o: n: Cloud
},
  {
  tit,
  l: e: 'Energy Management Systems',descripti,
  o: n: 'AI-powered monitoring and optimization of IT infrastructure energy consumption.',ic,
  o: n: Zap
},
  {
  tit,
  l: e: 'Circular IT Practices',descripti,
  o: n: 'Implement recycling, refurbishment, and responsible disposal of IT equipment.'
      ic,
  o: n: Leaf
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Green IT Solutions - Zion Tech Group"
        description="Transform your IT infrastructure with sustainable, eco-friendly solutions. Reduce carbon footprint, lower energy costs, and meet sustainability goals."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
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
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Sustainable Technology
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Green IT Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your IT infrastructure with sustainable, eco-friendly solutions that reduce environmental impact 
              while improving performance and lowering costs.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg,
  hove: r:from-green-400,
  hove: r:to-emerald-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-green-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hove,
  r:bg-green-400/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Sustainable Technology Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our Green IT solutions combine environmental responsibility with cutting-edge technology 
              to deliver sustainable, high-performance IT infrastructure.
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-green-400/30 transition-all duration-200 hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Green IT Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From data centers to cloud migration, we offer end-to-end sustainable IT solutions 
              that align with your environmental and business objectives.
            </p>
          </motion.div>

          <div className="grid,
  m: d:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8,
  hove: r:border-green-400/30 transition-all duration-200";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{solution.description}</p>
                <button className="text-green-400,
  hove: r:text-green-300 font-medium transition-colors">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid,
  l: g: grid-cols-2 gap-12 items-center">
            <motion.div
              initial={ opacit,
  y: 0, x: -20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Environmental & Business Benefits
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our Green IT solutions deliver measurable benefits for both the environment and your business. 
                Reduce costs while making a positive impact on the planet.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={ opaci,
  t: y: 0, x: 20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              className="className="relative";"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Go Green Today</h3>
                  <p className="text-slate-300 mb-6">
                    Start your sustainability journey with our expert Green IT consultants.
                  </p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg,
  hove: r: from-green-400 hove,
  r:to-emerald-500 transition-all duration-200">
                    Get Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="max-w-3xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the sustainable technology revolution and make a positive impact on the environment 
              while improving your IT infrastructure.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg,
  hove: r:from-green-400,
  hove: r:to-emerald-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-green-500/20">
                Start Your Green Journey
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hove,
  r:bg-green-400/10 transition-all duration-200">
                Contact Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}