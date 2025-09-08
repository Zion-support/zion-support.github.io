import { Link } from 'react-router-dom';
  Brain, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Briefcase,
  Award,
  TrendingUp,
  Gavel,
  BookOpen
      icon: FileText,
      title: "Intelligent Document Analysis",
      description: "AI-powered contract review and legal document analysis"
    },
    {
      icon: Search,
      title: "Advanced Legal Research",
      description: "Automated case law research and precedent analysis"
    },
    {
      icon: Brain,
      title: "Predictive Legal Analytics",
      description: "Machine learning models for case outcome prediction"
    },
    {
      icon: BarChart3,
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance tracking and alerts"
    },
    {
      icon: Zap,
      title: "Automated Contract Generation",
      description: "AI-driven contract drafting and customization"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Intelligent legal risk analysis and mitigation strategies"
      description: "AI-driven research tools that find relevant case law, statutes, and precedents in seconds, not hours.",
      benefits: ["Case law discovery", "Precedent analysis", "Research automation"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast case outcomes, settlement probabilities, and litigation risks.",
      benefits: ["Case outcome prediction", "Risk assessment", "Strategic planning"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined legal processes that automate routine tasks and ensure consistency across all legal operations.",
      benefits: ["Document generation", "Process automation", "Quality control"]
    }
  ];

  const services = [
    {
      title: "Contract Management",
      description: "AI-powered contract analysis, review, and management for improved efficiency and risk mitigation.",
      icon: FileText,
      features: ["Contract review", "Risk assessment", "Compliance checking", "Automated generation"]
    },
    {
      title: "Legal Research",
      description: "Intelligent research tools that accelerate case preparation and improve legal strategy development.",
      icon: Search,
      features: ["Case law research", "Precedent analysis", "Statute interpretation", "Research automation"]
    },
    {
      title: "Litigation Support",
      description: "Comprehensive support for litigation processes with AI-powered analytics and document management.",
      icon: Gavel,
      features: ["Document review", "Evidence analysis", "Case strategy", "Outcome prediction"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting to ensure regulatory adherence across all legal operations.",
      icon: Shield,
      features: ["Regulatory monitoring", "Compliance reporting", "Risk assessment", "Audit support"]
      description: "Automated tracking of regulatory changes and compliance requirements across jurisdictions."
    },
    {
      icon: Clock,
      title: "E-Discovery",
      description: "AI-powered document review and analysis for litigation and regulatory investigations."
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Scale className="w-8 h-8 text-white" />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Legal Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your legal practice with cutting-edge AI technology. Streamline document review, 
              automate research, and enhance compliance with intelligent legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Legal Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology solutions are tailored to meet the unique needs of different types of legal organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Legal Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in your legal practice with AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Technology Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming legal practice across different practice areas and firm sizes
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* Success Metrics Section */}
      <section className="py-20 bg-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI legal tech platform delivers for law firms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.description}</div>
                <div className="text-gray-400 text-sm">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice.
            Join forward-thinking legal professionals who have already revolutionized their practice with AI. 
            Start working smarter today with intelligent legal technology.
};

export default AILegalTech;
}
