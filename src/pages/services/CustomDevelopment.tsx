import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Code
  Smartphone
  Globe
  Database
  Zap
  Shield
  Users
  Target
  ArrowRight
  CheckCircle
  Star
  Lightbulb
  TrendingUp
  Settings
  Workflow
  FileText
  Monitor
  BarChart3
  Rocket
  Building2
  Cpu
  Network
  GitFork
} from "lucide-react"
export default function CustomDevelopment() {
  const services = [
  {
  tit,
  l: e: 'Web Applications',descripti,
  o: n: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',ic,
  o: n: Globe,featur,
  e: s: [['Responsive DesignProgressive Web Apps', 'E-commerce SolutionsContent Management Systems'],
  ],
  },
  {
  tit,
  l: e: 'Mobile Applications',descripti,
  o: n: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',ic,
  o: n: Smartphone,featur,
  e: s: [['iOS DevelopmentAndroid Development', 'Cross-platform AppsApp Store Optimization'],
  ],
  },
  {
  tit,
  l: e: 'API Development',descripti,
  o: n: 'Robust and scalable APIs that enable seamless integration between systems and services.',ic,
  o: n: Network,featur,
  e: s: [['RESTful APIsGraphQL APIs', 'API DocumentationIntegration Support'],
  ],
  },
  {
  tit,
  l: e: 'System Integration',descripti,
  o: n: 'Seamlessly connect your existing systems and third-party services for improved efficiency.',ic,
  o: n: GitFork,featur,
  e: s: [['Legacy System IntegrationThird-party APIs', 'Data SynchronizationWorkflow Automation'],
  ],
  },
  ]

  const technologies = [
  {
  tit,
  l: e: 'Frontend',descripti,
  o: n: 'Modern frontend frameworks and libraries for responsive and interactive user interfaces.',ic,
  o: n: Monitor,sta,
  c: k: [['ReactVue.js', 'AngularTypeScript', 'Tailwind CSS'],
  ],
  },
  {
  tit,
  l: e: 'Backend',descripti,
  o: n: 'Robust backend technologies for scalable and secure applications.',ic,
  o: n: Cpu, // Changed from Server to,
  Cpu: stack: [['Node.jsPython', 'JavaC#', 'Go'],
  ],
  },
  {
  tit,
  l: e: 'Mobile',descripti,
  o: n: 'Cross-platform and native mobile development technologies.',ic,
  o: n: Smartphone,sta,
  c: k: [['React NativeFlutter', 'SwiftKotlin', 'Xamarin'],
  ],
  },
  {
  tit,
  l: e: 'Database',descripti,
  o: n: 'Modern database solutions for data storage and management.',ic,
  o: n: Database,sta,
  c: k: [['PostgreSQLMongoDB', 'MySQLRedis', 'Elasticsearch'],
  ],
  },
  ]

  const benefits = [
  {
  tit,
  l: e: 'Custom Solutions',descripti,
  o: n: 'Tailored software solutions designed specifically for your business needs and workflows.',ic,
  o: n: Target
},
  {
  tit,
  l: e: 'Scalability',descripti,
  o: n: 'Applications built to grow with your business and handle increasing demands.',ic,
  o: n: TrendingUp
},
  {
  tit,
  l: e: 'Security',descripti,
  o: n: 'Enterprise-grade security measures built into every application.',ic,
  o: n: Shield
},
  {
  tit,
  l: e: 'Support & Maintenance',descripti,
  o: n: 'Ongoing support and maintenance to ensure your applications run smoothly.',ic,
  o: n: Settings
},
  ]
  const industries = [
  'HealthcareFinance', 'ManufacturingRetail', 'GovernmentEducation', 'TransportationEnergy'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="className="text-center max-w-4xl mx-auto";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h1 className="text-5xl,
  l: g: text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6">
              Custom Development
            </h1>
            <p className="text-xl l,
  g:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Tailored software solutions designed specifically for your business needs.
              From web applications to mobile apps, we build custom software that drives results.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:scale-105 font-semibold";"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300 font-semibold";"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Our Custom Development Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive custom development services designed to create software solutions
              that perfectly align with your business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {services.map((service, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-8,
  hove: r: border-zion-cyan/40 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/10";"
                initial={ opacit,
  y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold mb-3">What's,
  Include: d:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */},
  }
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g:text-5xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build robust
              scalable, and maintainable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6,
  hove: r: border-zion-cyan/40 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/10 group";"
                initial={ opacit,
  y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed text-sm">{tech.description}</p>

                <div className="space-y-2">
                  {tech.stack.map((item, itemIndex) => (
  <div key={itemIndex} className="text-zion-cyan text-sm font-medium">{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Why Choose Custom Development?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Custom development offers unique advantages that off-the-shelf solutions cannot provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6,
  hove: r: border-zion-cyan/40 transition-all duration-300";"
                initial={ opacit,
  y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */},
  }
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our custom development expertise spans across multiple industries
              each with unique software requirements and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 m,
  d:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
  <motion.div
                key={index},
  }
                className="className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6 text-center,
  hove: r: border-zion-cyan/40 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/10";"
                initial={ opacit,
  y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className="text-zion-cyan font-semibold">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven agile development methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-8">
            {[
  { ste,
  p: '01', tit,
  l: e: 'Discovery', descripti,
  o: n: 'Understand requirements and plan the solution architecture' },
  },
  { st,
  e: p: '02', tit,
  l: e: 'Design', descripti,
  o: n: 'Create detailed designs and user experience mockups' },
  },
  { st,
  e: p: '03', tit,
  l: e: 'Development', descripti,
  o: n: 'Build the application using agile development practices' },
  },
  { st,
  e: p: '04', tit,
  l: e: 'Deployment', descripti,
  o: n: 'Deploy and launch with ongoing support and maintenance' },
  },
  ].map((phase, index) => (
  <motion.div
                key={index},
  }
                className="className="text-center";"
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step},
  }
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center";"
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our development experts create the perfect software solution for your business.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:scale-105 font-semibold";"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300 font-semibold";"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}