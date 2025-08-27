import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Brain,
  Sun,
  Wind,
  Battery,
  Recycle,
  TreePine,
  Droplets,
  Lightbulb
} from 'lucide-react';

const GreenIT = () => {
  const features = [
    {
      icon: Leaf,
      title: "Energy-Efficient Hardware",
      description: "Modern processors and storage solutions that deliver performance while consuming less power"
    },
    {
      icon: Zap,
      title: "Smart Power Management",
      description: "Intelligent systems that optimize energy usage based on workload demands"
    },
    {
      icon: Cloud,
      title: "Cloud Optimization",
      description: "Efficient cloud infrastructure that reduces on-premises energy consumption"
    },
    {
      icon: Recycle,
      title: "Sustainable Practices",
      description: "Green computing methodologies and best practices for your organization"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Lower energy bills and operational costs through efficient technology"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Meet environmental regulations and sustainability standards"
    },
    {
      icon: Users,
      title: "Brand Value",
      description: "Enhance your company's reputation as an environmentally conscious organization"
    },
    {
      icon: Globe,
      title: "Future-Proofing",
      description: "Prepare for increasing environmental regulations and market demands"
    }
  ];

  const solutions = [
    {
      icon: Cpu,
      title: "Hardware Assessment",
      description: "Evaluate current equipment for energy efficiency and upgrade opportunities"
    },
    {
      icon: Database,
      title: "Data Center Optimization",
      description: "Optimize cooling, power distribution, and server utilization"
    },
    {
      icon: Network,
      title: "Network Efficiency",
      description: "Implement energy-efficient networking equipment and protocols"
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Automate power management and resource allocation"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6"
            >
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Technology Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green IT
              <span className="block bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Transform your technology infrastructure with eco-friendly solutions that reduce environmental impact while maintaining performance and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Green Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/20 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "40%", label: "Energy Reduction", icon: Zap },
              { number: "60%", label: "Cost Savings", icon: TrendingUp },
              { number: "85%", label: "Carbon Footprint", icon: Leaf },
              { number: "100%", label: "Compliance", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Green IT</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our sustainable technology solutions deliver exceptional performance while protecting the environment and reducing costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business & Environmental <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Green IT solutions provide measurable benefits for both your bottom line and the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Green IT Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your technology infrastructure sustainably.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Go Green</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's build a sustainable future together with green technology solutions
            </p>

            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-green-400/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Sustainability Assessment</h3>
                  <p className="text-zion-slate-light mb-4">
                    Evaluate your current environmental impact
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                  >
                    Start Assessment
                  </Link>
                </div>

                <div className="text-center">
                  <Globe className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Green Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Discuss sustainable technology strategies
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-green-400/20 text-green-400 font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GreenIT;
