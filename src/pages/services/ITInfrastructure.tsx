      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure design, deployment, and management across AWS, Azure, and Google Cloud platforms.",
      icon: Server,
      title: "Server Management",
      description: "Comprehensive server infrastructure design, deployment, and ongoing management services."
    },
    {
      title: 'Infrastructure Design',
      description: 'Custom infrastructure architecture and planning',
      price: 'From $15,000',
      features: ['Architecture design', 'Technology selection', 'Scalability planning', 'Implementation roadmap']
    },
    {
      title: 'Infrastructure Implementation',
      description: 'Complete infrastructure deployment and configuration',
      price: 'From $25,000',
      features: ['Hardware setup', 'Software configuration', 'Testing & validation', 'Documentation']
    },
    {
      icon: Cloud,
      features: ["Multi-cloud strategy", "Cost optimization", "Auto-scaling", "Disaster recovery"]
    },
    {
      title: "Network Architecture & Security",
      description: "Enterprise-grade network design with advanced security protocols, load balancing, and high availability solutions.",
      icon: Network,
      features: ["SDN implementation", "Load balancing", "Traffic optimization", "Security protocols"]
    },
    {
      title: "Data Center Solutions",
      description: "Modern data center design with virtualization, containerization, and hybrid cloud integration capabilities.",
      icon: Server,
      features: ["Virtualization", "Containerization", "Hybrid cloud", "Resource optimization"]
    },
    {
      title: "Database Management Systems",
      description: "High-performance database solutions with optimization, backup strategies, and real-time monitoring.",
      icon: Database,
      features: ["Performance tuning", "Backup strategies", "Real-time monitoring", "Scalability"]
    },
    {
      title: "Enterprise Storage Solutions",
      description: "Scalable storage infrastructure with data deduplication, compression, and intelligent tiering.",
      icon: HardDrive,
      features: ["Data deduplication", "Compression", "Intelligent tiering", "High availability"]
    "Improved system reliability and uptime",
    "Enhanced performance and scalability",
    "Reduced operational costs and complexity",
    "Better security and compliance",
    "24/7 monitoring and support",
    "Future-ready infrastructure design"
  ];

  const solutions = [
    "Enterprise Data Centers",
    "Hybrid Cloud Environments",
    "Network Security & Firewalls",
    "Storage & Backup Solutions",
    "Virtualization & Containers",
    "Monitoring & Management Tools"
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Infrastructure
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Foundation for Digital Success
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Build robust, scalable, and secure IT infrastructure that powers your business transformation 
            and enables seamless digital operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Infrastructure Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade IT infrastructure designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Infrastructure Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of a well-designed and managed IT infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored infrastructure solutions designed for the unique requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {industry.description}
                </p>
              </div>
      {/* Solutions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Infrastructure Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored infrastructure solutions for businesses of all sizes and industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-slate-700"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT infrastructure solutions can transform your business operations 
              and prepare you for future growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
