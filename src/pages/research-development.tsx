import React, { useState } from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  FlaskConical;
  Brain;
  Shield;
  Cloud;
  TrendingUp;
  Zap;
  Globe;
  Cpu;
  Database;
  Network;
  Lock;
  Code;
  Rocket;
  Users;
  BarChart3;
  FileImage;
  MessageCircle;
  Video;
  FileText;
  Heart;
  Award;
  Clock;
  DollarSign;
  Search;
  Filter;
  CheckCircle;
  ArrowRight;
  Star;
  Target;
  BookOpen;
  GraduationCap;
  Lightbulb;
  Microscope;
  TestTube;
  Atom;
  Satellite;
  Telescope;
}
}
 } from "lucide-react";
const researchAreas = [
  {
  id: 'ai-ml',na,
  m: e: 'Artificial Intelligence & Machine Learning',ic,
  o: n: Brain,descripti,
  o: n: 'Advancing the frontiers of AI through innovative research in neural networks, natural language processing, and computer vision.'
    col,
  o: r: 'from-purple-500 to-indigo-600',foc,
  u: s: [
  'Deep Learning ArchitecturesNatural Language Processing'
      'Computer Vision & Image RecognitionReinforcement Learning'
      'AI Ethics & Responsible AIEdge AI & Federated Learning'
]
    publication,
  s: 15,paten,
  t: s: 8,projec,
  t: s: 12;
},
  {
  id: 'quantum-computing',na,
  m: e: 'Quantum Computing & Quantum Technologies',ic,
  o: n: Atom,descripti,
  o: n: 'Exploring quantum computing applications and developing quantum-resistant cryptographic solutions.',col,
  o: r: 'from-blue-500 to-cyan-600',foc,
  u: s: [
  'Quantum AlgorithmsQuantum Cryptography'
      'Quantum Machine LearningQuantum Error Correction'
      'Post-Quantum CryptographyQuantum Sensing'
]
    publication,
  s: 8,paten,
  t: s: 5,projec,
  t: s: 6;
},
  {
  id: 'cybersecurity',na,
  m: e: 'Cybersecurity & Privacy',ic,
  o: n: Shield,descripti,
  o: n: 'Developing next-generation security solutions to protect against evolving cyber threats.',col,
  o: r: 'from-red-500 to-pink-600',foc,
  u: s: [
  'Threat IntelligenceZero-Trust Security'
      'Privacy-Preserving TechnologiesBlockchain Security'
      'IoT SecurityAI-Powered Security'
]
    publication,
  s: 22,paten,
  t: s: 12,projec,
  t: s: 18;
},
  {
  id: 'edge-computing',na,
  m: e: 'Edge Computing & IoT',ic,
  o: n: Zap,descripti,
  o: n: 'Researching distributed computing paradigms and intelligent edge systems for real-time processing.',col,
  o: r: 'from-yellow-500 to-orange-600',foc,
  u: s: [
  'Edge AI & Machine Learning5G & 6G Networks'
      'IoT Security & PrivacyEdge Computing Optimization'
      'Real-time Data ProcessingSmart City Technologies'
]
    publication,
  s: 18,paten,
  t: s: 9,projec,
  t: s: 14;
},
  {
  id: 'data-science',na,
  m: e: 'Data Science & Analytics',ic,
  o: n: TrendingUp,descripti,
  o: n: 'Advancing data analytics methodologies and developing tools for extracting meaningful insights from complex datasets.',col,
  o: r: 'from-green-500 to-emerald-600',foc,
  u: s: [
  'Big Data ProcessingPredictive Analytics'
      'Data VisualizationStatistical Modeling'
      'Real-time AnalyticsData Privacy & Ethics'
]
    publication,
  s: 25,paten,
  t: s: 15,projec,
  t: s: 20;
},
  {
  id: 'cloud-native',na,
  m: e: 'Cloud-Native Technologies',ic,
  o: n: Cloud,descripti,
  o: n: 'Researching cloud computing architectures and developing scalable, resilient cloud solutions.'
    col,
  o: r: 'from-indigo-500 to-purple-600',foc,
  u: s: [
  'Microservices ArchitectureContainer Orchestration'
      'Serverless ComputingMulti-cloud Strategies'
      'Cloud SecurityDevOps Automation'
]
    publication,
  s: 20,paten,
  t: s: 10,projec,
  t: s: 16;
},
  ]
const researchProjects = [
  {
  id: 1,tit,
  l: e: 'AI-Powered Cybersecurity Threat Detection',ar,
  e: a: 'AI & ML',stat,
  u: s: 'Active',descripti,
  o: n: 'Developing machine learning algorithms to detect and respond to cybersecurity threats in real-time.',te,
  a: m: ['Dr. Sarah ChenAI Researcher', 'Security Expert']
    durati,
  o: n: '18 months',fundi,
  n: g: '$500,000'
    outcom,
  e: s: [
  'Real-time threat detection system95% accuracy in threat classification'
      '3 pending patents5 research publications'
]
    ico,
  n: Brain,col,
  o: r: 'from-purple-500 to-indigo-600'
},
  {
  id: 2,tit,
  l: e: 'Quantum-Resistant Cryptographic Protocols',ar,
  e: a: 'Quantum Computing',stat,
  u: s: 'Active',descripti,
  o: n: 'Researching and developing cryptographic algorithms that remain secure against quantum computing attacks.',te,
  a: m: ['Dr. Michael RodriguezQuantum Researcher', 'Cryptographer']
    durati,
  o: n: '24 months',fundi,
  n: g: '$750,000'
    outcom,
  e: s: [
  'Post-quantum cryptographic framework2 patent applications'
      '3 research publicationsIndustry collaboration established'
]
    ico,
  n: Atom,col,
  o: r: 'from-blue-500 to-cyan-600'
},
  {
  id: 3,tit,
  l: e: 'Edge AI for Smart Manufacturing',ar,
  e: a: 'Edge Computing',stat,
  u: s: 'Active',descripti,
  o: n: 'Developing intelligent edge computing solutions for real-time manufacturing process optimization.',te,
  a: m: ['Dr. Emily WangEdge Computing Expert', 'Manufacturing Specialist']
    durati,
  o: n: '12 months',fundi,
  n: g: '$300,000'
    outcom,
  e: s: [
  'Edge AI platform prototype30% efficiency improvement'
      '2 research publicationsIndustry partnership formed'
]
    ico,
  n: Zap,col,
  o: r: 'from-yellow-500 to-orange-600'
},
  {
  id: 4,tit,
  l: e: 'Privacy-Preserving Data Analytics',ar,
  e: a: 'Data Science',stat,
  u: s: 'Completed',descripti,
  o: n: 'Researching techniques for analyzing sensitive data while preserving individual privacy.',te,
  a: m: ['Dr. James BrownData Scientist', 'Privacy Expert']
    durati,
  o: n: '15 months',fundi,
  n: g: '$400,000'
    outcom,
  e: s: [
  'Privacy-preserving analytics framework4 research publications'
      '1 patent grantedOpen-source toolkit released'
]
    ico,
  n: TrendingUp,col,
  o: r: 'from-green-500 to-emerald-600'
},
  {
  id: 5,tit,
  l: e: 'Cloud-Native Security Architecture',ar,
  e: a: 'Cloud-Native',stat,
  u: s: 'Active',descripti,
  o: n: 'Developing security-first cloud architecture patterns for enterprise applications.',te,
  a: m: ['Dr. Lisa GarciaCloud Architect', 'Security Researcher']
    durati,
  o: n: '20 months',fundi,
  n: g: '$600,000'
    outcom,
  e: s: [
  'Security architecture framework3 research publications'
      '2 patent applicationsEnterprise pilot program'
]
    ico,
  n: Cloud,col,
  o: r: 'from-indigo-500 to-purple-600'
},
  {
  id: 6,tit,
  l: e: 'AI Ethics and Responsible AI',ar,
  e: a: 'AI & ML',stat,
  u: s: 'Active',descripti,
  o: n: 'Researching ethical considerations in AI development and deployment.',te,
  a: m: ['Dr. David KimAI Ethicist', 'Social Scientist']
    durati,
  o: n: '16 months',fundi,
  n: g: '$350,000'
    outcom,
  e: s: [
  'AI ethics frameworkResponsible AI guidelines'
      '4 research publicationsIndustry standards contribution'
]
    ico,
  n: Brain,col,
  o: r: 'from-purple-500 to-indigo-600'
},
  ]
const publications = [
  {
  id: 1,tit,
  l: e: 'Advanced Neural Network Architectures for Cybersecurity',autho,
  r: s: ['Dr. Sarah ChenDr. Michael Rodriguez'],journ,
  a: l: 'IEEE Transactions on Cybersecurity',ye,
  a: r: 2027,citatio,
  n: s: 45,ar,
  e: a: 'AI & ML',abstra,
  c: t: 'This paper presents novel neural network architectures specifically designed for detecting sophisticated cyber threats...'
},
  {
  id: 2,tit,
  l: e: 'Quantum-Resistant Cryptographic Protocol,
  s: A Comprehensive Survey',autho,
  r: s: ['Dr. Michael RodriguezDr. Emily Wang'],journ,
  a: l: 'Cryptography and Security',ye,
  a: r: 2027,citatio,
  n: s: 32,ar,
  e: a: 'Quantum Computing',abstra,
  c: t: 'We survey the current state of post-quantum cryptography and propose new protocols...'
},
  {
  id: 3,tit,
  l: e: 'Edge Computing Optimization for Real-Time AI Applications',autho,
  r: s: ['Dr. Emily WangDr. James Brown'],journ,
  a: l: 'Edge Computing Systems',ye,
  a: r: 2026,citatio,
  n: s: 28,ar,
  e: a: 'Edge Computing',abstra,
  c: t: 'This research explores optimization techniques for deploying AI models at the edge...'
},
  {
  id: 4,tit,
  l: e: 'Privacy-Preserving Machine Learnin,
  g: Techniques and Applications',autho,
  r: s: ['Dr. James BrownDr. Lisa Garcia'],journ,
  a: l: 'Data Privacy and Security',ye,
  a: r: 2026,citatio,
  n: s: 56,ar,
  e: a: 'Data Science',abstra,
  c: t: 'We present a comprehensive framework for privacy-preserving machine learning...'
},
  {
  id: 5,tit,
  l: e: 'Security-First Cloud Architecture Patterns',autho,
  r: s: ['Dr. Lisa GarciaDr. David Kim'],journ,
  a: l: 'Cloud Computing Security',ye,
  a: r: 2026,citatio,
  n: s: 38,ar,
  e: a: 'Cloud-Native',abstra,
  c: t: 'This paper introduces security-first design patterns for cloud-native applications...'
},
  ]
const patents = [
  {
  id: 1,tit,
  l: e: 'Adaptive Threat Detection System Using Machine Learning',invento,
  r: s: ['Dr. Sarah ChenDr. Michael Rodriguez'],filingDa,
  t: e: '2026-08-15',stat,
  u: s: 'Granted',patentNumb,
  e: r: 'US 11,234,567'
    ar,
  e: a: 'AI & ML',descripti,
  o: n: 'A system for detecting cybersecurity threats using adaptive machine learning algorithms.'
},
  {
  id: 2,tit,
  l: e: 'Quantum-Resistant Digital Signature Algorithm',invento,
  r: s: ['Dr. Michael Rodriguez'],filingDa,
  t: e: '2026-06-20',stat,
  u: s: 'Pending',patentNumb,
  e: r: 'US 2026/0123456',ar,
  e: a: 'Quantum Computing',descripti,
  o: n: 'A digital signature algorithm resistant to quantum computing attacks.'
},
  {
  id: 3,tit,
  l: e: 'Edge Computing Resource Optimization Method',invento,
  r: s: ['Dr. Emily WangDr. James Brown'],filingDa,
  t: e: '2026-05-10',stat,
  u: s: 'Granted',patentNumb,
  e: r: 'US 11,123,456'
    ar,
  e: a: 'Edge Computing',descripti,
  o: n: 'A method for optimizing resource allocation in edge computing environments.'
},
  {
  id: 4,tit,
  l: e: 'Privacy-Preserving Data Analytics Framework',invento,
  r: s: ['Dr. James Brown'],filingDa,
  t: e: '2026-03-25',stat,
  u: s: 'Granted',patentNumb,
  e: r: 'US 11,012,345'
    ar,
  e: a: 'Data Science',descripti,
  o: n: 'A framework for analyzing data while preserving individual privacy.'
},
  {
  id: 5,tit,
  l: e: 'Cloud Security Architecture Pattern',invento,
  r: s: ['Dr. Lisa Garcia'],filingDa,
  t: e: '2026-02-15',stat,
  u: s: 'Pending',patentNumb,
  e: r: 'US 2026/0098765',ar,
  e: a: 'Cloud-Native',descripti,
  o: n: 'A security architecture pattern for cloud-native applications.'
},
  ]
export default function ResearchDevelopment() {
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const areas = [['All', ...researchAreas.map(area => area.name)],
  ]
  const statuses = [['AllActive', 'CompletedPlanning'],
  ]

  const filteredProjects = researchProjects.filter(project () => {
  const matchesArea = selectedArea === 'All' || project.area === selectedArea;
const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesArea && matchesStatus && matchesSearch;
})
  const getAreaIcon = (areaNa,
  m: e: string) () => {
  const area = researchAreas.find(a => a.name === areaName)
    return area ? area.icon : FlaskConical;
}

  const getAreaColor = (areaNa,
  m: e: string) () => {
  const area = researchAreas.find(a => a.name === areaName)
    return area ? area.color : 'from-gray-500 to-slate-600'
}

  const getStatusBadge = (stat,
  u: s: string) () => {
  if (if (status === 'Active') {
  ) {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Active</span>
    } else if (if (status === 'Completed') {
  ) {
      return <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Completed</span>
    } else {
  return <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Planning</span>
}
}
},
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */},
  }
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <FlaskConical className="w-5 h-5" />
              <span className="font-medium">Research & Development</span>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Advancing Technology Frontiers;
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Explore Zion Tech Group's cutting-edge research initiatives, innovative projects;
              and breakthrough technologies that are shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */},
  }
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-4">
              {/* Search */},
  }
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input;
                    type="text"
                    placeholder="Search research..."
                    value={searchTerm},
  }
                    onChange={(e) => setSearchTerm(e.target.value)},
  }
                    className="className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                  />
                </div>
              </div>

              {/* Research Area Filter */},
  }
              <div>
                <select;
                  value={selectedArea},
  }
                  onChange={(e) => setSelectedArea(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                >
                  {areas.map(area => (
  <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */},
  }
              <div>
                <select;
                  value={selectedStatus},
  }
                  onChange={(e) => setSelectedStatus(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                >
                  {statuses.map(status => (
  <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */},
  }
      <section id="research-areas" className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Research Areas</h2>
            <p className="text-zion-slate-light text-lg">Explore our diverse research domains and cutting-edge initiatives</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {researchAreas.map((area, index) () => {
  const IconComponent = area.icon;
              return (
                <motion.div;
                  key={area.id},
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
                  className="className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-zion-cyan/30 transition-all duration-300";"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.name}</h3>
                  <p className="text-zion-slate-light mb-4">{area.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Research Focus</h4>
                    <div className="space-y-1">
                      {area.focus.slice(0, 4).map((focus, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{area.publications}</div>
                      <div className="text-xs text-zion-slate-light">Publications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{area.patents}</div>
                      <div className="text-xs text-zion-slate-light">Patents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{area.projects}</div>
                      <div className="text-xs text-zion-slate-light">Projects</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Research Projects */},
  }
      <section id="active-projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Active Research Projects</h2>
            <p className="text-zion-slate-light text-lg">Discover our ongoing research initiatives and their impact</p>
          </motion.div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) () => {
  const IconComponent = getAreaIcon(project.area)
              const areaColor = getAreaColor(project.area)
              return (
                <motion.div;
                  key={project.id},
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
                  className="className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-zion-cyan/30 transition-all duration-300";"
                >
                  {/* Header */},
  }
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-16 h-16 bg-gradient-to-br ${areaColor} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(project.status)},
  }
                          <span className="text-sm text-zion-cyan">{project.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */},
  }
                  <p className="text-zion-slate-light mb-4">{project.description}</p>

                  {/* Project Details */},
  }
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm text-zion-slate-light">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Durati,
  o: n: {project.duration},
  }
                      </span>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        Fundi,
  n: g: {project.funding},
  }
                      </span>
                    </div>
                  </div>

                  {/* Team */},
  }
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Research Team</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member, idx) => (
  <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                          {member},
  }
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */},
  }
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Expected Outcomes</h4>
                    <div className="space-y-1">
                      {project.outcomes.map((outcome, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */},
  }
                  <div className="flex items-center justify-between">
                    <Link;
                      to={`/research-development/projects/${project.id}`}
                      className="className="inline-flex items-center text-zion-cyan,
  hove: r: text-zion-cyan-light transition-colors duration-300";"
                    >
                      Learn More;
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate-light">Contact us for collaboration</div>
                      <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Publications */},
  }
      <section id="publications" className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Research Publications</h2>
            <p className="text-zion-slate-light text-lg">Our latest research contributions to the scientific community</p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
  <motion.div;
                key={pub.id},
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
                className="className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-zion-cyan/30 transition-all duration-300";"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {pub.authors.join()},
  }
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {pub.journal},
  }
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pub.year},
  }
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {pub.citations} citations;
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{pub.abstract}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {pub.area},
  }
                      </span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <Link;
                      to={`/research-development/publications/${pub.id}`}
                      className="className="inline-flex items-center text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors duration-300";"
                    >
                      Read Paper;
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */},
  }
      <section id="patents" className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Patents & Intellectual Property</h2>
            <p className="text-zion-slate-light text-lg">Our innovative technologies protected by intellectual property rights</p>
          </motion.div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {patents.map((patent, index) => (
  <motion.div;
                key={patent.id},
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
                className="className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-zion-cyan/30 transition-all duration-300";"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{patent.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-xs rounded-full border ${
  patent.status === 'Granted'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
}`}>
                        {patent.status},
  }
                      </span>
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {patent.area},
  }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="text-sm text-zion-slate-light">
                    <span className="font-medium text-white">Invento,
  r: s:</span> {patent.inventors.join(', ')},
  }
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    <span className="font-medium text-white">Filing,
  Dat: e:</span> {patent.filingDate},
  }
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    <span className="font-medium text-white">Patent,
  Numbe: r:</span> {patent.patentNumber},
  }
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4">{patent.description}</p>

                <div className="flex items-center justify-between">
                  <Link;
                    to={`/research-development/patents/${patent.id}`}
                    className="className="inline-flex items-center text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors duration-300";"
                  >
                    View Details;
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="text-right">
                    <div className="text-sm text-zion-slate-light">Contact us for licensing</div>
                    <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Collaborate with Our Research Team;
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Partner with Zion Tech Group on cutting-edge research projects;
              explore licensing opportunities, or join our research initiatives.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl,
  hove: r:bg-zion-slate-light transition-all duration-300 font-medium text-lg";"
              >
                Start Collaboration;
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link;
                to="/case-studies"
                className="className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl,
  hove: r:bg-white hove,
  r:text-zion-cyan transition-all duration-300 font-medium text-lg";"
              >
                View Research Impact;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}