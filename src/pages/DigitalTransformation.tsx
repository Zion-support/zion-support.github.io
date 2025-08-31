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
<<<<<<< HEAD
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
  const phases = [
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
=======
  Heart
 } from 'lucide-react';
    };
=======;
      description: "Enterprise-grade security and regulatory compliance for digital transformation initiatives.",;
      icon: Shield,;
      features: ["Security Architecture", "Compliance Frameworks", "Risk Management", "Security Audits"],;
      color: "from-yellow-500 to-orange-500";
    };
  ];
  const transformationPhases = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
      icon: <Activity className="w-8 h-8" />,
      title: "Innovation Index",
      description: "Measure the organization's ability to innovate and adapt"
    }
=======
      phase: "04",
      title: "Full Implementation",
      description: "Execute transformation plan with phased rollout and continuous optimization",
      duration: "6-18 months",
      activities[
        "Phased rollout execution",;
        "Change management implementation",;
        "Performance monitoring",;
        "Continuous optimization",;
        "Training and support";
      ];
    };
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
    };
=======;
      content: "Working with Zion transformed our company culture. We're now more agile, data-driven, and customer-focused than ever before.",;
      name: "Marcus Johnson",;
      role: "CTO, DigitalFirst Inc",;
      rating: 5;
    };
  ];
  const stats = [;
    { number: "85%", label: "Average efficiency improvement" },;
    { number: "3.2x", label: "Faster time to market" },;
    { number: "40%", label: "Cost reduction achieved" },;
    { number: "92%", label: "Customer satisfaction increase" };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
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
=======
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
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index)  => (
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
                className="text-center"
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
=======
      {/* Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions that drive digital transformation success
            </p>
<<<<<<< HEAD
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
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
=======
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index)  => (
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
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
=======
      {/* Transformation Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Process
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key metrics to track the success of your digital transformation journey
            </p>
<<<<<<< HEAD
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
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
=======
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {transformationPhases.map((phase, index)  => (
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
                      >
                        <div className="text-sm font-medium text-zion-slate-light mb-2">Key Activities: any</div>
                        {phase.activities.map((activity, activityIndex)  => (
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
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index)  => (
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
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD
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
=======
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
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export default DigitalTransformation;}}}}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
