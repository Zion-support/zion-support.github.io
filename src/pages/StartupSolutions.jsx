import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Brain,
  Cloud,
  Shield,
  Target,
  Smartphone,
  Server,
  Palette,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  Award
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
    logo: "🚀",
    comp: "TechStart Inc.",
    industry: "SaaS",
    challenge: "Needed to launch MVP quickly to secure funding and validate market fit.",
    solution: "Built rapid MVP with cloud infrastructure and AI analytics integration.",
    results: "Launched in 6 weeks, secured $500K funding, 1000+ beta users in first month."
  },
  {
    logo: "💡",
    comp: "InnovateLabs",
    industry: "FinTech",
    challenge: "Required secure, scalable platform for financial services with compliance.",
    solution: "Implemented cybersecurity framework with cloud infrastructure and compliance tools.",
    results: "Achieved SOC2 compliance in 4 months, 99.9% uptime, zero security incidents."
  },
  {
    logo: "📱",
    comp: "MobileFirst",
    industry: "E-commerce",
    challenge: "Needed mobile app to compete in mobile-first market segment.",
    solution: "Developed cross-platform mobile app with integrated analytics and marketing tools.",
    results: "App launched in 8 weeks, 50% increase in mobile conversions, 4.8-star rating."
  }
];

const StartupSolutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'AI & Analytics', 'Infrastructure', 'Security', 'Marketing'];

  const filteredSolutions = selectedCategory === 'All'
    ? startupSolutions
    : startupSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Startup
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your startup's growth with cutting-edge technology solutions
              designed for rapid development, scalability, and market success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Startup Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 border border-white/20 hover:border-purple-400/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-sm text-purple-400">{solution.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{solution.description}</p>

                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-purple-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-400 font-semibold">{solution.price}</span>
                  <span className="text-gray-400">{solution.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Startup Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our startup solutions have helped companies launch, scale, and succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.comp}</h3>
                    <p className="text-gray-300 text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Results</h4>
                    <p className="text-gray-300 text-sm">{story.results}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our startup solutions can accelerate your growth,
              reduce time to market, and help you achieve your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Startup Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Startup Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartupSolutions;
