import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Heart, 
  Target, 
  Zap,
  ArrowRight,
  Linkedin,
  Mail
} from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      department: "Executive",
      image: "/team/sarah-chen.jpg",
      bio: "Visionary leader with 15+ years in technology innovation and business transformation.",
      expertise: ["Strategic Leadership", "AI Strategy", "Business Development"],
      linkedin: "https://linkedin.com/in/sarah-chen",
      email: "sarah.chen@ziontechgroup.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      department: "Technology",
      image: "/team/michael-rodriguez.jpg",
      bio: "Technology expert specializing in AI, cloud architecture, and emerging technologies.",
      expertise: ["AI/ML", "Cloud Architecture", "Technology Strategy"],
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      email: "michael.rodriguez@ziontechgroup.com"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Research Officer",
      department: "Research & Development",
      image: "/team/emily-watson.jpg",
      bio: "Leading researcher in quantum computing, AI consciousness, and advanced algorithms.",
      expertise: ["Quantum Computing", "AI Research", "Algorithm Development"],
      linkedin: "https://linkedin.com/in/emily-watson",
      email: "emily.watson@ziontechgroup.com"
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      department: "Cybersecurity",
      image: "/team/david-kim.jpg",
      bio: "Cybersecurity expert with deep experience in threat detection and security architecture.",
      expertise: ["Cybersecurity", "Threat Intelligence", "Security Architecture"],
      linkedin: "https://linkedin.com/in/david-kim",
      email: "david.kim@ziontechgroup.com"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Engineering",
      department: "Engineering",
      image: "/team/lisa-thompson.jpg",
      bio: "Engineering leader focused on scalable solutions and team development.",
      expertise: ["Software Engineering", "Team Leadership", "System Architecture"],
      linkedin: "https://linkedin.com/in/lisa-thompson",
      email: "lisa.thompson@ziontechgroup.com"
    },
    {
      name: "James Wilson",
      role: "VP of Business Development",
      department: "Business Development",
      image: "/team/james-wilson.jpg",
      bio: "Business strategist with expertise in partnerships and market expansion.",
      expertise: ["Business Strategy", "Partnerships", "Market Analysis"],
      linkedin: "https://linkedin.com/in/james-wilson",
      email: "james.wilson@ziontechgroup.com"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      icon: Zap
    },
    {
      title: "Excellence in Everything",
      description: "We maintain the highest standards in our work, from code quality to client relationships.",
      icon: Award
    },
    {
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and diverse perspectives to solve complex challenges.",
      icon: Users
    },
    {
      title: "Client Success",
      description: "Our success is measured by the success of our clients and the impact we create together.",
      icon: Target
    },
    {
      title: "Integrity & Trust",
      description: "We build lasting relationships based on honesty, transparency, and mutual respect.",
      icon: Heart
    }
  ];

  const departments = [
    {
      name: "Engineering",
      description: "Building innovative solutions with cutting-edge technology",
      memberCount: 45,
      focus: ["Software Development", "AI/ML", "Cloud Infrastructure", "DevOps"]
    },
    {
      name: "Research & Development",
      description: "Exploring the frontiers of technology and innovation",
      memberCount: 28,
      focus: ["Quantum Computing", "AI Research", "Emerging Technologies", "Prototyping"]
    },
    {
      name: "Cybersecurity",
      description: "Protecting digital assets with advanced security solutions",
      memberCount: 32,
      focus: ["Threat Detection", "Security Architecture", "Compliance", "Incident Response"]
    },
    {
      name: "Business Development",
      description: "Growing partnerships and expanding market presence",
      memberCount: 18,
      focus: ["Strategic Partnerships", "Market Analysis", "Client Relations", "Growth Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Passionate innovators, experts, and leaders working together to transform 
            the future of technology and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our company's mission and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-500 mb-4">
                    {member.department}
                  </p>
                </div>
                
                <p className="text-slate-600 mb-6 text-center">
                  {member.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
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
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-slate-600 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {dept.name}
                  </h3>
                  <span className="text-3xl font-bold text-blue-600">
                    {dept.memberCount}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  {dept.focus.map((focus, focusIndex) => (
                    <div key={focusIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {focus}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            innovation and excellence. Explore opportunities to grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;