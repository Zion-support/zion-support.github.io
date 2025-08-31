import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer } from '../../components/SEOOptimizer.tsx';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Network,
  Activity,
  Users,
  Building2,
  Rocket,
  Lightbulb,
  Star,
  Phone,
  Mail,
  MapPin,
  Eye,
  MousePointer,
  FileText,
  MessageCircle,
  Analytics,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';

const AIPoweredSEO = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Optimization",
      description: "Advanced AI algorithms that analyze and optimize your content for search engines, improving rankings and organic traffic by up to 300%."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Intelligent Keyword Research",
      description: "AI-powered keyword discovery with search volume analysis, competition assessment, and long-tail opportunity identification."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive SEO Analytics",
      description: "Machine learning models that predict search trends, algorithm changes, and provide actionable insights for future-proof SEO strategies."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global SEO Optimization",
      description: "Multi-language and multi-region SEO optimization with local search enhancement and international ranking strategies."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technical SEO Automation",
      description: "Automated technical SEO audits, schema markup generation, and performance optimization with real-time monitoring."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Performance Tracking",
      description: "Comprehensive analytics dashboard with competitor analysis, ranking tracking, and ROI measurement tools."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,200",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Optimization (up to 50 pages)",
        "Basic Keyword Research",
        "Technical SEO Audits",
        "Monthly Performance Reports",
        "Email Support",
        "Basic Analytics Dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,800",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "AI Content Optimization (up to 200 pages)",
        "Advanced Keyword Research",
        "Predictive Analytics",
        "Competitor Analysis",
        "Priority Support",
        "Custom SEO Strategies",
        "Advanced Reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$6,500",
      period: "/month",
      description: "For large-scale operations and enterprises",
      features: [
        "Unlimited Content Optimization",
        "Custom AI Models",
        "White-label Solutions",
        "24/7 Dedicated Support",
        "API Access",
        "Advanced Security Features",
        "Custom Development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Organic Traffic",
      value: "300%",
      description: "Average increase in organic traffic through AI optimization"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Keyword Rankings",
      value: "85%",
      description: "Improvement in target keyword rankings"
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Click-Through Rate",
      value: "150%",
      description: "Enhanced CTR with optimized meta descriptions"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
      title: "ROI Improvement",
      value: "400%",
      description: "Return on investment from SEO efforts"
    }
  ];

  const useCases = [
    {
      title: "E-commerce SEO",
      description: "Optimize product pages, category structures, and shopping experience for better search visibility and conversions."
    },
    {
      title: "Local Business SEO",
      description: "Enhance local search presence with location-based optimization, Google My Business management, and local keyword targeting."
    },
    {
      title: "B2B Marketing SEO",
      description: "Target enterprise decision-makers with industry-specific keywords, thought leadership content, and technical optimization."
    },
    {
      title: "Content Marketing SEO",
      description: "Optimize blog posts, whitepapers, and educational content for maximum search visibility and audience engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI-Powered SEO Platform | Zion Tech Group"
        description="Revolutionize your search engine optimization with our AI-powered platform. Get 300% more organic traffic, intelligent keyword research, and predictive analytics."
        keywords="AI SEO, search engine optimization, keyword research, content optimization, technical SEO, SEO automation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered SEO
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> SEO Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your search engine optimization with intelligent AI algorithms, predictive analytics, and automated optimization. 
              Get 300% more organic traffic and dominate search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI SEO Platform Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary SEO Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with proven SEO strategies to deliver unprecedented search visibility.
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
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-zion-cyan mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join hundreds of companies already dominating search rankings with our AI-powered SEO platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI SEO platform is designed to handle the unique challenges of various industries and business types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your SEO needs. All plans include our core AI features and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'bg-zion-slate-dark border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of SEO with AI-powered optimization and intelligent analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI SEO Platform Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredSEO;