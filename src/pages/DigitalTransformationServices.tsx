import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Users, 
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  BarChart3
} from 'lucide-react';

export default function DigitalTransformationServices() {
  const transformationServices = [
    {
      title: "Process Automation",
      description: "Streamline business processes with intelligent automation solutions",
      features: [
        "Workflow Automation",
        "RPA Implementation",
        "Business Process Mapping",
        "Performance Analytics"
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation roadmap and implementation",
      features: [
        "Digital Assessment",
        "Strategy Development",
        "Change Management",
        "Success Metrics"
      ],
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Customer Experience",
      description: "Transform customer interactions with digital-first solutions",
      features: [
        "Omnichannel Strategy",
        "Customer Journey Mapping",
        "Digital Touchpoints",
        "Feedback Systems"
      ],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data & Analytics",
      description: "Leverage data insights to drive business decisions and growth",
      features: [
        "Data Strategy",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Governance"
      ],
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    }
  ];

  const transformationPhases = [
    {
      phase: "Assessment",
      description: "Evaluate current state and identify transformation opportunities",
      activities: ["Digital Maturity Assessment", "Gap Analysis", "Stakeholder Interviews", "Technology Review"],
      icon: "🔍"
    },
    {
      phase: "Strategy",
      description: "Develop comprehensive digital transformation roadmap",
      activities: ["Vision Definition", "Goal Setting", "Technology Selection", "Timeline Planning"],
      icon: "📋"
    },
    {
      phase: "Implementation",
      description: "Execute transformation initiatives with agile methodology",
      activities: ["Pilot Programs", "Change Management", "Training Programs", "Progress Monitoring"],
      icon: "🚀"
    },
    {
      phase: "Optimization",
      description: "Continuously improve and scale successful initiatives",
      activities: ["Performance Analysis", "Feedback Integration", "Process Refinement", "Scaling Success"],
      icon: "⚡"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual processes"
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Deliver seamless digital experiences across all touchpoints"
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Foster a culture of continuous improvement and innovation"
    },
    {
      icon: Globe,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with digital-first solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Transformation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive transformation solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From process automation to digital strategy, customer experience to data analytics, 
              we help businesses navigate their digital transformation journey successfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed for business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Phases Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Transformation Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.phase}</h3>
                <p className="text-gray-400 mb-4 text-sm">{phase.description}</p>
                
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business and unlock new opportunities for growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how digital transformation can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}