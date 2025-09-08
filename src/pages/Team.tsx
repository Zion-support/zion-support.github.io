import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Brain, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Rocket,
  Award,
  Linkedin,
  Mail,
  MapPin,
  Building2,
  Zap,
  Target,
  Lightbulb,
  Globe,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      expertise: "AI & Machine Learning, Enterprise Architecture, Strategic Leadership",
      bio: "Visionary leader with over 15 years of experience in AI, enterprise software, and digital transformation. Former senior architect at major tech companies.",
      avatar: "/images/team/kleber-santos.jpg",
      linkedin: "https://linkedin.com/in/klebersantos",
      email: "kleber@ziontechgroup.com",
      location: "Middletown, DE",
      achievements: [
        "Led 50+ enterprise AI implementations",
        "Patented 3 AI algorithms",
        "Forbes 30 Under 30 nominee"
      ]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "Quantum Computing, Advanced AI, Research & Development",
      bio: "PhD in Computer Science from MIT, specializing in quantum machine learning and AI ethics. Published 25+ research papers.",
      avatar: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah@ziontechgroup.com",
      location: "San Francisco, CA",
      achievements: [
        "MIT Technology Review Innovator",
        "Quantum Computing Pioneer",
        "AI Ethics Committee Member"
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Innovation Officer",
      expertise: "Emerging Technologies, Product Strategy, Market Innovation",
      bio: "Serial entrepreneur with 3 successful exits. Expert in identifying and commercializing breakthrough technologies.",
      avatar: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      email: "marcus@ziontechgroup.com",
      location: "Austin, TX",
      achievements: [
        "3 successful startup exits",
        "100+ patents filed",
        "TechCrunch Disrupt Winner"
      ]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      expertise: "Machine Learning, Neural Networks, AI Safety",
      bio: "Leading researcher in AI safety and responsible AI development. PhD from Stanford with focus on AI alignment.",
      avatar: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emilywatson",
      email: "emily@ziontechgroup.com",
      location: "Palo Alto, CA",
      achievements: [
        "Stanford AI Fellow",
        "AI Safety Research Grant",
        "Published in Nature AI"
      ]
    },
    {
      name: "Alex Thompson",
      role: "VP of Engineering",
      expertise: "Cloud Architecture, DevOps, Scalable Systems",
      bio: "Former senior engineer at Google Cloud and AWS. Expert in building enterprise-grade, scalable systems.",
      avatar: "/images/team/alex-thompson.jpg",
      linkedin: "https://linkedin.com/in/alexthompson",
      email: "alex@ziontechgroup.com",
      location: "Seattle, WA",
      achievements: [
        "Google Cloud MVP",
        "AWS Community Builder",
        "Built systems serving 10M+ users"
      ]
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Healthcare AI",
      expertise: "Healthcare Analytics, Medical AI, Regulatory Compliance",
      bio: "Board-certified physician and AI researcher. Specializes in developing AI solutions for healthcare that meet FDA and HIPAA requirements.",
      avatar: "/images/team/priya-patel.jpg",
      linkedin: "https://linkedin.com/in/priyapatel",
      email: "priya@ziontechgroup.com",
      location: "Boston, MA",
      achievements: [
        "Board Certified Physician",
        "FDA AI/ML Expert Panel",
        "Healthcare Innovation Award"
      ]
    }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and emerging technologies."
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Every solution we build prioritizes safety, fairness, and human well-being."
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Technology serves humanity. We design solutions that enhance human capabilities."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building solutions that can transform industries and improve lives worldwide."
    }
  ];

  const stats = [
    { number: "50+", label: "AI Experts" },
    { number: "100+", label: "Patents Filed" },
    { number: "25+", label: "Research Papers" },
    { number: "1000+", label: "Projects Delivered" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      <Helmet>
        <title>Our Team - Zion Tech Group | AI Innovation Leaders</title>
        <meta name="description" content="Meet the exceptional team of AI experts, researchers, and innovators driving Zion Tech Group's mission to transform industries through cutting-edge technology." />
        <meta name="keywords" content="AI team, machine learning experts, quantum computing, technology leadership, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Exceptional Team</span>
            </h1>
            <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
              World-class AI researchers, engineers, and innovators working together to build the future of technology.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-zion-slate-800/50 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 p-3 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-xl p-8 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-zion-cyan font-semibold mb-3">{member.role}</p>
                    <p className="text-zion-slate-300 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                      <p className="text-zion-slate-400 text-sm">{member.expertise}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-zion-slate-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-zion-slate-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                      <a href={`mailto:${member.email}`} className="flex items-center hover:text-zion-cyan transition-colors">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-zion-cyan transition-colors">
                        <Linkedin className="w-4 h-4 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-zion-slate-300 mb-8">
              We're always looking for exceptional talent to join our team. If you're passionate about AI, innovation, and making a positive impact, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;