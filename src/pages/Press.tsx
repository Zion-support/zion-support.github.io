import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ExternalLink,
  Download,
  FileText,
  Building2,
  Users,
  Code,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Newspaper,
  TrendingUp,
  Lightbulb,
  Shield,
  Cloud,
  Brain,
  Zap,
  Image,
  Video,
  FileImage
} from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 'pr1',
      title: 'Zion Tech Group Announces Q4 2024 Financial Results',
      date: '2025-01-25',
      summary: 'Strong performance driven by AI solutions growth and expanding customer base.',
      link: '#',
      category: 'Financial'
    },
    {
      id: 'pr2',
      title: 'New Executive Appointments Strengthen Leadership Team',
      date: '2025-01-22',
      summary: 'Strategic hires to accelerate product development and market expansion.',
      link: '#',
      category: 'Leadership'
    },
    {
      id: 'pr3',
      title: 'Zion Tech Group Secures $50M in Series C Funding',
      date: '2025-01-20',
      summary: 'Investment to fuel innovation and accelerate global market presence.',
      link: '#',
      category: 'Funding'
    },
    {
      id: 'pr4',
      title: 'Major Partnership with Global Tech Leader Announced',
      date: '2025-01-18',
      summary: 'Strategic collaboration to deliver enhanced cloud and AI solutions.',
      link: '#',
      category: 'Partnership'
    },
    {
      id: 'pr5',
      title: 'AI-Powered Cybersecurity Suite Launch',
      date: '2025-01-15',
      summary: 'Revolutionary platform combining AI and machine learning for threat detection.',
      link: '#',
      category: 'Product'
    },
    {
      id: 'pr6',
      title: 'Global Expansion: New Offices in Europe and Asia',
      date: '2025-01-12',
      summary: 'Company opens new offices to better serve international customers.',
      link: '#',
      category: 'Expansion'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo & Brand Assets',
      description: 'High-resolution logos, brand guidelines, and visual assets in multiple formats.',
      icon: Image,
      link: '#',
      fileType: 'ZIP (25MB)'
    },
    {
      title: 'Executive Biographies & Photos',
      description: 'Professional photos and detailed biographies of key leadership team.',
      icon: Users,
      link: '#',
      fileType: 'PDF (2MB)'
    },
    {
      title: 'Product Screenshots & Demos',
      description: 'High-quality images and demo videos of our products and solutions.',
      icon: Code,
      link: '#',
      fileType: 'ZIP (150MB)'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and statistics about Zion Tech Group.',
      icon: FileText,
      link: '#',
      fileType: 'PDF (1MB)'
    },
    {
      title: 'Press Kit (Complete)',
      description: 'Comprehensive press kit with all media resources and company information.',
      icon: Download,
      link: '#',
      fileType: 'ZIP (500MB)'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand guidelines including colors, typography, and usage rules.',
      icon: FileImage,
      link: '#',
      fileType: 'PDF (8MB)'
    }
  ];

  const companyStats = [
    { metric: '500+', label: 'Enterprise Customers', icon: Building2 },
    { metric: '50+', label: 'Countries Served', icon: Globe },
    { metric: '98%', label: 'Customer Satisfaction', icon: Award },
    { metric: '24/7', label: 'Global Support', icon: Shield }
  ];

  const contactInfo = [
    { icon: Mail, text: 'press@ziontechgroup.com', href: 'mailto:press@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: '#' }
  ];

  const socialMedia = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Press & Media</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Media Resources
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Welcome to Zion Tech Group's press center. Find the latest news, 
              company information, and media resources for journalists and media professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Stay updated with our latest company announcements, product launches, 
              and strategic initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                    {release.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(release.date)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {release.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {release.summary}
                </p>
                
                <a
                  href={release.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm font-medium">Read Full Release</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Media Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Download high-quality assets, company information, and press materials 
              to support your coverage of Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                    <p className="text-gray-400 text-sm">{resource.fileType}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Company Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Essential information about Zion Tech Group for media professionals and journalists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Zion Tech Group */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">About Zion Tech Group</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Zion Tech Group is a leading technology company specializing in artificial intelligence, 
                  cloud computing, and digital transformation solutions. Founded in 2020, we help 
                  enterprises leverage cutting-edge technology to drive innovation and competitive advantage.
                </p>
                <p>
                  Our comprehensive portfolio includes AI-powered business intelligence, cybersecurity 
                  solutions, cloud infrastructure, and industry-specific applications. We serve over 500 
                  enterprise customers across 50+ countries, delivering measurable business outcomes 
                  through innovative technology solutions.
                </p>
                <p>
                  Headquartered in Innovation City, Zion Tech Group employs over 1,000 technology 
                  professionals and maintains a strong commitment to research and development, 
                  investing 15% of revenue annually in innovation.
                </p>
              </div>
            </div>

            {/* Key Facts */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Founded: 2020</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Employees: 1,000+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Offices: 12 countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Industry Awards: 25+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">AI Patents: 50+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Security Certifications: SOC 2, ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact & Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Get in touch with our media relations team and stay connected through our social channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Media Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Media Relations Team</h4>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Sarah Johnson</strong> - Director of Communications</p>
                  <p><strong>Michael Chen</strong> - Senior PR Manager</p>
                  <p><strong>Emily Rodriguez</strong> - Media Relations Specialist</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <social.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{social.name}</div>
                      <div className="text-gray-400 text-sm">Follow for updates</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Additional Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our media relations team is here to help with interviews, 
              additional resources, or any questions you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Media Team
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Request Interview
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
