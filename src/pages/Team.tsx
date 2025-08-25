import React from 'react';
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
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      expertise: ['AI & Machine Learning', 'Quantum Technology', 'Strategic Leadership'],
      bio: 'Visionary leader with over 15 years of experience in AI and emerging technologies. Pioneering the future of autonomous business systems.',
      avatar: '👨‍💼',
      color: 'from-purple-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/kleber-zion',
      email: 'kleber@ziontechgroup.com',
      featured: true
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: ['Quantum Computing', 'AI Research', 'System Architecture'],
      bio: 'Leading quantum computing research and AI system architecture. PhD in Computer Science with focus on quantum algorithms.',
      avatar: '👩‍🔬',
      color: 'from-blue-500 to-cyan-500',
      linkedin: 'https://www.linkedin.com/in/sarah-chen-ai',
      email: 'sarah.chen@ziontechgroup.com',
      featured: true
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Security Officer',
      expertise: ['Cybersecurity', 'Compliance', 'Threat Intelligence'],
      bio: 'Cybersecurity expert with 20+ years protecting Fortune 500 companies. Specialized in AI-powered security solutions.',
      avatar: '👨‍💻',
      color: 'from-red-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/marcus-rodriguez-security',
      email: 'marcus.rodriguez@ziontechgroup.com',
      featured: true
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
      bio: 'Leading AI research initiatives with focus on responsible AI development. PhD in Machine Learning from MIT.',
      avatar: '👩‍💻',
      color: 'from-green-500 to-emerald-500',
      linkedin: 'https://www.linkedin.com/in/emily-watson-ai',
      email: 'emily.watson@ziontechgroup.com'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      expertise: ['Software Architecture', 'DevOps', 'Cloud Infrastructure'],
      bio: 'Experienced engineering leader building scalable cloud solutions and DevOps practices for enterprise clients.',
      avatar: '👨‍🔧',
      color: 'from-orange-500 to-yellow-500',
      linkedin: 'https://www.linkedin.com/in/alex-thompson-engineering',
      email: 'alex.thompson@ziontechgroup.com'
    },
    {
      name: 'Dr. James Kim',
      role: 'Quantum Research Lead',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Research Development'],
      bio: 'Quantum computing specialist developing next-generation quantum algorithms and quantum-safe security protocols.',
      avatar: '👨‍🔬',
      color: 'from-indigo-500 to-purple-500',
      linkedin: 'https://www.linkedin.com/in/james-kim-quantum',
      email: 'james.kim@ziontechgroup.com'
    },
    {
      name: 'Lisa Park',
      role: 'Head of Client Success',
      expertise: ['Client Relations', 'Project Management', 'Digital Transformation'],
      bio: 'Ensuring client success through strategic project management and digital transformation guidance.',
      avatar: '👩‍💼',
      color: 'from-pink-500 to-rose-500',
      linkedin: 'https://www.linkedin.com/in/lisa-park-success',
      email: 'lisa.park@ziontechgroup.com'
    },
    {
      name: 'David Wilson',
      role: 'Senior AI Engineer',
      expertise: ['Deep Learning', 'Computer Vision', 'AI Systems'],
      bio: 'Building cutting-edge AI systems and implementing deep learning solutions for enterprise applications.',
      avatar: '👨‍💻',
      color: 'from-teal-500 to-green-500',
      linkedin: 'https://www.linkedin.com/in/david-wilson-ai',
      email: 'david.wilson@ziontechgroup.com'
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Pioneering AI research and autonomous systems development',
      memberCount: 12
    },
    {
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
    }
  ];

  const values = [
    {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
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
            </p>
          </div>
          
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
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
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
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Full Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Talented professionals working together to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm">{member.role}</p>
                </div>
                
                <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-3">{member.bio}</p>
                
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded transition-all duration-200"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
}