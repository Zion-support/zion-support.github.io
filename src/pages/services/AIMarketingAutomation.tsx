import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Mail,
  MessageSquare,
  Share2,
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIMarketingAutomation = () => {
  const features = [
    {
      icon: Target,
      title: "Intelligent Audience Targeting",
      description: "AI-powered segmentation and targeting for maximum campaign effectiveness",
      benefits: [
        "Behavioral pattern analysis",
        "Predictive customer modeling",
        "Real-time audience optimization",
        "Cross-channel targeting"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Campaign Optimization",
      description: "Automated campaign performance prediction and optimization",
      benefits: [
        "ROI forecasting",
        "A/B testing automation",
        "Budget optimization",
        "Performance prediction"
      ]
    },
    {
      icon: Users,
      title: "Personalized Content Generation",
      description: "AI-generated personalized content for each customer segment",
      benefits: [
        "Dynamic content creation",
        "Personalized messaging",
        "Multi-language support",
        "Brand voice consistency"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics & Insights",
      description: "Live campaign performance monitoring and actionable insights",
      benefits: [
        "Real-time dashboards",
        "Predictive analytics",
        "Competitive intelligence",
        "Performance alerts"
      ]
    },
    {
      icon: Zap,
      title: "Automated Workflow Management",
      description: "Streamlined marketing operations with intelligent automation",
      benefits: [
        "Campaign scheduling",
        "Lead nurturing automation",
        "Email sequence optimization",
        "Social media automation"
      ]
    },
    {
      icon: Eye,
      title: "Advanced Attribution Modeling",
      description: "Multi-touch attribution for accurate ROI measurement",
      benefits: [
        "Cross-channel attribution",
        "Customer journey mapping",
        "Conversion tracking",
        "ROI optimization"
      ]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      applications: [
        "Product recommendation engines",
        "Abandoned cart recovery",
        "Personalized email campaigns",
        "Dynamic pricing optimization"
      ],
      icon: Target
    },
    {
      industry: "B2B Marketing",
      applications: [
        "Lead scoring automation",
        "Account-based marketing",
        "Content personalization",
        "Sales funnel optimization"
      ],
      icon: Users
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient engagement campaigns",
        "Appointment reminders",
        "Health education content",
        "Provider marketing"
      ],
      icon: Monitor
    },
    {
      industry: "Financial Services",
      applications: [
        "Customer retention campaigns",
        "Product cross-selling",
        "Risk-based messaging",
        "Compliance-aware marketing"
      ],
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      metric: "300%",
      description: "Increase in conversion rates",
      icon: TrendingUp
    },
    {
      metric: "85%",
      description: "Reduction in manual tasks",
      icon: Zap
    },
    {
      metric: "$1.2M",
      description: "Average annual ROI",
      icon: BarChart3
    },
    {
      metric: "24/7",
      description: "Campaign optimization",
      icon: Eye
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director, E-commerce Retailer",
      quote: "The AI marketing automation platform increased our conversion rates by 300% while reducing our manual workload by 85%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "VP Marketing, B2B SaaS Company",
      quote: "Our lead generation and nurturing processes are now completely automated and optimized for maximum ROI.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      title: "CMO, Healthcare Network",
      quote: "The personalized patient engagement campaigns have significantly improved our patient satisfaction scores.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Marketing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with intelligent automation that personalizes campaigns, optimizes performance, 
              and delivers measurable ROI. Let AI handle the complexity while you focus on strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing That Works Smarter
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform delivers unprecedented results through intelligent optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate and optimize your marketing campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how AI marketing automation transforms campaigns across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((application, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A simple three-step process to revolutionize your marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Connect & Analyze</h3>
              <p className="text-gray-300">
                Connect your data sources and let AI analyze customer behavior patterns and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Optimization</h3>
              <p className="text-gray-300">
                AI automatically optimizes campaigns, personalizes content, and targets the right audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Measure & Scale</h3>
              <p className="text-gray-300">
                Track performance in real-time and scale successful campaigns automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what marketing leaders have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-orange-400 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already leveraging AI to automate and optimize their marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingAutomation;