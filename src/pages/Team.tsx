import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { SEO } from '@/components/SEO';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in technology and AI. Former CTO at Fortune 500 companies.',
      image: '👩‍💼',
      expertise: ['AI Strategy', 'Digital Transformation', 'Leadership'],
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud architecture and DevOps with deep knowledge of enterprise-scale systems.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'Leading researcher in machine learning and AI ethics. PhD from Stanford with 20+ publications.',
      image: '👩‍🔬',
      expertise: ['Machine Learning', 'AI Ethics', 'Research'],
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily.watson@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      role: 'VP of Cybersecurity',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive experience in threat intelligence.',
      image: '👨‍🔒',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david.kim@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Client Success',
      bio: 'Dedicated to ensuring client satisfaction and successful project delivery across all engagements.',
      image: '👩‍💼',
      expertise: ['Client Relations', 'Project Management', 'Success Metrics'],
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa.thompson@ziontechgroup.com'
    },
    {
      name: 'James Wilson',
      role: 'Head of Infrastructure',
      bio: 'Infrastructure specialist with expertise in network design, system administration, and scalability.',
      image: '👨‍🏗️',
      expertise: ['Network Design', 'System Administration', 'Scalability'],
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james.wilson@ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of experts at Zion Tech Group. Our leadership brings decades of experience in AI, cloud computing, cybersecurity, and digital transformation."
        keywords="team, leadership, experts, AI specialists, technology leaders, Zion Tech Group"
        canonical="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Exceptional talent driving innovation and delivering transformative technology solutions
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership brings together decades of experience across technology, AI, and business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
=======
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      department: "Executive",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"],
      experience: "15+ years in technology leadership",
      education: "PhD in Computer Science, Stanford University",
      image: "👩‍💼",
      bio: "Visionary leader driving innovation in AI and emerging technologies. Former CTO at Fortune 500 tech company.",
      linkedin: "#",
      email: "sarah.chen@ziontechgroup.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      department: "Technology",
      expertise: ["Cloud Architecture", "DevOps", "System Design"],
      experience: "12+ years in software engineering",
      education: "MS in Computer Science, MIT",
      image: "👨‍💻",
      bio: "Expert in scalable cloud solutions and modern software architecture. Led successful cloud migrations for enterprise clients.",
      linkedin: "#",
      email: "michael.rodriguez@ziontechgroup.com"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief AI Officer",
      department: "AI Research",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      experience: "10+ years in AI research",
      education: "PhD in Machine Learning, Carnegie Mellon",
      image: "👩‍🔬",
      bio: "Leading researcher in AI and machine learning. Published 50+ papers and holds 15 patents in AI technology.",
      linkedin: "#",
      email: "emily.watson@ziontechgroup.com"
    },
    {
      name: "David Kim",
      role: "Head of Cybersecurity",
      department: "Security",
      expertise: ["Threat Detection", "Security Architecture", "Compliance"],
      experience: "14+ years in cybersecurity",
      education: "MS in Information Security, Georgia Tech",
      image: "👨‍🔒",
      bio: "Cybersecurity expert with deep experience in threat intelligence and security operations. Former security consultant for government agencies.",
      linkedin: "#",
      email: "david.kim@ziontechgroup.com"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Digital Transformation",
      department: "Consulting",
      expertise: ["Change Management", "Process Optimization", "Digital Strategy"],
      experience: "13+ years in business consulting",
      education: "MBA, Harvard Business School",
      image: "👩‍💼",
      bio: "Digital transformation specialist helping organizations navigate technological change and optimize business processes.",
      linkedin: "#",
      email: "lisa.thompson@ziontechgroup.com"
    },
    {
      name: "Dr. James Wilson",
      role: "Quantum Research Lead",
      department: "Research & Development",
      expertise: ["Quantum Computing", "Quantum Algorithms", "Research"],
      experience: "8+ years in quantum research",
      education: "PhD in Physics, Caltech",
      image: "👨‍🔬",
      bio: "Leading quantum computing research initiatives. Collaborates with leading universities and research institutions.",
      linkedin: "#",
      email: "james.wilson@ziontechgroup.com"
    },
    {
      name: "Maria Garcia",
      role: "Head of Cloud Solutions",
      department: "Cloud & DevOps",
      expertise: ["AWS", "Azure", "Kubernetes", "DevOps"],
      experience: "11+ years in cloud engineering",
      education: "BS in Computer Engineering, UC Berkeley",
      image: "👩‍💻",
      bio: "Cloud infrastructure expert specializing in scalable solutions and automation. Certified in multiple cloud platforms.",
      linkedin: "#",
      email: "maria.garcia@ziontechgroup.com"
    },
    {
      name: "Alex Johnson",
      role: "Head of Micro SAAS",
      department: "Product Development",
      expertise: ["SaaS Development", "Product Strategy", "User Experience"],
      experience: "9+ years in product management",
      education: "BS in Computer Science, University of Washington",
      image: "👨‍💼",
      bio: "Product leader focused on building scalable SaaS solutions. Successfully launched 5+ products with 100K+ users.",
      linkedin: "#",
      email: "alex.johnson@ziontechgroup.com"
    }
  ];

  const departments = [
    {
      name: "Executive",
      description: "Strategic leadership and company vision",
      memberCount: 1
    },
    {
      name: "Technology",
      description: "Core technology development and architecture",
      memberCount: 2
    },
    {
      name: "AI Research",
      description: "Artificial intelligence research and development",
      memberCount: 1
    },
    {
      name: "Security",
      description: "Cybersecurity and threat protection",
      memberCount: 1
    },
    {
      name: "Consulting",
      description: "Business transformation and strategy",
      memberCount: 1
    },
    {
      name: "Research & Development",
      description: "Emerging technology research",
      memberCount: 1
    },
    {
      name: "Cloud & DevOps",
      description: "Cloud infrastructure and automation",
      memberCount: 1
    },
    {
      name: "Product Development",
      description: "SaaS product development and strategy",
      memberCount: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the exceptional professionals driving innovation at Zion Tech Group. 
            Our diverse team brings together expertise from leading technology companies, 
            research institutions, and industry leaders.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-gray-300">Departments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
            <div className="text-gray-300">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300">PhD Holders</div>
          </div>
        </div>

        {/* Departments Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{dept.description}</p>
                <div className="text-blue-400 text-sm font-medium">
                  {dept.memberCount} member{dept.memberCount !== 1 ? 's' : ''}
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
                </div>
              </div>
            ))}
=======
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in technology innovation and business transformation. Former CTO at Fortune 500 companies.",
      expertise: ["AI Strategy", "Digital Transformation", "Business Innovation"],
      image: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen-zion"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Technology architect and AI researcher with deep expertise in machine learning, cloud infrastructure, and cybersecurity.",
      expertise: ["AI/ML", "Cloud Architecture", "Cybersecurity"],
      image: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez-zion"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief AI Officer",
      bio: "Leading AI researcher specializing in autonomous systems, neural networks, and ethical AI development.",
      expertise: ["Autonomous AI", "Neural Networks", "AI Ethics"],
      image: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emily-watson-zion"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Experienced engineering leader with expertise in scalable systems, DevOps, and software architecture.",
      expertise: ["System Architecture", "DevOps", "Scalability"],
      image: "/images/team/david-kim.jpg",
      linkedin: "https://linkedin.com/in/david-kim-zion"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Client Success",
      bio: "Client success expert with deep understanding of enterprise technology adoption and digital transformation.",
      expertise: ["Client Success", "Digital Adoption", "Change Management"],
      image: "/images/team/lisa-thompson.jpg",
      linkedin: "https://linkedin.com/in/lisa-thompson-zion"
    },
    {
      name: "Dr. James Wilson",
      role: "VP of Research & Development",
      bio: "Research leader focused on emerging technologies, quantum computing, and next-generation AI systems.",
      expertise: ["Emerging Tech", "Quantum Computing", "AI Research"],
      image: "/images/team/james-wilson.jpg",
      linkedin: "https://linkedin.com/in/james-wilson-zion"
=======
import { Users, Award, Lightbulb, Shield, Zap, Globe, Building, Heart } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      experience: "15+ years",
      avatar: "SC",
      bio: "Leading our AI research and development initiatives with expertise in neural networks and autonomous systems."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Security & Compliance",
      experience: "12+ years",
      avatar: "MR",
      bio: "Expert in threat detection, incident response, and compliance frameworks including SOC 2 and ISO 27001."
    },
    {
      name: "Dr. James Kim",
      role: "Quantum Computing Lead",
      expertise: "Quantum Systems",
      experience: "18+ years",
      avatar: "JK",
      bio: "Pioneering quantum computing solutions and quantum neural network architectures for enterprise applications."
    },
    {
      name: "Lisa Thompson",
      role: "Cloud & DevOps Director",
      expertise: "Infrastructure & Automation",
      experience: "14+ years",
      avatar: "LT",
      bio: "Specializing in cloud migration, infrastructure as code, and CI/CD pipeline optimization."
    },
    {
      name: "David Park",
      role: "Head of Research",
      expertise: "Emerging Technologies",
      experience: "16+ years",
      avatar: "DP",
      bio: "Leading research initiatives in blockchain, Web3, and next-generation technology solutions."
    },
    {
      name: "Amanda Foster",
      role: "Client Success Director",
      expertise: "Business Strategy",
      experience: "13+ years",
      avatar: "AF",
      bio: "Ensuring client success through strategic technology implementation and ongoing support."
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
    }
  ];

  const values = [
    {
<<<<<<< HEAD
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business value.",
      icon: "🎯"
    },
    {
      title: "Ethical AI",
      description: "We develop AI solutions that are not only powerful but also responsible and ethical.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Our team never stops learning, staying ahead of the latest technology trends.",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovative solutions. 
              Our diverse team brings together decades of experience in AI, cloud computing, 
              cybersecurity, and digital transformation.
            </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
=======
      icon: Innovation,
      title: "Innovation First",
      description: "We constantly push boundaries and explore new technologies to solve complex challenges."
    },
    {
      icon: Excellence,
      title: "Excellence in Delivery",
      description: "We maintain the highest standards in every project, ensuring exceptional quality and results."
    },
    {
      icon: Collaboration,
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and diverse perspectives to achieve extraordinary outcomes."
    },
    {
      icon: Integrity,
      title: "Integrity & Trust",
      description: "We build lasting relationships based on honesty, transparency, and ethical business practices."
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "500+", label: "Projects Completed", icon: Building }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet the Experts
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Behind the Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our diverse team of technology experts, researchers, and business strategists 
              work together to deliver cutting-edge solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
          </div>
        </div>
<<<<<<< HEAD
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Join us in shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
=======

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.department}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-3">{member.bio}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded">
=======
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology innovation and business transformation.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "AI researcher and technology architect with expertise in machine learning and cloud infrastructure.",
      expertise: ["Machine Learning", "Cloud Architecture", "AI Research"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity expert with deep knowledge in threat detection and enterprise security solutions.",
      expertise: ["Threat Detection", "Security Architecture", "Compliance"]
    },
    {
      name: "Emily Watson",
      role: "VP of Client Success",
      bio: "Client relationship expert focused on delivering exceptional value and ensuring project success.",
      expertise: ["Client Relations", "Project Management", "Business Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering innovative technology solutions 
              and exceptional client experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{member.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
                        {skill}
                      </span>
                    ))}
                  </div>
<<<<<<< HEAD
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-400">
                    <span className="font-medium text-gray-300">Experience:</span> {member.experience}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-medium text-gray-300">Education:</span> {member.education}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    💼
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    ✉️
                  </a>
                </div>
=======
      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders who drive innovation and guide our company's strategic direction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {member.avatar}
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <div className="text-sm text-gray-400 mb-3">
                  <span className="font-medium">{member.expertise}</span> • {member.experience}
                </div>
                <p className="text-gray-300 text-sm">{member.bio}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
<<<<<<< HEAD

        {/* Company Culture */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300 text-sm">
                We push boundaries and explore emerging technologies to solve complex challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300 text-sm">
                We believe in the power of diverse perspectives and collaborative problem-solving.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300 text-sm">
                We foster a culture of continuous learning and professional development.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-300 text-sm">
                We strive for excellence in everything we do, from code quality to client service.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology 
              and innovation. Join us in shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
=======
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values & Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our company culture.
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
=======
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Team Members Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the executives and leaders who drive our company's vision and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-6xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View Profile
                  </a>
                </div>
              </div>
            ))}
=======
      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Culture of Innovation
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we foster an environment where creativity thrives, 
                innovation is celebrated, and every team member has the opportunity to make a difference.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Continuous learning and professional development
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Collaborative problem-solving and knowledge sharing
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Work-life balance and flexible arrangements
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Recognition of achievements and contributions
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Heart className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Join Our Team</h3>
                <p className="text-gray-300 mb-6">
                  We're always looking for talented individuals who share our passion 
                  for innovation and excellence.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  View Open Positions
                </a>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Join Our Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and innovation. Join us in shaping the future of AI and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
=======
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise can help transform your business 
            and achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/careers"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Join Our Team
            </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who share our passion for innovation 
                and technology excellence.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Open Positions
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
// Icon components
const Innovation = ({ className }: { className?: string }) => (
  <Lightbulb className={className} />
);

const Excellence = ({ className }: { className?: string }) => (
  <Award className={className} />
);

const Collaboration = ({ className }: { className?: string }) => (
  <Users className={className} />
);

const Integrity = ({ className }: { className?: string }) => (
  <Shield className={className} />
);

>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
export default Team;