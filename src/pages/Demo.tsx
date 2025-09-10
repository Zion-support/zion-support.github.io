import React from 'react';
<<<<<<< HEAD
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Demo = () => {
  const demoFeatures = [
    "AI-Powered Analytics",
    "Real-time Processing",
    "Scalable Infrastructure",
    "Advanced Security",
    "Custom Integrations",
    "24/7 Support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Demo - Zion Tech Group"
        description="See our AI and technology solutions in action with interactive demonstrations."
        keywords={["demo", "demonstration", "interactive", "AI", "technology"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demo</h1>
          <p className="text-xl text-gray-300">
            Experience our solutions firsthand with interactive demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Try Our Solutions</h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore our AI and technology solutions through interactive demos. 
              See how our tools can transform your business operations.
            </p>
            
            <div className="space-y-4 mb-8">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center">
              Start Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8">
            <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300">Interactive Demo Video</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">What You'll See</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Real-time AI processing</li>
              <li>• Interactive dashboards</li>
              <li>• Custom configuration options</li>
              <li>• Performance metrics</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Schedule a personalized demo with our experts
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
=======
import SEO from '../components/SEO';

export default function Demo() {
  return (
    <>
      <SEO 
        title="Demo - Zion Tech Group"
        description="Experience our AI-powered solutions through interactive demos."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Demo</h1>
            <p className="text-xl text-slate-300">Experience our solutions through interactive demos.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
