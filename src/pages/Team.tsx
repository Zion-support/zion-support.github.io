import React from 'react';
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
  const teamMembers = [
    {
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
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
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
              </div>
            </div>
          ))}
        </div>
      </div>

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
}