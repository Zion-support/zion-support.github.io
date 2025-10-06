import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation for our AI solutions.",
      link: "/docs",
      icon: "📚"
    },
    {
      title: "Tutorials",
      description: "Step-by-step tutorials to help you get started with our platform.",
      link: "/tutorials",
      icon: "🎓"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of how our AI solutions have transformed businesses.",
      link: "/case-studies",
      icon: "📊"
    },
    {
      title: "Blog",
      description: "Latest insights and updates on AI technology and industry trends.",
      link: "/blog",
      icon: "📝"
    },
    {
      title: "Support",
      description: "Get help from our expert team and community resources.",
      link: "/support",
      icon: "🆘"
    },
    {
      title: "Community",
      description: "Connect with other developers and AI enthusiasts.",
      link: "/community",
      icon: "👥"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive resources to help you succeed with our AI solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you succeed with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;