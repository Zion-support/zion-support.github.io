import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Building,
  Zap,
  Star,
  Target,
  CheckCircle
} from 'lucide-react';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business transformation. Expert in AI, quantum computing, and autonomous systems.',
      expertise: ['AI & Machine Learning', 'Business Strategy', 'Technology Innovation'],
      experience: '15+ years',
      education: 'Computer Science, Business Administration',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      description: 'Pioneering the future of artificial intelligence and autonomous systems',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      team: [
        {
          name: 'Dr. Sarah Chen',
          role: 'Chief AI Scientist',
          bio: 'Leading research in neural networks and autonomous decision-making systems',
          expertise: ['Deep Learning', 'Neural Networks', 'AI Ethics']
        },
        {
          name: 'Marcus Rodriguez',
          role: 'AI Research Engineer',
          bio: 'Specializing in quantum machine learning and AI optimization',
          expertise: ['Quantum ML', 'Algorithm Optimization', 'AI Systems']
        }
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Protecting digital assets with advanced security solutions',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      team: [
        {
          name: 'Alex Thompson',
          role: 'Chief Security Officer',
          bio: 'Expert in threat detection and compliance automation',
          expertise: ['Threat Intelligence', 'SOC2 Compliance', 'Security Architecture']
        },
        {
          name: 'Priya Patel',
          role: 'Security Engineer',
          bio: 'Specializing in quantum-safe cryptography and zero-trust security',
          expertise: ['Cryptography', 'Zero-Trust', 'Incident Response']
        }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Building scalable and resilient technology foundations',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      team: [
        {
          name: 'David Kim',
          role: 'Cloud Architect',
          bio: 'Designing enterprise-grade cloud solutions and DevOps automation',
          expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure as Code']
        },
        {
          name: 'Emily Watson',
          role: 'Infrastructure Engineer',
          bio: 'Expert in 5G networks and edge computing solutions',
          expertise: ['5G Networks', 'Edge Computing', 'Network Optimization']
        }
      ]
    },
    {
      name: 'Business Solutions',
      description: 'Transforming businesses through innovative technology',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      team: [
        {
          name: 'Michael Chang',
          role: 'Business Solutions Director',
          bio: 'Leading digital transformation initiatives for enterprise clients',
          expertise: ['Digital Transformation', 'Business Process Automation', 'Change Management']
        },
        {
          name: 'Lisa Anderson',
          role: 'Solutions Architect',
          bio: 'Designing custom solutions for healthcare and financial services',
          expertise: ['Healthcare IT', 'FinTech Solutions', 'Industry Solutions']
        }
      ]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success - we measure our performance by your outcomes'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building secure, reliable solutions that protect your business'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Delivering exceptional results that exceed expectations'
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Passionate technologists, innovators, and problem-solvers dedicated to transforming businesses 
            through cutting-edge AI and technology solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Leadership Team</h2>
          <div className="grid lg:grid-cols-1 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                      <Users className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 text-lg mb-4">{leader.role}</p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-300 mb-6">{leader.bio}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3">Expertise</h4>
                        <ul className="space-y-2">
                          {leader.expertise.map((skill, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3">Experience</h4>
                        <p className="text-gray-300 mb-3">{leader.experience}</p>
                        <h4 className="text-cyan-400 font-semibold mb-3">Education</h4>
                        <p className="text-gray-300">{leader.education}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Departments</h2>
          <div className="space-y-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mr-6`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                    <p className="text-gray-300">{dept.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {dept.team.map((member, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                      <p className="text-cyan-400 mb-3">{member.role}</p>
                      <p className="text-gray-300 mb-4">{member.bio}</p>
                      <div>
                        <h5 className="text-cyan-400 font-semibold mb-2">Expertise</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIdx) => (
                            <span key={skillIdx} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Join us in shaping the future of AI and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}