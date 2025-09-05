export default function APIPage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-6xl mx-auto&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>API Reference</span>
          </h1>
          <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>
            Integrate Zion OS into your applications with our comprehensive REST API and SDKs.
          </p>
        </div>

        {/* Quick Start */}
        <div className=&quot;card mb-12&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Quick Start</h2>
          <div className=&quot;space-y-4&quot;>
            <p className=&quot;text-gray-300&quot;>
              Get started with Zion OS API in just a few steps:
            </p>
            <div className=&quot;bg-gray-900/50 rounded-lg p-4&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>1. Get your API key</div>
              <code className=&quot;text-blue-400&quot;>GET /api/v1/auth/key</code>
            </div>
            <div className=&quot;bg-gray-900/50 rounded-lg p-4&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>2. Make your first request</div>
              <code className=&quot;text-blue-400&quot;>curl -H &quot;Authorization: Bearer YOUR_API_KEY&quot; https://api.ziontechgroup.com/v1/economies</code>
            </div>
            <div className=&quot;bg-gray-900/50 rounded-lg p-4&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>3. Explore our SDKs</div>
              <code className=&quot;text-blue-400&quot;>npm install @zion-os/sdk</code>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className=&quot;mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>API Endpoints</h2>
          
          <div className=&quot;space-y-6&quot;>
            {/* Authentication */}
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-green-400&quot;>🔐 Authentication</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/auth/login</div>
                    <div className=&quot;text-gray-400&quot;>User authentication</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/auth/refresh</div>
                    <div className=&quot;text-gray-400&quot;>Refresh access token</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/auth/logout</div>
                    <div className=&quot;text-gray-400&quot;>User logout</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Economies */}
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-blue-400&quot;>🌍 Digital Economies</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/economies</div>
                    <div className=&quot;text-gray-400&quot;>List all economies</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/economies</div>
                    <div className=&quot;text-gray-400&quot;>Create new economy</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/economies/{'{id}'}</div>
                    <div className=&quot;text-gray-400&quot;>Get economy details</div>
                  </div>
                </div>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>PUT /api/v1/economies/{'{id}'}</div>
                    <div className=&quot;text-gray-400&quot;>Update economy</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>DELETE /api/v1/economies/{'{id}'}</div>
                    <div className=&quot;text-gray-400&quot;>Delete economy</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/economies/{'{id}'}/deploy</div>
                    <div className=&quot;text-gray-400&quot;>Deploy economy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-purple-400&quot;>🏛️ AI Governance</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/governance/proposals</div>
                    <div className=&quot;text-gray-400&quot;>List proposals</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/governance/proposals</div>
                    <div className=&quot;text-gray-400&quot;>Create proposal</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/governance/vote</div>
                    <div className=&quot;text-gray-400&quot;>Cast vote</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-yellow-400&quot;>🛒 Marketplace</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/marketplace/jobs</div>
                    <div className=&quot;text-gray-400&quot;>List job postings</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/marketplace/jobs</div>
                    <div className=&quot;text-gray-400&quot;>Create job posting</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/marketplace/services</div>
                    <div className=&quot;text-gray-400&quot;>List services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Identity & KYC */}
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-red-400&quot;>🆔 Identity & KYC</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/identity/verify</div>
                    <div className=&quot;text-gray-400&quot;>Verify identity</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>GET /api/v1/identity/status</div>
                    <div className=&quot;text-gray-400&quot;>Check verification status</div>
                  </div>
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>POST /api/v1/identity/kyc</div>
                    <div className=&quot;text-gray-400&quot;>Submit KYC documents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs and Libraries */}
        <div className=&quot;mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>SDKs & Libraries</h2>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;card&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path d=&quot;M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z&quot;/>
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Node.js SDK</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>Official Node.js client library for Zion OS API</p>
              <div className=&quot;space-y-2&quot;>
                <code className=&quot;text-sm text-blue-400 block&quot;>npm install @zion-os/sdk</code>
                <a href=&quot;#&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm&quot;>View Documentation →</Link>
              </div>
            </div>

            <div className=&quot;card&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path d=&quot;M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z&quot;/>
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Python SDK</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>Python client library with async support</p>
              <div className=&quot;space-y-2&quot;>
                <code className=&quot;text-sm text-blue-400 block&quot;>pip install zion-os-sdk</code>
                <a href=&quot;#&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm&quot;>View Documentation →</Link>
              </div>
            </div>

            <div className=&quot;card&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path d=&quot;M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z&quot;/>
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>PHP SDK</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>PHP client library for web applications</p>
              <div className=&quot;space-y-2&quot;>
                <code className=&quot;text-sm text-blue-400 block&quot;>composer require zion-os/sdk</code>
                <a href=&quot;#&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm&quot;>View Documentation →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className=&quot;mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>Code Examples</h2>
          
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Create a Digital Economy</h3>
              <div className=&quot;bg-gray-900/50 rounded-lg p-4&quot;>
                <div className=&quot;text-sm text-gray-400 mb-2&quot;>Node.js</div>
                <pre className=&quot;text-sm text-gray-300 overflow-x-auto&quot;>
{`const { ZionOS } = require('@zion-os/sdk');

const client = new ZionOS('YOUR_API_KEY');

const economy = await client.economies.create({
  name: 'My Digital Economy',
  description: 'A sovereign digital economy',
  features: ['marketplace', 'governance', 'tokens'],
  blockchain: 'ethereum'
});

// console.log('Economy created:', economy.id);`}
                </pre>
              </div>
            </div>

            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Deploy an Economy</h3>
              <div className=&quot;bg-gray-900/50 rounded-lg p-4&quot;>
                <div className=&quot;text-sm text-gray-400 mb-2&quot;>Python</div>
                <pre className=&quot;text-sm text-gray-300 overflow-x-auto&quot;>
{`from zion_os import ZionOS

client = ZionOS('YOUR_API_KEY')

# Deploy the economy
deployment = client.economies.deploy('economy_id')

# Wait for deployment to complete
deployment.wait_for_completion()

print(f&quot;Economy deployed at: {deployment.url}&quot;)`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Limits & Authentication */}
        <div className=&quot;mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>Rate Limits & Authentication</h2>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Rate Limits</h3>
              <div className=&quot;space-y-3 text-gray-300&quot;>
                <p><strong>Free Tier:</strong> 1,000 requests/hour</p>
                <p><strong>Pro Tier:</strong> 10,000 requests/hour</p>
                <p><strong>Enterprise:</strong> Custom limits</p>
                <p className=&quot;text-sm text-gray-400&quot;>Rate limits are applied per API key</p>
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Authentication</h3>
              <div className=&quot;space-y-3 text-gray-300&quot;>
                <p><strong>API Key:</strong> Include in Authorization header</p>
                <p><strong>JWT Tokens:</strong> For user-specific operations</p>
                <p><strong>Webhooks:</strong> HMAC signature verification</p>
                <p className=&quot;text-sm text-gray-400&quot;>All requests must be authenticated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Resources */}
        <div className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Need Help?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Our team is here to help you integrate Zion OS into your applications
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Contact Support
              </Link>
              <a href=&quot;/community&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}