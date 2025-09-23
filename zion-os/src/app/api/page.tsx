export default function APIPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion OS API</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion OS platform
          </p>
        </div>

        {/* API Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              Secure API access with JWT tokens and OAuth 2.0 support
            </p>
            <code className="bg-gray-100 p-2 rounded text-sm">
              Authorization: Bearer YOUR_TOKEN
            </code>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <p className="text-gray-600 mb-4">
              1000 requests per hour for standard accounts
            </p>
            <p className="text-sm text-gray-500">
              Upgrade to Pro for higher limits
            </p>
          </div>
        </div>

        {/* Endpoints */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">API Endpoints</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">GET /api/v1/services</h3>
            <p className="text-gray-600 mb-4">Retrieve all available services</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "services": [
    {
      "id": "ai-automation",
      "name": "AI Automation",
      "description": "Intelligent process automation"
    }
  ]
}`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">POST /api/v1/onboarding</h3>
            <p className="text-gray-600 mb-4">Complete user onboarding process</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "userId": "user123",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}