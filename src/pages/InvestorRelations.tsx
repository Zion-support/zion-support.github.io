import React from 'react';
import SEO from '../components/SEO';

const InvestorRelations: React.FC = () => {
  const financialHighlights = [
    { metric: "Revenue Growth", value: "150%", period: "YoY" },
    { metric: "Customer Growth", value: "200%", period: "YoY" },
    { metric: "Market Share", value: "15%", period: "AI Services" },
    { metric: "R&D Investment", value: "$50M", period: "2024" }
  ];

  const recentNews = [
    {
      date: "2025-01-10",
      title: "Zion Tech Group Reports Record Q4 2024 Revenue",
      summary: "Company achieves 150% year-over-year revenue growth driven by strong demand for AI services."
    },
    {
      date: "2025-01-05",
      title: "New AI Platform Launch Drives Market Expansion",
      summary: "Introduction of advanced AI platform positions company for continued growth in 2025."
    },
    {
      date: "2024-12-20",
      title: "Strategic Partnership with Global Tech Leader",
      summary: "Partnership agreement expected to accelerate market penetration and product development."
    }
  ];

  const documents = [
    { name: "Q4 2024 Earnings Report", type: "PDF", size: "2.3 MB" },
    { name: "Annual Report 2024", type: "PDF", size: "15.7 MB" },
    { name: "Investor Presentation", type: "PDF", size: "8.1 MB" },
    { name: "SEC Filings", type: "Link", size: "External" }
  ];

  return (
    <>
      <SEO 
        title="Investor Relations - Zion Tech Group"
        description="Investor information, financial reports, and corporate governance for Zion Tech Group."
        keywords="investor relations, financial reports, earnings, corporate governance, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Investor Relations
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about Zion Tech Group's financial performance, strategic initiatives, 
                and growth opportunities in the AI and technology sector.
              </p>
            </div>

            {/* Financial Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Financial Highlights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {financialHighlights.map((highlight, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{highlight.value}</div>
                    <div className="text-sm text-gray-300 mb-1">{highlight.period}</div>
                    <div className="text-white font-semibold">{highlight.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Recent News */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Recent News</h2>
                <div className="space-y-6">
                  {recentNews.map((news, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                      <div className="text-sm text-purple-400 mb-2">{news.date}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{news.title}</h3>
                      <p className="text-gray-300">{news.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Documents */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Key Documents</h2>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-purple-400 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold">{doc.name}</h3>
                          <div className="text-sm text-gray-300">
                            {doc.type} • {doc.size}
                          </div>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stock Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Stock Information</h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">$45.67</div>
                    <div className="text-sm text-gray-300 mb-1">Current Price</div>
                    <div className="text-green-400 text-sm">+2.34 (+5.41%)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">$42.15</div>
                    <div className="text-sm text-gray-300 mb-1">52-Week Low</div>
                    <div className="text-sm text-gray-300">Jan 15, 2024</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">$48.90</div>
                    <div className="text-sm text-gray-300 mb-1">52-Week High</div>
                    <div className="text-sm text-gray-300">Dec 20, 2024</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-300 mb-4">
                    * Stock prices are delayed by 15 minutes and provided for informational purposes only.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    View Detailed Chart
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Investor Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Investor Relations Team</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Email:</span>
                      <p className="text-gray-300">investors@ziontechgroup.com</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Phone:</span>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Address:</span>
                      <p className="text-gray-300">
                        123 Innovation Drive<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Media Inquiries</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Email:</span>
                      <p className="text-gray-300">media@ziontechgroup.com</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Phone:</span>
                      <p className="text-gray-300">+1 (555) 123-4568</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Press Kit:</span>
                      <p className="text-gray-300">
                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                          Download Press Kit →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our investor newsletter to receive the latest financial updates, 
                earnings announcements, and corporate news.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorRelations;