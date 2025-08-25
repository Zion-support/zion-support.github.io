<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { 
  Users, 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Code, 
  Globe, 
  Award,
  Linkedin,
  Mail,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Rocket,
  Building
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Mail,
  Phone,
  MapPin,
  Globe,
  Brain,
  Shield,
  Cpu,
  Network,
  Building,
  Rocket,
  Star,
  CheckCircle
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
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
      role: 'Chief Technology Officer',
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Kleber',
      role: 'Founder & CEO',
      expertise: ['AI & Machine Learning', 'Quantum Technology', 'Strategic Leadership'],
      bio: 'Visionary leader with over 15 years of experience in AI and emerging technologies. Pioneering the future of autonomous business systems.',
      avatar: '👨‍💼',
      color: 'from-purple-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/kleber-zion',
      email: 'kleber@ziontechgroup.com',
      featured: true
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

  const departments = [
    {
      bio: 'Leading expert in quantum computing and AI systems. PhD in Computer Science from MIT with 20+ publications.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarah_chen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Operations Officer',
      bio: 'Operations specialist with deep experience in scaling tech companies and managing global teams.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcus_rodriguez'
    }
  ];

  const advisors = [
    {
      name: 'Dr. James Wilson',
      role: 'AI Ethics Advisor',
      bio: 'Leading researcher in AI ethics and responsible technology development.',
      image: '/images/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson'
    },
    {
<<<<<<< HEAD
      name: 'Elena Petrova',
      role: 'Quantum Computing Advisor',
      bio: 'Former research director at leading quantum computing labs.',
      image: '/images/team/elena-petrova.jpg',
      linkedin: 'https://linkedin.com/in/elena-petrova'
    }
  ];

  return (
=======
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Protecting digital assets with advanced security solutions',
      memberCount: 8
    },
    {
      name: 'Engineering',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building robust and scalable technology solutions',
      memberCount: 15
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      description: 'Managing cloud platforms and infrastructure services',
      memberCount: 10
    },
    {
      name: 'Quantum Technology',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      description: 'Developing next-generation quantum computing solutions',
      memberCount: 6
    },
    {
      name: 'Client Success',
      icon: Users,
      color: 'from-orange-500 to-yellow-500',
      description: 'Ensuring client success and project delivery',
      memberCount: 8
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
    }
  ];

  const departments = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible in AI and technology.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and their digital transformation.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous learning and professional development.',
      color: 'from-green-500 to-emerald-500'
=======
      bio: 'Leading expert in quantum computing and AI systems. PhD in Computer Science from MIT with 20+ publications.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarah_chen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Operations Officer',
      bio: 'Operations specialist with deep experience in scaling tech companies and managing global teams.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcus_rodriguez'
    }
  ];

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
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Our Team - Zion Tech Group" 
        description="Meet the exceptional team of innovators, engineers, and industry experts driving Zion Tech Group's mission to revolutionize technology."
        tags={["team", "leadership", "experts", "AI specialists", "quantum physicists", "cybersecurity experts", "Zion Tech Group"]}
        url="https://ziontechgroup.com/team"
      />

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.featured).map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full"
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              The Minds Behind Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Our world-class team of AI researchers, quantum engineers, and technology leaders are driving the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Departments */}
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {dept.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Locations */}
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {location.name}
                  <span className="ml-1 text-xs opacity-75">({location.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team Members */}
      {featuredMembers.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-gray-300">Our executive leadership driving strategic vision and innovation</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Users className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Leadership
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{member.department}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-200">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-3">{member.title}</p>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {member.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {locations.find(l => l.id === member.location)?.name}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

    <div className="min-h-screen bg-background">
      <SEO 
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
=======
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
=======
<<<<<<< HEAD
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
<<<<<<< HEAD
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
              </div>
=======
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{advisor.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{advisor.bio}</p>
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center"
                    aria-label={`${advisor.name} LinkedIn`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View Profile
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Departments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Departments
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organized expertise across key technology domains to deliver comprehensive solutions.
            </p>
          </div>
          
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
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
                </div>
              </div>
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our team and shape our culture of innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Regular Team Members */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-300">
              {filteredTeam.length > 0 
                ? `Showing ${filteredTeam.length} team members` 
                : 'No team members found matching your criteria'
              }
            </p>
          </div>
          
          {regularMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{member.department}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-200">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-3 text-sm">{member.title}</p>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2 text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {member.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {locations.find(l => l.id === member.location)?.name}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-blue-600/20 text-blue-400 rounded-md hover:bg-blue-600/30 transition-colors duration-200"
                        >
                          <Linkedin className="w-3 h-3" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-1.5 bg-gray-700/50 text-gray-300 rounded-md hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          <Mail className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {regularMembers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
              <p className="text-gray-300">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI, quantum technology, 
              and pushing the boundaries of what's possible. Join us in shaping the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Brain className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Innovation Culture</h3>
                <p className="text-gray-300 text-sm text-center">Work on cutting-edge technology</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Rocket className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Career Growth</h3>
                <p className="text-gray-300 text-sm text-center">Continuous learning and advancement</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Globe className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300 text-sm text-center">Transform businesses worldwide</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Submit Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======

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
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
<<<<<<< HEAD

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">
                Pushing boundaries and exploring new possibilities in technology
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-300 text-sm">
                Delivering the highest quality solutions and service
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Impact</h3>
              <p className="text-gray-300 text-sm">
                Making a positive difference in the world through technology
              </p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    </div>
  );
}