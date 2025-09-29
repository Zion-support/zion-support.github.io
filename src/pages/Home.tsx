import React from 'react';
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Star,
  CheckCircle,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ModernFeatures from "../components/ModernFeatures";
import EnhancedTestimonials from "../components/EnhancedTestimonials";
import PromotionalBanner from "../components/PromotionalBanner";
import FeaturedContent from "../components/FeaturedContent";
import ServiceShowcase from "../components/ServiceShowcase";
import SEOOptimizer, { generateStructuredData } from "../components/SEOOptimizer";
import { latestInsights } from "../content/insights";

const Home = () => {
  // Sample data for promotional banner
  const promotionalBannerData = {
    type: 'announcement' as const,
    title: 'New AI Services Now Available',
    description: 'Transform your business with our latest AI-powered solutions',
    ctaText: 'Explore Now',
    ctaLink: '/services',
    badge: 'New Release',
    autoHide: true,
    autoHideDelay: 8000
  };

  // Sample featured content data
  const featuredContentData = [
    {
      id: '1',
      title: 'AI Implementation Guide: From Strategy to Success',
      description: 'Comprehensive guide to implementing AI solutions in your organization. Learn best practices, common pitfalls, and success strategies.',
      type: 'whitepaper' as const,
      category: 'AI Solutions',
      author: 'Dr. Sarah Chen',
      publishDate: '2024-01-15',
      readTime: 15,
      viewCount: 2847,
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/300',
      url: '/resources'
    },
    {
      id: '2',
      title: 'Global Retail Chain AI Transformation',
      description: 'See how we helped RetailMax Corporation optimize inventory management and customer experience across 500+ stores.',
      type: 'case-study' as const,
      category: 'Case Studies',
      author: 'Zion Tech Team',
      publishDate: '2024-01-10',
      readTime: 8,
      viewCount: 1923,
      rating: 4.8,
      featured: true,
      image: '/api/placeholder/400/300',
      url: '/case-studies'
    },
    {
      id: '3',
      title: 'The Future of AI in Business: 2024 Trends',
      description: 'Join our experts as they discuss the latest AI trends and how they\'re reshaping business operations.',
      type: 'webinar' as const,
      category: 'Webinars',
      author: 'Dr. Alex Kumar',
      publishDate: '2024-01-20',
      readTime: 45,
      viewCount: 12543,
      rating: 4.7,
      featured: true,
      image: '/api/placeholder/400/300',
      url: '/resources'
    }
  ];

  // Sample services data
  const servicesData = [
    {
      id: 'ai-workflow',
      name: 'AI Workflow Automation',
      description: 'Transform business operations with intelligent process automation that reduces manual tasks by 80% and improves efficiency by 60%.',
      shortDescription: 'Intelligent process automation for maximum efficiency',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Recognition', 'Visual Designer', 'Smart Triggers', 'Performance Monitoring'],
      benefits: ['Reduce manual tasks by 80%', 'Improve efficiency by 60%', 'Cut costs by 40%'],
      pricing: { starting: '$99/month', popular: true },
      rating: 4.9,
      reviewCount: 127,
      category: 'AI Solutions',
      tags: ['Automation', 'AI', 'Workflow', 'Efficiency'],
      image: '/api/placeholder/400/300',
      url: '/services',
      stats: [
        { label: 'Efficiency Gain', value: '+60%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Cost Reduction', value: '-40%', icon: <Target className="w-5 h-5" /> },
        { label: 'Manual Tasks', value: '-80%', icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      id: 'ai-assistant',
      name: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support and business operations with natural language processing and multi-channel support capabilities.',
      shortDescription: '24/7 intelligent customer support and operations',
      icon: <Users className="w-8 h-8" />,
      features: ['Natural Language Processing', 'Multi-channel Support', '24/7 Availability', 'Personalized Interactions'],
      benefits: ['Reduce response time by 90%', 'Increase conversions by 40%', 'Save 30+ hours/week'],
      pricing: { starting: '$79/month' },
      rating: 4.8,
      reviewCount: 89,
      category: 'AI Solutions',
      tags: ['AI Assistant', 'Customer Support', 'Automation'],
      image: '/api/placeholder/400/300',
      url: '/services',
      stats: [
        { label: 'Response Time', value: '-90%', icon: <Clock className="w-5 h-5" /> },
        { label: 'Conversions', value: '+40%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Time Saved', value: '30h/week', icon: <Clock className="w-5 h-5" /> }
      ]
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Transform data into actionable insights with machine learning, predictive analytics, and real-time dashboards.',
      shortDescription: 'Transform data into actionable insights',
      icon: <Target className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Integration', 'Automated Insights'],
      benefits: ['Improve decisions by 60%', 'Increase retention by 45%', 'Reduce risks by 70%'],
      pricing: { starting: '$149/month' },
      rating: 4.9,
      reviewCount: 156,
      category: 'AI Solutions',
      tags: ['Analytics', 'Data Science', 'Machine Learning'],
      image: '/api/placeholder/400/300',
      url: '/services',
      stats: [
        { label: 'Better Decisions', value: '+60%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Retention', value: '+45%', icon: <Users className="w-5 h-5" /> },
        { label: 'Risk Reduction', value: '-70%', icon: <Shield className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <>
      {/* Promotional Banner */}
      <PromotionalBanner {...promotionalBannerData} />
      
      <SEOOptimizer
        title="Leading AI & IT Solutions | Transform Your Business"
        description="Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. Enterprise security, AI innovation, and expert consulting services."
        keywords="AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, business automation, data analytics"
        canonicalUrl="/"
        ogImage="/api/placeholder/1200/630"
        structuredData={generateStructuredData.organization()}
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        <Header />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Trusted by 500+ companies worldwide
              <Rocket className="w-4 h-4 ml-2 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent animate-gradient bg-300%">
                Zion Tech Group
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              Leading the future of technology with innovative solutions,
              cutting-edge AI, and transformative digital experiences that drive
              real business results. Experience the power of next-generation technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  500+
                </div>
                <div className="text-sm text-zion-slate-light">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  99.9%
                </div>
                <div className="text-sm text-zion-slate-light">Uptime SLA</div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  24/7
                </div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  5★
                </div>
                <div className="text-sm text-zion-slate-light">
                  Client Rating
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We deliver exceptional technology solutions that drive business
              growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30 shadow-lg">
                <Shield className="w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-zion-slate-light mb-4">
                Advanced cybersecurity solutions protecting your business from
                evolving threats.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  SOC 2 Compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  24/7 Monitoring
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-purple/30 transition-colors border border-zion-purple/30 shadow-lg">
                <Zap className="w-8 h-8 text-zion-purple-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Innovation
              </h3>
              <p className="text-zion-slate-light mb-4">
                Cutting-edge artificial intelligence solutions that transform
                your operations.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Computer Vision
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-colors border border-zion-cyan/30 shadow-lg">
                <Users className="w-8 h-8 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h3>
              <p className="text-zion-slate-light mb-4">
                World-class engineers and consultants dedicated to your success.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  10+ Years Experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Certified Professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Dedicated Support
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-blue-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue-light/30 transition-colors border border-zion-blue-light/30 shadow-lg">
                <Globe className="w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Global Reach
              </h3>
              <p className="text-zion-slate-light mb-4">
                Serving clients worldwide with localized expertise and support.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  50+ Countries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Local Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  24/7 Availability
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <FeaturedContent 
          title="Latest Insights & Resources"
          subtitle="Discover our latest insights, case studies, and resources to accelerate your digital transformation"
          items={featuredContentData}
          maxItems={3}
        />

        {/* Service Showcase */}
        <ServiceShowcase 
          title="Featured AI Services"
          subtitle="Transform your business with our cutting-edge AI solutions designed for modern enterprises"
          services={servicesData}
          maxItems={3}
        />

        {/* Testimonials Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto animate-fade-in">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;Zion Tech Group transformed our entire digital
                  infrastructure. Their AI solutions increased our efficiency by
                  300%.&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-zion-slate">CEO, TechCorp</div>
                </div>
              </div>

              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;Outstanding team and exceptional results. They
                  delivered our mobile app ahead of schedule and under
                  budget.&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-sm text-zion-slate">
                    CTO, InnovateLab
                  </div>
                </div>
              </div>

              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;The security solutions they implemented gave us
                  complete peace of mind. Highly recommended!&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    Emily Rodriguez
                  </div>
                  <div className="text-sm text-zion-slate">
                    Security Director, FinanceFirst
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Features Section */}
        <ModernFeatures />

        {/* Enhanced Testimonials Section */}
        <EnhancedTestimonials />

        {/* New Content Promo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-2">Latest from Zion Insights</h2>
                  <p className="text-white/90">
                    Fresh articles on real-time data pipelines, north-star metrics, and safe, scalable GenAI ops.
                  </p>
                </div>
                <Link to="/blog" className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto">
                  Read the latest
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Inline featured list */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-blue-200 mb-1">Data Engineering</div>
                  <div className="font-semibold text-white">Building Reliable Real-Time Data Pipelines</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-orange-200 mb-1">Product Analytics</div>
                  <div className="font-semibold text-white">North-Star Metrics That Actually Drive Growth</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-purple-200 mb-1">MLOps</div>
                  <div className="font-semibold text-white">Operationalizing GenAI Safely and at Scale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto animate-fade-in">
              Join thousands of companies that trust Zion Tech Group for their
              technology needs. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
