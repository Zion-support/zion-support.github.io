import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  BarChart3,
  Rocket
} from 'lucide-react';
export default function ConsultingServices() {
  const consultingServices = [
    {
      title: "Technology Strategy",
      description: "Develop comprehensive technology roadmaps aligned with business objectives",
      features: [
        "Technology Assessment",
        "Strategic Planning",
        "Architecture Design",
        "Implementation Roadmap"
      ],
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Innovation",
      description: "Identify and implement cutting-edge technologies for competitive advantage",
      features: [
        "Innovation Workshops",
        "Technology Scouting",
        "Proof of Concepts",
        "Innovation Labs"
      ],
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Change Management",
      description: "Guide organizations through technology transformations and cultural shifts",
      features: [
        "Stakeholder Engagement",
        "Training Programs",
        "Communication Strategy",
        "Success Metrics"
      ],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Performance Optimization",
      description: "Analyze and optimize technology systems for maximum efficiency",
      features: [
        "Performance Audits",
        "Bottleneck Identification",
        "Optimization Strategies",
        "Monitoring Setup"
      ],
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];
  const consultingApproach = [
    {
      step: "Discovery",
      description: "Understand your business, challenges, and objectives",
      activities: ["Business Analysis", "Technology Review", "Stakeholder Interviews", "Gap Assessment"],
      icon: "🔍"
    },
    {
      step: "Strategy",
      description: "Develop comprehensive solutions and implementation plans",
      activities: ["Solution Design", "Technology Selection", "Timeline Planning", "Resource Allocation"],
      icon: "📋"
    },
    {
      step: "Implementation",
      description: "Execute solutions with expert guidance and support",
      activities: ["Project Management", "Technical Implementation", "Change Management", "Progress Tracking"],
      icon: "🚀"
    },
    {
      step: "Optimization",
      description: "Continuously improve and scale successful initiatives",
      activities: ["Performance Review", "Feedback Integration", "Process Refinement", "Knowledge Transfer"],
      icon: "⚡"
    }
  ];
  const benefits = [
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description: "Access to industry experts with deep technology knowledge"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Technology decisions aligned with business objectives"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce implementation risks with proven methodologies"
    },
    {
      icon: Rocket,
      title: "Accelerated Results",
      description: "Faster time-to-value with expert guidance and support"
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
              IT Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic technology consulting to drive business transformation and growth
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From technology strategy to digital innovation, change management to performance optimization, 
              we provide expert consulting services that align technology with business objectives.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Consulting Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed for business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
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
      {/* Consulting Approach Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for delivering successful consulting engagements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingApproach.map((step, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.activities.map((activity, idx) => (
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
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance backed by experience and proven methodologies
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
            Ready for Expert Technology Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our consulting services can drive your business success
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