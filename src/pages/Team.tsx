import React from 'react';
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
                </div>
              </div>
            ))}
          </div>
        </div>

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
                        {skill}
                      </span>
                    ))}
                  </div>
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
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
};

export default Team;