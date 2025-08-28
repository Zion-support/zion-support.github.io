import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Target, 
  Brain, 
  Calendar, 
  Users, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  Clock,
  Globe,
  Shield,
  Cloud,
  Rocket,
  Workflow,
  GanttChart,
  Kanban,
  Milestone,
  Task,
  AlertTriangle,
  Lightbulb,
  Settings,
  Monitor
} from 'lucide-react';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Task Prioritization",
      description: "AI algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated project scheduling with resource optimization and conflict resolution."
    },
    {
      icon: Users,
      title: "Team Performance Analytics",
      description: "Real-time insights into team productivity, workload distribution, and performance metrics."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast project completion dates and identify potential risks before they occur."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "AI-powered risk assessment and mitigation strategies for complex projects."
    },
    {
      icon: Cloud,
      title: "Collaborative Platform",
      description: "Unified project management platform with real-time collaboration and communication tools."
    }
  ];

  const projectTypes = [
    {
      icon: GanttChart,
      title: "Agile Development",
      description: "Scrum and Kanban methodologies with AI-powered sprint planning and retrospectives."
    },
    {
      icon: Kanban,
      title: "Waterfall Projects",
      description: "Traditional project management with intelligent phase tracking and milestone management."
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and reduce errors."
    },
    {
      icon: Milestone,
      title: "Event Planning",
      description: "Complex event coordination with automated scheduling and resource allocation."
    },
    {
      icon: Task,
      title: "Research Projects",
      description: "Academic and research project management with progress tracking and collaboration tools."
    },
    {
      icon: Monitor,
      title: "IT Infrastructure",
      description: "Technology deployment and infrastructure projects with automated monitoring and alerts."
    }
  ];

  const benefits = [
    "Reduce project delivery time by 30%",
    "Improve team productivity by 40%",
    "Minimize project risks and delays",
    "Optimize resource allocation automatically",
    "Real-time project status updates",
    "Enhanced team collaboration",
    "Data-driven decision making",
    "Scalable project management"
  ];

  const integrations = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Integrate with Slack, Microsoft Teams, and other collaboration platforms."
    },
    {
      icon: Calendar,
      title: "Calendar Systems",
      description: "Sync with Google Calendar, Outlook, and other calendar applications."
    },
    {
      icon: BarChart3,
      title: "Analytics Tools",
      description: "Connect with Tableau, Power BI, and other business intelligence platforms."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Integrate with AWS, Azure, and other cloud infrastructure services."
    }
  ];

  return (
    <>
      <SEO 
        title="AI Project Management - Zion Tech Group"
        description="Transform your project management with AI-powered tools. Automate scheduling, optimize resources, and deliver projects faster with intelligent insights."
        keywords="AI project management, project automation, intelligent scheduling, team collaboration, project analytics, AI PM tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Project Management</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Project Management
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your project management with intelligent AI automation. 
                Optimize resources, automate scheduling, and deliver projects faster 
                with data-driven insights and predictive analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Intelligent Project Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI project management platform combines advanced automation with 
                intelligent insights to streamline your project workflows.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Manage Any Type of Project
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From agile development to complex infrastructure projects, our AI platform 
                adapts to your project management methodology.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Project Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and success in your project delivery.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows for a unified project management experience.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <integration.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{integration.title}</h3>
                  <p className="text-gray-300 text-sm">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of project managers already using AI to deliver projects faster and more efficiently. 
                Start your free trial today and experience the future of project management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}