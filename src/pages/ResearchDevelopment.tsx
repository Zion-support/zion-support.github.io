import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Microscope,
  TestTube,
  BookOpen,
  GraduationCap,
  Building,
  Target
} from 'lucide-react';

const ResearchDevelopment = () => {
  const [selectedArea, setSelectedArea] = useState('all');

  const researchAreas = [
    { id: 'all', name: 'All Areas', icon: Globe, count: 8 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 3 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 2 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 1 }
  ];

  const researchProjects = [
    {
      id: 1,
      title: 'Quantum Neural Network Architecture',
      area: 'quantum',
      description: 'Developing hybrid quantum-classical neural networks for solving complex computational problems.',
      objectives: [
        'Create quantum-enhanced neural network models',
        'Optimize quantum-classical hybrid algorithms',
        'Achieve quantum advantage in specific domains',
        'Develop scalable quantum computing frameworks'
      ],
      technologies: ['Quantum Computing', 'Neural Networks', 'Hybrid Algorithms', 'Quantum Error Correction'],
      team: '15 researchers',
      duration: '24 months',
      funding: '$5.2M',
      status: 'In Progress',
      milestones: [
        'Quantum circuit design completed',
        'Hybrid algorithm prototype developed',
        'Initial benchmarking results achieved',
        'Patent applications filed'
      ],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 8,
      patents: 3
    },
    {
      id: 2,
      title: 'AI-Powered Autonomous Systems',
      area: 'ai-ml',
      description: 'Researching next-generation autonomous systems with advanced AI decision-making capabilities.',
      objectives: [
        'Develop self-learning autonomous algorithms',
        'Create robust decision-making frameworks',
        'Implement real-time adaptation mechanisms',
        'Ensure safety and reliability standards'
      ],
      technologies: ['Deep Learning', 'Reinforcement Learning', 'Computer Vision', 'Robotics'],
      team: '12 researchers',
      duration: '18 months',
      funding: '$3.8M',
      status: 'In Progress',
      milestones: [
        'Autonomous navigation system developed',
        'Real-time learning algorithms implemented',
        'Safety protocols established',
        'Field testing initiated'
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 12,
      patents: 5
    },
    {
      id: 3,
      title: 'Post-Quantum Cryptography',
      area: 'cybersecurity',
      description: 'Developing quantum-resistant cryptographic algorithms for future-proof security.',
      objectives: [
        'Design quantum-resistant encryption schemes',
        'Implement lattice-based cryptography',
        'Develop quantum key distribution protocols',
        'Create migration strategies for existing systems'
      ],
      technologies: ['Lattice Cryptography', 'Hash-Based Signatures', 'Quantum Key Distribution', 'Cryptographic Protocols'],
      team: '10 researchers',
      duration: '20 months',
      funding: '$4.1M',
      status: 'In Progress',
      milestones: [
        'Lattice-based algorithms designed',
        'Security analysis completed',
        'Performance benchmarks established',
        'Standards compliance verified'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 6,
      patents: 2
    },
    {
      id: 4,
      title: 'Edge AI Computing Platform',
      area: 'iot',
      description: 'Creating intelligent edge computing solutions for IoT devices and distributed systems.',
      objectives: [
        'Develop lightweight AI models for edge devices',
        'Create efficient inference engines',
        'Implement federated learning protocols',
        'Optimize power consumption and performance'
      ],
      technologies: ['Edge Computing', 'TinyML', 'Federated Learning', 'IoT Protocols'],
      team: '8 researchers',
      duration: '16 months',
      funding: '$2.9M',
      status: 'In Progress',
      milestones: [
        'Edge AI framework developed',
        'Model optimization completed',
        'Power efficiency improved by 60%',
        'Field deployment initiated'
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 9,
      patents: 4
    },
    {
      id: 5,
      title: 'Advanced Natural Language Processing',
      area: 'ai-ml',
      description: 'Researching cutting-edge NLP techniques for multilingual understanding and generation.',
      objectives: [
        'Develop multilingual language models',
        'Create context-aware understanding systems',
        'Implement advanced text generation capabilities',
        'Ensure ethical AI development practices'
      ],
      technologies: ['Transformer Models', 'Multilingual AI', 'Context Understanding', 'Ethical AI'],
      team: '14 researchers',
      duration: '22 months',
      funding: '$4.5M',
      status: 'In Progress',
      milestones: [
        'Multilingual model architecture designed',
        'Context understanding algorithms developed',
        'Ethical guidelines established',
        'Benchmark datasets created'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 15,
      patents: 6
    },
    {
      id: 6,
      title: 'Quantum Internet Protocols',
      area: 'quantum',
      description: 'Developing quantum communication protocols for secure, ultra-fast information transfer.',
      objectives: [
        'Design quantum internet architecture',
        'Create quantum routing protocols',
        'Implement quantum memory systems',
        'Develop quantum network security'
      ],
      technologies: ['Quantum Communication', 'Quantum Memory', 'Quantum Routing', 'Quantum Security'],
      team: '11 researchers',
      duration: '26 months',
      funding: '$5.8M',
      status: 'In Progress',
      milestones: [
        'Quantum network architecture designed',
        'Routing protocols developed',
        'Memory systems implemented',
        'Security framework established'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publications: 7,
      patents: 3
    }
  ];

  const researchPartners = [
    {
      name: 'MIT Computer Science & AI Laboratory',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      focus: 'AI & Machine Learning',
      projects: 3
    },
    {
      name: 'Stanford Quantum Computing Institute',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      focus: 'Quantum Computing',
      projects: 2
    },
    {
      name: 'Carnegie Mellon CyLab',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      focus: 'Cybersecurity',
      projects: 2
    },
    {
      name: 'UC Berkeley AI Research Lab',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      focus: 'Autonomous Systems',
      projects: 1
    }
  ];

  const filteredProjects = selectedArea === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.area === selectedArea);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Research & Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Pushing the boundaries of technology through cutting-edge research, innovative solutions, 
            and collaborative partnerships that shape the future of AI, quantum computing, and cybersecurity.
          </motion.p>
        </div>
      </section>

      {/* Research Areas Filter */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  selectedArea === area.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                }`}
              >
                <area.icon className="w-5 h-5" />
                <span>{area.name}</span>
                <span className="text-sm opacity-75">({area.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Projects Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      {project.area.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${
                      project.status === 'In Progress' 
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        : 'bg-green-500/20 text-green-400 border-green-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{project.team}</div>
                      <div className="text-xs text-zion-slate-light">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{project.duration}</div>
                      <div className="text-xs text-zion-slate-light">Duration</div>
                    </div>
                  </div>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-light text-sm rounded-full border border-zion-slate-light/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Objectives */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-zion-cyan" />
                      Research Objectives
                    </h4>
                    <div className="space-y-2">
                      {project.objectives.slice(0, 3).map((objective, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Milestones */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-zion-cyan" />
                      Key Milestones
                    </h4>
                    <div className="space-y-2">
                      {project.milestones.slice(0, 2).map((milestone, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Publications & Patents */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-zion-slate-light">
                        <BookOpen className="w-4 h-4" />
                        {project.publications} Publications
                      </span>
                      <span className="flex items-center gap-2 text-zion-slate-light">
                        <Award className="w-4 h-4" />
                        {project.patents} Patents
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={`/research/${project.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    View Research Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-2">No research projects found</h3>
              <p className="text-zion-slate-light mb-6">
                No research projects match your selected area
              </p>
              <button
                onClick={() => setSelectedArea('all')}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All Research
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Partners */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Research Partnerships
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Collaborating with leading academic institutions and research organizations to advance 
              the frontiers of technology and innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker p-6 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {partner.name}
                </h3>
                <p className="text-zion-slate-light mb-3">
                  {partner.focus}
                </p>
                <div className="text-sm text-zion-cyan font-medium">
                  {partner.projects} Active Projects
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '80+', label: 'Researchers' },
              { icon: BookOpen, value: '150+', label: 'Publications' },
              { icon: Award, value: '45+', label: 'Patents' },
              { icon: Rocket, value: '25+', label: 'Active Projects' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Join Our Research Initiatives
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Partner with us to advance the frontiers of technology and create innovative solutions 
              that shape the future of AI, quantum computing, and cybersecurity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Collaborate With Us
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
