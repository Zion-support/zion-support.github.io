import React from 'react';
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
      description: "Learn how to transform your business with digital technologies.",
      type: "Video",
      icon: <Video className="h-6 w-6" />,
      download: false
    },
    {
      title: "API Documentation",
      description: "Complete API reference for our services.",
      type: "Documentation",
      icon: <ExternalLink className="h-6 w-6" />,
      download: false
    }
  ];

  return (
    <>
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources, guides, and documentation to help you succeed with AI and technology solutions."
        keywords="resources, guides, documentation, AI, technology, business"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Resources & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access our comprehensive library of resources, guides, and documentation to help you succeed with AI and technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <div className="flex items-center mb-4">
                  <div className="text-zion-cyan mr-3">
                    {resource.icon}
                  </div>
                  <span className="text-zion-cyan text-sm font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  {resource.download ? (
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  ) : (
                    <button className="flex items-center space-x-2 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 px-4 py-2 rounded-lg font-semibold hover:bg-zion-blue-light/30 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;