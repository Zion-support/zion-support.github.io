import React from 'react';
import SEO from '../components/SEO';

const Developers: React.FC = () => {
  const developerResources = [
    {
      title: "API Documentation",
      description: "Complete API reference with examples and code snippets",
      icon: "📚",
      link: "/api-documentation"
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs for JavaScript, Python, PHP, and Go",
      icon: "🔧",
      link: "/sdk"
    },
    {
      title: "Code Examples",
      description: "Real-world examples and integration guides",
      icon: "💻",
      link: "/examples"
    },
    {
      title: "Developer Forum",
      description: "Connect with other developers and get help",
      icon: "💬",
      link: "/forum"
    },
    {
      title: "Status Page",
      description: "Monitor API uptime and service status",
      icon: "📊",
      link: "/status"
    },
    {
      title: "Changelog",
      description: "Track API updates and new features",
      icon: "📝",
      link: "/changelog"
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Get Your API Key",
      description: "Sign up for a free account and generate your API key from the dashboard."
    },
    {
      step: 2,
      title: "Choose Your SDK",
      description: "Install the SDK for your preferred programming language."
    },
    {
      step: 3,
      title: "Make Your First Request",
      description: "Start with our simple examples to make your first API call."
    },
    {
      step: 4,
      title: "Build Your Integration",
      description: "Use our comprehensive documentation to build your application."
    }
  ];

  return (
    <>
      <SEO 
        title="Developer Resources - Zion Tech Group"
        description="Everything developers need to integrate with Zion Tech Group's AI and technology services."
        keywords="developer resources, api, sdk, integration, documentation, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Developer Resources
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to integrate with our AI and technology services. 
                Build amazing applications with our powerful APIs and SDKs.
              </p>
            </div>

            {/* Quick Start */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStartSteps.map((step) => (
                  <div key={step.step} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Developer Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developerResources.map((resource, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <a 
                      href={resource.link}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Example</h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">JavaScript/Node.js</h3>
                    <div className="bg-black/20 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`const { ZionAPI } = require('@ziontechgroup/api-client');

const api = new ZionAPI('YOUR_API_KEY');

// Get all services
const services = await api.services.list();

// Request a quote
const quote = await api.quotes.create({
  serviceId: 1,
  requirements: 'AI content generation'
});

console.log(quote);`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Python</h3>
                    <div className="bg-black/20 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`from ziontechgroup import ZionAPI

api = ZionAPI('YOUR_API_KEY')

# Get all services
services = api.services.list()

# Request a quote
quote = api.quotes.create(
    service_id=1,
    requirements='AI content generation'
)

print(quote)`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Join Our Developer Community</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-white mb-3">Discord</h3>
                  <p className="text-gray-300 mb-4">Join our Discord server for real-time discussions and support.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                    Join Discord →
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🐙</div>
                  <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
                  <p className="text-gray-300 mb-4">Contribute to our open-source projects and examples.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                    View GitHub →
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-bold text-white mb-3">Newsletter</h3>
                  <p className="text-gray-300 mb-4">Get updates on new features and API changes.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                    Subscribe →
                  </a>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our developer support team is here to help you succeed. Get in touch with us for technical support, 
                integration guidance, or any questions about our APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Contact Support
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/20">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;