import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award, 
  Users, 
  TrendingUp, 
  Globe,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';

export default function Leadership() {
  const leadership = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Executive Officer",
      bio: "Dr. Chen brings over 20 years of experience in technology leadership and innovation. She has led multiple successful startups and has been instrumental in developing AI-powered solutions for Fortune 500 companies.",
      expertise: ["Artificial Intelligence", "Strategic Leadership", "Digital Transformation"],
      education: "Ph.D. Computer Science, Stanford University",
      experience: "Former CTO at TechCorp, VP Engineering at InnovateTech",
      image: "https://via.placeholder.com/300x300/6366F1/FFFFFF?text=Dr.+Sarah+Chen",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah.chen@ziontechgroup.com"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Michael is a visionary technologist with deep expertise in emerging technologies including quantum computing, blockchain, and edge computing. He has architected scalable systems for global enterprises.",
      expertise: ["Quantum Computing", "System Architecture", "Emerging Technologies"],
      education: "M.S. Computer Engineering, MIT",
      experience: "Former Principal Architect at CloudTech, Senior Engineer at QuantumCorp",
      image: "https://via.placeholder.com/300x300/10B981/FFFFFF?text=Michael+Rodriguez",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      email: "michael.rodriguez@ziontechgroup.com"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Chief Innovation Officer",
      bio: "Dr. Watson leads our innovation initiatives and research partnerships. She has published over 50 research papers and holds 15 patents in AI and machine learning technologies.",
      expertise: ["Research & Development", "AI Ethics", "Machine Learning"],
      education: "Ph.D. Machine Learning, Carnegie Mellon University",
      experience: "Former Research Director at AI Institute, Professor at Tech University",
      image: "https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Dr.+Emily+Watson",
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily.watson@ziontechgroup.com"
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Chief Security Officer",
      bio: "Alex is a cybersecurity expert with over 15 years of experience protecting critical infrastructure and enterprise systems. He has led security teams at major financial institutions.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      education: "M.S. Information Security, Georgia Tech",
      experience: "Former CISO at BankSecure, Security Director at FinTech Corp",
      image: "https://via.placeholder.com/300x300/EF4444/FFFFFF?text=Alex+Thompson",
      linkedin: "https://linkedin.com/in/alexthompson",
      twitter: "https://twitter.com/alexthompson",
      email: "alex.thompson@ziontechgroup.com"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Chief Operations Officer",
      bio: "Lisa oversees all operational aspects of Zion Tech Group, ensuring efficient delivery of services and maintaining high customer satisfaction across all business units.",
      expertise: ["Operations Management", "Process Optimization", "Customer Success"],
      education: "MBA, Harvard Business School",
      experience: "Former VP Operations at ScaleTech, Director at GlobalCorp",
      image: "https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Lisa+Park",
      linkedin: "https://linkedin.com/in/lisapark",
      twitter: "https://twitter.com/lisapark",
      email: "lisa.park@ziontechgroup.com"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Chief Financial Officer",
      bio: "James brings extensive financial expertise from both technology and traditional industries. He has successfully managed multi-billion dollar portfolios and led multiple funding rounds.",
      expertise: ["Financial Strategy", "Investment Management", "Strategic Planning"],
      education: "MBA Finance, Wharton School",
      experience: "Former CFO at GrowthTech, Investment Director at Venture Capital",
      image: "https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=James+Wilson",
      linkedin: "https://linkedin.com/in/jameswilson",
      twitter: "https://twitter.com/jameswilson",
      email: "james.wilson@ziontechgroup.com"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in technology"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Users,
      title: "People Centered",
      description: "Our team and our clients are at the heart of everything we do"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that make a difference worldwide"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Building for the long term with responsible business practices"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Delivering the highest quality in every project and interaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-4 h-4 mr-2" />
            Executive Leadership
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Leadership Team</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our executive team brings together decades of experience in technology, innovation, and business leadership to drive Zion Tech Group's mission forward.
          </motion.p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500/20"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{leader.title}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Education</h4>
                  <p className="text-gray-400 text-sm">{leader.education}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Experience</h4>
                  <p className="text-gray-400 text-sm">{leader.experience}</p>
                </div>
                
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700">
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={leader.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${leader.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our leadership and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe in leading by example, fostering innovation, and building a culture where every team member can thrive and contribute to our shared success. Our leadership team is committed to transparency, collaboration, and continuous learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-white font-semibold mb-3">Transparency</h3>
                <p className="text-gray-400 text-sm">Open communication and clear decision-making processes that build trust across the organization.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Innovation</h3>
                <p className="text-gray-400 text-sm">Encouraging creative thinking and calculated risk-taking to drive technological advancement.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Growth</h3>
                <p className="text-gray-400 text-sm">Investing in our people and providing opportunities for professional development and advancement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional leaders who share our vision and values. Explore opportunities to join our executive team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
