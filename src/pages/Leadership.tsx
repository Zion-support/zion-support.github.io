import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';

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
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Leadership Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Meet the visionary leaders who guide our company's mission and drive 
            innovation in technology and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Meet Our Team
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              About Our Company
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {vision.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              {vision.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {vision.goals.map((goal, index) => (<div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-700">{goal}</p>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              business, and innovation.
            </p>
          </div>
          
          <div className="space-y-16">
            {leadershipTeam.map((leader, index) => (<div key={index} className={`bg-white rounded-2xl shadow-lg p-8 border border-slate-100 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="text-center md:text-left">
                    <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <Users className="w-24 h-24 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{leader.role}</p>
                    <div className="flex items-center justify-center md:justify-start text-sm text-slate-500 mb-4">
                      <MapPin className="w-4 h-4 mr-1"/>
                      {leader.location}
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                        <Linkedin className="w-5 h-5"/>
                      </a>
                      <a href={`mailto:${leader.email}`} className="w-10 h-10 bg-slate-600 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200">
                        <Mail className="w-5 h-5"/>
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Experience</h4>
                        <p className="text-slate-600 text-sm mb-4">{leader.experience}</p>
                        
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Education</h4>
                        <p className="text-slate-600 text-sm">{leader.education}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {leader.expertise.map((skill, skillIndex) => (<span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {skill}
                            </span>))}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-1">
                          {leader.achievements.map((achievement, achievementIndex) => (<li key={achievementIndex} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {achievement}
                            </li>))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Comp Values */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our comp culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (<div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white"/>
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

      {/* Comp Culture */}
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
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology and 
            transforming businesses around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Team
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default Leadership;
