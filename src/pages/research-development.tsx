import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Cloud, 
  Atom, 
  Globe, 
  Lightbulb,
  Microscope,
  TestTube,
  Satellite,
  Telescope
} from 'lucide-react';

const researchAreas = [
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    icon: Brain,
    description: 'Advancing the frontiers of AI through innovative research in neural networks, natural language processing, and computer vision.',
    color: 'from-purple-500 to-indigo-600',
    focus: [
      'Deep Learning Architectures',
      'Natural Language Processing',
      'Computer Vision & Image Recognition',
      'Reinforcement Learning',
      'AI Ethics & Responsible AI',
      'Edge AI & Federated Learning'
    ],
    publications: 15,
    patents: 8,
    projects: 12
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing & Quantum Technologies',
    icon: Atom,
    description: 'Exploring quantum computing applications and developing quantum-resistant cryptographic solutions.',
    color: 'from-blue-500 to-cyan-600',
    focus: [
      'Quantum Algorithms',
      'Quantum Cryptography',
      'Quantum Machine Learning',
      'Quantum Error Correction',
      'Post-Quantum Cryptography',
      'Quantum Sensing'
    ],
    publications: 8,
    patents: 5,
    projects: 6
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Developing next-generation security solutions to protect against evolving cyber threats.',
    color: 'from-red-500 to-pink-600',
    focus: [
      'Threat Intelligence',
      'Zero-Trust Security',
      'Privacy-Preserving Technologies',
      'Blockchain Security',
      'IoT Security',
      'AI-Powered Security'
    ],
    publications: 22,
    patents: 12,
    projects: 18
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing & IoT',
    icon: Zap,
    description: 'Researching distributed computing paradigms and intelligent edge systems for real-time processing.',
    color: 'from-yellow-500 to-orange-600',
    focus: [
      'Edge AI & Machine Learning',
      '5G & 6G Networks',
      'IoT Security & Privacy',
      'Edge Computing Optimization',
      'Real-time Data Processing',
      'Smart City Technologies'
    ],
    publications: 18,
    patents: 9,
    projects: 14
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    icon: TrendingUp,
    description: 'Advancing data analytics methodologies and developing tools for extracting meaningful insights from complex datasets.',
    color: 'from-green-500 to-emerald-600',
    focus: [
      'Big Data Processing',
      'Predictive Analytics',
      'Data Visualization',
      'Statistical Modeling',
      'Real-time Analytics',
      'Data Privacy & Ethics'
    ],
    publications: 25,
    patents: 15,
    projects: 20
  },
  {
    id: 'cloud-native',
    name: 'Cloud-Native Technologies',
    icon: Cloud,
    description: 'Researching cloud computing architectures and developing scalable, resilient cloud solutions.',
    color: 'from-indigo-500 to-purple-600',
    focus: [
      'Microservices Architecture',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Strategies',
      'Cloud Security',
      'DevOps Automation'
    ],
    publications: 20,
    patents: 10,
    projects: 16
  }
];

const researchProjects = [
  {
    id: 1,
    title: 'AI-Powered Cybersecurity Threat Detection',
    area: 'AI & ML',
    status: 'Active',
    description: 'Developing machine learning algorithms to detect and respond to cybersecurity threats in real-time.',
    team: ['Dr. Sarah Chen', 'AI Researcher', 'Security Expert'],
    duration: '18 months',
    funding: '$500,000',
    outcomes: [
      'Real-time threat detection system',
      '95% accuracy in threat classification',
      '3 pending patents',
      '5 research publications'
    ],
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Cryptographic Protocols',
    area: 'Quantum Computing',
    status: 'Active',
    description: 'Researching and developing cryptographic algorithms that remain secure against quantum computing attacks.',
    team: ['Dr. Michael Rodriguez', 'Quantum Researcher', 'Cryptographer'],
    duration: '24 months',
    funding: '$750,000',
    outcomes: [
      'Post-quantum cryptographic framework',
      '2 patent applications',
      '3 research publications',
      'Industry collaboration established'
    ],
    icon: Atom,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Edge AI for Smart Manufacturing',
    area: 'Edge Computing',
    status: 'Active',
    description: 'Developing intelligent edge computing solutions for real-time manufacturing process optimization.',
    team: ['Dr. Emily Wang', 'Edge Computing Expert', 'Manufacturing Specialist'],
    duration: '12 months',
    funding: '$300,000',
    outcomes: [
      'Edge AI platform prototype',
      '30% efficiency improvement',
      '2 research publications',
      'Industry partnership formed'
    ],
    icon: Zap,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Privacy-Preserving Data Analytics',
    area: 'Data Science',
    status: 'Completed',
    description: 'Researching techniques for analyzing sensitive data while preserving individual privacy.',
    team: ['Dr. James Brown', 'Data Scientist', 'Privacy Expert'],
    duration: '15 months',
    funding: '$400,000',
    outcomes: [
      'Privacy-preserving analytics framework',
      '4 research publications',
      '1 patent granted',
      'Open-source toolkit released'
    ],
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    title: 'Cloud-Native Security Architecture',
    area: 'Cloud-Native',
    status: 'Active',
    description: 'Designing secure, scalable cloud-native architectures for enterprise applications.',
    team: ['Dr. Lisa Chang', 'Cloud Architect', 'Security Specialist'],
    duration: '16 months',
    funding: '$600,000',
    outcomes: [
      'Cloud security framework',
      'Zero-trust architecture design',
      '3 research publications',
      'Enterprise pilot program'
    ],
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600'
  }
];

const ResearchDevelopment = () => {
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredAreas = selectedArea === 'all' 
    ? researchAreas 
    : researchAreas.filter(area => area.id === selectedArea);

  const filteredProjects = selectedArea === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.area.toLowerCase().includes(selectedArea));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Lightbulb className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Research &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Development</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Pushing the boundaries of technology through cutting-edge research, 
            innovative solutions, and breakthrough discoveries that shape the future.
          </motion.p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Research Focus Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{area.name}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Research Focus:</h4>
                  <ul className="space-y-1">
                    {area.focus.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{area.publications}</div>
                    <div className="text-xs text-gray-400">Publications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{area.patents}</div>
                    <div className="text-xs text-gray-400">Patents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{area.projects}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Research Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Active Research Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Funding:</span>
                    <span className="text-white ml-2">{project.funding}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.slice(0, 3).map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {member}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Research Team
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Collaborate with leading researchers, work on cutting-edge projects, 
              and contribute to breakthrough technologies that will shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Research Positions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Research Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
