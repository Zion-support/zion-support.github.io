
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Star,
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
  Phone,
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
  UserVoice2
} from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      icon: BookOpen,
      title: 'AI Fundamentals',
      description: 'Master the basics of artificial intelligence and machine learning',
      duration: '8 weeks',
      level: 'Beginner',
      certification: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Advanced AI Development',
      description: 'Build sophisticated AI models and applications',
      duration: '12 weeks',
      level: 'Advanced',
      certification: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Training',
      description: 'Learn to protect systems and data from cyber threats',
      duration: '10 weeks',
      level: 'Intermediate',
      certification: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Master cloud infrastructure and deployment automation',
      duration: '10 weeks',
      level: 'Intermediate',
      certification: true,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      duration: '8 weeks',
      level: 'Intermediate',
      certification: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'IoT & Edge Computing',
      description: 'Build connected devices and edge computing solutions',
      duration: '12 weeks',
      level: 'Advanced',
      certification: true,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const learningFormats = [
    {
      title: 'Online Courses',
      description: 'Self-paced learning with interactive content and assessments',
      icon: Video,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Workshops',
      description: 'Real-time interactive sessions with expert instructors',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hands-on Labs',
      description: 'Practical exercises in real-world environments',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Certification Programs',
      description: 'Industry-recognized credentials to advance your career',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Accelerate your career with in-demand skills',
    'Learn from industry experts and practitioners',
    'Get hands-on experience with real projects',
    'Earn industry-recognized certifications',
    'Join a community of tech professionals',
    'Access to cutting-edge tools and technologies',
    'Flexible learning schedules and formats',
    'Lifetime access to course materials'
  ];

  const upcomingEvents = [
    {
      title: 'AI Fundamentals Workshop',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 5:00 PM EST',
      instructor: 'Dr. Sarah Chen',
      seats: '25 available',
      price: '$1,299'
    },
    {
      title: 'Cybersecurity Bootcamp',
      date: 'April 5-9, 2025',
      time: '9:00 AM - 5:00 PM EST',
      instructor: 'Mike Rodriguez',
      seats: '20 available',
      price: '$2,499'
    },
    {
      title: 'Cloud Architecture Masterclass',
      date: 'May 10-12, 2025',
      time: '9:00 AM - 5:00 PM EST',
      instructor: 'Lisa Thompson',
      seats: '30 available',
      price: '$1,799'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Training & Certification
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Future of
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                {' '}Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your career with our comprehensive training programs in AI, 
              cybersecurity, cloud computing, and more. Learn from industry experts 
              and earn valuable certifications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Free Demo
                <Video className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
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
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our wide range of training programs designed to meet 
              your skill level and career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color} w-fit mb-4`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{program.level}</span>
                  </div>
                  {program.certification && (
                    <div className="flex items-center gap-2 text-purple-400">
                      <Award className="w-4 h-4" />
                      <span>Certification Included</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats Section */}
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
              Multiple Learning Formats
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the learning format that works best for your schedule and 
              preferred learning style.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${format.color} w-fit mb-6`}>
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {format.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {format.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the advantages of learning from industry leaders with 
              proven methodologies and cutting-edge content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              Upcoming Training Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reserve your spot in our upcoming workshops and bootcamps. 
              Limited seats available for each session.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{event.instructor}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-green-400 font-medium">{event.seats}</span>
                  <span className="text-lg font-bold text-purple-400">{event.price}</span>
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Reserve Seat
                </Link>
              </motion.div>
            ))}
          </div>
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
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join thousands of professionals who have transformed their careers 
              with our industry-leading training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
