import React from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { Users,
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

export default function Leadership(...args: any[]): any {
  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      bio: "Former AI researcher at Stanford with 15+ years in enterprise technology. Led three successful tech startups to acquisition.",
      expertise: ["Artificial Intelligence", "Strategic Planning", "Innovation Management"],
      experience: "20+ years",
      education: "Ph.D. Computer Science, Stanford University",
      linkedin: "#",
      twitter: "#",
      email: "sarah.chen@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Marcus Rodriguez",
      position: "Chief Technology Officer",
      bio: "Quantum computing pioneer with expertise in emerging technologies. Previously led R&D at major tech corporations.",
      expertise: ["Quantum Computing", "Emerging Tech", "R&D Strategy"],
      experience: "18+ years",
      education: "M.S. Physics, MIT",
      linkedin: "#",
      twitter: "#",
      email: "marcus.rodriguez@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Elena Petrova",
      position: "Chief Innovation Officer",
      bio: "Blockchain and Web3 expert with deep knowledge of decentralized systems and digital transformation.",
      expertise: ["Blockchain", "Web3", "Digital Innovation"],
      experience: "16+ years",
      education: "Ph.D. Cryptography, ETH Zurich",
      linkedin: "#",
      twitter: "#",
      email: "elena.petrova@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Alex Thompson",
      position: "Chief Security Officer",
      bio: "Cybersecurity veteran with experience protecting Fortune 500 companies and government agencies.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      experience: "22+ years",
      education: "M.S. Information Security, Carnegie Mellon",
      linkedin: "#",
      twitter: "#",
      email: "alex.thompson@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "James Wilson",
      position: "Chief Operations Officer",
      bio: "Operations expert specializing in scaling technology companies and optimizing business processes.",
      expertise: ["Operations", "Process Optimization", "Scale Management"],
      experience: "19+ years",
      education: "MBA, Harvard Business School",
      linkedin: "#",
      twitter: "#",
      email: "james.wilson@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Michael Chang",
      position: "Chief Research Officer",
      bio: "Space technology researcher with experience at NASA and leading aerospace companies.",
      expertise: ["Space Tech", "Research", "Aerospace"],
      experience: "17+ years",
      education: "Ph.D. Aerospace Engineering, Caltech",
      linkedin: "#",
      twitter: "#",
      email: "michael.chang@ziontechgroup.com",
      image: "/api/placeholder/300/300"
    }
  ];

  const companyStats = [
    { icon: Users, label: "Team Members", value: "150+", description: "Global talent pool" },
    { icon: TrendingUp, label: "Growth Rate", value: "300%", description: "Year over year" },
    { icon: Globe, label: "Countries", value: "25+", description: "Global presence" },
    { icon: Award, label: "Awards", value: "50+", description: "Industry recognition" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries and explore uncharted territories in technology"
    },
    {
      icon: Users,
      title: "People Centered",
      description: "Our team and clients are at the heart of everything we do"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in every project and solution"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We create solutions that benefit humanity worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
            >
              Leadership Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Meet the visionary leaders driving innovation and shaping the future of technology at Zion Tech Group
            </motion.p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
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

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-12">
            {leadershipTeam.map((leader, index)              => (
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

                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"

                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"

                        <Phone className="w-5 h-5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Executive Leadership
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-cyan-400 text-2xl font-bold">{member.name.charAt(0)}</div>
                </div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)              => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
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

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index)              => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{achievement.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.label}</h3>
                <p className="text-slate-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;