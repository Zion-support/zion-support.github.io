import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 06e06048c0d59de66865eafd1bd98630feb518ac

  return (
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
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
import { Helmet } from 'react-helmet-async';
const Resources = () => {
    return (<>
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access valuable resources, tools, and insights from Zion Tech Group. Download whitepapers, guides, and more."/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our library of resources, tools, and insights to help you stay ahead in technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Resources section coming soon. We're building a comprehensive library of valuable content.
            </p>
          </div>
        </div>
      </div>
    </>)};
export default Resources;
>>>>>>> origin/clean-error-fixing-automation
=======
};

export default Resources;
>>>>>>> 06e06048c0d59de66865eafd1bd98630feb518ac
