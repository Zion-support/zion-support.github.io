import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Brain, Zap, Users, Target, ArrowRight, CheckCircle, Star, Lightbulb, Database, Cpu, Globe, Rocket, FileText, Image, Video, Music } from 'lucide-react';

export default function AIContentCreation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description: "Advanced language models for high-quality content generation"
    },
    {
      icon: PenTool,
      title: "Creative Content",
      description: "Generate engaging articles, blogs, and marketing copy"
    },
    {
      icon: Image,
      title: "Visual Content",
      description: "Create stunning images, graphics, and visual assets"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "AI-generated video content and editing automation"
    },
    {
      icon: Zap,
      title: "Real-time Generation",
      description: "Instant content creation with customizable templates"
    },
    {
      icon: Target,
      title: "Audience Optimization",
      description: "Content tailored to your target audience and SEO"
    }
  ];

  const benefits = [
    "Increase content production by 300%",
    "Reduce content creation time by 80%",
    "Improve SEO rankings by 65%",
    "Lower content costs by 50%",
    "Enhance engagement rates by 75%",
    "Scale content marketing effortlessly"
  ];

  const useCases = [
    {
      industry: "Marketing",
      applications: ["Blog Posts", "Social Media", "Email Campaigns", "Landing Pages"]
    },
    {
      industry: "E-commerce",
      applications: ["Product Descriptions", "Category Pages", "Reviews", "Marketing Copy"]
    },
    {
      industry: "Education",
      applications: ["Course Content", "Study Materials", "Tutorials", "Assessments"]
    },
    {
      industry: "Publishing",
      applications: ["Articles", "Newsletters", "Books", "Research Papers"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <PenTool className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered Content</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Creation Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your content strategy with our AI-powered creation platform. Generate high-quality, 
              engaging content at scale while maintaining your brand voice and SEO optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with creative expertise to deliver unprecedented content generation capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Content Strategy with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI Content Creation Platform delivers measurable improvements across all aspects of content marketing, 
                from creation to distribution and optimization.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                    <div className="text-sm text-gray-300">Content Production</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">80%</div>
                    <div className="text-sm text-gray-300">Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">65%</div>
                    <div className="text-sm text-gray-300">SEO Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI Content Creation transforms operations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-fit mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Content Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge AI technologies for maximum creativity and quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Natural Language", description: "Advanced language models" },
              { icon: Image, name: "Computer Vision", description: "AI image generation" },
              { icon: Video, name: "Video AI", description: "Automated video creation" },
              { icon: Globe, name: "Multi-language", description: "Global content support" },
              { icon: Shield, name: "Quality Control", description: "Content validation & review" },
              { icon: Zap, name: "Performance", description: "High-speed generation" },
              { icon: Users, name: "Collaboration", description: "Team-based creation" },
              { icon: Rocket, name: "Innovation", description: "Continuous AI advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 mb-4 group-hover:border-blue-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI content revolution and scale your content marketing with our intelligent creation platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}