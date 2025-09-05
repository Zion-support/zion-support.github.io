import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function APIRateLimiterPage() {_const [endpoint, _setEndpoint] = useState('');
  const [rateLimit, _setRateLimit] = useState('100');
  const [timeWindow, _setTimeWindow] = useState('1m');
  const [testResults, _setTestResults] = useState<any[]>([]);
  const [isTesting, _setIsTesting] = useState(false);
  const [apiKey, _setApiKey] = useState('');

  const _timeWindows = [
    { value: '1s', _label: '1 Second', _description: 'Per second rate limiting'},
    {_value: '1m', _label: '1 Minute', _description: 'Per minute rate limiting'},
    {_value: '1h', _label: '1 Hour', _description: 'Per hour rate limiting'},
    {_value: '1d', _label: '1 Day', _description: 'Per day rate limiting'}
  ];

  const _rateLimits = [
    {_value: '10', _label: '10 requests', _description: 'Very strict'},
    {_value: '100', _label: '100 requests', _description: 'Standard'},
    {_value: '1000', _label: '1000 requests', _description: 'High volume'},
    {_value: '10000', _label: '10000 requests', _description: 'Enterprise'}
  ];

  const _generateApiKey = () => {_const _key = 'zt_' + Math.random().toString(36).substr(2, _9) + '_' + Date.now().toString(36);
    setApiKey(key);};

  const _testRateLimiting = async () => {_if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    
    setIsTesting(true);
    setTestResults([]);
    
    const _limit = parseInt(rateLimit);
    const _results = [];
    
    // Simulate API calls to test rate limiting
    for (let i = 1; i <= limit + 5; i++) {
      await new Promise(resolve => setTimeout(resolve, _100));
      
      const _isAllowed = i <= limit;
      const _status = isAllowed ? 'success' : 'rate_limited';
      const _statusCode = isAllowed ? 200 : 429;
      
      results.push({
        request: i, _timestamp: new Date().toLocaleTimeString(), _status, _statusCode, _responseTime: Math.random() * 100 + 50, _headers: {
          'X-RateLimit-Limit': limit, _'X-RateLimit-Remaining': Math.max(0, _limit - i), _'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()}
      });
      
      if (!isAllowed) break;
    }
    
    setTestResults(results);
    setIsTesting(false);
  };

  const _copyToClipboard = (_text: string) => {_navigator.clipboard.writeText(text);};

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;}
  };

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400';
      default:
        return 'text-yellow-400';}
  };

  return (_<>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, _ensure fair usage, _and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
      </Head>

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              API Protection & Security
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            API Rate Limiter
          </h1>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, _prevent DDoS attacks, _and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
          </p>
        </div>
      </section>

      {_/* Rate Limiter Configuration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Configure Your Rate Limiting
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Rate Limiting Rules
              </h3>

              <div className="space-y-6">
                {_/* API Endpoint */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    API Endpoint
                  </label>
                  <input
                    type="text"
                    value={_endpoint}
                    onChange={_(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {_/* Rate Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {_rateLimits.map(_(limit) => (_<button
                        key={limit.value}
                        onClick={_() => setRateLimit(limit.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className="font-medium">{_limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{_limit.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {_/* Time Window */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {_timeWindows.map(_(window) => (_<button
                        key={window.value}
                        onClick={_() => setTimeWindow(window.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className="font-medium">{_window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{_window.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {_/* API Key Generation */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    API Key
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={_apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={_generateApiKey}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={_testRateLimiting}
                  disabled={_!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {_isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {_/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
                  Test Results
                </h3>
                {_testResults.length > 0 && (_<Button
                    onClick={() => setTestResults([])}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Results
                  </Button>
                )}
              </div>

              {_testResults.length > 0 ? (_<div className="space-y-3 max-h-96 overflow-y-auto">
                  {testResults.map((result, _index) => (
                    <div
                      key={index}
                      className={_`p-4 rounded-lg border ${
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {_getStatusIcon(result.status)}
                          <span className={_`font-medium ${getStatusColor(result.status)}`}>
                            Request #{_result.request}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{_result.timestamp}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={_`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {_result.statusCode} {_result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{_result.responseTime.toFixed(0)}ms</span>
                        </div>
                      </div>

                      {_result.status === 'rate_limited' && (
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {_timeWindow}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {_/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Rate Limiting Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">DDoS Protection</h3>
              <p className="text-gray-400">
                Advanced algorithms detect and prevent distributed denial of service attacks in real-time.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">
                Built on Redis and optimized for high-throughput applications with minimal latency.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Rules</h3>
              <p className="text-gray-400">
                Configure different limits for different endpoints, users, or IP addresses.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-400">
                Monitor API usage, identify patterns, and optimize your rate limiting strategy.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400">
                Simple REST API and SDKs for Node.js, Python, Go, and other popular languages.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {_/* Code Examples */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quick Integration Examples
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started with our rate limiting service in just a few lines of code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Node.js Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{_`const axios = require('axios');

const _apiKey = '${apiKey || 'your_api_key_here'}';
const _endpoint = '${_endpoint || '/api/users'}';

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
  }
});


`}
                </pre>
              </div>
              <Button
                onClick={_() => copyToClipboard(`const axios = require('axios');

const _apiKey = '${apiKey || 'your_api_key_here'}';
const _endpoint = '${_endpoint || '/api/users'}';

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
  }
});


`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>

            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{_`import requests

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {_'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{_endpoint}',
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {_'limit': response.headers.get('x-ratelimit-limit'), _'remaining': response.headers.get('x-ratelimit-remaining'), _'reset': response.headers.get('x-ratelimit-reset')})`}
                </pre>
              </div>
              <Button
                onClick={_() => copyToClipboard(`import requests

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {_'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{_endpoint}',
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {_'limit': response.headers.get('x-ratelimit-limit'), _'remaining': response.headers.get('x-ratelimit-remaining'), _'reset': response.headers.get('x-ratelimit-reset')})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Protect Your APIs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}