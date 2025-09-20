import { useCallback  } from "react";
import React, { useState } from "react"
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon   } from "lucide-react";
export default function Research() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: <FlaskConical className="w-5 h-5" />, cou,
  n: t: 0 },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: <Brain className="w-5 h-5" />, cou,
  n: t: 12 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & Infrastructure', ic,
  o: n: <Cloud className="w-5 h-5" />, cou,
  n: t: 8 },
  },
  { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: <Shield className="w-5 h-5" />, cou,
  n: t: 6 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', ic,
  o: n: <Database className="w-5 h-5" />, cou,
  n: t: 10 },
  },
  { id: 'emerging', na,
  m: e: 'Emerging Technologies', ic,
  o: n: <Zap className="w-5 h-5" />, cou,
  n: t: 7 },
  },
  { id: 'quantum', na,
  m: e: 'Quantum Computing', ic,
  o: n: <Cpu className="w-5 h-5" />, cou,
  n: t: 4 },
  },
  { id: 'iot', na,
  m: e: 'IoT & Edge Computing', ic,
  o: n: <Network className="w-5 h-5" />, cou,
  n: t: 5 },
  },
  ]
  const statuses = [
  { id: 'all', na,
  m: e: 'All Statuses', cou,
  n: t: 0 },
  },
  { id: 'active', na,
  m: e: 'Active', cou,
  n: t: 0 },
  },
  { id: 'completed', na,
  m: e: 'Completed', cou,
  n: t: 0 },
  },
  { id: 'planning', na,
  m: e: 'Planning', cou,
  n: t: 0 },
  },
  { id: 'published', na,
  m: e: 'Published', cou,
  n: t: 0 },
  },
  ]
  const types = [
  { id: 'all', na,
  m: e: 'All Types', cou,
  n: t: 0 },
  },
  { id: 'research', na,
  m: e: 'Research Papers', cou,
  n: t: 0 },
  },
  { id: 'patents', na,
  m: e: 'Patents', cou,
  n: t: 0 },
  },
  { id: 'prototypes', na,
  m: e: 'Prototypes', cou,
  n: t: 0 },
  },
  { id: 'collaborations', na,
  m: e: 'Collaborations', cou,
  n: t: 0 },
  },
  ]
  const researchProjects = [
  {
  id: 1,tit,
  l: e: 'Quantum Machine Learning for Financial Modeling',descripti,
  o: n: 'Exploring the application of quantum computing algorithms to enhance financial risk assessment and portfolio optimization.',catego,
  r: y: 'quantum',stat,
  u: s: 'active',ty,
  p: e: 'research',startDa,
  t: e: '2024-01-01',endDa,
  t: e: '2025-12-31',leadResearch,
  e: r: 'Dr. Elena Vasquez',te,
  a: m: ['Dr. Elena VasquezDr. Michael Chen', 'Sarah JohnsonAlex Rodriguez']
      fundi,
  n: g: 2500000,instituti,
  o: n: 'MIT',abstra,
  c: t: 'This research investigates the potential of quantum machine learning algorithms to solve complex financial optimization problems that are computationally intractable for classical computers.',methodolo,
  g: y: 'Hybrid quantum-classical approach using variational quantum algorithms',expectedOutcom,
  e: s: ['Quantum advantage demonstrationFinancial model improvements', 'Patent applications']
      publicatio,
  n: s: [
  {
  titl,
  e: 'Quantum Algorithms for Portfolio Optimization',journ,
  a: l: 'Nature Quantum Information',ye,
  a: r: 2024,d,
  o: i: '10.1038/s41534-024-00800-5',citatio,
  n: s: 23;
},
  ]
      ta,
  g: s: ['Quantum ComputingMachine Learning', 'FinanceOptimization', 'Risk Assessment']
      featur,
  e: d: true,progre,
  s: s: 65,impa,
  c: t: 'high'
},
  {
  id: 2,tit,
  l: e: 'Federated Learning for Privacy-Preserving Healthcare Analytics',descripti,
  o: n: 'Developing secure federated learning frameworks that enable healthcare institutions to collaborate on AI models without sharing sensitive patient data.',catego,
  r: y: 'ai-ml',stat,
  u: s: 'completed',ty,
  p: e: 'research',startDa,
  t: e: '2023-06-01',endDa,
  t: e: '2024-11-30',leadResearch,
  e: r: 'Dr. Sarah Chen',te,
  a: m: ['Dr. Sarah ChenDr. James Wilson', 'Lisa AndersonDavid Kim']
      fundi,
  n: g: 1800000,instituti,
  o: n: 'Stanford University',abstra,
  c: t: 'This project addresses the critical need for privacy-preserving machine learning in healthcare by developing novel federated learning approaches.',methodolo,
  g: y: 'Differential privacy, secure multi-party computation, federated averaging'
      expectedOutcom,
  e: s: ['Privacy-preserving frameworkHealthcare AI models', 'Open-source toolkit']
      publicatio,
  n: s: [
  {
  titl,
  e: 'Privacy-Preserving Federated Learning in Healthcare',journ,
  a: l: 'Nature Machine Intelligence',ye,
  a: r: 2024,d,
  o: i: '10.1038/s42256-024-00789-8',citatio,
  n: s: 45;
},
  {
  tit,
  l: e: 'Secure Multi-Party Computation for Medical Data',journ,
  a: l: 'IEEE Transactions on Medical Imaging',ye,
  a: r: 2024,d,
  o: i: '10.1109/TMI.2024.001234',citatio,
  n: s: 18;
},
  ]
      ta,
  g: s: ['Federated LearningHealthcare', 'PrivacyAI Ethics', 'Medical Imaging']
      featur,
  e: d: true,progre,
  s: s: 100,impa,
  c: t: 'very-high'
},
  {
  id: 3,tit,
  l: e: 'Zero-Trust Architecture for Industrial IoT',descripti,
  o: n: 'Researching and implementing zero-trust security frameworks specifically designed for industrial IoT environments.',catego,
  r: y: 'security',stat,
  u: s: 'active',ty,
  p: e: 'prototypes',startDa,
  t: e: '2024-03-01',endDa,
  t: e: '2025-08-31',leadResearch,
  e: r: 'Michael Rodriguez',te,
  a: m: ['Michael RodriguezDr. Jennifer Park', 'Robert KimEmily Watson']
      fundi,
  n: g: 1200000,instituti,
  o: n: 'Carnegie Mellon University',abstra,
  c: t: 'This project develops and validates zero-trust security architectures for critical infrastructure and industrial IoT systems.',methodolo,
  g: y: 'Threat modeling, security architecture design, prototype development, penetration testing'
      expectedOutcom,
  e: s: ['Zero-trust frameworkSecurity prototypes', 'Best practices guide']
      publicatio,
  n: s: [
  {
  titl,
  e: 'Zero-Trust Security for Industrial IoT',journ,
  a: l: 'IEEE Security & Privacy',ye,
  a: r: 2024,d,
  o: i: '10.1109/MSEC.2024.001234',citatio,
  n: s: 12;
},
  ]
      ta,
  g: s: ['Zero-TrustIndustrial IoT', 'CybersecurityCritical Infrastructure', 'Security Architecture']
      featur,
  e: d: false,progre,
  s: s: 40,impa,
  c: t: 'high'
},
  {
  id: 4,tit,
  l: e: 'Edge AI for Autonomous Vehicles',descripti,
  o: n: 'Developing lightweight AI models optimized for edge computing in autonomous vehicle systems.',catego,
  r: y: 'emerging',stat,
  u: s: 'planning',ty,
  p: e: 'research',startDa,
  t: e: '2025-01-01',endDa,
  t: e: '2026-12-31',leadResearch,
  e: r: 'Dr. David Thompson',te,
  a: m: ['Dr. David ThompsonDr. Lisa Chen', 'Marcus RodriguezJennifer Kim']
      fundi,
  n: g: 3000000,instituti,
  o: n: 'UC Berkeley',abstra,
  c: t: 'This research focuses on creating efficient AI models that can run on edge devices in autonomous vehicles while maintaining high accuracy and reliability.',methodolo,
  g: y: 'Model compression, knowledge distillation, edge computing optimization, real-time inference'
      expectedOutcom,
  e: s: ['Edge AI frameworkAutonomous vehicle models', 'Performance benchmarks']
      publicatio,
  n: s: [],ta,
  g: s: ['Edge ComputingAutonomous Vehicles', 'AI OptimizationReal-time Systems', 'Computer Vision']
      featur,
  e: d: false,progre,
  s: s: 15,impa,
  c: t: 'medium'
},
  {
  id: 5,tit,
  l: e: 'Blockchain for Supply Chain Transparency',descripti,
  o: n: 'Investigating blockchain technology applications for enhancing supply chain transparency and traceability.',catego,
  r: y: 'emerging',stat,
  u: s: 'completed',ty,
  p: e: 'collaborations',startDa,
  t: e: '2023-01-01',endDa,
  t: e: '2024-06-30',leadResearch,
  e: r: 'Dr. Robert Kim',te,
  a: m: ['Dr. Robert KimSarah Johnson', 'Alex ThompsonEmily Chen']
      fundi,
  n: g: 900000,instituti,
  o: n: 'Columbia University',abstra,
  c: t: 'This project explores how blockchain technology can improve supply chain transparency and enable better tracking of products from source to consumer.',methodolo,
  g: y: 'Blockchain design, smart contracts, supply chain modeling, pilot implementation'
      expectedOutcom,
  e: s: ['Blockchain frameworkSupply chain pilots', 'Industry partnerships']
      publicatio,
  n: s: [
  {
  titl,
  e: 'Blockchain-Enabled Supply Chain Transparency',journ,
  a: l: 'Journal of Supply Chain Management',ye,
  a: r: 2024,d,
  o: i: '10.1111/jscm.12345',citatio,
  n: s: 28;
},
  ]
      ta,
  g: s: ['BlockchainSupply Chain', 'TransparencySmart Contracts', 'Traceability']
      featur,
  e: d: false,progre,
  s: s: 100,impa,
  c: t: 'medium'
},
  {
  id: 6,tit,
  l: e: 'Neuromorphic Computing for Edge AI',descripti,
  o: n: 'Researching brain-inspired computing architectures for energy-efficient AI processing at the edge.',catego,
  r: y: 'ai-ml',stat,
  u: s: 'active',ty,
  p: e: 'research',startDa,
  t: e: '2024-09-01',endDa,
  t: e: '2026-08-31',leadResearch,
  e: r: 'Dr. Jennifer Park',te,
  a: m: ['Dr. Jennifer ParkDr. Michael Chen', 'Robert WilsonLisa Rodriguez']
      fundi,
  n: g: 2200000,instituti,
  o: n: 'Georgia Tech',abstra,
  c: t: 'This project investigates neuromorphic computing approaches to create energy-efficient AI systems for edge computing applications.',methodolo,
  g: y: 'Neuromorphic architecture design, spiking neural networks, hardware-software co-design'
      expectedOutcom,
  e: s: ['Neuromorphic frameworkEnergy-efficient models', 'Hardware prototypes']
      publicatio,
  n: s: [
  {
  titl,
  e: 'Neuromorphic Computing for Edge AI Applications',journ,
  a: l: 'Nature Electronics',ye,
  a: r: 2024,d,
  o: i: '10.1038/s41928-024-01123-4',citatio,
  n: s: 19;
},
  ]
      ta,
  g: s: ['Neuromorphic ComputingEdge AI', 'Energy EfficiencySpiking Neural Networks', 'Hardware Design']
      featur,
  e: d: true,progre,
  s: s: 55,impa,
  c: t: 'high'
},
  ]
  // Update counts;
  categories.forEach(cat () => {
  cat.count = researchProjects.filter(p => p.category === cat.id).length;
})

  statuses.forEach(status () => {
  status.count = researchProjects.filter(p => p.status === status.id).length;
})

  types.forEach(type () => {
  type.count = researchProjects.filter(p => p.type === type.id).length;
})

  const filteredProjects = researchProjects.filter(project () => {
  const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
const matchesType = activeType === 'all' || project.type === activeType;
    return matchesSearch && matchesCategory && matchesStatus && matchesType;
})

  const getCategoryIcon = (category,
  I: d: string) () => {
  return categories.find(c => c.id === categoryId)?.icon || <FlaskConical className="w-5 h-5" />
  }
  const getStatusColor = (stat,
  u: s: string) () => {
  switch (status) {
  case 'active': return 'text-green-400'
      case 'completed': return 'text-blue-400'
      case 'planning': return 'text-yellow-400'
      case 'published': return 'text-purple-400'
      defaul,
  t: return 'text-zion-slate-light'
},
  }
  const getImpactColor = (impa,
  c: t: string) () => {
  switch (impact) {
  case 'very-high': return 'text-red-400'
      case 'high': return 'text-orange-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
      defaul,
  t: return 'text-zion-slate-light'
},
  }
  const formatDate = (dateStri,
  n: g: string) () => {
  return new Date(dateString).toLocaleDateString('en-US', {
  ye,
  a: r: 'numeric',mon,
  t: h: 'short'
})
  }

  const formatFunding = (amou,
  n: t: number) () => {
  if (if (amount >= 1000000) {
  ) {
      return `$${(amount / 1000000).toFixed(1)}M`
} else if (if (amount >= 1000) {
  ) {
      return `$${(amount / 1000).toFixed(0)}K`
}
    return `$${amount.toLocaleString()}`
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <FlaskConical className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Research & Innovation;
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research, innovative solutions, and collaborative partnerships.
          </p>
        </div>
      </div>

      {/* Search and Filters */},
  }
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */},
  }
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input;
                type="text"
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                placeholder="Search research projects..."
                className="className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
              />
            </div>

            {/* Filters */},
  }
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-8">
              {/* Categories */},
  }
              <div className="space-y-3">
                <label className="text-white font-medium">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
  <button;
                      key={category.id},
  }
                      onClick={onClick={() => setActiveCategory(category.id)},
  },
  }
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
  activeCategory === category.id;
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light,
  hove: r: bg-zion-slate-light hove,
  r:text-white'
}`}
                    >
                      {category.icon},
  },
  {category.name},
  }
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */},
  }
              <div className="space-y-3">
                <label className="text-white font-medium">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
  <button;
                      key={status.id},
  }
                      onClick={onClick={() => setActiveStatus(status.id)},
  },
  }
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
  activeStatus === status.id;
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light,
  hove: r: bg-zion-slate-light hove,
  r:text-white'
}`}
                    >
                      {status.name} ({status.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Types */},
  }
              <div className="space-y-3">
                <label className="text-white font-medium">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
  <button;
                      key={type.id},
  }
                      onClick={onClick={() => setActiveType(type.id)},
  },
  }
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
  activeType === type.id;
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light,
  hove: r: bg-zion-slate-light hove,
  r:text-white'
}`}
                    >
                      {type.name} ({type.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Research */},
  },
  {researchProjects.filter(p => p.featured).length > 0 && (
  <div className="py-12 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Research Projects;
            </h2>
            <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {researchProjects.filter(p => p.featured).map((project) => (
  <div;
                  key={project.id},
  }
                  className="className="bg-zion-slate border border-zion-slate-light rounded-lg overflow-hidden,
  hove: r:shadow-lg transition-shadow";"
                >
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        Featured;
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 text-white">
                        <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>
                          {project.impact.replace('- ').toUpperCase()},
  }
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm">{formatFunding(project.funding)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {getCategoryIcon(project.category)},
  }
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === project.category)?.name},
  }
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {statuses.find(s => s.id === project.status)?.name},
  }
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{project.description}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.team.length} researchers;
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {project.publications.length} publications;
                      </div>
                    </div>

                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors">
                      Learn More;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )},
  {/* All Research Projects */},
  }
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            All Research Projects;
          </h2>

          {filteredProjects.length > 0 ? (
  <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredProjects.map((project) => (
  <div;
                  key={project.id},
  }
                  className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6,
  hove: r:shadow-lg transition-shadow";"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(project.category)},
  }
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === project.category)?.name},
  }
                      </span>
                      {project.featured && (
  <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                          Featured;
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {statuses.find(s => s.id === project.status)?.name},
  }
                      </div>
                      <div className={`text-xs font-medium ${getImpactColor(project.impact)}`}>
                        {project.impact.replace('- ').toUpperCase()} Impact;
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-zion-slate-light mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
  <span;
                        key={index},
  }
                        className="className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full";"
                      >
                        {tag},
  }
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{formatFunding(project.funding)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team.length} researchers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{project.publications.length} publications</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                      <div;
                        className="className="bg-zion-cyan h-2 rounded-full transition-all duration-300";"
                        style={ wid,
  t: h: `${project.progress}%` },
  }
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-4 h-4" />
                        Le,
  a: d: {project.leadResearcher},
  }
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.institution},
  }
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="bg-zion-purple text-white px-4 py-2 rounded-lg font-semibold,
  hove: r: bg-zion-purple-light transition-colors inline-flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Details;
                      </button>
                      {project.publications.length > 0 && (
  <button className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg font-semibold hove,
  r:bg-zion-cyan-light transition-colors">
                          Papers;
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
  <div className="text-center py-12">
              <FlaskConical className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No research projects found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search terms or browse all categories;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */},
  }
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Research Community;
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers, access cutting-edge technology, and contribute to breakthrough innovations.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors">
              Explore Collaborations;
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-zion-slate-dark transition-colors">
              Contact Research Team;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}