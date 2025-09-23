import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain,
  Award,
  CheckCircle,
  Download,
  Star,
  Target,
  TrendingUp,
  Rocket,
  Lightbulb,
  Code,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Slack,
  Discord,
  FileText,
  BookOpen,
  Video,
  Headphones,
  Settings,
  Tool,
  Bug,
  AlertTriangle,
  Info,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Demo() {
  const demoTypes = [
    {
      name: 'Product Demo',
      description: 'See our solutions in action with interactive demonstrations',
      duration: '30-45 minutes',
      type: 'Interactive',
      icon: Play,
      color: 'from-green-500 to-emerald-600',
      featured: true
    },
    {
      name: 'Technical Deep Dive',
      description: 'Detailed technical walkthrough for developers and engineers',
      duration: '60-90 minutes',
      type: 'Technical',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      featured: true
    },
    {
      name: 'Business Overview',
      description: 'High-level business value and ROI presentation',
      duration: '20-30 minutes',
      type: 'Business',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      featured: false
    },
    {
      name: 'Custom Demo',
      description: 'Tailored demonstration for your specific use case',
      duration: '45-60 minutes',
      type: 'Custom',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      featured: false
    }
  ];

  const demoFeatures = [
    {
      title: 'Live Q&A',
      description: 'Ask questions and get real-time answers',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Screen Sharing',
      description: 'See our platform in action on your screen',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Use Case Examples',
      description: 'Real-world scenarios relevant to your industry',
      icon: Target,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'ROI Analysis',
      description: 'Understand the business impact and returns',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const demoSchedule = [
    {
      time: '9:00 AM - 9:15 AM',
      activity: 'Introduction & Agenda',
      description: 'Overview of what we\'ll cover and your goals'
    },
    {
      time: '9:15 AM - 9:45 AM',
      activity: 'Product Demonstration',
      description: 'Interactive walkthrough of key features and capabilities'
    },
    {
      time: '9:45 AM - 10:00 AM',
      activity: 'Use Case Discussion',
      description: 'How our solutions address your specific challenges'
    },
    {
      time: '10:00 AM - 10:15 AM',
      activity: 'Q&A Session',
      description: 'Address your questions and concerns'
    },
    {
      time: '10:15 AM - 10:30 AM',
      activity: 'Next Steps',
      description: 'Implementation roadmap and follow-up actions'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Industries',
      content: 'The demo was incredibly comprehensive and showed exactly how their AI solutions could transform our operations. The team was knowledgeable and answered all our technical questions.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering',
      company: 'InnovateTech',
      content: 'We were impressed by the depth of the technical demo. They didn\'t just show features - they demonstrated real problem-solving capabilities that directly address our challenges.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations',
      company: 'Global Solutions Inc.',
      content: 'The business-focused demo clearly showed the ROI and operational benefits. Their team understood our industry and tailored the presentation perfectly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Schedule a Demo - Zion Tech Group"
        description="See our AI-powered solutions in action. Schedule a personalized demo with our experts and discover how Zion Tech Group can transform your business."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              See It In Action
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Schedule Your Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience our AI-powered solutions firsthand. Our expert team will walk you through real-world use cases, answer your questions, and show you exactly how we can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Schedule Now
              </a>
              <a
                href="#types"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <Play className="w-4 h-4" />
                Demo Types
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Types Section */}
      <section id="types" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo Experience</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the type of demonstration that best fits your needs and schedule
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoTypes.map((demo, index) => (
              <motion.div
                key={demo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group hover:bg-slate-700/50 transition-all duration-300 ${
                  demo.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${demo.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{demo.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{demo.duration}</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-gray-400">
                    {demo.type}
                  </span>
                </div>
                {demo.featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                    <Star className="w-3 h-3" />
                    Popular
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What to Expect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every demo includes these key elements to ensure you get the most value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Typical Demo Flow</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure you get comprehensive insights
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {demoSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.activity}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from organizations that have experienced our demos firsthand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See the Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule your personalized demo today and discover how our AI solutions can transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}