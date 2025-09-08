import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flask, 
  Brain, 
  Atom, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Microscope,
  Rocket,
  BookOpen,
  Users,
  Award} from 'lucide-react';

const ResearchDevelopment: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('all');

  const researchAreas = [
    { id: 'all', name: 'All Areas', icon: Flask },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'biotech', name: 'Biotechnology', icon: Microscope },
    { id: 'space', name: 'Space Technology', icon: Rocket }
  ];

  const researchProjects = [
    {
      id: 1,
      title: 'Quantum Neural Networks',
      area: 'quantum',
      description: 'Developing hybrid quantum-classical neural networks for superior computational performance.',
      status: 'In Progress',
      timeline: '2024-2026',
      team: '12 researchers',
      funding: '$2.5M',
      outcomes: [
        'Quantum advantage in optimization problems',
        'Improved machine learning algorithms',
        'Novel quantum computing architectures'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Drug Discovery',
      area: 'biotech',
      description: 'Using advanced AI algorithms to accelerate pharmaceutical research and drug development.',
      status: 'Active',
      timeline: '2023-2025',
      team: '8 researchers',
      funding: '$1.8M',
      outcomes: [
        'Faster drug candidate identification',
        'Reduced research costs',
        'Improved success rates in clinical trials'
      ]
    },
    {
      id: 3,
      title: 'Zero-Trust Security Framework',
      area: 'cybersecurity',
      description: 'Developing next-generation security protocols for enterprise and government applications.',
      status: 'Completed',
      timeline: '2022-2024',
      team: '15 researchers',
      funding: '$3.2M',
      outcomes: [
        'Enhanced threat detection capabilities',
        'Improved compliance frameworks',
        'Industry-standard security protocols'
      ]
    },
    {
      id: 4,
      title: 'Space-Based Computing Infrastructure',
      area: 'space',
      description: 'Exploring orbital computing platforms for global connectivity and edge computing.',
      status: 'Planning',
      timeline: '2025-2028',
      team: '20 researchers',
      funding: '$5.0M',
      outcomes: [
        'Global low-latency connectivity',
        'Space-based data centers',
        'Satellite computing networks'
      ]
    },
    {
      id: 5,
      title: 'Advanced Natural Language Processing',
      area: 'ai-ml',
      description: 'Developing context-aware language models for human-computer interaction.',
      status: 'Active',
      timeline: '2023-2026',
      team: '10 researchers',
      funding: '$2.0M',
      outcomes: [
        'Improved language understanding',
        'Better translation accuracy',
        'Enhanced conversational AI'
      ]
    },
    {
      id: 6,
      title: 'Sustainable Computing Technologies',
      area: 'all',
      description: 'Researching energy-efficient computing solutions for environmental sustainability.',
      status: 'In Progress',
      timeline: '2024-2027',
      team: '18 researchers',
      funding: '$4.1M',
      outcomes: [
        'Reduced energy consumption',
        'Green computing standards',
        'Sustainable technology practices'
      ]
    }
  ];

  const filteredProjects = researchProjects.filter(project => 
    selectedArea === 'all' || project.area === selectedArea
  );

  const publications = [
    {
      title: 'Quantum Computing in Machine Learning: A Comprehensive Survey',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, Dr. Emily Watson',
      journal: 'Nature Machine Intelligence',
      year: 2024,
      citations: 45,
      doi: '10.1038/s42256-024-00001-x'
    },
    {
      title: 'Zero-Trust Architecture for Enterprise Security',
      authors: 'Dr. James Thompson, Dr. Lisa Park, Dr. David Kim',
      journal: 'IEEE Security & Privacy',
      year: 2024,
      citations: 32,
      doi: '10.1109/MSEC.2024.00001'
    },
    {
      title: 'AI-Driven Drug Discovery: Current State and Future Directions',
      authors: 'Dr. Maria Garcia, Dr. Robert Johnson, Dr. Amanda Lee',
      journal: 'Science',
      year: 2023,
      citations: 78,
      doi: '10.1126/science.abc1234'
    }
  ];

  const partnerships = [
    {
      name: 'MIT Computer Science & AI Lab',
      type: 'Academic',
      focus: 'Quantum computing research',
      duration: '2022-2026'
    },
    {
      name: 'Stanford University',
      type: 'Academic',
      focus: 'AI and machine learning',
      duration: '2023-2027'
    },
    {
      name: 'NASA Ames Research Center',
      type: 'Government',
      focus: 'Space technology development',
      duration: '2024-2028'
    },
    {
      name: 'Google Research',
      type: 'Industry',
      focus: 'Large language models',
      duration: '2023-2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Research & <span className="text-zion-cyan">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Pushing the boundaries of technology through cutting-edge research, innovation, and collaboration with leading institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedArea === area.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-slate-light hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <area.icon className="w-5 h-5" />
                {area.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Research &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research and cutting-edge development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Research Focus</h4>
                  <ul className="space-y-1">
                    {area.focus.map((item, idx) => (<li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {item}
                      </li>))}
                  </ul>
                </div>
              </div>))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Collaborate With Us</h3>
              <p className="text-gray-300 mb-6">
                Interested in research collaboration or want to learn more about our R&D initiatives? 
                Let's explore opportunities to work together.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default ResearchDevelopment;
