import React from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const Press = () => {
  const pressReleases = [
    {
      title: "Zion Tech Group Announces New AI Platform",
      date: "2024-01-15",
      summary: "Revolutionary AI platform designed to transform business operations",
      source: "TechCrunch"
    },
    {
      title: "Major Partnership with Cloud Provider",
      date: "2024-01-10",
      summary: "Strategic partnership to expand cloud computing services",
      source: "Business Wire"
    },
    {
      title: "Cybersecurity Solutions Award",
      date: "2024-01-05",
      summary: "Recognition for innovative cybersecurity solutions",
      source: "Security Today"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press - Zion Tech Group"
        description="Latest news, press releases, and media coverage about Zion Tech Group."
        keywords={["press", "news", "media", "press releases", "coverage"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Press & Media</h1>
          <p className="text-xl text-gray-300">
            Latest news and press releases
          </p>
        </div>

        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Newspaper className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-sm text-gray-400">{release.source}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                  <p className="text-gray-300 mb-4">{release.summary}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(release.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="ml-4 text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-gray-300 mb-6">
              For media inquiries and press materials, please contact our communications team.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Contact Media Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;