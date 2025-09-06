export default function ServicesPage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions that transform your business operations and drive intelligent decision-making.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Systems']
    },
    {
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum computing research and implementation for complex problem-solving and optimization.',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization Problems', 'Cryptography Solutions']
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing systems that operate independently and adapt to changing environments and requirements.',
      features: ['Autonomous Vehicles', 'Smart Infrastructure', 'Robotic Process Automation', 'Intelligent Monitoring']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed to scale and grow with your business needs.',
      features: ['Cloud Migration', 'Digital Transformation', 'System Integration', 'Performance Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security measures and protocols to protect your data and systems from evolving threats.',
      features: ['Threat Detection', 'Data Encryption', 'Security Audits', 'Compliance Management']
    },
    {
      title: 'Research & Development',
      description: 'Innovation-focused R&D services to explore new technologies and develop breakthrough solutions.',
      features: ['Technology Research', 'Prototype Development', 'Proof of Concept', 'Innovation Consulting']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive technology solutions designed to transform your business and drive innovation.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Learn More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}