import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Palette, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Lock,
  Database,
  Camera,
  Music,
  Video
} from 'lucide-react';

const AIAutonomousCreativeDirector = () => {
  const creativeFeatures = [
    {
      icon: Brain,
      title: 'AI Creative Intelligence',
      description: 'Advanced AI algorithms that understand creative concepts and generate innovative ideas'
    },
    {
      icon: Palette,
      title: 'Visual Design Automation',
      description: 'Automated creation of stunning visual designs, logos, and brand assets'
    },
    {
      icon: Zap,
      title: 'Content Generation',
      description: 'AI-powered content creation for marketing, social media, and campaigns'
    },
    {
      icon: Shield,
      title: 'Brand Consistency',
      description: 'Maintain brand identity and visual consistency across all creative outputs'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Data-driven creative decisions that maximize engagement and conversion'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamlined creative workflow and team coordination tools'
    }
  ];

  const creativeServices = [
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, color schemes, and style guides',
      icon: Palette
    },
    {
      title: 'Marketing Campaigns',
      description: 'End-to-end marketing campaign design and creative direction',
      icon: Target
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media graphics, videos, and content strategies',
      icon: Globe
    },
    {
      title: 'Print & Digital Media',
      description: 'Brochures, flyers, websites, and digital marketing materials',
      icon: Camera
    },
    {
      title: 'Video Production',
      description: 'AI-assisted video editing, motion graphics, and visual effects',
      icon: Video
    },
    {
      title: 'Audio & Music',
      description: 'AI-generated music, sound effects, and audio branding',
      icon: Music
    }
  ];

  const creativeCapabilities = [
    {
      category: 'Design & Visual',
      features: [
        'AI-powered logo generation',
        'Brand identity development',
        'Visual style consistency',
        'Color palette optimization',
        'Typography selection'
      ]
    },
    {
      category: 'Content Creation',
      features: [
        'Copywriting assistance',
        'Content strategy planning',
        'Multimedia content creation',
        'Localization support',
        'A/B testing optimization'
      ]
    },
    {
      category: 'Campaign Management',
      features: [
        'Campaign concept development',
        'Creative brief generation',
        'Asset management',
        'Performance tracking',
        'ROI optimization'
      ]
    },
    {
      category: 'Collaboration Tools',
      features: [
        'Team workflow management',
        'Client feedback integration',
        'Version control systems',
        'Approval workflows',
        'Project timeline management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">AI-Powered Creative Direction</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Creative Director</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your creative process with our AI autonomous creative director. 
              Generate innovative ideas, maintain brand consistency, and create compelling content at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Start Creative Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                View Creative Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Creative Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed to revolutionize your creative workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Creative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI creative director handles a wide range of creative services and projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Creative Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features that transform how you approach creative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {creativeCapabilities.map((capability, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Creativity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading brands that have already revolutionized their creative process with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300"
              >
                Start Creative Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Schedule Creative Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousCreativeDirector;