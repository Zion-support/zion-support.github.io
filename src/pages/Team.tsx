import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Star, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  Building,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Code,
  Heart,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  Briefcase,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  linkedin?: string;
  twitter?: string;
  email: string;
  avatar: string;
  achievements: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Kleber Oliveira',
    role: 'CEO & Chief Technology Officer',
    department: 'Executive Leadership',
    bio: 'Visionary leader with over 15 years of experience in AI, machine learning, and enterprise technology solutions. Driving innovation and digital transformation across industries.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Enterprise Architecture', 'Digital Transformation', 'Strategic Leadership'],
    experience: '15+ years in technology leadership',
    education: 'Ph.D. in Computer Science, Stanford University',
    linkedin: 'https://linkedin.com/in/kleber-oliveira',
    email: 'kleber@ziontechgroup.com',
    avatar: '/images/team/kleber-oliveira.jpg',
    achievements: [
      'Led 50+ successful AI implementations',
      'Published 25+ research papers',
      'Named Top 100 AI Leaders 2024',
      'Advisor to Fortune 500 companies'
    ]
  },
  {
    name: 'Sarah Chen',
    role: 'Chief AI Officer',
    department: 'AI Research & Development',
    bio: 'Leading our AI research initiatives and developing cutting-edge machine learning solutions. Expert in neural networks and deep learning architectures.',
    expertise: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing', 'AI Ethics'],
    experience: '12+ years in AI research',
    education: 'M.S. in Machine Learning, MIT',
    linkedin: 'https://linkedin.com/in/sarah-chen-ai',
    email: 'sarah@ziontechgroup.com',
    avatar: '/images/team/sarah-chen.jpg',
    achievements: [
      'Developed 10+ AI models in production',
      'Led AI ethics initiatives',
      'Speaker at major AI conferences',
      'Mentor to 50+ AI engineers'
    ]
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Security Officer',
    department: 'Cybersecurity & Compliance',
    bio: 'Cybersecurity expert with deep knowledge in threat intelligence, zero-trust architecture, and regulatory compliance. Protecting our clients\' digital assets.',
    expertise: ['Cybersecurity', 'Threat Intelligence', 'Zero Trust', 'Compliance', 'Incident Response'],
    experience: '14+ years in cybersecurity',
    education: 'M.S. in Cybersecurity, Carnegie Mellon',
    linkedin: 'https://linkedin.com/in/michael-rodriguez-security',
    email: 'michael@ziontechgroup.com',
    avatar: '/images/team/michael-rodriguez.jpg',
    achievements: [
      'Prevented 1000+ security incidents',
      'CISSP, CISM certified',
      'Former FBI cybersecurity consultant',
      'Author of cybersecurity best practices'
    ]
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief Data Officer',
    department: 'Data Science & Analytics',
    bio: 'Data science leader driving insights and analytics solutions. Expert in big data, predictive analytics, and business intelligence.',
    expertise: ['Data Science', 'Big Data', 'Predictive Analytics', 'Business Intelligence', 'Data Governance'],
    experience: '13+ years in data science',
    education: 'Ph.D. in Statistics, Harvard University',
    linkedin: 'https://linkedin.com/in/emily-watson-data',
    email: 'emily@ziontechgroup.com',
    avatar: '/images/team/emily-watson.jpg',
    achievements: [
      'Built 20+ predictive models',
      'Led data governance initiatives',
      'Published in top data science journals',
      'Advisor to data science teams'
    ]
  },
  {
    name: 'David Kim',
    role: 'Chief Cloud Architect',
    department: 'Cloud Infrastructure',
    bio: 'Cloud architecture expert specializing in scalable, secure, and cost-effective cloud solutions. Leading our cloud migration and DevOps initiatives.',
    expertise: ['Cloud Architecture', 'DevOps', 'Microservices', 'Containerization', 'Cloud Security'],
    experience: '11+ years in cloud architecture',
    education: 'B.S. in Computer Engineering, UC Berkeley',
    linkedin: 'https://linkedin.com/in/david-kim-cloud',
    email: 'david@ziontechgroup.com',
    avatar: '/images/team/david-kim.jpg',
    achievements: [
      'Migrated 100+ applications to cloud',
      'AWS, Azure, GCP certified',
      'Reduced cloud costs by 40%',
      'Led DevOps transformation'
    ]
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Client Success',
    department: 'Client Relations',
    bio: 'Client success leader ensuring exceptional customer experience and successful project delivery. Building long-term partnerships with our clients.',
    expertise: ['Client Success', 'Project Management', 'Customer Experience', 'Strategic Partnerships', 'Business Development'],
    experience: '10+ years in client relations',
    education: 'MBA, Wharton School of Business',
    linkedin: 'https://linkedin.com/in/lisa-thompson-success',
    email: 'lisa@ziontechgroup.com',
    avatar: '/images/team/lisa-thompson.jpg',
    achievements: [
      'Maintained 98% client satisfaction',
      'Led 200+ successful projects',
      'Built strategic partnerships',
      'Awarded Client Success Leader 2024'
    ]
  }
];

const departments = [
  {
    name: 'AI Research & Development',
    icon: Brain,
    description: 'Cutting-edge AI research and development',
    memberCount: 25,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Advanced security and compliance solutions',
    memberCount: 18,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Scalable cloud architecture and DevOps',
    memberCount: 22,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Data Science & Analytics',
    icon: BarChart3,
    description: 'Data-driven insights and analytics',
    memberCount: 20,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Client Success',
    icon: Heart,
    description: 'Exceptional customer experience',
    memberCount: 15,
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Product Development',
    icon: Code,
    description: 'Innovative product development',
    memberCount: 30,
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovative solutions. 
              Our diverse team of experts is dedicated to transforming businesses through cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>130+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>50+ Industry Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>15+ Years Average Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              business, and innovation to drive Zion Tech Group's mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.department}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Organized expertise across specialized departments to deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center mb-4`}>
                  <dept.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{dept.description}</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{dept.memberCount} team members</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The principles that guide our team and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries and exploring new technologies',
                icon: Lightbulb,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Excellence',
                description: 'Delivering the highest quality solutions',
                icon: Star,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Collaboration',
                description: 'Working together to achieve common goals',
                icon: Users,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Integrity',
                description: 'Maintaining trust and ethical standards',
                icon: Shield,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Ready to work with the best minds in technology? Explore career opportunities at Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                View Careers
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
