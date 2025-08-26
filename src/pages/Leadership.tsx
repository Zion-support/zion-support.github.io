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
  Mail,
  Building,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

const Leadership: React.FC = () => {
  const executiveTeam = [
    {
      name: "Kleber Oliveira",
      role: "Founder & Chief Executive Officer",
      image: "/images/leadership/kleber-oliveira.jpg",
      bio: "Visionary entrepreneur and technology innovator with over 15 years of experience in AI, quantum computing, and enterprise technology. Former Google engineer and AI researcher who has led breakthrough innovations in autonomous systems.",
      expertise: ["Strategic Leadership", "AI Innovation", "Quantum Computing", "Business Development"],
      achievements: ["Forbes 30 Under 30", "MIT Technology Review Innovator", "50+ Patents Filed"],
      education: "PhD Computer Science, MIT",
      experience: "15+ years",
      social: {
        linkedin: "https://linkedin.com/in/kleber-oliveira",
        twitter: "https://twitter.com/kleber_oliveira",
        email: "kleber@ziontechgroup.com"
      },
      vision: "To democratize access to cutting-edge AI and quantum technologies, making them accessible to businesses of all sizes."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "/images/leadership/sarah-chen.jpg",
      bio: "Leading expert in artificial intelligence and autonomous systems with a PhD from MIT. Former research director at leading tech institutions and pioneer in AI ethics and responsible technology development.",
      expertise: ["AI Architecture", "Autonomous Systems", "Research & Development", "Technology Strategy"],
      achievements: ["100+ Research Papers", "IEEE Fellow", "AI Ethics Pioneer"],
      education: "PhD Computer Science, MIT",
      experience: "12+ years",
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        twitter: "https://twitter.com/sarah_chen_cto",
        email: "sarah@ziontechgroup.com"
      },
      vision: "Building AI systems that are not only powerful but also ethical, transparent, and beneficial to humanity."
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Security Officer",
      image: "/images/leadership/marcus-rodriguez.jpg",
      bio: "Cybersecurity expert with 20+ years protecting Fortune 500 companies and government agencies. Specializes in AI-powered security solutions and compliance automation.",
      expertise: ["Cybersecurity", "AI Security", "Compliance", "Risk Management"],
      achievements: ["Former NSA Analyst", "CISSP, CISM Certified", "Zero Security Breaches"],
      education: "MS Cybersecurity, Carnegie Mellon",
      experience: "20+ years",
      social: {
        linkedin: "https://linkedin.com/in/marcus-rodriguez",
        twitter: "https://twitter.com/marcus_cso",
        email: "marcus@ziontechgroup.com"
      },
      vision: "Creating a world where technology is secure by design, protecting businesses and individuals from emerging threats."
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Research Officer",
      image: "/images/leadership/emily-watson.jpg",
      bio: "Leading researcher in autonomous AI systems and neural network architecture. PhD in Computer Science with focus on consciousness and artificial general intelligence.",
      expertise: ["AI Research", "Neural Networks", "Consciousness", "AGI Development"],
      achievements: ["Published in Nature", "Turing Award Nominee", "AI Consciousness Pioneer"],
      education: "PhD Computer Science, Stanford",
      experience: "18+ years",
      social: {
        linkedin: "https://linkedin.com/in/emily-watson",
        twitter: "https://twitter.com/emily_ai_research",
        email: "emily@ziontechgroup.com"
      },
      vision: "Advancing AI research to create systems that understand, learn, and collaborate with humans naturally."
    }
  ];

  const boardMembers = [
    {
      name: "Dr. James Wilson",
      role: "Board Chairman",
      bio: "Former CEO of major technology companies and current advisor to several AI startups. Expert in scaling technology companies and strategic partnerships.",
      expertise: ["Strategic Planning", "Business Scaling", "Investor Relations"],
      education: "MBA, Harvard Business School",
      experience: "25+ years"
    },
    {
      name: "Lisa Thompson",
      role: "Board Member",
      bio: "Venture capitalist and technology investor with focus on AI and quantum computing startups. Has helped scale over 50 technology companies.",
      expertise: ["Venture Capital", "Technology Investment", "Startup Scaling"],
      education: "MBA, Stanford Graduate School of Business",
      experience: "20+ years"
    },
    {
      name: "David Park",
      role: "Board Member",
      bio: "Former CTO of Fortune 100 companies and technology consultant. Expert in digital transformation and enterprise technology strategy.",
      expertise: ["Digital Transformation", "Enterprise Technology", "Strategic Consulting"],
      education: "MS Computer Science, UC Berkeley",
      experience: "22+ years"
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Target,
      title: "Vision-Driven",
      description: "We lead with a clear vision of the future and inspire our team to achieve ambitious goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation-First",
      description: "We encourage creative thinking and breakthrough solutions that push the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "People-Centric",
      description: "We believe in empowering our team members and fostering a culture of collaboration and growth."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We lead with honesty, transparency, and build trust through consistent actions and ethical behavior."
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "We embrace lifelong learning and encourage our team to constantly develop new skills and knowledge."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We think globally and work to create positive change that benefits humanity worldwide."
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Intellectual Excellence",
      description: "We strive for the highest standards of intellectual rigor and innovation in everything we do."
    },
    {
      icon: Rocket,
      title: "Bold Innovation",
      description: "We take calculated risks and pursue breakthrough innovations that can transform industries."
    },
    {
      icon: Code,
      title: "Technical Mastery",
      description: "We maintain deep technical expertise and stay at the forefront of emerging technologies."
    },
    {
      icon: Zap,
      title: "Agile Execution",
      description: "We move quickly, adapt to change, and deliver results with speed and precision."
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
            <div className="p-4 bg-purple-600/20 rounded-full">
              <Building className="h-16 w-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving Zion Tech Group's mission to revolutionize 
            technology and create a better future through AI and quantum computing.
          </p>
        </motion.div>

        {/* Executive Team */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Executive Leadership</h2>
          <div className="space-y-12">
            {executiveTeam.map((executive, index) => (
              <motion.div
                key={executive.name}
                className={`bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <Users className="h-24 w-24 text-purple-400" />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                    <p className="text-purple-400 font-semibold text-lg">{executive.role}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{executive.bio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {executive.expertise.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements</h4>
                      <div className="space-y-1">
                        {executive.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center text-gray-300 text-sm">
                            <Award className="h-3 w-3 text-yellow-400 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Vision</h4>
                    <p className="text-gray-300 italic">"{executive.vision}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <div>{executive.education}</div>
                      <div>{executive.experience} experience</div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={executive.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={executive.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 hover:bg-blue-400 rounded-lg transition-colors duration-200"
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={`mailto:${executive.social.email}`}
                        className="p-2 bg-slate-700 hover:bg-green-600 rounded-lg transition-colors duration-200"
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Board of Directors */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
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
                
                <div className="text-xs text-gray-400">
                  <div>{member.education}</div>
                  <div>{member.experience} experience</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leadership Principles */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <principle.icon className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Values */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Company Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Leadership Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for exceptional leaders who share our vision and values. 
              Join us in building the future of technology and making a positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Leadership
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Leadership;