import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Star, 
  Target, 
  TrendingUp, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Rocket,
  Building,
  Heart,
  Crown,
  Sparkles,
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Leadership() {
  const leadershipTeam = [
    {
      name: 'Kleber Santos',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.',
      expertise: ['AI & Machine Learning', 'Business Strategy', 'Technology Innovation', 'Team Leadership'],
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      bio: 'PhD in Computer Science with expertise in artificial intelligence, quantum computing, and emerging technologies. Leads our R&D initiatives and technology strategy.',
      expertise: ['Quantum Computing', 'AI Research', 'Technology Architecture', 'Innovation Strategy'],
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com',
      phone: '+1 302 464 0951'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Operations expert with deep experience in scaling technology companies and optimizing business processes. Ensures seamless delivery of our innovative solutions.',
      expertise: ['Operations Management', 'Process Optimization', 'Client Success', 'Team Development'],
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      phone: '+1 302 464 0952'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Leading researcher in artificial intelligence and machine learning. Drives innovation in our AI solutions and maintains our position at the cutting edge of technology.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Ethics', 'Research & Development'],
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com',
      phone: '+1 302 464 0953'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative problem-solving.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and ethical AI practices in everything we do.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better for everyone, everywhere.'
    }
  ];

  const achievements = [
    {
      metric: '500+',
      label: 'AI Solutions Deployed',
      description: 'Successfully implemented AI solutions across diverse industries'
    },
    {
      metric: '50+',
      label: 'Enterprise Clients',
      description: 'Trusted by leading companies worldwide'
    },
    {
      metric: '95%',
      label: 'Client Satisfaction',
      description: 'Consistently high satisfaction ratings from our clients'
    },
    {
      metric: '25+',
      label: 'Industry Awards',
      description: 'Recognition for innovation and excellence in technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Leadership - Zion Tech Group"
        description="Meet the visionary leaders driving innovation at Zion Tech Group. Our experienced team is committed to transforming businesses through cutting-edge AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Leadership</span>
              <br />Team
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Visionary leaders with deep expertise in AI, technology innovation, and business transformation. 
              Our team is dedicated to revolutionizing how businesses leverage technology.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the experienced professionals who are driving innovation and growth at Zion Tech Group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-cyan-400/20"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 text-lg font-semibold mb-4">{leader.title}</p>
                    <p className="text-slate-300 mb-6 leading-relaxed">{leader.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Milestones that demonstrate our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{achievement.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.label}</h3>
                <p className="text-slate-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Join Our Mission
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're building a team of passionate innovators who believe in the power of technology 
              to transform businesses and improve lives. If you share our vision, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-400/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
              <p className="text-slate-300">
                Ready to discuss how our leadership team can help transform your business?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300 text-sm">
                  +1 302 464 0950<br />
                  Mon-Fri 9AM-6PM EST
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300 text-sm">
                  kleber@ziontechgroup.com<br />
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}