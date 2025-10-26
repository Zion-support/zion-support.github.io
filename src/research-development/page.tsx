import { Phone, Mail } from 'lucide-react';
'use client';
import React, { useState } from 'react';


import { Link } from 'react-router-dom';
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
    <div>Coming Soon</div>

  );
};
  const [activeTab, setActiveTab] = useState('ai');
  const _researchAreas = [
  // TOD,
  O: Add items;
];;
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  i,
  d: 'ai',
      nam,
  e: 'Artificial Intelligence',
      ico,
  n: Brain,
      colo,
  r: 'text-purple-400',
      bgColo,
  r: 'bg-purple-500/10',
      descriptio,
  n: 'Advancing the frontiers of AI and machine learning'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  i,
  d: 'quantum',
      nam,
  e: 'Quantum Computing',
      ico,
  n: Atom,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10',
      descriptio,
  n: 'Exploring quantum algorithms and quantum advantage'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  i,
  d: 'autonomous',
      nam,
  e: 'Autonomous Systems',
      ico,
  n: Rocket,
      colo,
  r: 'text-green-400',
      bgColo,
  r: 'bg-green-500/10',
      descriptio,
  n: 'Developing self-managing and intelligent systems'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  i,
  d: 'emerging',
      nam,
  e: 'Emerging Technologies',
      ico,
  n: Lightbulb,
      colo,
  r: 'text-yellow-400',
      bgColo,
  r: 'bg-yellow-500/10',
      descriptio,
  n: 'Researching next-generation technologies'
    }
  ];
  const researchProjects = {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  a,
  i: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Consensus Intelligence Framework',
        descriptio,
  n: 'Developing a novel AI framework that enables multiple AI systems to reach consensus on complex decisions',
        statu,
  s: 'In Progress',
        timelin,
  e: '2025-2026',
        tea,
  m: '12 Researchers',
        fundin,
  g: '$2.5M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           'Improved decision accuracy by 40%',
//           'Reduced computational overhead by 30%',
//           'Published 3 papers in top-tier conferences'
//         ],
        ico,
  n: Brain,
        colo,
  r: 'text-purple-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Autonomous Business Intelligence',
        descriptio,
  n: 'Creating self-managing business intelligence systems that adapt and optimize without human intervention',
        statu,
  s: 'Completed',
        timelin,
  e: '2024-2025',
        tea,
  m: '8 Researchers',
        fundin,
  g: '$1.8M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           '95% automation of business processes',
//           '300% improvement in decision speed',
          'Patent filed for core algorithms'
//         ],
        ico,
  n: Target,
        colo,
  r: 'text-green-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Neural Architecture Search for Enterprise',
        descriptio,
  n: 'Developing automated neural architecture search specifically optimized for enterprise applications',
        statu,
  s: 'In Progress',
        timelin,
  e: '2025-2027',
        tea,
  m: '15 Researchers',
        fundin,
  g: '$3.2M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           '50% reduction in model development time',
//           '25% improvement in model performance',
//           'Open-source framework released'
//         ],
        ico,
  n: Microscope,
        colo,
  r: 'text-blue-400'
      }
//     ],
    quantu,
  m: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Quantum Machine Learning Algorithms',
        descriptio,
  n: 'Developing quantum algorithms for machine learning that leverage quantum advantage',
        statu,
  s: 'In Progress',
        timelin,
  e: '2025-2028',
        tea,
  m: '10 Researchers',
        fundin,
  g: '$4.1M',
        outcome,
  s: [
  // TOD,
  O: Add items]
          'Quantum speedup demonstrated for specific problems',
//           'Novel quantum ML algorithms developed',
//           'Partnership with leading quantum hardware companies'
//         ],
        ico,
  n: Atom,
        colo,
  r: 'text-blue-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Quantum Error Correction for Business Applications',
        descriptio,
  n: 'Researching practical quantum error correction methods for commercial quantum computing',
        statu,
  s: 'Planning',
        timelin,
  e: '2026-2029',
        tea,
  m: '12 Researchers',
        fundin,
  g: '$5.5M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           'Improved quantum error rates',
//           'Practical implementation strategies',
          'Industry collaboration established'
//         ],
        ico,
  n: Zap,
        colo,
  r: 'text-yellow-400'
      }
//     ],
    autonomou,
  s: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Autonomous Enterprise Operations',
        descriptio,
  n: 'Developing fully autonomous systems for enterprise operations and decision-making',
        statu,
  s: 'In Progress',
        timelin,
  e: '2025-2027',
        tea,
  m: '20 Researchers',
        fundin,
  g: '$6.8M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           '90% reduction in manual operations',
//           'Self-healing system capabilities',
//           'Real-world deployment in 5 enterprises'
//         ],
        ico,
  n: Rocket,
        colo,
  r: 'text-green-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Multi-Agent Coordination Systems',
        descriptio,
  n: 'Researching coordination mechanisms for multiple autonomous agents in complex environments',
        statu,
  s: 'Completed',
        timelin,
  e: '2023-2024',
        tea,
  m: '6 Researchers',
        fundin,
  g: '$1.2M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           'Novel coordination algorithms developed',
//           'Scalability demonstrated up to 1000 agents',
//           'Published in Nature Communications'
//         ],
        ico,
  n: Users,
        colo,
  r: 'text-purple-400'
      }
//     ],
    emergin,
  g: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Neuromorphic Computing for AI',
        descriptio,
  n: 'Exploring brain-inspired computing architectures for more efficient AI processing',
        statu,
  s: 'In Progress',
        timelin,
  e: '2025-2028',
        tea,
  m: '14 Researchers',
        fundin,
  g: '$3.7M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           'Novel neuromorphic algorithms',
//           'Hardware-software co-design',
          'Industry partnerships established'
//         ],
        ico,
  n: Lightbulb,
        colo,
  r: 'text-yellow-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Edge AI for IoT Systems',
        descriptio,
  n: 'Developing ultra-efficient AI systems for edge computing and IoT applications',
        statu,
  s: 'Completed',
        timelin,
  e: '2024-2025',
        tea,
  m: '8 Researchers',
        fundin,
  g: '$2.1M',
        outcome,
  s: [
  // TOD,
  O: Add items]
//           '10x reduction in power consumption',
//           'Real-time processing capabilities',
//           'Commercial product launched'
//         ],
        ico,
  n: Globe,
        colo,
  r: 'text-blue-400'
      }
//     ]
  };
  const publications = [
  // TOD,
  O: Add items;
];;
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Consensus,
  Intelligence: A Framework for Multi-Agent Decision Making',
      author,
  s: 'Dr. Sarah Chen, Dr. Michael Rodriguez, et al.',
      journa,
  l: 'Nature Machine Intelligence',
      yea,
  r: '2025',
      impac,
  t: 'High',
      lin,
  k: '#'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Autonomous Business Process Optimization Using Reinforcement Learning',
      author,
  s: 'Dr. James Wilson, Dr. Lisa Park, et al.',
      journa,
  l: 'Journal of Artificial Intelligence Research',
      yea,
  r: '2025',
      impac,
  t: 'High',
      lin,
  k: '#'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Quantum Machine Learning for Financial Risk Assessment',
      author,
  s: 'Dr. Alex Kumar, Dr. Maria Santos, et al.',
      journa,
  l: 'Quantum Information Processing',
      yea,
  r: '2024',
      impac,
  t: 'Medium',
      lin,
  k: '#'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  titl,
  e: 'Multi-Agent Coordination in Distributed Systems',
      author,
  s: 'Dr. Robert Kim, Dr. Jennifer Lee, et al.',
      journa,
  l: 'Nature Communications',
      yea,
  r: '2024',
      impac,
  t: 'High',
      lin,
  k: '#'
    }
  ];
  const achievements = [
  // TOD,
  O: Add items;
];;
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  ico,
  n: Award,
      titl,
  e: '50+ Research Papers',
      descriptio,
  n: 'Published in top-tier conferences and journals'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  ico,
  n: Users,
      titl,
  e: '100+ Researchers',
      descriptio,
  n: 'World-class research team across multiple disciplines'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  ico,
  n: Target,
      titl,
  e: '15+ Patents',
      descriptio,
  n: 'Innovative technologies and methodologies'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  ico,
  n: Globe,
      titl,
  e: 'Global Collaborations',
      descriptio,
  n: 'Partnerships with leading universities and research institutions'
    }
  ];
  return (<div>Coming Soon</div>)
  )
    
          <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""
        <div className="container mx-auto px-4 py-16 pt-24"></div>"
          {/* Header */}""
          <div className="text-center mb-16"></div>""
            <h1 className="text-4xl,""
  md:text-5xl font-bold text-white mb-6 neon-text"></h1>"
// Research & Development;

          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium"></p>"
            Coming Soon

          </p>
          </div>
          {/* Research Areas Tabs */}""
          <div className="mb-12"></div>""
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>"
              {researchAreas.map((area) => ()}
          <button></button>
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${}
  // TOD,
  O: Add content;
}
                    activeTab === area.id;`
                      ? `${area.bgColor} ${area.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300,
  hover:bg-slate-700/50 border-2 border-transparent'`
                  }`}
//                 >
                  
          
          
          
          
          
          
          
          ""
          <area.icon className="w-5 h-5 mr-2" /></area>""
                  <span className="font-medium">{area.name}</span>"
                </button>
              ))}
            </div>""
            <div className="text-center"></div>""
              <p className="text-gray-300 max-w-2xl mx-auto"></p>"
                {researchAreas.find(area => area.id === activeTab)?.description}
              </p>
            </div>
          </div>
          {/* Research Projects */}""
          <div className="mb-16"></div>""
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>"
// Current Research Projects;
          </h2>""
            <div className="grid grid-cols-1,""
  lg:grid-cols-2 gap-8"></div>"
              {researchProjects[activeTab as keyof typeof researchProjects].map((project, index) => ()}""
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,""
  hover:border-cyan-400/50 transition-all duration-300"></div>""
                  <div className="flex items-start mb-4"></div>`"
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}></div>`
                      <project.icon className={`w-6 h-6 ${project.color}`} /></project>
                    </div>""
                    <div className="flex-1"></div>""
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>""
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>"
                    </div>
                  </div>""
                  <div className="grid grid-cols-2 gap-4 mb-4"></div>"
                    <div></div>""
                      <div className="text-sm text-gray-400 mb-1">Status</div>`"
                      <div className={`text-sm font-medium ${}
  // TOD,
  O: Add content;
}
                        project.status === 'Completed' ? 'text-green-400' :
                        project.status === 'In Progress' ? 'text-blue-400' : 'text-yellow-400'`
                      }`}></div>
                        {project.status}
                      
          
          
          
          
          
          
          
          
          </div>
                    </div>
                    <div></div>""
                      <div className="text-sm text-gray-400 mb-1">Timeline</div>""
                      <div className="text-sm text-white">{project.timeline}</div>"
                    </div>
                    <div></div>""
                      <div className="text-sm text-gray-400 mb-1">Team</div>""
                      <div className="text-sm text-white">{project.team}</div>"
                    </div>
                    <div></div>""
                      <div className="text-sm text-gray-400 mb-1">Funding</div>""
                      <div className="text-sm text-white">{project.funding}</div>"
                    </div>
                  </div>
                  <div></div>""
                    <div className="text-sm font-semibold text-cyan-400 mb-2"></div>Key,"
  Outcomes:</div>""
                    <ul className="space-y-1"></ul>"
                      {project.outcomes.map((outcome, outcomeIndex) => ()}""
          <li key={outcomeIndex} className="text-sm text-gray-300 flex items-start"></li>""
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>"
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Publications */}""
          <div className="mb-16"></div>""
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>"
// Recent Publications;
          </h2>""
            <div className="max-w-4xl mx-auto"></div>""
              <div className="space-y-6"></div>"
                {publications.map((pub, index) => ()}""
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,""
  hover:border-cyan-400/50 transition-all duration-300"></div>""
                    <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>""
                    <div className="text-sm text-gray-300 mb-2">{pub.authors}</div>""
                    <div className="flex items-center justify-between"></div>""
                      <div className="flex items-center space-x-4 text-sm text-gray-400"></div>"
                        <span>{pub.journal}</span>
                        <span></span>
                        <span>{pub.year}</span>`
                        <span className={`px-2 py-1 rounded text-xs ${}
  // TOD,
  O: Add content;
}
                          pub.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'`
                        }`}></span>
                          {pub.impact} Impact;
          </span>
                      </div>
                      <a></a>
                        href={pub.link}""
                        className="text-cyan-400,""
  hover:text-cyan-300 text-sm font-medium""
// >
//                         Read Paper;
          </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Achievements */}""
          <div className="mb-16"></div>""
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>"
// Research Achievements;
          </h2>""
            <div className="grid grid-cols-1,"
  md:grid-cols-2,""
  lg:grid-cols-4 gap-6"></div>"
              {achievements.map((achievement, index) => ()}""
          <div key={index} className="text-center"></div>""
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>""
                    <achievement.icon className="w-8 h-8 text-cyan-400" /></achievement>"
                  </div>""
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>""
                  <p className="text-gray-300 text-sm">{achievement.description}</p>"
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}""
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>""
            <h2 className="text-2xl font-bold text-white mb-4"></h2>"
// Collaborate With Our Research Team;
          </h2>""
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>"
// Interested in collaborating on cutting-edge research? We welcome partnerships with;
              universities, research institutions, and industry leaders.
            
          
          
          
          
          
          
          
          

          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <a,
href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105""

// ></a>
                
          
          
          
          
          
          
          
          ""
          <BookOpen className="w-5 h-5 mr-2" /></BookOpen>"
// Start Collaboration;
          </a>

              <a,
href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""

// ></a>
                
          
          
          
          
          
          
          
          ""
          <Phone className="w-4 h-4 mr-2" /></Phone>"
// (302) 464-0950;
          </a>

              <a,
href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""

// ></a>
                
          
          
          
          
          
          
          
          ""
          <Mail className="w-4 h-4 mr-2" /></Mail>"
// Email Us;
          </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default ResearchDevelopmentPage;
