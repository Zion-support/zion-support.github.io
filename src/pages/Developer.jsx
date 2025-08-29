import React from 'react';
import { Helmet } from 'react-helmet-async';
const Developer = () => {
    return (<>
      <Helmet>
        <title>Developer Portal - Zion Tech Group</title>
        <meta name="description" content="Access Zion Tech Group's developer portal for tools, SDKs, and integration resources."/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Portal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools, SDKs, and resources for developers building with Zion Tech Group services.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Developer portal coming soon. We're building comprehensive development resources.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Developer;
