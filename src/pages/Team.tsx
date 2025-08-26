import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Code,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Oliveira",
      role: "Founder & CEO",
      image: "/images/team/kleber-oliveira.jpg",
      bio: "Visionary leader with 15+ years in technology innovation and AI development. Former Google engineer and AI researcher.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Product Development"],
      social: {
        linkedin: "https://linkedin.com/in/kleber-oliveira",
        twitter: "https://twitter.com/kleber_oliveira",
        email: "kleber@ziontechgroup.com"
      }
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "/images/team/sarah-chen.jpg",
      bio: "PhD in Computer Science from MIT, specializing in quantum computing and AI systems architecture.",
      expertise: ["Quantum Computing", "AI Architecture", "Research & Development"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        twitter: "https://twitter.com/sarah_chen_cto",
        email: "sarah@ziontechgroup.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Security Officer",
      image: "/images/team/marcus-rodriguez.jpg",
      bio: "Cybersecurity expert with 20+ years protecting Fortune 500 companies and government agencies.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      social: {
        linkedin: "https://linkedin.com/in/marcus-rodriguez",
        twitter: "https://twitter.com/marcus_cso",
        email: "marcus@ziontechgroup.com"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "/images/team/emily-watson.jpg",
      bio: "Leading researcher in autonomous AI systems and neural network architecture.",
      expertise: ["AI Research", "Neural Networks", "Autonomous Systems"],
      social: {
        linkedin: "https://linkedin.com/in/emily-watson",
        twitter: "https://twitter.com/emily_ai_research",
        email: "emily@ziontechgroup.com"
      }
    },
    {
      name: "Alex Thompson",
      role: "VP of Engineering",
      image: "/images/team/alex-thompson.jpg",
      bio: "Full-stack engineering leader with expertise in scalable cloud infrastructure and DevOps.",
      expertise: ["Cloud Architecture", "DevOps", "System Design"],
      social: {
        linkedin: "https://linkedin.com/in/alex-thompson",
        twitter: "https://twitter.com/alex_vp_eng",
        email: "alex@ziontechgroup.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Head of Product",
      image: "/images/team/priya-patel.jpg",
      bio: "Product strategist focused on user experience and market-driven innovation.",
      expertise: ["Product Strategy", "UX Design", "Market Research"],
      social: {
        linkedin: "https://linkedin.com/in/priya-patel",
        twitter: "https://twitter.com/priya_product",
        email: "priya@ziontechgroup.com"
      }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology and AI."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable systems that our clients can depend on."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that benefit humanity worldwide."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Delivering the highest quality solutions and service."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Users className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Zion Tech Group's revolutionary technology solutions. 
            Our diverse team of experts brings together decades of experience in AI, 
            cybersecurity, quantum computing, and more.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Members */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <Users className="h-20 w-20 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 hover:bg-blue-400 rounded-lg transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-slate-700 hover:bg-green-600 rounded-lg transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Our Team CTA */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Join us in shaping the future of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;