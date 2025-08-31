import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  BookOpen, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  Award,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Database,
  Cpu,
  Network,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Video,
  FileText,
  Image,
  Code,
  Palette,
  Target,
  Lightbulb,
  GraduationCap,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export default function AIEducationalContentCreationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Generation",
      description: "Generate high-quality educational content using advanced AI models trained on millions of educational resources"
    },
    {
      icon: Video,
      title: "Multi-Format Content Creation",
      description: "Create videos, interactive presentations, quizzes, and written content from a single input"
    },
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "AI-driven adaptive learning that personalizes content based on student performance and preferences"
    },
    {
      icon: BarChart3,
      title: "Learning Analytics & Insights",
      description: "Comprehensive analytics to track student engagement, comprehension, and learning outcomes"
    },
    {
      icon: Workflow,
      title: "Automated Content Workflows",
      description: "Streamlined content creation, review, and distribution processes with automated quality checks"
    },
    {
      icon: Database,
      title: "Centralized Content Library",
      description: "Organized repository of educational materials with intelligent search and categorization"
    }
  ];

  const pricingPlans = [
    {
      name: "Educator",
      price: "$199",
      period: "/month",
      description: "Perfect for individual teachers and small educational institutions",
      features: [
        "Up to 100 content pieces/month",
        "Basic AI content generation",
        "Standard templates and themes",
        "Email support",
        "Basic analytics dashboard",
        "Mobile-responsive content"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Institution",
      price: "$599",
      period: "/month",
      description: "Ideal for schools, colleges, and training organizations",
      features: [
        "Up to 1,000 content pieces/month",
        "Advanced AI content generation",
        "Custom branding and themes",
        "Priority support",
        "Advanced analytics and reporting",
        "Team collaboration tools",
        "API access",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large educational institutions and corporate training departments",
      features: [
        "Unlimited content creation",
        "Full AI-powered content suite",
        "Custom AI model training",
        "24/7 dedicated support",
        "Advanced security and compliance",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "80% Time Savings",
      description: "Reduce content creation time from days to hours with AI automation"
    },
    {
      icon: DollarSign,
      title: "70% Cost Reduction",
      description: "Lower content creation costs and improve resource allocation"
    },
    {
      icon: TrendingUp,
      title: "95% Content Quality",
      description: "AI ensures consistent, high-quality educational content across all formats"
    },
    {
      icon: Users,
      title: "Enhanced Engagement",
      description: "Interactive and personalized content increases student engagement by 60%"
    }
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "Create engaging lesson plans, interactive activities, and assessment materials for all grade levels",
      icon: GraduationCap
    },
    {
      title: "Higher Education",
      description: "Develop comprehensive course materials, research guides, and academic resources",
      icon: BookOpen
    },
    {
      title: "Corporate Training",
      description: "Generate professional development materials, compliance training, and skill-building content",
      icon: Users
    },
    {
      title: "Online Learning",
      description: "Create engaging digital courses, webinars, and e-learning materials for remote education",
      icon: Monitor
    }
  ];

  const contentTypes = [
    {
      title: "Interactive Videos",
      description: "AI-generated videos with embedded quizzes, annotations, and interactive elements",
      icon: Video
    },
    {
      title: "Digital Presentations",
      description: "Dynamic presentations with adaptive content and real-time feedback",
      icon: Monitor
    },
    {
      title: "Assessment Tools",
      description: "Intelligent quizzes, tests, and evaluation materials with adaptive difficulty",
      icon: Target
    },
    {
      title: "Written Materials",
      description: "Comprehensive study guides, textbooks, and reference materials",
      icon: FileText
    },
    {
      title: "Mobile Content",
      description: "Optimized content for smartphones and tablets with responsive design",
      icon: Smartphone
    },
    {
      title: "Gamified Learning",
      description: "Educational games and interactive simulations for enhanced engagement",
      icon: Gamepad2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="AI-Powered Educational Content Creation Platform | Zion Tech Group"
        description="Revolutionary AI platform that automates educational content creation across multiple formats. Reduce content creation time by 80% and costs by 70%."
        keywords="AI educational content, content creation, e-learning, educational technology, AI teaching, digital education"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Education Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Educational Content Creation Platform
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Transform education with AI-powered content creation. Generate engaging, personalized, 
              and high-quality educational materials across all formats and subjects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Educational Technology
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with educational expertise 
              to deliver unprecedented content creation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-900/20 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-green-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Format Content Creation
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Create engaging educational content across multiple formats and devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-900/20 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <contentType.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                <p className="text-green-100">{contentType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Educational Content
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience unprecedented efficiency and quality in educational content creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-green-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-green-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Educational Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              From K-12 to corporate training, our platform serves every educational need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-900/20 border border-green-500/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-green-100 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Choose the plan that best fits your educational institution needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-green-900/20 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-400 shadow-lg shadow-green-400/25' 
                    : 'border-green-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-green-100 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-green-100">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-green-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-green-500/20 text-green-300 border border-green-400 hover:bg-green-500/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of educators who have already revolutionized their content creation 
              capabilities with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-green-100 hover:text-green-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-100 hover:text-green-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-green-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <p className="text-green-100">
              Ready to revolutionize your educational content creation? Contact us today to learn more about our 
              AI-Powered Educational Content Creation Platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}