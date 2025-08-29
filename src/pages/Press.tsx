import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  Award, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart,
  Linkedin,
  Github,
  Mail,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Atom,
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
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  User,
  Tag
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Workflow Orchestrator Platform',
      date: '2024-12-15',
      summary: 'New platform enables enterprises to automate complex business processes with AI-powered intelligence and unprecedented efficiency gains.',
      category: 'Product Launch',
      author: 'Zion Tech Group',
      link: '#',
      featured: true
    },
    {
      title: 'Zion Tech Group Named Top AI Innovation Company 2024',
      date: '2024-11-28',
      summary: 'Recognition for breakthrough developments in quantum computing and AI-powered business solutions.',
      category: 'Awards',
      author: 'Tech Innovation Awards',
      link: '#',
      featured: false
    },
    {
      title: 'Partnership Announced: Zion Tech Group and Global Healthcare Consortium',
      date: '2024-11-15',
      summary: 'Strategic collaboration to develop AI-powered healthcare solutions for improved patient outcomes.',
      category: 'Partnerships',
      author: 'Zion Tech Group',
      link: '#',
      featured: false
    },
    {
      title: 'Zion Tech Group Expands European Operations',
      date: '2024-10-30',
      summary: 'New office in Berlin to serve growing demand for AI solutions across European markets.',
      category: 'Company News',
      author: 'Zion Tech Group',
      link: '#',
      featured: false
    },
    {
      title: 'Breakthrough in Quantum AI: Zion Tech Group Achieves 1000x Speed Improvement',
      date: '2024-10-15',
      summary: 'Revolutionary quantum algorithm optimization delivers unprecedented performance gains for AI applications.',
      category: 'Research',
      author: 'Zion Tech Group',
      link: '#',
      featured: false
    },
    {
      title: 'Zion Tech Group Appoints Dr. Emily Watson as Chief AI Officer',
      date: '2024-09-28',
      summary: 'Leading AI researcher joins executive team to accelerate innovation in machine learning and autonomous systems.',
      category: 'Leadership',
      author: 'Zion Tech Group',
      link: '#',
      featured: false
    }
  ];

  const mediaCoverage = [
    {
      title: 'How Zion Tech Group is Revolutionizing Business with AI',
      publication: 'TechCrunch',
      date: '2024-12-10',
      author: 'Sarah Johnson',
      summary: 'In-depth analysis of Zion Tech Group\'s innovative approach to AI-powered business solutions.',
      link: '#',
      logo: '/logos/techcrunch.png'
    },
    {
      title: 'The Future of Quantum Computing in Enterprise',
      publication: 'Wired',
      date: '2024-11-25',
      author: 'Michael Chen',
      summary: 'Feature story on Zion Tech Group\'s quantum computing initiatives and their business applications.',
      link: '#',
      logo: '/logos/wired.png'
    },
    {
      title: 'AI Ethics and Responsible Innovation',
      publication: 'MIT Technology Review',
      date: '2024-11-15',
      author: 'Dr. Lisa Rodriguez',
      summary: 'Coverage of Zion Tech Group\'s commitment to ethical AI development and responsible innovation.',
      link: '#',
      logo: '/logos/mit-tech-review.png'
    },
    {
      title: 'Cybersecurity in the Age of AI',
      publication: 'Security Weekly',
      date: '2024-10-30',
      author: 'Alex Thompson',
      summary: 'Expert analysis of Zion Tech Group\'s AI-powered cybersecurity solutions.',
      link: '#',
      logo: '/logos/security-weekly.png'
    }
  ];

  const awards = [
    {
      title: 'Top AI Innovation Company 2024',
      organization: 'Tech Innovation Awards',
      date: '2024-11-28',
      category: 'Artificial Intelligence',
      description: 'Recognition for breakthrough developments in AI-powered business solutions.',
      logo: '/awards/tech-innovation-2024.png'
    },
    {
      title: 'Best Enterprise AI Platform',
      organization: 'AI Summit Awards',
      date: '2024-10-15',
      category: 'Enterprise Solutions',
      description: 'Awarded for the AI Workflow Orchestrator platform\'s innovation and business impact.',
      logo: '/awards/ai-summit-2024.png'
    },
    {
      title: 'Excellence in Cybersecurity',
      organization: 'Cyber Security Awards',
      date: '2024-09-20',
      category: 'Cybersecurity',
      description: 'Recognition for AI-powered threat detection and zero-trust architecture solutions.',
      logo: '/awards/cyber-security-2024.png'
    },
    {
      title: 'Quantum Computing Innovation',
      organization: 'Quantum Computing Summit',
      date: '2024-08-15',
      category: 'Emerging Technology',
      description: 'Awarded for breakthrough developments in quantum AI algorithms.',
      logo: '/awards/quantum-summit-2024.png'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      type: 'Brand Assets',
      size: '2.5 MB',
      download: '#'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of our leadership team',
      type: 'Images',
      size: '15.2 MB',
      download: '#'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI platforms and solutions',
      type: 'Images',
      size: '8.7 MB',
      download: '#'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts and figures about Zion Tech Group',
      type: 'Documents',
      size: '1.2 MB',
      download: '#'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      type: 'Documents',
      size: '3.8 MB',
      download: '#'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    mediaPhone: '+1 (302) 464-0950',
    address: 'Middletown, DE, United States',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/ziontechgroup',
      twitter: 'https://twitter.com/ziontechgroup',
      github: 'https://github.com/ziontechgroup'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Stay updated with the latest news, press releases, and media coverage about Zion Tech Group. Access media resources and connect with our press team."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Press & Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Stay updated with the latest news, press releases, and media coverage about Zion Tech Group. Access media resources and connect with our press team.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#press-releases" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Latest News
            </a>
            <a 
              href="#media-resources" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Media Resources
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Featured Press Release
          </motion.h2>
          
          {pressReleases.filter(pr => pr.featured).map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                  {release.category}
                </span>
                <span className="text-slate-400 text-sm">{release.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{release.title}</h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">{release.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">By {release.author}</span>
                <a 
                  href={release.link}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press Releases */}
      <section id="press-releases" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Latest Press Releases
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.filter(pr => !pr.featured).map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-sm">{release.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{release.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">By {release.author}</span>
                  <a 
                    href={release.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Media Coverage
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaCoverage.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Newspaper className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{article.publication}</h4>
                    <p className="text-slate-400 text-sm">{article.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">By {article.author}</span>
                  <a 
                    href={article.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Awards & Recognition
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{award.organization}</h4>
                    <p className="text-slate-400 text-sm">{award.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{award.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{award.description}</p>
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                  {award.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section id="media-resources" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Media Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-slate-400 text-xs">{resource.size}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{resource.description}</p>
                <a 
                  href={resource.download}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Press Contact
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our press team is available to provide information, arrange interviews, and assist with media inquiries. We're committed to transparency and open communication.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.pressEmail}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.pressEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mediaPhone}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.mediaPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Media Kit Request</h3>
              <p className="text-slate-300 mb-6">
                Need comprehensive media materials? Request our complete media kit with high-resolution assets, company information, and executive bios.
              </p>
              <div className="space-y-4">
                <a 
                  href="/contact" 
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Request Media Kit
                </a>
                <a 
                  href={`mailto:${contactInfo.pressEmail}`}
                  className="block w-full border border-cyan-500 text-cyan-400 text-center py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Press Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Subscribe to our press releases and stay informed about the latest developments at Zion Tech Group.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Subscribe to Press Releases
            </a>
            <a 
              href="/blog" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Read Our Blog
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}