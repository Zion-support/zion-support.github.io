import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Award,
  Globe,
  Code,
  Database,
  Network,
  Smartphone,
  Rocket
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Kleber Santos',
    role: 'Founder & CEO',
    expertise: ['AI & Machine Learning', 'Quantum Technology', 'Strategic Leadership'],
    bio: 'Visionary leader with 15+ years of experience in cutting-edge technology. Pioneering the future of AI and quantum computing solutions.',
    avatar: '/images/team/kleber-santos.jpg',
    linkedin: 'https://linkedin.com/in/klebersantos',
    email: 'kleber@ziontechgroup.com'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: ['Quantum Computing', 'AI Research', 'System Architecture'],
    bio: 'PhD in Quantum Physics with expertise in quantum algorithms and AI systems. Leading our breakthrough technology initiatives.',
    avatar: '/images/team/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen',
    email: 'sarah@ziontechgroup.com'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Cybersecurity',
    expertise: ['Zero Trust Security', 'Compliance', 'Threat Intelligence'],
    bio: 'Former government cybersecurity expert with deep knowledge of enterprise security and compliance frameworks.',
    avatar: '/images/team/marcus-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/marcusrodriguez',
    email: 'marcus@ziontechgroup.com'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'AI Research Director',
    expertise: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    bio: 'Leading researcher in AI with publications in top-tier journals. Specializing in practical AI applications for business.',
    avatar: '/images/team/emily-watson.jpg',
    linkedin: 'https://linkedin.com/in/emilywatson',
    email: 'emily@ziontechgroup.com'
  },
  {
    name: 'Alex Kim',
    role: 'Cloud Infrastructure Lead',
    expertise: ['Cloud Architecture', 'DevOps', 'Scalable Systems'],
    bio: 'Expert in building scalable cloud infrastructure and implementing DevOps best practices for enterprise clients.',
    avatar: '/images/team/alex-kim.jpg',
    linkedin: 'https://linkedin.com/in/alexkim',
    email: 'alex@ziontechgroup.com'
  },
  {
    name: 'Priya Patel',
    role: 'Digital Transformation Director',
    expertise: ['Business Process Optimization', 'Change Management', 'Digital Strategy'],
    bio: 'Specialist in helping organizations navigate digital transformation with proven methodologies and frameworks.',
    avatar: '/images/team/priya-patel.jpg',
    linkedin: 'https://linkedin.com/in/priyapatel',
    email: 'priya@ziontechgroup.com'
  }
];

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions and research',
    teamSize: '12+ experts'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security and compliance solutions',
    teamSize: '8+ experts'
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and DevOps expertise',
    teamSize: '10+ experts'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Business process optimization and change management',
    teamSize: '6+ experts'
  },
  {
    icon: Rocket,
    title: 'Emerging Technologies',
    description: 'Quantum computing, space tech, and innovation',
    teamSize: '15+ experts'
  },
  {
    icon: Globe,
    title: 'Global Solutions',
    description: 'International expertise and localized support',
    teamSize: '20+ experts'
  }
];

const stats = [
  { value: '50+', label: 'Team Members', description: 'Global team of experts' },
  { value: '15+', label: 'Years Experience', description: 'Industry expertise' },
  { value: '500+', label: 'Projects Delivered', description: 'Successful implementations' },
  { value: '25+', label: 'Countries Served', description: 'Global reach' }
];

export default function Team() {
  return (
    <>
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet our expert team of technology professionals, AI researchers, and industry leaders driving innovation at Zion Tech Group."
        canonical="/team"
        url="https://ziontechgroup.com/team"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            World-class experts, innovators, and technology leaders working together to transform businesses through cutting-edge solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-zion-purple/20">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized teams deliver excellence across all technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="text-zion-cyan font-medium">{area.teamSize}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg font-semibold text-white hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}