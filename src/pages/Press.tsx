import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  FileText, 
  Image, 
  Video, 
  Users,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Secures $50M Series B Funding for AI Expansion",
      date: "2025-01-20",
      excerpt: "Funding will accelerate development of next-generation AI solutions and expand market presence in Europe and Asia.",
      category: "Funding"
    },
    {
      id: 2,
      title: "Zion Tech Group Appoints Dr. Sarah Chen as Chief AI Officer",
      date: "2025-01-15",
      excerpt: "Former Google AI researcher joins leadership team to drive innovation in artificial intelligence and machine learning.",
      category: "Leadership"
    },
    {
      id: 3,
      title: "Zion Tech Group Achieves 99.9% Client Satisfaction Rate",
      date: "2025-01-10",
      excerpt: "Annual client survey shows exceptional satisfaction with services and support across all business units.",
      category: "Business"
    }
  ];
  const mediaAssets = [
    {
      title: "Company Logo",
      description: "High-resolution Zion Tech Group logo in various formats",
      formats: ["SVG", "PNG", "JPG"],
      size: "Various sizes available",
      downloadUrl: "/assets/logo.zip"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of key leadership team members",
      formats: ["JPG", "PNG"],
      size: "High resolution",
      downloadUrl: "/assets/headshots.zip"
    },
    {
      title: "Product Screenshots",
      description: "Screenshots and mockups of our key products and services",
      formats: ["PNG", "JPG"],
      size: "Various sizes",
      downloadUrl: "/assets/products.zip"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand style guide and usage guidelines",
      formats: ["PDF"],
      size: "Comprehensive guide",
      downloadUrl: "/assets/brand-guidelines.pdf"
    }
  ];
  const companyStats = [
    { label: "Founded", value: "2024" },
    { label: "Employees", value: "150+" },
    { label: "Global Offices", value: "5" },
    { label: "Clients Served", value: "500+" },
    { label: "AI Models Deployed", value: "25+" },
    { label: "Security Certifications", value: "SOC 2, ISO 27001" }
  ];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Media resources, press releases, and information for journalists covering Zion Tech Group and the technology industry.
            </p>
          </div>
          {/* Company Overview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-center">About Zion Tech Group</h2>
              <p className="text-gray-300 text-lg mb-8 text-center max-w-4xl mx-auto">
                Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud services, cybersecurity, and digital transformation. 
                We help businesses of all sizes leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.
              </p>
              
              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                          {release.category}
                        </span>
                        <span className="text-sm text-gray-400">
                          {formatDate(release.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-gray-300 mb-4">{release.excerpt}</p>
                      <Link
                        to={`/press/${release.id}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read Full Release
                        <FileText className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Media Assets */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Media Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaAssets.map((asset) => (
                <div key={asset.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{asset.title}</h3>
                    <Download className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-gray-300 mb-4">{asset.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span><strong>Formats:</strong> {asset.formats.join(", ")}</span>
                    <span><strong>Size:</strong> {asset.size}</span>
                  </div>
                  <a
                    href={asset.downloadUrl}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Download Assets
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Media Contact</h2>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Press Inquiries</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:press@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                          press@ziontechgroup.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                          +1 (302) 464-0950
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="font-semibold">Website</div>
                        <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                          ziontechgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Company Address</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold">Headquarters</div>
                      <div className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709<br />
                        United States
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-gray-300">
                        We aim to respond to all media inquiries within 24 hours during business days.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Resources */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Company Profile</h3>
                <p className="text-gray-300 text-sm">Learn more about our company, mission, and values</p>
              </Link>
              <Link
                to="/news"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Latest News</h3>
                <p className="text-gray-300 text-sm">Stay updated with our latest announcements and developments</p>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-300 text-sm">Get in touch with our team for any additional information</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Press;