import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Mail, Phone, Award, Users, Star } from 'lucide-react';

const TeamPage: React.FC = () => {
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
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical expert specializing in machine learning and cloud architecture',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'AI researcher and developer with expertise in deep learning and NLP',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michael-chen',
      email: 'michael@ziontechgroup.com',
      expertise: ['Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and business growth',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      email: 'emily@ziontechgroup.com',
      expertise: ['Product Strategy', 'UX Design', 'Growth']
    },
    {
      name: 'David Kim',
      role: 'Senior Data Scientist',
      bio: 'Data science expert with specialization in predictive analytics and big data',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/david-kim',
      email: 'david@ziontechgroup.com',
      expertise: ['Data Science', 'Predictive Analytics', 'Big Data']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Security',
      bio: 'Cybersecurity expert ensuring enterprise-grade security for all solutions',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Certifications' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Meet the experts behind our innovative AI and IT solutions. 
            Our diverse team of professionals is dedicated to delivering exceptional results.
          </p>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate professionals committed to innovation and excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-16 h-16 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded"
                        >
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
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our team and drive our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork and collaboration to achieve extraordinary results.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace innovation and continuously explore new technologies to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our expert team help you transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/careers"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;