import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  Database,
  Cloud,
  Target,
  Award,
  Lightbulb,
  Crown,
  Sparkles,
  ChevronRight,
  Clock,
  Check,
  BarChart3,
  Lock,
  Eye,
  Heart
} from 'lucide-react';

const DigitalTransformation = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const transformationServices = [
    {
      title: "Strategy & Planning",
      description: "Comprehensive digital transformation roadmap aligned with business objectives and market opportunities.",
      icon: Rocket,
      features: ["Digital Maturity Assessment", "Technology Roadmap", "Change Management Strategy", "ROI Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and eliminate manual workflows.",
      icon: Zap,
      features: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Performance Monitoring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technology Modernization",
      description: "Legacy system modernization and cloud-native architecture implementation.",
      icon: Cpu,
      features: ["Legacy Migration", "Cloud Architecture", "API Development", "Microservices"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence solutions for informed decision-making.",
      icon: Database,
      features: ["Data Strategy", "Business Intelligence", "Predictive Analytics", "Data Governance"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Customer Experience",
      description: "Omnichannel customer experience optimization and digital touchpoint enhancement.",
      icon: Users,
      features: ["CX Strategy", "Digital Channels", "Personalization", "Customer Journey Mapping"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance for digital transformation initiatives.",
      icon: Shield,
      features: ["Security Architecture", "Compliance Frameworks", "Risk Management", "Security Audits"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const transformationPhases = [
    {
      phase: "01",
      title: "Discovery & Assessment",
      description: "Evaluate current state, identify opportunities, and assess digital maturity",
      duration: "2-4 weeks",
      activities: [
        "Current state analysis",
        "Digital maturity assessment",
        "Stakeholder interviews",
        "Technology audit",
        "Gap analysis"
      ]
    },
    {
      phase: "02",
      title: "Strategy Development",
      description: "Create comprehensive digital transformation roadmap and business case",
      duration: "4-6 weeks",
      activities: [
        "Digital strategy formulation",
        "Technology roadmap creation",
        "Change management planning",
        "ROI analysis and business case",
        "Risk assessment"
      ]
    },
    {
      phase: "03",
      title: "Pilot & Validation",
      description: "Implement proof-of-concept and validate approach with stakeholders",
      duration: "6-8 weeks",
      activities: [
        "Proof-of-concept development",
        "Pilot implementation",
        "Stakeholder validation",
        "Performance measurement",
        "Feedback collection"
      ]
    },
    {
      phase: "04",
      title: "Full Implementation",
      description: "Execute transformation plan with phased rollout and continuous optimization",
      duration: "6-18 months",
      activities: [
        "Phased rollout execution",
        "Change management implementation",
        "Performance monitoring",
        "Continuous optimization",
        "Training and support"
      ]
    }
  ];

  const testimonials = [
    {
      content: "Zion's digital transformation approach was game-changing. They didn't just implement technology - they transformed our entire business model.",
      name: "Carlos Rodriguez",
      role: "CEO, InnovateCorp",
      rating: 5
    },
    {
      content: "The process automation they implemented saved us 40 hours per week and improved our customer satisfaction scores significantly.",
      name: "Lisa Chang",
      role: "COO, TechFlow Solutions",
      rating: 5
    },
    {
      content: "Working with Zion transformed our company culture. We're now more agile, data-driven, and customer-focused than ever before.",
      name: "Marcus Johnson",
      role: "CTO, DigitalFirst Inc",
      rating: 5
    }
  ];

  const stats = [
    { number: "85%", label: "Average efficiency improvement" },
    { number: "3.2x", label: "Faster time to market" },
    { number: "40%", label: "Cost reduction achieved" },
    { number: "92%", label: "Customer satisfaction increase" }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Digital{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business for the digital age with our comprehensive digital transformation services.
            We help organizations modernize, automate, and innovate to stay ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Transformation
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your business operations,
              enhance customer experiences, and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation
              with measurable outcomes and sustainable change.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer ${
                    selectedPhase === index ? 'border-zion-cyan' : 'border-zion-cyan/20'
                  }`}
                  onClick={() => setSelectedPhase(index)}
                >
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <div className="text-sm font-medium text-zion-slate-light mb-2">Key Activities:</div>
                        {phase.activities.map((activity, activityIndex) => (
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>

                <p className="text-zion-slate-light mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how digital transformation can revolutionize your operations,
            enhance customer experiences, and drive sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;