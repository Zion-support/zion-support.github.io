import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Lock,
  BarChart3,
  Server,
  Cloud,
  Star,
  Award,
  Rocket,
  Wifi,
  Activity,
  Monitor,
  Watch,
  Car,
  Home,
  Factory,
  Building,
  ShoppingCart,
  Leaf,
  Gamepad2,
  Palette,
  Camera,
  Video,
  Headphones,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';

export default function AIMetaverseDevelopment() {
  const features = [
    'AI-powered 3D world generation',
    'Intelligent avatar customization',
    'Real-time AI NPCs and interactions',
    'Dynamic environment adaptation',
    'AI-driven content creation',
    'Intelligent event management',
    'AI-powered social networking',
    'Virtual economy management',
    'Cross-platform compatibility',
    'Advanced security & privacy',
    'Scalable infrastructure',
    'Analytics & insights dashboard'
  ];

  const useCases = [
    {
      title: 'Virtual Events & Conferences',
      description: 'Create immersive virtual spaces for conferences, trade shows, and corporate events',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Build next-generation gaming experiences with AI-powered worlds and characters',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Virtual Commerce',
      description: 'Create immersive shopping experiences with AI-powered product recommendations',
      icon: ShoppingBag,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Education & Training',
      description: 'Build interactive learning environments with AI-powered tutoring and assessment',
      icon: GraduationCap,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$399',
      period: '/month',
      description: 'Perfect for small metaverse projects',
      features: [
        'Up to 100 concurrent users',
        'Basic AI world generation',
        'Avatar customization tools',
        'Basic analytics dashboard',
        'Email support',
        'Up to 10GB storage',
        'Standard security features'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing metaverse platforms',
      features: [
        'Up to 1,000 concurrent users',
        'Advanced AI world generation',
        'Custom avatar system',
        'AI-powered NPCs',
        'Priority support',
        'Up to 100GB storage',
        'Advanced security features',
        'Custom branding options',
        'Performance analytics'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large-scale metaverse deployments',
      features: [
        'Unlimited concurrent users',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'Advanced compliance features',
        'Multi-region deployment',
        'Performance optimization',
        'Security consulting'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'AI-Powered Creation',
      description: 'Generate immersive 3D worlds and intelligent NPCs with advanced AI algorithms',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Handle thousands of concurrent users with our cloud-native architecture',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cross-Platform Access',
      description: 'Access your metaverse from VR headsets, desktops, and mobile devices',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Enable seamless collaboration and interaction between users in real-time',
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    {
      title: 'Gaming',
      icon: Gamepad2,
      description: 'Next-generation gaming experiences with AI-powered worlds',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Education',
      icon: GraduationCap,
      description: 'Immersive learning environments and virtual classrooms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare',
      icon: Heart,
      description: 'Virtual therapy sessions and medical training simulations',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Retail',
      icon: ShoppingBag,
      description: 'Virtual shopping experiences and product visualization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Corporate',
      icon: Briefcase,
      description: 'Virtual offices, meetings, and team collaboration spaces',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Entertainment',
      icon: Video,
      description: 'Virtual concerts, theaters, and entertainment venues',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI algorithms for world generation, NPC behavior, and content creation',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: '3D Graphics & Rendering',
      description: 'High-performance 3D graphics engine with real-time rendering capabilities',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Blockchain Integration',
      description: 'Secure digital asset ownership and virtual economy management',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-native architecture for global deployment',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Metaverse Development Platform - Zion Tech Group"
        description="Revolutionary AI-powered metaverse development platform. Create immersive virtual worlds, intelligent NPCs, and next-generation digital experiences."
        canonical="/services/ai-metaverse-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Metaverse Development Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build the future of digital experiences with our AI-powered metaverse platform. 
                Create immersive virtual worlds, intelligent NPCs, and next-generation digital spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Start Building Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Metaverse Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI-powered platform provides everything you need to create immersive virtual experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Industries with Metaverse
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI-powered metaverse solutions can revolutionize your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored metaverse solutions for every industry and use case.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${industry.color} mb-4`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the latest technologies to deliver exceptional performance and experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${tech.color}`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                    <p className="text-gray-300 text-lg">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your metaverse development needs. Scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 ${
                    plan.popular 
                      ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Metaverse Development?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of digital experiences with AI-powered metaverse solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color}`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-lg">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build the Metaverse?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the digital revolution with AI-powered metaverse solutions that create immersive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Start Building Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}