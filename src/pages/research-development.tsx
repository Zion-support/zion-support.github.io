import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  FlaskConical,;
  Brain,;
  Shield,;
  Cloud,;
  TrendingUp,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  Rocket,;
  Users,;
  BarChart3,;
  FileImage,;
  MessageCircle,;
  Video,;
  FileText,;
  Heart,;
  Award,;
  Clock,;
  DollarSign,;
  Search,;
  Filter,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Target,;
  BookOpen,;
  GraduationCap,;
  Lightbulb,;
  Microscope,;
  TestTube,;
  Atom,;
  Satellite,;
  Telescope;
} from "lucide-react"
const researchAreas = [;
  {;
    id: 'ai-ml',name: 'Artificial Intelligence & Machine Learning',icon: Brain,description: 'Advancing the frontiers of AI through innovative research in neural networks, natural language processing, and computer vision.',;
    color: 'from-purple-500 to-indigo-600',focus: [;
      'Deep Learning ArchitecturesNatural Language Processing'
      'Computer Vision & Image RecognitionReinforcement Learning',;
      'AI Ethics & Responsible AIEdge AI & Federated Learning'
    ],;
    publications: 15,patents: 8,projects: 12;
  };
  {;
    id: 'quantum-computing',name: 'Quantum Computing & Quantum Technologies',icon: Atom,description: 'Exploring quantum computing applications and developing quantum-resistant cryptographic solutions.',color: 'from-blue-500 to-cyan-600',focus: [;
      'Quantum AlgorithmsQuantum Cryptography'
      'Quantum Machine LearningQuantum Error Correction',;
      'Post-Quantum CryptographyQuantum Sensing'
    ],;
    publications: 8,patents: 5,projects: 6;
  };
  {;
    id: 'cybersecurity',name: 'Cybersecurity & Privacy',icon: Shield,description: 'Developing next-generation security solutions to protect against evolving cyber threats.',color: 'from-red-500 to-pink-600',focus: [;
      'Threat IntelligenceZero-Trust Security'
      'Privacy-Preserving TechnologiesBlockchain Security',;
      'IoT SecurityAI-Powered Security'
    ],;
    publications: 22,patents: 12,projects: 18;
  };
  {;
    id: 'edge-computing',name: 'Edge Computing & IoT',icon: Zap,description: 'Researching distributed computing paradigms and intelligent edge systems for real-time processing.',color: 'from-yellow-500 to-orange-600',focus: [;
      'Edge AI & Machine Learning5G & 6G Networks'
      'IoT Security & PrivacyEdge Computing Optimization',;
      'Real-time Data ProcessingSmart City Technologies'
    ],;
    publications: 18,patents: 9,projects: 14;
  };
  {;
    id: 'data-science',name: 'Data Science & Analytics',icon: TrendingUp,description: 'Advancing data analytics methodologies and developing tools for extracting meaningful insights from complex datasets.',color: 'from-green-500 to-emerald-600',focus: [;
      'Big Data ProcessingPredictive Analytics'
      'Data VisualizationStatistical Modeling',;
      'Real-time AnalyticsData Privacy & Ethics'
    ],;
    publications: 25,patents: 15,projects: 20;
  };
  {;
    id: 'cloud-native',name: 'Cloud-Native Technologies',icon: Cloud,description: 'Researching cloud computing architectures and developing scalable, resilient cloud solutions.',;
    color: 'from-indigo-500 to-purple-600',focus: [;
      'Microservices ArchitectureContainer Orchestration'
      'Serverless ComputingMulti-cloud Strategies',;
      'Cloud SecurityDevOps Automation'
    ],;
    publications: 20,patents: 10,projects: 16;
  };
];
const researchProjects = [;
  {;
    id: 1,title: 'AI-Powered Cybersecurity Threat Detection',area: 'AI & ML',status: 'Active',description: 'Developing machine learning algorithms to detect and respond to cybersecurity threats in real-time.',team: ['Dr. Sarah ChenAI Researcher', 'Security Expert'],;
    duration: '18 months',funding: '$500,000',;
    outcomes: [;
      'Real-time threat detection system95% accuracy in threat classification'
      '3 pending patents5 research publications'
    ],;
    icon: Brain,color: 'from-purple-500 to-indigo-600'
  };
  {;
    id: 2,title: 'Quantum-Resistant Cryptographic Protocols',area: 'Quantum Computing',status: 'Active',description: 'Researching and developing cryptographic algorithms that remain secure against quantum computing attacks.',team: ['Dr. Michael RodriguezQuantum Researcher', 'Cryptographer'],;
    duration: '24 months',funding: '$750,000',;
    outcomes: [;
      'Post-quantum cryptographic framework2 patent applications'
      '3 research publicationsIndustry collaboration established'
    ],;
    icon: Atom,color: 'from-blue-500 to-cyan-600'
  };
  {;
    id: 3,title: 'Edge AI for Smart Manufacturing',area: 'Edge Computing',status: 'Active',description: 'Developing intelligent edge computing solutions for real-time manufacturing process optimization.',team: ['Dr. Emily WangEdge Computing Expert', 'Manufacturing Specialist'],;
    duration: '12 months',funding: '$300,000',;
    outcomes: [;
      'Edge AI platform prototype30% efficiency improvement'
      '2 research publicationsIndustry partnership formed'
    ],;
    icon: Zap,color: 'from-yellow-500 to-orange-600'
  };
  {;
    id: 4,title: 'Privacy-Preserving Data Analytics',area: 'Data Science',status: 'Completed',description: 'Researching techniques for analyzing sensitive data while preserving individual privacy.',team: ['Dr. James BrownData Scientist', 'Privacy Expert'],;
    duration: '15 months',funding: '$400,000',;
    outcomes: [;
      'Privacy-preserving analytics framework4 research publications'
      '1 patent grantedOpen-source toolkit released'
    ],;
    icon: TrendingUp,color: 'from-green-500 to-emerald-600'
  };
  {;
    id: 5,title: 'Cloud-Native Security Architecture',area: 'Cloud-Native',status: 'Active',description: 'Developing security-first cloud architecture patterns for enterprise applications.',team: ['Dr. Lisa GarciaCloud Architect', 'Security Researcher'],;
    duration: '20 months',funding: '$600,000',;
    outcomes: [;
      'Security architecture framework3 research publications'
      '2 patent applicationsEnterprise pilot program'
    ],;
    icon: Cloud,color: 'from-indigo-500 to-purple-600'
  };
  {;
    id: 6,title: 'AI Ethics and Responsible AI',area: 'AI & ML',status: 'Active',description: 'Researching ethical considerations in AI development and deployment.',team: ['Dr. David KimAI Ethicist', 'Social Scientist'],;
    duration: '16 months',funding: '$350,000',;
    outcomes: [;
      'AI ethics frameworkResponsible AI guidelines'
      '4 research publicationsIndustry standards contribution'
    ],;
    icon: Brain,color: 'from-purple-500 to-indigo-600'
  };
];
const publications = [;
  {;
    id: 1,title: 'Advanced Neural Network Architectures for Cybersecurity',authors: ['Dr. Sarah ChenDr. Michael Rodriguez'],journal: 'IEEE Transactions on Cybersecurity',year: 2027,citations: 45,area: 'AI & ML',abstract: 'This paper presents novel neural network architectures specifically designed for detecting sophisticated cyber threats...'
  };
  {;
    id: 2,title: 'Quantum-Resistant Cryptographic Protocols: A Comprehensive Survey',authors: ['Dr. Michael RodriguezDr. Emily Wang'],journal: 'Cryptography and Security',year: 2027,citations: 32,area: 'Quantum Computing',abstract: 'We survey the current state of post-quantum cryptography and propose new protocols...'
  };
  {;
    id: 3,title: 'Edge Computing Optimization for Real-Time AI Applications',authors: ['Dr. Emily WangDr. James Brown'],journal: 'Edge Computing Systems',year: 2026,citations: 28,area: 'Edge Computing',abstract: 'This research explores optimization techniques for deploying AI models at the edge...'
  };
  {;
    id: 4,title: 'Privacy-Preserving Machine Learning: Techniques and Applications',authors: ['Dr. James BrownDr. Lisa Garcia'],journal: 'Data Privacy and Security',year: 2026,citations: 56,area: 'Data Science',abstract: 'We present a comprehensive framework for privacy-preserving machine learning...'
  };
  {;
    id: 5,title: 'Security-First Cloud Architecture Patterns',authors: ['Dr. Lisa GarciaDr. David Kim'],journal: 'Cloud Computing Security',year: 2026,citations: 38,area: 'Cloud-Native',abstract: 'This paper introduces security-first design patterns for cloud-native applications...'
  };
];
const patents = [;
  {;
    id: 1,title: 'Adaptive Threat Detection System Using Machine Learning',inventors: ['Dr. Sarah ChenDr. Michael Rodriguez'],filingDate: '2026-08-15',status: 'Granted',patentNumber: 'US 11,234,567',;
    area: 'AI & ML',description: 'A system for detecting cybersecurity threats using adaptive machine learning algorithms.'
  };
  {;
    id: 2,title: 'Quantum-Resistant Digital Signature Algorithm',inventors: ['Dr. Michael Rodriguez'],filingDate: '2026-06-20',status: 'Pending',patentNumber: 'US 2026/0123456',area: 'Quantum Computing',description: 'A digital signature algorithm resistant to quantum computing attacks.'
  };
  {;
    id: 3,title: 'Edge Computing Resource Optimization Method',inventors: ['Dr. Emily WangDr. James Brown'],filingDate: '2026-05-10',status: 'Granted',patentNumber: 'US 11,123,456',;
    area: 'Edge Computing',description: 'A method for optimizing resource allocation in edge computing environments.'
  };
  {;
    id: 4,title: 'Privacy-Preserving Data Analytics Framework',inventors: ['Dr. James Brown'],filingDate: '2026-03-25',status: 'Granted',patentNumber: 'US 11,012,345',;
    area: 'Data Science',description: 'A framework for analyzing data while preserving individual privacy.'
  };
  {;
    id: 5,title: 'Cloud Security Architecture Pattern',inventors: ['Dr. Lisa Garcia'],filingDate: '2026-02-15',status: 'Pending',patentNumber: 'US 2026/0098765',area: 'Cloud-Native',description: 'A security architecture pattern for cloud-native applications.'
  };
];
export default function ResearchDevelopment() {;
  const [selectedArea, setSelectedArea] = useState('All'),;
  const [selectedStatus, setSelectedStatus] = useState('All'),;
  const [searchTerm, setSearchTerm] = useState(''),;

  const areas = ['All', ...researchAreas.map(area => area.name)]
  const statuses = ['AllActive', 'CompletedPlanning']

  const filteredProjects = researchProjects.filter(project => {;
    const matchesArea = selectedArea === 'All' || project.area === selectedArea
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesStatus && matchesSearch;&& matchesStatus && matchesSearch; matchesStatus && matchesSearch
  });
  const getAreaIcon = (areaName: string) => {;
    const area = researchAreas.find(a => a.name === areaName)
    return area ? area.icon : FlaskConical
  },;

  const getAreaColor = (areaName: string) => {;
    const area = researchAreas.find(a => a.name === areaName)
    return area ? area.color : 'from-gray-500 to-slate-600'
  },;

  const getStatusBadge = (status: string) => {;
    if (status === 'Active') {;
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Active</[^>]*>
    } else if (status === 'Completed') {;
      return <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Completed</[^>]*>
    } else {;
      return <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Planning</span>,;
    };
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">;
      {/* Hero Section */};
      <section className="pt-24 pb-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">;
              <[^>]*/>
              <span className="font-medium">Research & Development</[^>]*>
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Advancing Technology Frontiers;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">;
              Explore Zion Tech Group's cutting-edge research initiatives, innovative projects,;
              and breakthrough technologies that are shaping the future of technology.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search & Filters */};
      <section className="py-8">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              {/* Search */};
              <div className="md:col-span-1">;
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    placeholder="Search research..."
                    value={searchTerm};
                    onChange={(e) => setSearchTerm(e.target.value)};
                    className="[^"]*"
                  />;
                </[^>]*>
              </[^>]*>

              {/* Research Area Filter */};
              <div>;
                <select;
                  value={selectedArea};
                  onChange={(e) => setSelectedArea(e.target.value)};
                  className="[^"]*"
                >;
                  {areas.map(area => (;
                    <option key={area} value={area}>{area}</[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Status Filter */};
              <div>;
                <select;
                  value={selectedStatus};
                  onChange={(e) => setSelectedStatus(e.target.value)};
                  className="[^"]*"
                >;
                  {statuses.map(status => (;
                    <option key={status} value={status}>{status}</[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Research Areas */};
      <section id="research-areas" className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Research Areas</[^>]*>
            <p className="text-zion-slate-light text-lg">Explore our diverse research domains and cutting-edge initiatives</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {researchAreas.map((area, index) => {;
              const IconComponent = area.icon
              return (
                <motion.div
                  key={area.id};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-4`}>;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-bold text-white mb-3">{area.name}</[^>]*>
                  <p className="text-zion-slate-light mb-4">{area.description}</[^>]*>

                  <div className="mb-4">;
                    <h4 className="font-semibold text-white mb-2">Research Focus</[^>]*>
                    <div className="space-y-1">;
                      {area.focus.slice(0, 4).map((focus, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">;
                          <[^>]*/>
                          <span>{focus}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  <div className="grid grid-cols-3 gap-4 text-center">;
                    <div>;
                      <div className="text-2xl font-bold text-zion-cyan">{area.publications}</[^>]*>
                      <div className="text-xs text-zion-slate-light">Publications</[^>]*>
                    </[^>]*>
                    <div>;
                      <div className="text-2xl font-bold text-zion-cyan">{area.patents}</[^>]*>
                      <div className="text-xs text-zion-slate-light">Patents</[^>]*>
                    </[^>]*>
                    <div>;
                      <div className="text-2xl font-bold text-zion-cyan">{area.projects}</[^>]*>
                      <div className="text-xs text-zion-slate-light">Projects</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ),;
            })};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Active Research Projects */};
      <section id="active-projects" className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Active Research Projects</[^>]*>
            <p className="text-zion-slate-light text-lg">Discover our ongoing research initiatives and their impact</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredProjects.map((project, index) => {;
              const IconComponent = getAreaIcon(project.area)
              const areaColor = getAreaColor(project.area)
              return (
                <motion.div
                  key={project.id};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  {/* Header */};
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-3">;
                      <div className={`w-16 h-16 bg-gradient-to-br ${areaColor} rounded-2xl flex items-center justify-center`}>;
                        <[^>]*/>
                      </[^>]*>
                      <div>;
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</[^>]*>
                        <div className="flex items-center gap-2">;
                          {getStatusBadge(project.status)};
                          <span className="text-sm text-zion-cyan">{project.area}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Description */};
                  <p className="text-zion-slate-light mb-4">{project.description}</[^>]*>

                  {/* Project Details */};
                  <div className="grid grid-cols-2 gap-4 mb-4">;
                    <div className="text-sm text-zion-slate-light">;
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        Duration: {project.duration};
                      </[^>]*>
                    </[^>]*>
                    <div className="text-sm text-zion-slate-light">;
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        Funding: {project.funding};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Team */};
                  <div className="mb-4">;
                    <h4 className="font-semibold text-white mb-2">Research Team</[^>]*>
                    <div className="flex flex-wrap gap-2">;
                      {project.team.map((member, idx) => (;
                        <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">;
                          {member};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  {/* Outcomes */};
                  <div className="mb-4">;
                    <h4 className="font-semibold text-white mb-2">Expected Outcomes</[^>]*>
                    <div className="space-y-1">;
                      {project.outcomes.map((outcome, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">;
                          <[^>]*/>
                          <span>{outcome}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  {/* CTA */};
                  <div className="flex items-center justify-between">;
                    <Link;
                      to={`/research-development/projects/${project.id}`};
                      className="[^"]*"
                    >;
                      Learn More;
                      <[^>]*/>
                    </[^>]*>
                    <div className="text-right">;
                      <div className="text-sm text-zion-slate-light">Contact us for collaboration</[^>]*>
                      <div className="text-zion-cyan font-medium">+1 302 464 0950</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              );
            })};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Publications */};
      <section id="publications" className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Research Publications</[^>]*>
            <p className="text-zion-slate-light text-lg">Our latest research contributions to the scientific community</[^>]*>
          </[^>]*>

          <div className="space-y-6">;
            {publications.map((pub, index) => (;
              <motion.div
                key={pub.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start justify-between">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</[^>]*>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">;
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        {pub.authors.join()};
                      </[^>]*>
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        {pub.journal};
                      </[^>]*>
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        {pub.year};
                      </[^>]*>
                      <span className="flex items-center gap-1">;
                        <[^>]*/>
                        {pub.citations} citations;
                      </[^>]*>
                    </[^>]*>
                    <p className="text-zion-slate-light mb-3">{pub.abstract}</[^>]*>
                    <div className="flex items-center gap-2">;
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {pub.area};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="ml-6">;
                    <Link;
                      to={`/research-development/publications/${pub.id}`};
                      className="[^"]*"
                    >;
                      Read Paper;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Patents */};
      <section id="patents" className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Patents & Intellectual Property</[^>]*>
            <p className="text-zion-slate-light text-lg">Our innovative technologies protected by intellectual property rights</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {patents.map((patent, index) => (;
              <motion.div
                key={patent.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div>;
                    <h3 className="text-xl font-bold text-white mb-2">{patent.title}</[^>]*>
                    <div className="flex items-center gap-2 mb-3">;
                      <span className={`px-3 py-1 text-xs rounded-full border ${;
                        patent.status === 'Granted'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>;
                        {patent.status};
                      </[^>]*>
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {patent.area};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="space-y-3 mb-4">;
                  <div className="text-sm text-zion-slate-light">;
                    <span className="font-medium text-white">Inventors:</span> {patent.inventors.join(', ')};
                  </[^>]*>
                  <div className="text-sm text-zion-slate-light">;
                    <span className="font-medium text-white">Filing Date:</span> {patent.filingDate};
                  </[^>]*>
                  <div className="text-sm text-zion-slate-light">;
                    <span className="font-medium text-white">Patent Number:</span> {patent.patentNumber};
                  </[^>]*>
                </[^>]*>

                <p className="text-zion-slate-light mb-4">{patent.description}</[^>]*>

                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/research-development/patents/${patent.id}`};
                    className="[^"]*"
                  >;
                    View Details;
                    <[^>]*/>
                  </[^>]*>
                  <div className="text-right">;
                    <div className="text-sm text-zion-slate-light">Contact us for licensing</[^>]*>
                    <div className="text-zion-cyan font-medium">+1 302 464 0950</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16">;
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Collaborate with Our Research Team;
            </[^>]*>
            <p className="text-zion-slate-light text-lg mb-8">;
              Partner with Zion Tech Group on cutting-edge research projects;
              explore licensing opportunities, or join our research initiatives.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Start Collaboration;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/case-studies"
                className="[^"]*"
              >;
                View Research Impact;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};