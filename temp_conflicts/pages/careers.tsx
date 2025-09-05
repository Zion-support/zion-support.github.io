import React, {_useState} from 'react';
import Head from 'next/head';
import {_Users, _Rocket, _Brain, _Shield, _Globe, _Award, _Zap, _Heart, _Star, _MapPin, _Clock, _DollarSign, _ExternalLink, _Send, _ArrowRight} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CareersPage() {_const [selectedDepartment, _setSelectedDepartment] = useState('all');

  const _departments = [
    { id: 'all', _name: 'All Departments'},
    {_id: 'ai', _name: 'AI & Machine Learning'},
    {_id: 'quantum', _name: 'Quantum Computing'},
    {_id: 'engineering', _name: 'Engineering'},
    {_id: 'research', _name: 'Research & Development'},
    {_id: 'business', _name: 'Business Development'}
  ];

  const _jobOpenings = [
    {_id: 1, _title: "Senior AI Research Scientist", _department: "ai", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "5+ years", _salary: "$150K - $250K", _description: "Lead cutting-edge research in autonomous AI systems and consciousness evolution.", _requirements: [
        "PhD in Computer Science, _AI, _or related field", _"Experience with large language models and neural networks", _"Published research in top AI conferences", _"Experience with quantum computing concepts"
      ], _benefits: [
        "Competitive salary and equity", _"Flexible work arrangements", _"Professional development budget", _"Health and wellness benefits"
      ]},
    {_id: 2, _title: "Quantum Software Engineer", _department: "quantum", _location: "San Francisco, _CA", _type: "Full-time", _experience: "3+ years", _salary: "$120K - $180K", _description: "Develop quantum algorithms and software for our quantum computing platform.", _requirements: [
        "Bachelor's degree in Computer Science or Physics", _"Experience with quantum programming languages", _"Knowledge of quantum algorithms and cryptography", _"Python and C++ programming skills"
      ], _benefits: [
        "Competitive salary and equity", _"State-of-the-art quantum computing access", _"Collaboration with leading researchers", _"Comprehensive benefits package"
      ]},
    {_id: 3, _title: "Senior Full-Stack Engineer", _department: "engineering", _location: "Remote", _type: "Full-time", _experience: "4+ years", _salary: "$130K - $190K", _description: "Build scalable web applications and microservices for our AI platform.", _requirements: [
        "Experience with React, _Node.js, _and TypeScript", _"Knowledge of cloud infrastructure (AWS/Azure)", _"Experience with microservices architecture", _"Strong problem-solving skills"
      ], _benefits: [
        "Remote-first culture", _"Competitive salary and equity", _"Latest development tools and equipment", _"Professional development opportunities"
      ]},
    {_id: 4, _title: "AI Ethics Researcher", _department: "research", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "3+ years", _salary: "$100K - $150K", _description: "Research and develop ethical frameworks for autonomous AI systems.", _requirements: [
        "Master's or PhD in Philosophy, _Ethics, _or AI", _"Understanding of AI safety and alignment", _"Experience with policy development", _"Strong analytical and writing skills"
      ], _benefits: [
        "Competitive salary and equity", _"Impact on AI safety and governance", _"Collaboration with global experts", _"Professional development support"
      ]},
    {_id: 5, _title: "Business Development Manager", _department: "business", _location: "San Francisco, _CA", _type: "Full-time", _experience: "5+ years", _salary: "$120K - $180K + Commission", _description: "Drive business growth through strategic partnerships and client relationships.", _requirements: [
        "Experience in B2B technology sales", _"Knowledge of AI and quantum computing markets", _"Strong networking and communication skills", _"Proven track record of exceeding targets"
      ], _benefits: [
        "Competitive base salary + commission", _"Performance-based bonuses", _"Travel and networking opportunities", _"Career advancement potential"
      ]}
  ];

  const _filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const _values = [
    {_icon: Brain, _title: "Innovation First", _description: "We push boundaries and explore uncharted territories in technology"},
    {_icon: Users, _title: "Collaboration", _description: "Great ideas come from diverse teams working together"},
    {_icon: Rocket, _title: "Impact Driven", _description: "We build technology that makes a real difference in the world"},
    {_icon: Heart, _title: "Work-Life Balance", _description: "We believe in sustainable innovation and personal well-being"}
  ];

  const _benefits = [
    {_icon: DollarSign, _title: "Competitive Compensation", _description: "Above-market salaries, _equity, _and performance bonuses"},
    {_icon: Globe, _title: "Remote-First Culture", _description: "Work from anywhere with flexible schedules"},
    {_icon: Zap, _title: "Cutting-Edge Technology", _description: "Access to the latest AI and quantum computing tools"},
    {_icon: Star, _title: "Professional Growth", _description: "Continuous learning and career development opportunities"},
    {_icon: Shield, _title: "Health & Wellness", _description: "Comprehensive health, _dental, _and mental health coverage"},
    {_icon: Award, _title: "Recognition", _description: "Regular recognition and rewards for outstanding contributions"}
  ];

  return (_<>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's mission to revolutionize technology. Explore career opportunities in AI, _quantum computing, _and autonomous innovation." />
        <meta name="keywords" content="Zion Tech Group careers, _AI jobs, _quantum computing jobs, _technology careers, _innovation jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of innovators and shape the future of technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                Help us revolutionize technology through autonomous AI, _quantum computing, _and consciousness evolution. Be part of the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#openings"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Company Culture */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Culture
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're building more than technology - we're building the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_values.map((value, _index) => (
                <motion.div
                  key={value.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{_value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{_value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Benefits & Perks
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We take care of our team so you can focus on changing the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_benefits.map(_(benefit, _index) => (
                <motion.div
                  key={benefit.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{_benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{_benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Job Openings */}
        <section id="openings" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Join our team of innovators and help shape the future of technology
              </p>

              {_/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {_departments.map(_(dept) => (_<button
                    key={dept.id}
                    onClick={_() => setSelectedDepartment(dept.id)}
                    className={_`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-slate-700/50 text-white/70 hover:bg-slate-700/70 hover:text-white'}`}
                  >
                    {_dept.name}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              {_filteredJobs.map(_(job, _index) => (_<motion.div
                  key={job.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {_job.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                            {_job.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 mb-4 text-white/70">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{_job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{_job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{_job.salary}</span>
                          </div>
                        </div>

                        <p className="text-white/80 mb-4 leading-relaxed">{_job.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                            <ul className="space-y-1">
                              {_job.requirements.map((req, _idx) => (
                                <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  {_req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {_job.benefits.map(_(benefit, _idx) => (
                                <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                  {_benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex-shrink-0">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {_filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6}}
                  viewport={_{ once: true}}
                  className="text-center py-12"
                >
                  <p className="text-white/70 text-lg mb-4">
                    No open positions in this department at the moment.
                  </p>
                  <p className="text-white/50">
                    Check back soon or send us your resume for future opportunities!
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Don't See the Perfect Role?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We're always looking for talented individuals who are passionate about 
                technology and innovation. Send us your resume and let's discuss how 
                you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Your Resume</span>
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
