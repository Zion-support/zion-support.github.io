import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FlaskConical, 
  Microscope, 
  TestTube, 
  Atom, 
  Brain, 
  Rocket,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Shield,
  Heart,
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
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Eye,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp as TrendingUpIcon,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Users,
  Calendar,
  Clock as ClockIcon,
  ExternalLink,
  FileText,
  Video,
  Play,
  Download as DownloadIcon
} from 'lucide-react';

export const ResearchDevelopment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Biotechnology', 'Clean Energy', 'Space Technology', 'Nanotechnology', 'Robotics'];
  const statuses = ['All', 'Active', 'Completed', 'Planning'];

  const researchProjects = [
    {
      id: 1,
      title: 'Quantum AI Fusion: Bridging Classical and Quantum Machine Learning',
      category: 'Quantum Computing',
      status: 'Active',
      description: 'Revolutionary research combining quantum computing principles with artificial intelligence to create hybrid algorithms that outperform classical approaches in specific problem domains.',
      objectives: [
        'Develop quantum-classical hybrid algorithms',
        'Achieve quantum advantage in optimization problems',
        'Create quantum neural network architectures',
        'Establish quantum AI benchmarks'
      ],
      team: 'Dr. Sarah Chen, Dr. Emily Watson, 8 researchers',
      duration: '36 months',
      startDate: '2024-01-01',
      budget: '$5.2M',
      partners: ['MIT', 'Stanford', 'IBM Quantum'],
      featured: true,
      image: '/images/research/quantum-ai-fusion.jpg',
      publications: 12,
      patents: 3,
      impact: 'High',
      progress: 65
    },
    {
      id: 2,
      title: 'AI-Powered Drug Discovery Platform',
      category: 'Biotechnology',
      status: 'Active',
      description: 'Advanced machine learning platform for accelerating drug discovery processes, reducing development time and costs while improving success rates.',
      objectives: [
        'Predict drug-target interactions with 95% accuracy',
        'Reduce drug discovery timeline by 60%',
        'Identify novel therapeutic compounds',
        'Optimize drug formulation and delivery'
      ],
      team: 'Dr. Emily Watson, Dr. Michael Rodriguez, 12 researchers',
      duration: '48 months',
      startDate: '2023-06-01',
      budget: '$8.7M',
      partners: ['Johns Hopkins', 'Pfizer', 'NIH'],
      featured: true,
      image: '/images/research/ai-drug-discovery.jpg',
      publications: 18,
      patents: 5,
      impact: 'Very High',
      progress: 45
    },
    {
      id: 3,
      title: 'Zero-Trust Cybersecurity Framework with AI',
      category: 'Cybersecurity',
      status: 'Active',
      description: 'Next-generation cybersecurity framework leveraging artificial intelligence to create adaptive, self-healing security systems that can predict and prevent cyber attacks.',
      objectives: [
        'Develop AI-powered threat detection',
        'Create autonomous response systems',
        'Achieve 99.9% threat prevention rate',
        'Reduce false positive rates by 80%'
      ],
      team: 'Lisa Thompson, David Kim, 15 researchers',
      duration: '30 months',
      startDate: '2024-03-01',
      budget: '$4.1M',
      partners: ['DARPA', 'NSA', 'Microsoft'],
      featured: false,
      image: '/images/research/ai-cybersecurity.jpg',
      publications: 9,
      patents: 2,
      impact: 'High',
      progress: 35
    },
    {
      id: 4,
      title: 'Fusion Energy Reactor Design',
      category: 'Clean Energy',
      status: 'Planning',
      description: 'Innovative fusion reactor design using advanced materials and AI-controlled plasma confinement for sustainable, clean energy generation.',
      objectives: [
        'Design compact fusion reactor',
        'Achieve net energy gain',
        'Develop AI plasma control systems',
        'Create scalable energy solution'
      ],
      team: 'Dr. Sarah Chen, 20 researchers',
      duration: '60 months',
      startDate: '2025-01-01',
      budget: '$25M',
      partners: ['ITER', 'Princeton Plasma Physics Lab', 'DOE'],
      featured: false,
      image: '/images/research/fusion-energy.jpg',
      publications: 0,
      patents: 0,
      impact: 'Revolutionary',
      progress: 5
    },
    {
      id: 5,
      title: 'Space Debris Cleanup System',
      category: 'Space Technology',
      status: 'Active',
      description: 'Autonomous space debris removal system using AI navigation and robotic arms to clean up orbital debris and ensure sustainable space operations.',
      objectives: [
        'Develop autonomous debris detection',
        'Create robotic capture mechanisms',
        'Design safe disposal methods',
        'Establish debris tracking network'
      ],
      team: 'Michael Rodriguez, 10 researchers',
      duration: '42 months',
      startDate: '2023-09-01',
      budget: '$12M',
      partners: ['NASA', 'ESA', 'SpaceX'],
      featured: false,
      image: '/images/research/space-debris.jpg',
      publications: 6,
      patents: 1,
      impact: 'High',
      progress: 55
    },
    {
      id: 6,
      title: 'Nanoscale Computing Architecture',
      category: 'Nanotechnology',
      status: 'Completed',
      description: 'Breakthrough in nanoscale computing using molecular electronics and quantum tunneling for ultra-dense, energy-efficient computing systems.',
      objectives: [
        'Create molecular computing elements',
        'Achieve 1000x density improvement',
        'Reduce power consumption by 90%',
        'Demonstrate quantum tunneling logic'
      ],
      team: 'Dr. Sarah Chen, 18 researchers',
      duration: '54 months',
      startDate: '2019-01-01',
      budget: '$15M',
      partners: ['Intel', 'TSMC', 'NSF'],
      featured: false,
      image: '/images/research/nanoscale-computing.jpg',
      publications: 25,
      patents: 8,
      impact: 'Very High',
      progress: 100
    },
    {
      id: 7,
      title: 'Autonomous Agricultural Robotics',
      category: 'Robotics',
      status: 'Active',
      description: 'AI-powered agricultural robots for precision farming, crop monitoring, and automated harvesting to increase food production efficiency.',
      objectives: [
        'Develop autonomous farming robots',
        'Implement precision agriculture',
        'Reduce water usage by 40%',
        'Increase crop yields by 30%'
      ],
      team: 'Dr. Emily Watson, 14 researchers',
      duration: '36 months',
      startDate: '2023-12-01',
      budget: '$6.8M',
      partners: ['USDA', 'John Deere', 'UC Davis'],
      featured: false,
      image: '/images/research/ag-robotics.jpg',
      publications: 7,
      patents: 2,
      impact: 'Medium',
      progress: 40
    },
    {
      id: 8,
      title: 'Brain-Computer Interface for Medical Applications',
      category: 'Biotechnology',
      status: 'Planning',
      description: 'Advanced brain-computer interface technology for medical applications, including prosthetics control, communication for paralyzed patients, and cognitive enhancement.',
      objectives: [
        'Develop non-invasive BCI technology',
        'Achieve 95% accuracy in thought detection',
        'Create medical device interfaces',
        'Ensure long-term biocompatibility'
      ],
      team: 'Dr. Emily Watson, Dr. Sarah Chen, 25 researchers',
      duration: '72 months',
      startDate: '2025-06-01',
      budget: '$18M',
      partners: ['NIH', 'FDA', 'Neuralink'],
      featured: false,
      image: '/images/research/brain-computer-interface.jpg',
      publications: 0,
      patents: 0,
      impact: 'Revolutionary',
      progress: 10
    }
  ];

  const filteredProjects = researchProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.team.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const activeProjects = researchProjects.filter(project => project.status === 'Active');
  const completedProjects = researchProjects.filter(project => project.status === 'Completed');

  const stats = [
    { number: '8+', label: 'Active Projects', icon: FlaskConical },
    { number: '50+', label: 'Researchers', icon: Users },
    { number: '77+', label: 'Publications', icon: FileText },
    { number: '21+', label: 'Patents', icon: Award }
  ];

  const impactLevels = {
    'Low': 'text-green-400',
    'Medium': 'text-yellow-400',
    'High': 'text-orange-400',
    'Very High': 'text-red-400',
    'Revolutionary': 'text-purple-400'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore Zion Tech Group's cutting-edge research initiatives in AI, quantum computing, biotechnology, and emerging technologies. Discover our innovation projects and breakthroughs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Research &
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Development</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Pushing the boundaries of technology through cutting-edge research in AI, quantum computing, 
              biotechnology, and emerging technologies. Discover our innovation projects and breakthroughs.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search research projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Projects */}
      {researchProjects.filter(p => p.featured).length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Featured Research Projects
            </motion.h2>
            
            <div className="space-y-12">
              {researchProjects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{project.team}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            Started {new Date(project.startDate).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">Budget: {project.budget}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Research Objectives</h4>
                        <ul className="space-y-2">
                          {project.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={`/research/${project.id}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                        >
                          <BookOpen className="w-5 h-5 mr-2" />
                          View Project Details
                        </a>
                        <div className="text-sm text-slate-400">
                          Partners: {project.partners.join(', ')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Metrics */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Project Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Status:</span>
                            <span className="text-white">{project.status}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Category:</span>
                            <span className="text-white">{project.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Duration:</span>
                            <span className="text-white">{project.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Budget:</span>
                            <span className="text-white">{project.budget}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Progress & Impact</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{project.progress}%</div>
                            <div className="text-slate-400 text-sm">Progress</div>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-semibold ${impactLevels[project.impact as keyof typeof impactLevels]} mb-1`}>
                              {project.impact}
                            </div>
                            <div className="text-slate-400 text-sm">Impact Level</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Outputs</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{project.publications}</div>
                            <div className="text-slate-400 text-sm">Publications</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{project.patents}</div>
                            <div className="text-slate-400 text-sm">Patents</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Research Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">All Research Projects</h2>
              <p className="text-slate-300 text-lg">
                Showing {filteredProjects.length} of {researchProjects.length} research projects
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>Team:</strong> {project.team.split(',')[0]} + {project.team.split(',').length - 1} others
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Objectives:</h4>
                    <ul className="space-y-1">
                      {project.objectives.slice(0, 2).map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{project.publications}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{project.patents}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${impactLevels[project.impact as keyof typeof impactLevels]} bg-opacity-20`}>
                        {project.impact}
                      </span>
                      <span className="text-slate-400 text-sm">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No research projects found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Research Initiatives
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Interested in collaborating on cutting-edge research? Partner with Zion Tech Group 
              to advance technology and create breakthrough solutions for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Partner with Us
              </a>
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Join Our Research Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
