import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import { ;
  Users,;
  TrendingUp, ;
  Target, ;
  Zap, ;
  MessageCircle, ;
  BarChart3, ;
  Clock, ;
  Award, ;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  Search,;
  Filter,;
  Download,;
  Share2,;
  Phone,;
  Mail,;
  Calendar,;
  CheckCircle,;
  Shield,;
  FileText;
} from "lucide-react"
const AISalesCopilot = () => {;
  const features = [;
    {;
      icon: Users,title: "Lead Scoring & Qualification",description: "AI-powered lead analysis and prioritization to focus on high-value prospects."
    };
    {;
      icon: MessageCircle,title: "Intelligent Conversation AI",description: "Natural language processing for personalized customer interactions and support."
    };
    {;
      icon: TrendingUp,title: "Sales Forecasting",description: "Predictive analytics for accurate revenue forecasting and pipeline management."
    };
    {;
      icon: Target,title: "Opportunity Management",description: "Smart tracking and optimization of sales opportunities throughout the funnel."
    };
    {;
      icon: Zap,title: "Automated Follow-ups",description: "Intelligent scheduling and automated follow-up sequences for better conversion."
    };
    {;
      icon: BarChart3,title: "Performance Analytics",description: "Comprehensive insights into sales performance, trends, and optimization opportunities."
    };
  ],;

  const benefits = [;
    "Increase sales revenue by 25-40% with AI-powered insights",;
    "Reduce sales cycle time by 30-50% through automation",;
    "Improve lead conversion rates by 35-60%",;
    "Enhance customer engagement and satisfaction by 45%",;
    "Reduce manual sales tasks by 70%",;
    "Optimize pricing strategies with AI-driven recommendations"
  ],;

  const salesProcess = [;
    {;
      stage: "Lead Generation",description: "AI-powered prospecting and lead identification",icon: Search;
    };
    {;
      stage: "Qualification",description: "Intelligent lead scoring and prioritization",icon: Target;
    };
    {;
      stage: "Engagement",description: "Personalized communication and relationship building",icon: MessageCircle;
    };
    {;
      stage: "Proposal",description: "AI-generated proposals and pricing optimization",icon: FileText;
    };
    {;
      stage: "Closing",description: "Smart negotiation support and deal acceleration",icon: CheckCircle;
    };
    {;
      stage: "Retention",description: "Customer success and expansion opportunities",icon: Users;
    };
  ];
  const useCases = [;
    {;
      industry: "B2B Software",description: "Enterprise sales automation, lead qualification, and customer success management"
    },;
    {;
      industry: "Financial Services",description: "Investment advisory, loan processing, and financial product sales optimization"
    },;
    {;
      industry: "Healthcare",description: "Medical device sales, pharmaceutical marketing, and healthcare service optimization"
    },;
    {;
      industry: "Manufacturing",description: "Industrial equipment sales, supply chain optimization, and B2B relationship management"
    },;
    {;
      industry: "Real Estate",description: "Property sales automation, lead management, and client relationship optimization"
    };
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered automation, lead optimization, and intelligent sales insights. Boost revenue and efficiency."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 lg:py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-4 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6">;
              <[^>]*/>
              <span className="text-blue-300 font-medium">AI Sales Copilot</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Supercharge Your Sales with;
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">;
                {" "}AI-Powered Intelligence;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your sales process with intelligent automation, predictive analytics, and ;
              AI-driven insights that help your team close more deals and grow revenue faster.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Intelligent Sales Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI Sales Copilot combines cutting-edge artificial intelligence with proven sales ;
              methodologies to deliver unprecedented results and efficiency.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Measurable Sales Impact;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See real results with our AI Sales Copilot that delivers quantifiable improvements ;
              across all aspects of your sales operations.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</[^>]*>
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <motion.div
                    key={index};
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.6, delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-8 rounded-xl border border-blue-400/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Industry-leading AI sales algorithms</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Enterprise-grade security & privacy</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Global sales methodology support</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">24/7 sales support & training</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Proven sales transformation track record</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Sales Process Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              End-to-End Sales Process;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI Sales Copilot optimizes every stage of your sales funnel, from initial ;
              lead generation to customer retention and expansion.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {salesProcess.map((stage, index) => (;
              <motion.div
                key={stage.stage};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{stage.stage}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{stage.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI Sales Copilot is designed to work across industries, providing tailored ;
              sales optimization solutions for your specific business needs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={useCase.industry};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Sales?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join hundreds of sales teams that have already revolutionized their operations ;
              with our AI-powered sales copilot.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AISalesCopilot;