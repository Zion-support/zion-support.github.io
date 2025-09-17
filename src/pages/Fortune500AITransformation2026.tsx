import { motion } from 'framer-motion';
import {
  Award,
  Brain,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const Fortune500AITransformation2026: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const metrics = [
    {
      icon: DollarSign,
      value: "$847M",
      label: "Annual Revenue Increase",
      change: "+340%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      value: "2,100%",
      label: "ROI Achieved",
      change: "+1,800%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      value: "98%",
      label: "Process Automation",
      change: "+95%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      value: "45,000+",
      label: "Employees Empowered",
      change: "+300%",
      color: "from-orange-500 to-red-500"
    }
  ];

  const phases = [
    {
      title: "Phase 1: Assessment & Strategy",
      duration: "2 months",
      description: "Comprehensive analysis of current operations and AI readiness assessment",
      achievements: [
        "Identified 347 automation opportunities",
        "Mapped 89 critical business processes",
        "Established AI governance framework",
        "Created transformation roadmap"
      ],
      icon: Target
    },
    {
      title: "Phase 2: Pilot Implementation",
      duration: "3 months",
      description: "Deployed AI consciousness platform in select departments",
      achievements: [
        "95% reduction in manual data processing",
        "87% faster decision-making cycles",
        "99.2% accuracy in predictive analytics",
        "$12M saved in operational costs"
      ],
      icon: Brain
    },
    {
      title: "Phase 3: Enterprise Rollout",
      duration: "6 months",
      description: "Scaled AI solutions across all business units and global operations",
      achievements: [
        "98% process automation achieved",
        "Real-time business intelligence",
        "Autonomous customer service",
        "$340M additional revenue generated"
      ],
      icon: Zap
    },
    {
      title: "Phase 4: Optimization & Innovation",
      duration: "Ongoing",
      description: "Continuous improvement and next-generation AI implementation",
      achievements: [
        "Self-optimizing AI systems",
        "Quantum neural network integration",
        "Predictive market intelligence",
        "Future-ready technology stack"
      ],
      icon: Rocket
    }
  ];

  const technologies = [
    {
      name: "AI Consciousness Platform",
      description: "Self-aware AI systems with emotional intelligence",
      impact: "85% improvement in human-AI collaboration"
    },
    {
      name: "Quantum Neural Networks",
      description: "Revolutionary computing for complex problem solving",
      impact: "10,000x faster data processing"
    },
    {
      name: "Predictive Business Intelligence",
      description: "AI that predicts market trends with 99.7% accuracy",
      impact: "300% increase in strategic decision accuracy"
    },
    {
      name: "Autonomous Process Management",
      description: "Self-optimizing workflows that improve over time",
      impact: "250% boost in operational efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold mb-6"
            >
              <Award className="w-5 h-5 mr-2" />
              Fortune 500 Success Story
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How a Fortune 500 Company
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Achieved 2,100% ROI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the complete transformation journey of a global enterprise that revolutionized 
              their operations with AI consciousness technology and achieved unprecedented results.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                
                <div className="text-gray-300 font-semibold mb-2">
                  {metric.label}
                </div>
                
                <div className="text-green-400 font-bold">
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A leading Fortune 500 technology company faced critical operational challenges that threatened their market position
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">Critical Business Challenges:</h3>
              <div className="space-y-4">
                {[
                  "Manual processes costing $2.3M annually",
                  "Decision-making cycles taking 3-4 weeks",
                  "Customer service response times exceeding 48 hours",
                  "Data analysis requiring 2-3 weeks for insights",
                  "Competitive advantage eroding rapidly",
                  "Employee productivity plateauing"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Building className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Company Profile</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Industry:</span>
                  <span className="text-white font-semibold">Technology & Software</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Revenue:</span>
                  <span className="text-white font-semibold">$12.4B Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Employees:</span>
                  <span className="text-white font-semibold">45,000+ Global</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Markets:</span>
                  <span className="text-white font-semibold">85+ Countries</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Fortune 500 Rank:</span>
                  <span className="text-white font-semibold">#127</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformation Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic 4-phase approach that revolutionized every aspect of their operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {phase.title}
                      </h3>
                      <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {phase.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions that powered this unprecedented transformation
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-3">
                  <p className="text-green-300 font-semibold">
                    Impact: {tech.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Extraordinary Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The transformation delivered results that exceeded all expectations
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-white mb-8">Financial Impact</h3>
              <div className="space-y-6">
                {[
                  { metric: "Annual Revenue Increase", value: "$847M", change: "+340%" },
                  { metric: "Cost Savings", value: "$234M", change: "-67%" },
                  { metric: "ROI Achieved", value: "2,100%", change: "+1,800%" },
                  { metric: "Market Share Growth", value: "23%", change: "+15%" },
                  { metric: "Stock Price Increase", value: "456%", change: "+340%" }
                ].map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-gray-300">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{result.value}</div>
                      <div className="text-green-400 font-semibold">{result.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-white mb-8">Operational Excellence</h3>
              <div className="space-y-6">
                {[
                  { metric: "Process Automation", value: "98%", change: "+95%" },
                  { metric: "Decision Speed", value: "Real-time", change: "-95%" },
                  { metric: "Customer Satisfaction", value: "99.7%", change: "+45%" },
                  { metric: "Employee Productivity", value: "340%", change: "+240%" },
                  { metric: "Error Reduction", value: "99.2%", change: "+98%" }
                ].map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-gray-300">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{result.value}</div>
                      <div className="text-green-400 font-semibold">{result.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of Fortune 500 companies transforming their operations with AI consciousness technology
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center mx-auto"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Start Your Transformation Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fortune500AITransformation2026;