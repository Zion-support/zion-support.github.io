import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Users,
  Award,
  Star,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  ArrowRight,
  Building2,
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
  Zap,
  Cloud,
  Brain,
  Database,
  Network,
  Cpu,
  Smartphone,
  Lock,
  Server,
  BarChart3,
  Code,
  Wifi,
  Atom,
  Dna,
  Rocket,
  Handshake,
  CheckCircle,
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Eye,
  Ear,
  MessageCircle
} from 'lucide-react';

export default function Leadership() {
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      image: '/images/leadership/sarah-chen.jpg',
      bio: 'Former VP of AI Research at Google, PhD in Computer Science from Stanford. Led 3 successful AI startups to acquisition.',
      experience: '15+ years',
      education: 'PhD Computer Science, Stanford',
      expertise: ['AI Strategy', 'Business Development', 'Research Leadership'],
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah.chen@ziontechgroup.com',
      achievements: ['Forbes 30 Under 30', 'AI Innovator Award 2023', '100+ Patents'],
      featured: true
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      image: '/images/leadership/marcus-rodriguez.jpg',
      bio: 'Ex-Microsoft Azure architect, specialized in cloud infrastructure and AI deployment. Built systems serving 100M+ users.',
      experience: '12+ years',
      education: 'MS Computer Engineering, MIT',
      expertise: ['Cloud Architecture', 'AI Infrastructure', 'System Design'],
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      email: 'marcus.rodriguez@ziontechgroup.com',
      achievements: ['Microsoft MVP', 'Cloud Architecture Award', 'Open Source Contributor'],
      featured: true
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Research Officer',
      image: '/images/leadership/emily-watson.jpg',
      bio: 'Leading quantum computing researcher, former NASA scientist. Published 50+ papers in top-tier journals.',
      experience: '18+ years',
      education: 'PhD Physics, Caltech',
      expertise: ['Quantum Computing', 'Research Strategy', 'Innovation'],
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily.watson@ziontechgroup.com',
      achievements: ['NASA Achievement Medal', 'Quantum Research Grant', 'Scientific Breakthrough Award'],
      featured: true
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      image: '/images/leadership/david-kim.jpg',
      bio: 'Former Goldman Sachs VP, specialized in fintech investments. Led $2B+ in technology financing deals.',
      experience: '14+ years',
      education: 'MBA Finance, Harvard',
      expertise: ['Financial Strategy', 'Investment Management', 'Risk Assessment'],
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      email: 'david.kim@ziontechgroup.com',
      achievements: ['CFA Charterholder', 'Top 40 Under 40', 'Fintech Innovation Award'],
      featured: false
    },
    {
      name: 'Lisa Thompson',
      title: 'Chief Marketing Officer',
      image: '/images/leadership/lisa-thompson.jpg',
      bio: 'Ex-Apple marketing executive, led global campaigns for iPhone and Mac. Expert in brand strategy and growth marketing.',
      experience: '16+ years',
      education: 'MBA Marketing, Northwestern',
      expertise: ['Brand Strategy', 'Growth Marketing', 'Customer Experience'],
      linkedin: 'https://linkedin.com/in/lisa-thompson',
      twitter: 'https://twitter.com/lisathompson',
      email: 'lisa.thompson@ziontechgroup.com',
      achievements: ['Marketing Excellence Award', 'Brand Builder of the Year', '100M+ Campaign Reach'],
      featured: false
    },
    {
      name: 'James Wilson',
      title: 'Chief Operations Officer',
      image: '/images/leadership/james-wilson.jpg',
      bio: 'Former Amazon operations leader, scaled operations from startup to enterprise. Expert in process optimization.',
      experience: '13+ years',
      education: 'MS Operations Research, Georgia Tech',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'],
      linkedin: 'https://linkedin.com/in/james-wilson',
      twitter: 'https://twitter.com/jameswilson',
      email: 'james.wilson@ziontechgroup.com',
      achievements: ['Operations Excellence Award', 'Lean Six Sigma Black Belt', 'Scale-Up Leader'],
      featured: false
    },
    {
      name: 'Dr. Alex Johnson',
      title: 'Chief Security Officer',
      image: '/images/leadership/alex-johnson.jpg',
      bio: 'Former NSA cybersecurity expert, specialized in threat intelligence and zero-trust architecture.',
      experience: '20+ years',
      education: 'PhD Cybersecurity, Carnegie Mellon',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      linkedin: 'https://linkedin.com/in/alex-johnson',
      twitter: 'https://twitter.com/alexjohnson',
      email: 'alex.johnson@ziontechgroup.com',
      achievements: ['NSA Recognition Award', 'Cybersecurity Expert', 'Zero-Trust Pioneer'],
      featured: false
    },
    {
      name: 'Maria Garcia',
      title: 'Chief People Officer',
      image: '/images/leadership/maria-garcia.jpg',
      bio: 'Former Google HR leader, built inclusive cultures and scaled teams from 50 to 10,000+ employees.',
      experience: '17+ years',
      education: 'MS Human Resources, Cornell',
      expertise: ['Talent Strategy', 'Culture Building', 'Organizational Development'],
      linkedin: 'https://linkedin.com/in/maria-garcia',
      twitter: 'https://twitter.com/mariagarcia',
      email: 'maria.garcia@ziontechgroup.com',
      achievements: ['HR Innovation Award', 'Diversity Champion', 'Best Places to Work'],
      featured: false
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and novel approaches.',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Excellence in Execution',
      description: 'We don\'t just plan - we deliver. Every project is executed with precision, quality, and attention to detail.',
      icon: Target,
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We measure our performance by the impact we create for our clients.',
      icon: Heart,
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Integrity & Trust',
      description: 'We build lasting relationships through transparency, honesty, and unwavering commitment to ethical practices.',
      icon: Shield,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Continuous Learning',
      description: 'In a rapidly evolving tech landscape, we stay ahead by fostering a culture of continuous learning and adaptation.',
      icon: GraduationCap,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Collaboration',
      description: 'Great achievements come from great teamwork. We believe in the power of diverse perspectives and collaborative problem-solving.',
      icon: Users,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const leadershipStats = [
    {
      metric: '15+',
      label: 'Average Years Experience',
      icon: Clock,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      metric: '50+',
      label: 'Patents & Publications',
      icon: Award,
      color: 'from-green-500 to-emerald-600'
    },
    {
      metric: '100+',
      label: 'Successful Projects',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600'
    },
    {
      metric: '1M+',
      label: 'Users Impacted',
      icon: Users,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO
        title="Leadership Team - Zion Tech Group"
        description="Meet the visionary leaders driving innovation at Zion Tech Group. Our executive team brings decades of experience in technology, business, and innovation."
        keywords="leadership, executive team, CEO, CTO, management, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Visionary leaders with decades of experience in technology, business, and innovation, 
              driving Zion Tech Group to the forefront of the digital revolution
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Users className="h-5 w-5 mr-2" />
                <span>8 Executive Leaders</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Award className="h-5 w-5 mr-2" />
                <span>100+ Industry Awards</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Globe className="h-5 w-5 mr-2" />
                <span>Global Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our C-suite leaders bring world-class expertise and proven track records of success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadershipTeam.filter(leader => leader.featured).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {leader.title}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {leader.experience}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {leader.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {leader.experience} experience
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notable Achievements</h4>
                    <div className="space-y-2">
                      {leader.achievements.slice(0, 2).map((achievement) => (
                        <div key={achievement} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet all the leaders who are driving innovation and growth across our organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {leader.title}
                  </p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center leading-relaxed">
                  {leader.bio}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {leader.experience}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    {leader.education.split(',')[0]}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The collective achievements and impact of our leadership team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.metric}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Leadership Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to work with industry leaders who are shaping the future of technology? 
              Let's discuss how we can transform your business together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
              >
                Contact Our Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Join Our Team
                <Users className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}