import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Globe, 
  Users, 
  Clock, 
  Award, 
  Star,
  Cpu,
  Database,
  Filter,
  Download,
  Share2,
  CheckCircle,
  Eye,
  MousePointer,
  Smartphone,
  Monitor,
  ShoppingCart,
  Building,
  FileText,
  MapPin,
  Cloud} from 'lucide-react';

export default function AIPoweredSEO() {
  const features = [
    {
      icon: Search,
      title: "AI Keyword Research",
      description: "Intelligent keyword discovery and analysis using machine learning algorithms."
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "AI-powered content analysis and optimization for better search rankings."
    },
    {
      icon: Target,
      title: "Competitive Analysis",
      description: "Advanced competitor research and gap analysis with AI insights."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Real-time SEO metrics and automated performance optimization."
    },
    {
      icon: Monitor,
      title: "Technical SEO",
      description: "Automated technical SEO audits and optimization recommendations."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "AI-driven mobile-first SEO strategies and testing."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Improved Search Rankings",
      description: "Boost your website's visibility and climb search engine result pages."
    },
    {
      icon: Globe,
      title: "Increased Organic Traffic",
      description: "Generate more qualified leads through better search engine optimization."
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Enhance website performance and user engagement metrics."
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description: "Automate repetitive SEO tasks and focus on strategic improvements."
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with AI-powered SEO insights and strategies."
    },
    {
      icon: Star,
      title: "ROI Optimization",
      description: "Maximize your marketing budget with data-driven SEO decisions."
    }
  ];

  const seoProcess = [
    {
      stage: "Research & Analysis",
      description: "AI-powered keyword research, competitor analysis, and technical audit",
      icon: Search
    },
    {
      stage: "Content Strategy",
      description: "Data-driven content planning and optimization recommendations",
      icon: Target
    },
    {
      stage: "Technical Optimization",
      description: "Automated technical SEO improvements and performance optimization",
      icon: Cpu
    },
    {
      stage: "Monitoring & Reporting",
      description: "Real-time performance tracking and actionable insights",
      icon: BarChart3
    },
    {
      stage: "Continuous Improvement",
      description: "Ongoing optimization based on performance data and trends",
      icon: TrendingUp
    },
    {
      stage: "Mobile & Local SEO",
      description: "Mobile-first optimization and local search enhancement",
      icon: Smartphone
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize product pages, category pages, and search functionality",
      icon: ShoppingCart
    },
    {
      industry: "B2B Services",
      description: "Improve lead generation through targeted keyword optimization",
      icon: Building
    },
    {
      industry: "Content Marketing",
      description: "Enhance content discoverability and engagement metrics",
      icon: FileText
    },
    {
      industry: "Local Businesses",
      description: "Boost local search visibility and Google My Business optimization",
      icon: MapPin
    },
    {
      industry: "SaaS Companies",
      description: "Optimize landing pages and conversion-focused content",
      icon: Cloud
    },
    {
      industry: "Healthcare",
      description: "Improve patient discovery and medical information accessibility",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI-Powered SEO - Zion Tech Group"
        description="Transform your search engine optimization with AI-powered tools. Improve rankings, increase traffic, and drive organic growth."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered SEO
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}SEO
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your search engine optimization with intelligent AI tools that analyze, 
              optimize, and continuously improve your website's search performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered SEO platform provides comprehensive tools to optimize your website 
              and improve search engine rankings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of AI-powered SEO that drives organic growth 
              and improves your website's search performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              SEO Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive SEO process ensures systematic optimization 
              and continuous improvement of your search performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoProcess.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {stage.stage}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI-powered SEO 
              to improve search rankings and drive organic growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered SEO to improve 
              search rankings and drive organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}