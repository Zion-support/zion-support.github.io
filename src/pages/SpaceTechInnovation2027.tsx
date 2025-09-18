import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2027: React.FC = () => {
  const innovations = [
    {
      id: 'quantum-space-drive',
      title: 'Quantum Space Drive',
      description: 'Revolutionary propulsion system using quantum field manipulation for near-light-speed travel',
      features: [
        '99.9% light speed capability',
        'Zero fuel consumption',
        'Instantaneous acceleration',
        'Gravity field generation'
      ],
      image: '/images/quantum-space-drive.jpg',
      status: 'In Testing'
    },
    {
      id: 'self-replicating-stations',
      title: 'Self-Replicating Space Stations',
      description: 'Autonomous space stations that build themselves using asteroid materials',
      features: [
        'Complete autonomy',
        'Asteroid mining integration',
        'Modular construction',
        'Infinite scalability'
      ],
      image: '/images/self-replicating-stations.jpg',
      status: 'Prototype Ready'
    },
    {
      id: 'neural-space-communication',
      title: 'Neural Space Communication',
      description: 'Direct brain-to-brain communication across vast distances using quantum entanglement',
      features: [
        'Instantaneous communication',
        'No distance limitations',
        'Thought transmission',
        'Emotional sharing'
      ],
      image: '/images/neural-space-communication.jpg',
      status: 'Deployed'
    },
    {
      id: 'terraforming-ai',
      title: 'AI Terraforming Systems',
      description: 'Autonomous AI systems that transform planets into habitable environments',
      features: [
        'Atmosphere generation',
        'Climate control',
        'Ecosystem creation',
        'Resource optimization'
      ],
      image: '/images/terraforming-ai.jpg',
      status: 'In Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Space Tech Innovation 2027 - Revolutionary Space Technologies</title>
        <meta name="description" content="Discover groundbreaking space technologies including quantum space drives, self-replicating stations, and AI terraforming systems." />
        <meta name="keywords" content="space technology, quantum drive, terraforming, space stations, neural communication" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Space Tech 2027
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Revolutionary Space Technologies
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Pushing the boundaries of space exploration with breakthrough technologies that make the impossible possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Explore Technologies
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Join Mission
            </button>
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Innovations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation) => (
              <div key={innovation.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    innovation.status === 'Deployed' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'In Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                    innovation.status === 'Prototype Ready' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {innovation.status}
                  </span>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {innovation.description}
                </p>
                
                <ul className="space-y-3">
                  {innovation.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statistics */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Mission Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">12</div>
              <div className="text-xl text-white font-semibold mb-2">Active Missions</div>
              <div className="text-gray-300">Currently exploring the cosmos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">47</div>
              <div className="text-xl text-white font-semibold mb-2">Planets Discovered</div>
              <div className="text-gray-300">Potentially habitable worlds</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-4">99.9%</div>
              <div className="text-xl text-white font-semibold mb-2">Mission Success Rate</div>
              <div className="text-gray-300">Reliable space technology</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">∞</div>
              <div className="text-xl text-white font-semibold mb-2">Possibilities</div>
              <div className="text-gray-300">Endless exploration potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Technology Showcase
          </h2>
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Quantum Space Drive in Action
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Watch our revolutionary quantum space drive propel spacecraft to near-light speeds, 
                  making interstellar travel a reality. This breakthrough technology uses quantum field 
                  manipulation to achieve unprecedented propulsion efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Watch Demo
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Interactive Demo</p>
                    <p className="text-gray-300 text-sm">Click to experience quantum drive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Explore the Universe?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join us in the next chapter of space exploration with revolutionary technologies that make the impossible possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Join the Mission
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechInnovation2027;