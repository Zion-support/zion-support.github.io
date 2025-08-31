<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
=======
<<<<<<< HEAD
const Team: React.FC = (): JSX.Element => (
	<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
		<div className="text-center text-white">
			<h1 className="text-4xl font-bold mb-4">Our Team</h1>
			<p className="text-xl text-gray-300">Meet the people behind Zion Tech Group.</p>
		</div>
	</div>
);
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { Linkedin, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Twitter, 
  Mail, 
  Globe, 
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Rocket,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  Code,
  Server,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Heart,
<<<<<<< HEAD
  Target,
  Lightbulb,
  TrendingUp,
  Building2,
  Briefcase,
  GraduationCap,
  Globe2,
  Users2,
  Handshake,
  Trophy,
  Clock,
  MapPin
} from 'lucide-react';

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users, count: 0 },
    { id: 'leadership', name: 'Leadership', icon: Building2, count: 8 },
    { id: 'engineering', name: 'Engineering', icon: Code, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 15 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'data-science', name: 'Data Science', icon: BarChart, count: 14 },
    { id: 'sales', name: 'Sales & Business Development', icon: Target, count: 10 },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb, count: 8 },
    { id: 'operations', name: 'Operations', icon: Settings, count: 6 },
    { id: 'research', name: 'Research & Development', icon: Rocket, count: 12 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe2, count: 0 },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin, count: 45 },
    { id: 'new-york', name: 'New York, NY', icon: MapPin, count: 28 },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin, count: 32 },
    { id: 'london', name: 'London, UK', icon: MapPin, count: 18 },
    { id: 'singapore', name: 'Singapore', icon: MapPin, count: 15 },
    { id: 'remote', name: 'Remote', icon: Wifi, count: 42 }
  ];

=======
  ArrowRight
             } from 'lucide-react.ts';

export default function Team(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Kleber Santos',
      title: 'Chief Executive Officer & Founder',
      department: 'leadership',
      location: 'middletown',
      bio: 'Visionary leader with 20+ years of experience in technology innovation and business transformation. Founded Zion Tech Group with a mission to democratize cutting-edge technology.',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development', 'AI Strategy'],
      education: 'PhD in Computer Science, MIT',
      experience: '20+ years',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      avatar: '/team/kleber-santos.jpg',
      featured: true,
      achievements: [
        'Named Top 100 Technology Leaders 2023',
        'Led 3 successful technology startups',
        'Published 25+ research papers',
        'Advisor to Fortune 500 companies'
      ]
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      department: 'leadership',
      location: 'san-francisco',
      bio: 'Leading expert in artificial intelligence and machine learning with a focus on enterprise AI solutions. Former research scientist at Google AI and Stanford University.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Enterprise Architecture', 'Research & Development'],
      education: 'PhD in Computer Science, Stanford University',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      avatar: '/team/sarah-chen.jpg',
      featured: true,
      achievements: [
        'Former Google AI Research Scientist',
        'Published 40+ AI research papers',
        'Led AI initiatives for Fortune 100 companies',
        'Recipient of ACM Distinguished Scientist Award'
      ]
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      title: 'Chief Security Officer',
      department: 'cybersecurity',
      location: 'new-york',
      bio: 'Cybersecurity expert with deep experience in protecting critical infrastructure and enterprise systems. Former cybersecurity advisor to the Department of Defense.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Risk Management', 'Compliance'],
      education: 'MS in Cybersecurity, Carnegie Mellon University',
      experience: '18+ years',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      avatar: '/team/michael-rodriguez.jpg',
      featured: true,
      achievements: [
        'Former DoD Cybersecurity Advisor',
        'CISSP, CISM, CEH certified',
        'Led security for 50+ enterprise clients',
        'Speaker at Black Hat and DEF CON'
      ]
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      title: 'Head of Quantum Computing',
      department: 'quantum',
      location: 'london',
      bio: 'Quantum computing researcher and physicist specializing in quantum algorithms and quantum machine learning. Former researcher at CERN and IBM Quantum.',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Quantum Machine Learning', 'Physics Research'],
      education: 'PhD in Physics, University of Oxford',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily@ziontechgroup.com',
      avatar: '/team/emily-watson.jpg',
      featured: false,
      achievements: [
        'Former IBM Quantum Research Scientist',
        'Published 30+ quantum computing papers',
        'Developed 5 quantum algorithms',
        'Advisor to European Quantum Initiative'
      ]
    },
    {
      id: 5,
      name: 'Alex Thompson',
      title: 'VP of Engineering',
      department: 'engineering',
      location: 'san-francisco',
      bio: 'Seasoned engineering leader with expertise in building scalable systems and leading high-performing engineering teams. Former engineering director at Netflix and Uber.',
      expertise: ['Software Engineering', 'System Architecture', 'Team Leadership', 'Scalability'],
      education: 'MS in Computer Science, UC Berkeley',
      experience: '16+ years',
      linkedin: 'https://linkedin.com/in/alexthompson',
      twitter: 'https://twitter.com/alexthompson',
      email: 'alex@ziontechgroup.com',
      avatar: '/team/alex-thompson.jpg',
      featured: false,
      achievements: [
        'Former Engineering Director at Netflix',
        'Led teams of 100+ engineers',
        'Built systems serving 100M+ users',
        'Expert in microservices architecture'
      ]
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'Chief Data Scientist',
      department: 'data-science',
      location: 'new-york',
      bio: 'Data science leader specializing in predictive analytics and AI-driven insights. Former head of data science at Spotify and McKinsey & Company.',
      expertise: ['Data Science', 'Predictive Analytics', 'Machine Learning', 'Business Intelligence'],
      education: 'PhD in Statistics, Harvard University',
      experience: '14+ years',
      linkedin: 'https://linkedin.com/in/lisapark',
      twitter: 'https://twitter.com/lisapark',
      email: 'lisa@ziontechgroup.com',
      avatar: '/team/lisa-park.jpg',
      featured: false,
      achievements: [
        'Former Head of Data Science at Spotify',
        'Led analytics for 200M+ users',
        'Published 20+ data science papers',
        'Advisor to 10+ Fortune 500 companies'
      ]
    },
    {
      id: 7,
      name: 'David Kim',
      title: 'VP of Cloud Architecture',
      department: 'cloud-devops',
      location: 'remote',
      bio: 'Cloud architecture expert with deep experience in AWS, Azure, and Google Cloud. Specializes in building resilient, scalable cloud infrastructure.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure as Code', 'Multi-Cloud'],
      education: 'BS in Computer Science, Georgia Tech',
      experience: '13+ years',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      email: 'david@ziontechgroup.com',
      avatar: '/team/david-kim.jpg',
      featured: false,
      achievements: [
        'AWS Solutions Architect Professional',
        'Led cloud migration for 50+ companies',
        'Expert in serverless architecture',
        'Speaker at AWS re:Invent'
      ]
    },
    {
      id: 8,
      name: 'Maria Garcia',
      title: 'VP of Sales & Business Development',
      department: 'sales',
      location: 'middletown',
      bio: 'Sales leader with proven track record in B2B technology sales and strategic partnerships. Former VP of Sales at Salesforce and Oracle.',
      expertise: ['B2B Sales', 'Strategic Partnerships', 'Business Development', 'Customer Success'],
      education: 'MBA, Wharton School of Business',
      experience: '17+ years',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      twitter: 'https://twitter.com/mariagarcia',
      email: 'maria@ziontechgroup.com',
      avatar: '/team/maria-garcia.jpg',
      featured: false,
      achievements: [
        'Former VP of Sales at Salesforce',
        'Exceeded sales targets for 8 consecutive years',
        'Built partnerships with 100+ companies',
        'Led $500M+ in annual sales'
      ]
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const deptMatch = selectedDepartment === 'all' || member.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || member.location === selectedLocation;
    return deptMatch && locationMatch;
  });

  const featuredMembers = teamMembers.filter(member => member.featured);
  const leadershipTeam = teamMembers.filter(member => member.department === 'leadership');

  const companyValues = [
    {
      icon: Innovation,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible and embrace cutting-edge technologies.'
    },
    {
      icon: Excellence,
      title: 'Excellence in Everything',
      description: 'We maintain the highest standards in our work, from code quality to client service.'
    },
    {
      icon: Collaboration,
      title: 'Collaborative Excellence',
      description: 'Great ideas come from diverse teams working together towards common goals.'
    },
    {
      icon: Impact,
      title: 'Real-World Impact',
      description: 'We focus on solving real problems that make a meaningful difference.'
    },
    {
      icon: Growth,
      title: 'Continuous Growth',
      description: 'We invest in our people\'s development and foster a learning culture.'
    },
    {
      icon: Integrity,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on honesty, transparency, and reliability.'
    }
  ];

  const stats = [
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries', value: '12+', icon: Globe2 },
    { label: 'Years Experience', value: '15+', icon: Clock },
    { label: 'Patents Filed', value: '25+', icon: Award },
    { label: 'Research Papers', value: '100+', icon: BookOpen },
    { label: 'Client Success Rate', value: '98%', icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              A diverse team of experts, innovators, and problem-solvers dedicated to 
              transforming businesses through cutting-edge technology and exceptional service.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
=======
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8">
            {stats.map((stat, index)              => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team Member */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {teamMembers.filter(member => member.featured).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-400/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-cyan-400 text-xl mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Leadership Vision</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      As the founder of Zion Tech Group, I believe that technology should be accessible, 
                      understandable, and transformative. Our mission is to democratize access to advanced 
                      AI and quantum technologies, enabling businesses of all sizes to leverage cutting-edge 
                      solutions for growth, efficiency, and competitive advantage.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We're building a future where innovation serves humanity, where complex technologies 
                      become simple tools, and where every business can harness the power of AI to transform 
                      their operations and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member              => !member.featured).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed text-sm">{member.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 text-center">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zion-blue-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {leadershipTeam.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Meet the visionary leaders driving innovation and growth at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-zion-cyan font-medium mb-2">{member.title}</p>
                        <p className="text-zion-slate-light text-sm mb-3">{member.bio}</p>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                            {departments.find(d => d.id === member.department)?.name}
                          </span>
                          <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                            {locations.find(l => l.id === member.location)?.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                            >
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Directory */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Experts
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover the talented professionals across all departments who make Zion Tech Group exceptional.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-zion-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-zion-cyan font-medium text-sm mb-2">{member.title}</p>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                        {departments.find(d => d.id === member.department)?.name}
                      </span>
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {locations.find(l => l.id === member.location)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-zion-slate-light">
                      <span className="font-medium">Education:</span> {member.education}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      <span className="font-medium">Experience:</span> {member.experience}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
              <p className="text-zion-slate-light mb-4">
                Try adjusting your filters to find team members.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Ready to work with cutting-edge technology and exceptional people? 
              Explore career opportunities at Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1">
                View Open Positions
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Icon components
function Innovation({ className }: { className?: string }) {
  return <Lightbulb className={className} />;
}

function Excellence({ className }: { className?: string }) {
  return <Star className={className} />;
}

function Collaboration({ className }: { className?: string }) {
  return <Users2 className={className} />;
}

function Impact({ className }: { className?: string }) {
  return <Target className={className} />;
}

function Growth({ className }: { className?: string }) {
  return <TrendingUp className={className} />;
}

function Integrity({ className }: { className?: string }) {
  return <Shield className={className} />;
}

function BookOpen({ className }: { className?: string }) {
  return <BookOpen className={className} />;
}