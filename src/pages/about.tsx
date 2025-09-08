

  const values = [
    {
      icon: Innovation,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: '🚀'
    }, {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.',
      icon: '🎯'
    }, {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in every project we deliver.',
      icon: '⭐'
    }, {
      title: 'Continuous Learning',
      description: 'Our team stays ahead of technology trends through continuous education and research.',
      icon: '📚'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Technology visionary with over 15 years of experience in AI, cloud computing, and digital transformation.',
      expertise: ['AI & Machine Learning', 'Cloud Architecture', 'Strategic Planning']
    }, {
      name: 'AI Development Team',
      role: 'AI Engineers & Data Scientists',
      description: 'Expert team specializing in machine learning, deep learning, and artificial intelligence solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'Data Science', 'NLP']
    }, {
      name: 'Cloud & DevOps Team',
      role: 'Cloud Engineers & DevOps Specialists',
      description: 'Experienced professionals in cloud infrastructure, automation, and scalable system design.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD', 'Infrastructure as Code']
    }, {
      name: 'Cybersecurity Team',
      role: 'Security Engineers & Analysts',
      description: 'Dedicated security professionals ensuring your systems remain protected and compliant.',
      expertise: ['Zero Trust Security', 'Threat Detection', 'Compliance', 'Incident Response']
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding our services to serve clients worldwide with localized solutions.'
    }, {
      year: '2024',
      title: 'AI Innovation Hub',
      description: 'Established our AI innovation center to develop cutting-edge solutions.'
    }, {
      year: '2023',
      title: 'Enterprise Solutions',
      description: 'Launched comprehensive enterprise-grade solutions for Fortune 500 companies.'
    }, {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries with 100+ enterprise clients.'
    },
    {
      year: '2024',
      title: 'Quantum Computing Initiative',
      description: 'Launched quantum computing research and development program.'
    },
    {
      year: '2025',
      title: 'AI Ethics Leadership',
      description: 'Recognized as industry leader in responsible AI development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Zion Tech Group
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          We are a forward-thinking technology comp dedicated to transforming businesses through innovative AI, cloud, and cybersecurity solutions.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-8">
            To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions accessible to businesses of all sizes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="text-gray-300 space-y-2">
                <p>📞 +1 (302) 464-0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  {[
                    '15+ years of technology innovation experience',
                    'Expert team with advanced degrees and certifications',
                    'Proven track record of successful AI implementations',
                    'Enterprise-grade security and compliance standards',
                    '24/7 support and dedicated account management',
                    'Continuous innovation and R&D investment'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the talented professionals who make Zion Tech Group a technology innovation leader
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="p-8 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our company&apos;s growth and development
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )}










