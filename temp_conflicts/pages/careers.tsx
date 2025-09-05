import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Shield, Globe, Award, 
  Zap, Heart, Star, MapPin, Clock, DollarSign,
  ExternalLink, Send, ArrowRight
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'research', name: 'Research & Development' },
    { id: 'business', name: 'Business Development' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: &quot;Senior AI Research Scientist&quot;,
      department: &quot;ai&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;5+ years&quot;,
      salary: &quot;$150K - $250K&quot;,
      description: &quot;Lead cutting-edge research in autonomous AI systems and consciousness evolution.&quot;,
      requirements: [
        &quot;PhD in Computer Science, AI, or related field&quot;,
        &quot;Experience with large language models and neural networks&quot;,
        &quot;Published research in top AI conferences&quot;,
        &quot;Experience with quantum computing concepts&quot;
      ],
      benefits: [
        &quot;Competitive salary and equity&quot;,
        &quot;Flexible work arrangements&quot;,
        &quot;Professional development budget&quot;,
        &quot;Health and wellness benefits&quot;
      ]
    },
    {
      id: 2,
      title: &quot;Quantum Software Engineer&quot;,
      department: &quot;quantum&quot;,
      location: &quot;San Francisco, CA&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;3+ years&quot;,
      salary: &quot;$120K - $180K&quot;,
      description: &quot;Develop quantum algorithms and software for our quantum computing platform.&quot;,
      requirements: [
        &quot;Bachelor's degree in Computer Science or Physics&quot;,
        &quot;Experience with quantum programming languages&quot;,
        &quot;Knowledge of quantum algorithms and cryptography&quot;,
        &quot;Python and C++ programming skills&quot;
      ],
      benefits: [
        &quot;Competitive salary and equity&quot;,
        &quot;State-of-the-art quantum computing access&quot;,
        &quot;Collaboration with leading researchers&quot;,
        &quot;Comprehensive benefits package&quot;
      ]
    },
    {
      id: 3,
      title: &quot;Senior Full-Stack Engineer&quot;,
      department: &quot;engineering&quot;,
      location: &quot;Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;4+ years&quot;,
      salary: &quot;$130K - $190K&quot;,
      description: &quot;Build scalable web applications and microservices for our AI platform.&quot;,
      requirements: [
        &quot;Experience with React, Node.js, and TypeScript&quot;,
        &quot;Knowledge of cloud infrastructure (AWS/Azure)&quot;,
        &quot;Experience with microservices architecture&quot;,
        &quot;Strong problem-solving skills&quot;
      ],
      benefits: [
        &quot;Remote-first culture&quot;,
        &quot;Competitive salary and equity&quot;,
        &quot;Latest development tools and equipment&quot;,
        &quot;Professional development opportunities&quot;
      ]
    },
    {
      id: 4,
      title: &quot;AI Ethics Researcher&quot;,
      department: &quot;research&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;3+ years&quot;,
      salary: &quot;$100K - $150K&quot;,
      description: &quot;Research and develop ethical frameworks for autonomous AI systems.&quot;,
      requirements: [
        &quot;Master's or PhD in Philosophy, Ethics, or AI&quot;,
        &quot;Understanding of AI safety and alignment&quot;,
        &quot;Experience with policy development&quot;,
        &quot;Strong analytical and writing skills&quot;
      ],
      benefits: [
        &quot;Competitive salary and equity&quot;,
        &quot;Impact on AI safety and governance&quot;,
        &quot;Collaboration with global experts&quot;,
        &quot;Professional development support&quot;
      ]
    },
    {
      id: 5,
      title: &quot;Business Development Manager&quot;,
      department: &quot;business&quot;,
      location: &quot;San Francisco, CA&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;5+ years&quot;,
      salary: &quot;$120K - $180K + Commission&quot;,
      description: &quot;Drive business growth through strategic partnerships and client relationships.&quot;,
      requirements: [
        &quot;Experience in B2B technology sales&quot;,
        &quot;Knowledge of AI and quantum computing markets&quot;,
        &quot;Strong networking and communication skills&quot;,
        &quot;Proven track record of exceeding targets&quot;
      ],
      benefits: [
        &quot;Competitive base salary + commission&quot;,
        &quot;Performance-based bonuses&quot;,
        &quot;Travel and networking opportunities&quot;,
        &quot;Career advancement potential&quot;
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const values = [
    {
      icon: Brain,
      title: &quot;Innovation First&quot;,
      description: &quot;We push boundaries and explore uncharted territories in technology&quot;
    },
    {
      icon: Users,
      title: &quot;Collaboration&quot;,
      description: &quot;Great ideas come from diverse teams working together&quot;
    },
    {
      icon: Rocket,
      title: &quot;Impact Driven&quot;,
      description: &quot;We build technology that makes a real difference in the world&quot;
    },
    {
      icon: Heart,
      title: &quot;Work-Life Balance&quot;,
      description: &quot;We believe in sustainable innovation and personal well-being&quot;
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: &quot;Competitive Compensation&quot;,
      description: &quot;Above-market salaries, equity, and performance bonuses&quot;
    },
    {
      icon: Globe,
      title: &quot;Remote-First Culture&quot;,
      description: &quot;Work from anywhere with flexible schedules&quot;
    },
    {
      icon: Zap,
      title: &quot;Cutting-Edge Technology&quot;,
      description: &quot;Access to the latest AI and quantum computing tools&quot;
    },
    {
      icon: Star,
      title: &quot;Professional Growth&quot;,
      description: &quot;Continuous learning and career development opportunities&quot;
    },
    {
      icon: Shield,
      title: &quot;Health & Wellness&quot;,
      description: &quot;Comprehensive health, dental, and mental health coverage&quot;
    },
    {
      icon: Award,
      title: &quot;Recognition&quot;,
      description: &quot;Regular recognition and rewards for outstanding contributions&quot;
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name=&quot;description&quot; content=&quot;Join Zion Tech Group's mission to revolutionize technology. Explore career opportunities in AI, quantum computing, and autonomous innovation.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;Zion Tech Group careers, AI jobs, quantum computing jobs, technology careers, innovation jobs&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Careers - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Join our team of innovators and shape the future of technology.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/careers&quot; />
      </Head>

      <EnhancedNavigation />

      <main className=&quot;min-h-screen bg-slate-900 text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
                Join Our Mission
              </h1>
              <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
                Help us revolutionize technology through autonomous AI, quantum computing, 
                and consciousness evolution. Be part of the future.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;#openings&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  View Open Positions
                </Link>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className=&quot;py-20 px-6 bg-slate-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Our Culture
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
                We're building more than technology - we're building the future
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70 text-center&quot;>
                    <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300&quot;>
                      <value.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{value.title}</h3>
                    <p className=&quot;text-white/70 leading-relaxed&quot;>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Benefits & Perks
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
                We take care of our team so you can focus on changing the world
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70&quot;>
                    <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                      <benefit.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                    <p className=&quot;text-white/70 leading-relaxed&quot;>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id=&quot;openings&quot; className=&quot;py-20 px-6 bg-slate-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Open Positions
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
                Join our team of innovators and help shape the future of technology
              </p>

              {/* Department Filter */}
              <div className=&quot;flex flex-wrap justify-center gap-3&quot;>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-slate-700/50 text-white/70 hover:bg-slate-700/70 hover:text-white'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;p-8 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70&quot;>
                    <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6&quot;>
                      <div className=&quot;flex-1&quot;>
                        <div className=&quot;flex items-center gap-4 mb-4&quot;>
                          <h3 className=&quot;text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                            {job.title}
                          </h3>
                          <span className=&quot;px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30&quot;>
                            {job.type}
                          </span>
                        </div>
                        
                        <div className=&quot;flex flex-wrap items-center gap-6 mb-4 text-white/70&quot;>
                          <div className=&quot;flex items-center gap-2&quot;>
                            <MapPin className=&quot;w-4 h-4&quot; />
                            <span>{job.location}</span>
                          </div>
                          <div className=&quot;flex items-center gap-2&quot;>
                            <Clock className=&quot;w-4 h-4&quot; />
                            <span>{job.experience}</span>
                          </div>
                          <div className=&quot;flex items-center gap-2&quot;>
                            <DollarSign className=&quot;w-4 h-4&quot; />
                            <span>{job.salary}</span>
                          </div>
                        </div>

                        <p className=&quot;text-white/80 mb-4 leading-relaxed&quot;>{job.description}</p>

                        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                          <div>
                            <h4 className=&quot;font-semibold text-white mb-2&quot;>Requirements:</h4>
                            <ul className=&quot;space-y-1&quot;>
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className=&quot;text-white/70 text-sm flex items-start gap-2&quot;>
                                  <span className=&quot;w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0&quot;></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className=&quot;font-semibold text-white mb-2&quot;>Benefits:</h4>
                            <ul className=&quot;space-y-1&quot;>
                              {job.benefits.map((benefit, idx) => (
                                <li key={idx} className=&quot;text-white/70 text-sm flex items-start gap-2&quot;>
                                  <span className=&quot;w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0&quot;></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className=&quot;lg:flex-shrink-0&quot;>
                        <button className=&quot;px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2&quot;>
                          <Send className=&quot;w-4 h-4&quot; />
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className=&quot;text-center py-12&quot;
                >
                  <p className=&quot;text-white/70 text-lg mb-4&quot;>
                    No open positions in this department at the moment.
                  </p>
                  <p className=&quot;text-white/50&quot;>
                    Check back soon or send us your resume for future opportunities!
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                Don't See the Perfect Role?
              </h2>
              <p className=&quot;text-xl text-white/80 mb-8 leading-relaxed&quot;>
                We're always looking for talented individuals who are passionate about 
                technology and innovation. Send us your resume and let's discuss how 
                you can contribute to our mission.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2&quot;
                >
                  <Send className=&quot;w-5 h-5&quot; />
                  <span>Send Your Resume</span>
                </Link>
                <a
                  href=&quot;mailto:careers@ziontechgroup.com&quot;
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2&quot;
                >
                  <ExternalLink className=&quot;w-5 h-5&quot; />
                  <span>Email Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
