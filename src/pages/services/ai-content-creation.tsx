import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  PenTool, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Clock,
  Award,
  Star,
  Rocket,
  Eye,
  Search,
  FileText,
  MessageCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Palette,
  Type,
  Image,
  Video,
  Music,
  Sparkles,
  Lightbulb,
  Cpu,
  Database,
  Shield,
  Lock
} from 'lucide-react';

export default function AIContentCreation() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Content Generation',
      description: 'AI-powered content creation that understands context and audience',
      benefits: ['Context-aware writing', 'Audience targeting', 'Brand voice consistency']
    },
    {
      icon: PenTool,
      title: 'Multi-Format Content',
      description: 'Create content across all digital formats and platforms',
      benefits: ['Blog posts', 'Social media', 'Email campaigns', 'Video scripts']
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'AI-driven content optimization for maximum engagement',
      benefits: ['SEO optimization', 'Performance tracking', 'A/B testing']
    },
    {
      icon: Users,
      title: 'Personalized Content',
      description: 'Tailored content that resonates with specific audiences',
      benefits: ['Audience segmentation', 'Behavioral insights', 'Dynamic content']
    }
  ];

  const solutions = [
    {
      title: 'Content Strategy & Planning',
      description: 'AI-powered content strategy development and editorial planning',
      icon: Target,
      features: ['Content calendar optimization', 'Topic research', 'Competitor analysis']
    },
    {
      title: 'Copywriting & Creative',
      description: 'Professional copywriting with AI assistance for all industries',
      icon: PenTool,
      features: ['Marketing copy', 'Product descriptions', 'Brand messaging']
    },
    {
      title: 'SEO Content Creation',
      description: 'Search-optimized content that ranks and converts',
      icon: Search,
      features: ['Keyword optimization', 'Content structure', 'Performance tracking']
    },
    {
      title: 'Multimedia Content',
      description: 'AI-generated scripts, captions, and descriptions for all media types',
      icon: Video,
      features: ['Video scripts', 'Podcast descriptions', 'Image captions']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '10x Content Production',
      description: 'Generate high-quality content at unprecedented speed'
    },
    {
      icon: Clock,
      title: '24/7 Content Creation',
      description: 'Never run out of fresh, engaging content'
    },
    {
      icon: Users,
      title: 'Increased Engagement',
      description: 'AI-optimized content that resonates with your audience'
    },
    {
      icon: TrendingUp,
      title: 'Better ROI',
      description: 'Higher conversion rates and improved marketing performance'
    }
  ];

  const useCases = [
    {
      industry: 'Marketing & Advertising',
      applications: ['Campaign copy', 'Social media content', 'Email marketing']
    },
    {
      industry: 'E-commerce',
      applications: ['Product descriptions', 'Category pages', 'Marketing emails']
    },
    {
      industry: 'Publishing & Media',
      applications: ['Article writing', 'News summaries', 'Content curation']
    },
    {
      industry: 'Corporate Communications',
      applications: ['Company blogs', 'Internal communications', 'Press releases']
    }
  ];

  const contentTypes = [
    {
      type: 'Written Content',
      examples: ['Blog posts', 'Articles', 'Social media posts', 'Email campaigns'],
      icon: FileText
    },
    {
      type: 'Visual Content',
      examples: ['Image captions', 'Video descriptions', 'Infographic text'],
      icon: Image
    },
    {
      type: 'Audio Content',
      examples: ['Podcast scripts', 'Video scripts', 'Audio descriptions'],
      icon: Music
    },
    {
      type: 'Interactive Content',
      examples: ['Chatbot responses', 'FAQ content', 'User guides'],
      icon: MessageCircle
    }
  ];

  return (
    <>
      <SEO 
        title="AI Content Creation - Intelligent Content Generation | Zion Tech Group"
        description="Transform your content strategy with AI-powered creation. Generate engaging, SEO-optimized content at scale with our intelligent content platform."
        keywords="AI content creation, content generation, AI writing, content marketing, SEO content, digital content"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <PenTool className="w-4 h-4" />
                AI Content Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Content Creation
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your content strategy with AI-powered creation. Generate engaging, 
                SEO-optimized content at scale while maintaining quality and brand consistency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Creating
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced AI Content Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with content expertise to deliver 
                comprehensive solutions that transform your content creation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Content Types We Create
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From written content to multimedia, our AI platform handles all your content needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <contentType.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{contentType.type}</h3>
                  <ul className="space-y-2">
                    {contentType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-orange-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Content Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From strategy to execution, our platform addresses the full spectrum of content challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Content Creation?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in content creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI content creation platform serves diverse industries with tailored solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 border border-purple-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading brands who are already using our AI platform to create engaging, 
                high-converting content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Creating Today
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Let's Discuss Your Content Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our content AI experts are ready to help you implement the right solutions 
                  for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your content creation needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}