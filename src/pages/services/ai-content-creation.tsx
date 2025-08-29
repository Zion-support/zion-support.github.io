import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  PenTool, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Monitor,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Type,
  Image,
  Video,
  Music,
  Palette,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIContentCreation() {
  const features = [
    {
      title: 'AI-Powered Writing',
      description: 'Generate high-quality, engaging content across all formats and industries',
      icon: Type,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visual Content Creation',
      description: 'Create stunning images, graphics, and visual assets with AI assistance',
      icon: Image,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Video Production',
      description: 'Generate and edit professional videos with AI-driven automation',
      icon: Video,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Audio & Music',
      description: 'Create original music, sound effects, and audio content',
      icon: Music,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice and style across all content',
      icon: Palette,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'SEO Optimization',
      description: 'AI-optimized content that ranks higher in search engines',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'Engaging, SEO-optimized content for websites and blogs',
      icon: FileText,
      examples: ['Industry insights', 'How-to guides', 'Case studies', 'Thought leadership']
    },
    {
      title: 'Social Media Content',
      description: 'Viral-worthy posts for all major social platforms',
      icon: Users,
      examples: ['Instagram posts', 'Twitter threads', 'LinkedIn articles', 'Facebook content']
    },
    {
      title: 'Marketing Materials',
      description: 'Compelling copy for ads, emails, and campaigns',
      icon: MessageCircle,
      examples: ['Ad copy', 'Email campaigns', 'Landing pages', 'Product descriptions']
    },
    {
      title: 'Visual Assets',
      description: 'Stunning graphics, infographics, and visual content',
      icon: Image,
      examples: ['Infographics', 'Social graphics', 'Banner ads', 'Presentation slides']
    }
  ];

  const benefits = [
    '10x faster content creation',
    'Consistent brand voice across all channels',
    'SEO-optimized content that ranks higher',
    'Reduced content creation costs by 60%',
    '24/7 content generation capability',
    'Multilingual content in 50+ languages'
  ];

  const useCases = [
    {
      title: 'Marketing Agencies',
      description: 'Scale content production and deliver more value to clients',
      icon: Users,
      benefits: ['Faster turnaround times', 'Higher quality content', 'Reduced costs', 'Better client satisfaction']
    },
    {
      title: 'E-commerce Brands',
      description: 'Create compelling product descriptions and marketing content at scale',
      icon: ShoppingCart,
      benefits: ['Better conversion rates', 'Faster product launches', 'Consistent messaging', 'SEO improvement']
    },
    {
      title: 'Content Creators',
      description: 'Focus on creativity while AI handles the heavy lifting',
      icon: PenTool,
      benefits: ['Increased productivity', 'Better content quality', 'More creative time', 'Faster publishing']
    },
    {
      title: 'Enterprise Companies',
      description: 'Maintain consistent brand voice across global operations',
      icon: Building,
      benefits: ['Brand consistency', 'Global scalability', 'Cost efficiency', 'Quality assurance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Transform your content strategy with AI-powered creation tools. Generate engaging content across all formats and platforms."
        keywords="AI content creation, content generation, AI writing, visual content, video creation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Creation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your content strategy with our AI-powered creation platform. 
              Generate engaging, high-quality content across all formats and platforms 
              in a fraction of the time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Creation</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-xl">
              <div className="text-3xl font-bold text-indigo-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Generation</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with creative expertise 
              to deliver unprecedented content creation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From written content to visual assets, our AI platform handles 
              every type of content creation you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                    <contentType.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{contentType.title}</h3>
                    <p className="text-gray-400 text-sm">{contentType.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {contentType.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Content Creation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered content creation 
              that revolutionizes how you produce and manage content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI content creation platform serves businesses across all industries, 
              helping them scale their content production and improve engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                    <useCase.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the content revolution with our AI platform. 
              Create more content, faster, and with better quality than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const Type = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);