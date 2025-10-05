import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIWorkflowAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Workflow Automation | Zion Tech Group</title>
        <meta name="description" content="AI Workflow Automation services" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Workflow Automation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Automate your workflows with AI
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600">Service details coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIWorkflowAutomation;