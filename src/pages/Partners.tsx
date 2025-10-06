import React from "react";
import { Helmet } from "react-helmet-async";
import { Building, Globe, Users, Target } from "lucide-react";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      description: "Leading technology partner for enterprise AI solutions.",
      logo: "Microsoft",
      category: "Technology",
    },
    {
      name: "Google Cloud",
      description: "Cloud infrastructure and AI services partner.",
      logo: "Google",
      category: "Cloud",
    },
    {
      name: "Amazon Web Services",
      description: "Scalable cloud computing and AI platform partner.",
      logo: "AWS",
      category: "Cloud",
    },
    {
      name: "IBM",
      description: "Enterprise AI and data analytics partner.",
      logo: "IBM",
      category: "Enterprise",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Partners - Zion Website</title>
        <meta name="description" content="Meet our trusted partners who help us deliver exceptional AI solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with industry-leading partners to deliver the best AI solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {partner.description}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
