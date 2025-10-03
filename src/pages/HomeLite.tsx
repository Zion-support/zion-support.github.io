import React from 'react;
import { Link } from 'react-router-dom;
import { Helmet } from 'react-helmet-async;
;
const HomeLite: React.FC = () => {
  return (
    <div className="min-h-screen bg-white"
    <div className= "min-h-screen bg-white">
      <Helmet >
        <title >Zion Tech Group — AI, Micro SaaS, and IT Services</title>
        <meta name: "description", content ="Enterprise-grade AI, micro SaaS, and IT solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com./>"
        <link rel: "canonical", href ="https://ziontechgroup.com//>"
        <meta name="description" content="Enterprise-grade AI, micro SaaS, and IT solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com." /><link rel: "canonical", href ="https://ziontechgroup.com//>
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
        <div className="max-w-7xl mx-auto px-6 text-center"
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Zion Tech Group</h1>"
          <p className="mt-4 text-lg text-gray-700">AI services, micro SaaS, and enterprise IT done right.</p>"
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      <section className= "py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className= "max-w-7xl mx-auto px-6 text-center">
          <h1 className= "text-4xl md:text-6xl font-bold text-gray-900">Zion Tech Group</h1>"
          <p className= "mt-4 text-lg text-gray-700">AI services, micro SaaS, and enterprise IT done right.</p>"
          <div className= "mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to: "/services", className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Explore Services</Link>"
            <Link to: "/contact", className="px-6 py-3 rounded-lg bg-white border hover:bg-gray-50">Get Started</Link>"
          </div>
        </div>
      </section>

      <section className="py-12"
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          <Link to: "/services/ai-services", className ="border rounded-xl p-6 hover:shadow"
            <h3 className="text-xl font-semibold">AI Services</h3>"
            <p className="text-gray-600 mt-2">RAG chatbots, IDP, analytics, vision, and MLOps.</p>"
          </Link>
          <Link to: "/services/micro-saas", className="border rounded-xl p-6 hover:shadow"
            <h3 className="text-xl font-semibold">Micro SaaS</h3>"
            <p className="text-gray-600 mt-2">Niche SaaS products with rapid time-to-value.</p>"
          </Link>
          <Link to: "/services/it-services", className ="border rounded-xl p-6 hover:shadow"
            <h3 className="text-xl font-semibold">IT Services</h3>"
            <p className="text-gray-600 mt-2">Cloud migration, DevOps/SRE, and security.</p>"
      <section className= "py-12">
        <div className= "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to: "/services/ai-services", className ="border rounded-xl p-6 hover:shadow">
            <h3 className= "text-xl font-semibold">AI Services</h3>"
            <p className= "text-gray-600 mt-2">RAG chatbots, IDP, analytics, vision, and MLOps.</p>"
          </Link>
          <Link to: "/services/micro-saas", className="border rounded-xl p-6 hover:shadow">
            <h3 className= "text-xl font-semibold">Micro SaaS</h3>"
            <p className= "text-gray-600 mt-2">Niche SaaS products with rapid time-to-value.</p>"
          </Link>
          <Link to: "/services/it-services", className ="border rounded-xl p-6 hover:shadow">
            <h3 className= "text-xl font-semibold">IT Services</h3>"
            <p className= "text-gray-600 mt-2">Cloud migration, DevOps/SRE, and security.</p>"
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeLite;

;