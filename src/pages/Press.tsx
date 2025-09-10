import React from 'react';
import SEO from '../components/SEO';

const Press: React.FC = () => {
  const pressReleases = [
    {
      date: "2025-01-15",
      title: "Zion Tech Group Launches Revolutionary AI Platform for Enterprise",
      summary: "New platform combines advanced AI capabilities with enterprise-grade security and scalability.",
      category: "Product Launch"
    },
    {
      date: "2025-01-10",
      title: "Company Reports Record Growth in Q4 2024",
      summary: "150% year-over-year revenue growth driven by strong demand for AI services.",
      category: "Financial"
    },
    {
      date: "2025-01-05",
      title: "Strategic Partnership with Global Technology Leader",
      summary: "Partnership agreement expected to accelerate market penetration and product development.",
      category: "Partnership"
    },
    {
      date: "2024-12-20",
      title: "Zion Tech Group Expands European Operations",
      summary: "New office in London to serve growing European market demand.",
      category: "Expansion"
    }
  ];

  const mediaCoverage = [
    {
      outlet: "TechCrunch",
      title: "Zion Tech Group Raises $50M Series B for AI Platform",
      date: "2025-01-12",
      link: "#"
    },
    {
      outlet: "Forbes",
      title: "How AI is Transforming Enterprise Software",
      date: "2025-01-08",
      link: "#"
    },
    {
      outlet: "VentureBeat",
      title: "Zion Tech Group's AI Platform Shows Promise",
      date: "2025-01-05",
      link: "#"
    },
    {
      outlet: "Wired",
      title: "The Future of AI in Business Applications",
      date: "2024-12-28",
      link: "#"
    }
  ];

  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Google, 15+ years in AI and machine learning.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-Founder",
      bio: "Ex-Microsoft researcher, PhD in Computer Science from Stanford.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      title: "VP of Product",
      bio: "Former product lead at Salesforce, expert in enterprise software.",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <>
      <SEO 
        title="Press - Zion Tech Group"
        description="Press releases, media coverage, and company news from Zion Tech Group."
        keywords="press, news, media, press releases, company news, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Press Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest news, press releases, and media coverage 
                about Zion Tech Group and our innovative AI solutions.
              </p>
            </div>

            {/* Press Releases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm text-purple-400">{release.date}</span>
                          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                            {release.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                        <p className="text-gray-300">{release.summary}</p>
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Media Coverage */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Media Coverage</h2>
                <div className="space-y-6">
                  {mediaCoverage.map((article, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-sm text-purple-400 mb-2">{article.outlet} • {article.date}</div>
                          <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
                        </div>
                        <a 
                          href={article.link}
                          className="text-purple-400 hover:text-purple-300 transition-colors font-semibold ml-4"
                        >
                          Read →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Team */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Leadership Team</h2>
                <div className="space-y-6">
                  {leadershipTeam.map((member, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-purple-400 font-semibold mb-2">{member.title}</p>
                          <p className="text-gray-300 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Press Kit */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Press Kit</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Company Logo</h3>
                  <p className="text-gray-300 mb-4">High-resolution logos in various formats</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Download
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Product Screenshots</h3>
                  <p className="text-gray-300 mb-4">Latest product interface images</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Download
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Company Fact Sheet</h3>
                  <p className="text-gray-300 mb-4">Key company information and statistics</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Media Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Press Inquiries</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Email:</span> media@ziontechgroup.com
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Phone:</span> +1 (555) 123-4568
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Response Time:</span> 24 hours
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Investor Relations</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Email:</span> investors@ziontechgroup.com
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-purple-400">Response Time:</span> 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Press;