const quantumServices = [
  {
    id: 'quantum-edge-computing-platform',
    title: 'Quantum Edge Computing Platform',
    description: 'Revolutionary edge computing platform that leverages quantum computing principles to deliver unprecedented performance and efficiency',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Quantum-enhanced processing',
      'Edge computing optimization',
      'Real-time data analysis',
      'Scalable architecture',
      'Energy efficiency'
    ],
    pricing: '$1,299/month',
    href: '/quantum-edge-computing-platform'
  },
  {
    id: 'neuromorphic-computing-infrastructure',
    title: 'Neuromorphic Computing Infrastructure',
    description: 'Brain-inspired computing systems that mimic neural networks for advanced AI and machine learning applications',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Neural network simulation',
      'Cognitive computing',
      'Pattern recognition',
      'Adaptive learning',
      'Low power consumption'
    ],
    pricing: '$899/month',
    href: '/neuromorphic-computing-infrastructure'
  },
  {
    id: 'holographic-data-center-platform',
    title: 'Holographic Data Center Platform',
    description: 'Next-generation data center technology using holographic storage and quantum processing for massive data operations',
    icon: Database,
    color: 'from-green-500 to-teal-600',
    features: [
      'Holographic storage',
      'Quantum data processing',
      '3D data visualization',
      'High-density storage',
      'Fast data retrieval'
    ],
    pricing: '$1,599/month',
    href: '/holographic-data-center-platform'
  },
  {
    id: 'bio-computing-infrastructure',
    title: 'Bio-Computing Infrastructure',
    description: 'Biological computing systems that harness the power of living organisms for computational tasks',
    icon: Building,
    color: 'from-emerald-500 to-green-600',
    features: [
      'Biological processors',
      'DNA computing',
      'Protein-based logic',
      'Biomolecular storage',
      'Natural computing'
    ],
    pricing: '$1,199/month',
    href: '/bio-computing-infrastructure'
  },
  {
    id: 'quantum-internet-backbone',
    title: 'Quantum Internet Backbone',
    description: 'Quantum-secured internet infrastructure providing unhackable communication and ultra-fast data transfer',
    icon: Network,
    color: 'from-cyan-500 to-blue-600',
    features: [
      'Quantum encryption',
      'Entangled communication',
      'Ultra-secure networks',
      'Instant data transfer',
      'Quantum key distribution'
    ],
    pricing: '$1,799/month',
    href: '/quantum-internet-backbone'
  }
];

const benefits = [
  {
    title: 'Unprecedented Performance',
    description: 'Quantum computing delivers exponential speed improvements over classical systems',
    icon: Zap
  },
  {
    title: 'Quantum Advantage',
    description: 'Solve complex problems that are impossible for traditional computers',
    icon: Building
  },
  {
    title: 'Future-Proof Technology',
    description: 'Stay ahead with cutting-edge quantum computing solutions',
    icon: TrendingUp
  },
  {
    title: 'Quantum Security',
    description: 'Unhackable communication and data protection',
    icon: Shield
  }
];

const applications = [
  {
    category: 'Cryptography',
    description: 'Quantum-resistant encryption and secure communication',
    icon: Shield
  },
  {
    category: 'Optimization',
    description: 'Complex optimization problems in logistics and finance',
    icon: Building
  },
  {
    category: 'Machine Learning',
    description: 'Quantum-enhanced AI and pattern recognition',
    icon: Brain
  },
  {
    category: 'Drug Discovery',
    description: 'Molecular simulation and pharmaceutical research',
    icon: Building
  },
  {
    category: 'Climate Modeling',
    description: 'Advanced climate prediction and environmental analysis',
    icon: Globe
  },
  {
    category: 'Financial Modeling',
    description: 'Risk assessment and portfolio optimization',
    icon: TrendingUp
  }
];
const QuantumTechnology: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Harness the power of quantum bits (qubits) for exponentially faster computational capabilities."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
    },
    {
      icon: Brain,
      title: "Quantum AI",
      description: "Quantum machine learning algorithms that solve complex problems beyond classical computing limits."
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-black to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Quantum Technology
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Next-generation quantum computing solutions that deliver unprecedented performance, 
            security, and innovation. Experience the future of computing technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
      {/* Quantum Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Quantum Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of quantum computing solutions designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose Quantum Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum solutions deliver exceptional value through unprecedented performance, security, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
      {/* Applications Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{application.category}</h3>
                </div>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge quantum computing solutions. 
            Experience unprecedented performance and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
            </Link>
          </div>
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business with the power of quantum technology and stay ahead of the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore All Services
