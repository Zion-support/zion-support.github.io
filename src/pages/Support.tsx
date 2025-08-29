import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  BookOpen, 
  Video, 
  FileText, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Star,
  Award,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Eye,
  Brain,
  Shield,
  Lock,
  Globe,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  Building,
  CheckCircle2,
  ArrowUpRight,
  MailIcon,
  MapPin,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars,
  Camera,
  Video2,
  Film,
  Tv,
  Radio,
  Speaker,
  Headphones,
  Mic,
  Phone2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Clock2,
  Calendar,
  Calendar2,
  User,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  Code
} from 'lucide-react';

export default function Support() {
  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      responseTime: '1-2 minutes',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      responseTime: 'Immediate',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed assistance via email',
      responseTime: '2-4 hours',
      availability: '24/7',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and visual assistance',
      responseTime: '15-30 minutes',
      availability: 'Business Hours',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const supportTopics = [
    {
      title: 'Technical Issues',
      description: 'Resolve software, hardware, and integration problems',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Account Management',
      description: 'Help with billing, access, and account settings',
      icon: User,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API & Integration',
      description: 'Support for developers and system integration',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Training & Onboarding',
      description: 'Get started guides and training resources',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const resources = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      icon: BookOpen,
      href: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      href: '/tutorials',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions and answers',
      icon: HelpCircle,
      href: '/faq',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      href: '/community',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'support@ziontechgroup.com',
    emergency: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    businessHours: 'Mon-Fri: 9AM-6PM EST',
    responseTime: 'Urgent: 1 hour, Normal: 4 hours'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Support Center
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We're Here to
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Help You Succeed
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get the support you need, when you need it. Our expert team is available 
              24/7 to help you resolve issues, answer questions, and maximize your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Support Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Browse FAQ
                <HelpCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're available 
              around the clock to ensure you never face challenges alone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.color} w-fit mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {channel.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>Response: {channel.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>Available: {channel.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Topics Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Can We Help You With?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From technical issues to account management, our support team 
              covers all aspects of your experience with our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${topic.color} w-fit mb-6`}>
                  <topic.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive knowledge base, 
              tutorials, and community resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70 text-center"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${resource.color} w-fit mx-auto mb-4`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to get help? Contact us through any of these channels 
              and we'll respond quickly to assist you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Phone Support</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300 text-lg font-medium block mb-2">
                {contactInfo.phone}
              </a>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Support</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-green-400 hover:text-green-300 text-lg font-medium block mb-2">
                {contactInfo.email}
              </a>
              <p className="text-gray-400 text-sm">Response within 4 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <p className="text-purple-400 text-lg font-medium mb-2">
                {contactInfo.businessHours}
              </p>
              <p className="text-gray-400 text-sm">EST Timezone</p>
            </motion.div>
          </div>

          {/* Emergency Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              For critical issues requiring immediate attention, call our emergency support line
            </p>
            <a
              href={`tel:${contactInfo.emergency}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              <Phone className="w-5 h-5" />
              Emergency: {contactInfo.emergency}
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our support team is ready to assist you with any questions or issues. 
              Don't hesitate to reach out - we're here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Browse FAQ
                <HelpCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
