import React from 'react';
import { Link  } from 'react-router-dom';
import { Users, Award, Brain, Shield, Linkedin, Mail, Github, Twitter  } from 'lucide-react';import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const TeamPage: React.FC  = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI and technology visionary with 15+ years of experience in enterprise solutions',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning, leading our AI research and development initiatives',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Deep Learning', 'Research']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'Data science expert specializing in predictive analytics and business intelligence',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/emily-watson-data',
      email: 'emily@ziontechgroup.com',
      expertise: ['Data Science', 'Analytics', 'Statistics']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Client Success',
      bio: 'Client success specialist ensuring exceptional customer experience and satisfaction',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/lisa-thompson-success',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Client Relations', 'Project Management', 'Customer Success']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Software Engineer',
      bio: 'Full-stack developer with expertise in scalable cloud architectures and microservices',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-dev',
      email: 'michael@ziontechgroup.com',
      expertise: ['Software Engineering', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Dr. James Park',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems and data',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/james-park-security',
      email: 'james@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance']
    }
  ]
  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Brain, label: 'Years Experience', value: '15+' },
    { icon: Shield, label: 'Client Satisfaction', value: '99%' }
  ]
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.',
      icon: Users
    },
    {
      title: 'Security',
      description: 'We prioritize the security and privacy of our clients\' data and systems.',
      icon: Shield
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="relative py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
            Meet Our <span className="text-cyan-400">Team
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            The brilliant minds behind our innovative AI and IT solutions. We're passionate about technology and dedicated to your success.
      {/* Stats Section */}
                <section className="py-16 bg-white"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <stat.icon className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-gray-900 mb-2"></div>
                {stat.value}
                <div className="text-gray-600 font-medium"></div>
                {stat.label}
            ))}
      {/* Team Members */}
                <section className="py-20 bg-gray-50"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Our Leadership Team
  
            <p className="text-xl text-gray-600"></p>
              Experienced professionals leading the future of AI and IT solutions,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"></div>
                <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center"></div>
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"></div>
                    <Users className="w-16 h-16 text-gray-600" />
                <div className="p-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                {member.name}
                <p className="text-cyan-600 font-semibold mb-3"></p>
                {member.role}
                <p className="text-gray-600 mb-4"></p>
                {member.bio}
                <div className="mb-4"></div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise
                    <div className="flex flex-wrap gap-2"></div>
                {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full"></span>
                {skill}
                      ))}
                <div className="flex space-x-3"></div>
                    <$2 />
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    <$2 />
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-600 transition-colors">
                      <Mail className="w-5 h-5" />
            ))}
      {/* Values Section */}
                <section className="py-20 bg-white"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Our Values
  
            <p className="text-xl text-gray-600"></p>
              The principles that guide our team and our work,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {values.map((value, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <value.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-gray-900 mb-3"></h3>
                {value.title}
                <p className="text-gray-600"></p>
                {value.description}
            ))}
      {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Join Our Team
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"></p>
            We're always looking for talented individuals who share our passion for innovation and excellence.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <$2 />
              to="/careers"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              View Open Positions
  
            <$2 />
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Get in Touch
  
          </div>
                </div>
      </section>
      <Footer />
    </div>
  ),
}
export default TeamPage</Link>
                </Link>
  </h2>
                </p>
  </h2>
                </p>
  </h2>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </span></span>
                </p></p>
                </p></p>
                </p></h1>
                </h3></h3>
                </h4></section>
                </section></section>
                </section>;