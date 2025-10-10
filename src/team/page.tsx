import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Brain, Shield, Linkedin, Mail, Github, Twitter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const TeamPage: React.FC = () => {
  const teamMembers = [
    {
=======
;
const TeamPage: React.FC = () => {
};
const teamMembers = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
    };
  ];
<<<<<<< HEAD
  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Brain, label: 'Years Experience', value: '15+' },
    { icon: Shield, label: 'Client Satisfaction', value: '99%' }
  ];
  const values = [
    {
=======
;
const stats = [
[
        { icon: Users, label: 'Team Members', value: '50+' },
        { icon: Award, label: 'Awards Won', value: '25+' },
        { icon: Brain, label: 'Years Experience', value: '15+' },
        { icon: Shield, label: 'Client Satisfaction', value: '99%' };
  ];
;
const values = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
<<<<<<< HEAD
      {/* Hero Section */}
=======
      {/* Hero Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The brilliant minds behind our innovative AI and IT solutions. We're passionate about technology and dedicated to your success.
          </p>
        </div>
      </section>
<<<<<<< HEAD
      {/* Stats Section */}
=======
      {/* Stats Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat .icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))};
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Team Members */}
=======
      {/* Team Members */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
  </
            <p className="text-xl text-gray-600">
              Experienced professionals leading the future of AI and IT solutions,
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                          {skill};
                        </span>
                      ))};
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a href={member.linkedin};
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
<<<<<<< HEAD
                    <a
                      href={`mailto:${member.email}`}
=======
                    <a href={`mailto:${member.email}`};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      className="text-gray-400 hover:text-cyan-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Values Section */}
=======
      {/* Values Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
  </
            <p className="text-xl text-gray-600">
              The principles that guide our team and our work,
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value .icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))};
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */}
=======
      {/* CTA Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Team;
  </
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Link
              to="/careers"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              View Open Positions
  </
            <Link
              to="/contact"
=======
            <Link to="/careers"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              View Open Positions
            </Link>
            <Link to="/contact"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Get in Touch
  </
          </div>
        </div>
      </section>
      <Footer />
    </div>
<<<<<<< HEAD
  ),
}
export default TeamPage;
  </Link>
  </Link>
  </h2>
  </p>
  </h2>
  </p>
  </h2>
=======
  )};
export default TeamPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
