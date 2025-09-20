import React from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Building2;
  Building,
  Rocket,
  Shield,
  Heart,
  TrendingUp,
  Users,
  Globe,
  Factory,
  City;
  CheckCircle;
  ArrowRight;
  Star;
  Zap;
  Brain;
  Cloud;
  Cpu;
  Lock;
  Database;
  Network;
  BarChart3;
  Target;
  Award;
  Code;
  Truck;
  Server;
  Smartphone;
  Eye;
  Leaf;
  Scale;
  Car;
  Home;
  ShoppingCart;
  Factory as FactoryIcon;
  City as CityIcon;
}
}
 } from "lucide-react";
import { Link   } from "react-router-dom";
export default function Solutions() {
  const solutions = [
  {
  na,
  m: e: 'Enterprise Solutions',ic,
  o: n: Building2,descripti,
  o: n: 'Large-scale business transformations and digital modernization',featur,
  e: s: [
  'AI-Powered Process AutomationEnterprise Data Analytics'
        'Cloud Migration & OptimizationDigital Twin Implementation'
        'Cybersecurity & ComplianceLegacy System Modernization'
]
      benefi,
  t: s: [
  '50% reduction in operational costs3x faster decision making'
        '99.9% system uptimeEnhanced security posture'
]
      colo,
  r: 'from-blue-500 to-cyan-500',featur,
  e: d: true;
},
  {
  na,
  m: e: 'SMB Solutions',ic,
  o: n: Building,descripti,
  o: n: 'Small to medium business growth and efficiency solutions',featur,
  e: s: [
  'AI-Powered Marketing AutomationCustomer Relationship Management'
        'Business Intelligence DashboardsProcess Optimization'
        'Cloud Infrastructure SetupCybersecurity Protection'
]
      benefi,
  t: s: [
  '40% increase in productivityImproved customer retention'
        'Reduced IT overheadScalable growth foundation'
]
      colo,
  r: 'from-purple-500 to-pink-500',featur,
  e: d: false;
},
  {
  na,
  m: e: 'Startup Solutions',ic,
  o: n: Rocket,descripti,
  o: n: 'Accelerate growth and build scalable foundations',featur,
  e: s: [
  'MVP Development & LaunchAI-Powered Growth Hacking'
        'Scalable Infrastructure DesignData-Driven Decision Making'
        'Customer Acquisition AutomationInvestor-Ready Analytics'
]
      benefi,
  t: s: [
  '10x faster market validation3x user engagement increase'
        'Reduced time to marketInvestor-ready metrics'
]
      colo,
  r: 'from-green-500 to-emerald-500',featur,
  e: d: false;
},
  {
  na,
  m: e: 'Healthcare Solutions',ic,
  o: n: Heart,descripti,
  o: n: 'AI-powered healthcare innovation and patient care',featur,
  e: s: [
  'Medical Image AnalysisPatient Data Analytics'
        'Predictive DiagnosticsHealthcare Process Automation'
        'Compliance & SecurityTelemedicine Platforms'
]
      benefi,
  t: s: [
  '30% improvement in diagnostic accuracy40% faster patient processing'
        'Enhanced patient outcomesReduced healthcare costs'
]
      colo,
  r: 'from-red-500 to-pink-500',featur,
  e: d: false;
},
  {
  na,
  m: e: 'Manufacturing Solutions',ic,
  o: n: Factory,descripti,
  o: n: 'Smart manufacturing and Industry 4.0 transformation',featur,
  e: s: [
  'IoT Device IntegrationPredictive Maintenance'
        'Quality Control AutomationSupply Chain Optimization'
        'Digital Twin ImplementationEnergy Efficiency Management'
]
      benefi,
  t: s: [
  '25% reduction in downtime20% improvement in quality'
        '15% energy cost savingsReal-time production insights'
]
      colo,
  r: 'from-orange-500 to-red-500',featur,
  e: d: false;
},
  {
  na,
  m: e: 'Financial Services',ic,
  o: n: Shield,descripti,
  o: n: 'Secure, compliant, and innovative financial technology'
      featur,
  e: s: [
  'Fraud Detection & PreventionRisk Assessment & Management'
        'Regulatory ComplianceCustomer Experience Optimization'
        'Blockchain IntegrationReal-time Analytics'
]
      benefi,
  t: s: [
  '99.9% fraud detection accuracy60% faster risk assessment'
        'Full regulatory complianceEnhanced customer trust'
]
      colo,
  r: 'from-indigo-500 to-purple-500',featur,
  e: d: false;
},
  ]
  const industrySolutions = [
  {
  tit,
  l: e: 'Retail & E-commerce',descripti,
  o: n: 'Digital transformation for modern retail',ic,
  o: n: ShoppingCart,col,
  o: r: 'from-purple-500 to-pink-500',solutio,
  n: s: [['AI-Powered PersonalizationInventory Optimization', 'Customer AnalyticsOmnichannel Integration'],
  ],
  },
  {
  tit,
  l: e: 'Transportation & Logistics',descripti,
  o: n: 'Smart logistics and fleet management',ic,
  o: n: Truck,col,
  o: r: 'from-blue-500 to-cyan-500',solutio,
  n: s: [['Route OptimizationFleet Tracking', 'Predictive MaintenanceSupply Chain Analytics'],
  ],
  },
  {
  tit,
  l: e: 'Real Estate',descripti,
  o: n: 'Property technology and market insights',ic,
  o: n: Home,col,
  o: r: 'from-green-500 to-emerald-500',solutio,
  n: s: [['Market AnalysisProperty Valuation', 'Investment AnalyticsCustomer Relationship Management'],
  ],
  },
  {
  tit,
  l: e: 'Education',descripti,
  o: n: 'EdTech solutions for modern learning',ic,
  o: n: Brain,col,
  o: r: 'from-orange-500 to-red-500',solutio,
  n: s: [['Learning AnalyticsPersonalized Education', 'Administrative AutomationStudent Engagement'],
  ],
  },
  ]

  const technologyStack = [
  {
  catego,
  r: y: 'AI & Machine Learning',technologi,
  e: s: ['TensorFlowPyTorch', 'Scikit-learnOpenAI GPT', 'Computer VisionNLP']
      ic,
  o: n: Brain,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  catego,
  r: y: 'Cloud & Infrastructure',technologi,
  e: s: ['AWSAzure', 'Google CloudKubernetes', 'DockerTerraform']
      ic,
  o: n: Cloud,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  catego,
  r: y: 'Data & Analytics',technologi,
  e: s: ['Apache SparkHadoop', 'TableauPower BI', 'PythonR']
      ic,
  o: n: Database,col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  catego,
  r: y: 'Security & Compliance',technologi,
  e: s: ['Zero TrustSOC 2', 'GDPRHIPAA', 'Penetration TestingSecurity Monitoring']
      ic,
  o: n: Lock,col,
  o: r: 'from-red-500 to-orange-500'
},
  ]
  const successMetrics = [
  {
  metr,
  i: c: '500+',lab,
  e: l: 'Projects Delivered',descripti,
  o: n: 'Successfully completed projects across industries',ic,
  o: n: CheckCircle,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  metr,
  i: c: '99.9%',lab,
  e: l: 'Client Satisfaction',descripti,
  o: n: 'Consistently high client satisfaction ratings',ic,
  o: n: Star,col,
  o: r: 'from-yellow-500 to-orange-500'
},
  {
  metr,
  i: c: '50%',lab,
  e: l: 'Cost Reduction',descripti,
  o: n: 'Average cost savings for our clients',ic,
  o: n: TrendingUp,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  metr,
  i: c: '3x',lab,
  e: l: 'Performance Boost',descripti,
  o: n: 'Average performance improvement achieved',ic,
  o: n: Zap,col,
  o: r: 'from-purple-500 to-pink-500'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for businesses of all sizes. From AI-powered automation to cloud infrastructure, we help organizations transform and grow."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">
                <Building2 className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Technology;
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive technology solutions. From AI-powered;
              automation to cloud infrastructure, we help organizations of all sizes innovate and grow.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600,
  hove: r:from-blue-600,
  hove: r:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-blue-500/25";"
              >
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link;
                to="/case-studies"
                className="className="px-8 py-4 border-2 border-blue-400 text-blue-400,
  hove: r:bg-blue-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                View Case Studies;
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Solutions Grid */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to meet the unique needs of your business;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
  <motion.div;
                key={solution.name},
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
                className={`group relative p-8 rounded-2xl transition-all duration-300,
  hove: r: scale-105 ${
  solution.featured;
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-blue-400/50' 
                    : 'bg-slate-800/50 hove,
  r:bg-slate-800'
}`}
              >
                {solution.featured && (
  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured;
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2">Key,
  Feature: s:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
  <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature},
  }
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2">Key,
  Benefit: s:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
  <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit},
  }
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link;
                  to="/contact"
                  className="className="inline-flex items-center gap-2 text-blue-400,
  hove: r:text-blue-300 font-medium transition-colors";"
                >
                  Learn More;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions designed for the unique challenges of your industry;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
  <motion.div;
                key={solution.title},
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
                className="className="group p-8 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300,
  hove: r:scale-105 border border-slate-700/50 hove,
  r:border-blue-500/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-blue-400 transition-colors">
                  {solution.title},
  }
                </h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-2 mb-6">
                  {solution.solutions.map((item, idx) => (
  <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item},
  }
                    </div>
                  ))}
                </div>
                
                <Link;
                  to="/contact"
                  className="className="inline-flex items-center gap-2 text-blue-400,
  hove: r:text-blue-300 font-medium transition-colors";"
                >
                  Get Industry Solution;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Technology Stack;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies to deliver robust, scalable, and secure solutions;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {technologyStack.map((tech, index) => (
  <motion.div;
                key={tech.category},
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
                className="className="text-center p-6 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                
                <div className="space-y-2">
                  {tech.technologies.map((technology, idx) => (
  <div key={idx} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-2 rounded-lg">
                      {technology},
  }
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself - delivering measurable value to businesses across industries;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
  <motion.div;
                key={metric.label},
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
                className="className="text-center";"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-6`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-blue-400 mb-2">{metric.label}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
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
  l: g: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals. 
              Our experts are ready to create a customized plan for your organization.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600,
  hove: r:from-blue-600,
  hove: r:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-blue-500/25";"
              >
                Get Started Today;
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link;
                to="/case-studies"
                className="className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400,
  hove: r:bg-blue-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                View Success Stories;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}