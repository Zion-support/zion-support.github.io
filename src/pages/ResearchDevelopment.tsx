  BookOpen,
  Users,
  Award,
  ArrowRight
const ResearchDevelopment: React.FC = (): JSX.Element => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const researchAreas = [
    { id: 'all', name: 'All Areas', icon: Microscope, count: 67 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'biotech', name: 'Biotechnology', icon: TestTube, count: 15 },
    { id: 'nanotech', name: 'Nanotechnology', icon: Microscope, count: 10 },
    { id: 'energy', name: 'Clean Energy', icon: Zap, count: 8 },
    { id: 'materials', name: 'Advanced Materials', icon: Atom, count: 4 }
  ];

  const projectStatuses = [
    { id: 'all', name: 'All Statuses', count: 67 },
    { id: 'active', name: 'Active', count: 28 },
    { id: 'completed', name: 'Completed', count: 22 },
    { id: 'planning', name: 'Planning', count: 12 },
    { id: 'paused', name: 'Paused', count: 5 }
  ];

  const researchProjects = [
    {
      id: 1,
      title: 'Quantum Machine Learning Algorithms',
      description: 'Developing novel quantum algorithms for machine learning applications, exploring quantum advantage in optimization and pattern recognition.',
      area: 'ai-ml',
      status: 'active',
      lead: 'Dr. Sarah Chen',
      startDate: '2024-03-01',
      endDate: '2026-02-28',
      funding: 2500000,
      teamSize: 12,
      rating: 4.9,
      featured: true,
      tags: ['Quantum Computing', 'Machine Learning', 'Algorithms', 'Optimization'],
      thumbnail: '/images/research/quantum-ml-algorithms.jpg',
      abstract: 'This project explores the intersection of quantum computing and machine learning, developing algorithms that leverage quantum properties for enhanced computational capabilities.',
      objectives: [
        'Design quantum ML algorithms',
        'Implement quantum simulations',
        'Benchmark against classical methods',
        'Develop practical applications'
      ],
      outcomes: [
        'Novel quantum ML algorithms',
        'Performance benchmarks',
        'Open-source implementations',
        'Industry partnerships'
      ],
      publications: 8,
      patents: 3,
      collaborations: ['MIT', 'Stanford', 'IBM Research']
    },
    {
      id: 2,
      title: 'Biomimetic Neural Networks',
      description: 'Creating artificial neural networks inspired by biological brain structures for improved learning efficiency and adaptability.',
      area: 'ai-ml',
      status: 'active',
      lead: 'Dr. Michael Rodriguez',
      startDate: '2024-06-01',
      endDate: '2027-05-31',
      funding: 1800000,
      teamSize: 8,
      rating: 4.8,
      featured: true,
      tags: ['Neural Networks', 'Biomimetics', 'Brain Science', 'Adaptive Learning'],
      thumbnail: '/images/research/biomimetic-neural-networks.jpg',
      abstract: 'This research focuses on developing neural network architectures that mimic biological brain structures, leading to more efficient and adaptive AI systems.',
      objectives: [
        'Study biological neural structures',
        'Design biomimetic architectures',
        'Implement adaptive learning',
        'Validate performance improvements'
      ],
      outcomes: [
        'Biomimetic neural architectures',
        'Adaptive learning algorithms',
        'Performance benchmarks',
        'Neuroscience insights'
      ],
      publications: 12,
      patents: 2,
      collaborations: ['Harvard Medical School', 'Max Planck Institute', 'Neuralink']
    },
    {
      id: 3,
      title: 'Quantum Cryptography Protocols',
      description: 'Developing next-generation quantum cryptography protocols for ultra-secure communications and data protection.',
      area: 'quantum',
      status: 'active',
      lead: 'Dr. Emily Watson',
      startDate: '2024-01-15',
      endDate: '2025-12-31',
      funding: 1200000,
      teamSize: 6,
      rating: 4.7,
      featured: false,
      tags: ['Quantum Cryptography', 'Security', 'Communications', 'Encryption'],
      thumbnail: '/images/research/quantum-cryptography.jpg',
      abstract: 'Research focused on quantum cryptographic protocols that provide theoretically unbreakable security through quantum mechanical principles.',
      objectives: [
        'Design quantum key distribution',
        'Implement quantum protocols',
        'Test security properties',
        'Develop practical systems'
      ],
      outcomes: [
        'Quantum cryptographic protocols',
        'Security analysis reports',
        'Prototype implementations',
        'Industry standards'
      ],
      publications: 6,
      patents: 4,
      collaborations: ['NIST', 'University of Toronto', 'ID Quantique']
    },
    {
      id: 4,
      title: 'CRISPR Gene Editing Optimization',
      description: 'Optimizing CRISPR-Cas9 gene editing techniques for improved precision, efficiency, and safety in therapeutic applications.',
      area: 'biotech',
      status: 'active',
      lead: 'Dr. Alex Johnson',
      startDate: '2024-08-01',
      endDate: '2026-07-31',
      funding: 2200000,
      teamSize: 15,
      rating: 4.9,
      featured: false,
      tags: ['CRISPR', 'Gene Editing', 'Biotechnology', 'Therapeutics'],
      thumbnail: '/images/research/crispr-gene-editing.jpg',
      abstract: 'Advanced research in CRISPR gene editing technology, focusing on improving precision and reducing off-target effects for therapeutic applications.',
      objectives: [
        'Improve CRISPR precision',
        'Reduce off-target effects',
        'Develop delivery systems',
        'Validate therapeutic potential'
      ],
      outcomes: [
        'Optimized CRISPR protocols',
        'Novel delivery systems',
        'Safety assessments',
        'Therapeutic candidates'
      ],
      publications: 15,
      patents: 6,
      collaborations: ['Broad Institute', 'UC Berkeley', 'Novartis']
    },
    {
      id: 5,
      title: 'Graphene-Based Energy Storage',
      description: 'Developing advanced energy storage systems using graphene-based materials for high-capacity, fast-charging batteries.',
      area: 'materials',
      status: 'planning',
      lead: 'Dr. David Thompson',
      startDate: '2025-01-01',
      endDate: '2027-12-31',
      funding: 3000000,
      teamSize: 10,
      rating: 4.6,
      featured: false,
      tags: ['Graphene', 'Energy Storage', 'Batteries', 'Materials Science'],
      thumbnail: '/images/research/graphene-energy-storage.jpg',
      abstract: 'Research focused on leveraging graphene\'s unique properties to create next-generation energy storage solutions with superior performance characteristics.',
      objectives: [
        'Synthesize graphene materials',
        'Design electrode architectures',
        'Optimize battery performance',
        'Scale manufacturing processes'
      ],
      outcomes: [
        'Graphene synthesis methods',
        'Battery prototypes',
        'Performance data',
        'Manufacturing processes'
      ],
      publications: 0,
      patents: 0,
      collaborations: ['MIT', 'Stanford', 'Tesla Energy']
    },
    {
      id: 6,
      title: 'Nanoscale Drug Delivery Systems',
      description: 'Developing nanoscale drug delivery systems for targeted therapy with improved efficacy and reduced side effects.',
      area: 'nanotech',
      status: 'active',
      lead: 'Dr. Rachel Green',
      startDate: '2024-04-01',
      endDate: '2026-03-31',
      funding: 1600000,
      teamSize: 9,
      rating: 4.8,
      featured: false,
      tags: ['Nanotechnology', 'Drug Delivery', 'Targeted Therapy', 'Nanomedicine'],
      thumbnail: '/images/research/nanoscale-drug-delivery.jpg',
      abstract: 'Advanced research in nanoscale drug delivery systems that can target specific cells or tissues, improving therapeutic outcomes while minimizing side effects.',
      objectives: [
        'Design nanocarriers',
        'Develop targeting mechanisms',
        'Optimize drug loading',
        'Validate therapeutic efficacy'
      ],
      outcomes: [
        'Nanocarrier designs',
        'Targeting systems',
        'Drug loading methods',
        'Efficacy studies'
      ],
      publications: 10,
      patents: 3,
      collaborations: ['Johns Hopkins', 'Rice University', 'Pfizer']
    },
    {
      id: 7,
      title: 'Fusion Energy Reactor Design',
      description: 'Designing next-generation fusion energy reactors using advanced plasma confinement and magnetic field technologies.',
      area: 'energy',
      status: 'active',
      lead: 'Dr. Marcus Chen',
      startDate: '2024-02-01',
      endDate: '2028-01-31',
      funding: 5000000,
      teamSize: 20,
      rating: 4.7,
      featured: false,
      tags: ['Fusion Energy', 'Plasma Physics', 'Magnetic Confinement', 'Clean Energy'],
      thumbnail: '/images/research/fusion-energy-reactor.jpg',
      abstract: 'Large-scale research project focused on developing practical fusion energy technology for clean, sustainable power generation.',
      objectives: [
        'Design reactor architecture',
        'Optimize plasma confinement',
        'Develop magnetic systems',
        'Validate energy output'
      ],
      outcomes: [
        'Reactor designs',
        'Plasma confinement data',
        'Magnetic system specs',
        'Energy output projections'
      ],
      publications: 18,
      patents: 8,
      collaborations: ['ITER', 'Princeton Plasma Physics Lab', 'General Fusion']
    },
    {
      id: 8,
      title: 'Quantum Internet Infrastructure',
      description: 'Building the foundation for a quantum internet with quantum repeaters, entanglement distribution, and quantum networking protocols.',
      area: 'quantum',
      status: 'planning',
      lead: 'Dr. Lisa Park',
      startDate: '2025-03-01',
      endDate: '2029-02-28',
      funding: 4000000,
      teamSize: 16,
      rating: 4.5,
      featured: false,
      tags: ['Quantum Internet', 'Quantum Networks', 'Entanglement', 'Communications'],
      thumbnail: '/images/research/quantum-internet.jpg',
      abstract: 'Long-term research project focused on developing the infrastructure and protocols needed for a global quantum internet.',
      objectives: [
        'Design quantum repeaters',
        'Develop entanglement protocols',
        'Build network infrastructure',
        'Establish security standards'
      ],
      outcomes: [
        'Quantum repeater designs',
        'Network protocols',
        'Infrastructure blueprints',
        'Security frameworks'
      ],
      publications: 0,
      patents: 0,
      collaborations: ['Caltech', 'University of Vienna', 'Google Quantum AI']
    }
  ];

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesArea = selectedArea === 'all' || project.area === selectedArea;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    return matchesSearch && matchesArea && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400';
      case 'planning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'paused':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-zinc-500/20 text-zinc-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const formatFunding = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  ];
=======
import React from 'react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function ResearchDevelopment(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Pushing the boundaries of technology through cutting-edge research, 
              innovative projects, and breakthrough discoveries at Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Cutting-edge Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Innovation Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Global Collaborations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-zion-cyan" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">67+</div>
            <div className="text-zinc-400">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-zion-purple" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-zinc-400">Researchers</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-zion-blue" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-zinc-400">Publications</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">45+</div>
            <div className="text-zinc-400">Patents</div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search research projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Research Area Filter */}
            <div>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {researchAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name} ({area.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {projectStatuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name} ({status.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-3 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-colors flex items-center justify-center">
                <Microscope className="w-4 h-4 mr-2" />
                Join Research
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-400"
        >
          Showing {filteredProjects.length} of {researchProjects.length} research projects
        </motion.div>
      </div>

      {/* Featured Projects Section */}
      {filteredProjects.filter(p => p.featured).length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research Projects</h2>
            <p className="text-zinc-300">Our most innovative and impactful research initiatives</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-white">{project.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-zion-cyan">Research Objectives:</h4>
                    <ul className="space-y-2">
                      {project.objectives.slice(0, 3).map((objective, objectiveIndex) => (
                        <li key={objectiveIndex} className="flex items-start space-x-3 text-zinc-300">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-zinc-400">
                      <div>Lead: {project.lead}</div>
                      <div>{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{formatFunding(project.funding)}</div>
                      <div className="text-sm text-zinc-400">Team: {project.teamSize} researchers</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleViewProject(project.id, project.title)}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      View Project
                    </button>
                    <button
                      onClick={() => handleCollaborate(project.id, project.title)}
                      className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Collaborate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Projects Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">All Research Projects</h2>
          <p className="text-zinc-300">Browse our complete research portfolio</p>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">Active Research Projects</h2>
            <p className="text-lg text-zion-slate-light">Exploring the frontiers of technology and innovation</p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {filteredProjects.map((project, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {project.featured && (
                      <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{project.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{project.lead}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(project.startDate)}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-zinc-400">
                        {project.teamSize} researchers
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{formatFunding(project.funding)}</div>
                      </div>
                    </div>

                      View Paper
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">Research Partnerships</h2>
            <p className="text-lg text-zion-slate-light">Collaborating with leading institutions worldwide</p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {partnerships.map((partner, index)              => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <div className="space-y-2 text-zion-slate-light">
                      <p><span className="text-zion-cyan font-semibold">Type:</span> {partner.type}</p>
                      <p><span className="text-zion-cyan font-semibold">Focus:</span> {partner.focus}</p>
                      <p><span className="text-zion-cyan font-semibold">Duration:</span> {partner.duration}</p>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {project.featured && (
                          <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-zinc-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{project.lead}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(project.startDate)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{project.teamSize} researchers</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{formatFunding(project.funding)}</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zinc-300">{project.rating}</span>
                        </div>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{formatFunding(project.funding)}</div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewProject(project.id, project.title)}
                            className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleCollaborate(project.id, project.title)}
                            className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300"
                          >
                            Collaborate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center py-16"
          >
            <Microscope className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No research projects found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search terms or browse all research areas
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedArea('all');
                setSelectedStatus('all');
              }}
              className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {[
              {
                icon: Flask,
                title: 'Experimental Research',
                description: 'State-of-the-art laboratories for cutting-edge experiments'
              },
              {
                icon: Code,
                title: 'Software Development',
                description: 'Advanced development environments for software innovation'
              },
              {
                icon: Database,
                title: 'Data Analytics',
                description: 'High-performance computing for big data research'

            ].map((lab, index)              => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <lab.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{lab.title}</h3>
                <p className="text-zion-slate-light">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Research Community
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Collaborate with leading researchers, contribute to breakthrough discoveries, 
              and be part of the future of technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Involved
              </Link>
              <Link
                to="/careers"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Research Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
