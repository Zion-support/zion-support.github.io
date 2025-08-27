import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket,
  Star,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Code,
  Database,
  Network,
  Atom,
  Eye,
  PenTool,
  MessageCircle,
  DollarSign,
  BarChart3,
  Building,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and business transformation.',
      expertise: ['AI & Machine Learning', 'Strategic Planning', 'Business Development'],
      social: {
        linkedin: 'https://linkedin.com/in/kleber-zion',
        twitter: 'https://twitter.com/kleberzion',
        github: 'https://github.com/kleberzion'
      }
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & Head of AI Research',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400',
      bio: 'Leading expert in artificial intelligence and quantum computing with a PhD from MIT.',
      expertise: ['Quantum Computing', 'Machine Learning', 'Research & Development'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      }
    },
    {
      name: 'Alex Rodriguez',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400',
      bio: 'Experienced engineering leader specializing in cloud architecture and scalable systems.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      social: {
        linkedin: 'https://linkedin.com/in/alexrodriguez',
        twitter: 'https://twitter.com/alexrodriguez',
        github: 'https://github.com/alexrodriguez'
      }
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      icon: Brain,
      description: 'Pioneering the future of artificial intelligence and quantum computing',
      teamSize: 25,
      focus: ['Machine Learning', 'Quantum Algorithms', 'AI Ethics', 'Research Publications']
    },
    {
      name: 'Engineering',
      icon: Code,
      description: 'Building robust, scalable, and innovative technology solutions',
      teamSize: 40,
      focus: ['Full-Stack Development', 'Cloud Infrastructure', 'DevOps', 'Quality Assurance']
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Protecting digital assets with cutting-edge security solutions',
      teamSize: 18,
      focus: ['Threat Intelligence', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Transforming data into actionable business intelligence',
      teamSize: 22,
      focus: ['Big Data', 'Business Intelligence', 'Predictive Analytics', 'Data Engineering']
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Enabling seamless cloud adoption and operational excellence',
      teamSize: 30,
      focus: ['Cloud Migration', 'Containerization', 'Automation', 'Infrastructure as Code']
    },
    {
      name: 'Emerging Technologies',
      icon: Atom,
      description: 'Exploring and implementing next-generation technologies',
      teamSize: 15,
      focus: ['Blockchain', 'IoT', 'Edge Computing', 'Quantum Applications']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace new technologies to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to achieve extraordinary results.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and relationships.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We\'re committed to creating technology that makes a positive difference in the world.'
    },
    {
      icon: Star,
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous learning and professional development.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: '50+', label: 'Patents', icon: Award },
    { number: '200+', label: 'Projects Delivered', icon: Rocket },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '24/7', label: 'Support', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the talented professionals behind Zion Tech Group. Our diverse team of experts is driving innovation in AI, quantum computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Meet Our <span className="text-zion-cyan">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            A diverse group of innovators, engineers, and visionaries working together 
            to transform the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-zion-cyan/20"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-semibold mb-3">{member.role}</p>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Github;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zion-slate-light/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Departments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                    <p className="text-zion-cyan text-sm">{dept.teamSize} team members</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">{dept.description}</p>
                <div>
                  <h4 className="text-white font-semibold mb-2">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.focus.map((area) => (
                      <span key={area} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our <span className="text-zion-cyan">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals who share our passion for innovation 
              and technology. Explore our open positions and become part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
