import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Code, ExternalLink, Book, Terminal, Download, Github } from 'lucide-react';

export default function DeveloperPortal() {
  const apiEndpoints = [
    {
      title: 'Services API',
      description: 'Access our comprehensive services catalog programmatically',
      endpoint: '/api/v1/services',
      method: 'GET',
      documentation: '/docs/api/services'
    },
    {
      title: 'Pricing API',
      description: 'Get real-time pricing for all our services',
      endpoint: '/api/v1/pricing',
      method: 'GET',
      documentation: '/docs/api/pricing'
    },
    {
      title: 'Quote Request API',
      description: 'Submit and manage quote requests',
      endpoint: '/api/v1/quotes',
      method: 'POST',
      documentation: '/docs/api/quotes'
    }
  ];

  const sdks = [
    {
      name: 'JavaScript SDK',
      description: 'Official JavaScript/TypeScript SDK for Node.js and browser',
      language: 'JavaScript',
      install: 'npm install @ziontechgroup/sdk'
    },
    {
      name: 'Python SDK',
      description: 'Official Python SDK for server-side applications',
      language: 'Python',
      install: 'pip install ziontechgroup-sdk'
    },
    {
      name: 'PHP SDK',
      description: 'Official PHP SDK for web applications',
      language: 'PHP',
      install: 'composer require ziontechgroup/sdk'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developer Portal - Zion Tech Group" 
        description="Access our APIs, SDKs, and developer resources. Integrate Zion Tech Group services into your applications."
        canonical="/developer-portal"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Portal
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Build powerful applications with our comprehensive APIs and developer tools. 
            Access documentation, SDKs, and resources to integrate our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
              <Book className="w-5 h-5 mr-2" />
              API Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-900">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiEndpoints.map((api, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="w-5 h-5 mr-2 text-cyan-400" />
                    {api.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {api.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <code className="text-green-400 text-sm">
                      {api.method} {api.endpoint}
                    </code>
                  </div>
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-900">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Official SDKs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <Card key={index} className="bg-slate-800 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">{sdk.name}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {sdk.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <code className="text-green-400 text-sm">
                      {sdk.install}
                    </code>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
                      <Download className="w-4 h-4 mr-2" />
                      Install
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-500 text-slate-300">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">1. Get API Key</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Sign up for a developer account and generate your API key from the dashboard.
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
                    Get API Key
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">2. Install SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Choose your preferred language and install the official SDK.
                  </p>
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <code className="text-green-400 text-sm">
                      npm install @ziontechgroup/sdk
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">3. Make First Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Initialize the client and make your first API call.
                  </p>
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <code className="text-green-400 text-sm">
                      const client = new ZionAPI(apiKey);
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">4. Explore</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Browse our comprehensive documentation and examples.
                  </p>
                  <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-900">
                    <Book className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our developer support team is here to help you integrate our services successfully.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
              <Terminal className="w-5 h-5 mr-2" />
              Developer Support
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-900">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
