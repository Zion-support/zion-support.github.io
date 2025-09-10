import React from 'react';
<<<<<<< HEAD
import { Download, ExternalLink, FileText, Video, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const Resources = () => {
  const resources = [
    {
      title: "AI Implementation Guide",
      description: "Complete guide to implementing AI solutions in your business.",
      type: "PDF",
      icon: <FileText className="h-6 w-6" />,
      download: true
    },
    {
      title: "Cloud Security Best Practices",
      description: "Essential security practices for cloud infrastructure.",
      type: "Whitepaper",
      icon: <BookOpen className="h-6 w-6" />,
      download: true
    },
    {
      title: "Digital Transformation Webinar",
      description: "Watch our latest webinar on digital transformation strategies.",
      type: "Video",
      icon: <Video className="h-6 w-6" />,
      download: false
    }
  ];
=======
import SEO from '../components/SEO';
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Download our guides, whitepapers, and resources to help with your technology journey."
        keywords={["resources", "guides", "whitepapers", "downloads", "webinars"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-300">
            Access our comprehensive guides, whitepapers, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  {resource.icon}
                </div>
                <div>
                  <span className="text-sm text-blue-400 font-semibold">{resource.type}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              
              <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                {resource.download ? (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </>
                ) : (
                  <>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch
                  </>
                )}
              </button>
            </div>
          ))}
=======
    <>
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources, guides, and documentation."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Resources</h1>
            <p className="text-xl text-slate-300">Comprehensive resources for your technology journey.</p>
          </div>
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
        </div>
      </div>
    </>
  );
};

export default Resources;