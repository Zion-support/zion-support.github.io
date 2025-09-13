import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Phone, 
  Users, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Clock,
  Star,
  Award,
  Lock,
  Globe,
  Wifi,
  Smartphone,
  Monitor,
  Tablet,
  Settings,
  BarChart3,
  MessageCircle,
  Share2,
  Record
} from 'lucide-react';

export default function VideoCall() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Video Enhancement",
      description: "Crystal clear video calls with AI-driven noise reduction and image optimization",
      features: ["Background blur", "Noise cancellation", "Auto-focus", "Lighting adjustment"],
      price: "From $15K",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance features",
      features: ["256-bit encryption", "HIPAA compliance", "GDPR ready", "Audit trails"],
      price: "From $25K",
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Platform",
      description: "Scalable video infrastructure that grows with your business needs",
      features: ["Auto-scaling", "Global CDN", "99.9% uptime", "Multi-region support"],
      price: "From $20K",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "Monitor call quality and user experience with live analytics dashboard",
      features: ["Call metrics", "Quality monitoring", "User feedback", "Performance insights"],
      price: "From $18K",
      color: "text-yellow-400"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Multi-Participant Support",
      description: "Host video calls with up to 1000 participants with crystal clear quality",
      benefits: ["HD video", "Audio optimization", "Screen sharing", "Recording"]
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Low-latency video calls across continents with our global network",
      benefits: ["<50ms latency", "Global servers", "Bandwidth optimization", "Fallback routing"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Support",
      description: "Seamless video calls across all devices and operating systems",
      benefits: ["Mobile apps", "Web browsers", "Desktop clients", "Smart TV support"]
    },
    {
      icon: Settings,
      title: "Advanced Controls",
      description: "Professional-grade controls for moderators and administrators",
      benefits: ["User management", "Permission controls", "Meeting scheduling", "Integration APIs"]
    }
  ];

  const useCases = [
    {
      name: "Business Meetings",
      description: "Professional video conferencing for remote teams and client meetings",
      icon: Users,
      features: ["Screen sharing", "Document collaboration", "Meeting recording", "Calendar integration"],
      color: "text-blue-400"
    },
    {
      name: "Healthcare Telemedicine",
      description: "Secure video consultations for healthcare providers and patients",
      icon: Shield,
      features: ["HIPAA compliance", "Patient privacy", "Medical records", "Prescription management"],
      color: "text-green-400"
    },
    {
      name: "Education & Training",
      description: "Interactive learning experiences with virtual classrooms and training sessions",
      icon: Monitor,
      features: ["Virtual whiteboard", "Breakout rooms", "Attendance tracking", "Content sharing"],
      color: "text-purple-400"
    },
    {
      name: "Customer Support",
      description: "High-quality video support for enhanced customer service experiences",
      icon: MessageCircle,
      features: ["Queue management", "Screen sharing", "Call recording", "Analytics dashboard"],
      color: "text-orange-400"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce travel time and increase productivity with instant video connectivity"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Cut travel expenses and infrastructure costs by up to 60%"
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "Connect teams worldwide without geographical limitations"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Bank-grade security ensures your communications remain private"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      company: "HealthTech Solutions",
      content: "Our telemedicine platform powered by Zion Tech Group handles 500+ daily video consultations with perfect reliability and security.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "GlobalTech Corp",
      content: "The video quality and global connectivity have transformed how our distributed teams collaborate. Zero downtime in 12 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Lisa Rodriguez",
      role: "Training Director",
      company: "EduTech Academy",
      content: "Our virtual classrooms now support 200+ students simultaneously with crystal clear video and interactive features.",
      rating: 5,
      avatar: "LR"
    }
  ];

  const integrations = [
    "Microsoft Teams", "Slack", "Zoom", "Google Meet", "Salesforce", "HubSpot", "Zendesk", "Calendly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Video className="w-4 h-4 mr-2" />
                Video Call Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Crystal Clear
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Video Calls</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your communication with enterprise-grade video calling solutions. 
                From AI-powered enhancement to global connectivity, experience the future of video communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Video Call Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive video calling solutions designed for businesses, healthcare, 
              education, and customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${solution.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-xl flex items-center justify-center mb-6`}>
                  <solution.icon className={`w-8 h-8 ${solution.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">{solution.price}</span>
                  <button className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade features that make every video call exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Versatile video calling solutions for every industry and business need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${useCase.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{useCase.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Video Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference with our enterprise-grade video calling platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{integration}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about our video calling solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 border border-slate-600/50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience crystal clear video calls with enterprise-grade security and 
              global connectivity. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}