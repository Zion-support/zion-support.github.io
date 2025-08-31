import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users,
  Shield,
  Globe,
  Search,
  Edit3,
  Video,
  Mic,
  Image,
  Phone,
  Mail,
  MapPin,
  Target,
  PieChart,
  LineChart,
  Bell,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  Percent,
  Play,
  Camera,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export default function AIEducationalContentCreation() {
  const features = [
    {
      title: "AI-Powered Content Generation",
      description: "Generate high-quality educational content in multiple formats using advanced AI",
      icon: Brain,
      benefits: ["Automated content creation", "Multiple format support", "Quality assurance", "Scalable production"]
    },
    {
      title: "Interactive Learning Materials",
      description: "Create engaging interactive content with quizzes, simulations, and assessments",
      icon: Play,
      benefits: ["Interactive quizzes", "Virtual simulations", "Adaptive learning", "Student engagement"]
    },
    {
      title: "Multi-Format Content Creation",
      description: "Generate content in text, video, audio, and interactive formats simultaneously",
      icon: Video,
      benefits: ["Text generation", "Video creation", "Audio production", "Interactive elements"]
    },
    {
      title: "Personalized Learning Paths",
      description: "AI-driven personalization based on student performance and learning styles",
      icon: Target,
      benefits: ["Adaptive content", "Learning analytics", "Performance tracking", "Customized paths"]
    }
  ];

  const pricingPlans = [
    {
      name: "Educator",
      price: "$99",
      period: "/month",
      description: "Perfect for individual teachers and educators",
      features: [
        "Up to 100 content pieces/month",
        "Basic AI content generation",
        "Standard templates",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Institution",
      price: "$299",
      period: "/month",
      description: "Ideal for schools, colleges, and training organizations",
      features: [
        "Up to 500 content pieces/month",
        "Advanced AI capabilities",
        "Custom templates",
        "Priority support",
        "API access",
        "Team collaboration",
        "Advanced analytics",
        "Multi-format support"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large educational institutions and corporate training",
      features: [
        "Unlimited content creation",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced analytics",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Multi-language support",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const contentTypes = [
    {
      title: "Text Content",
      description: "Generate comprehensive educational materials and documentation",
      icon: FileText,
      features: ["Lesson plans", "Study guides", "Textbooks", "Worksheets", "Assessments"]
    },
    {
      title: "Video Content",
      description: "Create engaging video lessons and presentations",
      icon: Video,
      features: ["Video lessons", "Presentations", "Tutorials", "Animations", "Screen recordings"]
    },
    {
      title: "Audio Content",
      description: "Generate podcasts, lectures, and audio learning materials",
      icon: Mic,
      features: ["Podcasts", "Audio lectures", "Language learning", "Audio books", "Sound effects"]
    },
    {
      title: "Interactive Content",
      description: "Create engaging interactive learning experiences",
      icon: Monitor,
      features: ["Quizzes", "Simulations", "Games", "Virtual labs", "Interactive exercises"]
    }
  ];

  const platforms = [
    { name: "Web Platform", icon: Globe, description: "Browser-based learning management system" },
    { name: "Mobile Apps", icon: Smartphone, description: "iOS and Android learning applications" },
    { name: "Tablet Apps", icon: Tablet, description: "Optimized for tablet learning experiences" },
    { name: "Desktop Apps", icon: Laptop, description: "Full-featured desktop applications" }
  ];

  const stats = [
    { number: "95%", label: "Content Quality Score", icon: CheckCircle },
    { number: "10x", label: "Faster Content Creation", icon: Clock },
    { number: "50+", label: "Content Formats", icon: FileText },
    { number: "24/7", label: "AI Availability", icon: Brain }
  ];

  const benefits = [
    "Reduce content creation time by 90%",
    "Improve student engagement by 60%",
    "Cut educational content costs by 70%",
    "Increase learning outcomes by 40%",
    "Support multiple learning styles",
    "Enable personalized learning experiences"
  ];

  return (
    <>
      <Helmet>
        <title>AI Educational Content Creation Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize education with AI-powered content creation. Generate high-quality educational materials in multiple formats with our advanced platform." />
        <meta name="keywords" content="AI educational content, content creation AI, educational technology, learning management system, AI teaching tools" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-educational-content-creation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Education Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content Creation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionize education with AI-powered content creation. Generate high-quality educational materials in multiple formats, 
                create personalized learning experiences, and engage students like never before. Reduce content creation time by 90%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines advanced content generation with educational expertise to deliver engaging learning experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate comprehensive educational content across multiple formats and learning styles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={contentType.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <contentType.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{contentType.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{contentType.description}</p>
                  
                  <div className="space-y-2">
                    {contentType.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Multi-Platform Support
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Deliver educational content across all devices and platforms for maximum accessibility.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <platform.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-zinc-400">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our educational technology solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your educational content creation needs. All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Revolutionize Education?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of educators who have already transformed their teaching with AI-powered content creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Ready to revolutionize your educational content creation? Our team is here to help you get started with AI-powered solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}