import React from 'react';
import { Link } from 'react-router-dom';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      title: "AI-Powered Business Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and innovation.",
      category: "AI & Business",
      date: "March 2024",
      pages: "45",
      downloadCount: "2,500+"
    },
    {
      title: "Cybersecurity in the Digital Age: Threats and Solutions",
      description: "Comprehensive analysis of modern cybersecurity challenges and effective defense strategies for enterprises.",
      category: "Security",
      date: "February 2024",
      pages: "38",
      downloadCount: "1,800+"
    },
    {
      title: "Cloud Migration Strategies: Best Practices and Implementation",
      description: "Step-by-step guide to successful cloud migration with real-world case studies and optimization techniques.",
      category: "Cloud & DevOps",
      date: "January 2024",
      pages: "52",
      downloadCount: "3,200+"
    },
    {
      title: "Quantum Computing: Applications in Enterprise Technology",
      description: "Understanding quantum computing's potential impact on business operations and future technology trends.",
      category: "Emerging Tech",
      date: "December 2023",
      pages: "41",
      downloadCount: "1,600+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              White
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Papers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth research and insights on technology trends, best practices, 
              and innovative solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whitePapers.map((paper, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{paper.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
                <p className="text-gray-300 mb-4">{paper.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>Published: {paper.date}</span>
                  <span>{paper.pages} pages</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{paper.downloadCount} downloads</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Download PDF
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to receive new white papers, research insights, and industry analysis 
                directly to your inbox.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;