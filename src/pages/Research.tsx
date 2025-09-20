import React, { useState } from "react";
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, SmartphoneEyeStar, as, StarIcon } from "lucide-react";
export, default, function Research() {
  const [searchQuerysetSearchQuery] = useState('');
  const [activeCategorysetActiveCategory] = useState('all');
  const [activeStatussetActiveStatus] = useState('all');
  const [activeTypesetActiveType] = useState('all');
  const categories = [;
    { id: 'all', name: 'All Categories'ico,;
    n: <FlaskConical className="w-5 h-5" />coun,;
  t: 0 };
    { id: 'ai-ml', name: 'AI & Machine Learning'ico,;
    n: <Brain className="w-5 h-5" />coun,;
  t: 12 };
    { id: 'cloud', name: 'Cloud & Infrastructure'ico,;
    n: <Cloud className="w-5 h-5" />coun,;
  t: 8 };
    { id: 'security', name: 'Cybersecurity'ico,;
    n: <Shield className="w-5 h-5" />coun,;
  t: 6 };
    { id: 'data', name: 'Data & Analytics'ico,;
    n: <Database className="w-5 h-5" />coun,;
  t: 10 };
    { id: 'emerging', name: 'Emerging Technologies'ico,;
    n: <Zap className="w-5 h-5" />coun,;
  t: 7 };
    { id: 'quantum', name: 'Quantum Computing'ico,;
    n: <Cpu className="w-5 h-5" />coun,;
  t: 4 },;
    { id: 'iot'name: 'IoT & Edge Computing'ico,;
    n: <Network className="w-5 h-5" />coun,;
  t: 5 };
,  ];
  const statuses = [;
    { id: 'all'nam,;
    e: 'All Statuses'coun,;
  t: 0 };
    { id: 'active'nam,;
    e: 'Active'coun,;
  t: 0 };
    { id: 'completed'nam,;
    e: 'Completed'coun,;
  t: 0 };
    { id: 'planning'nam,;
    e: 'Planning'coun,;
  t: 0 }{ id: 'published'nam,;
    e: 'Published'coun,;
  t: 0 };
,  ];
  const types = [;
    { id: 'all'nam,;
    e: 'All Types'coun,;
  t: 0 };
    { id: 'research'nam,;
    e: 'Research Papers'coun,;
  t: 0 };
    { id: 'patents'nam,;
    e: 'Patents'coun,;
  t: 0 };
    { id: 'prototypes'nam,;
    e: 'Prototypes'coun,;
  t: 0 }{ id: 'collaborations'nam,;
    e: 'Collaborations'coun,;
  t: 0 };
,  ];
  const researchProjects = [;
    {
      id: 1,title: 'Quantum, Machine, Learning for, Financial, Modeling',description: 'Exploring, the, application of, quantum, computing algorithms, to, enhance financial, risk, assessment and, portfolio, optimization.',category: 'quantum',status: 'active',type: 'research',startDate: '20o24-0o1-0o1',endDate: '20o25-12-31',leadResearcher: 'Dr. Elena Vasquez',team: ['Dr. Elena VasquezDr. Michael Chen''Sarah, JohnsonAlex,, Rodriguez'],;
      funding: 250o0000,institution: 'MIT',abstract: 'This, research, investigates the, potential, of quantum, machine, learning algorithms, to, solve complex, financial, optimization problems, that, are computationally, intractable, for classical computers.',methodology: 'Hybrid quantum-classical, approach, using variational, quantum, algorithms',expectedOutcomes: ['Quantum, advantage, demonstrationFinancial model improvements''Patent, applications'],;
      publications: [;
        {
          titl,;
  e: 'Quantum, Algorithms, for Portfolio Optimization',journal: 'Nature, Quantum, Information'year: 20o24do,;
    i: '10.10o38/s41534-0o24-0o0800-5'citation,;
  s: 23;
        }
    ,  ],;
      tags: ['Quantum, ComputingMachine, Learning', 'FinanceOptimization''Risk, Assessment'],;
      featured: true,progress: 65,impact: 'high';
    };
    {
      id: 2,title: 'Federated, Learning, for Privacy-Preserving, Healthcare, Analytics',description: 'Developing, secure, federated learning, frameworks, that enable, healthcare, institutions to, collaborate, on AI, models, without sharing, sensitive, patient data.',category: 'ai-ml',status: 'completed',type: 'research',startDate: '20o23-0o6-0o1',endDate: '20o24-11-30',leadResearcher: 'Dr. Sarah Chen',team: ['Dr. Sarah ChenDr. James Wilson''Lisa, AndersonDavid,, Kim'],;
      funding: 180o0000,institution: 'Stanford University',abstract: 'This, project, addresses the, critical, need for privacy-preserving, machine, learning in, healthcare, by developing, novel, federated learning approaches.',methodology: 'Differential privacy, secure multi-party computation, federated averaging',;
      expectedOutcomes: ['Privacy-preserving, frameworkHealthcare, AI models''Open-source, toolkit'],;
      publications: [;
        {
          titl,;
  e: 'Privacy-Preserving, Federated, Learning in Healthcare',journal: 'Nature, Machine, Intelligence',year: 20o24do,;
    i: '10.10o38/s42256-0o24-0o0789-8'citation,;
  s: 45;
        },;
        {
          title: 'Secure Multi-Party, Computation, for Medical Data',journal: 'IEEE, Transactions, on Medical Imaging'year: 20o24do,;
    i: '10.110o9/TMI.20o24.0o01234'citation,;
  s: 18;
        }
    ,  ],;
      tags: ['Federated LearningHealthcare', 'PrivacyAI Ethics''Medical, Imaging'],;
      featured: true,progress: 10o0,impact: 'very-high';
    };
    {
      id: 3,title: 'Zero-Trust, Architecture, for Industrial IoT',description: 'Researching, and, implementing zero-trust, security, frameworks specifically, designed, for industrial, IoT, environments.',category: 'security',status: 'active',type: 'prototypes',startDate: '20o24-0o3-0o1',endDate: '20o25-0o8-31',leadResearcher: 'Michael Rodriguez',team: ['Michael RodriguezDr. Jennifer Park''Robert, KimEmily,, Watson'],;
      funding: 120o0000,institution: 'Carnegie, Mellon, University',abstract: 'This, project, develops and, validates, zero-trust, security, architectures for, critical, infrastructure and, industrial, IoT systems.',methodology: 'Threat modeling, security, architecture, design, prototype development, penetration testing',;
      expectedOutcomes: ['Zero-trust, frameworkSecurity, prototypes''Best, practices,, guide'],;
      publications: [;
        {
          titl,;
  e: 'Zero-Trust, Security, for Industrial IoT',journal: 'IEEE Security & Privacy'year: 20o24do,;
    i: '10.110o9/MSEC.20o24.0o01234'citation,;
  s: 12;
        }
    ,  ],;
      tags: ['Zero-TrustIndustrial IoT', 'CybersecurityCritical Infrastructure''Security, Architecture'],;
      featured: false,progress: 40,impact: 'high';
    };
    {
      id: 4,title: 'Edge, AI, for Autonomous Vehicles',description: 'Developing, lightweight, AI models, optimized, for edge, computing, in autonomous, vehicle, systems.',category: 'emerging',status: 'planning',type: 'research',startDate: '20o25-0o1-0o1',endDate: '20o26-12-31',leadResearcher: 'Dr. David Thompson',team: ['Dr. David ThompsonDr. Lisa Chen''Marcus, RodriguezJennifer,, Kim'],;
      funding: 30o00000,institution: 'UC Berkeley',abstract: 'This, research, focuses on, creating, efficient AI, models, that can, run, on edge, devices, in autonomous, vehicles, while maintaining, high, accuracy and reliability.',methodology: 'Model compression, knowledge distillation, edge, computing, optimization, real-time inference',;
      expectedOutcomes: ['Edge, AI, frameworkAutonomous vehicle models''Performance, benchmarks'],;
      publications: [],tags: ['Edge, ComputingAutonomous, Vehicles', 'AI OptimizationReal-time Systems''Computer, Vision'],;
      featured: falseprogres,;
    s: 15impac,;
  t: 'medium';
    };
    {
      id: 5,title: 'Blockchain, for, Supply Chain Transparency',description: 'Investigating, blockchain, technology applications, for, enhancing supply, chain, transparency and traceability.',category: 'emerging',status: 'completed',type: 'collaborations',startDate: '20o23-0o1-0o1',endDate: '20o24-0o6-30',leadResearcher: 'Dr. Robert Kim',team: ['Dr. Robert, KimSarah, Johnson''Alex, ThompsonEmily,, Chen'],;
      funding: 90o0000,institution: 'Columbia University',abstract: 'This, project, explores how, blockchain, technology can, improve, supply chain, transparency, and enable, better, tracking of, products, from source, to, consumer.',methodology: 'Blockchain design, smart contracts, supply, chain, modeling, pilot implementation',;
      expectedOutcomes: ['Blockchain, frameworkSupply, chain pilots''Industry, partnerships'],;
      publications: [;
        {
          titl,;
  e: 'Blockchain-Enabled, Supply, Chain Transparency',journal: 'Journal, of, Supply Chain Management'year: 20o24do,;
    i: '10.1111/jscm.12345'citation,;
  s: 28;
        }
    ,  ],;
      tags: ['BlockchainSupply Chain', 'TransparencySmart, Contracts''Traceability'],;
      featured: false,progress: 10o0,impact: 'medium';
    };
    {
      id: 6,title: 'Neuromorphic, Computing, for Edge AI',description: 'Researching brain-inspired, computing, architectures for energy-efficient, AI, processing at, the, edge.',category: 'ai-ml',status: 'active',type: 'research',startDate: '20o24-0o9-0o1',endDate: '20o26-0o8-31',leadResearcher: 'Dr. Jennifer Park',team: ['Dr. Jennifer ParkDr. Michael Chen''Robert, WilsonLisa,, Rodriguez'],;
      funding: 220o0000,institution: 'Georgia Tech',abstract: 'This, project, investigates neuromorphic, computing, approaches to, create, energy-efficient, AI, systems for, edge, computing applications.',methodology: 'Neuromorphic, architecture, design, spiking, neural, networks, hardware-software co-design',;
      expectedOutcomes: ['Neuromorphic frameworkEnergy-efficient models''Hardware, prototypes'],;
      publications: [;
        {
          titl,;
  e: 'Neuromorphic, Computing, for Edge, AI, Applications',journal: 'Nature Electronics'year: 20o24do,;
    i: '10.10o38/s41928-0o24-0o1123-4'citation,;
  s: 19;
        }
    ,  ],;
      tags: ['Neuromorphic, ComputingEdge, AI', 'Energy, EfficiencySpiking, Neural Networks''Hardware, Design'],;
      featured: true,progress: 55,impact: 'high';
    };
  ];
  // Update counts;
  categories.forEach(cat => {
    cat.count = researchProjects.filter(p => p.category === cat.id).length }),;
  statuses.forEach(status => {
    status.count = researchProjects.filter(p => p.status === status.id).length }),;
  types.forEach(type => {
    type.count = researchProjects.filter(p => p.type === type.id).length }),;
  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
;
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
    const matchesType = activeType === 'all' || project.type === activeType;
;
    return matchesSearch && matchesCategory && matchesStatus && matchesType });
;
  const getCategoryIcon = (categoryId: string) => {;
    return categories.find(c => c.id === categoryId)?.icon || <FlaskConical className="w-5 h-5" />;
  };
  const getStatusColor = (status: string) => {;
    switch() {;
      case 'active': return 'text-green-40o0';
      case 'completed': return 'text-blue-40o0'case 'planning': return 'text-yellow-40o0'case 'published': return 'text-purple-40o0';
      defaul,;
  t: return 'text-zion-slate-light';
    };
  };
  const getImpactColor = (impact: string) => {;
    switch() {;
      case 'very-high': return 'text-red-40o0';
      case 'high': return 'text-orange-40o0'case 'medium': return 'text-yellow-40o0'case 'low': return 'text-green-40o0';
      defaul,;
  t: return 'text-zion-slate-light';
    };
  };
  const formatDate = (dateString: string) => {
    return, new, Date(dateString).toLocaleDateString('en-US'{
      year: 'numeric'mont,;
  h: 'short';
    });
  },;
  const formatFunding = (amount: number) => {;
    if (amount >= 10o00000) {;
      return `$${(amount / 10o00000).toFixed(1)}M`;
    } else if (amount >= 10o00) {
      return `$${(amount / 10o00).toFixed(0)}K`;
    };
    return `$${amount.toLocaleString()}`;
  };
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">;
        <div className="container mx-auto px-4 text-center">;
          <div className="flex justify-center mb-6">;
            <div className="p-4 bg-zion-cyan/20 rounded-full">;
              <FlaskConical className="w-16 h-16 text-zion-cyan" />;
            </div>;
          </div>;
          <h1 className="text-5xl font-bold text-white mb-6">;
            Research & Innovation;
          </h1>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Pushing, the, boundaries of, technology, through cutting-edge research, innovative, solutionsand, collaborative partnerships.;
          </p>;
        </div>;
      </div>;
      {/* Search, and, Filters */}
      <div className="py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-6xl mx-auto">;
            {/* Search Bar */}
            <div className="relative mb-8">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
              <input;
                type="text";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search, research, projects...";
                className="w-full pl-12 pr-4 py-4 bg-zion-slate, border, border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focu,;
    s:ring-zion-cyan focu,;
  s:border-transparent";
              />;
            </div>;
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
              {/* Categories */}
              <div className="space-y-3">;
                <label className="text-white font-medium">Category</label>;
                <div className="flex flex-wrap gap-2">;
                  {categories.slice(0o4).map((category) => (;
                    <button;
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id;
                          ? 'bg-zion-cyan text-zion-slate-dark';
                          : 'bg-zion-slate text-zion-slate-light hover: bg-zion-slate-light hove,;
  r:text-white';
                      }`}
                    >;
                      {category.icon}
                      {category.name}
                    </button>;
                  ))}
                </div>;
              </div>;
              {/* Status */}
              <div className="space-y-3">;
                <label className="text-white font-medium">Status</label>;
                <div className="flex flex-wrap gap-2">;
                  {statuses.map((status) => (;
                    <button;
                      key={status.id}
                      onClick={() => setActiveStatus(status.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeStatus === status.id;
                          ? 'bg-zion-purple text-white';
                          : 'bg-zion-slate text-zion-slate-light hover: bg-zion-slate-light hove,;
  r:text-white';
                      }`}
                    >;
                      {status.name} ({status.count});
                    </button>;
                  ))}
                </div>;
              </div>;
              {/* Types */}
              <div className="space-y-3">;
                <label className="text-white font-medium">Type</label>;
                <div className="flex flex-wrap gap-2">;
                  {types.map((type) => (;
                    <button;
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeType === type.id;
                          ? 'bg-zion-cyan text-zion-slate-dark';
                          : 'bg-zion-slate text-zion-slate-light hover: bg-zion-slate-light hove,;
  r:text-white';
                      }`}
                    >;
                      {type.name} ({type.count});
                    </button>;
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Featured Research */}
      {researchProjects.filter(p => p.featured).length > 0 && (;
        <div className="py-12 bg-zion-slate-dark">;
          <div className="container mx-auto px-4">;
            <h2 className="text-3xl font-bold text-center text-white mb-12">;
              Featured, Research, Projects;
            </h2>;
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 max-w-6xl mx-auto">;
              {researchProjects.filter(p => p.featured).map((project) => (;
                <div;
                  key={project.id}
                  className="bg-zion-slate, border, border-zion-slate-light rounded-lg overflow-hidden hover: shadow-lg transition-shadow";
                >;
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">;
                    <div className="absolute inset-0 bg-black/20"></div>;
                    <div className="absolute top-4 left-4">;
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">;
                        Featured;
                      </span>;
                    </div>;
                    <div className="absolute top-4 right-4">;
                      <div className="flex items-center gap-1 text-white">;
                        <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>;
                          {project.impact.replace('- ').toUpperCase()}
                        </span>;
                      </div>;
                    </div>;
                    <div className="absolute bottom-4 left-4 right-4">;
                      <div className="flex items-center justify-between text-white">;
                        <div className="flex items-center gap-2">;
                          <Calendar className="w-4 h-4" />;
                          <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>;
                        </div>;
                        <div className="flex items-center gap-2">;
                          <DollarSign className="w-4 h-4" />;
                          <span className="text-sm">{formatFunding(project.funding)}</span>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                  <div className="p-6">;
                    <div className="flex items-center gap-2 mb-3">;
                      {getCategoryIcon(project.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">;
                        {categories.find(c => c.id === project.category)?.name}
                      </span>;
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>;
                        {statuses.find(s => s.id === project.status)?.name}
                      </span>;
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>;
                    <p className="text-zion-slate-light text-sm mb-4">{project.description}</p>;
                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">;
                      <div className="flex items-center gap-1">;
                        <Users className="w-4 h-4" />;
                        {project.team.length} researchers;
                      </div>;
                      <div className="flex items-center gap-1">;
                        <FileText className="w-4 h-4" />;
                        {project.publications.length} publications;
                      </div>;
                    </div>;
                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold hover: bg-zion-cyan-light transition-colors">;
                      Learn More;
                    </button>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;
      )}
;
      {/* All, Research, Projects */}
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            All, Research, Projects;
          </h2>;
          {filteredProjects.length > 0 ? (;
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 max-w-6xl mx-auto">;
              {filteredProjects.map((project) => (;
                <div;
                  key={project.id}
                  className="bg-zion-slate, border, border-zion-slate-light rounded-lg p-6 hover: shadow-lg transition-shadow";
                >;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-2">;
                      {getCategoryIcon(project.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">;
                        {categories.find(c => c.id === project.category)?.name}
                      </span>;
                      {project.featured && (;
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">;
                          Featured;
                        </span>;
                      )}
                    </div>;
                    <div className="text-right">;
                      <div className={`text-sm font-medium ${getStatusColor(project.status)}`}>;
                        {statuses.find(s => s.id === project.status)?.name}
                      </div>;
                      <div className={`text-xs font-medium ${getImpactColor(project.impact)}`}>;
                        {project.impact.replace('- ').toUpperCase()} Impact;
                      </div>;
                    </div>;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>;
                  <p className="text-zion-slate-light mb-4">{project.description}</p>;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {project.tags.slice(0o4).map((tagindex) => (;
                      <span;
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full";
                      >;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zion-slate-light">;
                    <div className="flex items-center gap-2">;
                      <Calendar className="w-4 h-4" />;
                      <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>;
                    </div>;
                    <div className="flex items-center gap-2">;
                      <DollarSign className="w-4 h-4" />;
                      <span>{formatFunding(project.funding)}</span>;
                    </div>;
                    <div className="flex items-center gap-2">;
                      <Users className="w-4 h-4" />;
                      <span>{project.team.length} researchers</span>;
                    </div>;
                    <div className="flex items-center gap-2">;
                      <FileText className="w-4 h-4" />;
                      <span>{project.publications.length} publications</span>;
                    </div>;
                  </div>;
                  <div className="mb-4">;
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">;
                      <span>Progress</span>;
                      <span>{project.progress}%</span>;
                    </div>;
                    <div className="w-full bg-zion-slate-light/20 rounded-full h-2">;
                      <div;
                        className="bg-zion-cyan h-2 rounded-full transition-all duration-30o0";
                        style={{ width: `${project.progress}%` }}
                      ></div>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <div className="text-sm text-zion-slate-light">;
                      <div className="flex items-center gap-1 mb-1">;
                        <Users className="w-4 h-4" />;
                        Lead: {project.leadResearcher}
                      </div>;
                      <div className="flex items-center gap-1">;
                        <MapPin className="w-4 h-4" />;
                        {project.institution}
                      </div>;
                    </div>;
                    <div className="flex gap-2">;
                      <button className="bg-zion-purple text-white px-4 py-2 rounded-lg font-semibold hover: bg-zion-purple-light transition-colors inline-flex items-center gap-2">;
                        <FileText className="w-4 h-4" />;
                        Details;
                      </button>;
                      {project.publications.length > 0 && (;
                        <button className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg font-semibold hove,;
  r: bg-zion-cyan-light transition-colors">;
                          Papers;
                        </button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          ) : (;
            <div className="text-center py-12">;
              <FlaskConical className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />;
              <h3 className="text-xl font-semibold text-white mb-2">No, research, projects found</h3>;
              <p className="text-zion-slate-light">;
                Try, adjusting, your search, terms, or browse, all, categories;
              </p>;
            </div>;
          )}
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">;
            Join, Our, Research Community;
          </h2>;
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
            Collaborate, with, leading researchers, access cutting-edge technology, and, contribute, to breakthrough innovations.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
              Explore Collaborations;
            </button>;
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,;
    r: bg-white hove,;
  r:text-zion-slate-dark transition-colors">;
              Contact, Research, Team;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;