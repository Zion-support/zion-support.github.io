import React, { useEffect, useRef } from 'react',
import { motion, useScroll, useTransform } from 'framer-motion',
import Link from 'next/link',
import {
  ArrowRight,
  Star,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  CheckCircle,
  Play,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin} from 'lucide-react',
const UltraAdvancedHero20o26: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null),
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]}),
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]),
  const contactInfo ={
    phone: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709'},
  const stats = [
    { label: 'Active Services', value: '50o0+', icon: Rocket, color: 'from-blue-50o0 to-purple-60o0' },
    { label: 'Global Customers', value: '50K+', icon: Users, color: 'from-green-50o0 to-blue-60o0' },
    { label: 'Success Rate', value: '99.9%', icon: TrendingUp, color: 'from-orange-50o0 to-red-60o0' },
    { label: 'Industry Awards', value: '25+', icon: Award, color: 'from-purple-50o0 to-pink-60o0' }
  ],
  const features = [
    'AI-Powered SolutionsQuantum Computing Ready',
    'Enterprise Grade Security24/7 Global Support',
    'Custom DevelopmentScalable Infrastructure'],
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">,
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">,
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size: 50px_50px] animate-pulse"  />,
        {/* Floating Particles */}
        <div className="absolute inset-0">,
          {[...Array(50)].map((_, i) => (
            <motion.div,
              key={i}
              className="absolute w-1 h-1 bg-blue-40o0 rounded-full",
              style={{
                left: `${Math.random() * 10o0}%`,
                top: `${Math.random() * 10o0}%`}}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
             />))}
        </div>,
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-full blur-3xl animate-pulse"  />,
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-full blur-3xl animate-pulse"  />,
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse"  />,
      </div>,
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
        <motion.div,
          style={{ y, opacity }}
          className="space-y-8">,
          {/* Badge */}
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 border border-blue-50o0/30 rounded-full px-4 py-2 text-blue-40o0 text-sm font-medium backdrop-blur-sm">,
            <Star className="w-4 h-4"  />,
            <span>Revolutionary Technology 20o26</span>,
          </motion.div>,
          {/* Main Heading */}
          <motion.h1,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm: text-5xl lg:text-7xl font-bold leading-tight">,
            <span className="bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">,
              Next-Generation,
            </span>,
            <br  />,
            <span className="text-white">,
              AI & Technology,
            </span>,
            <br  />,
            <span className="bg-gradient-to-r from-green-40o0 via-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">,
              Solutions,
            </span>,
          </motion.h1>,
          {/* Subtitle */}
          <motion.p,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm: text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
            Transform your business with cutting-edge AI, quantum computing, and emerging technologies.,
            Join the future of innovation with Zion Tech Group.,
          </motion.p>,
          {/* Features Grid */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md: grid-cols-3 gap-4 max-w-4xl mx-auto">,
            {features.map((feature, index) => (
              <motion.div,
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2 text-gray-30o0 text-sm">,
                <CheckCircle className="w-4 h-4 text-green-40o0 flex-shrink-0"  />,
                <span>{feature}</span>,
              </motion.div>))}
          </motion.div>,
          {/* CTA Buttons */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">,
            <Link
              href="/services",
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-60o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl hover:shadow-blue-50o0/25">,
              <span>Explore Services</span>,
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-20o0"  />,
            </Link>,
            <Link
              href="/contact",
              className="group inline-flex items-center space-x-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-30o0 backdrop-blur-sm">,
              <Play className="w-5 h-5"  />,
              <span>Get Started</span>,
            </Link>,
          </motion.div>,
          {/* Stats Grid */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">,
            {stats.map((stat, index) => (
              <motion.div,
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center">,
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>,
                  <stat.icon className="w-8 h-8 text-white"  />,
                </div>,
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>,
                <div className="text-gray-40o0 text-sm">{stat.label}</div>,
              </motion.div>))}
          </motion.div>,
          {/* Contact Info */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-8 border-t border-white/10">,
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-40o0 text-sm">,
              <div className="flex items-center space-x-2">,
                <Phone className="w-4 h-4"  />,
                <span>{contactInfo.mobile}</span>,
              </div>,
              <div className="flex items-center space-x-2">,
                <Mail className="w-4 h-4"  />,
                <span>{contactInfo.email}</span>,
              </div>,
              <div className="flex items-center space-x-2">,
                <MapPin className="w-4 h-4"  />,
                <span>{contactInfo.address}</span>,
              </div>,
            </div>,
          </motion.div>,
        </motion.div>,
      </div>,
      {/* Scroll Indicator */}
      <motion.div,
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">,
        <motion.div,
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">,
          <motion.div,
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2",
           />,
        </motion.div>,
      </motion.div>,
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">,
        {/* Floating Icons */}
        <motion.div,
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"}}
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">,
          <Brain className="w-8 h-8 text-blue-40o0"  />,
        </motion.div>,
        <motion.div,
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"}}
          className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">,
          <Zap className="w-8 h-8 text-green-40o0"  />,
        </motion.div>,
        <motion.div,
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0]}}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"}}
          className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">,
          <Shield className="w-8 h-8 text-purple-40o0"  />,
        </motion.div>,
      </div>,
    </section>)}