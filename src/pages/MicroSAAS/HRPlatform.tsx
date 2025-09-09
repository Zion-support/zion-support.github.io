import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  Calendar, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Network,
  Activity,
  Layers,
  PieChart,
  Target,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

const HRPlatform: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive employee database and profile management.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: FileText,
      title: 'HR Documentation',
      description: 'Digital document management and compliance tracking.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Calendar,
      title: 'Time & Attendance',
      description: 'Track work hours, leave management, and scheduling.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Payroll Automation',
      description: 'Automated payroll processing and tax calculations.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const capabilities = [
    {
      title: 'Recruitment & Onboarding',
      description: 'Streamline hiring process and employee onboarding.',
      icon: Users,
      features: ['Job posting', 'Applicant tracking', 'Interview scheduling', 'Onboarding workflows']
    },
    {
      title: 'Performance Management',
      description: 'Track employee performance and conduct reviews.',
      icon: BarChart3,
      features: ['Goal setting', 'Performance reviews', '360 feedback', 'Career development']
    },
    {
      title: 'Benefits Administration',
      description: 'Manage employee benefits and insurance plans.',
      icon: Shield,
      features: ['Benefits enrollment', 'Insurance management', 'Retirement plans', 'Wellness programs']
    },
    {
      title: 'Compliance & Reporting',
      description: 'Ensure HR compliance and generate reports.',
      icon: FileText,
      features: ['Regulatory compliance', 'Audit trails', 'Custom reports', 'Data analytics']
    }
  ];

  const benefits = [
    {
      title: 'Improved Efficiency',
      description: 'Automate HR processes and reduce manual work.',
      icon: Zap,
      metric: '80% Faster'
    },
    {
      title: 'Better Compliance',
      description: 'Ensure compliance with labor laws and regulations.',
      icon: Shield,
      metric: '100% Compliant'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce HR administrative costs and errors.',
      icon: Target,
      metric: '30% Cost Savings'
    },
    {
      title: 'Employee Satisfaction',
      description: 'Improve employee experience and engagement.',
      icon: Star,
      metric: 'Higher Satisfaction'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director, TechCorp',
      content: 'The HR platform streamlined our entire hiring process and improved employee management.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'People Operations, StartupXYZ',
      content: 'Automated payroll and time tracking saved us hours of manual work every month.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'HR Manager, Manufacturing Inc',
      content: 'Compliance tracking and reporting tools helped us maintain regulatory standards.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Users className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            HR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your human resources operations with comprehensive HR management tools. 
            Automate processes, ensure compliance, and improve employee experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${feature.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <capability.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose HR Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Customer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our platform to streamline HR processes, 
              ensure compliance, and improve employee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Contact Sales
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HRPlatform;