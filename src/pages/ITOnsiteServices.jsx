import React from 'react';

export default function ITOnsiteServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          IT Onsite Services
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Onsite IT Support</h3>
            <p className="text-zion-slate-light">
              Our certified technicians provide onsite IT support and maintenance services to ensure your 
              technology infrastructure runs smoothly and efficiently.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Network Installation & Maintenance</h3>
            <p className="text-zion-slate-light">
              Complete network infrastructure setup, configuration, and ongoing maintenance to keep your 
              business connected and secure.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Hardware Installation & Repair</h3>
            <p className="text-zion-slate-light">
              Professional installation, configuration, and repair services for all types of computer 
              hardware and peripherals.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Emergency Response</h3>
            <p className="text-zion-slate-light">
              24/7 emergency IT support with rapid response times to minimize downtime and keep your 
              business operations running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}