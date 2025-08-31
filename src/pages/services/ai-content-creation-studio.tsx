import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PenTool, 
  Brain, 
  Zap, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Globe,
  Users,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Palette,
  Camera,
  Mic,
  Type,
  Layers
} from 'lucide-react';

export default function AIContentCreationStudio() {
  const features = [
    {
      icon: PenTool,
      title: "AI Writing Assistant",
      description: "Generate high-quality written content with advanced language models and style customization."
    },
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Create stunning visuals, illustrations, and graphics using state-of-the-art image AI models."
    },
    {
      icon: Video,
      title: "AI Video Production",
      description: "Generate video content, animations, and motion graphics with AI-powered tools."
    },
    {
      icon: Music,
      title: "AI Audio Creation",
      description: "Compose music, generate sound effects, and create audio content with AI assistance."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create content in multiple languages with automatic translation and localization."
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Team-based content creation with real-time collaboration and version control."
    }
  ];

  const contentTypes = [
    {
      title: "Marketing Content",
      description: "Blog posts, social media content, email campaigns, and advertising copy",
      icon: Target
    },
    {
      title: "Technical Documentation",
      description: "User manuals, API docs, technical guides, and knowledge base articles",
      icon: FileText
    },
    {
      title: "Creative Writing",
      description: "Stories, scripts, poetry, and creative narratives",
      icon: PenTool
    },
    {
      title: "Visual Design",
      description: "Logos, infographics, presentations, and brand materials",
      icon: Palette
    }
  ];

  const benefits = [
    "10x faster content creation",
    "Consistent brand voice and style",
    "SEO-optimized content generation",
    "Multi-format content from single input",
    "Cost-effective content production",
    "Scalable content operations"
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Creation Studio | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with AI-powered tools for writing, design, video, and audio. Create engaging content 10x faster." />
        <meta name="keywords" content="AI content creation, AI writing, AI design, content generation, AI studio" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-content-creation-studio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <PenTool className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Creation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {" "}Studio
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your content creation with AI-powered tools for writing, design, video, and audio. 
                Create engaging, high-quality content 10x faster than traditional methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1">
                  Start Creating
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Content Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive suite of AI-powered content creation tools for every need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types We Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From marketing copy to technical documentation, we cover all your content needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contentType.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{contentType.title}</h3>
                      <p className="text-gray-300">{contentType.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Content Creation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your content strategy with AI-powered efficiency and quality
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to produce amazing content faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}