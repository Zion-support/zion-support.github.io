import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {

  Brain, 
  Zap, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Shield,
  Cloud,
  Database,
  Network
} from 'lucide-react';

export default function AISolutions() {

  const aiSolutionCategories = [
    {

      name: "AI Business Solutions",
      description: "Transform your business operations with intelligent AI solutions",
      icon: Target,
      href: "/revolutionary-services-showcase-2034",
      count: 30,
      color: "from-green-400 to-emerald-500",
      solutions: ["Business Intelligence", "Process Automation", "Customer Analytics", "Predictive Modeling"]
    },
    {

      name: "AI Infrastructure",
      description: "Enterprise-grade AI infrastructure and deployment solutions",
      icon: Server,
      href: "/revolutionary-services-showcase-2034",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      solutions: ["AI Cloud Platforms", "AI DevOps", "AI Security", "AI Monitoring"]
    },
    {

      name: "Quantum AI",
      description: "Revolutionary quantum computing combined with AI for unprecedented performance",
      icon: Atom,
      href: "/revolutionary-services-showcase-2034",
      count: 12,
      color: "from-purple-400 to-pink-500",
      solutions: ["Quantum Neural Networks", "Quantum Machine Learning", "Quantum Optimization", "Quantum Security"]
    },
    {

      name: "AI Research & Development",
      description: "Cutting-edge AI research and development for next-generation solutions",
      icon: Lightbulb,
      href: "/revolutionary-services-showcase-2034",
      count: 25,
      color: "from-yellow-400 to-orange-500",
      solutions: ["AI Algorithms", "Machine Learning", "Deep Learning", "AI Ethics"]
    }
  ];

  const featuredSolutions = [
    {

      title: "AI-Powered Quantum Neural Network Platform",
      description: "Revolutionary platform combining quantum computing with neural networks to solve previously unsolvable problems",
      price: "From $24,999/month",
      features: ["Quantum AI", "Hybrid Computing", "Advanced Algorithms"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {

      title: "AI-Powered Autonomous Business Intelligence",
      description: "Next-generation business intelligence platform that autonomously analyzes data and makes strategic recommendations",
      price: "From $8,999/month",
      features: ["Autonomous Analysis", "Predictive Modeling", "Real-time Insights"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-blue-400 to-indigo-500"
    },
    {

      title: "AI-Powered Cybersecurity Threat Intelligence",
      description: "Advanced cybersecurity platform that uses AI to detect, analyze, and respond to threats in real-time",
      price: "From $15,999/month",
      features: ["Real-time Detection", "AI Analysis", "Automated Response"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-red-400 to-pink-500"
    }
  ];

  const contactInfo = {

    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI solutions and platforms from Zion Tech Group. Transform your business with revolutionary artificial intelligence technology." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, quantum AI, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Solutions
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {' '}for Tomorrow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the power of next-generation artificial intelligence with our revolutionary AI solutions. 
              From quantum computing to autonomous business intelligence, we're shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/revolutionary-services-showcase-2034"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore AI Solutions
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📞</div>
              <p className="text-white font-semibold">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">✉️</div>
              <p className="text-white font-semibold">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">🌐</div>
              <p className="text-white font-semibold">{contactInfo.website}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📍</div>
              <p className="text-white font-semibold">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solution Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">AI Solution Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiSolutionCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-400">{category.count} solutions available</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 ${

                  solution.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {solution.popular && (
                  <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-blue-400 mb-2">{solution.price}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={solution.href}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary AI solutions. 
              Contact us today to learn how we can help you achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative AI technology solutions for the future.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">AI Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Business Solutions</li>
                <li>AI Infrastructure</li>
                <li>Quantum AI</li>
                <li>Research & Development</li>
                <li>AI Platforms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}