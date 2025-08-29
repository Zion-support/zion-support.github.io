import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart,
  Linkedin,
  Github,
  Mail,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Atom,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle,
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Phone,
  MapPin
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer & AI Visionary',
      bio: 'Leading Zion Tech Group with 15+ years of experience in AI, machine learning, and enterprise technology. Former research scientist at leading tech companies.',
      expertise: ['AI/ML', 'Strategic Leadership', 'Enterprise Architecture'],
      avatar: '/avatars/sarah-chen.jpg',
      linkedin: '#',
      github: '#',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud architecture, DevOps, and emerging technologies. Spearheading our quantum computing and edge computing initiatives.',
      expertise: ['Cloud Architecture', 'DevOps', 'Quantum Computing'],
      avatar: '/avatars/marcus-rodriguez.jpg',
      linkedin: '#',
      github: '#',
      email: 'marcus.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      bio: 'Leading our AI research and development with expertise in large language models, computer vision, and autonomous systems.',
      expertise: ['LLMs', 'Computer Vision', 'Autonomous Systems'],
      avatar: '/avatars/emily-watson.jpg',
      linkedin: '#',
      github: '#',
      email: 'emily.watson@ziontechgroup.com'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert specializing in zero-trust architecture, AI-powered threat detection, and compliance automation.',
      expertise: ['Zero Trust', 'Threat Detection', 'Compliance'],
      avatar: '/avatars/alex-thompson.jpg',
      linkedin: '#',
      github: '#',
      email: 'alex.thompson@ziontechgroup.com'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Healthcare Technology',
      bio: 'Leading our healthcare AI initiatives with deep expertise in medical imaging, drug discovery, and patient care optimization.',
      expertise: ['Medical AI', 'Drug Discovery', 'Healthcare Analytics'],
      avatar: '/avatars/priya-patel.jpg',
      linkedin: '#',
      github: '#',
      email: 'priya.patel@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      role: 'Head of Quantum Computing',
      bio: 'Quantum computing specialist working on next-generation algorithms and quantum AI platforms for enterprise applications.',
      expertise: ['Quantum Algorithms', 'Quantum AI', 'Enterprise Solutions'],
      avatar: '/avatars/david-kim.jpg',
      linkedin: '#',
      github: '#',
      email: 'david.kim@ziontechgroup.com'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative problem-solving.',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Excellence in Execution',
      description: 'We deliver world-class solutions with attention to detail and unwavering commitment to quality.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We partner with you to achieve transformative business outcomes.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve through continuous research, development, and knowledge sharing.',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are fair, transparent, and beneficial to society.',
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Global Impact',
      description: 'We create technology that solves real-world problems and makes a positive difference globally.',
      icon: Globe,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Experts', icon: Brain },
    { number: '100+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '25+', label: 'Patents Filed', icon: Award },
    { number: '99.9%', label: 'Uptime SLA', icon: Zap },
    { number: '24/7', label: 'Support', icon: Clock },
    { number: '15+', label: 'Years Experience', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the brilliant minds behind Zion Tech Group. Our team of AI experts, engineers, and innovators are dedicated to transforming businesses through cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            The brilliant minds behind Zion Tech Group. Our team combines deep technical expertise with innovative thinking to deliver transformative solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#team" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Meet the Team
            </a>
            <a 
              href="/careers" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-slate-400 hover:text-gray-300 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. Our team members are passionate about technology and committed to making a positive impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Innovation Labs</h4>
                    <p className="text-slate-400">Dedicated time for research and experimentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Learning & Development</h4>
                    <p className="text-slate-400">Continuous education and skill development programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Collaborative Environment</h4>
                    <p className="text-slate-400">Cross-functional teams and knowledge sharing</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Mission</h3>
              <p className="text-slate-300 mb-6">
                We're always looking for talented individuals who share our passion for innovation and technology. Join us in shaping the future of AI-powered business solutions.
              </p>
              <div className="space-y-4">
                <a 
                  href="/careers" 
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  View Open Positions
                </a>
                <a 
                  href="/contact" 
                  className="block w-full border border-cyan-500 text-cyan-400 text-center py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Work with Our Team?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Let's discuss how our team of experts can help transform your business with cutting-edge AI solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/services" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
