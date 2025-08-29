import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Users, 
  Award, 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  Heart, 
  Star,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Building,
  Globe,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronUpRight,
  ChevronDownRight,
  ChevronUpLeft,
  ChevronDownLeft,
  ChevronUpDown,
  ChevronLeftRight,
  ChevronUpLeftRight,
  ChevronDownLeftRight,
  ChevronUpDownLeft,
  ChevronUpDownRight,
  ChevronUpDownLeftRight
} from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      department: 'Executive Leadership',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with over 15 years of experience in AI, cloud computing, and digital transformation. Passionate about leveraging cutting-edge technology to solve complex business challenges.',
      expertise: ['AI & Machine Learning', 'Cloud Architecture', 'Digital Transformation', 'Strategic Leadership'],
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      image: '/images/team/sarah-chen.jpg',
      bio: 'PhD in Computer Science with expertise in quantum computing, AI algorithms, and emerging technologies. Leading our R&D initiatives and technical strategy.',
      expertise: ['Quantum Computing', 'AI Research', 'Emerging Tech', 'Technical Strategy'],
      linkedin: 'https://linkedin.com/in/sarah-chen',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Operations Officer',
      department: 'Operations & Delivery',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Operations expert with deep experience in scaling technology services, process optimization, and client delivery excellence.',
      expertise: ['Operations Management', 'Process Optimization', 'Client Delivery', 'Team Leadership'],
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      email: 'michael.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      department: 'AI & Analytics',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in artificial intelligence, specializing in large language models, computer vision, and ethical AI development.',
      expertise: ['LLM Development', 'Computer Vision', 'Ethical AI', 'Research Leadership'],
      linkedin: 'https://linkedin.com/in/emily-watson',
      email: 'emily.watson@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      role: 'Head of Cloud & DevOps',
      department: 'Infrastructure & Cloud',
      image: '/images/team/david-kim.jpg',
      bio: 'Cloud architecture expert with certifications in AWS, Azure, and Google Cloud. Specializing in scalable infrastructure and DevOps automation.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure Scaling', 'Automation'],
      linkedin: 'https://linkedin.com/in/david-kim',
      email: 'david.kim@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Cybersecurity',
      department: 'Security & Compliance',
      image: '/images/team/lisa-thompson.jpg',
      bio: 'Cybersecurity specialist with expertise in zero-trust architecture, threat intelligence, and regulatory compliance across industries.',
      expertise: ['Zero Trust Security', 'Threat Intelligence', 'Compliance', 'Risk Management'],
      linkedin: 'https://linkedin.com/in/lisa-thompson',
      email: 'lisa.thompson@ziontechgroup.com'
    }
  ];

  const departments = [
    {
      name: 'Executive Leadership',
      icon: Crown,
      color: 'from-purple-600 to-pink-600',
      description: 'Strategic direction and company vision',
      members: teamMembers.filter(m => m.department === 'Executive Leadership')
    },
    {
      name: 'Technology & Innovation',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'R&D and technical strategy',
      members: teamMembers.filter(m => m.department === 'Technology & Innovation')
    },
    {
      name: 'Operations & Delivery',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'Client delivery and process optimization',
      members: teamMembers.filter(m => m.department === 'Operations & Delivery')
    },
    {
      name: 'AI & Analytics',
      icon: Sparkles,
      color: 'from-indigo-600 to-purple-600',
      description: 'AI research and development',
      members: teamMembers.filter(m => m.department === 'AI & Analytics')
    },
    {
      name: 'Infrastructure & Cloud',
      icon: Building, // Changed from Cloud to Building as Cloud is already used
      color: 'from-orange-600 to-red-600',
      description: 'Cloud architecture and DevOps',
      members: teamMembers.filter(m => m.department === 'Infrastructure & Cloud')
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      description: 'Cybersecurity and compliance',
      members: teamMembers.filter(m => m.department === 'Security & Compliance')
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      icon: Sparkles,
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and novel approaches.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Client Success',
      icon: Heart,
      description: 'Your success is our success. We measure our achievements by the impact we create for our clients.',
      color: 'from-red-600 to-pink-600'
    },
    {
      title: 'Excellence',
      icon: Star,
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Collaboration',
      icon: Users,
      description: 'Great ideas come from great teams. We foster a culture of collaboration and knowledge sharing.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Integrity',
      icon: Shield,
      description: 'We operate with complete transparency and ethical practices in all our business relationships.',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Continuous Learning',
      icon: Brain,
      description: 'In a rapidly evolving tech landscape, we commit to continuous learning and skill development.',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of technology experts, innovators, and leaders driving Zion Tech Group's mission to transform businesses through cutting-edge AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The brilliant minds behind Zion Tech Group's innovative solutions. Our diverse team of experts brings together decades of experience in AI, cloud computing, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.department}</p>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-700/50">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Departments
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                    <p className="text-slate-400 text-sm">{dept.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {dept.members.map((member) => (
                    <div key={member.name} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{member.name}</div>
                        <div className="text-slate-400 text-xs">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're always looking for talented individuals who are passionate about technology and innovation. 
              Join us in shaping the future of AI-powered business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
