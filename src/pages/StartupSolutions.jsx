import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Code, 
  Globe, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Building,
  Smartphone,
  Server,
  Palette,
  Cpu
} from 'lucide-react';

const startupSolutions = [
  {
    id: 1,
    title: "MVP Development",
    description: "Rapidly build and launch your minimum viable product to test market fit and gather user feedback.",
    icon: Rocket,
    features: [
      "Quick prototype development",
      "User experience optimization",
      "Market validation testing",
      "Iterative improvement cycles"
    ],
    price: "From $15,000",
    timeline: "4-8 weeks",
    category: "Development"
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description: "Leverage artificial intelligence to gain deep insights into your business performance and user behavior.",
    icon: Brain,
    features: [
      "Predictive analytics",
      "User behavior tracking",
      "Performance optimization",
      "Real-time insights"
    ],
    price: "From $8,000",
    timeline: "2-4 weeks",
    category: "AI & Analytics"
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that grow with your startup from day one to enterprise scale.",
    icon: Cloud,
    features: [
      "Auto-scaling infrastructure",
      "Cost optimization",
      "Security compliance",
      "24/7 monitoring"
    ],
    price: "From $5,000",
    timeline: "1-3 weeks",
    category: "Infrastructure"
  },
  {
    id: 4,
    title: "Cybersecurity Framework",
    description: "Protect your startup's data and systems with enterprise-grade security solutions.",
    icon: Shield,
    features: [
      "Threat detection",
      "Data encryption",
      "Compliance management",
      "Security audits"
    ],
    price: "From $12,000",
    timeline: "3-6 weeks",
    category: "Security"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive growth.",
    icon: Smartphone,
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Performance optimization",
      "App store optimization"
    ],
    price: "From $20,000",
    timeline: "6-12 weeks",
    category: "Development"
  },
  {
    id: 6,
    title: "Digital Marketing Platform",
    description: "Comprehensive marketing tools to acquire, engage, and retain customers effectively.",
    icon: Target,
    features: [
      "Multi-channel campaigns",
      "Automation workflows",
      "Analytics & reporting",
      "A/B testing tools"
    ],
    price: "From $10,000",
    timeline: "3-5 weeks",
    category: "Marketing"
  }
];

const successStories = [
  {
    id: 1,
    company: "TechFlow",
    industry: "SaaS",
    challenge: "Needed rapid MVP development to secure funding",
    solution: "Built MVP in 6 weeks with AI-powered analytics",
    results: "Secured $2M funding, 500+ beta users in first month",
    logo: "TF"
  },
  {
    id: 2,
    company: "GreenStart",
    industry: "CleanTech",
    challenge: "Required scalable cloud infrastructure for IoT platform",
    solution: "Implemented auto-scaling cloud solution with security",
    results: "Handled 10x traffic growth, 99.9% uptime",
    logo: "GS"
  },
  {
    id: 3,
    company: "HealthTech Pro",
    industry: "Healthcare",
    challenge: "Needed HIPAA-compliant mobile app development",
    solution: "Built secure mobile app with compliance framework",
    results: "Launched in 8 weeks, 10,000+ downloads first quarter",
    logo: "HP"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "Understand your vision, market, and technical requirements",
    icon: Lightbulb,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Create user experience designs and interactive prototypes",
    icon: Palette,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build your solution with continuous testing and feedback",
    icon: Code,
    duration: "4-12 weeks"
  },
  {
    step: 4,
    title: "Launch & Optimization",
    description: "Deploy your solution and optimize based on real user data",
    icon: Rocket,
    duration: "1-2 weeks"
  }
];

export default function StartupSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Development', 'AI & Analytics', 'Infrastructure', 'Security', 'Marketing'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? startupSolutions 
    : startupSolutions.filter(solution => solution.category === selectedCategory);

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
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Startup
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your startup vision into reality with our comprehensive technology solutions. 
              From MVP development to scalable infrastructure, we help startups launch faster and grow smarter.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Rocket className="w-4 h-4" />
                <span>Rapid Development</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Target className="w-4 h-4" />
                <span>Market Focused</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <TrendingUp className="w-4 h-4" />
                <span>Scalable Growth</span>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that transforms startup ideas into market-ready solutions
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
            <h2 className="text-4xl font-bold text-white mb-4">Startup Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for startup needs and budgets
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
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
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
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real startups that transformed their vision into successful businesses with our solutions
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss your startup vision and create a customized technology solution 
              that accelerates your path to success.
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