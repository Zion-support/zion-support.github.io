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
  Heart,
  MessageCircle,
  Smile,
  ThumbsUp,
  Headphones,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  User,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
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
  Palette
} from 'lucide-react';

const customerExperienceSolutions = [
  {
    id: 1,
    title: "User Experience Design",
    description: "Comprehensive UX design services for web, mobile, and desktop applications.",
    icon: Palette,
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Usability testing"
    ],
    price: "From $30,000",
    timeline: "8-16 weeks",
    category: "UX Design",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  {
    id: 2,
    title: "Customer Journey Mapping",
    description: "Visual representation of customer interactions and touchpoints across all channels.",
    icon: MapPin,
    features: [
      "Journey mapping",
      "Touchpoint analysis",
      "Pain point identification",
      "Optimization strategies"
    ],
    price: "From $25,000",
    timeline: "6-12 weeks",
    category: "Journey Mapping",
    technologies: ["Customer Journey Tools", "Analytics", "User Research", "Data Visualization"]
  },
  {
    id: 3,
    title: "Customer Feedback Systems",
    description: "Comprehensive feedback collection and analysis systems for continuous improvement.",
    icon: MessageCircle,
    features: [
      "Feedback collection",
      "Sentiment analysis",
      "Real-time monitoring",
      "Actionable insights"
    ],
    price: "From $20,000",
    timeline: "4-10 weeks",
    category: "Feedback Systems",
    technologies: ["Feedback Tools", "NLP", "Analytics", "Integration APIs"]
  },
  {
    id: 4,
    title: "Personalization Engines",
    description: "AI-powered personalization systems for tailored customer experiences.",
    icon: Brain,
    features: [
      "User behavior analysis",
      "Content personalization",
      "Recommendation engines",
      "A/B testing"
    ],
    price: "From $40,000",
    timeline: "12-20 weeks",
    category: "Personalization",
    technologies: ["Machine Learning", "AI Algorithms", "Data Analytics", "A/B Testing"]
  },
  {
    id: 5,
    title: "Customer Support Platforms",
    description: "Integrated customer support and helpdesk solutions for seamless service delivery.",
    icon: Headphones,
    features: [
      "Multi-channel support",
      "Ticket management",
      "Knowledge base",
      "Live chat integration"
    ],
    price: "From $35,000",
    timeline: "10-18 weeks",
    category: "Support Platforms",
    technologies: ["Helpdesk Software", "Chat Systems", "Knowledge Management", "CRM Integration"]
  },
  {
    id: 6,
    title: "Customer Analytics & Insights",
    description: "Advanced analytics and reporting systems for customer behavior and satisfaction metrics.",
    icon: BarChart3,
    features: [
      "Customer analytics",
      "Satisfaction metrics",
      "Behavior tracking",
      "Predictive insights"
    ],
    price: "From $30,000",
    timeline: "8-16 weeks",
    category: "Analytics",
    technologies: ["Analytics Platforms", "Data Visualization", "Machine Learning", "Reporting Tools"]
  }
];

const customerExperienceTechnologies = [
  {
    name: "User Research Tools",
    description: "Comprehensive tools for understanding user needs and behaviors",
    icon: Users,
    useCase: "User Insights",
    reliability: "High"
  },
  {
    name: "Design Systems",
    description: "Consistent design frameworks for cohesive user experiences",
    icon: Palette,
    useCase: "Design Consistency",
    reliability: "High"
  },
  {
    name: "Analytics Platforms",
    description: "Data-driven insights for customer behavior analysis",
    icon: BarChart3,
    useCase: "Customer Insights",
    reliability: "Critical"
  },
  {
    name: "Personalization AI",
    description: "AI-powered systems for tailored customer experiences",
    icon: Brain,
    useCase: "Custom Experiences",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "E-commerce Retailer",
    industry: "Retail",
    challenge: "Needed to improve customer satisfaction and reduce cart abandonment rates",
    solution: "Implemented comprehensive UX redesign with customer journey mapping and personalization",
    results: "35% increase in customer satisfaction, 25% reduction in cart abandonment, improved conversion rates",
    logo: "ER"
  },
  {
    id: 2,
    company: "Financial Services",
    industry: "Finance",
    challenge: "Required better customer experience for online banking and mobile apps",
    solution: "Built customer-centric design system with personalized experiences and improved usability",
    results: "40% improvement in user engagement, 30% reduction in support tickets, enhanced customer loyalty",
    logo: "FS"
  },
  {
    id: 3,
    company: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "Needed to improve patient portal experience and appointment booking",
    solution: "Redesigned patient portal with intuitive UX and streamlined appointment scheduling",
    results: "50% increase in portal usage, 45% reduction in appointment booking time, improved patient satisfaction",
    logo: "HP"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Customer Research",
    description: "Understand customer needs, behaviors, and pain points",
    icon: Users,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Journey Mapping",
    description: "Map customer journeys and identify optimization opportunities",
    icon: MapPin,
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Design & Implementation",
    description: "Design and implement improved customer experiences",
    icon: Palette,
    duration: "8-20 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test experiences and continuously optimize based on feedback",
    icon: Gauge,
    duration: "Ongoing"
  }
];

const customerExperienceBenefits = [
  {
    title: "Improved Customer Satisfaction",
    description: "Better experiences lead to higher customer satisfaction and loyalty",
    icon: Heart,
    examples: ["Higher satisfaction scores", "Increased loyalty", "Positive reviews", "Word-of-mouth referrals"]
  },
  {
    title: "Increased Conversion Rates",
    description: "Optimized experiences drive better business outcomes",
    icon: TrendingUp,
    examples: ["Higher conversion rates", "Reduced abandonment", "Increased sales", "Better ROI"]
  },
  {
    title: "Reduced Support Costs",
    description: "Better experiences reduce the need for customer support",
    icon: Headphones,
    examples: ["Fewer support tickets", "Lower support costs", "Self-service adoption", "Improved efficiency"]
  },
  {
    title: "Competitive Advantage",
    description: "Superior customer experiences differentiate your brand",
    icon: Award,
    examples: ["Brand differentiation", "Market leadership", "Customer preference", "Sustainable advantage"]
  }
];

export default function CustomerExperience() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'UX Design', 'Journey Mapping', 'Feedback Systems', 'Personalization', 'Support Platforms', 'Analytics'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? customerExperienceSolutions 
    : customerExperienceSolutions.filter(solution => solution.category === selectedCategory);

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
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Customer
              <span className="text-gradient block">Experience</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your customer interactions with data-driven insights and personalized experiences. 
              From UX design to customer journey optimization, we help you create memorable customer experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Heart className="w-4 h-4" />
                <span>Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Palette className="w-4 h-4" />
                <span>UX Design</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Brain className="w-4 h-4" />
                <span>Personalization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Experience Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experience Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make customer experience essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerExperienceBenefits.map((benefit, index) => (
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

      {/* Customer Experience Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experience Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading customer experience platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerExperienceTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Customer Experience Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful customer experience transformation
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
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experience Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for customer-centric transformation
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
            <h2 className="text-4xl font-bold text-white mb-4">Customer Experience Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their customer experience and business outcomes
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Customer Experience Transformation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how customer experience optimization can transform your business, 
              improve customer satisfaction, and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start CX Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                CX Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}