import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Globe, Brain, Shield, Cloud, Rocket, 
  Star, Linkedin, Twitter, Mail, MapPin, Phone,
  Zap, Heart, Code, Building, BarChart3, PenTool,
  Target, TrendingUp, Lightbulb, Cpu, Database, Leaf
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Leadership() {
  const executiveTeam = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      department: 'Executive Leadership',
      expertise: 'AI Strategy & Business Transformation',
      experience: '15+ years in AI and technology leadership',
      education: 'PhD in Computer Science, Stanford University',
      bio: 'Dr. Chen leads Zion Tech Group with a vision to democratize AI technology and drive sustainable innovation across industries. Under her leadership, the company has grown from a startup to a global technology leader, serving Fortune 500 companies and innovative startups alike.',
      vision: 'To make advanced AI technology accessible to businesses of all sizes, enabling them to compete and thrive in the digital economy.',
      avatar: '/avatars/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah.chen@ziontechgroup.com'
      },
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', '100+ AI implementations', 'Featured in Harvard Business Review'],
      keyMetrics: ['500+ Clients Served', '$50M+ Revenue Growth', '15 Patents Filed', 'Global Team of 200+']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      expertise: 'Quantum Computing & AI Architecture',
      experience: '12+ years in advanced computing systems',
      education: 'MS in Computer Engineering, MIT',
      bio: 'Marcus spearheads our cutting-edge technology initiatives, focusing on quantum-AI hybrid solutions and next-generation computing platforms. He leads our R&D efforts and ensures we stay at the forefront of technological innovation.',
      vision: 'To create the world\'s most advanced AI-quantum hybrid computing platform that solves previously unsolvable problems.',
      avatar: '/avatars/marcus-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        twitter: 'https://twitter.com/marcusrodriguez',
        email: 'marcus.rodriguez@ziontechgroup.com'
      },
      achievements: ['Quantum Computing Pioneer', 'Patent Holder (15 patents)', 'IEEE Fellow', 'DARPA Research Grant Recipient'],
      keyMetrics: ['25+ Research Papers', '10 Quantum Algorithms', '5 Technology Breakthroughs', '100+ Technical Patents']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      department: 'Artificial Intelligence',
      expertise: 'Machine Learning & Neural Networks',
      experience: '10+ years in AI research and development',
      education: 'PhD in Machine Learning, Carnegie Mellon',
      bio: 'Dr. Watson leads our AI research initiatives, developing breakthrough algorithms that power our autonomous business solutions. She ensures our AI systems are not only powerful but also ethical and responsible.',
      vision: 'To develop AI systems that augment human capabilities while maintaining the highest standards of ethics and transparency.',
      avatar: '/avatars/emily-watson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        twitter: 'https://twitter.com/emilywatson',
        email: 'emily.watson@ziontechgroup.com'
      },
      achievements: ['NeurIPS Best Paper Award', 'AI Ethics Committee Member', '50+ Research Publications', 'AI Safety Pioneer'],
      keyMetrics: ['100+ AI Models Deployed', '99.9% Accuracy Rate', '50+ Research Papers', '10+ AI Ethics Frameworks']
    },
    {
      name: 'David Kim',
      role: 'Chief Security Officer',
      department: 'Cybersecurity & Compliance',
      expertise: 'AI-Powered Security & Zero Trust',
      experience: '14+ years in cybersecurity and risk management',
      education: 'MS in Information Security, Georgia Tech',
      bio: 'David ensures our AI solutions meet the highest security standards while protecting our clients from emerging cyber threats. He leads our security innovation initiatives and compliance programs.',
      vision: 'To create an impenetrable security ecosystem that protects businesses from all forms of cyber threats.',
      avatar: '/avatars/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        twitter: 'https://twitter.com/davidkim',
        email: 'david.kim@ziontechgroup.com'
      },
      achievements: ['CISSP Certified', 'Security Innovation Award', 'Former NSA Security Expert', 'Zero Trust Architecture Pioneer'],
      keyMetrics: ['0 Security Breaches', '100% Compliance Rate', '50+ Security Patents', '24/7 Threat Monitoring']
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Financial Officer',
      department: 'Finance & Operations',
      expertise: 'AI Financial Analytics & FinOps',
      experience: '16+ years in financial technology and operations',
      education: 'MBA in Finance, Harvard Business School',
      bio: 'Lisa optimizes our financial operations using AI-driven insights and ensures sustainable growth for our innovative technology solutions. She leads our strategic financial planning and investor relations.',
      vision: 'To build a financially sustainable company that can scale innovation while maintaining profitability and growth.',
      avatar: '/avatars/lisa-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        twitter: 'https://twitter.com/lisathompson',
        email: 'lisa.thompson@ziontechgroup.com'
      },
      achievements: ['CFA Charterholder', 'FinTech Innovation Award', 'Forbes CFO of the Year Finalist', 'AI Financial Analytics Pioneer'],
      keyMetrics: ['$100M+ Revenue', '40% YoY Growth', '95% Customer Retention', '15% Profit Margins']
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Research & Development',
      department: 'R&D & Innovation',
      expertise: 'Emerging Technologies & AI Research',
      experience: '11+ years in technology research and development',
      education: 'PhD in Applied Physics, Caltech',
      bio: 'Alex leads our R&D initiatives, exploring the frontiers of AI, quantum computing, and sustainable technology solutions. He ensures we stay ahead of technological trends and breakthroughs.',
      vision: 'To discover and develop the next generation of technologies that will transform how businesses operate.',
      avatar: '/avatars/alex-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alex-johnson',
        twitter: 'https://twitter.com/alexjohnson',
        email: 'alex.johnson@ziontechgroup.com'
      },
      achievements: ['DARPA Research Grant Recipient', 'Nature Publication', 'Innovation Patent Award', 'Emerging Technology Pioneer'],
      keyMetrics: ['25+ Research Projects', '10+ Technology Breakthroughs', '15+ Academic Publications', '5+ Industry Partnerships']
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with technology, always staying ahead of the curve.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we have on your business.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Trust & Security',
      description: 'We build secure, reliable solutions you can trust with your most critical business operations.',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Future-Ready',
      description: 'We prepare you for tomorrow\'s challenges with today\'s most advanced solutions.',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Global Impact',
      description: 'We believe technology should serve humanity and create positive change worldwide.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: Star,
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const strategicInitiatives = [
    {
      title: 'AI Democratization',
      description: 'Making advanced AI technology accessible to businesses of all sizes through innovative pricing and deployment models.',
      icon: Brain,
      progress: 85,
      timeline: '2024-2026'
    },
    {
      title: 'Quantum-AI Integration',
      description: 'Developing the world\'s first commercial quantum-AI hybrid platform for solving complex business problems.',
      icon: Cpu,
      progress: 60,
      timeline: '2024-2028'
    },
    {
      title: 'Global Expansion',
      description: 'Expanding our presence to serve clients in emerging markets and developing regions worldwide.',
      icon: Globe,
      progress: 70,
      timeline: '2024-2027'
    },
    {
      title: 'Sustainability Tech',
      description: 'Developing AI-powered solutions to help businesses reduce their environmental impact and achieve sustainability goals.',
      icon: Leaf,
      progress: 45,
      timeline: '2024-2029'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Leadership - Zion Tech Group"
        description="Meet the visionary leaders driving Zion Tech Group's mission to democratize AI technology and transform businesses worldwide."
        keywords="leadership, executive team, CEO, CTO, AI leadership, technology leadership, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/leadership"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the visionary leaders who are shaping the future of AI technology and driving Zion Tech Group's mission to transform businesses worldwide.
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>6 Executive Leaders</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>100+ Combined Years</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Executive Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in AI, technology, and business innovation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {executiveTeam.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Executive Info */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{executive.role}</p>
                    <p className="text-gray-400 mb-4">{executive.department}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">{executive.bio}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">
                          <span className="font-semibold">Expertise:</span> {executive.expertise}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">
                          <span className="font-semibold">Experience:</span> {executive.experience}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">
                          <span className="font-semibold">Education:</span> {executive.education}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                      <a
                        href={executive.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={executive.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={`mailto:${executive.social.email}`}
                        className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Vision & Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-3">Leadership Vision</h4>
                      <p className="text-gray-300 leading-relaxed">{executive.vision}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {executive.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                        <ul className="space-y-2">
                          {executive.keyMetrics.map((metric, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our leadership decisions and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mr-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Initiatives
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our key strategic priorities that will shape the future of AI technology and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{initiative.title}</h3>
                    <p className="text-gray-400 text-sm">{initiative.timeline}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">{initiative.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-semibold">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Connect with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to discuss how our leadership team can help transform your business with cutting-edge AI technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Building className="w-5 h-5 mr-2" />
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}