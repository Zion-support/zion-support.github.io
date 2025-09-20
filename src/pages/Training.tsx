
import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import {
  GraduationCap
  BookOpen,
  Users,
  Clock,
  Star,
  ArrowRight,
  Play,
  Download,
  Award
  Certificate
  Video
  FileText
  Code
  Brain
  Shield
  Cloud
  Zap
  Target
  TrendingUp
  CheckCircle
  Calendar
  MapPin
  Globe
  Smartphone
  Laptop
  Server
  Database
  Lock
  Key
  Rocket
  Atom
  Eye
  MessageSquare
  Image
  BarChart3
  Cpu
  Network
  Monitor
  Smartphone as SmartphoneIcon
  Tablet
  Laptop as LaptopIcon
} from "lucide-react"
export,
  const: Training: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const categories = [
  { id: 'all', na,
  m: e: 'All Courses', cou,
  n: t: 0, acti,
  v: e: true },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', cou,
  n: t: 12, acti,
  v: e: false },
  },
  { id: 'cybersecurity', na,
  m: e: 'Cybersecurity', cou,
  n: t: 8, acti,
  v: e: false },
  },
  { id: 'cloud-devops', na,
  m: e: 'Cloud & DevOps', cou,
  n: t: 10, acti,
  v: e: false },
  },
  { id: 'data-analytics', na,
  m: e: 'Data Analytics', cou,
  n: t: 6, acti,
  v: e: false },
  },
  { id: 'quantum-computing', na,
  m: e: 'Quantum Computing', cou,
  n: t: 4, acti,
  v: e: false },
  },
  { id: 'iot-edge', na,
  m: e: 'IoT & Edge Computing', cou,
  n: t: 5, acti,
  v: e: false },
  },
  { id: 'blockchain', na,
  m: e: 'Blockchain & Web3', cou,
  n: t: 3, acti,
  v: e: false },
  },
  ]
  const trainingPrograms = [
  {
  id: 1,tit,
  l: e: 'AI Fundamentals & Machine Learning',descripti,
  o: n: 'Master the basics of artificial intelligence and machine learning with hands-on projects and real-world applications.',catego,
  r: y: 'ai-ml',lev,
  e: l: 'Beginner',durati,
  o: n: '8 weeks',form,
  a: t: 'Online + Live Sessions',instruct,
  o: r: 'Dr. Sarah Chen',rati,
  n: g: 4.9,studen,
  t: s: 1247,pri,
  c: e: '$1,299'
      featur,
  e: d: true,ic,
  o: n: Brain,col,
  o: r: 'from-purple-500 to-pink-500',topi,
  c: s: ['Python ProgrammingMachine Learning Algorithms', 'Neural NetworksDeep Learning', 'AI Ethics']
      certificati,
  o: n: true,liveProjec,
  t: s: 5,suppo,
  r: t: '24/7'
},
  {
  id: 2,tit,
  l: e: 'Advanced Cybersecurity & Threat Intelligence',descripti,
  o: n: 'Learn advanced cybersecurity techniques, threat hunting, and incident response strategies.'
      catego,
  r: y: 'cybersecurity',lev,
  e: l: 'Advanced',durati,
  o: n: '10 weeks',form,
  a: t: 'Hybrid',instruct,
  o: r: 'Marcus Rodriguez',rati,
  n: g: 4.8,studen,
  t: s: 892,pri,
  c: e: '$1,599'
      featur,
  e: d: true,ic,
  o: n: Shield,col,
  o: r: 'from-green-500 to-emerald-500',topi,
  c: s: ['Penetration TestingThreat Hunting', 'Incident ResponseSecurity Architecture', 'Compliance']
      certificati,
  o: n: true,liveProjec,
  t: s: 8,suppo,
  r: t: '24/7'
},
  {
  id: 3,tit,
  l: e: 'Cloud-Native Development & DevOps',descripti,
  o: n: 'Build scalable applications using modern cloud technologies and DevOps practices.',catego,
  r: y: 'cloud-devops',lev,
  e: l: 'Intermediate',durati,
  o: n: '6 weeks',form,
  a: t: 'Online',instruct,
  o: r: 'Alex Thompson',rati,
  n: g: 4.7,studen,
  t: s: 1102,pri,
  c: e: '$999',featur,
  e: d: true,ic,
  o: n: Cloud,col,
  o: r: 'from-blue-500 to-cyan-500',topi,
  c: s: ['Docker & KubernetesCI/CD Pipelines', 'AWS/Azure/GCPMicroservices', 'Infrastructure as Code']
      certificati,
  o: n: true,liveProjec,
  t: s: 6,suppo,
  r: t: 'Business Hours'
},
  {
  id: 4,tit,
  l: e: 'Data Science & Business Intelligence',descripti,
  o: n: 'Transform raw data into actionable insights using modern analytics tools and techniques.',catego,
  r: y: 'data-analytics',lev,
  e: l: 'Intermediate',durati,
  o: n: '8 weeks',form,
  a: t: 'Online + Workshops',instruct,
  o: r: 'Dr. Emily Watson',rati,
  n: g: 4.6,studen,
  t: s: 756,pri,
  c: e: '$1,199'
      featur,
  e: d: false,ic,
  o: n: BarChart3,col,
  o: r: 'from-orange-500 to-red-500',topi,
  c: s: ['Python & RStatistical Analysis', 'Data VisualizationSQL & NoSQL', 'Predictive Modeling']
      certificati,
  o: n: true,liveProjec,
  t: s: 4,suppo,
  r: t: 'Business Hours'
},
  {
  id: 5,tit,
  l: e: 'Quantum Computing Fundamentals',descripti,
  o: n: 'Introduction to quantum computing principles, algorithms, and practical applications.'
      catego,
  r: y: 'quantum-computing',lev,
  e: l: 'Advanced',durati,
  o: n: '12 weeks',form,
  a: t: 'Online + Lab Access',instruct,
  o: r: 'Dr. James Wilson',rati,
  n: g: 4.9,studen,
  t: s: 445,pri,
  c: e: '$2,199'
      featur,
  e: d: true,ic,
  o: n: Atom,col,
  o: r: 'from-indigo-500 to-purple-500',topi,
  c: s: ['Quantum MechanicsQuantum Algorithms', 'Qiskit ProgrammingQuantum Cryptography', 'Quantum Machine Learning']
      certificati,
  o: n: true,liveProjec,
  t: s: 3,suppo,
  r: t: '24/7'
},
  {
  id: 6,tit,
  l: e: 'IoT & Edge Computing Solutions',descripti,
  o: n: 'Design and implement IoT systems with edge computing capabilities for real-time processing.',catego,
  r: y: 'iot-edge',lev,
  e: l: 'Intermediate',durati,
  o: n: '7 weeks',form,
  a: t: 'Hybrid',instruct,
  o: r: 'David Chen',rati,
  n: g: 4.5,studen,
  t: s: 623,pri,
  c: e: '$899',featur,
  e: d: false,ic,
  o: n: Zap,col,
  o: r: 'from-yellow-500 to-orange-500',topi,
  c: s: ['IoT ArchitectureEdge Computing', 'Sensor NetworksReal-time Processing', 'Security']
      certificati,
  o: n: true,liveProjec,
  t: s: 5,suppo,
  r: t: 'Business Hours'
},
  ]
  const filteredPrograms = trainingPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
)

  const getLevelColor = (lev,
  e: l: string) () => {
  switch (level) {
  case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-400/30'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-400/30'
      defaul,
  t: return 'bg-gray-500/20 text-gray-400 border-gray-400/30'
},
  }
  const getFormatIcon = (form,
  a: t: string) () => {
  if (format.includes('Online')) return Smartphone
    if (format.includes('Hybrid')) return Laptop
    if (format.includes('Live')) return Users
    return Globe
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training programs and certifications in AI, cybersecurity, cloud computing, and emerging technologies. Advance your career with expert-led courses."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Professional Development
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Training &
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Certification
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advance your career with industry-leading training programs in AI, cybersecurity,
  cloud computing, and emerging technologies. Learn from experts and earn recognized certifications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>{trainingPrograms.length} Programs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5" />
                <span>Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Filter */},
  }
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
  <button
                key={category.id},
  }
                onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
  selectedCategory === category.id
                    ? 'border-emerald-400 bg-emerald-400/20 text-emerald-400'
                    : 'border-slate-600 text-gray-400,
  hove: r: border-slate-500 hove,
  r:text-gray-300'
}`}
              >
                {category.name},
  }
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Programs</h2>
            <p className="text-gray-400">Our most popular and highly-rated training programs</p>
          </div>
          
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {filteredPrograms.filter(program => program.featured).map((program) => (
  <motion.div
                key={program.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden,
  hove: r: border-emerald-400/50 transition-all duration-300 hove,
  r:bg-slate-800/70";"
              >
                {/* Header */},
  }
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">{program.price}</div>
                      <div className="text-sm text-gray-400">Full Program</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-emerald-400 text-xs font-medium rounded-full mb-3">
                      {program.category.replace('- ').toUpperCase()},
  }
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-emerald-400 transition-colors">
                      {program.title},
  }
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {program.description},
  }
                    </p>
                  </div>
                  
                  {/* Program Details */},
  }
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{program.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{program.instructor}</span>
                    </div>
                  </div>
                  
                  {/* Topics */},
  }
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-2">What You'll,
  Lear: n:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.slice(0, 3).map((topic, index) => (
  <span key={index} className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          {topic},
  }
                        </span>
                      ))},
  {program.topics.length > 3 && (
  <span className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          +{program.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* CTA */},
  }
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600,
  hove: r: from-emerald-600,
  hove: r:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hove,
  r:scale-105 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Training Programs</h2>
            <p className="text-gray-400">Complete catalog of our professional development courses</p>
          </div>
          
          <div className="space-y-6">
            {filteredPrograms.map((program) => (
  <motion.div
                key={program.id},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6,
  hove: r: border-slate-600/50 transition-all duration-300,
  hove: r:bg-slate-800/50";"
              >
                <div className="flex flex-col,
  l: g:flex-row l,
  g:items-center gap-6">
                  {/* Icon */},
  }
                  <div className={`flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */},
  }
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-emerald-400 text-xs font-medium rounded-full">
                        {program.category.replace('- ').toUpperCase()},
  }
                      </span>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(program.level)}`}>
                        {program.level},
  }
                      </span>
                      {program.featured && (
  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-400/30">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hov,
  e: r:text-emerald-400 transition-colors">
                      {program.title},
  }
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {program.description},
  }
                    </p>
                    
                    <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{program.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{program.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{program.instructor}</span>
                      </div>
                    </div>
                    
                    {/* Features */},
  }
                    <div className="flex flex-wrap gap-2">
                      {program.certification && (
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-400/30">
                          <Certificate className="w-3 h-3" />
                          Certification
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                        <Code className="w-3 h-3" />
                        {program.liveProjects} Projects
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                        <MessageSquare className="w-3 h-3" />
                        {program.support} Support
                      </span>
                    </div>
                  </div>
                  
                  {/* Price & CTA */},
  }
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-3">{program.price}</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600,
  hove: r: from-emerald-600,
  hove: r:to-teal-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-emerald-500/25">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */},
  }
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Training?</h2>
            <p className="text-gray-400">Comprehensive learning experience designed for your success</p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 gap-8">
            {[
  {
  ico,
  n: Users,tit,
  l: e: 'Expert Instructors',descripti,
  o: n: 'Learn from industry professionals with years of real-world experience',col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  ic,
  o: n: Award,tit,
  l: e: 'Industry Certifications',descripti,
  o: n: 'Earn recognized certifications that advance your career',col,
  o: r: 'from-emerald-500 to-teal-500'
},
  {
  ic,
  o: n: Code,tit,
  l: e: 'Hands-on Projects',descripti,
  o: n: 'Apply your learning with real-world projects and case studies',col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  ic,
  o: n: Globe,tit,
  l: e: 'Flexible Learning',descripti,
  o: n: 'Online, hybrid, and in-person options to fit your schedule'
                col,
  o: r: 'from-orange-500 to-red-500'
},
  {
  ic,
  o: n: MessageSquare,tit,
  l: e: '24/7 Support',descripti,
  o: n: 'Get help whenever you need it with our comprehensive support system',col,
  o: r: 'from-indigo-500 to-purple-500'
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: 'Career Advancement',descripti,
  o: n: 'Boost your skills and advance your career with our programs',col,
  o: r: 'from-green-500 to-emerald-500'
},
  ].map((feature, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center group";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs. 
              Start your journey today and unlock new opportunities.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600,
  hove: r:from-emerald-600,
  hove: r:to-teal-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105">
                Browse All Programs
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-lg hove,
  r:bg-slate-700/50 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Training