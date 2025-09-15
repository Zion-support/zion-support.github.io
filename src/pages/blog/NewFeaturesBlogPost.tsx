import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Heart,
  MessageCircle,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const NewFeaturesBlogPost: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Our new AI system analyzes your business data in real-time, providing actionable insights and predictions that help you make informed decisions faster than ever before.",
      benefits: [
        "Real-time data analysis",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Security Suite",
      description: "Military-grade encryption and advanced threat detection protect your business from cyber attacks with 99.9% uptime guarantee.",
      benefits: [
        "End-to-end encryption",
        "AI threat detection",
        "Automated backups",
        "Compliance monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized infrastructure delivers 50% faster loading times and seamless user experiences across all devices and platforms.",
      benefits: [
        "Global CDN network",
        "Auto-scaling infrastructure",
        "Edge computing",
        "Performance monitoring"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CEO",
      content: "The new AI features have revolutionized how we analyze our business data. We've seen a 40% improvement in decision-making speed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      role: "CTO",
      content: "The security improvements give us peace of mind. Our compliance scores have improved dramatically since implementation.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FutureSystems",
      role: "Operations Director",
      content: "The performance boost is incredible. Our applications load 3x faster, and our users are thrilled with the improved experience.",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Revolutionary New Features Launch - Zion Tech Group"
        description="Discover the latest AI-powered innovations, advanced security features, and performance improvements that are transforming businesses worldwide."
        keywords="new features, AI innovation, business intelligence, cybersecurity, performance optimization, technology launch"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 px-4">
          <div className="container mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                New Features Launch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Revolutionary Features
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  That Change Everything
                </span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                We're excited to announce the launch of our most advanced features yet. 
                These innovations will transform how you do business and give you a competitive edge in the digital marketplace.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Published January 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>By Zion Tech Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none mb-16"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                After months of development and testing, we're thrilled to introduce our most comprehensive 
                feature update yet. These new capabilities represent a quantum leap forward in business technology, 
                combining cutting-edge AI, advanced security, and lightning-fast performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't just an update—it's a complete transformation of what's possible with business technology. 
                Our team has worked tirelessly to create solutions that not only meet today's challenges but anticipate 
                tomorrow's opportunities.
              </p>
            </motion.div>

            {/* Features Section */}
            <div className="space-y-16 mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 md:p-12"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">The Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-lg opacity-90">Faster Decision Making</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-lg opacity-90">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-lg opacity-90">Performance Improvement</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What Our Customers Are Saying
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary new features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Social Share */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MessageCircle className="w-5 h-5" />
                <span>24 comments</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewFeaturesBlogPost;