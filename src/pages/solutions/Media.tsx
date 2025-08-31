import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Video, 
  Camera, 
  Mic, 
  Monitor, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap,
  Play,
  Film,
  Radio,
  Newspaper,
  Palette,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';

export default function Media() {
  const features = [
    {
      icon: Video,
      title: "AI-Powered Content Creation",
      description: "Generate high-quality video content, scripts, and storyboards using advanced AI algorithms."
    },
    {
      icon: Camera,
      title: "Smart Video Production",
      description: "Automated video editing, color correction, and post-production workflows."
    },
    {
      icon: Mic,
      title: "Audio Intelligence",
      description: "AI-driven audio enhancement, noise reduction, and voice synthesis capabilities."
    },
    {
      icon: Monitor,
      title: "Multi-Platform Distribution",
      description: "Automated content distribution across all major media platforms and channels."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Content",
      description: "Optimize content for mobile devices with AI-powered responsive design."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-language content generation and localization for international audiences."
    }
  ];

  const solutions = [
    {
      title: "Content Creation Studio",
      description: "AI-powered platform for creating videos, podcasts, articles, and social media content.",
      features: ["Automated script writing", "Video generation", "Content optimization", "Multi-format export"]
    },
    {
      title: "Media Analytics Platform",
      description: "Comprehensive analytics and insights for content performance across all channels.",
      features: ["Performance tracking", "Audience insights", "ROI measurement", "Predictive analytics"]
    },
    {
      title: "Distribution Automation",
      description: "Automated content distribution and scheduling across multiple platforms.",
      features: ["Multi-platform posting", "Optimal timing", "Audience targeting", "Performance monitoring"]
    },
    {
      title: "Content Optimization",
      description: "AI-driven content optimization for maximum engagement and reach.",
      features: ["SEO optimization", "Engagement analysis", "A/B testing", "Trend prediction"]
    }
  ];

  const technologies = [
    "AI Content Generation",
    "Computer Vision",
    "Natural Language Processing",
    "Machine Learning",
    "Cloud Computing",
    "Edge Computing",
    "5G Networks",
    "Blockchain",
    "AR/VR",
    "IoT Integration"
  ];

  const benefits = [
    "Reduce content creation time by 80%",
    "Increase audience engagement by 60%",
    "Lower production costs by 70%",
    "Improve content quality and consistency",
    "Enable 24/7 content generation",
    "Optimize for multiple platforms simultaneously"
  ];

  const caseStudies = [
    {
      title: "Global News Network",
      description: "Implemented AI-powered content creation, reducing production time by 75% and increasing viewer engagement by 45%.",
      metrics: ["75% faster production", "45% engagement increase", "60% cost reduction"]
    },
    {
      title: "Entertainment Streaming Platform",
      description: "Deployed automated content optimization, resulting in 30% higher viewer retention and 50% more content recommendations.",
      metrics: ["30% retention increase", "50% more recommendations", "40% faster content delivery"]
    },
    {
      title: "Social Media Agency",
      description: "Integrated AI content generation, enabling 10x more content creation with 80% cost savings.",
      metrics: ["10x content increase", "80% cost savings", "90% automation rate"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Media Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your media business with Zion Tech Group's AI-powered content creation, distribution, and optimization solutions. Increase engagement, reduce costs, and scale your content operations." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/media" />
        <meta name="keywords" content="AI media solutions, content creation, video production, media analytics, content distribution, media automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Media Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your media business with cutting-edge AI technology. Create, optimize, and distribute content at scale while maximizing engagement and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Media Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered solutions revolutionize every aspect of media production and distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Media Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end solutions that transform your media operations from creation to distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest advancements in AI, machine learning, and media technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 transition-all duration-300"
              >
                <p className="text-white font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Media Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Achieve unprecedented results with our AI-powered media solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how leading media companies are transforming their operations with our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Media Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the AI revolution in media and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Ready to get started? Contact our media solutions experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <span>Email: media@ziontechgroup.com</span>
            <span>Phone: +1 (555) 123-4567</span>
            <span>Support: 24/7 Available</span>
          </div>
        </div>
      </section>
    </div>
  );
}