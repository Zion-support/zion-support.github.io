import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cpu as CpuIcon,
  Globe,
  Rocket as RocketIcon,
  Shield,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
const UltimateContentShowcase2026 = () => {
  const contentFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Content Marketing",
      description: "Revolutionary AI-driven content strategies delivering 500% engagement boosts and unprecedented ROI.",
      metrics: "500% Engagement Increase",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Unbreakable digital fortresses using quantum encryption and AI-powered threat detection.",
      metrics: "99.99% Security Effectiveness",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Autonomous Business Intelligence",
      description: "Self-optimizing analytics that automatically analyze and optimize business performance.",
      metrics: "400% Decision-Making Speed",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CpuIcon,
      title: "Synthetic Intelligence",
      description: "Beyond human cognitive limits with superhuman intelligence capabilities.",
      metrics: "1000% Problem-Solving Improvement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Metaverse Business Operations",
      description: "Complete virtual enterprise operations with immersive collaboration environments.",
      metrics: "500% Collaboration Improvement",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: RocketIcon,
      title: "Revolutionary Tech Solutions",
      description: "Cutting-edge technology solutions that transform business operations and outcomes.",
      metrics: "600% Innovation Velocity",
      color: "from-pink-500 to-rose-500"
    }
  ];
  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      improvement: "500% ROI Increase",
      description: "Implemented AI-powered content marketing and achieved unprecedented engagement rates."
    },
    {
      company: "SecureBank International",
      industry: "Finance",
      improvement: "99.99% Security Uptime",
      description: "Deployed quantum cybersecurity solutions with zero security incidents."
    },
    {
      company: "DataFlow Analytics",
      industry: "Analytics",
      improvement: "400% Decision Speed",
      description: "Autonomous business intelligence transformed their decision-making processes."
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Content
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Showcase 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover the most revolutionary content and technology solutions that are transforming businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">500% Engagement Boost</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">1000% ROI Increase</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">99.99% Security</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Explore Content
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Content Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Content Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of cutting-edge content and technology solutions designed to transform your business
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-400">{feature.metrics}</span>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are achieving unprecedented results with our solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-gray-400">{story.industry}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{story.improvement}</span>
                </div>
                <p className="text-gray-300">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already achieving unprecedented results with our revolutionary content and technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
                <RocketIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Explore All Content
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default UltimateContentShowcase2026;