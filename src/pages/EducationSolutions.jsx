import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Smartphone, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Activity,
  FileText,
  Clock,
  Eye,
  Video,
  Headphones,
  Monitor,
  Brain,
  Code
} from 'lucide-react';

const educationSolutions = [
  {
    id: 1,
    title: "Learning Management System (LMS)",
    description: "Comprehensive platform for managing courses, content, and student progress tracking.",
    icon: BookOpen,
    features: [
      "Course management",
      "Content delivery",
      "Student tracking",
      "Assessment tools"
    ],
    price: "From $40,000",
    timeline: "16-24 weeks",
    category: "LMS Platforms",
    integrations: ["Canvas", "Blackboard", "Moodle", "Google Classroom"]
  },
  {
    id: 2,
    title: "Mobile Learning Apps",
    description: "Native mobile applications that enable learning on-the-go across all devices.",
    icon: Smartphone,
    features: [
      "Cross-platform development",
      "Offline content access",
      "Push notifications",
      "Progress synchronization"
    ],
    price: "From $30,000",
    timeline: "12-20 weeks",
    category: "Mobile Development",
    integrations: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    id: 3,
    title: "Virtual Reality (VR) Learning",
    description: "Immersive educational experiences using virtual reality technology.",
    icon: Monitor,
    features: [
      "3D learning environments",
      "Interactive simulations",
      "Multi-user collaboration",
      "Progress tracking"
    ],
    price: "From $60,000",
    timeline: "20-32 weeks",
    category: "VR/AR",
    integrations: ["Oculus", "HTC Vive", "WebXR", "Unity"]
  },
  {
    id: 4,
    title: "AI-Powered Tutoring",
    description: "Intelligent tutoring systems that adapt to individual learning styles and needs.",
    icon: Brain,
    features: [
      "Personalized learning paths",
      "Adaptive assessments",
      "Natural language processing",
      "Learning analytics"
    ],
    price: "From $50,000",
    timeline: "16-24 weeks",
    category: "AI & Analytics",
    integrations: ["Machine Learning", "NLP", "Data Analytics", "Cloud AI"]
  },
  {
    id: 5,
    title: "Video Conferencing Platform",
    description: "Secure and scalable video conferencing solution for remote learning and collaboration.",
    icon: Video,
    features: [
      "HD video streaming",
      "Screen sharing",
      "Recording capabilities",
      "Breakout rooms"
    ],
    price: "From $35,000",
    timeline: "12-18 weeks",
    category: "Communication",
    integrations: ["Zoom API", "Microsoft Teams", "Google Meet", "WebRTC"]
  },
  {
    id: 6,
    title: "Student Analytics Dashboard",
    description: "Comprehensive analytics platform for tracking student performance and engagement.",
    icon: BarChart3,
    features: [
      "Performance metrics",
      "Engagement tracking",
      "Predictive analytics",
      "Custom reporting"
    ],
    price: "From $25,000",
    timeline: "10-16 weeks",
    category: "Analytics",
    integrations: ["Google Analytics", "Tableau", "Power BI", "Custom APIs"]
  }
];

const edTechTrends = [
  {
    title: "Personalized Learning",
    description: "AI-driven adaptive learning that customizes content for each student",
    icon: Brain,
    impact: "High"
  },
  {
    title: "Hybrid Learning Models",
    description: "Combination of in-person and online learning experiences",
    icon: Globe,
    impact: "Critical"
  },
  {
    title: "Immersive Technologies",
    description: "VR/AR for enhanced learning experiences and engagement",
    icon: Monitor,
    impact: "High"
  },
  {
    title: "Data-Driven Insights",
    description: "Analytics to improve learning outcomes and institutional performance",
    icon: BarChart3,
    impact: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Tech University",
    industry: "Higher Education",
    challenge: "Needed comprehensive LMS for 50,000+ students",
    solution: "Built custom LMS with AI-powered personalization",
    results: "30% improvement in student engagement, 25% higher completion rates",
    logo: "TU"
  },
  {
    id: 2,
    company: "Global Learning Network",
    industry: "K-12 Education",
    challenge: "Required mobile learning platform for remote students",
    solution: "Developed cross-platform mobile app with offline capabilities",
    results: "40% increase in mobile learning, 90% student satisfaction",
    logo: "GL"
  },
  {
    id: 3,
    company: "Corporate Training Plus",
    industry: "Corporate Training",
    challenge: "Needed VR training simulations for safety training",
    solution: "Created immersive VR training modules with progress tracking",
    results: "60% faster skill acquisition, 80% reduction in training costs",
    logo: "CT"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Educational Assessment",
    description: "Analyze learning objectives and technology requirements",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Design customized educational technology solution",
    icon: FileText,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build and thoroughly test the educational solution",
    icon: Code,
    duration: "12-32 weeks"
  },
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy solution and provide comprehensive training",
    icon: Users,
    duration: "1-2 weeks"
  }
];

export default function EducationSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'LMS Platforms', 'Mobile Development', 'VR/AR', 'AI & Analytics', 'Communication', 'Analytics'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? educationSolutions 
    : educationSolutions.filter(solution => solution.category === selectedCategory);

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
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Education
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform education with cutting-edge technology solutions. 
              From learning management systems to immersive VR experiences, 
              we help educational institutions deliver better learning outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <BookOpen className="w-4 h-4" />
                <span>Digital Learning</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Brain className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Globe className="w-4 h-4" />
                <span>Global Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EdTech Trends */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Educational Technology Trends</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead with the latest innovations in educational technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edTechTrends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{trend.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{trend.description}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  trend.impact === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : trend.impact === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {trend.impact} Impact
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful educational technology implementation
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
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Educational Technology Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize and enhance educational experiences
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
                  {solution.integrations.slice(0, 2).map((integration, intIndex) => (
                    <span
                      key={intIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {integration}
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
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Educational institutions that have transformed learning with our technology solutions
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Education?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our educational technology solutions can enhance learning outcomes, 
              improve student engagement, and modernize your educational institution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}