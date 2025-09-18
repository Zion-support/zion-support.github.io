import React from 'react';
import { Helmet } from 'react-helmet-async';
const Settings = () => {
    return (<>
      <Helmet>
        <title>Settings - Zion Tech Group</title>
        <meta name="description" content="Configure your Zion Tech Group account settings. Customize notifications, security, and preferences."/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Configure your account settings, notifications, security preferences, and more.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Settings page coming soon. We're building comprehensive account configuration options.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Settings;
