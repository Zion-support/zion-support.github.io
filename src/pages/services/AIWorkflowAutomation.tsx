  Users, 
  BarChart3, 
  Clock,
  Target,
  Award,
  Globe,
  Cpu
  Users,
  CheckCircle,
  ArrowRight
      examples: [
        "Patient appointment scheduling",
        "Medical record processing",
        "Insurance claim workflows",
        "Pharmacy order management"
      ]
        "Loan approval processes",
        "KYC verification workflows",
        "Fraud detection automation",
        "Compliance reporting"
      ]
        "Quality control workflows",
        "Supply chain management",
        "Maintenance scheduling",
        "Inventory optimization"
      ]
        "Returns processing"
      ]
      title: "80% Time Reduction",
      description: "Automate repetitive tasks and focus on strategic initiatives",
      metric: "80%",
      description: "Reduction in process time",
      icon: BoltIcon
    },
    {
      metric: "95%",
      description: "Elimination of manual errors",
      icon: CheckCircleIcon
    },
    {
      metric: "3x",
      description: "Faster decision making",
      icon: RocketLaunchIcon
    },
    {
      metric: "40%",
      description: "Cost savings",
      icon: ChartBarIcon
    }
  ];


  const howItWorks = [
    {
      step: "01",
      title: "Process Analysis",
      description: "AI analyzes your current workflows to identify automation opportunities and inefficiencies.",
      icon: EyeIcon
    },
    {
      step: "02",
      title: "Workflow Design",
      description: "Design optimized workflows using our intuitive drag-and-drop interface and AI recommendations.",
      icon: CpuChipIcon
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy workflows with automated testing and seamless integration to your existing systems.",
      icon: RocketLaunchIcon
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor and optimize workflows using real-time analytics and machine learning.",
      icon: ChartBarIcon
      icon: TrendingUp
    },
    {
      metric: "95%",
      description: "Error reduction",
      icon: Shield
      title: "95% Accuracy",
      description: "AI-powered processing reduces human errors significantly",
      icon: CheckCircle,
      metric: "95%"
    },
    {
      title: "3x Faster",
      description: "Streamlined workflows accelerate business processes",
      icon: Zap,
      metric: "3x"
    },
    {
      title: "24/7 Operation",
      description: "Automated systems work around the clock without breaks",
      icon: Globe,
      metric: "24/7"
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business operations with AI-powered workflow automation. Reduce costs by 60%, improve accuracy to 99.9%, and achieve 80% time savings."
        keywords="AI workflow automation, process automation, intelligent automation, business process optimization, AI-powered workflows"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Workflow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Automation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business operations with intelligent automation that learns, adapts, and scales. 
            Achieve <span className="text-cyan-400 font-semibold">80% time reduction</span> and 
            <span className="text-purple-400 font-semibold"> 60% cost savings</span> with AI-powered workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intelligent process automation to predictive analytics, we provide end-to-end AI workflow solutions 
              that transform your business operations and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform comes with enterprise-grade features designed to handle 
              complex business processes and scale with your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI workflow automation solutions designed for the unique requirements and compliance needs 
              of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-cyan-400 flex items-center">
                      <Lightbulb className="w-3 h-3 mr-2" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation. 
            Start your free trial today and see the difference intelligent automation can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              AI Workflow Automation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Transform your business processes with intelligent automation powered by artificial intelligence. 
              Streamline operations, eliminate bottlenecks, and boost productivity across your organization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Automation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow automation platform delivers intelligent process optimization 
              and seamless integration across your entire business ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See immediate improvements in efficiency, accuracy, and cost savings across your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation solutions are designed to work across diverse industries, 
              delivering tailored optimization for your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{useCase.industry}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI workflow automation in four simple steps, from analysis to optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business Processes with AI
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Automate complex business workflows using artificial intelligence. Reduce manual tasks by 80%, 
            increase efficiency by 60%, and achieve 45% cost savings with our intelligent automation platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
              Transform Your Business with AI Automation
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI-powered workflow automation platform delivers measurable results that impact your bottom line
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
      {/* Features Grid */}
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Everything you need to automate and optimize your business workflows
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
      {/* Pricing Section */}
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                tier.name === 'Professional' 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                  <span className="text-zion-slate">{tier.period}</span>
                </div>
                <p className="text-zion-slate mb-6">{tier.bestFor}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                  <p className="text-zion-slate mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${plan.price}
                    <span className="text-lg text-zion-slate font-normal">/{plan.period}</span>
                  </div>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation - ${tier.name} Plan Inquiry`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.name === 'Professional'
                      ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI workflow automation transforms different industries
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {example}
      {/* Market Information */}
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the market opportunity and potential return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Market Overview</h3>
              <div className="space-y-4">
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Market Size</span>
                    <span className="text-zion-cyan font-bold">$19.6B</span>
                  </div>
                  <p className="text-sm text-zion-slate">Global workflow automation market (2024)</p>
                </div>
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Growth Rate</span>
                    <span className="text-green-600 font-bold">23.4% CAGR</span>
                  </div>
                  <p className="text-sm text-zion-slate">Expected annual growth through 2030</p>
                </div>
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Average ROI</span>
                    <span className="text-purple-600 font-bold">312%</span>
                  </div>
                  <p className="text-sm text-zion-slate">Within 12 months of implementation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">AI-First Approach</h4>
                    <p className="text-zion-slate">Advanced machine learning algorithms for intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Enterprise Security</h4>
                    <p className="text-zion-slate">SOC 2 compliant with enterprise-grade security features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Rapid Implementation</h4>
                    <p className="text-zion-slate">Deploy workflows in days, not months</p>
                  </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
}
