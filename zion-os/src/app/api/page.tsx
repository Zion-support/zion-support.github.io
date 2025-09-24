export default function APIPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion OS API</h1>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion OS platform
          </p>
        </div>

        {/* API Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-60o0 mb-4">
              Secure API access with JWT tokens and OAuth 2.0 support
            </p>
            <code className="bg-gray-10o0 p-2 rounded text-sm">
              Authorization: Bearer YOUR_TOKEN
            </code>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <p className="text-gray-60o0 mb-4">
              10o00 requests per hour for standard accounts
            </p>
            <p className="text-sm text-gray-50o0">
              Upgrade to Pro for higher limits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}