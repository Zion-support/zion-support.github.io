"use client";

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Automation Services
          </h1>
          <p className="text-xl text-gray-600">
            Automate your business processes with intelligent AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Process Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Streamline repetitive tasks and workflows with intelligent automation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Data Processing
            </h3>
            <p className="text-gray-600 mb-4">
              Automate data collection, analysis, and reporting with AI-powered tools.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Customer Service
            </h3>
            <p className="text-gray-600 mb-4">
              Deploy intelligent chatbots and virtual assistants for 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}