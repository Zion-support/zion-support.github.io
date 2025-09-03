<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Brain,; BarChart3,; Database,; Zap,; Shield,; Users,; CheckCircle,; ArrowRight,; Star,; Clock,; TrendingUp,; Lock,; Network,; Cpu,; Server,; Cloud,; Search,; PieChart,; LineChart,; Activity,; Eye,; Target,; Lightbulb;  } from 'lucide-react'; import { SEO } from '@/components/SEO'; ; const AIDataAnalyticsPlatform: React.FC = () => {; const features = [; {; icon: Brain,; title: 'AI-Powered Insights',; description: 'Advanced machine learning algorithms that automatically discover patterns and generate actionable insights',; benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling', 'Natural language generation']; },; {; icon: BarChart3,; title: 'Advanced Visualizations',; description: 'Interactive dashboards and charts that make complex data easy to understand and act upon',; benefits: ['Custom dashboards', 'Real-time updates', 'Interactive charts', 'Mobile responsive']; },; {; icon: Database,; title: 'Multi-Source Integration',; description: 'Connect and analyze data from 100+ sources including databases, APIs, and cloud services',; benefits: ['Data connectors', 'ETL automation', 'Real-time sync', 'Data quality checks']; },; {; icon: Search,; title: 'Natural Language Queries',; description: 'Ask questions in plain English and get instant answers from your data',; benefits: ['Voice queries', 'Semantic search', 'Query suggestions', 'Auto-completion']; },; {; icon: Shield,; title: 'Enterprise Security',; description: 'Bank-level security with role-based access control and comprehensive audit trails',; benefits: ['Data encryption', 'Access controls', 'Compliance reporting', 'Audit logging']; },; {; icon: Zap,; title: 'Real-time Processing',; description: 'Process and analyze data in real-time for instant decision-making capabilities',; benefits: ['Stream processing', 'Live dashboards', 'Instant alerts', 'Real-time APIs']; }; ]; ; const pricingTiers = [; {; name: 'Starter',; price: '$1,200',; period: '/month',; description: 'Perfect for small businesses starting their data analytics journey',; features: [; 'Up to 5 data sources',; 'Basic AI insights',; 'Standard visualizations',; 'Email support',; 'Basic reporting',; 'Up to 10 users'; ],; cta: 'Get Started',; popular: false; },; {; name: 'Professional',; price: '$4,500',; period: '/month',; description: 'Ideal for growing companies with complex analytics needs',; features: [; 'Up to 25 data sources',; 'Advanced AI insights',; 'Custom dashboards',; 'Priority support',; 'Advanced reporting',; 'Up to 50 users',; 'API access',; 'Custom integrations'; ],; cta: 'Start Free Trial',; popular: true; },; {; name: 'Enterprise',; price: '$8,500',; period: '/month',; description: 'For large organizations requiring maximum analytics capabilities',; features: [; 'Unlimited data sources',; 'Full AI insights suite',; 'White-label dashboards',; '24/7 dedicated support',; 'Custom AI models',; 'Unlimited users',; 'On-premise deployment',; 'Custom development',; 'Dedicated success manager'; ],; cta: 'Contact Sales',; popular: false; }; ]; ; const benefits = [; {; icon: TrendingUp,; title: '25% Revenue Increase',; description: 'Average revenue improvement through data-driven decision making'; },; {; icon: Clock,; title: '20+ Hours Saved Per Week',; description: 'Time savings for each analyst using the platform'; },; {; icon: Target,; title: 'Improved Decision Making',; description: 'Make faster, more accurate decisions with real-time insights'; },; {; icon: Lightbulb,; title: 'New Business Opportunities',; description: 'Discover hidden patterns and uncover new revenue streams'; }; ]; ; const useCases = [; {; industry: 'E-commerce',; applications: ['Customer behavior analysis', 'Inventory optimization', 'Price optimization', 'Marketing ROI analysis']; },; {; industry: 'Healthcare',; applications: ['Patient outcome analysis', 'Resource optimization', 'Predictive diagnostics', 'Cost analysis']; },; {; industry: 'Financial Services',; applications: ['Risk assessment', 'Fraud detection', 'Customer segmentation', 'Portfolio optimization']; },; {; industry: 'Manufacturing',; applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production efficiency']; }; ]; ; const dataSources = [; 'Databases(SQL, NoSQL)', 'Cloud Services(AWS, Azure, GCP)', 'APIs & Web Services', 'File Systems',; 'Social Media Platforms', 'IoT Devices', 'Mobile Apps', 'Web Analytics', 'CRM Systems', 'ERP Systems',; 'Marketing Platforms', 'Sales Tools', 'Customer Support Systems', 'Financial Systems'; ]; ; return(; <>; <SEO; title="AI Data Analytics Platform | Zion Tech Group";"";" description="Transform your data into actionable insights with our AI-powered analytics platform.25% revenue increase, 20+ hours saved per week.Enterprise security.";"";" keywords="AI analytics, data analytics, business intelligence, data visualization, AI insights, predictive analytics, data platform";"";" ogImage="/images/ai-data-analytics-platform.jpg";"";" canonicalUrl="/services/ai-data-analytics-platform";";" />;";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;"";" {}";"";" <section className="relative pt-20 pb-16 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />";"";" <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />;";"";" <div className="relative z-10 container mx-auto px-4">;"";" <motion.div ";"";" className="text-center max-w-4xl mx-auto";" initial={{ opacity: 0, y: 30 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">";"";" <Brain className="w-5 h-5 text-cyan-400" />";"";" <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>;";" </div>;";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">;"";" AI Data Analytics";"";" <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;" Platform;";" </span>;";" </h1>;";"";" <p className="text-xl text-gray-300 mb-8 leading-relaxed">;" Transform your data into actionable insights with our AI-powered analytics platform.;";" Achieve 25% revenue increase and save 20+ hours per week with intelligent data analysis.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <motion.button";"";" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Start Free Trial;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }}; >; Schedule Demo; </motion.button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Powerful Features for Data Analytics;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our platform combines cutting-edge AI with enterprise-grade analytics to deliver;" the most comprehensive data insights solution in the market.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;";" {features.map((feature, index) => (;";" <motion.div;"";" key={feature.title}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }};" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};";" whileHover={{ y: -5, scale: 1.02 }};"";" >";"";" <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;";" </div>;";"";" <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>";"";" <p className="text-gray-300 mb-4">{feature.description}</p>;";"";" <ul className="space-y-2">;"";" {feature.benefits.map((benefit, benefitIndex) => (";"";" <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">";"";" <CheckCircle className="w-4 h-4 text-cyan-400" />; <span>{benefit}</span>; </li>; ))}; </ul>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Connect 100+ Data Sources;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our platform seamlessly integrates with all your existing data sources,;" giving you a unified view of your business.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">;";" {dataSources.map((source, index) => (;";" <motion.div;"";" key={index}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-all duration-300"; initial={{ opacity: 0, scale: 0.8 }}; whileInView={{ opacity: 1, scale: 1 }};" transition={{ duration: 0.4, delay: index * 0.05 }};";" viewport={{ once: true   }};";" whileHover={{ scale: 1.05   }};"";" >";"";" <Database className="w-8 h-8 text-cyan-400 mx-auto mb-2" />";"";" <p className="text-sm text-gray-300">{source}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Proven Results & Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">;" Join thousands of companies that have transformed their business with data-driven insights.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;";" {benefits.map((benefit, index) => (;";" <motion.div;"";" key={benefit.title}";"";" className="text-center"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};"";" >";"";" <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";"";" <benefit.icon className="w-8 h-8 text-white" />;";" </div>;";"";" <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>";"";" <p className="text-gray-300">{benefit.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Flexible Pricing Plans;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">;" Choose the plan that best fits your analytics needs and scale as you grow.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">; {pricingTiers.map((tier, index) => (; <motion.div; key={tier.name}; className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${; tier.popular; ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent'; : 'border-gray-700/50'; }`}; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }};" viewport={{ once: true   }};";" whileHover={{ y: -5, scale: 1.02 }};";" >;"";" {tier.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>";"";" <div className="flex items-baseline justify-center mb-2">";"";" <span className="text-4xl font-bold text-white">{tier.price}</span>";"";" <span className="text-gray-400 ml-1">{tier.period}</span>;"";" </div>";"";" <p className="text-gray-300">{tier.description}</p>;";" </div>;";"";" <ul className="space-y-3 mb-8">;"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center space-x-3">";"";" <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>; </li>; ))}; </ul>; <motion.button; className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${; tier.popular; ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'; : 'bg-gray-700 text-white hover:bg-gray-600'; }`}; whileHover={{ scale: 1.02   }}; whileTap={{ scale: 0.98   }}; >; {tier.cta}; </motion.button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Applications;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our platform is designed to work across all industries, with specialized solutions;" for your specific business needs.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;";" {useCases.map((useCase, index) => (;";" <motion.div;"";" key={useCase.industry}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};"";" >";"";" <h3 className="text-xl font-semibold text-white mb-4 text-center">;";" {useCase.industry};";" </h3>;";"";" <ul className="space-y-2">;"";" {useCase.applications.map((application, appIndex) => (";"";" <li key={appIndex} className="flex items-center space-x-2 text-sm text-gray-300">";"";" <ArrowRight className="w-4 h-4 text-cyan-400" />; <span>{application}</span>; </li>; ))}; </ul>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center max-w-4xl mx-auto"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-6">;";" Ready to Unlock Your Data's Potential?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;" Join the data revolution and start seeing insights in as little as 24 hours.;";" Our team of experts will guide you through every step of the process.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <motion.button";"";" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Start Free Trial;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Schedule Demo;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-gray-500/30 text-gray-300 font-semibold rounded-lg hover:bg-gray-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }}; >;" Contact Sales;";" </motion.button>;";" </div>;";"";" <p className="text-sm text-gray-400 mt-6">; No credit card required • 30-day free trial • Full support included; </p>; </motion.div>; </div>; </section>; </div>; </>;" );";" };";" ;"";" export default AIDataAnalyticsPlatform;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiDataAnalyticsPlatform() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Data Analytics Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Data Analytics Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai data analytics platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Data Analytics Platform Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai data analytics platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Data Analytics Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai data analytics platform platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
