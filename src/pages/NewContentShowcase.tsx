import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  Star,
  Award,
  Rocket,
  Target,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewContentShowcase() {
  const newServices = [
    {
      title: "AI-Powered Quantum Analytics",
      description: "Revolutionary quantum computing meets AI for unprecedented data analysis capabilities",
      icon: Brain,
      features: ["Quantum ML Algorithms", "Real-time Processing", "99.99% Accuracy"],
      price: "$4,999/month",
      category: "Quantum AI",
      badge: "NEW",
      href: "/services/ai-quantum-analytics"
    },
    {
      title: "Autonomous Cloud Infrastructure",
      description: "Self-healing, self-scaling cloud platforms that adapt to your business needs",
      icon: Cloud,
      features: ["Auto-scaling", "Predictive Maintenance", "Zero Downtime"],
      price: "$2,999/month",
      category: "Cloud Computing",
      badge: "HOT",
      href: "/services/autonomous-cloud"
    },
    {
      title: "Neural Security Network",
      description: "AI-powered threat detection that learns and evolves with cyber threats",
      icon: Shield,
      features: ["Behavioral Analysis", "Threat Prediction", "Auto-response"],
      price: "$3,499/month",
      category: "Cybersecurity",
      badge: "TRENDING",
      href: "/services/neural-security"
    },
    {
      title: "Hyper-Automation Platform",
      description: "End-to-end business process automation powered by advanced AI",
      icon: Zap,
      features: ["Process Mining", "RPA Integration", "Smart Workflows"],
      price: "$1,999/month",
      category: "Automation",
      badge: "POPULAR",
      href: "/services/hyper-automation"
    }
  ];

  const newBlogPosts = [
    {
      title: "The Future of AI: Quantum Computing Meets Machine Learning",
      excerpt: "Discover how quantum computing is revolutionizing AI and what it means for businesses in 2025.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "/images/quantum-ai-future.jpg",
      href: "/blog/quantum-ai-future"
    },
    {
      title: "Building Autonomous Cloud Infrastructure: A Complete Guide",
      excerpt: "Learn how to implement self-healing cloud systems that adapt to your business needs automatically.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "12 min read",
      image: "/images/autonomous-cloud.jpg",
      href: "/blog/autonomous-cloud-guide"
    },
    {
      title: "Neural Security Networks: The Next Generation of Cybersecurity",
      excerpt: "Explore how AI-powered security systems are changing the game for enterprise protection.",
      author: "Alex Thompson",
      date: "January 10, 2025",
      readTime: "10 min read",
      image: "/images/neural-security.jpg",
      href: "/blog/neural-security-networks"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechCorp Industries",
      role: "CTO",
      content: "Zion's AI solutions transformed our data analytics capabilities. The quantum analytics platform is game-changing.",
      rating: 5,
      avatar: "/images/avatar-jennifer.jpg"
    },
    {
      name: "David Kim",
      company: "Global Finance Inc",
      role: "VP of Technology",
      content: "The autonomous cloud infrastructure has reduced our operational costs by 40% while improving performance.",
      rating: 5,
      avatar: "/images/avatar-david.jpg"
    },
    {
      name: "Sarah Williams",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "Neural security network caught threats we never knew existed. Our security posture is now enterprise-grade.",
      rating: 5,
      avatar: "/images/avatar-sarah.jpg"
    }
  ];

  return (
    <>
      <SEO 
        title="New Content & Services - Zion Tech Group"
        description="Discover our latest AI-powered solutions, quantum computing services, and cutting-edge technology innovations."
        keywords={["new AI services", "quantum computing", "autonomous cloud", "neural security", "hyper automation"]}
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-transparent to-zion-blue/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                NEW CONTENT & SERVICES
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"> AI Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover cutting-edge AI services, quantum computing platforms, and autonomous systems that are reshaping the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Service Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI solutions that are redefining what's possible in business technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                            service.badge === 'NEW' ? 'bg-green-500/20 text-green-400' :
                            service.badge === 'HOT' ? 'bg-red-500/20 text-red-400' :
                            service.badge === 'TRENDING' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {service.badge}
                          </span>
                          <span className="block text-sm text-gray-400 mt-1">{service.category}</span>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 font-semibold"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Insights & Research
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead with our latest research, insights, and thought leadership on emerging technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newBlogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 group"
                >
                  <Link to={post.href} className="block">
                    <div className="aspect-[16/9] bg-slate-700/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Brain className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                          <span className="text-white font-semibold">AI Innovation</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">Research</span>
                        <span className="text-xs text-zion-slate-light">{post.date} • {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-zion-cyan" />
                          </div>
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
              >
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our latest AI solutions are transforming businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using our AI solutions to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started Today
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  View Pricing
                  <TrendingUp className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}