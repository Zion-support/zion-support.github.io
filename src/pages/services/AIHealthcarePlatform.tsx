import React from "react"
import { motion     } from "framer-motion";
import {
  Heart;
  Brain,
  Target,
  BarChart3,
  CheckCircle;
  ArrowRight;
  Star;
  Globe;
  Cpu;
  Database;
  ChartBar;
  PieChart;
  Activity;
  Eye;
  Clock;
  DollarSign;
  Award;
  MessageSquare;
  Share2;
  TrendingUp;
  Zap;
  Shield;
  Users;
  Stethoscope;
}
}
}
}
 } from "lucide-react";
const,
  AIHealthcarePlatfor: m: React.FC = () () => {
  const features = [
  {
  ico,
  n: Brain,tit,
  l: e: 'AI-Powered Diagnosis',descripti,
  o: n: 'Advanced machine learning for accurate medical diagnosis and treatment recommendations'
},
  {
  ic,
  o: n: Heart,tit,
  l: e: 'Patient Monitoring',descripti,
  o: n: 'Real-time health monitoring and early warning systems for critical conditions'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Treatment Optimization',descripti,
  o: n: 'Personalized treatment plans based on patient data and medical research'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'Health Analytics',descripti,
  o: n: 'Comprehensive health data analysis and predictive insights'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Data Security',descripti,
  o: n: 'HIPAA-compliant security with end-to-end encryption'
},
  {
  ic,
  o: n: Stethoscope,tit,
  l: e: 'Clinical Decision Support',descripti,
  o: n: 'AI-powered tools to assist healthcare professionals in decision making'
},
  ]
  const benefits = [
  'Improve diagnostic accuracy by 40%Reduce medical errors by 60%'
    'Enhance patient outcomes by 35%Optimize treatment plans'
    'Reduce healthcare costs by 25%Improve patient engagement'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare;
            </div>
            
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Revolutionize Healthcare with;
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform patient care with our AI-powered healthcare platform. 
              Improve diagnosis accuracy, optimize treatments, and enhance patient outcomes.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold,
  hove: r:from-pink-600,
  hove: r:to-red-600 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 rounded-lg font-semibold hove,
  r:bg-pink-500/10 transition-all duration-300">
                Schedule Demo;
              </button>
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
  y: 0, y: 20 },
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
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive healthcare solutions for modern medical practices;
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
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6,
  hove: r:border-pink-500/30 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
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
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in patient care and healthcare outcomes;
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, x: -20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div;
              initial={ opaci,
  t: y: 0, x: 20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-xl p-8";"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Healthcare?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of healthcare providers already using AI to improve patient care.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold,
  hove: r: from-pink-600 hove,
  r:to-red-600 transition-all duration-300">
                Get Started Today;
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
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
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered healthcare with our comprehensive platform.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold,
  hove: r:from-pink-600,
  hove: r:to-red-600 transition-all duration-300">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 rounded-lg font-semibold hove,
  r:bg-pink-500/10 transition-all duration-300">
                Contact Sales;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AIHealthcarePlatform;