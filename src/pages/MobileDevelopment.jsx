import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Truck,
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
  AppWindow,
  Tablet,
  Monitor,
  Cloud,
  Settings,
  Palette
} from 'lucide-react';

const mobileDevelopmentSolutions = [
  {
    id: 1,
    title: "Native iOS Development",
    description: "Custom iOS applications built with Swift and SwiftUI for optimal performance and user experience.",
    icon: Smartphone,
    features: [
      "Swift/SwiftUI development",
      "iOS app store optimization",
      "Device-specific features",
      "Performance optimization"
    ],
    price: "From $25,000",
    timeline: "12-24 weeks",
    category: "iOS",
    technologies: ["Swift", "SwiftUI", "Core Data", "iOS SDK"]
  },
  {
    id: 2,
    title: "Native Android Development",
    description: "Custom Android applications built with Kotlin and Jetpack Compose for modern Android development.",
    icon: Smartphone,
    features: [
      "Kotlin/Jetpack Compose",
      "Material Design 3",
      "Android-specific features",
      "Performance optimization"
    ],
    price: "From $25,000",
    timeline: "12-24 weeks",
    category: "Android",
    technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Android SDK"]
  },
  {
    id: 3,
    title: "Cross-Platform Development",
    description: "Multi-platform applications using React Native, Flutter, or Xamarin for cost-effective development.",
    icon: AppWindow,
    features: [
      "Single codebase",
      "Multiple platforms",
      "Native performance",
      "Rapid development"
    ],
    price: "From $35,000",
    timeline: "16-28 weeks",
    category: "Cross-Platform",
    technologies: ["React Native", "Flutter", "Xamarin", "Native Modules"]
  },
  {
    id: 4,
    title: "Progressive Web Apps (PWA)",
    description: "Web applications that provide native app-like experience across all devices and platforms.",
    icon: Globe,
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like experience",
      "Cross-platform compatibility"
    ],
    price: "From $20,000",
    timeline: "10-18 weeks",
    category: "PWA",
    technologies: ["Service Workers", "Web App Manifest", "PWA APIs", "Responsive Design"]
  },
  {
    id: 5,
    title: "Enterprise Mobile Solutions",
    description: "Business-focused mobile applications with enterprise-grade security and integration capabilities.",
    icon: Building,
    features: [
      "Enterprise security",
      "Backend integration",
      "User management",
      "Analytics & reporting"
    ],
    price: "From $50,000",
    timeline: "20-36 weeks",
    category: "Enterprise",
    technologies: ["Enterprise Security", "API Integration", "User Management", "Analytics"]
  },
  {
    id: 6,
    title: "Mobile App Maintenance",
    description: "Ongoing support, updates, and maintenance services for existing mobile applications.",
    icon: Settings,
    features: [
      "Bug fixes & updates",
      "Performance optimization",
      "Feature enhancements",
      "Platform updates"
    ],
    price: "From $5,000/month",
    timeline: "Ongoing",
    category: "Maintenance",
    technologies: ["Bug Tracking", "Performance Monitoring", "CI/CD", "App Store Updates"]
  }
];

const mobileTechnologies = [
  {
    name: "iOS Development",
    description: "Native iOS development with Apple's latest technologies",
    icon: Smartphone,
    useCase: "iPhone & iPad Apps",
    reliability: "High"
  },
  {
    name: "Android Development",
    description: "Native Android development with Google's modern tools",
    icon: Smartphone,
    useCase: "Android Devices",
    reliability: "High"
  },
  {
    name: "React Native",
    description: "Cross-platform development with React and native performance",
    icon: AppWindow,
    useCase: "Multi-platform Apps",
    reliability: "High"
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit for cross-platform development",
    icon: Palette,
    useCase: "Beautiful UIs",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "E-commerce Startup",
    industry: "Retail",
    challenge: "Needed mobile app for iOS and Android to compete with larger retailers",
    solution: "Built cross-platform React Native app with modern UI/UX and e-commerce features",
    results: "50% increase in mobile sales, 40% improvement in user engagement, reduced development costs",
    logo: "ES"
  },
  {
    id: 2,
    company: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "Required secure mobile app for patient management and telemedicine",
    solution: "Developed native iOS and Android apps with HIPAA compliance and telemedicine features",
    results: "Improved patient engagement, 30% reduction in appointment no-shows, enhanced care delivery",
    logo: "HP"
  },
  {
    id: 3,
    company: "Logistics Company",
    industry: "Transportation",
    challenge: "Needed enterprise mobile solution for fleet management and driver tracking",
    solution: "Built enterprise mobile app with real-time tracking, route optimization, and driver management",
    results: "25% improvement in delivery efficiency, 40% reduction in fuel costs, enhanced fleet visibility",
    logo: "LC"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Requirements Analysis",
    description: "Gather and analyze mobile app requirements and user needs",
    icon: FileText,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Create UI/UX designs and interactive prototypes",
    icon: Palette,
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Development",
    description: "Build the mobile application with chosen technology stack",
    icon: Code,
    duration: "10-36 weeks"
  },
  {
    step: 4,
    title: "Testing & Deployment",
    description: "Test the app and deploy to app stores",
    icon: CheckCircle,
    duration: "2-4 weeks"
  }
];

const mobileBenefits = [
  {
    title: "Enhanced User Experience",
    description: "Native mobile apps provide superior user experience and performance",
    icon: Users,
    examples: ["Smooth animations", "Fast performance", "Native features", "Intuitive UI"]
  },
  {
    title: "Offline Functionality",
    description: "Mobile apps can work offline and sync when connectivity is restored",
    icon: Cloud,
    examples: ["Offline access", "Data synchronization", "Cached content", "Background sync"]
  },
  {
    title: "Device Integration",
    description: "Access to device features like camera, GPS, and sensors",
    icon: Smartphone,
    examples: ["Camera access", "GPS location", "Push notifications", "Biometric auth"]
  },
  {
    title: "App Store Presence",
    description: "Visibility in app stores and potential for monetization",
    icon: Award,
    examples: ["App store visibility", "In-app purchases", "Subscription models", "Premium features"]
  }
];

export default function MobileDevelopment() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'iOS', 'Android', 'Cross-Platform', 'PWA', 'Enterprise', 'Maintenance'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? mobileDevelopmentSolutions 
    : mobileDevelopmentSolutions.filter(solution => solution.category === selectedCategory);

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
              <Smartphone className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mobile App
              <span className="text-gradient block">Development</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your ideas into powerful mobile applications. From native iOS and Android to 
              cross-platform solutions, we build mobile apps that engage users and drive business growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Smartphone className="w-4 h-4" />
                <span>Native Apps</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <AppWindow className="w-4 h-4" />
                <span>Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Globe className="w-4 h-4" />
                <span>Progressive Web Apps</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Mobile App Development Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make mobile apps essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileBenefits.map((benefit, index) => (
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

      {/* Mobile Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Mobile Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading mobile development platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Mobile Development Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful mobile app development
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
            <h2 className="text-4xl font-bold text-white mb-4">Mobile Development Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the mobile-first era
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
            <h2 className="text-4xl font-bold text-white mb-4">Mobile Development Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their business with mobile applications
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Mobile Transformation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how mobile applications can transform your business, 
              engage your customers, and create new opportunities for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Mobile Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Mobile Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}