import React from "react"
import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
const DigitalTransformation = () () => {
    const transformationServices = [
  {
  tit,
  l: e: "Process Automation",descripti,
  o: n: "Streamline operations with intelligent automation solutions",featur,
  e: s: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"]
            ic,
  o: n: "🤖"
},
  {
  tit,
  l: e: "Workflow Optimization",descripti,
  o: n: "Redesign and optimize business workflows for maximum efficiency",featur,
  e: s: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"]
            ic,
  o: n: "📊"
},
  {
  tit,
  l: e: "Change Management",descripti,
  o: n: "Guide your organization through digital transformation with expert change management",featur,
  e: s: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"]
            ic,
  o: n: "🔄"
},
  {
  tit,
  l: e: "Business Process Optimization",descripti,
  o: n: "Streamline operations and improve efficiency through digital workflows",featur,
  e: s: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"]
            ic,
  o: n: "⚡"
},
  {
  tit,
  l: e: "Customer Experience Enhancement",descripti,
  o: n: "Create seamless digital experiences that delight your customers",featur,
  e: s: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"]
            ic,
  o: n: "🎯"
},
  {
  tit,
  l: e: "Data & Analytics Strategy",descripti,
  o: n: "Leverage data insights to drive informed business decisions",featur,
  e: s: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"]
            ic,
  o: n: "📊"
},
  {
  tit,
  l: e: "Technology Infrastructure",descripti,
  o: n: "Modernize your technology stack for scalability and performance",featur,
  e: s: ["Cloud Migration", "API Integration", "Microservices", "DevOps Practices"]
            ic,
  o: n: "🏗️"
},
  ]
    const benefits = [
  "Increased operational efficiency by 50%"
        "Enhanced customer experience and satisfaction"
        "Reduced operational costs and waste"
        "Improved decision-making with real-time data"
        "Competitive advantage in the digital marketplace"
]
    const transformationApproach = [
  { st,
  e: p: "Assessment", ic,
  o: n: "🔍", descripti,
  o: n: "Evaluate current state and identify opportunities" },
  },
  { st,
  e: p: "Strategy", ic,
  o: n: "📋", descripti,
  o: n: "Develop comprehensive transformation roadmap" },
  },
  { st,
  e: p: "Implementation", ic,
  o: n: "🚀", descripti,
  o: n: "Execute changes with agile methodology" },
  },
  { st,
  e: p: "Optimization", ic,
  o: n: "📈", descripti,
  o: n: "Continuous improvement and scaling" },
  },
  ]
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <SEO title="Digital Transformation - Zion Tech Group" description="Transform your business for the digital age with our comprehensive digital transformation services." keywords="digital transformation, process automation, digital strategy, change management, performance optimization" canonical="htt,
  p: s://ziontechgroup.com/services/digital-transformation"/>

      {/* Hero Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl,
  m: d:text-6xl font-bold mb-6" initial={ opacit,
  y: 0, y: -20 },
  } animate={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  }>
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Transformation
            </span>
          </motion.h1>
          <motion.p className="text-xl,
  m: d: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" initial={ opacit,
  y: 0, y: 20 },
  } animate={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }>
            Embrace the future of business with our comprehensive digital transformation services 
            designed to modernize your operations and drive sustainable growth.
          </motion.p>
          <motion.div initial={ opaci,
  t: y: 0, y: 20 },
  } animate={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 transform hove,
  r:scale-105">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2"/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our Transformation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end digital transformation solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (<motion.div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20,
  hove: r: border-white/40 transition-all duration-300,
  hove: r:transform,
  hove: r:scale-105" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } viewport={ on,
  c: e: true },
  }>
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key,
  Feature: s:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (<li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature},
  }
                      </li>))}
                  </ul>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock new opportunities and competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            <motion.div className="text-center" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6 },
  } viewport={ on,
  c: e: true },
  }>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Increased Efficiency</h3>
              <p className="text-gray-300">Streamlined processes and automated workflows</p>
            </motion.div>
            
            <motion.div className="text-center" initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  } viewport={ on,
  c: e: true },
  }>
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Better Customer Experience</h3>
              <p className="text-gray-300">Enhanced engagement and satisfaction</p>
            </motion.div>
            
            <motion.div className="text-center" initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  } viewport={ on,
  c: e: true },
  }>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Insights</h3>
              <p className="text-gray-300">Informed decision making and strategy</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our Transformation Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {transformationApproach.map((step, index) => (<motion.div key={index} className="text-center" initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } viewport={ on,
  c: e: true },
  }>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {step.icon},
  }
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.step}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how digital transformation can drive your business forward
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-700 hove,
  r:to-cyan-700 transition-all duration-300">
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2"/>
          </Link>
        </div>
      </section>
    </div>)
}
export default DigitalTransformation