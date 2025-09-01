import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Palette, 
  Brain, 
  Image, 
  Video, 
  Music, 
  Code, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Zap,
  Shield,
  Globe,
  Monitor,
  Smartphone,
  Server,
  Cloud,
  Database,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Award,
  Lock,
  Network,
  Cpu,
  Activity,
  Lightbulb,
  FileText,
  Camera,
  Mic,
  Brush,
  PenTool,
  Layers,
  Type,
  Grid,
  Layout,
  Compass,
  Sparkles,
  Wand2,
  Eye,
  Heart,
  ThumbsUp,
  Download,
  Share2,
  Settings,
  Zap as ZapIcon
} from 'lucide-react';

export default function AIAutonomousCreativeStudio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Creative Studio | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered creative studio that autonomously generates visual content, videos, music, and digital art with unprecedented creativity and efficiency." />
        <meta name="keywords" content="AI creative studio, autonomous content creation, AI art generation, video creation, music generation, digital content, creative AI, design automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-creative-studio" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                <Palette className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Creative Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unleash unlimited creativity with AI-powered autonomous content generation for visual arts, videos, music, and digital design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Creative Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI studio revolutionizes content creation by providing autonomous generation of high-quality visual, audio, and digital content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Image className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Art Generation</h3>
              <p className="text-gray-300">
                Create stunning artwork, illustrations, and designs with AI-powered autonomous generation based on your creative vision.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-4">
                <Video className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Video Creation</h3>
              <p className="text-gray-300">
                Generate professional videos, animations, and motion graphics with AI-driven storytelling and visual effects.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Music className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Music Generation</h3>
              <p className="text-gray-300">
                Compose original music, soundtracks, and audio content with AI-powered melody and rhythm generation.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <Code className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Design</h3>
              <p className="text-gray-300">
                Generate logos, UI/UX designs, and digital assets with AI-driven design principles and brand consistency.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Brush className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Style Transfer</h3>
              <p className="text-gray-300">
                Apply artistic styles and visual effects to any content with AI-powered style transfer and enhancement.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Automation</h3>
              <p className="text-gray-300">
                Automate repetitive creative tasks and workflows to focus on high-level creative direction and strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Creative Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your creative process with cutting-edge AI technology that delivers unlimited creative possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">10x Faster Content Creation</h3>
                    <p className="text-gray-300">Generate high-quality creative content in minutes instead of hours or days.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Unlimited Creative Possibilities</h3>
                    <p className="text-gray-300">Explore endless creative variations and styles with AI-powered generation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Quality Output</h3>
                    <p className="text-gray-300">AI-generated content meets professional standards for commercial use.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective Solutions</h3>
                    <p className="text-gray-300">Reduce creative production costs while maintaining high quality standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Studio Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                  <div className="text-gray-300">Assets Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
                  <div className="text-gray-300">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your creative needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 100 assets/month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic AI generation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Standard templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-8 rounded-xl border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 1,000 assets/month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced AI generation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Style transfer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">API access</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Unlimited assets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full platform access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated support team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom training</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ideal for Various Creative Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From marketing agencies to content creators and design studios, our platform adapts to your creative needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Marketing & Advertising</h3>
              <p className="text-gray-300">
                Generate campaign visuals, social media content, and advertising materials with AI-powered creativity.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-4">
                <Video className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
              <p className="text-gray-300">
                Create engaging videos, animations, and multimedia content for digital platforms and social media.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Brush className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Design Studios</h3>
              <p className="text-gray-300">
                Generate logos, brand assets, and design elements with AI-driven creativity and consistency.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <Music className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Media Production</h3>
              <p className="text-gray-300">
                Create soundtracks, audio content, and musical compositions for various media projects.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Code className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Web & App Design</h3>
              <p className="text-gray-300">
                Generate UI/UX designs, icons, and digital assets for web and mobile applications.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Agencies</h3>
              <p className="text-gray-300">
                Scale creative production and deliver high-quality content faster with AI-powered automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Creative Process?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a demo today and discover how AI can revolutionize your content creation and creative workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 302 464 0950</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">kleber@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Request Demo</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Tell us about your creative needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI-Powered Creative Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creative professionals who have already transformed their content creation with our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}