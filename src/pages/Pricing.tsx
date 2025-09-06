import React from 'react'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">$99/month</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Basic AI consultation</li>
                <li className="text-gray-600">Email support</li>
                <li className="text-gray-600">Monthly reports</li>
                <li className="text-gray-600">Up to 5 users</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">$299/month</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Advanced AI solutions</li>
                <li className="text-gray-600">Priority support</li>
                <li className="text-gray-600">Weekly reports</li>
                <li className="text-gray-600">Up to 25 users</li>
                <li className="text-gray-600">Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">Full AI platform</li>
                <li className="text-gray-600">24/7 support</li>
                <li className="text-gray-600">Real-time monitoring</li>
                <li className="text-gray-600">Unlimited users</li>
                <li className="text-gray-600">Dedicated account manager</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing