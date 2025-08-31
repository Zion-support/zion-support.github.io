import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Star,
  Clock,
  Mail,
  Phone,
  MessageCircle,
  Play,
  BookOpen,
  Download
} from 'lucide-react';

const GetStarted = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const gettingStartedPaths = [
    {
      id: 'individual',
      title: 'Individual Developer',
      description: 'Start building with our AI services as a solo developer',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      timeToComplete: '5 minutes',
      difficulty: 'Beginner'
    },
    {
      id: 'startup',
      title: 'Startup Team',
      description: 'Scale your startup with enterprise-grade AI solutions',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      timeToComplete: '15 minutes',
      difficulty: 'Intermediate'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Organization',
      description: 'Transform your business with custom AI implementations',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      timeToComplete: '1-2 hours',
      difficulty: 'Advanced'
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Create Your Account',
      description: 'Sign up with your email and verify your account',
      icon: Users,
      duration: '2 minutes',
      actions: [
        'Enter your email address',
        'Choose a secure password',
        'Verify your email',
        'Complete your profile'
      ]
    },
    {
      step: 2,
      title: 'Choose Your Plan',
      description: 'Select the plan that best fits your needs and budget',
      icon: Star,
      duration: '3 minutes',
      actions: [
        'Review available plans',
        'Compare features and pricing',
        'Select your preferred plan',
        'Add payment information'
      ]
    },
    {
      step: 3,
      title: 'Set Up Your Project',
      description: 'Configure your first project and integrate our services',
      icon: Zap,
      duration: '10 minutes',
      actions: [
        'Create your first project',
        'Configure API keys',
        'Set up integrations',
        'Test your connection'
      ]
    },
    {
      step: 4,
      title: 'Start Building',
      description: 'Begin developing with our AI services and tools',
      icon: Rocket,
      duration: 'Varies',
      actions: [
        'Explore our documentation',
        'Try our sample code',
        'Build your first feature',
        'Deploy and test'
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'AI Content Generation',
      description: 'Learn how to generate high-quality content using our AI models',
      icon: BookOpen,
      time: '10 min read',
      difficulty: 'Beginner',
      link: '/docs/ai-content-generation'
    },
    {
      title: 'API Integration',
      description: 'Integrate our services into your existing applications',
      icon: Zap,
      time: '15 min read',
      difficulty: 'Intermediate',
      link: '/docs/api-integration'
    },
    {
      title: 'Security Setup',
      description: 'Configure security settings and access controls',
      icon: Shield,
      time: '20 min read',
      difficulty: 'Intermediate',
      link: '/docs/security-setup'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      responseTime: 'Immediate',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      responseTime: 'Within 4 hours',
      availability: '24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      responseTime: 'Immediate',
      availability: '24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Started
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                in Minutes
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of developers and businesses already using Zion Tech Group 
              to build the future with AI. Choose your path and start building today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">
                <span className="font-semibold">Free Trial</span> Available
              </div>
              <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400">
                <span className="font-semibold">No Credit Card</span> Required
              </div>
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400">
                <span className="font-semibold">24/7</span> Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Paths */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the getting started path that best matches your needs and experience level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gettingStartedPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center cursor-pointer ${
                  selectedPath === path.id ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <path.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>
                <p className="text-gray-300 mb-4">{path.description}</p>
                
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex items-center justify-center gap-2 text-cyan-400">
                    <Clock className="w-4 h-4" />
                    {path.timeToComplete}
                  </div>
                  <div className="text-gray-400">
                    Difficulty: {path.difficulty}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedPath(path.id)}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedPath === path.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                  }`}
                >
                  {selectedPath === path.id ? 'Selected' : 'Choose This Path'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      {selectedPath && (
        <section className="py-20 px-6 bg-slate-800/20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Your Onboarding Journey</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Follow these simple steps to get up and running with Zion Tech Group services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {onboardingSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative ${
                      currentStep >= step.step ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {/* Step Connector */}
                    {index < onboardingSteps.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                    )}
                    
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        currentStep >= step.step 
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                          : 'bg-slate-700/50'
                      }`}>
                        {currentStep > step.step ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-white font-bold">{step.step}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        
                        <ul className="space-y-2">
                          {step.actions.map((action, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              {action}
                            </li>
                          ))}
                        </ul>
                        
                        {currentStep === step.step && (
                          <button
                            onClick={() => setCurrentStep(step.step + 1)}
                            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                          >
                            Complete Step {step.step}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Start Guides */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quick Start Guides</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Jump-start your development with our comprehensive guides and tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <guide.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{guide.title}</h3>
                <p className="text-gray-300 text-center mb-4">{guide.description}</p>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {guide.time}
                  </span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                    {guide.difficulty}
                  </span>
                </div>
                
                <a
                  href={guide.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Need Help Getting Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our support team is here to help you succeed every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400">
                    Response: {option.responseTime}
                  </div>
                  <div className="text-gray-400">
                    Available: {option.availability}
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses already using Zion Tech Group 
              to transform their ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <Rocket className="w-5 h-5" />
              </button>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;