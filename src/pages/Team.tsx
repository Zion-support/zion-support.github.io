import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Linkedin
  Twitter, 
  Mail, 
  Globe, 
  Github
  Award
  Users
  Target
  Rocket
  Brain
  Cloud
  Shield
  Atom
  Zap
  Heart
  Star
  CheckCircle
  ArrowRight
  Building
  Lightbulb
  TrendingUp
  Eye
  Lock
  Network
  Database
  Code
  Leaf
  Gamepad2
  Coins
  Satellite
  Phone
  MapPin
  Calendar
  Clock
  BookOpen
  MessageCircle
  HelpCircle
  DollarSign
  Gauge
  Workflow
  BarChart3
  PenTool
  Server
  Smartphone
  Cpu
  Truck
} from "lucide-react"
import { SEO } from "@/components/SEO"
interface TeamMember {
  id: string,na,
  m: e: string,tit,
  l: e: string,departme,
  n: t: string,b,
  i: o: string,experti,
  s: e: string[],experien,
  c: e: string,educati,
  o: n: string
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
  emai,
  l: string,ima,
  g: e: string,featur,
  e: d: boolean,leadersh,
  i: p: boolean,achievemen,
  t: s: string[[];]
}

const,
  Tea: m: React.FC = () () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedRole, setSelectedRole] = useState('all')

  const departments = [
    { id: 'all', na,
  m: e: 'All Departments', ic,
  o: n: Users, cou,
  n: t: 0 }, { id: 'leadership', na,
  m: e: 'Leadership', ic,
  o: n: Star, cou,
  n: t: 0 }, { id: 'ai', na,
  m: e: 'AI & Research', ic,
  o: n: Brain, cou,
  n: t: 0 }, { id: 'engineering', na,
  m: e: 'Engineering', ic,
  o: n: Code, cou,
  n: t: 0 }, { id: 'cloud', na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud, cou,
  n: t: 0 }, { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: 0 }, { id: 'quantum', na,
  m: e: 'Quantum Computing', ic,
  o: n: Atom, cou,
  n: t: 0 }, { id: 'business', na,
  m: e: 'Business Development', ic,
  o: n: TrendingUp, cou,
  n: t: 0 }, { id: 'design', na,
  m: e: 'Design & UX', ic,
  o: n: PenTool, cou,
  n: t: 0 }, { id: 'data', na,
  m: e: 'Data & Analytics', ic,
  o: n: Database, cou,
  n: t: 0 }
  ]
  const,
  teamMember: s: TeamMember[] = [
    {
      i,
  d: '1',na,
  m: e: 'Dr. Sarah Chen',tit,
  l: e: 'Chief Executive Officer & Chief AI Officer',departme,
  n: t: 'leadership',b,
  i: o: 'Visionary leader with 15+ years of experience in artificial intelligence and quantum computing. Former research lead at Google AI and Stanford University.',experti,
  s: e: ['Artificial IntelligenceQuantum Computing', 'Machine LearningStrategic Leadership']
      experien,
  c: e: '15+ years',educati,
  o: n: 'Ph.D. Computer Science, Stanford University'
      linked,
  i: n: 'http,
  s://linkedin.com/in/sarahchen',twitt,
  e: r: 'http,
  s://twitter.com/sarahchen',gith,
  u: b: 'http,
  s://github.com/sarahchen',websi,
  t: e: 'http,
  s://sarahchen.com',ema,
  i: l: 'sarah.chen@ziontechgroup.com',ima,
  g: e: '/images/team/sarah-chen.jpg',featur,
  e: d: true,leadersh,
  i: p: true,achievemen,
  t: s: [['Forbes 30 Under 30MIT Technology Review Innovator', 'Published 50+ Research Papers'];]
    }, {
      id: '2',na,
  m: e: 'Michael Rodriguez',tit,
  l: e: 'Chief Technology Officer',departme,
  n: t: 'leadership',b,
  i: o: 'Technology visionary with expertise in cloud architecture, quantum computing, and emerging technologies. Former CTO at Microsoft Azure.'
      experti,
  s: e: ['Cloud ArchitectureQuantum Computing', 'Emerging TechnologiesSystem Design']
      experien,
  c: e: '18+ years',educati,
  o: n: 'M.S. Computer Engineering, MIT'
      linked,
  i: n: 'http,
  s://linkedin.com/in/michaelrodriguez',twitt,
  e: r: 'http,
  s://twitter.com/mrodriguez',gith,
  u: b: 'http,
  s://github.com/mrodriguez',ema,
  i: l: 'michael.rodriguez@ziontechgroup.com',ima,
  g: e: '/images/team/michael-rodriguez.jpg',featur,
  e: d: true,leadersh,
  i: p: true,achievemen,
  t: s: [['Microsoft MVPCloud Architecture Expert', 'Quantum Computing Pioneer'];]
    }, {
      id: '3',na,
  m: e: 'Dr. Alex Thompson',tit,
  l: e: 'Chief Security Officer',departme,
  n: t: 'security',b,
  i: o: 'Cybersecurity expert specializing in AI-powered threat detection and quantum-resistant cryptography. Former security lead at NSA.',experti,
  s: e: ['CybersecurityAI Security', 'Quantum CryptographyThreat Intelligence']
      experien,
  c: e: '12+ years',educati,
  o: n: 'Ph.D. Cybersecurity, Carnegie Mellon University'
      linked,
  i: n: 'http,
  s://linkedin.com/in/alexthompson',twitt,
  e: r: 'http,
  s://twitter.com/alexthompson',ema,
  i: l: 'alex.thompson@ziontechgroup.com',ima,
  g: e: '/images/team/alex-thompson.jpg',featur,
  e: d: true,leadersh,
  i: p: true,achievemen,
  t: s: [['NSA Recognition AwardBlack Hat Speaker', 'Security Researcher of the Year'];]
    }, {
      id: '4',na,
  m: e: 'Dr. Emily Watson',tit,
  l: e: 'Head of AI Research',departme,
  n: t: 'ai',b,
  i: o: 'Leading researcher in machine learning and artificial intelligence. Specializes in quantum machine learning and neural network optimization.',experti,
  s: e: ['Machine LearningQuantum ML', 'Neural NetworksResearch Leadership']
      experien,
  c: e: '10+ years',educati,
  o: n: 'Ph.D. Machine Learning, UC Berkeley'
      linked,
  i: n: 'http,
  s://linkedin.com/in/emilywatson',twitt,
  e: r: 'http,
  s://twitter.com/emilywatson',gith,
  u: b: 'http,
  s://github.com/emilywatson',ema,
  i: l: 'emily.watson@ziontechgroup.com',ima,
  g: e: '/images/team/emily-watson.jpg',featur,
  e: d: true,leadersh,
  i: p: false,achievemen,
  t: s: [['Google Research AwardNeurIPS Best Paper', 'AI Research Grant Recipient'];]
    }, {
      id: '5',na,
  m: e: 'Dr. James Kim',tit,
  l: e: 'Quantum Computing Lead',departme,
  n: t: 'quantum',b,
  i: o: 'Quantum physicist and computing expert. Leading research in quantum algorithms and quantum-classical hybrid systems.',experti,
  s: e: ['Quantum PhysicsQuantum Algorithms', 'Quantum-Classical HybridResearch']
      experien,
  c: e: '8+ years',educati,
  o: n: 'Ph.D. Quantum Physics, Caltech'
      linked,
  i: n: 'http,
  s://linkedin.com/in/jameskim',twitt,
  e: r: 'http,
  s://twitter.com/jameskim',gith,
  u: b: 'http,
  s://github.com/jameskim',ema,
  i: l: 'james.kim@ziontechgroup.com',ima,
  g: e: '/images/team/james-kim.jpg',featur,
  e: d: true,leadersh,
  i: p: false,achievemen,
  t: s: [['Caltech Distinguished AlumnusQuantum Research Grant', 'Published in Nature'];]
    }, {
      id: '6',na,
  m: e: 'Lisa Chang',tit,
  l: e: 'Head of Cloud & DevOps',departme,
  n: t: 'cloud',b,
  i: o: 'Cloud infrastructure expert with deep knowledge of FinOps, automation, and scalable systems. Former AWS Solutions Architect.'
      experti,
  s: e: ['Cloud InfrastructureDevOps', 'FinOpsAutomation']
      experien,
  c: e: '14+ years',educati,
  o: n: 'M.S. Information Systems, University of Washington'
      linked,
  i: n: 'http,
  s://linkedin.com/in/lisachang',twitt,
  e: r: 'http,
  s://twitter.com/lisachang',gith,
  u: b: 'http,
  s://github.com/lisachang',ema,
  i: l: 'lisa.chang@ziontechgroup.com',ima,
  g: e: '/images/team/lisa-chang.jpg',featur,
  e: d: false,leadersh,
  i: p: true,achievemen,
  t: s: [['AWS Solutions ArchitectDevOps Expert', 'Cloud Cost Optimization Specialist'];]
    }, {
      id: '7',na,
  m: e: 'Robert Davis',tit,
  l: e: 'Senior Software Engineer',departme,
  n: t: 'engineering',b,
  i: o: 'Full-stack developer specializing in microservices, AI integration, and scalable web applications.'
      experti,
  s: e: ['Full-Stack DevelopmentMicroservices', 'AI IntegrationWeb Applications']
      experien,
  c: e: '6+ years',educati,
  o: n: 'B.S. Computer Science, University of Texas'
      linked,
  i: n: 'http,
  s://linkedin.com/in/robertdavis',gith,
  u: b: 'http,
  s://github.com/robertdavis',ema,
  i: l: 'robert.davis@ziontechgroup.com',ima,
  g: e: '/images/team/robert-davis.jpg',featur,
  e: d: false,leadersh,
  i: p: false,achievemen,
  t: s: [['Microsoft Certified DeveloperOpen Source Contributor', 'Hackathon Winner'];]
    }, {
      id: '8',na,
  m: e: 'Jennifer Lee',tit,
  l: e: 'Business Development Manager',departme,
  n: t: 'business',b,
  i: o: 'Strategic business development professional with expertise in technology partnerships and market expansion.',experti,
  s: e: ['Business DevelopmentPartnerships', 'Market StrategyClient Relations']
      experien,
  c: e: '9+ years',educati,
  o: n: 'MBA, Harvard Business School'
      linked,
  i: n: 'http,
  s://linkedin.com/in/jenniferlee',ema,
  i: l: 'jennifer.lee@ziontechgroup.com',ima,
  g: e: '/images/team/jennifer-lee.jpg',featur,
  e: d: false,leadersh,
  i: p: false,achievemen,
  t: s: [['Top Performer AwardPartnership Excellence', 'Client Satisfaction Leader'];]
    }, {
      id: '9',na,
  m: e: 'David Wilson',tit,
  l: e: 'UX/UI Design Lead',departme,
  n: t: 'design',b,
  i: o: 'Creative designer focused on user experience and interface design for complex technology applications.',experti,
  s: e: ['UX/UI DesignUser Research', 'PrototypingDesign Systems']
      experien,
  c: e: '7+ years',educati,
  o: n: 'B.F.A. Design, Rhode Island School of Design'
      linked,
  i: n: 'http,
  s://linkedin.com/in/davidwilson',websi,
  t: e: 'http,
  s://davidwilson.design',ema,
  i: l: 'david.wilson@ziontechgroup.com',ima,
  g: e: '/images/team/david-wilson.jpg',featur,
  e: d: false,leadersh,
  i: p: false,achievemen,
  t: s: [['Design Excellence AwardUser Experience Innovation', 'Design Thinking Facilitator'];]
    }, {
      id: '10',na,
  m: e: 'Maria Garcia',tit,
  l: e: 'Data Scientist',departme,
  n: t: 'data',b,
  i: o: 'Data science expert specializing in predictive analytics, machine learning, and business intelligence.'
      experti,
  s: e: ['Data SciencePredictive Analytics', 'Machine LearningBusiness Intelligence']
      experien,
  c: e: '5+ years',educati,
  o: n: 'M.S. Data Science, Columbia University'
      linked,
  i: n: 'http,
  s://linkedin.com/in/mariagarcia',gith,
  u: b: 'http,
  s://github.com/mariagarcia',ema,
  i: l: 'maria.garcia@ziontechgroup.com',ima,
  g: e: '/images/team/maria-garcia.jpg',featur,
  e: d: false,leadersh,
  i: p: false,achievemen,
  t: s: [['Data Science Competition WinnerResearch Publication', 'Analytics Innovation Award'];]
    }
  ]

  // Update department counts
  departments.forEach(dept () () => {
    if (if (dept.id === 'all') {) {
      dept.count = teamMembers.length
    } else if (if (dept.id === 'leadership') {) {
      dept.count = teamMembers.filter(member => member.leadership).length
    } else {
      dept.count = teamMembers.filter(member => member.department === dept.id).length
    }
  })

  const filteredMembers = teamMembers.filter(member () () => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
    const matchesRole = selectedRole === 'all' || 
                       (selectedRole === 'leadership' && member.leadership) ||
                       (selectedRole === 'individual' && !member.leadership)
    return matchesDepartment && matchesRole
  })

  const leadershipTeam = teamMembers.filter(member => member.leadership)
  const featuredMembers = teamMembers.filter(member => member.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team behind Zion Tech Group. Our experts in AI, quantum computing, cybersecurity, and emerging technologies are driving innovation."
        keywords="Zion Tech Group team, AI experts, quantum computing specialists, cybersecurity professionals, technology leadership"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center";"
          >
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Exceptional Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovations in AI, quantum computing, 
              and emerging technologies. Our diverse team brings together expertise from leading 
              institutions and companies worldwide.
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 }
            className="className="grid grid-cols-2,
  m: d: grid-cols-4 gap-6 mt-16";"
          >
            {[
              { labe,
  l: 'Team Members', val,
  u: e: teamMembers.length, ic,
  o: n: Users, col,
  o: r: 'from-cyan-500 to-blue-500' }, { lab,
  e: l: 'Departments', val,
  u: e: departments.length - 1, ic,
  o: n: Building, col,
  o: r: 'from-purple-500 to-pink-500' }, { lab,
  e: l: 'Years Experience', val,
  u: e: '100+', ic,
  o: n: Award, col,
  o: r: 'from-yellow-500 to-orange-500' }, { lab,
  e: l: 'Research Papers', val,
  u: e: '50+', ic,
  o: n: BookOpen, col,
  o: r: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 }
                animate={ opaci,
  t: y: 1, sca,
  l: e: 1 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 + index * 0.1 }
                className="className="text-center";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our visionary leaders driving innovation and strategic direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden,
  hove: r:border-cyan-400/40 transition-all duration-300 group";"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-8xl text-cyan-400/40">
                    {member.department === 'ai' && <Brain />}, {member.department === 'leadership' && <Star />}, {member.department === 'security' && <Shield />}, {member.department === 'cloud' && <Cloud />}, {member.department === 'quantum' && <Atom />}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-1">{member.title}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <span className="text-gray-400">Experien,
  c: e:</span>
                      <span className="text-white ml-2">{member.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Educati,
  o: n:</span>
                      <span className="text-white ml-2">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-blue-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}, {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-blue-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}, {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-gray-300 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}, {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-cyan-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mail,
  t: o:${member.email}`}
                      className="className="p-2 text-gray-400,
  hove: r: text-cyan-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filters */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our Team by Department
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our talented team members across different departments and specialties
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col,
  l: g: flex-row gap-6 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-medium text-cyan-400 mb-3">Department</label>
              <div className="grid grid-cols-2 m,
  d:grid-cols-5 gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-white/5'
                    }`}
                  >
                    <dept.icon className="w-4 h-4" />
                    <span>{dept.name}</span>
                    <span className="text-xs text-gray-400">({dept.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg: w-48">
              <label className="block text-sm font-medium text-cyan-400 mb-3">Role</label>
              <div className="space-y-2">
                {[
                  { i,
  d: 'all', na,
  m: e: 'All Roles', cou,
  n: t: teamMembers.length }, { id: 'leadership', na,
  m: e: 'Leadership', cou,
  n: t: teamMembers.filter(m => m.leadership).length }, { id: 'individual', na,
  m: e: 'Individual Contributors', cou,
  n: t: teamMembers.filter(m => !m.leadership).length }
                ].map((role) => (
                  <button
                    key={role.id}
                    onClick={onClick={() => setSelectedRole(role.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedRole === role.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-white/5'
                    }`}
                  >
                    {role.name} ({role.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden,
  hove: r:border-cyan-400/40 transition-all duration-300 group";"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/40">
                    {member.department === 'ai' && <Brain />}, {member.department === 'leadership' && <Star />}, {member.department === 'security' && <Shield />}, {member.department === 'cloud' && <Cloud />}, {member.department === 'quantum' && <Atom />}, {member.department === 'engineering' && <Code />}, {member.department === 'business' && <TrendingUp />}, {member.department === 'design' && <PenTool />}, {member.department === 'data' && <Database />}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mb-1">{member.title}</p>
                    <p className="text-gray-400 text-xs capitalize">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-blue-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}, {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="p-2 text-gray-400,
  hove: r: text-gray-300 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={`mail,
  t: o:${member.email}`}
                      className="className="p-2 text-gray-400,
  hove: r: text-cyan-400 hove,
  r:bg-white/5 rounded-lg transition-all duration-200";"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our team and drive our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2,
  l: g:grid-cols-4 gap-8">
            {[
              { titl,
  e: 'Innovation First', ic,
  o: n: Lightbulb, descripti,
  o: n: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.' }, { tit,
  l: e: 'Collaboration', ic,
  o: n: Users, descripti,
  o: n: 'Great ideas come from diverse perspectives working together towards common goals.' }, { tit,
  l: e: 'Excellence', ic,
  o: n: Star, descripti,
  o: n: 'We strive for excellence in everything we do, from code quality to client relationships.' }, { tit,
  l: e: 'Continuous Learning', ic,
  o: n: BookOpen, descripti,
  o: n: 'Our team is committed to lifelong learning and staying ahead of technology trends.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to work with cutting-edge technologies and brilliant minds? 
              Explore career opportunities at Zion Tech Group.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-200";"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-200";"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Team