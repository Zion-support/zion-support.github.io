import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  Calendar,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Image as ImageIcon,
  Video as VideoIcon,
  File,
  Building2,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Enterprise Platform",
      date: "2025-01-15",
      summary: "Company introduces breakthrough AI technology that transforms business operations across industries",
      category: "Product Launch",
      url: "/press/ai-enterprise-platform-launch-2025"
    },
    {
      id: 2,
      title: "Zion Tech Group Secures $50M Series B Funding for AI Innovation",
      date: "2024-12-10",
      summary: "Investment round led by leading venture capital firms to accelerate AI research and development",
      category: "Funding",
      url: "/press/series-b-funding-2024"
    },
    {
      id: 3,
      title: "Zion Tech Group Named to Forbes AI 50 List",
      date: "2024-11-20",
      summary: "Company recognized as one of the most innovative AI companies in the world",
      category: "Awards",
      url: "/press/forbes-ai-50-2024"
    },
    {
      id: 4,
      title: "Zion Tech Group Partners with Fortune 100 Healthcare Company",
      date: "2024-10-15",
      summary: "Strategic partnership to deploy AI-powered healthcare solutions across North America",
      category: "Partnerships",
      url: "/press/healthcare-partnership-2024"
    },
    {
      id: 5,
      title: "Zion Tech Group Opens New AI Research Center in Silicon Valley",
      date: "2024-09-08",
      summary: "State-of-the-art facility to accelerate breakthrough AI research and development",
      category: "Company News",
      url: "/press/silicon-valley-research-center-2024"
    }
  ];

  const mediaKit = {
    companyOverview: {
      name: "Zion Tech Group",
      founded: "2020",
      headquarters: "Middletown, Delaware",
      employees: "150+",
      mission: "To democratize cutting-edge AI technology and transform industries through innovation"
    },
    leadership: [
      {
        name: "Kleber Santos",
        title: "Founder & CEO",
        bio: "Visionary leader with 15+ years in AI and enterprise software",
        photo: "/images/team/kleber-santos.jpg",
        linkedin: "https://linkedin.com/in/klebersantos"
      },
      {
        name: "Dr. Sarah Chen",
        title: "Chief Technology Officer",
        bio: "PhD from MIT, specializing in quantum machine learning and AI ethics",
        photo: "/images/team/sarah-chen.jpg",
        linkedin: "https://linkedin.com/in/sarahchen"
      }
    ],
    keyMetrics: [
      { label: "AI Solutions Deployed", value: "1000+" },
      { label: "Enterprise Clients", value: "500+" },
      { label: "Patents Filed", value: "100+" },
      { label: "Research Papers", value: "25+" },
      { label: "Countries Served", value: "25+" },
      { label: "Industry Verticals", value: "15+" }
    ]
  };

  const downloadableAssets = [
    {
      name: "Company Logo (PNG)",
      description: "High-resolution Zion Tech Group logo in various formats",
      icon: ImageIcon,
      size: "2.3 MB",
      url: "/assets/media-kit/zion-tech-group-logo.zip"
    },
    {
      name: "Company Logo (SVG)",
      description: "Vector format logo for digital and print use",
      icon: ImageIcon,
      size: "156 KB",
      url: "/assets/media-kit/zion-tech-group-logo-svg.zip"
    },
    {
      name: "Product Screenshots",
      description: "High-quality screenshots of our AI platforms",
      icon: ImageIcon,
      size: "15.7 MB",
      url: "/assets/media-kit/product-screenshots.zip"
    },
    {
      name: "Executive Photos",
      description: "Professional headshots of leadership team",
      icon: ImageIcon,
      size: "8.9 MB",
      url: "/assets/media-kit/executive-photos.zip"
    },
    {
      name: "Company Fact Sheet",
      description: "One-page overview of company facts and figures",
      icon: FileText,
      size: "245 KB",
      url: "/assets/media-kit/company-fact-sheet.pdf"
    },
    {
      name: "Press Release Template",
      description: "Template for writing press releases about Zion Tech Group",
      icon: FileText,
      size: "89 KB",
      url: "/assets/media-kit/press-release-template.docx"
    }
  ];

  const contactInfo = {
    pressEmail: "press@ziontechgroup.com",
    generalEmail: "info@ziontechgroup.com",
    phone: "+1 (302) 464-0950",
    address: "364 E Main St STE 1008, Middletown, DE 19709",
    website: "https://ziontechgroup.com",
    social: {
      linkedin: "https://linkedin.com/company/ziontechgroup",
      twitter: "https://twitter.com/ziontechgroup",
      github: "https://github.com/ziontechgroup"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      <Helmet>
        <title>Press & Media - Zion Tech Group | Media Kit & Press Releases</title>
        <meta name="description" content="Access Zion Tech Group's press releases, media kit, company information, and contact details for journalists and media professionals." />
        <meta name="keywords" content="press releases, media kit, company news, Zion Tech Group, AI technology, press contact" />
        <link rel="canonical" href="https://ziontechgroup.com/press" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Media</span>
            </h1>
            <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
              Access our latest press releases, media kit, and company information. 
              We're here to help journalists and media professionals tell our story.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#media-kit" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Media Kit
            </a>
            <a 
              href={`mailto:${contactInfo.pressEmail}`} 
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Press Team
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Company Overview</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">About Zion Tech Group</h3>
                <p className="text-zion-slate-300 mb-6">
                  Zion Tech Group is a leading AI technology company that develops cutting-edge artificial intelligence 
                  solutions for enterprise clients across industries. Founded in 2020, we've rapidly grown to become 
                  a trusted partner for Fortune 500 companies seeking to transform their operations through AI.
                </p>
                <p className="text-zion-slate-300 mb-6">
                  Our mission is to democratize cutting-edge AI technology and make advanced artificial intelligence 
                  accessible to businesses of all sizes. We specialize in AI-powered business intelligence, 
                  automation platforms, and industry-specific solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{mediaKit.companyOverview.founded}</div>
                    <div className="text-zion-slate-400 text-sm">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{mediaKit.companyOverview.employees}</div>
                    <div className="text-zion-slate-400 text-sm">Employees</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {mediaKit.keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-zion-slate-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-zion-cyan">{metric.value}</div>
                      <div className="text-zion-slate-400 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Latest Press Releases</h2>
          
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {release.category}
                      </span>
                      <span className="text-zion-slate-400 text-sm">
                        {new Date(release.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                    <p className="text-zion-slate-300">{release.summary}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a 
                      href={release.url}
                      className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/news" 
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View All News & Updates
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Media Kit</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Assets */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Company Assets</h3>
              <div className="space-y-4">
                {downloadableAssets.slice(0, 3).map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-zion-slate-800/50 rounded-lg border border-zion-purple/20">
                    <div className="flex items-center gap-3">
                      <asset.icon className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <div className="font-medium text-white">{asset.name}</div>
                        <div className="text-sm text-zion-slate-400">{asset.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zion-slate-400">{asset.size}</span>
                      <a 
                        href={asset.url}
                        className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Leadership Team */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Leadership Team</h3>
              <div className="space-y-4">
                {mediaKit.leadership.map((leader, index) => (
                  <div key={index} className="p-4 bg-zion-slate-800/50 rounded-lg border border-zion-purple/20">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{leader.name}</h4>
                        <p className="text-zion-cyan text-sm">{leader.title}</p>
                        <p className="text-zion-slate-400 text-sm mt-1">{leader.bio}</p>
                      </div>
                      <a 
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Assets */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Additional Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloadableAssets.slice(3).map((asset, index) => (
                <div key={index} className="p-4 bg-zion-slate-800/50 rounded-lg border border-zion-purple/20">
                  <div className="flex items-center gap-3 mb-3">
                    <asset.icon className="w-5 h-5 text-zion-cyan" />
                    <span className="font-medium text-white">{asset.name}</span>
                  </div>
                  <p className="text-sm text-zion-slate-400 mb-3">{asset.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-400">{asset.size}</span>
                    <a 
                      href={asset.url}
                      className="inline-flex items-center px-3 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Press Contact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.pressEmail}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.pressEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <a href={`tel:${contactInfo.phone}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-zion-cyan" />
                    <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-zion-cyan" />
                    <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      Twitter
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-zion-cyan" />
                    <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-zion-slate-300 mb-4">
                For urgent press inquiries or interview requests, please contact us directly.
              </p>
              <a 
                href={`mailto:${contactInfo.pressEmail}?subject=Press Inquiry`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Press Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Press;