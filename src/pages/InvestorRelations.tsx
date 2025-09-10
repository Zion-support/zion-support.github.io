import React from 'react';
<<<<<<< HEAD
import { TrendingUp, DollarSign, BarChart3, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const InvestorRelations = () => {
  const investorInfo = [
    {
      title: "Financial Performance",
      description: "View our latest financial reports and performance metrics",
      icon: <TrendingUp className="h-8 w-8 text-green-400" />
    },
    {
      title: "Investment Opportunities",
      description: "Learn about current investment opportunities and growth potential",
      icon: <DollarSign className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Market Analysis",
      description: "Access detailed market analysis and industry insights",
      icon: <BarChart3 className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Corporate Documents",
      description: "Download annual reports, SEC filings, and other corporate documents",
      icon: <FileText className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Investor Relations - Zion Tech Group"
        description="Information for investors, financial reports, and corporate governance."
        keywords={["investor relations", "financial reports", "investment", "corporate governance"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Investor Relations</h1>
          <p className="text-xl text-gray-300">
            Information for current and potential investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {investorInfo.map((info, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
              <p className="text-gray-300">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Financial Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-gray-300">Annual Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelations;
=======
import SEO from '../components/SEO';

export default function InvestorRelations() {
  return (
    <>
      <SEO 
        title="Investor Relations - Zion Tech Group"
        description="Information for investors and stakeholders."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Investor Relations</h1>
            <p className="text-xl text-slate-300">Information for investors and stakeholders.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
