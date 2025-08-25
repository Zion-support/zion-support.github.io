import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Mail,
  Phone,
  MapPin,
  Globe,
  Brain,
  Shield,
  Cpu,
  Network,
  Building,
  Rocket,
  Star,
  CheckCircle
} from 'lucide-react';

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 45 },
    { id: 'leadership', name: 'Leadership', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 18 },
    { id: 'ai-research', name: 'AI Research', count: 12 },
    { id: 'sales', name: 'Sales & Business', count: 7 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 45 },
    { id: 'middletown', name: 'Middletown, DE', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 5 }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Kleber Santos",
      title: "Chief Executive Officer & Founder",
      department: "leadership",
      location: "middletown",
      avatar: "/team/kleber-santos.jpg",
      bio: "Visionary leader with over 15 years of experience in AI, quantum computing, and enterprise technology. Founded Zion Tech Group to revolutionize how businesses leverage cutting-edge technology.",
      expertise: ["AI Strategy", "Quantum Computing", "Enterprise Leadership", "Innovation Management"],
      education: "Ph.D. Computer Science, MIT",
      experience: "15+ years",
      linkedin: "https://linkedin.com/in/kleber-santos",
      twitter: "https://twitter.com/klebersantos",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950",
      featured: true,
      achievements: [
        "Named 'AI Innovator of the Year' 2024",
        "Led 50+ enterprise AI transformations",
        "Published 25+ research papers",
        "Speaker at major tech conferences"
      ]
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      department: "leadership",
      location: "middletown",
      avatar: "/team/sarah-chen.jpg",
      bio: "Leading expert in artificial intelligence and autonomous systems. Drives technological innovation and oversees all technical initiatives at Zion Tech Group.",
      expertise: ["AI Architecture", "Autonomous Systems", "Machine Learning", "System Design"],
      education: "Ph.D. Artificial Intelligence, Stanford",
      experience: "12+ years",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@ziontechgroup.com",
      phone: "+1 302 464 0951",
      featured: true,
      achievements: [
        "Former Google AI Research Lead",
        "100+ AI system deployments",
        "15 patents in AI technology",
        "IEEE Fellow"
      ]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "Chief Research Officer",
      department: "ai-research",
      location: "middletown",
      avatar: "/team/michael-rodriguez.jpg",
      bio: "Pioneering researcher in quantum computing and neural networks. Leads breakthrough research initiatives that push the boundaries of computational technology.",
      expertise: ["Quantum Computing", "Neural Networks", "Research Strategy", "Academic Collaboration"],
      education: "Ph.D. Quantum Physics, Caltech",
      experience: "10+ years",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      twitter: "https://twitter.com/mrodriguez",
      email: "michael@ziontechgroup.com",
      phone: "+1 302 464 0952",
      featured: true,
      achievements: [
        "Quantum computing breakthroughs",
        "Published in Nature & Science",
        "Collaboration with CERN",
        "Nobel Prize nominee 2023"
      ]
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Chief Security Officer",
      department: "leadership",
      location: "remote",
      avatar: "/team/alex-thompson.jpg",
      bio: "Cybersecurity expert specializing in AI-powered security solutions and compliance automation. Ensures all Zion Tech Group solutions meet the highest security standards.",
      expertise: ["Cybersecurity", "AI Security", "Compliance", "Risk Management"],
      education: "M.S. Cybersecurity, Carnegie Mellon",
      experience: "8+ years",
      linkedin: "https://linkedin.com/in/alex-thompson",
      twitter: "https://twitter.com/alexthompson",
      email: "alex@ziontechgroup.com",
      phone: "+1 302 464 0953",
      featured: false,
      achievements: [
        "Former NSA cybersecurity analyst",
        "SOC2 compliance automation expert",
        "Zero security breaches in 5 years",
        "CISSP, CISM certified"
      ]
    },
    {
      id: 5,
      name: "Jennifer Lee",
      title: "VP of Engineering",
      department: "engineering",
      location: "middletown",
      avatar: "/team/jennifer-lee.jpg",
      bio: "Experienced engineering leader overseeing the development of cutting-edge AI and quantum technology solutions. Manages teams of world-class engineers and developers.",
      expertise: ["Engineering Leadership", "AI Development", "Team Management", "Product Architecture"],
      education: "M.S. Computer Engineering, UC Berkeley",
      experience: "9+ years",
      linkedin: "https://linkedin.com/in/jennifer-lee",
      twitter: "https://twitter.com/jenniferlee",
      email: "jennifer@ziontechgroup.com",
      phone: "+1 302 464 0954",
      featured: false,
      achievements: [
        "Led 20+ successful product launches",
        "Managed 100+ engineering team",
        "Reduced development time by 40%",
        "Former Google Engineering Manager"
      ]
    },
    {
      id: 6,
      name: "David Kim",
      title: "Senior AI Research Scientist",
      department: "ai-research",
      location: "remote",
      avatar: "/team/david-kim.jpg",
      bio: "Leading researcher in autonomous systems and edge computing. Develops next-generation AI solutions that operate efficiently in resource-constrained environments.",
      expertise: ["Autonomous Systems", "Edge Computing", "AI Optimization", "Research"],
      education: "Ph.D. Computer Science, MIT",
      experience: "7+ years",
      linkedin: "https://linkedin.com/in/david-kim",
      twitter: "https://twitter.com/davidkim",
      email: "david@ziontechgroup.com",
      phone: "+1 302 464 0955",
      featured: false,
      achievements: [
        "5 patents in autonomous systems",
        "Published 20+ research papers",
        "AI optimization breakthroughs",
        "Former Tesla AI researcher"
      ]
    },
    {
      id: 7,
      name: "Emily Watson",
      title: "VP of Business Development",
      department: "sales",
      location: "amsterdam",
      avatar: "/team/emily-watson.jpg",
      bio: "Strategic business leader expanding Zion Tech Group's global presence. Builds partnerships and drives growth across European and international markets.",
      expertise: ["Business Development", "Strategic Partnerships", "Market Expansion", "Client Relations"],
      education: "MBA, Harvard Business School",
      experience: "11+ years",
      linkedin: "https://linkedin.com/in/emily-watson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily@ziontechgroup.com",
      phone: "+31 20 123 4567",
      featured: false,
      achievements: [
        "Expanded to 15+ countries",
        "$50M+ in new business",
        "100+ strategic partnerships",
        "Former McKinsey consultant"
      ]
    },
    {
      id: 8,
      name: "Robert Chen",
      title: "Lead Quantum Engineer",
      department: "engineering",
      location: "middletown",
      avatar: "/team/robert-chen.jpg",
      bio: "Quantum computing specialist developing the next generation of quantum algorithms and hardware integration solutions for enterprise applications.",
      expertise: ["Quantum Computing", "Quantum Algorithms", "Hardware Integration", "Engineering"],
      education: "Ph.D. Quantum Engineering, Stanford",
      experience: "6+ years",
      linkedin: "https://linkedin.com/in/robert-chen",
      twitter: "https://twitter.com/robertchen",
      email: "robert@ziontechgroup.com",
      phone: "+1 302 464 0956",
      featured: false,
      achievements: [
        "Quantum algorithm breakthroughs",
        "Hardware integration expert",
        "3 quantum computing patents",
        "Former IBM Quantum researcher"
      ]
    }
  ];

  const filteredTeam = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || member.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const featuredMembers = filteredTeam.filter(member => member.featured);
  const regularMembers = filteredTeam.filter(member => !member.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              The Minds Behind Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Our world-class team of AI researchers, quantum engineers, and technology leaders are driving the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Departments */}
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {dept.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Locations */}
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {location.name}
                  <span className="ml-1 text-xs opacity-75">({location.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team Members */}
      {featuredMembers.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-gray-300">Our executive leadership driving strategic vision and innovation</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Users className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Leadership
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{member.department}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-200">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-3">{member.title}</p>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {member.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {locations.find(l => l.id === member.location)?.name}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Team Members */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-300">
              {filteredTeam.length > 0 
                ? `Showing ${filteredTeam.length} team members` 
                : 'No team members found matching your criteria'
              }
            </p>
          </div>
          
          {regularMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{member.department}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-200">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-3 text-sm">{member.title}</p>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2 text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {member.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {locations.find(l => l.id === member.location)?.name}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-blue-600/20 text-blue-400 rounded-md hover:bg-blue-600/30 transition-colors duration-200"
                        >
                          <Linkedin className="w-3 h-3" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-1.5 bg-gray-700/50 text-gray-300 rounded-md hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          <Mail className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {regularMembers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
              <p className="text-gray-300">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI, quantum technology, 
              and pushing the boundaries of what's possible. Join us in shaping the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Brain className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Innovation Culture</h3>
                <p className="text-gray-300 text-sm text-center">Work on cutting-edge technology</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Rocket className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Career Growth</h3>
                <p className="text-gray-300 text-sm text-center">Continuous learning and advancement</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Globe className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300 text-sm text-center">Transform businesses worldwide</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Submit Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}