export default function ResearchPage() {
  const researchAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Advancing the frontiers of AI through cutting-edge research in machine learning, neural networks, and cognitive computing.',
      focus: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning']
    },
    {
      title: 'Quantum Computing',
      description: 'Pioneering quantum computing research to solve complex problems that are intractable for classical computers.',
      focus: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Simulation']
    },
    {
      title: 'Autonomous Systems',
      description: 'Developing intelligent autonomous systems that can operate independently and adapt to dynamic environments.',
      focus: ['Autonomous Vehicles', 'Robotic Systems', 'Smart Infrastructure', 'Predictive Maintenance']
    },
    {
      title: 'Cybersecurity',
      description: 'Researching next-generation security solutions to protect against evolving cyber threats and ensure data integrity.',
      focus: ['Threat Detection', 'Zero-Trust Architecture', 'Quantum Security', 'AI-Powered Defense']
    }
  ];

  const publications = [
    {
      title: 'Quantum Machine Learning for Optimization Problems',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
      journal: 'Nature Quantum Information',
      year: '2024'
    },
    {
      title: 'Autonomous Systems in Smart Cities: A Comprehensive Study',
      authors: 'Dr. Alex Thompson, Dr. Lisa Wang',
      journal: 'IEEE Transactions on Smart Cities',
      year: '2024'
    },
    {
      title: 'Advanced AI Algorithms for Predictive Analytics',
      authors: 'Dr. James Wilson, Dr. Maria Garcia',
      journal: 'Journal of Artificial Intelligence Research',
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Research & Development
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Pioneering the future of technology through innovative research and breakthrough discoveries.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
              <p className="text-gray-300 mb-6">{area.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Research Focus:</h4>
                <ul className="space-y-2">
                  {area.focus.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{pub.authors}</p>
                <p className="text-sm text-gray-500">{pub.journal} • {pub.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}