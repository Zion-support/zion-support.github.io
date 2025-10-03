import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
;
const ITServices: React.FC: ()  => {,,
  return (
    <div className: "min-h-screen bg-white">";,
      <Helmet >
        <title >IT Services – Zion Tech Group</title>
        <meta name: "description" content ="Cloud migration, DevOps/SRE, cybersecurity, observability, and cost optimization with clear SLAs." />";,
        <link rel: "canonical" href ="https://ziontechgroup.com/services/it-services" />";,
      </Helmet>

      <section className: "bg-gradient-to-br from-slate-50 to-gray-50 py-16">";,
        <div className: "max-w-7xl mx-auto px-6">";,
          <h1 className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4">IT Services</h1>";,
          <p className: "text-lg md:text-xl text-gray-600 max-w-3xl">Modernize infrastructure, accelerate delivery, and harden security—without surprises.</p>";,
          <div className: "mt-8 flex gap-4">";,
            <Link to: "/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">Talk to an engineer</Link>";,
            <a href: "tel:+13024640950" className ="inline-flex items-center px-6 py-3 rounded-lg bg-white border hover:bg-gray-50">Call +1 302 464 0950</a>";,
          </div>
        </div>
      </section>

      <section className: "py-16">";,
        <div className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">";,
          <div className: "border rounded-xl p-6">";,
            <h3 className: "text-xl font-semibold">Cloud Migration</h3>";,
            <p className: "text-gray-600 mt-2">Assessment, landing zones, network, security, and IaC.</p>";,
            <p className: "mt-4 text-gray-800">$12,000–$45,000</p>";,
          </div>
          <div className: "border rounded-xl p-6">";,
            <h3 className: "text-xl font-semibold">DevOps & SRE</h3>";,
            <p className: "text-gray-600 mt-2">CI/CD, GitOps, observability, autoscaling, reliability.</p>";,
            <p className: "mt-4 text-gray-800">$6,000–$20,000</p>";,
          </div>
          <div className: "border rounded-xl p-6">";,
            <h3 className: "text-xl font-semibold">Zero Trust Security</h3>";,
            <p className: "text-gray-600 mt-2">SSO, least privilege, posture, incident response.</p>";,
            <p className: "mt-4 text-gray-800">$8,000–$25,000</p>";,
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;

;