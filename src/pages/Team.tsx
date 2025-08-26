import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Heart
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Kleber Santos',
    role: 'Founder & CEO',
    bio: 'Visionary leader with over 15 years of experience in technology and innovation. Passionate about creating solutions that drive business transformation.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/klebersantos',
    twitter: 'https://twitter.com/klebersantos',
    email: 'kleber@ziontechgroup.com',
    expertise: ['AI & Machine Learning', 'Digital Transformation', 'Strategic Leadership'],
    achievements: ['Forbes 30 Under 30', 'Tech Innovator Award 2024', '100+ Successful Projects']
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Leading AI researcher and technology strategist with expertise in quantum computing and advanced analytics.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    email: 'sarah@ziontechgroup.com',
    expertise: ['Quantum Computing', 'AI Research', 'Technology Architecture'],
    achievements: ['PhD Computer Science', '50+ Research Papers', 'Patent Holder']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Operations Officer',
    bio: 'Operations expert specializing in scaling technology companies and optimizing business processes.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/michaelrodriguez',
    twitter: 'https://twitter.com/michaelrodriguez',
    email: 'michael@ziontechgroup.com',
    expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'],
    achievements: ['MBA Harvard', '15+ Years Experience', 'Scaled 3 Startups']
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Research & Development',
    bio: 'Innovation leader driving breakthrough technologies in cybersecurity and sustainable computing.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/emilywatson',
    twitter: 'https://twitter.com/emilywatson',
    email: 'emily@ziontechgroup.com',
    expertise: ['Cybersecurity', 'Green Computing', 'R&D Strategy'],
    achievements: ['PhD Cybersecurity', 'Industry Expert', 'Thought Leader']
  },
  {
    name: 'Alex Thompson',
    role: 'VP of Engineering',
    bio: 'Engineering leader with expertise in building scalable systems and leading high-performing teams.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/alexthompson',
    twitter: 'https://twitter.com/alexthompson',
    email: 'alex@ziontechgroup.com',
    expertise: ['Software Architecture', 'Team Leadership', 'System Design'],
    achievements: ['20+ Years Experience', 'Led 100+ Engineers', 'Architecture Expert']
  },
  {
    name: 'Lisa Park',
    role: 'VP of Business Development',
    bio: 'Strategic business development leader focused on partnerships and market expansion.',
    image: '/api/placeholder/300/300',
    linkedin: 'https://linkedin.com/in/lisapark',
    twitter: 'https://twitter.com/lisapark',
    email: 'lisa@ziontechgroup.com',
    expertise: ['Partnerships', 'Market Strategy', 'Business Growth'],
    achievements: ['15+ Years Experience', '100+ Partnerships', 'Market Expert']
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible, always seeking new ways to solve complex challenges.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best solutions come from diverse teams working together towards common goals.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and unwavering commitment to ethical business practices.'
  },
  {
    icon: Heart,
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to delivering exceptional value and results.'
  }
];

const stats = [
  { label: 'Team Members', value: '50+', icon: Users },
  { label: 'Years Combined Experience', value: '500+', icon: Award },
  { label: 'Successful Projects', value: '1000+', icon: Target },
  { label: 'Patents & Innovations', value: '25+', icon: Lightbulb }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              We're a diverse team of innovators, engineers, and visionaries dedicated to transforming 
              the future of technology. Our collective expertise spans AI, cybersecurity, quantum computing, 
              and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the visionary leaders who are driving innovation and shaping the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <Users className="w-20 h-20 text-zion-cyan" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-zion-cyan/10 text-zion-cyan px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                          <Award className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-zion-cyan/20">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and technology. Join us in shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/careers"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="btn-neon px-8 py-4 text-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}