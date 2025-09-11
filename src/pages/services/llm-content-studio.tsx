import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  FileText, 
  Zap, 
  BarChart3, 
  Globe, 
  Users,
  Smartphone,
  Target,
  Settings,
  Sparkles
} from 'lucide-react';
import SEO from '../../../components/SEO';

const LLMContentStudio: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate high-quality, engaging content in seconds using advanced language models and creative AI algorithms."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Multi-Format Support",
      description: "Create content for blogs, social media, emails, ads, and more with specialized templates and formats."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Writing Assistant",
      description: "Get AI-powered suggestions, ideas, and improvements to enhance your writing and creativity."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Content Optimization",
      description: "Optimize content for SEO, engagement, and conversion with AI-driven insights and recommendations."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Generate content in multiple languages with cultural adaptation and localization features."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Work together on content creation with real-time collaboration tools and version control."
    }
  ];

  const benefits = [
    {
      metric: "10x",
      description: "Faster content creation"
    },
    {
      metric: "60%",
      description: "Improvement in engagement"
    },
    {
      metric: "80%",
      description: "Time saved on writing"
    },
    {
      metric: "95%",
      description: "Content quality score"
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Generate engaging blog content, articles, and long-form content with SEO optimization."
    },
    {
      title: "Social Media Content",
      description: "Create compelling social media posts, captions, and content for all platforms."
    },
    {
      title: "Marketing Copy",
      description: "Generate persuasive ad copy, landing pages, and marketing materials."
    },
    {
      title: "Email Campaigns",
      description: "Create personalized email content, newsletters, and automated sequences."
    }
  ];

  const industries = [
    "E-commerce & Retail",
    "Technology & SaaS",
    "Healthcare & Wellness",
    "Finance & Banking",
    "Education & Training",
    "Real Estate & Property"
  ];

  return (
    <>
      <SEO 
        title="LLM Content Studio - Zion Tech Group"
        description="Transform your content creation with AI-powered writing assistance. Generate content 10x faster with 60% better engagement and 95% quality score."
        keywords="LLM content studio, AI content generation, creative writing assistant, content creation, AI writing, content optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                LLM Content Studio
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Revolutionize your content creation with AI-powered writing assistance that generates engaging, high-quality content in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
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
                Powerful Content Creation Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our LLM Content Studio combines cutting-edge language models with creative AI to deliver exceptional content creation capabilities.
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
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-cyan-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Content creators using our LLM Content Studio see dramatic improvements in productivity and content performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-cyan-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
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
                Content for Every Need
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From blog posts to social media content, our AI generates high-quality content for all your marketing needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                  <p className="text-cyan-200">{contentType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Expertise
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our AI understands industry-specific terminology and best practices for creating relevant, engaging content.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center"
                >
                  <p className="text-cyan-200 font-medium">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join content creators already using AI to generate engaging content 10x faster with better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LLMContentStudio;