import React from 'react';
import Link from 'next/link';
import { Users, Award, Globe, Lightbulb, Target, Heart, Shield, Rocket, Brain, Code, Palette, Database, Network, Zap, Star, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Leadership() {
  const leadershipTeam = [
    {
      name: 'Kleber Santos',
      title: 'Founder & CEO',
      department: 'Executive Leadership',
      bio: 'Visionary leader with over 15 years of experience in AI, quantum computing, and enterprise technology. Founded Zion Tech Group with the mission to democratize cutting-edge technology for businesses worldwide.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Strategic Leadership', 'Enterprise Solutions'],
      achievements: ['Led 50+ enterprise transformations', 'Pioneered quantum AI solutions', 'Named Top 40 Under 40 Tech Leaders'],
      image: '/images/leadership/kleber-santos.jpg',
      linkedin: 'https://www.linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      icon: Brain
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      bio: 'Former Google AI researcher with a PhD in Computer Science from MIT. Expert in large language models, autonomous systems, and AI ethics. Leads our R&D initiatives and technology strategy.',
      expertise: ['AI Research', 'Machine Learning', 'Ethical AI', 'Product Strategy'],
      achievements: ['Published 25+ research papers', 'Led AI teams at Google', 'MIT Technology Review Innovator'],
      image: '/images/leadership/sarah-chen.jpg',
      linkedin: 'https://www.linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      icon: Code
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Security Officer',
      department: 'Security & Compliance',
      bio: 'Cybersecurity expert with 20+ years protecting Fortune 500 companies. Former CISO at major financial institutions. Specializes in zero-trust architecture and compliance automation.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management', 'Incident Response'],
      achievements: ['CISSP, CISM, CISA certified', 'Led 100+ security audits', 'Cybersecurity Leader of the Year'],
      image: '/images/leadership/michael-rodriguez.jpg',
      linkedin: 'https://www.linkedin.com/in/michael-rodriguez',
      twitter: 'https://twitter.com/mrodriguez',
      email: 'michael@ziontechgroup.com',
      icon: Shield
    },
    {
      name: 'Dr. Elena Petrova',
      title: 'Chief Research Officer',
      department: 'Research & Development',
      bio: 'Quantum physicist with breakthrough research in quantum neural networks. Former researcher at IBM Quantum and CERN. Leading our quantum computing initiatives and scientific breakthroughs.',
      expertise: ['Quantum Computing', 'Quantum AI', 'Physics Research', 'Innovation'],
      achievements: ['PhD from Caltech', 'Published in Nature', 'Quantum Innovation Award'],
      image: '/images/leadership/elena-petrova.jpg',
      linkedin: 'https://www.linkedin.com/in/elena-petrova',
      twitter: 'https://twitter.com/elenapetrova',
      email: 'elena@ziontechgroup.com',
      icon: Rocket
    },
    {
      name: 'David Kim',
      title: 'Chief Product Officer',
      department: 'Product & Design',
      bio: 'Product visionary with experience at Apple and Tesla. Expert in user experience design and product strategy. Leads our product development and customer experience initiatives.',
      expertise: ['Product Strategy', 'UX Design', 'Customer Experience', 'Innovation'],
      achievements: ['Led 10+ successful product launches', 'Apple Design Award winner', 'Product Leader of the Year'],
      image: '/images/leadership/david-kim.jpg',
      linkedin: 'https://www.linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      email: 'david@ziontechgroup.com',
      icon: Palette
    },
    {
      name: 'Maria Garcia',
      title: 'Chief Operations Officer',
      department: 'Operations & Delivery',
      bio: 'Operations expert with experience scaling technology companies from startup to enterprise. Former VP of Operations at Microsoft. Ensures seamless service delivery and operational excellence.',
      expertise: ['Operations Management', 'Service Delivery', 'Process Optimization', 'Team Leadership'],
      achievements: ['Scaled operations to 1000+ employees', '99.9% service uptime', 'Operations Excellence Award'],
      image: '/images/leadership/maria-garcia.jpg',
      linkedin: 'https://www.linkedin.com/in/maria-garcia',
      twitter: 'https://twitter.com/mariagarcia',
      email: 'maria@ziontechgroup.com',
      icon: Database
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to solve complex problems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'People Matter',
      description: 'Our team is our greatest asset, and we invest in their growth and well-being.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We build solutions that help businesses worldwide transform and grow.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing market conditions and customer needs.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'Years of Combined Experience', value: '150+', icon: Award },
    { label: 'Enterprise Clients Served', value: '500+', icon: Users },
    { label: 'Countries Reached', value: '25+', icon: Globe },
    { label: 'Innovation Awards', value: '15+', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our leadership team brings together decades of experience from the world's leading technology companies, research institutions, and innovative startups.
          </p>
        </div>

        {/* Leadership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Executive Leadership Team
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                      <div className="text-lg font-semibold text-blue-400 mb-1">{leader.title}</div>
                      <div className="text-sm text-gray-400 mb-3">{leader.department}</div>
                      <div className="flex gap-3">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                          aria-label={`${leader.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-blue-400" />
                        </a>
                        <a
                          href={leader.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                          aria-label={`${leader.name} Twitter`}
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                          aria-label={`Email ${leader.name}`}
                        >
                          <Mail className="w-4 h-4 text-blue-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Leadership Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Our Leadership Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Servant Leadership</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    We believe in leading by serving. Our leaders prioritize the growth and well-being of their teams, 
                    creating an environment where everyone can thrive and reach their full potential.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This approach has enabled us to build high-performing teams that consistently deliver exceptional results 
                    for our clients while maintaining a positive and collaborative culture.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation Through Collaboration</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    We foster a culture of open collaboration where diverse perspectives drive innovation. 
                    Our leaders encourage creative thinking and provide the resources needed to turn ideas into reality.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    By combining expertise from different domains, we create breakthrough solutions that address 
                    complex challenges in ways that wouldn't be possible working in isolation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our leadership team is committed to delivering exceptional results and building long-term partnerships. 
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}