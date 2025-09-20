import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Zap, GitFork, Brain, Clock, TrendingUp, Users, Database, Globe, Target, CheckCircle, BarChart3 } from "lucide-react"
const AIWorkflowAutomation = () () => {
    const features = [
        {
            ic,
  o: n: Brain,tit,
  l: e: "AI-Powered Process Analysis",descripti,
  o: n: "Intelligent analysis of existing workflows to identify optimization opportunities and automation potential",benefi,
  t: s: [["Process mapping", "Bottleneck identification", "Efficiency scoring", "Automation recommendations"];]
        }, {
            ic,
  o: n: GitFork,tit,
  l: e: "Intelligent Workflow Design",descripti,
  o: n: "AI-driven workflow design that adapts to business needs and automatically optimizes for performance",benefi,
  t: s: [["Dynamic workflows", "Conditional logic", "Exception handling", "Performance optimization"];]
        }, {
            ic,
  o: n: Zap,tit,
  l: e: "Automated Decision Making",descripti,
  o: n: "AI algorithms that make intelligent decisions based on data, rules, and historical patterns"
            benefi,
  t: s: [["Rule-based decisions", "Machine learning", "Risk assessment", "Compliance checking"];]
        }, {
            ic,
  o: n: Clock,tit,
  l: e: "Real-time Monitoring",descripti,
  o: n: "Continuous monitoring of workflow performance with instant alerts and proactive optimization",benefi,
  t: s: [["Performance tracking", "Real-time alerts", "Predictive maintenance", "KPI monitoring"];]
        }
    ]
    const solutions = [
        {
            catego,
  r: y: "Document Processing",ic,
  o: n: Database,solutio,
  n: s: [
                "Automated document classification"
                "Intelligent data extraction"
                "Form processing automation"
                "Document routing and approval"
                "Compliance checking"
            ]
        }, {
            catego,
  r: y: "Customer Service",ic,
  o: n: Users,solutio,
  n: s: [
                "Ticket routing and prioritization"
                "Automated responses"
                "Customer inquiry handling"
                "Service level monitoring"
                "Customer satisfaction tracking"
            ]
        }, {
            catego,
  r: y: "Financial Operations",ic,
  o: n: TrendingUp,solutio,
  n: s: [
                "Invoice processing automation"
                "Payment approval workflows"
                "Expense report processing"
                "Budget monitoring"
                "Financial reporting"
            ]
        }, {
            catego,
  r: y: "HR & Recruitment",ic,
  o: n: Users,solutio,
  n: s: [
                "Resume screening automation"
                "Interview scheduling"
                "Onboarding workflows"
                "Performance review automation"
                "Employee self-service"
            ]
        }
    ]
    const technologies = [
        {
            na,
  m: e: "Machine Learning",descripti,
  o: n: "Advanced ML algorithms for process optimization and decision making",ic,
  o: n: Brain
        }, {
            na,
  m: e: "Robotic Process Automation",descripti,
  o: n: "RPA tools for repetitive task automation",ic,
  o: n: GitFork
        }, {
            na,
  m: e: "Natural Language Processing",descripti,
  o: n: "AI-powered text analysis and document processing",ic,
  o: n: Database
        }, {
            na,
  m: e: "Workflow Engine",descripti,
  o: n: "Scalable workflow orchestration platform",ic,
  o: n: Zap
        }, {
            na,
  m: e: "Real-time Analytics",descripti,
  o: n: "Instant performance monitoring and optimization",ic,
  o: n: BarChart3
        }, {
            na,
  m: e: "API Integration",descripti,
  o: n: "Seamless integration with existing systems",ic,
  o: n: Globe
        }
    ]
    const benefits = [
        {
            tit,
  l: e: "Increased Efficiency",descripti,
  o: n: "Automate repetitive tasks and improve process efficiency by 40-60%",ic,
  o: n: TrendingUp
        }, {
            tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Reduce operational costs by 25-35% through automation",ic,
  o: n: Target
        }, {
            tit,
  l: e: "Error Reduction",descripti,
  o: n: "Minimize human errors and improve accuracy by 90%+",ic,
  o: n: CheckCircle
        }, {
            tit,
  l: e: "Scalability",descripti,
  o: n: "Scale operations without proportional increase in resources",ic,
  o: n: Users
        }
    ]
    const const containerVariants = { = {
        hidd,
  e: n: { opacit,
  y: 0 }
        visib,
  l: e: {
            opacit,
  y: 1,transiti,
  o: n: {
                staggerChildre,
  n: 0.1
            }
        }
    }
    const const itemVariants = { = {
        hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 }
        visib,
  l: e: {
            ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
                duratio,
  n: 0.5
            }
        }
    }
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[si,
  z: e: 50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4,
  s: m:px-6,
  l: g:px-8 pt-32 pb-20">
          <motion.div initial={ opacit,
  y: 0, y: 20 } animate={ opaci,
  t: y: 1, y: 0 } transition={ durati,
  o: n: 0.8 } className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-6">
              <Zap className="w-10 h-10 text-white"/>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes 
              workflows for maximum efficiency and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold,
  hove: r: from-orange-700,
  hove: r:to-red-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-orange-400 hove,
  r:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={ on,
  c: e: true } className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI Workflow Automation platform combines artificial intelligence with advanced workflow 
            management to create intelligent, adaptive business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
          {features.map((feature, index) => (<motion.div key={feature.title} variants={itemVariants} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6,
  hove: r:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key,
  Benefit: s:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>))}
                </ul>
              </div>
            </motion.div>))}
        </div>
      </div>

      {/* Solutions by Department */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-20">
          <motion.div initial={ opacit,
  y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.8 } className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Department</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored workflow automation solutions designed to address the unique challenges 
              and processes in different business departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {solutions.map((category, index) => (<motion.div key={category.category} initial={ opaci,
  t: y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 } className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {solution}
                    </li>))}
                </ul>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-20">
        <motion.div initial={ opacit,
  y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.8 } className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Business Benefits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Workflow Automation delivers measurable results that directly impact your operational 
            efficiency, cost structure, and competitive position.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (<motion.div key={benefit.title} initial={ opaci,
  t: y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 } className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center,
  hove: r:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-20">
          <motion.div initial={ opacit,
  y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.8 } className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and workflow technologies to ensure scalability
              performance, and reliability for enterprise automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (<motion.div key={tech.name} initial={ opaci,
  t: y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 } className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center,
  hove: r:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-20">
        <motion.div initial={ opacit,
  y: 0, y: 20 } whileInView={ opaci,
  t: y: 1, y: 0 } viewport={ on,
  c: e: true } transition={ durati,
  o: n: 0.8 } className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI workflow experts help you implement intelligent automation that will 
            transform your business processes and drive operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold,
  hove: r: from-orange-700,
  hove: r:to-red-700 transition-all duration-300">
              Schedule Consultation
            </Link>
            <Link to="/case-studies" className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-orange-400 hove,
  r:text-white transition-all duration-300">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>)
}
export default AIWorkflowAutomation