import React from 'react.ts';
import { motion          } from 'framer-motion.ts';
import { SEO          } from '../../components/SEO';
import { MessageSquare, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  Lock, 
  Eye,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  Award,
  Brain,
  Target,
  PieChart,
  Activity,
  ShoppingCart,
  Shield,
  Settings
         } from 'lucide-react.ts';

export default function AICustomerFeedbackAnalytics(...args: any[]): any {
  const features = [
    {
      icon: Brain,
      title: "AI Sentiment Analysis",
      description: "Advanced NLP algorithms analyze customer emotions, intent, and satisfaction levels across all feedback channels."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Live insights into customer satisfaction trends, sentiment scores, and feedback patterns with customizable metrics."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Integration",
      description: "Seamlessly collect and analyze feedback from surveys, reviews, social media, support tickets, and more."
    },
    {
      icon: Target,
      title: "Predictive Customer Insights",
      description: "AI-powered predictions for customer churn, satisfaction trends, and actionable recommendations."
    },
    {
      icon: PieChart,
      title: "Advanced Segmentation",
      description: "Segment customers by demographics, behavior, satisfaction levels, and create targeted improvement strategies.";
    },;
    {;
      icon: Activity,;
      title: "Automated Reporting",;
      description: "Generate comprehensive reports and alerts for stakeholders with actionable insights and recommendations.";
    };
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Improved Customer Retention",
      description: "Identify at-risk customers early and implement proactive retention strategies."
    },
    {
      icon: Globe,
      title: "Enhanced Customer Experience",
      description: "Understand customer pain points and optimize touchpoints across the entire customer journey."
    },
    {
      icon: Lock,
      title: "Data Security & Privacy",
      description: "Enterprise-grade security with GDPR/CCPA compliance and data encryption at rest and in transit."
    },
    {
      icon: Eye,
      title: "Actionable Insights",
      description: "Transform raw feedback into actionable business intelligence with AI-powered recommendations."
    },
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Improve customer satisfaction scores leading to higher retention rates and increased lifetime value.";
    },;
    {;
      icon: Clock,;
      title: "Time Savings",;
      description: "Automate feedback analysis and reporting, saving hours of manual work each week.";
    };
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their feedback analytics journey",
      features: [
        "Up to 10,000 feedback entries/month",
        "Basic sentiment analysis",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 100,000 feedback entries/month",
        "Advanced AI sentiment analysis",
        "Priority support",
        "Custom integrations",
        "Advanced reporting & dashboards",
        "Predictive analytics",
        "Unlimited team members",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Unlimited feedback entries",
        "Custom AI models",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting",;
        "On-premise deployment options",;
        "SLA guarantees";
      ],;
      cta: "Contact Sales",;
      popular: false;
    };
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Analyze product reviews, customer service feedback, and shopping experience to optimize conversion rates",
      icon: ShoppingCart
    },
    {
      industry: "SaaS",
      description: "Monitor user satisfaction, feature requests, and churn indicators to improve product-market fit",
      icon: Cpu
    },
    {
      industry: "Healthcare",
      description: "Track patient satisfaction, service quality feedback, and improve healthcare delivery",
      icon: Users
    },
    {
      industry: "Financial Services",
      description: "Monitor customer satisfaction with banking services, investment products, and support quality",
      icon: Shield
    },
    {
      industry: "Education",
      description: "Analyze student feedback, course satisfaction, and institutional improvement opportunities",
      icon: Award;
    },;
    {;
      industry: "Manufacturing",;
      description: "Track customer satisfaction with products, service quality, and identify improvement areas",;
      icon: Settings;
    };
  ];

  const integrations = [
    {
      name: "Survey Platforms",
      platforms: ["SurveyMonkey", "Typeform", "Google Forms", "Qualtrics"]
    },
    {
      name: "CRM Systems",
      platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"]
    },
    {
      name: "Support Platforms",
      platforms: ["Zendesk", "Intercom", "Freshdesk", "HelpScout"]
    },
    {
      name: "Social Media",
      platforms: ["Twitter", "Facebook", "Instagram", "LinkedIn"]
    },
    {
      name: "Review Platforms",;
      platforms: ["Google Reviews", "Yelp", "Trustpilot", "G2"];
    },;
    {;
      name: "Analytics Tools",;
      platforms: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"];
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Customer Feedback Analytics - Zion Tech Group"
        description="Transform customer feedback into actionable insights with our AI-powered analytics platform. Analyze sentiment, predict churn, and improve customer satisfaction."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Customer Feedback
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform customer feedback into actionable insights with advanced AI analytics. 
              Understand sentiment, predict churn, and optimize customer experience across all touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to transform how you understand and act on customer feedback.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)          => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered feedback analytics can transform your customer experience and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)          => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)          => (
              <motion.div
                key={plan.name}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                    : 'border-white/10 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries leverage our AI feedback analytics to improve customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index)          => (
              <motion.div
                key={useCase.industry}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified feedback analytics experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index)          => (
              <motion.div
                key={integration.name}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {integration.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Feedback?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered feedback analytics 
              to improve customer satisfaction and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}