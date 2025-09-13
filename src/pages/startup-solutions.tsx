import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  BarChart3,
  DollarSign,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Globe,
  Lock
} from 'lucide-react';

export default function StartupSolutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered MVP Development",
      description: "Rapidly build and validate your startup idea with intelligent AI solutions",
      features: ["Quick prototyping", "User behavior analysis", "Predictive insights"],
      price: "From $15K",
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable cloud infrastructure designed for rapid growth and cost efficiency",
      features: ["Auto-scaling", "Pay-as-you-grow", "Global deployment"],
      price: "From $8K",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Cybersecurity Foundation",
      description: "Build security into your startup from day one with enterprise-grade protection",
      features: ["Compliance ready", "Threat detection", "Data encryption"],
      price: "From $12K",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge digital solutions",
      features: ["Process automation", "Data analytics", "Mobile-first design"],
      price: "From $20K",
      color: "text-yellow-400"
    }
  ];

  const stages = [
    {
      phase: "Ideation & Validation",
      description: "Validate your startup idea with market research and MVP development",
      services: ["Market analysis", "Competitive research", "MVP prototyping", "User testing"],
      icon: Lightbulb,
      color: "text-yellow-400"
    },
    {
      phase: "Development & Launch",
      description: "Build your product with scalable architecture and launch-ready features",
      services: ["Full-stack development", "Cloud infrastructure", "Security implementation", "Beta testing"],
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      phase: "Growth & Scale",
      description: "Scale your startup with advanced analytics and automation solutions",
      services: ["Performance optimization", "Analytics dashboard", "Automation tools", "Growth hacking"],
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      phase: "Enterprise Ready",
      description: "Transform into an enterprise-grade company with advanced solutions",
      services: ["Enterprise features", "Compliance certification", "Global expansion", "Advanced security"],
      icon: Award,
      color: "text-purple-400"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Time-to-Market",
      description: "Launch your MVP in weeks, not months with our accelerated development process"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Start small and scale up with our flexible pricing and pay-as-you-grow model"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with experienced developers, designers, and business strategists"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "Join 500+ successful startups that have launched with our solutions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      company: "TechFlow",
      content: "Zion Tech Group helped us launch our AI-powered SaaS platform in just 8 weeks. Their expertise in startup development was invaluable.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "DataVault",
      content: "The cloud infrastructure they built for us scales perfectly as we grow. We've saved 60% on infrastructure costs.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "GreenTech",
      content: "From idea to launch in 6 weeks! Their startup solutions are game-changing for early-stage companies.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const industries = [
    "FinTech", "HealthTech", "EdTech", "E-commerce", "SaaS", "IoT", "AI/ML", "Blockchain"
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
                <Rocket className="w-4 h-4 mr-2" />
                Startup Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Launch Your Startup
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Faster</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Turn your startup idea into reality with our comprehensive technology solutions. 
                From MVP development to enterprise scaling, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Guide
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
              Startup Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for startups at every stage 
              of their journey.
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

      {/* Startup Journey Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Startup Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support startups at every stage, from initial idea validation to enterprise scaling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-10"></div>
                )}
                <div className={`w-20 h-20 ${stage.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <stage.icon className={`w-10 h-10 ${stage.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{stage.phase}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{stage.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {stage.services.map((service) => (
                    <li key={service} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges startups face and provide solutions 
              that accelerate growth while minimizing risk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
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

      {/* Industries Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our startup solutions are tailored for various industries, from FinTech to HealthTech.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 border border-slate-600/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Startup Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what startup founders have to say 
              about working with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
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
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your startup idea into reality. Get started with a free consultation 
              and discover how we can accelerate your journey to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Free Consultation
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}