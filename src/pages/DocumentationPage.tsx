// import React from 'react';

const DocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and tutorials to help you get up and running with our solutions.",
      icon: "🚀",
      links: [
        { title: "Quick Start Guide", href="/docs/quick-start" },
        { title: "Installation Guide", href="/docs/installation" },
        { title: "First Steps Tutorial", href="/docs/first-steps" },
        { title: "Basic Configuration", href="/docs/configuration" }
      ]
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference and integration guides for developers.",
      icon: "🔌",
      links: [
        { title: "API Reference", href="/docs/api-reference" },
        { title: "Authentication", href="/docs/authentication" },
        { title: "Rate Limits", href="/docs/rate-limits" },
        { title: "SDK Downloads", href="/docs/sdk" }
      ]
    },
    {
      title: "User Guides",
      description: "Step-by-step guides for using our platform features and capabilities.",
      icon: "📖",
      links: [
        { title: "Dashboard Guide", href="/docs/dashboard" },
        { title: "Analytics Setup", href="/docs/analytics" },
        { title: "Automation Workflows", href="/docs/workflows" },
        { title: "Integration Setup", href="/docs/integrations" }
      ]
    },
    {
      title: "Developer Resources",
      description: "Resources and tools for developers building with our platform.",
      icon: "👨‍💻",
      links: [
        { title: "Code Examples", href="/docs/examples" },
        { title: "Best Practices", href="/docs/best-practices" },
        { title: "Testing Guide", href="/docs/testing" },
        { title: "Troubleshooting", href="/docs/troubleshooting" }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Security guidelines, compliance information, and best practices.",
      icon: "🔒",
      links: [
        { title: "Security Overview", href="/docs/security" },
        { title: "Data Privacy", href="/docs/privacy" },
        { title: "Compliance Guide", href="/docs/compliance" },
        { title: "Security Best Practices", href="/docs/security-best-practices" }
      ]
    },
    {
      title: "Support & Community",
      description: "Get help, connect with the community, and find additional resources.",
      icon: "🤝",
      links: [
        { title: "Support Center", href="/docs/support" },
        { title: "Community Forum", href="/docs/community" },
        { title: "FAQ", href="/docs/faq" },
        { title: "Contact Support", href="/contact" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation, guides, and resources for Zion Tech Group's AI and technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Header */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Documentation</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Comprehensive guides, API documentation, and resources to help you get the most out of our solutions.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <input
                  type="text
                  placeholder="Search documentation...
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <svg className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {documentationSections.map((section, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{section.icon}</h3>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{section.title}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{section.description}</h3>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {section.links.map((link, linkIndex) => (
                      <li key="{linkIndex}">
                        <Link 
                          to={link.href}
                          className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Popular Topics</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Most frequently accessed documentation and guides
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quick Start Guides</h3>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <li>• <Link to="/docs/quick-start" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Getting Started with AI Services</Link></h3>
                  <li>• <Link to="/docs/micro-saas-setup" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Setting Up Your Micro SaaS</Link></h3>
                  <li>• <Link to="/docs/cloud-migration" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Cloud Migration Guide</Link></h3>
                  <li>• <Link to="/docs/automation-setup" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Automation Setup</Link></h3>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Integration Guides</h3>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <li>• <Link to="/docs/api-integration" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">API Integration</Link></h3>
                  <li>• <Link to="/docs/webhook-setup" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Webhook Configuration</Link></h3>
                  <li>• <Link to="/docs/sdk-integration" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">SDK Integration</Link></h3>
                  <li>• <Link to="/docs/third-party-apis" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Third-party API Integration</Link></h3>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Troubleshooting</h3>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <li>• <Link to="/docs/common-issues" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Common Issues</Link></h3>
                  <li>• <Link to="/docs/error-codes" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Error Codes Reference</Link></h3>
                  <li>• <Link to="/docs/performance-optimization" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Performance Optimization</Link></h3>
                  <li>• <Link to="/docs/debugging-guide" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Debugging Guide</Link></h3>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Advanced Topics</h3>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <li>• <Link to="/docs/custom-models" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Custom AI Models</Link></h3>
                  <li>• <Link to="/docs/scaling-guide" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Scaling Your Solution</Link></h3>
                  <li>• <Link to="/docs/security-hardening" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Security Hardening</Link></h3>
                  <li>• <Link to="/docs/monitoring-setup" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Monitoring & Alerting</Link></h3>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need Help?</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Can't find what you're looking for? Our support team is here to help.';
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">💬</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Live Chat</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Get instant help from our support team</h3>
                <Link 
                  to="/contact" 
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">📧</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Email Support</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Send us your questions and we'll respond quickly</p>';
                <Link 
                  to="/contact" 
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">📞</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Phone Support</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Speak directly with our technical experts</h3>
                <Link 
                  to="/contact" 
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ready to Get Started?</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Explore our solutions and start building with our comprehensive documentation and support.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link 
                to="/services" 
                className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;