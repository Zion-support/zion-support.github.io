    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple via-zion-blue to-zion-cyan opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of innovative services that push the boundaries of what's possible. 
              From quantum computing to space technology, we're building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEOHead
        title="Innovative Technology Services Showcase | Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, blockchain, IoT, and emerging technology solutions. Transform your business with our innovative micro SAAS services."
        keywords="AI services, quantum computing, blockchain solutions, IoT platform, emerging technology, micro SAAS, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Innovative Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover cutting-edge AI, quantum computing, blockchain, IoT, and emerging technology solutions that will revolutionize your business operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="bg-zion-blue-light/20 border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => setSelectedService(service)}
