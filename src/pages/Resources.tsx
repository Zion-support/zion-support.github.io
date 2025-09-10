import React from 'react';
<<<<<<< HEAD

export default function Resources() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          Resources
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          resources content coming soon
        </p>
        <div className="text-cyan-400 text-lg">
          Resources page under development
        </div>
      </div>
    </div>
  );
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
