import React from 'react';
import { Link } from 'react-router-dom';
import { 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Star,
  CheckCircle
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Award,
  Users,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Building,
  Zap
} from 'lucide-react';

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 45 },
    { id: 'leadership', name: 'Leadership', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 18 },
    { id: 'ai-research', name: 'AI Research', count: 12 },
    { id: 'sales', name: 'Sales & Business', count: 7 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 45 },
    { id: 'middletown', name: 'Middletown, DE', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 5 }
  ];

  const teamMembers = [
    {
import React from 'react';
import { SEO } from "../components/SEOHead"';
import { Link } from 'react-router-dom';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in AI and quantum computing. Former CTO at major tech companies.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in AI and quantum computing. Former research director at leading tech institutions.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Business Innovation'],
      avatar: 'SC',
      linkedin: '#',
      achievements: ['PhD Computer Science', '20+ Patents', 'Forbes 30 Under 30']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology innovator specializing in autonomous systems and enterprise architecture. Led digital transformation for Fortune 500 companies.',
      expertise: ['Autonomous Systems', 'Enterprise Architecture', 'Digital Transformation'],
      avatar: 'MR',
      linkedin: '#',
      achievements: ['MSc Engineering', '15+ Years Experience', 'Industry Speaker']
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief Innovation Officer',
      bio: 'Research pioneer in emerging technologies. Leading our quantum computing and blockchain initiatives with breakthrough innovations.',
      expertise: ['Quantum Computing', 'Blockchain', 'Emerging Tech'],
      avatar: 'JK',
      linkedin: '#',
      achievements: ['PhD Physics', 'Research Papers', 'Innovation Awards']
    },
    {
      name: 'Emily Watson',
      role: 'Chief Operations Officer',
      bio: 'Operations expert with deep experience in scaling technology companies. Ensures seamless delivery of our global services.',
      expertise: ['Operations Management', 'Global Scaling', 'Service Delivery'],
      avatar: 'EW',
      linkedin: '#',
      achievements: ['MBA Business', '10+ Years Operations', 'Process Optimization']
    }
  ];

  const departmentHeads = [
    {
      name: 'Alex Thompson',
      role: 'Head of AI Solutions',
      department: 'AI & Machine Learning',
      bio: 'Leading our AI initiatives with expertise in deep learning and neural networks.',
      avatar: 'AT'
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Head of Cybersecurity',
      department: 'Security & Compliance',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive threat intelligence experience.',
      avatar: 'LP'
    },
    {
      name: 'David Chen',
      role: 'Head of Cloud Architecture',
      department: 'Cloud & DevOps',
      bio: 'Cloud specialist with expertise in multi-cloud strategies and DevOps automation.',
      avatar: 'DC'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Digital Transformation',
      department: 'Business Solutions',
      bio: 'Digital transformation consultant helping businesses navigate technological change.',
      avatar: 'MG'
    }
  ];

  const companyStats = [
    {
      number: '50+',
      label: 'Team Members',
      description: 'Diverse professionals from around the world'
    },
    {
      number: '25+',
      label: 'Countries',
      description: 'Global team with local expertise'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and breakthrough solutions'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is passionate about technology and client success'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    }
  ];

  const culture = [
    {
      title: 'Continuous Learning',
      description: 'We invest in ongoing education and skill development for our team members.',
      icon: Brain
    },
    {
      title: 'Work-Life Balance',
      description: 'We promote healthy work-life balance with flexible schedules and remote work options.',
      icon: Heart
    },
    {
      title: 'Innovation Time',
      description: 'Team members get dedicated time to work on innovative projects and research.',
      icon: Lightbulb
    },
    {
      title: 'Global Perspective',
      description: 'Our diverse team brings global perspectives and cultural insights to every project.',
      icon: Globe
      name: 'Client Success',
      icon: Users,
      color: 'from-orange-500 to-yellow-500',
      description: 'Ensuring client success and project delivery',
      memberCount: 8
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer & Chief AI Officer",
      department: "Executive Leadership",
      bio: "Dr. Chen is a visionary leader with over 15 years of experience in AI research and enterprise technology. She holds a PhD in Computer Science from MIT and has led breakthrough research in autonomous AI systems.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Research & Development", "Enterprise Technology"],
      education: "PhD Computer Science, MIT",
      experience: "15+ years",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah.chen@ziontechgroup.com",
      image: "/images/team/sarah-chen.jpg",
      achievements: ["Top 100 AI Leaders 2024", "MIT Technology Review Innovator", "Published 50+ Research Papers"],
      featured: true
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "James leads our technology strategy and oversees the development of cutting-edge solutions. He has extensive experience in cloud architecture, cybersecurity, and emerging technologies.",
      expertise: ["Cloud Architecture", "Cybersecurity", "Emerging Technologies", "Technology Strategy"],
      education: "MS Computer Science, Stanford University",
      experience: "12+ years",
      linkedin: "https://linkedin.com/in/jameswilson",
      twitter: "https://twitter.com/jameswilson",
      email: "james.wilson@ziontechgroup.com",
      image: "/images/team/james-wilson.jpg",
      achievements: ["AWS Community Builder", "Cybersecurity Expert", "Cloud Architecture Specialist"],
      featured: true
    },
    {
      id: 3,
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      department: "Research & Development",
      bio: "Dr. Rodriguez leads our quantum computing and advanced research initiatives. His work has been published in leading scientific journals and has received international recognition.",
      expertise: ["Quantum Computing", "Research & Development", "Scientific Innovation", "Academic Collaboration"],
      education: "PhD Physics, Caltech",
      experience: "18+ years",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/mrodriguez",
      email: "michael.rodriguez@ziontechgroup.com",
      image: "/images/team/michael-rodriguez.jpg",
      achievements: ["Nobel Prize Nominee 2023", "Caltech Distinguished Alumnus", "100+ Scientific Publications"],
      featured: true
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      department: "Operations",
      bio: "Lisa ensures operational excellence across all business functions. She has a proven track record of scaling operations and implementing efficient business processes.",
      expertise: ["Business Operations", "Process Optimization", "Strategic Planning", "Team Leadership"],
      education: "MBA, Harvard Business School",
      experience: "14+ years",
      linkedin: "https://linkedin.com/in/lisathompson",
      twitter: "https://twitter.com/lisathompson",
      email: "lisa.thompson@ziontechgroup.com",
      image: "/images/team/lisa-thompson.jpg",
      achievements: ["Fortune 500 Executive", "Operational Excellence Award", "Leadership Excellence"],
      featured: false
    },
    {
      id: 5,
      name: "Alex Kim",
      role: "VP of Engineering",
      department: "Engineering",
      bio: "Alex leads our engineering teams and ensures the delivery of high-quality, scalable solutions. He has deep expertise in software architecture and team management.",
      expertise: ["Software Architecture", "Team Leadership", "Agile Development", "Quality Assurance"],
      education: "BS Computer Science, UC Berkeley",
      experience: "10+ years",
      linkedin: "https://linkedin.com/in/alexkim",
      twitter: "https://twitter.com/alexkim",
      email: "alex.kim@ziontechgroup.com",
      image: "/images/team/alex-kim.jpg",
      achievements: ["Google Engineering Award", "Open Source Contributor", "Technical Leadership"],
      featured: false
    },
    {
      id: 6,
      name: "Dr. Emily Johnson",
      role: "VP of Healthcare Solutions",
      department: "Industry Solutions",
      bio: "Dr. Johnson specializes in healthcare technology solutions and digital transformation. She has worked with major healthcare systems to implement AI-powered solutions.",
      expertise: ["Healthcare Technology", "Digital Transformation", "AI in Healthcare", "Regulatory Compliance"],
      education: "MD, Johns Hopkins University",
      experience: "16+ years",
      linkedin: "https://linkedin.com/in/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      email: "emily.johnson@ziontechgroup.com",
      image: "/images/team/emily-johnson.jpg",
      achievements: ["Healthcare Innovation Award", "Medical Technology Pioneer", "Regulatory Expert"],
      featured: false
    },
    {
      id: 7,
      name: "David Park",
      role: "VP of Emerging Technologies",
      department: "Innovation",
      bio: "David explores and develops next-generation technologies including blockchain, IoT, and edge computing. He has a passion for bringing cutting-edge tech to market.",
      expertise: ["Blockchain", "IoT", "Edge Computing", "Emerging Technologies"],
      education: "MS Electrical Engineering, Georgia Tech",
      experience: "11+ years",
      linkedin: "https://linkedin.com/in/davidpark",
      twitter: "https://twitter.com/davidpark",
      email: "david.park@ziontechgroup.com",
      image: "/images/team/david-park.jpg",
      achievements: ["Innovation Award", "Patent Holder", "Technology Evangelist"],
      featured: false
    },
    {
      id: 8,
      name: "Rachel Martinez",
      role: "VP of Customer Success",
      department: "Customer Experience",
      bio: "Rachel ensures our customers achieve maximum value from our solutions. She has built and led customer success teams at multiple technology companies.",
      expertise: ["Customer Success", "Customer Experience", "Account Management", "Client Relations"],
      education: "BS Business Administration, UCLA",
      experience: "13+ years",
      linkedin: "https://linkedin.com/in/rachelmartinez",
      twitter: "https://twitter.com/rachelmartinez",
      email: "rachel.martinez@ziontechgroup.com",
      image: "/images/team/rachel-martinez.jpg",
      achievements: ["Customer Success Excellence", "Client Satisfaction Award", "Team Leadership"],
      featured: false
    }
  ];

  const departments = [
    {
  const advisors = [
    {
      name: 'Dr. James Wilson',
      role: 'AI Ethics Advisor',
      bio: 'Leading researcher in AI ethics and responsible technology development.',
      image: '/images/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson'
    },
    {
      name: 'Elena Petrova',
      role: 'Quantum Computing Advisor',
      bio: 'Former research director at leading quantum computing labs.',
      image: '/images/team/elena-petrova.jpg',
      linkedin: 'https://linkedin.com/in/elena-petrova'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEOHead 
        title="Our Team - Zion Tech Group" 
        description="Meet the exceptional team of innovators, engineers, and industry experts driving Zion Tech Group's mission to revolutionize technology."
        tags={["team", "leadership", "experts", "AI specialists", "quantum physicists", "cybersecurity experts", "Zion Tech Group"]}
        url="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Our diverse team of experts brings together decades of experience in AI, 
            cybersecurity, quantum computing, and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#team"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View Team
            </a>
            <a
              href="/careers"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group.
      name: "Executive Leadership",
      icon: Building,
      description: "Strategic vision and company direction",
      memberCount: 1
    },
    {
      name: "Technology",
      icon: Cpu,
      description: "Core technology development and architecture",
      memberCount: 1
    },
    {
      name: "Research & Development",
      icon: Brain,
      description: "Innovation and scientific advancement",
      memberCount: 1
    },
    {
      name: "Operations",
      icon: Zap,
      description: "Business operations and process optimization",
      memberCount: 1
    },
    {
      name: "Engineering",
      icon: Shield,
      description: "Software development and quality assurance",
      memberCount: 1
    },
    {
      name: "Industry Solutions",
      icon: Users,
      description: "Industry-specific solutions and expertise",
      memberCount: 1
    },
    {
      name: "Innovation",
      icon: Rocket,
      description: "Emerging technologies and future solutions",
      memberCount: 1
    },
    {
      name: "Customer Experience",
      icon: Award,
      description: "Customer success and satisfaction",
      memberCount: 1
    }
  ];

  const featuredMembers = teamMembers.filter(member => member.featured);
  const regularMembers = teamMembers.filter(member => !member.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our diverse team of experts brings together decades of experience in AI, 
              quantum computing, cybersecurity, and digital transformation to deliver 
              innovative solutions that drive business success.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{teamMembers.length} Team Members</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                <span>Innovation Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{dept.description}</p>
                <span className="text-cyan-400 text-sm font-medium">{dept.memberCount} member</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Team Members */}
      {featuredMembers.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  {/* Member Image Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-center">
                          <Award className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                {/* Member Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.department}</p>
                </div>
                
                <p className="text-gray-300 text-xs mb-4 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="px-1 py-1 bg-gray-700 text-gray-300 text-xs rounded text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
      id: 1,
      name: "Dr. Kleber Santos",
      title: "Chief Executive Officer & Founder",
      department: "leadership",
      location: "middletown",
      avatar: "/team/kleber-santos.jpg",
      bio: "Visionary leader with over 15 years of experience in AI, quantum computing, and enterprise technology. Founded Zion Tech Group to revolutionize how businesses leverage cutting-edge technology.",
      expertise: ["AI Strategy", "Quantum Computing", "Enterprise Leadership", "Innovation Management"],
      education: "Ph.D. Computer Science, MIT",
      experience: "15+ years",
      linkedin: "https://linkedin.com/in/kleber-santos",
      twitter: "https://twitter.com/klebersantos",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      featured: true,
      achievements: [
        "Named 'AI Innovator of the Year' 2024",
        "Led 50+ enterprise AI transformations",
        "Published 25+ research papers",
        "Speaker at major tech conferences"
      ]
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      department: "leadership",
      location: "middletown",
      avatar: "/team/sarah-chen.jpg",
      bio: "Leading expert in artificial intelligence and autonomous systems. Drives technological innovation and oversees all technical initiatives at Zion Tech Group.",
      expertise: ["AI Architecture", "Autonomous Systems", "Machine Learning", "System Design"],
      education: "Ph.D. Artificial Intelligence, Stanford",
      experience: "12+ years",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@ziontechgroup.com",
      phone: "+1 302 464 0951",
      featured: true,
      achievements: [
        "Former Google AI Research Lead",
        "100+ AI system deployments",
        "15 patents in AI technology",
        "IEEE Fellow"
      ]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "Chief Research Officer",
      department: "ai-research",
      location: "middletown",
      avatar: "/team/michael-rodriguez.jpg",
      bio: "Pioneering researcher in quantum computing and neural networks. Leads breakthrough research initiatives that push the boundaries of computational technology.",
      expertise: ["Quantum Computing", "Neural Networks", "Research Strategy", "Academic Collaboration"],
      education: "Ph.D. Quantum Physics, Caltech",
      experience: "10+ years",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      twitter: "https://twitter.com/mrodriguez",
      email: "michael@ziontechgroup.com",
      phone: "+1 302 464 0952",
      featured: true,
      achievements: [
        "Quantum computing breakthroughs",
        "Published in Nature & Science",
        "Collaboration with CERN",
        "Nobel Prize nominee 2023"
      ]
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Chief Security Officer",
      department: "leadership",
      location: "remote",
      avatar: "/team/alex-thompson.jpg",
      bio: "Cybersecurity expert specializing in AI-powered security solutions and compliance automation. Ensures all Zion Tech Group solutions meet the highest security standards.",
      expertise: ["Cybersecurity", "AI Security", "Compliance", "Risk Management"],
      education: "M.S. Cybersecurity, Carnegie Mellon",
      experience: "8+ years",
      linkedin: "https://linkedin.com/in/alex-thompson",
      twitter: "https://twitter.com/alexthompson",
      email: "alex@ziontechgroup.com",
      phone: "+1 302 464 0953",
      featured: false,
      achievements: [
        "Former NSA cybersecurity analyst",
        "SOC2 compliance automation expert",
        "Zero security breaches in 5 years",
        "CISSP, CISM certified"
      ]
    },
    {
      id: 5,
      name: "Jennifer Lee",
      title: "VP of Engineering",
      department: "engineering",
      location: "middletown",
      avatar: "/team/jennifer-lee.jpg",
      bio: "Experienced engineering leader overseeing the development of cutting-edge AI and quantum technology solutions. Manages teams of world-class engineers and developers.",
      expertise: ["Engineering Leadership", "AI Development", "Team Management", "Product Architecture"],
      education: "M.S. Computer Engineering, UC Berkeley",
      experience: "9+ years",
      linkedin: "https://linkedin.com/in/jennifer-lee",
      twitter: "https://twitter.com/jenniferlee",
      email: "jennifer@ziontechgroup.com",
      phone: "+1 302 464 0954",
      featured: false,
      achievements: [
        "Led 20+ successful product launches",
        "Managed 100+ engineering team",
        "Reduced development time by 40%",
        "Former Google Engineering Manager"
      ]
    },
    {
      id: 6,
      name: "David Kim",
      title: "Senior AI Research Scientist",
      department: "ai-research",
      location: "remote",
      avatar: "/team/david-kim.jpg",
      bio: "Leading researcher in autonomous systems and edge computing. Develops next-generation AI solutions that operate efficiently in resource-constrained environments.",
      expertise: ["Autonomous Systems", "Edge Computing", "AI Optimization", "Research"],
      education: "Ph.D. Computer Science, MIT",
      experience: "7+ years",
      linkedin: "https://linkedin.com/in/david-kim",
      twitter: "https://twitter.com/davidkim",
      email: "david@ziontechgroup.com",
      phone: "+1 302 464 0955",
      featured: false,
      achievements: [
        "5 patents in autonomous systems",
        "Published 20+ research papers",
        "AI optimization breakthroughs",
        "Former Tesla AI researcher"
      ]
    },
    {
      id: 7,
      name: "Emily Watson",
      title: "VP of Business Development",
      department: "sales",
      location: "amsterdam",
      avatar: "/team/emily-watson.jpg",
      bio: "Strategic business leader expanding Zion Tech Group's global presence. Builds partnerships and drives growth across European and international markets.",
      expertise: ["Business Development", "Strategic Partnerships", "Market Expansion", "Client Relations"],
      education: "MBA, Harvard Business School",
      experience: "11+ years",
      linkedin: "https://linkedin.com/in/emily-watson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily@ziontechgroup.com",
      phone: "+31 20 123 4567",
      featured: false,
      achievements: [
        "Expanded to 15+ countries",
        "$50M+ in new business",
        "100+ strategic partnerships",
        "Former McKinsey consultant"
      ]
    },
    {
      id: 8,
      name: "Robert Chen",
      title: "Lead Quantum Engineer",
      department: "engineering",
      location: "middletown",
      avatar: "/team/robert-chen.jpg",
      bio: "Quantum computing specialist developing the next generation of quantum algorithms and hardware integration solutions for enterprise applications.",
      expertise: ["Quantum Computing", "Quantum Algorithms", "Hardware Integration", "Engineering"],
      education: "Ph.D. Quantum Engineering, Stanford",
      experience: "6+ years",
      linkedin: "https://linkedin.com/in/robert-chen",
      twitter: "https://twitter.com/robertchen",
      email: "robert@ziontechgroup.com",
      phone: "+1 302 464 0956",
      featured: false,
      achievements: [
        "Quantum algorithm breakthroughs",
        "Hardware integration expert",
        "3 quantum computing patents",
        "Former IBM Quantum researcher"
      ]
    }
  ];

  const filteredTeam = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || member.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const featuredMembers = filteredTeam.filter(member => member.featured);
  const regularMembers = filteredTeam.filter(member => !member.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are a diverse team of innovators, engineers, and visionaries dedicated to transforming 
            businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Zion Tech Group
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{member.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 text-lg mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, idx) => (
                          <span key={idx} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

      {/* Department Heads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Department Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized teams are led by industry experts in their respective fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentHeads.map((head, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{head.avatar}</span>
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Our Team - Zion Tech Group" 
        description="Meet the visionary leaders and experts behind Zion Tech Group's revolutionary technology solutions"
        keywords="team, leadership, founders, experts, AI, quantum computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/team"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The brilliant minds behind Zion Tech Group's revolutionary technology solutions. 
            Our team combines decades of experience in AI, quantum computing, and business 
            innovation to deliver transformative results.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium">{dept.memberCount} members</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{head.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{head.role}</p>
                <p className="text-cyan-400 text-xs mb-3">{head.department}</p>
                <p className="text-gray-300 text-sm">{head.bio}</p>
              </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation 
            and technology. Join us in shaping the future of business technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
            </div>
          ))}
        </div>
      </div>


        {/* Join Our Team */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 mb-16 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're always looking for brilliant minds who share our passion for innovation 
              and want to shape the future of technology. Join us in building the next generation 
              of AI and quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
              >
                View Open Positions
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Explore our open positions and become part of 
              our mission to transform businesses through cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;