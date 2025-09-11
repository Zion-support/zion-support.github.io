import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserList,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserList,
  Calendar,
  Clock,
  Tag,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  PieChart,
  LineChart,
  BarChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Key,
  Fingerprint,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Server,
  Network,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal
} from 'lucide-react';

const hrPlatformSolutions = [
  {
    id: 1,
    title: "Employee Management System",
    description: "Comprehensive platform for managing employee information, performance, and development.",
    icon: Users,
    features: [
      "Employee profiles",
      "Performance tracking",
      "Goal setting",
      "Development plans"
    ],
    price: "From $60,000",
    timeline: "16-24 weeks",
    category: "Employee Management",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    title: "Recruitment & Onboarding",
    description: "Streamlined hiring process with automated onboarding workflows and candidate management.",
    icon: UserPlus,
    features: [
      "Job posting",
      "Candidate tracking",
      "Interview scheduling",
      "Onboarding automation"
    ],
    price: "From $80,000",
    timeline: "20-28 weeks",
    category: "Recruitment",
    technologies: ["AI/ML", "Workflow Automation", "Calendar Integration", "Email Systems"]
  },
  {
    id: 3,
    title: "Performance Management",
    description: "360-degree performance evaluation and feedback system with goal tracking.",
    icon: Target,
    features: [
      "Performance reviews",
      "Goal tracking",
      "Feedback systems",
      "Analytics dashboard"
    ],
    price: "From $70,000",
    timeline: "18-26 weeks",
    category: "Performance",
    technologies: ["Real-time Analytics", "Dashboard Tools", "Reporting Engine", "Data Visualization"]
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Corporate training and development platform with course management and progress tracking.",
    icon: GraduationCap,
    features: [
      "Course creation",
      "Progress tracking",
      "Certification",
      "Learning paths"
    ],
    price: "From $90,000",
    timeline: "24-32 weeks",
    category: "Learning",
    technologies: ["Video Streaming", "Interactive Content", "Progress Tracking", "Assessment Tools"]
  },
  {
    id: 5,
    title: "Payroll & Benefits",
    description: "Automated payroll processing and benefits management system with compliance features.",
    icon: Briefcase,
    features: [
      "Payroll processing",
      "Benefits administration",
      "Tax compliance",
      "Reporting tools"
    ],
    price: "From $100,000",
    timeline: "20-30 weeks",
    category: "Payroll",
    technologies: ["Financial APIs", "Tax Calculation", "Compliance Tools", "Reporting Systems"]
  },
  {
    id: 6,
    title: "HR Analytics Platform",
    description: "Data-driven insights for workforce planning and HR decision making.",
    icon: BarChart3,
    features: [
      "Workforce analytics",
      "Predictive insights",
      "Custom reports",
      "Data visualization"
    ],
    price: "From $50,000",
    timeline: "14-22 weeks",
    category: "Analytics",
    technologies: ["Business Intelligence", "Machine Learning", "Data Mining", "Visualization Tools"]
  }
];

const hrTechnologies = [
  {
    name: "Employee Management",
    description: "Comprehensive employee lifecycle management",
    icon: Users,
    useCase: "HR Operations",
    reliability: "Critical"
  },
  {
    name: "AI & Automation",
    description: "Intelligent automation for HR processes",
    icon: Brain,
    useCase: "Process Automation",
    reliability: "High"
  },
  {
    name: "Data Security",
    description: "Enterprise-grade security and compliance",
    icon: Shield,
    useCase: "Data Protection",
    reliability: "Critical"
  },
  {
    name: "Cloud Platform",
    description: "Scalable cloud infrastructure for HR applications",
    icon: Cloud,
    useCase: "Infrastructure",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Corporation",
    industry: "Technology",
    challenge: "Needed unified HR platform for 10,000+ employees across 20 countries",
    solution: "Built comprehensive HR platform with localization, compliance, and automation features",
    results: "40% reduction in HR processing time, 60% improvement in employee satisfaction, streamlined global operations",
    logo: "GC"
  },
  {
    id: 2,
    company: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Required automated recruitment and onboarding for 500+ annual hires",
    solution: "Implemented AI-powered recruitment system with automated workflows and compliance tracking",
    results: "70% faster hiring process, 50% reduction in administrative overhead, improved compliance",
    logo: "HN"
  },
  {
    id: 3,
    company: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Needed performance management system for 2000+ production workers",
    solution: "Built performance tracking platform with goal setting and development planning",
    results: "35% improvement in productivity, 45% increase in employee engagement, better retention",
    logo: "MC"
  }
];

const processSteps = [
  {
    step: 1,
    title: "HR Assessment",
    description: "Evaluate current HR processes and identify improvement opportunities",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Platform Design",
    description: "Design HR platform architecture and user experience",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Development",
    description: "Build and integrate HR platform components",
    icon: Wrench,
    duration: "16-32 weeks"
  },
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy platform and train HR teams and employees",
    icon: Users,
    duration: "2-6 weeks"
  }
];

const hrBenefits = [
  {
    title: "Operational Efficiency",
    description: "Streamlined HR processes reduce administrative overhead and improve productivity",
    icon: Zap,
    examples: ["Automated workflows", "Reduced paperwork", "Faster processing", "Better accuracy"]
  },
  {
    title: "Employee Experience",
    description: "Improved self-service capabilities and better communication enhance employee satisfaction",
    icon: Users,
    examples: ["Self-service portals", "Mobile access", "Real-time updates", "Better communication"]
  },
  {
    title: "Data-Driven Decisions",
    description: "Advanced analytics provide insights for better workforce planning and HR strategy",
    icon: BarChart3,
    examples: ["Workforce analytics", "Performance insights", "Trend analysis", "Predictive modeling"]
  },
  {
    title: "Compliance & Security",
    description: "Built-in compliance features and enterprise-grade security protect sensitive HR data",
    icon: Shield,
    examples: ["Regulatory compliance", "Data encryption", "Access controls", "Audit trails"]
  }
];

export default function HRPlatform() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Employee Management', 'Recruitment', 'Performance', 'Learning', 'Payroll', 'Analytics'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? hrPlatformSolutions 
    : hrPlatformSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              HR Technology &
              <span className="text-gradient block">People Platform</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your human resources operations with intelligent technology solutions. 
              From recruitment to performance management, we help you build a modern HR ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>Employee Management</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Brain className="w-4 h-4" />
                <span>AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Shield className="w-4 h-4" />
                <span>Compliance & Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HR Platform Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">HR Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make HR technology essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hrBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">HR Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading HR platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our HR Platform Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful HR technology implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">HR Platform Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for modern human resources management
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">HR Platform Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their HR operations with technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how HR technology can streamline your processes, 
              improve employee experience, and drive better business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start HR Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                HR Technology Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}