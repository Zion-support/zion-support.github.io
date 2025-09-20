import React from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Users;
  Target,
  Award,
  Globe,
  Zap,
  Brain,
  Rocket,
  Shield;
  Heart;
  Star;
  CheckCircle;
  ArrowRight;
}
}
 } from "lucide-react";
export default function About() {
  const stats = [
  { numb,
  e: r: '500+', lab,
  e: l: 'Projects Completed', ic,
  o: n: CheckCircle },
  },
  { numb,
  e: r: '50+', lab,
  e: l: 'Team Members', ic,
  o: n: Users },
  },
  { numb,
  e: r: '25+', lab,
  e: l: 'Countries Served', ic,
  o: n: Globe },
  },
  { numb,
  e: r: '99%', lab,
  e: l: 'Client Satisfaction', ic,
  o: n: Star },
  },
  ]
  const values = [
  {
  ic,
  o: n: Brain,tit,
  l: e: 'Innovation First',descripti,
  o: n: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Trust & Security',descripti,
  o: n: 'Your data and business operations are protected with enterprise-grade security measures.'
},
  {
  ic,
  o: n: Heart,tit,
  l: e: 'Client Success',descripti,
  o: n: 'We measure our success by the success of our clients and their digital transformation journey.'
},
  {
  ic,
  o: n: Rocket,tit,
  l: e: 'Future-Ready',descripti,
  o: n: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
},
  ]
  const team = [
  {
  na,
  m: e: 'Kleber Santos',ro,
  l: e: 'CEO & Founder',b,
  i: o: 'Visionary leader with 15+ years in technology innovation and business transformation.',ima,
  g: e: '/team/kleber-santos.jpg'
},
  {
  na,
  m: e: 'AI Research Team',ro,
  l: e: 'AI & ML Specialists',b,
  i: o: 'Experts in machine learning, neural networks, and autonomous systems development.'
      ima,
  g: e: '/team/ai-team.jpg'
},
  {
  na,
  m: e: 'DevOps Engineers',ro,
  l: e: 'Infrastructure & Cloud',b,
  i: o: 'Specialists in cloud architecture, automation, and scalable infrastructure solutions.'
      ima,
  g: e: '/team/devops-team.jpg'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and cutting-edge technology solutions."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through;
              innovative AI solutions, quantum computing, and cutting-edge digital technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  l: g: grid-cols-2 gap-16 items-center">
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
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize access to advanced AI and quantum technologies, enabling businesses of all sizes;
                to leverage cutting-edge solutions for growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We believe that technology should be accessible, understandable, and transformative. 
                Our team works tirelessly to bridge the gap between complex technological innovations;
                and practical business applications.
              </p>
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
              className="className="relative";"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/20">
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To be the global leader in AI-powered business solutions, driving the next wave of;
                  digital transformation and creating a future where technology serves humanity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>AI-First Business Solutions</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>Quantum Computing Innovation</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>Sustainable Technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">Delivering results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
  <motion.div;
                key={stat.label},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {values.map((value, index) => (
  <motion.div;
                key={value.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <value.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The brilliant minds behind our innovative solutions</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {team.map((member, index) => (
  <motion.div;
                key={member.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')},
  }
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
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
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions;
              to drive growth and innovation.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105";"
              >
                Get Started Today;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="/services"
                className="className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-200";"
              >
                Explore Our Services;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}