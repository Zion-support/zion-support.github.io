<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  BarChart3, 
  Zap, 
  Globe, 
  Lock,
  ArrowRight,
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Rocket,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Globe,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Server,
  Smartphone,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  RefreshCw,
  Target,
  Lightbulb,
  Rocket,
  BarChart,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

const DigitalTransformation = () => {
<<<<<<< HEAD
  const phases = [
=======
=======
              } from 'lucide-react.ts';

<<<<<<< HEAD
const DigitalTransformation = () => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [selectedPhase, setSelectedPhase] = useState(0);

  const transformationServices = [
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Assessment & Strategy",
      description: "Comprehensive analysis of current state and strategic planning for digital transformation.",
      activities: ["Technology Audit", "Process Analysis", "Gap Assessment", "ROI Analysis"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Design & Planning",
      description: "Detailed design of digital solutions and implementation roadmap.",
      activities: ["Solution Architecture", "Technology Selection", "Implementation Plan", "Change Management"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation",
      description: "Agile implementation of digital solutions with continuous improvement.",
      activities: ["Agile Development", "System Integration", "Testing & QA", "User Training"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimization",
      description: "Continuous monitoring, optimization, and scaling of digital solutions.",
      activities: ["Performance Monitoring", "User Feedback", "Continuous Improvement", "Scaling"]
    }
  ];

  const solutions = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with minimal disruption.",
      benefits: ["Cost Reduction", "Scalability", "Security", "Flexibility"]
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Process Automation",
      description: "AI-powered automation of repetitive tasks and workflows.",
      benefits: ["Efficiency", "Accuracy", "Cost Savings", "Employee Satisfaction"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Modernization",
      description: "Modern data architecture and analytics capabilities.",
      benefits: ["Insights", "Decision Making", "Compliance", "Performance"]
    },
    {
      icon: <Smartphone className="w-12 h-8" />,
      title: "Digital Experience",
      description: "Omnichannel digital experiences for customers and employees.",
      benefits: ["Customer Satisfaction", "Employee Productivity", "Brand Loyalty", "Market Share"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Advanced security measures for digital transformation initiatives.",
      benefits: ["Risk Mitigation", "Compliance", "Trust", "Business Continuity"]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Integration",
      description: "Seamless integration of legacy and modern systems.",
      benefits: ["Efficiency", "Data Consistency", "Reduced Complexity", "Cost Savings"]
    }
  ];

  const metrics = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Operational Efficiency",
      description: "Measure improvements in process efficiency and productivity"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Track cost savings from digital transformation initiatives"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Monitor improvements in customer experience and satisfaction"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Innovation Index",
      description: "Measure the organization's ability to innovate and adapt"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive digital transformation 
              solutions that drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Start Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Transformation Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformation Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach to digital transformation with clear phases and measurable outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
=======
      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <ul className="space-y-2 text-sm">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions that drive digital transformation success
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measuring Success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key metrics to track the success of your digital transformation journey
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
=======
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
              {transformationPhases.map((phase, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  animate = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                  className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer ${
                    selectedPhase === index ? 'border-zion-cyan' : 'border-zion-cyan/20'
                  }`}
                  onClick={() => setSelectedPhase(index)}

                  {/* Phase Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {phase.phase}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{phase.description}</p>

                    <div className="flex items-center gap-2 text-zion-cyan text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </div>

                    {/* Activities */}
                    {selectedPhase === index && (
                      <motion.div
                        initial = {
  { opacity: 0,
  height: 0 






}}
                        animate = {
  { opacity: 1,
  height: 'auto' 






}}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
<<<<<<< HEAD

                        <div className="text-sm font-medium text-zion-slate-light mb-2">Key Activities: anyanyanyanyanyanyanyanyanyanyanyanyany</div>
                        {phase.activities.map((activity, activityIndex)              => (
=======
                      >
                        <div className="text-sm font-medium text-zion-slate-light mb-2">Key Activities: anyanyanyanyanyanyanyanyanyanyanyanyanyany</div>
                        {phase.activities.map((activity, activityIndex)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                          <div key={activityIndex} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <Check className="w-3 h-3 text-zion-cyan" />
                            {activity}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Hear from organizations that have transformed their business with our digital transformation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{metric.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how digital transformation can drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/enterprise"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Enterprise Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;