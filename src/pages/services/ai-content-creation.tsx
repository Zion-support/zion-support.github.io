import React from 'react';
<<<<<<< HEAD
import { PenTool, Image, Video, FileText } from 'lucide-react';
import SEO from '../../components/SEO';

const AIContentCreation = () => {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality written content for blogs, articles, and marketing materials",
      icon: <PenTool className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Image Generation",
      description: "Create stunning visuals and graphics using advanced AI image generation",
      icon: <Image className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Video Production",
      description: "Automated video creation and editing with AI-powered tools",
      icon: <Video className="h-8 w-8 text-green-400" />
    },
    {
      title: "Content Optimization",
      description: "Optimize content for SEO and engagement using AI insights",
      icon: <FileText className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Revolutionary AI-powered content creation tools for modern businesses."
        keywords={["AI content creation", "content generation", "AI writing", "content marketing"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Content Creation</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Create compelling content at scale with our advanced AI-powered content creation platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Content Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Written Content</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Blog posts and articles</li>
                <li>• Social media content</li>
                <li>• Email marketing campaigns</li>
                <li>• Product descriptions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Visual Content</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Infographics and charts</li>
                <li>• Social media graphics</li>
                <li>• Video content</li>
                <li>• Interactive presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentCreation;
=======
import SEO from '../../components/SEO';

export default function AIContentCreation() {
  return (
    <>
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="AI-powered content creation tools and solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">AI Content Creation</h1>
            <p className="text-xl text-slate-300">AI-powered content creation tools and solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
