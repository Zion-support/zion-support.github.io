import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Mic, 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  Users,
  Rocket,
  FileText,
  Search,
  Play,
  Pause,
  Stop,
  Volume2,
  Headphones,
  Speaker,
  Audio,
  Music,
  Waveform,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Video,
  Camera,
  Film,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Cloud,
  Database,
  Network,
  Cpu,
  Activity,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Map,
  Navigation,
  Route,
  Path,
  Way,
  Direction,
  Arrow,
  Pointer,
  Cursor,
  Mouse,
  Touch,
  Hand,
  Finger,
  Thumb,
  Index,
  Middle,
  Ring,
  Pinky
} from 'lucide-react';

export default function PodcastTranscriptionInsights() {
  const features = [
    {
      icon: Mic,
      title: 'High-Quality Transcription',
      description: 'AI-powered audio-to-text conversion',
      benefits: ['99% accuracy', 'Multiple languages', 'Speaker identification']
    },
    {
      icon: Brain,
      title: 'Content Analysis',
      description: 'Intelligent insights and topic extraction',
      benefits: ['Key themes', 'Sentiment analysis', 'Trend identification']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Live transcription and streaming',
      benefits: ['Instant results', 'Live captions', 'Real-time insights']
    },
    {
      icon: Users,
      title: 'Collaborative Tools',
      description: 'Team-based content management',
      benefits: ['Shared editing', 'Comment system', 'Version control']
    }
  ];

  const solutions = [
    {
      title: 'Audio Transcription',
      description: 'Convert audio to accurate text transcripts',
      icon: Audio,
      features: ['Multi-format support', 'Noise reduction', 'Accent recognition']
    },
    {
      title: 'Content Analytics',
      description: 'Extract insights and patterns from content',
      icon: BarChart3,
      features: ['Topic modeling', 'Keyword extraction', 'Trend analysis']
    },
    {
      title: 'Search & Discovery',
      description: 'Intelligent content search and navigation',
      icon: Search,
      features: ['Full-text search', 'Semantic search', 'Content recommendations']
    },
    {
      title: 'Content Management',
      description: 'Organize and manage transcribed content',
      icon: FileText,
      features: ['Metadata tagging', 'Category organization', 'Access control']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '10x Content Discovery',
      description: 'Find information instantly in audio content'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip to relevant content sections'
    },
    {
      icon: Users,
      title: 'Better Accessibility',
      description: 'Make content available to all audiences'
    },
    {
      icon: TrendingUp,
      title: 'Content Monetization',
      description: 'Repurpose audio into multiple formats'
    }
  ];

  const useCases = [
    {
      industry: 'Podcasting',
      applications: ['Episode transcripts', 'Show notes', 'Content repurposing']
    },
    {
      industry: 'Business',
      applications: ['Meeting records', 'Training materials', 'Compliance documentation']
    },
    {
      industry: 'Education',
      applications: ['Lecture transcripts', 'Study materials', 'Accessibility support']
    },
    {
      industry: 'Media',
      applications: ['Interview transcripts', 'News content', 'Documentary scripts']
    }
  ];

  const transcriptionFeatures = [
    {
      feature: 'Audio Processing',
      components: ['Noise reduction', 'Audio enhancement', 'Format conversion'],
      icon: Audio
    },
    {
      feature: 'Transcription Engine',
      components: ['AI models', 'Language support', 'Accuracy optimization'],
      icon: Brain
    },
    {
      feature: 'Content Analysis',
      components: ['Topic extraction', 'Sentiment analysis', 'Keyword identification'],
      icon: Search
    },
    {
      feature: 'Output Formats',
      components: ['Text files', 'Timestamps', 'Speaker labels'],
      icon: FileText
    }
  ];

  return (
    <>
      <SEO 
        title="Podcast Transcription Insights - AI-Powered Audio Analysis | Zion Tech Group"
        description="Transform your audio content with AI-powered transcription, content analysis, and intelligent insights extraction."
        keywords="podcast transcription insights, AI audio transcription, content analysis, audio-to-text, podcast analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-rose-600/20 to-red-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Mic className="w-4 h-4" />
                Audio Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Podcast Transcription Insights
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your audio content with AI-powered transcription, content analysis, 
                and intelligent insights extraction for maximum value and accessibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Transcription
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Demo
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
                AI-Powered Transcription Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with audio processing expertise to deliver 
                comprehensive transcription and analysis solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
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

        {/* Transcription Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced Transcription Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive features for professional audio transcription and analysis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transcriptionFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.feature}</h3>
                  <ul className="space-y-2">
                    {feature.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-rose-400" />
                        {component}
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
                Complete Transcription Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From audio processing to content insights, our platform covers all transcription needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-pink-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                Why Choose Podcast Transcription Insights?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in audio content management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Our transcription services serve diverse industries with tailored solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400" />
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
            <div className="bg-gradient-to-r from-pink-600/20 via-rose-600/20 to-red-600/20 border border-pink-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Audio Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading content creators who are already using our AI platform to unlock 
                the full potential of their audio content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact Content Team
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
                  Let's Discuss Your Transcription Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our content AI experts are ready to help you implement the right transcription 
                  solutions for your audio content. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-pink-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-pink-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Transcription Demo</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your audio content and transcription needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300"
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