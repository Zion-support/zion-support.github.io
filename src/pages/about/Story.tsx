import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Heart,
  Shield,
  Zap,
  Star,
  Building2,
  Rocket,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Story = () => {
  const milestones = [
    {
      year: '2018',
      title: 'The Vision is Born',
      description: 'Sarah Johnson, a former AI researcher at Google, envisions a world where AI technology is accessible to businesses of all sizes, not just tech giants.',
      achievement: 'Company Founded',
      impact: 'Established the foundation for democratizing AI technology',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2019',
      title: 'First Breakthrough',
      description: 'Launched our flagship AI content generation platform, helping small businesses create professional content at scale.',
      achievement: 'First AI Solution Launched',
      impact: '100+ businesses onboarded in the first year',
      icon: Rocket,
      color: 'from-red-500 to-pink-500'
    },
    {
      year: '2020',
      title: 'Global Expansion Begins',
      description: 'Reached our first major milestone with 100 satisfied clients and expanded operations to Europe.',
      achievement: '100th Client Milestone',
      impact: 'Expanded to 5 European countries',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Secured $10M in funding from leading venture capital firms to accelerate product development and team expansion.',
      achievement: 'Series A Funding Round',
      impact: 'Team grew from 25 to 75 members',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2022',
      title: 'AI Innovation Leader',
      description: 'Recognized as the most innovative AI company in the industry, with breakthrough solutions in healthcare and cybersecurity.',
      achievement: 'AI Innovation Award',
      impact: '500+ clients across 25 countries',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'Quantum Leap Forward',
      description: 'Launched our revolutionary AI-Quantum Hybrid Platform, positioning us at the forefront of next-generation computing.',
      achievement: 'Quantum AI Platform Launch',
      impact: 'Industry-first hybrid AI-Quantum solution',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2024',
      title: 'Future Unlocked',
      description: 'Continuing to push boundaries with advanced AI solutions, serving over 1000 businesses worldwide.',
      achievement: '1000+ Global Clients',
      impact: 'Leading the AI revolution in business technology',
      icon: Star,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering results',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on transparency and reliability',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const teamGrowth = [
    { year: '2018', size: 5, location: 'San Francisco' },
    { year: '2019', size: 15, location: 'San Francisco + Remote' },
    { year: '2020', size: 25, location: 'US + Europe' },
    { year: '2021', size: 75, location: 'Global Team' },
    { year: '2022', size: 120, location: '12 Countries' },
    { year: '2023', size: 150, location: '25 Countries' },
    { year: '2024', size: 200, location: 'Global Presence' }
  ];

  const achievements = [
    {
      title: 'AI Innovation Award 2023',
      description: 'Recognized as the most innovative AI company in the industry',
      year: '2023',
      icon: Award
    },
    {
      title: 'Forbes 30 Under 30',
      description: 'CEO Sarah Johnson named to Forbes 30 Under 30 list',
      year: '2022',
      icon: Star
    },
    {
      title: 'Best AI Platform',
      description: 'Voted best AI platform by TechCrunch readers',
      year: '2022',
      icon: CheckCircle
    },
    {
      title: 'Global Expansion',
      description: 'Successfully expanded to 25+ countries',
      year: '2021',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Link
                to="/about"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to About
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}Story
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                From a bold vision in 2018 to a global AI technology leader in 2024. 
                Discover the journey that transformed Zion Tech Group into the company it is today.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A story of innovation, perseverance, and the unwavering belief that AI should be 
                accessible to every business, regardless of size or industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">The Beginning</h2>
              <p className="text-lg text-gray-300 mb-6">
                In 2018, Sarah Johnson was working as an AI researcher at Google, developing 
                cutting-edge machine learning models. While the technology was revolutionary, 
                she noticed a troubling trend: only the largest corporations had access to 
                these powerful AI tools.
              </p>
              <p className="text-gray-400 mb-6">
                Small businesses, startups, and even mid-sized companies were being left behind 
                in the AI revolution. The technology that could transform their operations, 
                improve customer service, and drive growth was out of reach due to cost, 
                complexity, and lack of expertise.
              </p>
              <p className="text-gray-400">
                That's when Sarah decided to take action. She left her comfortable position 
                at Google and founded Zion Tech Group with a simple but powerful mission: 
                to democratize AI technology and make it accessible to businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">The Vision</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  "To create a world where every business, regardless of size or industry, 
                  can harness the transformative power of artificial intelligence to solve 
                  complex challenges and unlock new opportunities."
                </p>
                <div className="text-center mt-6">
                  <p className="text-cyan-400 font-semibold">- Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones that shaped our company and mission
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-cyan-400' : 'text-blue-400'}`}>
                        {milestone.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{milestone.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-cyan-400 text-sm font-medium">{milestone.achievement}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{milestone.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Growth */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Team Growth</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From a small team of 5 to a global workforce of 200+ experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {teamGrowth.map((year, index) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{year.year}</div>
                  <div className="text-xl font-semibold text-white mb-1">{year.size}</div>
                  <div className="text-gray-300 text-sm">Team Members</div>
                  <div className="text-gray-400 text-xs mt-2">{year.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that have guided us from day one
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry recognition for our innovation and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                <div className="text-cyan-400 font-semibold">{achievement.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Looking Forward</h2>
              <p className="text-lg text-gray-300 mb-6">
                As we look to the future, our mission remains the same: to democratize AI 
                technology and make it accessible to every business. But our vision has grown 
                even more ambitious.
              </p>
              <p className="text-gray-400 mb-6">
                We're working on next-generation AI solutions that will revolutionize how 
                businesses operate, from quantum computing integration to autonomous business 
                systems that can run entire companies with minimal human intervention.
              </p>
              <p className="text-gray-400">
                Our goal is to be the company that brings the future of business technology 
                to the present, making what seems like science fiction today a reality tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Future Vision</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  "To be the global leader in AI-powered business transformation, pioneering 
                  the future of technology and creating a world where every organization can 
                  harness the full potential of intelligent automation."
                </p>
                <div className="text-center mt-6">
                  <p className="text-purple-400 font-semibold">2025 & Beyond</p>
                  <p className="text-gray-400 text-sm">The Next Chapter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in shaping the future of AI technology and business transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/get-started"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;