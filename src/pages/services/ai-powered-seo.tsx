import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  AlertTriangle,
  Lightbulb,
  BarChart,
  Users,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Monitor,
  MousePointer,
  FileText,
  Link,
  Hash,
  Tag,
  TrendingDown,
  Rocket,
  Award,
  PieChart
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export default function AIPoweredSEO() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Keyword Research",
      description: "Advanced machine learning algorithms that discover high-value keywords with low competition and high search volume",
      benefits: ["Semantic keyword analysis", "Competition analysis", "Search intent matching", "Long-tail keyword discovery"]
    },
    {
      icon: Search,
      title: "Intelligent Content Optimization",
      description: "AI-driven content analysis and optimization that improves search rankings and user engagement",
      benefits: ["Content gap analysis", "SEO score optimization", "Readability enhancement", "Keyword density optimization"]
    },
    {
      icon: TrendingUp,
      title: "Predictive SEO Analytics",
      description: "Forecast search performance trends and identify opportunities before your competitors",
      benefits: ["Ranking predictions", "Trend forecasting", "Competitive analysis", "Opportunity identification"]
    },
    {
      icon: Target,
      title: "Local SEO Automation",
      description: "Automated local search optimization for businesses targeting specific geographic areas",
      benefits: ["Google My Business optimization", "Local citation management", "Review monitoring", "Local keyword targeting"]
    },
    {
      icon: Zap,
      title: "Technical SEO Monitoring",
      description: "Continuous monitoring and optimization of technical SEO factors that impact search rankings",
      benefits: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "Core Web Vitals"]
    },
    {
      icon: BarChart3,
      title: "Competitive Intelligence",
      description: "Real-time monitoring of competitor SEO strategies and performance metrics",
      benefits: ["Competitor analysis", "Gap identification", "Strategy insights", "Performance benchmarking"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with SEO",
      features: [
        "Up to 5 keywords",
        "Basic content optimization",
        "Monthly SEO reports",
        "Email support",
        "Google Analytics integration",
        "Basic competitor analysis"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses and marketing agencies",
      features: [
        "Up to 25 keywords",
        "Advanced AI optimization",
        "Weekly SEO reports",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large businesses and agencies requiring maximum SEO performance",
      features: [
        "Unlimited keywords",
        "Custom AI models",
        "Daily SEO reports",
        "24/7 dedicated support",
        "Custom development",
        "White-label solutions",
        "Multi-tenant support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Rankings",
      description: "Improve search rankings by 200-500% with AI-optimized content and strategies"
    },
    {
      icon: Users,
      title: "Increased Traffic",
      description: "Generate 3-5x more organic traffic through intelligent keyword targeting and optimization"
    },
    {
      icon: DollarSign,
      title: "Better ROI",
      description: "Achieve 5-10x better ROI compared to traditional SEO methods"
    },
    {
      icon: Clock,
      title: "Faster Results",
      description: "See measurable improvements in 30-60 days instead of 6-12 months"
    }
  ];

  const useCases = [
    {
      title: "E-commerce SEO",
      description: "Optimize product pages, category pages, and shopping experiences for maximum search visibility and conversions"
    },
    {
      title: "Local Business SEO",
      description: "Dominate local search results with automated local SEO optimization and review management"
    },
    {
      title: "B2B Marketing",
      description: "Target high-value B2B keywords and optimize content for decision-makers and industry professionals"
    },
    {
      title: "Content Marketing",
      description: "Create SEO-optimized content that ranks well and drives organic traffic to your website"
    }
  ];

  const seoTools = [
    {
      icon: Search,
      title: "Keyword Research Tool",
      description: "AI-powered keyword discovery with competition analysis and search volume data"
    },
    {
      icon: BarChart3,
      title: "Ranking Tracker",
      description: "Monitor keyword rankings across multiple search engines and locations"
    },
    {
      icon: FileText,
      title: "Content Optimizer",
      description: "AI-driven content analysis and optimization recommendations"
    },
    {
      icon: Monitor,
      title: "Site Audit Tool",
      description: "Comprehensive technical SEO analysis with actionable recommendations"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics dashboard with conversion tracking and ROI measurement"
    },
    {
      icon: Target,
      title: "Competitor Monitor",
      description: "Track competitor SEO strategies and identify opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered SEO Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-zion-cyan"> SEO Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize your search engine optimization with AI-powered keyword research, content optimization, 
              and predictive analytics. Achieve higher rankings and 3-5x more organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced SEO Features Powered by AI
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform combines cutting-edge machine learning with proven SEO strategies to deliver 
              unprecedented results in search engine optimization.
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
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive SEO Toolkit
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to dominate search results in one integrated platform. 
              From keyword research to performance tracking, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-3 bg-zion-purple/20 rounded-lg w-fit mb-4">
                  <tool.icon className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                <p className="text-zion-slate-light">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your SEO needs. All plans include our core AI features 
              with enterprise-grade analytics and reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <RouterLink
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </RouterLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI SEO Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their search performance 
              with our AI-powered SEO platform.
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
                <div className="p-4 bg-zion-cyan/20 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI SEO platform is designed to handle the unique challenges of various industries 
              and business types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of SEO with AI-powered optimization, predictive analytics, 
              and unprecedented search performance gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-6 h-6 text-zion-cyan mb-3" />
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
}