import React from 'react';
import Link from 'next/link';

const ApiDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            API Endpoints
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Content Management
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    GET /content
                  </code>{' '}
                  - List all content
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    POST /content
                  </code>{' '}
                  - Create content
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    GET /content/{'{id}'}
                  </code>{' '}
                  - Get content by ID
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    PUT /content/{'{id}'}
                  </code>{' '}
                  - Update content
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    DELETE /content/{'{id}'}
                  </code>{' '}
                  - Delete content
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                JavaScript/Node.js
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`const axios = require('axios')

const apiKey = 'your-api-key'
const baseUrl = 'https://api.ziontechgroup.com'

const createContent = async () => {
  try {
    const response = await axios.post(\`\${baseUrl}/content\`, {
      title: 'New Content',
      body: 'Content body here'
    }, {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      }
    })
//     console.log('Content created:', response.data)
  } catch (error) {
//     console.error('Error:', error.response?.data || error.message)
  }
}`}
              </pre>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentation;