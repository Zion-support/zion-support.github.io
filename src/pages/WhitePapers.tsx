import React from 'react';
<<<<<<< HEAD
import { Download, FileText, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

const WhitePapers = () => {
  const whitePapers = [
    {
      title: "The Future of AI in Business",
      description: "A comprehensive analysis of AI trends and their impact on modern business operations.",
      date: "2024-01-15",
      downloadUrl: "#"
    },
    {
      title: "Cloud Security Best Practices",
      description: "Essential security strategies for cloud infrastructure and data protection.",
      date: "2024-01-10",
      downloadUrl: "#"
    },
    {
      title: "Digital Transformation Guide",
      description: "Step-by-step guide to successful digital transformation initiatives.",
      date: "2024-01-05",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download our comprehensive white papers on AI, cloud computing, and technology trends."
        keywords={["white papers", "research", "reports", "downloads", "insights"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">White Papers</h1>
          <p className="text-xl text-gray-300">
            In-depth research and insights on technology trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(paper.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
              <p className="text-gray-300 mb-4">{paper.description}</p>
              
              <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhitePapers;
=======
import SEO from '../components/SEO';

export default function WhitePapers() {
  return (
    <>
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download our comprehensive white papers and research reports."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">White Papers</h1>
            <p className="text-xl text-slate-300">Download our research reports and white papers.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
