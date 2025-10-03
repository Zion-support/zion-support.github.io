import React from "react";

const FAQ: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">What services do you offer?</h2>
            <p className="text-lg">
              We offer AI development, micro SaaS solutions, cybersecurity services, 
              cloud/DevOps consulting, data analytics, and comprehensive IT solutions 
              for enterprises and startups.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">How do I start a project?</h2>
            <p className="text-lg">
              Contact us via the contact page to request a discovery call. We'll 
              discuss your requirements and provide a tailored solution proposal.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">What technologies do you work with?</h2>
            <p className="text-lg">
              We work with modern technologies including React, Next.js, Node.js, 
              Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and 
              various databases and DevOps tools.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Do you offer ongoing support?</h2>
            <p className="text-lg">
              Yes, we provide comprehensive ongoing support including maintenance, 
              updates, monitoring, and 24/7 technical assistance for critical systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;