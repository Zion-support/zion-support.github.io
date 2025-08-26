
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Zap, 
  Cloud, 
  Lock, 
  Workflow, 
  Eye, 
  Key, 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Building,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
// import { CategoriesSection } from "@/components/CategoriesSection"; // TODO: Create this component
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { AnimatedBackground, FloatingOrbs } from "@/components/ui/AnimatedBackground";

// Featured services data
const featuredServices = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions to automate and optimize your business processes.",
    icon: Brain,
    color: "from-neon-pink to-neon-orange",
    link: "/ai-services"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions.",
    icon: Cloud,
    color: "from-quantum-blue to-quantum-cyan",
    link: "/cloud-devops"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for modern businesses.",
    icon: Rocket,
    color: "from-neon-green to-quantum-purple",
    link: "/digital-transformation"
  },
  {
    title: "Micro SAAS Solutions",
    description: "Custom micro SAAS applications tailored to your specific needs.",
    icon: Code,
    color: "from-zion-cyan to-zion-purple",
    link: "/micro-saas-services"
  }
];

// Features data
const features = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies and innovative approaches.",
    icon: Brain,
    color: "text-zion-cyan"
  },
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of industry experience.",
    icon: Users,
    color: "text-zion-purple"
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations and measurable business outcomes.",
    icon: Award,
    color: "text-neon-green"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems run smoothly.",
    icon: Clock,
    color: "text-neon-orange"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupXYZ",
    content: "Their AI solutions helped us automate 80% of our manual processes. Game-changing technology.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, GlobalTech",
    content: "Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.",
    rating: 5
  }
];

// Stats data
const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Technologies", value: "50+", icon: Code }
];

// Technology categories
const technologyCategories = [
  { icon: Brain, label: "Machine Learning", color: "text-cyan-400" },
  { icon: Cloud, label: "Cloud Native", color: "text-blue-400" },
  { icon: Shield, label: "Cybersecurity", color: "text-green-400" },
  { icon: Zap, label: "Edge Computing", color: "text-yellow-400" },
  { icon: Database, label: "Big Data", color: "text-purple-400" },
  { icon: Code, label: "Microservices", color: "text-pink-400" },
  { icon: Target, label: "DevOps", color: "text-orange-400" },
  { icon: Lightbulb, label: "IoT Solutions", color: "text-indigo-400" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge AI, quantum computing, and micro SAAS solutions 
              that drive innovation and accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our innovative solutions can transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block group"
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
<<<<<<< HEAD
            );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. See how we've transformed operations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-zion-purple/20 rounded-lg ${feature.color}`}>
                      <IconComponent />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color.split('-')[1]}-500 to-${feature.color.split('-')[2]}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team excels in the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <category.icon className={`w-10 h-10 ${category.color}`} />
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {category.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our AI and technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Removed duplicate export - using function export above
