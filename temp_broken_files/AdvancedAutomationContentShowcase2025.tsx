import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AdvancedAutomationContentShowcase2025 = () => {
  const automationContent = [
    {
      title: "Intelligent Document Processing",
      description: "AI-powered document extraction and processing with 99.5% accuracy",
      image: "📄",
      link: "/automation/document-processing",
      category: "Document AI",
      roi: "400% ROI"
    },
    {
      title: "Customer Service Automation",
      description: "24/7 intelligent chatbots and virtual assistants for customer support",
      image: "💬",
      link: "/automation/customer-service",
      category: "Customer Experience",
      roi: "300% ROI"
    },
    {
      title: "Financial Process Automation",
      description: "Automated invoice processingexpense managementand financial reporting",
      image: "💰",
      link: "/automation/financial",
      category: "Finance",
      roi: "500% ROI"
    },
    {
      title: "Supply Chain Optimization",
      description: "Intelligent inventory management and supply chain automation",
      image: "🚚",
      link: "/automation/supply-chain",
      category: "Operations",
      roi: "350% ROI"
    },
    {
      title: "HR Process Automation",
      description: "Automated recruitmentonboardingand employee lifecycle management",
      image: "👥",
      link: "/automation/hr",
      category: "Human Resources",
      roi: "250% ROI"
    },
    {
      title: "Marketing Automation Suite",
      description: "AI-driven marketing campaigns and customer journey optimization",
      image: "📢",
      link: "/automation/marketing",
      category: "Marketing",
      roi: "450% ROI"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Automation Content 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven automation strategies and implementations that deliver measurable 
            ROI and transform business operations across all industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationContent.map((contentindex) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.image}</div>
                  <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
                    {content.roi}
                  </div>
                </div>
                <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {content.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <a
                  href={content.link}
                  className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join 500+ companies that have already transformed their operations with our automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/automation/consultation"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/case-studies/automation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationContentShowcase2025;