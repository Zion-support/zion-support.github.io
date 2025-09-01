import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2,
  Users,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Intelligent project planning with automated task breakdown and resource allocation."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Optimize project timelines with AI-driven scheduling and dependency management."
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Identify potential project risks early with predictive analytics and AI insights."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor project progress with real-time analytics and automated reporting."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline project processes with intelligent automation and task management."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhance team productivity with AI-powered collaboration tools and communication."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Improved Project Success",
      description: "Increase project success rates with AI-powered planning and risk management."
    },
    {
      icon: Lightbulb,
      title: "Better Resource Utilization",
      description: "Optimize resource allocation and reduce waste with intelligent planning."
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Accelerate project completion with automated workflows and optimized scheduling."
    },
    {
      icon: Star,
      title: "Enhanced Collaboration",
      description: "Improve team productivity and communication with AI-powered tools."
    }
  ];

  const projectTypes = [
    {
      title: "Software Development",
      description: "Manage agile development projects with AI-powered sprint planning and tracking."
    },
    {
      title: "Construction Projects",
      description: "Oversee construction timelines, resource allocation, and risk management."
    },
    {
      title: "Marketing Campaigns",
      description: "Coordinate multi-channel marketing campaigns with automated workflow management."
    },
    {
      title: "Research Projects",
      description: "Track research milestones, data collection, and analysis progress."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Project Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-emerald-100">
              Transform your project management with AI-powered planning, scheduling, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Project Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive project management capabilities to improve success rates.
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
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Project Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered project management that improves success rates and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Type Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports various project types to meet your management needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((projectType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {projectType.title}
                </h3>
                <p className="text-gray-600">
                  {projectType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Join organizations that are already leveraging AI to improve project success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}