import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Layout from '../../components/layout/Layout';

import { 
      title: "Manufacturing AI & Machine Learning",
      description: "AI-powered manufacturing optimization with predictive maintenance and quality control",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive maintenance", "Quality control automation", "Production optimization", "Supply chain intelligence"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Manufacturing Cybersecurity",
      description: "Industrial-grade security for manufacturing environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["OT security", "Industrial IoT protection", "Compliance automation", "Threat detection"],
      href: "/services?category=security"
    },
    {
      title: "Manufacturing Cloud Infrastructure",
      description: "Cloud solutions designed for manufacturing operations",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Industrial cloud platforms", "Edge computing", "Data integration", "Scalable infrastructure"],
      href: "/services?category=cloud"
    },
    {
      title: "Manufacturing Analytics & BI",
      description: "Real-time manufacturing analytics and business intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Performance analytics", "Predictive insights", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const manufacturing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>manufacturing | Zion Tech Group</title>
        <meta name="description" content="manufacturing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">manufacturing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default manufacturing;