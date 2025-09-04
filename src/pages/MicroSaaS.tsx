import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MicroSaaS: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Micro SaaS</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Innovative micro software-as-a-service solutions
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Specialized tools that solve specific business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Generator</h3>
              <p className="text-gray-600 mb-6">
                Generate high-quality content using artificial intelligence
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Track and analyze your business metrics in real-time
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Task Automation</h3>
              <p className="text-gray-600 mb-6">
                Automate repetitive tasks and boost productivity
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaaS;