'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResearchDevelopmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const _researchAreas = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Advancing the frontiers of AI and machine learning'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Exploring quantum algorithms and quantum advantage'
    },
    {
      id: 'autonomous',
      name: 'Autonomous Systems',
      icon: Rocket,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Developing self-managing and intelligent systems'
    },
    {
      id: 'emerging',
      name: 'Emerging Technologies',
      icon: Lightbulb,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description: 'Researching next-generation technologies'
    }
  ];

  const researchProjects = {
    ai: [
      {
        title: 'Consensus Intelligence Framework',
        description: 'Developing a novel AI framework that enables multiple AI systems to reach consensus on complex decisions',
        status: 'In Progress',
        timeline: '2025-2026',
        team: '12 Researchers',
        funding: '$2.5M',
        outcomes: [
          'Improved decision accuracy by 40%',
          'Reduced computational overhead by 30%',
          'Published 3 papers in top-tier conferences'
        ],
        icon: Brain,
        color: 'text-purple-400'
      },
      {
        title: 'Autonomous Business Intelligence',
        description: 'Creating self-managing business intelligence systems that adapt and optimize without human intervention',
        status: 'Completed',
        timeline: '2024-2025',
        team: '8 Researchers',
        funding: '$1.8M',
        outcomes: [
          '95% automation of business processes',
          '300% improvement in decision speed',
          'Patent filed for core algorithms'
        ],
        icon: Target,
        color: 'text-green-400'
      },
      {
        title: 'Neural Architecture Search for Enterprise',
        description: 'Developing automated neural architecture search specifically optimized for enterprise applications',
        status: 'In Progress',
        timeline: '2025-2027',
        team: '15 Researchers',
        funding: '$3.2M',
        outcomes: [
          '50% reduction in model development time',
          '25% improvement in model performance',
          'Open-source framework released'
        ],
        icon: Microscope,
        color: 'text-blue-400'
      }
    ],
    quantum: [
      {
        title: 'Quantum Machine Learning Algorithms',
        description: 'Developing quantum algorithms for machine learning that leverage quantum advantage',
        status: 'In Progress',
        timeline: '2025-2028',
        team: '10 Researchers',
        funding: '$4.1M',
        outcomes: [
          'Quantum speedup demonstrated for specific problems',
          'Novel quantum ML algorithms developed',
          'Partnership with leading quantum hardware companies'
        ],
        icon: Atom,
        color: 'text-blue-400'
      },
      {
        title: 'Quantum Error Correction for Business Applications',
        description: 'Researching practical quantum error correction methods for commercial quantum computing',
        status: 'Planning',
        timeline: '2026-2029',
        team: '12 Researchers',
        funding: '$5.5M',
        outcomes: [
          'Improved quantum error rates',
          'Practical implementation strategies',
          'Industry collaboration established'
        ],
        icon: Zap,
        color: 'text-yellow-400'
      }
    ],
    autonomous: [
      {
        title: 'Autonomous Enterprise Operations',
        description: 'Developing fully autonomous systems for enterprise operations and decision-making',
        status: 'In Progress',
        timeline: '2025-2027',
        team: '20 Researchers',
        funding: '$6.8M',
        outcomes: [
          '90% reduction in manual operations',
          'Self-healing system capabilities',
          'Real-world deployment in 5 enterprises'
        ],
        icon: Rocket,
        color: 'text-green-400'
      },
      {
        title: 'Multi-Agent Coordination Systems',
        description: 'Researching coordination mechanisms for multiple autonomous agents in complex environments',
        status: 'Completed',
        timeline: '2023-2024',
        team: '6 Researchers',
        funding: '$1.2M',
        outcomes: [
          'Novel coordination algorithms developed',
          'Scalability demonstrated up to 1000 agents',
          'Published in Nature Communications'
        ],
        icon: Users,
        color: 'text-purple-400'
      }
    ],
    emerging: [
      {
        title: 'Neuromorphic Computing for AI',
        description: 'Exploring brain-inspired computing architectures for more efficient AI processing',
        status: 'In Progress',
        timeline: '2025-2028',
        team: '14 Researchers',
        funding: '$3.7M',
        outcomes: [
          'Novel neuromorphic algorithms',
          'Hardware-software co-design',
          'Industry partnerships established'
        ],
        icon: Lightbulb,
        color: 'text-yellow-400'
      },
      {
        title: 'Edge AI for IoT Systems',
        description: 'Developing ultra-efficient AI systems for edge computing and IoT applications',
        status: 'Completed',
        timeline: '2024-2025',
        team: '8 Researchers',
        funding: '$2.1M',
        outcomes: [
          '10x reduction in power consumption',
          'Real-time processing capabilities',
          'Commercial product launched'
        ],
        icon: Globe,
        color: 'text-blue-400'
      }
    ]
  };

  const publications = [
    {
      title: 'Consensus Intelligence: A Framework for Multi-Agent Decision Making',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, et al.',
      journal: 'Nature Machine Intelligence',
      year: '2025',
      impact: 'High',
      link: '#'
    },
    {
      title: 'Autonomous Business Process Optimization Using Reinforcement Learning',
      authors: 'Dr. James Wilson, Dr. Lisa Park, et al.',
      journal: 'Journal of Artificial Intelligence Research',
      year: '2025',
      impact: 'High',
      link: '#'
    },
    {
      title: 'Quantum Machine Learning for Financial Risk Assessment',
      authors: 'Dr. Alex Kumar, Dr. Maria Santos, et al.',
      journal: 'Quantum Information Processing',
      year: '2024',
      impact: 'Medium',
      link: '#'
    },
    {
      title: 'Multi-Agent Coordination in Distributed Systems',
      authors: 'Dr. Robert Kim, Dr. Jennifer Lee, et al.',
      journal: 'Nature Communications',
      year: '2024',
      impact: 'High',
      link: '#'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '50+ Research Papers',
      description: 'Published in top-tier conferences and journals'
    },
    {
      icon: Users,
      title: '100+ Researchers',
      description: 'World-class research team across multiple disciplines'
    },
    {
      icon: Target,
      title: '15+ Patents',
      description: 'Innovative technologies and methodologies'
    },
    {
      icon: Globe,
      title: 'Global Collaborations',
      description: 'Partnerships with leading universities and research institutions'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Research & Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pushing the boundaries of technology through cutting-edge research and innovation. 
              Our R&D team is dedicated to creating the next generation of AI and IT solutions.
            </p>
          </div>

          {/* Research Areas Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {researchAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === area.id
                      ? `${area.bgColor} ${area.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <area.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{area.name}</span>
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 max-w-2xl mx-auto">
                {researchAreas.find(area => area.id === activeTab)?.description}
              </p>
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Current Research Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {researchProjects[activeTab as keyof typeof researchProjects].map((project, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Status</div>
                      <div className={`text-sm font-medium ${
                        project.status === 'Completed' ? 'text-green-400' : 
                        project.status === 'In Progress' ? 'text-blue-400' : 'text-yellow-400'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Timeline</div>
                      <div className="text-sm text-white">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Team</div>
                      <div className="text-sm text-white">{project.team}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Funding</div>
                      <div className="text-sm text-white">{project.funding}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-cyan-400 mb-2">Key Outcomes:</div>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="text-sm text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Recent Publications
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                    <div className="text-sm text-gray-300 mb-2">{pub.authors}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{pub.journal}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          pub.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {pub.impact} Impact
                        </span>
                      </div>
                      <a
                        href={pub.link}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read Paper →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Research Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Collaborate With Our Research Team
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on cutting-edge research? We welcome partnerships with 
              universities, research institutions, and industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Collaboration
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResearchDevelopmentPage;