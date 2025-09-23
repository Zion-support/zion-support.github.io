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
  Award,
  ArrowRight
} from 'lucide-react';

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Active Research Projects</h2>
            <p className="text-lg text-zion-slate-light">Exploring the frontiers of technology and innovation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-cyan font-semibold">Status:</span>
                      <span className="ml-2 text-white">{project.status}</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Timeline:</span>
                      <span className="ml-2 text-white">{project.timeline}</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Team:</span>
                      <span className="ml-2 text-white">{project.team}</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Funding:</span>
                      <span className="ml-2 text-white">{project.funding}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-zion-cyan" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <TrendingUp className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent Publications</h2>
            <p className="text-lg text-zion-slate-light">Contributing to the global body of scientific knowledge</p>
          </motion.div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.doi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-6 border border-zion-cyan/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                    <p className="text-zion-slate-light mb-2">{pub.authors}</p>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>{pub.journal}</span>
                      <span>{pub.year}</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4 text-zion-cyan" />
                        {pub.citations} citations
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                    >
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
          >
            <h2 className="text-4xl font-bold text-white mb-4">Research Partnerships</h2>
            <p className="text-lg text-zion-slate-light">Collaborating with leading institutions worldwide</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Innovation Lab</h2>
            <p className="text-lg text-zion-slate-light">Where ideas become reality</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              }
            ].map((lab, index) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Research Team
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Are you passionate about pushing the boundaries of technology? We're always looking for talented researchers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300">
                View Research Positions
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300">
                Submit Research Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
