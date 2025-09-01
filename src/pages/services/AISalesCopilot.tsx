import React from 'react';
import { Link } from 'react-router-dom';
import {

  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  Award, 
  Star,
  Globe,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Shield,
  FileText,
  ShoppingCart,
  Home,
  DollarSign,
  Heart'
} from 'lucide-react';
import { SEO } from '@/components/SEO';
;
const AISalesCopilot = (...args: unknown[]): unknown => {
  const features = [
    {

      icon: Users,
      title: "Lead Scoring & Qualification","
      description: "AI-powered lead analysis and prioritization to focus on high-value prospects."
    },
    {

      icon: MessageCircle,"
      title: "Intelligent Conversation AI","
      description: "Natural language processing for personalized customer interactions and support."
    },
    {

      icon: TrendingUp,"
      title: "Predictive Analytics","
      description: "Forecast sales outcomes and identify high-probability opportunities with AI insights."
    },
    {

      icon: Target,"
      title: "Automated Follow-ups","
      description: "Smart email sequences and follow-up scheduling based on prospect behavior patterns."
    },
    {

      icon: BarChart3,"
      title: "Performance Insights","
      description: "Real-time sales metrics and performance optimization recommendations."
    },
    {

      icon: Zap,"
      title: "Revenue Optimization","
      description: "Data-driven strategies to maximize deal size and improve win rates."
    }
  ];

  const benefits = [
    {

      icon: TrendingUp,"
      title: "Increased Sales Productivity","
      description: "Automate repetitive tasks and focus on high-value sales activities."
    },
    {

      icon: Target,"
      title: "Better Lead Conversion","
      description: "Improve conversion rates with AI-powered lead scoring and qualification."
    },
    {

      icon: Users,"
      title: "Enhanced Customer Experience","
      description: "Provide personalized interactions and faster response times to prospects."
    },
    {

      icon: BarChart3,"
      title: "Data-Driven Decisions","
      description: "Make informed sales decisions based on AI analytics and insights."
    },
    {

      icon: Clock,"
      title: "Time Optimization","
      description: "Reduce manual work and focus on building relationships and closing deals."
    },
    {

      icon: Award,"
      title: "Competitive Advantage","
      description: "Stay ahead of competitors with AI-powered sales intelligence and automation."
    }
  ];

  const salesProcess = [
    {
"
      stage: "Lead Generation","
      description: "AI-powered prospecting and lead identification from multiple sources",
      icon: Search
    },
    {
"
      stage: "Qualification","
      description: "Automated lead scoring and prioritization using machine learning",
      icon: Target
    },
    {
"
      stage: "Engagement","
      description: "Intelligent conversation AI and personalized communication",
      icon: MessageCircle
    },
    {
"
      stage: "Opportunity Management","
      description: "Track and manage sales opportunities with predictive analytics",
      icon: TrendingUp
    },
    {
"
      stage: "Closing","
      description: "AI-assisted deal closing with optimized pricing and negotiation",
      icon: CheckCircle
    },
    {
"
      stage: "Retention","
      description: "Customer success monitoring and expansion opportunity identification",
      icon: Users
    }
  ];

  const useCases = [
    {
"
      industry: "B2B Sales","
      description: "Enterprise sales teams and complex deal management",
      icon: Users
    },
    {
"
      industry: "E-commerce","
      description: "Online retail sales and customer relationship management",
      icon: ShoppingCart
    },
    {
"
      industry: "SaaS","
      description: "Software subscription sales and customer lifecycle management",
      icon: Cpu
    },
    {
"
      industry: "Real Estate","
      description: "Property sales and client relationship management",
      icon: Home
    },
    {
"
      industry: "Financial Services","
      description: "Investment and insurance sales with compliance support",
      icon: DollarSign
    },
    {
"
      industry: "Healthcare","
      description: "Medical device and service sales with regulatory compliance",
      icon: Heart
    }
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered automation. Increase productivity, improve conversions, and drive revenue growth."
      />

      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20"></div>
        "
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">"
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Sales
            </div>"
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Sales"
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {' '}Copilot
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your sales process with intelligent AI automation that qualifies leads, 
              personalizes interactions, and drives revenue growth through data-driven insights.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>"
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">"
                <Download className="w-5 h-5 mr-2 inline" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Copilot provides comprehensive tools to automate and optimize 
              your sales process for maximum efficiency and results.
            </p>
          </motion.div>

      {/* Features */}"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of AI-powered sales automation that drives 
              efficiency and improves your sales performance.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Process Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sales Process
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive sales process ensures systematic optimization 
              and continuous improvement of your sales performance.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map(stage: unknown, index: unknown (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {stage.stage}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI Sales Copilot 
              to improve sales performance and drive revenue growth.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Sales?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered sales automation to improve 
              performance and drive revenue growth.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
              </button>"
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">"
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
;
export { AISalesCopilot };
export default AISalesCopilot;

'"