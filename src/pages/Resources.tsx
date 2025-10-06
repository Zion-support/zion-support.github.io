import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, Video, Book, Download } from "lucide-react";

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Case Studies",
      description: "Real-world success stories and implementation results from our clients.",
      link: "/case-studies",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Webinars",
      description: "Live and recorded webinars on AI trends, best practices, and implementation guides.",
      link: "/webinars",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive guides, API documentation, and technical resources.",
      link: "/docs",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Downloads",
      description: "White papers, e-books, and downloadable resources for AI implementation.",
      link: "/downloads",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Resources - Zion Website</title>
        <meta name="description" content="Access our comprehensive library of AI resources, case studies, and documentation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of AI resources, case studies, and documentation to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              
              <Link
                to={category.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
