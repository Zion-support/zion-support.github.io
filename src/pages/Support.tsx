import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, Users, Zap, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportOptions = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      icon: BookOpen,
      link: "/docs"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      link: "/chat"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      link: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: Users,
      link: "/community"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: Phone,
      link: "tel:+1-800-123-4567"
    },
    {
      title: "Email Support",
      description: "Send us an email and we'll respond quickly",
      icon: Mail,
      link: "mailto:support@ziontech.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get help and support for our AI solutions.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <option.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Link 
                  to={option.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get Help <Zap className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;