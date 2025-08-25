import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Search, 
  Target, 
  Zap, 
  BarChart3, 
  FileText, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Briefcase,
  Filter,
  Clock,
  Award
} from 'lucide-react';

export default function AIHRRecruitment() {
  const features = [
    {
      icon: Search,
      title: "Intelligent Candidate Sourcing",
      description: "AI-powered talent discovery that finds the best candidates from multiple sources and platforms."
    },
    {
      icon: Brain,
      title: "Smart Resume Screening",
      description: "Automated resume analysis that identifies the most qualified candidates based on job requirements."
    },
    {
      icon: Target,
      title: "Predictive Hiring Analytics",
      description: "Machine learning algorithms that predict candidate success and cultural fit."
    },
    {
      icon: Zap,
      title: "Automated Interview Scheduling",
      description: "Intelligent scheduling that coordinates interviews across multiple stakeholders and time zones."
    },
    {
      icon: Users,
      title: "Candidate Experience Management",
      description: "Personalized communication and engagement throughout the entire recruitment process."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into hiring metrics, time-to-fill, and recruitment ROI."
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 40-60% with automated processes",
    "Improve candidate quality by 30-50% through AI screening",
    "Cut recruitment costs by 25-40% with streamlined workflows",
    "Enhance candidate experience and employer brand",
    "Increase diversity and inclusion in hiring",
    "Provide data-driven insights for better hiring decisions"
  ];

  const useCases = [
    {
      industry: "Technology",
      applications: ["Software engineering", "Data science", "Product management", "DevOps engineering"]
    },
    {
      industry: "Healthcare",
      applications: ["Clinical staff", "Administrative roles", "Specialists", "Support staff"]
    },
    {
      industry: "Financial Services",
      applications: ["Analysts", "Risk managers", "Compliance officers", "Customer service"]
    },
    {
      industry: "Manufacturing",
      applications: ["Production staff", "Quality control", "Maintenance", "Engineering"]
    }
  ];

  const recruitmentStages = [
    {
      name: "Sourcing & Outreach",
      icon: Search,
      description: "AI-powered candidate discovery and automated outreach campaigns"
    },
    {
      name: "Screening & Assessment",
      icon: FileText,
      description: "Intelligent resume parsing and skills assessment"
    },
    {
      name: "Interview Management",
      icon: MessageSquare,
      description: "Automated scheduling and structured interview processes"
    },
    {
      name: "Decision Support",
      icon: Brain,
      description: "Data-driven insights and candidate comparison tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">AI HR & Recruitment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Hiring with
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI-Powered Recruitment
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your talent acquisition with intelligent automation that finds the best candidates, 
              streamlines processes, and delivers measurable hiring success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Recruitment Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with human expertise 
              to deliver exceptional hiring outcomes and candidate experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              End-to-End Recruitment Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Streamline your entire hiring workflow with intelligent automation 
              that handles every stage of the recruitment process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{stage.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Recruitment Results
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real improvements in your hiring performance with AI-powered recruitment 
              that continuously optimizes and improves results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Industry Applications</h3>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">{useCase.industry}</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already using AI recruitment to find better talent, 
              faster, and at a lower cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}