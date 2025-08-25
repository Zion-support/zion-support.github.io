import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Zap, 
  BarChart3, 
  FileText, 
  Users,
  Brain,
  Workflow,
  Target,
  Rocket,
  Globe,
  Lightbulb
} from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Research",
      description: "AI-powered research across multiple sources and databases"
    },
    {
      icon: BookOpen,
      title: "Literature Review",
      description: "Comprehensive analysis of existing research and publications"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay current with latest research developments and trends"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Advanced analytics and visualization of research data"
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Automated creation of research summaries and reports"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Team-based research collaboration and knowledge sharing"
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Accelerate scientific discovery across all disciplines",
      applications: ["Literature Review", "Data Analysis", "Hypothesis Generation"]
    },
    {
      title: "Market Research",
      description: "Comprehensive market analysis and competitive intelligence",
      applications: ["Trend Analysis", "Competitor Research", "Market Reports"]
    },
    {
      title: "Academic Research",
      description: "Support academic research and publication processes",
      applications: ["Citation Management", "Research Synthesis", "Publication Tracking"]
    },
    {
      title: "Business Intelligence",
      description: "Transform business data into actionable insights",
      applications: ["Performance Analysis", "Strategic Planning", "Risk Assessment"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "10x Faster Research",
      description: "Accelerate research processes with AI automation"
    },
    {
      icon: Target,
      title: "Higher Quality Results",
      description: "Improve research accuracy and comprehensiveness"
    },
    {
      icon: Lightbulb,
      title: "Novel Insights",
      description: "Discover hidden patterns and connections"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous research assistant for comprehensive research automation, analysis, and insights across all domains." />
        <meta name="keywords" content="AI research assistant, research automation, autonomous research, AI analysis, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AI Autonomous
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Research Assistant
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your research process with AI-powered automation. 
            Discover insights faster, analyze data comprehensively, and generate breakthrough findings.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive research automation powered by artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Versatile research assistant for all domains and industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your research capabilities and achieve breakthrough results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Autonomous Research Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI-driven workflow from question to insight
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Question Analysis", description: "Understand research objectives and requirements" },
              { icon: Globe, title: "Source Discovery", description: "Automatically find relevant data sources" },
              { icon: Brain, title: "Intelligent Analysis", description: "AI-powered data processing and pattern recognition" },
              { icon: FileText, title: "Insight Generation", description: "Generate comprehensive research reports and findings" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <step.icon className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Seamlessly integrate with your existing research tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Workflow, title: "API Integration", description: "Connect with existing research databases and tools" },
              { icon: Users, title: "Collaboration Platforms", description: "Integrate with team collaboration and project management tools" },
              { icon: BarChart3, title: "Data Sources", description: "Connect to academic databases, journals, and research repositories" }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{integration.title}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading researchers using AI to accelerate discovery and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;