import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  Lightbulb, 
  Rocket, 
  Brain, 
  Cloud, 
  Shield,
  Code,
  Zap,
  Users,
  Target,
  Award,
  Globe,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const ResearchDevelopment = () => {
  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Advancing the frontiers of AI with cutting-edge research in neural networks, natural language processing, and autonomous systems.',
      icon: Brain,
      projects: [
        'Quantum Machine Learning Algorithms',
        'Explainable AI Systems',
        'AI-Powered Cybersecurity',
        'Autonomous Decision Making'
      ],
      status: 'Active Research',
      impact: 'High'
    },
    {
      title: 'Quantum Computing & Cryptography',
      description: 'Exploring quantum computing applications and developing post-quantum cryptographic solutions for future security needs.',
      icon: Zap,
      projects: [
        'Quantum Error Correction',
        'Post-Quantum Cryptography',
        'Quantum-Safe Blockchain',
        'Quantum Machine Learning'
      ],
      status: 'Emerging Technology',
      impact: 'Transformative'
    },
    {
      title: 'Edge Computing & IoT',
      description: 'Developing next-generation edge computing solutions for real-time data processing and intelligent IoT ecosystems.',
      icon: Cloud,
      projects: [
        'Edge AI Processing',
        'IoT Security Protocols',
        '5G Edge Networks',
        'Smart City Infrastructure'
      ],
      status: 'Applied Research',
      impact: 'High'
    },
    {
      title: 'Cybersecurity & Privacy',
      description: 'Researching advanced security protocols, zero-trust architectures, and privacy-preserving technologies.',
      icon: Shield,
      projects: [
        'Zero-Trust Security Models',
        'Privacy-Preserving AI',
        'Threat Intelligence Systems',
        'Secure Multi-Party Computation'
      ],
      status: 'Active Research',
      impact: 'Critical'
    },
    {
      title: 'Sustainable Technology',
      description: 'Developing green computing solutions and energy-efficient technologies for a sustainable digital future.',
      icon: Globe,
      projects: [
        'Green AI Algorithms',
        'Energy-Efficient Computing',
        'Sustainable Data Centers',
        'Carbon-Neutral Solutions'
      ],
      status: 'Applied Research',
      impact: 'High'
    },
    {
      title: 'Human-Computer Interaction',
      description: 'Advancing the interface between humans and technology through intuitive design and accessibility research.',
      icon: Users,
      projects: [
        'Brain-Computer Interfaces',
        'Accessibility Technologies',
        'Immersive Experiences',
        'Natural Language Processing'
      ],
      status: 'Emerging Research',
      impact: 'Medium'
    }
  ];

  const publications = [
    {
      title: 'Quantum-Resistant Cryptographic Protocols for Enterprise Security',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Prof. James Wilson'],
      journal: 'IEEE Security & Privacy',
      year: 2024,
      doi: '10.1109/SP.2024.12345',
      abstract: 'This paper presents novel quantum-resistant cryptographic protocols designed specifically for enterprise environments...',
      citations: 23,
      impact: 'High'
    },
    {
      title: 'Edge AI: Optimizing Machine Learning for Resource-Constrained Devices',
      authors: ['Dr. Lisa Thompson', 'Dr. Alex Chen', 'Dr. Jennifer Park'],
      journal: 'ACM Computing Surveys',
      year: 2024,
      doi: '10.1145/1234567.1234567',
      abstract: 'We survey the current state of edge AI technologies and propose optimization strategies for deployment...',
      citations: 18,
      impact: 'Medium'
    },
    {
      title: 'Zero-Trust Architecture Implementation in Multi-Cloud Environments',
      authors: ['Dr. Robert Johnson', 'Dr. Maria Garcia', 'Dr. David Kim'],
      journal: 'Cloud Computing Security',
      year: 2024,
      doi: '10.1007/12345-2024-12345',
      abstract: 'This research explores the challenges and solutions for implementing zero-trust security in complex cloud environments...',
      citations: 15,
      impact: 'High'
    }
  ];

  const partnerships = [
    {
      name: 'MIT Computer Science & AI Laboratory',
      description: 'Collaborative research in artificial intelligence and machine learning algorithms',
      focus: 'AI/ML Research',
      status: 'Active'
    },
    {
      name: 'Stanford University - Security Lab',
      description: 'Joint research in cybersecurity and privacy-preserving technologies',
      focus: 'Cybersecurity',
      status: 'Active'
    },
    {
      name: 'Carnegie Mellon University - Robotics Institute',
      description: 'Research collaboration in autonomous systems and robotics',
      focus: 'Autonomous Systems',
      status: 'Planning'
    },
    {
      name: 'University of California, Berkeley - EECS',
      description: 'Collaborative research in quantum computing and cryptography',
      focus: 'Quantum Computing',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research and development. 
              We explore emerging technologies and create solutions that shape the future of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Research Areas
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our multidisciplinary research spans cutting-edge technologies that will define the future of computing and digital innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{area.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    area.status === 'Active Research' ? 'bg-green-500/20 text-green-400' :
                    area.status === 'Applied Research' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {area.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full ${
                    area.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    area.impact === 'Critical' ? 'bg-purple-500/20 text-purple-400' :
                    area.impact === 'Transformative' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {area.impact} Impact
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Projects:</h4>
                  <ul className="space-y-1">
                    {area.projects.slice(0, 3).map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Publications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our research findings are published in leading academic journals and conferences, 
              contributing to the global knowledge base in technology and innovation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.doi}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{publication.title}</h3>
                    <p className="text-gray-300 mb-4">{publication.abstract}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{publication.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{publication.journal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>{publication.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">DOI: {publication.doi}</span>
                      <span className="text-xs text-gray-400">{publication.citations} citations</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        publication.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {publication.impact} Impact
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </button>
                    <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm">
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We collaborate with leading academic institutions and research organizations 
              to advance the frontiers of technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{partnership.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    partnership.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {partnership.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{partnership.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{partnership.focus}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Research Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a researcher, student, or industry partner, 
              we welcome collaboration opportunities to advance technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Collaboration
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Research Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
