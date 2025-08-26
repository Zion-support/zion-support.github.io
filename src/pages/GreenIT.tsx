import React from 'react';
import { Link } from 'react-router-dom';

export default function GreenIT() {
  const greenITSolutions = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Sustainable IT infrastructure solutions that reduce energy consumption and carbon footprint.",
      benefits: ["Lower Energy Costs", "Reduced Carbon Emissions", "Improved Efficiency", "Sustainable Operations"]
    },
    {
      title: "Cloud Optimization",
      description: "Green cloud solutions that maximize resource utilization and minimize environmental impact.",
      benefits: ["Resource Optimization", "Carbon-Neutral Cloud", "Efficient Scaling", "Green Data Centers"]
    },
    {
      title: "Sustainable Software Development",
      description: "Eco-friendly software practices that optimize performance and reduce resource consumption.",
      benefits: ["Efficient Algorithms", "Reduced Server Load", "Sustainable Coding", "Performance Optimization"]
    },
    {
      title: "Green Data Management",
      description: "Sustainable data storage and management solutions that minimize environmental impact.",
      benefits: ["Efficient Storage", "Data Deduplication", "Green Backup Solutions", "Sustainable Archives"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Green <span className="text-green-400">IT</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Sustainable technology solutions that reduce environmental impact while 
            maintaining high performance and business value
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Green IT */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Green IT?</h2>
              <p className="text-lg text-slate-300 mb-6">
                The technology sector is responsible for a significant portion of global carbon emissions. 
                By adopting green IT practices, organizations can reduce their environmental impact while 
                improving operational efficiency and reducing costs.
              </p>
              <p className="text-lg text-slate-300">
                Our comprehensive green IT solutions help businesses transition to sustainable technology 
                practices, from energy-efficient infrastructure to renewable energy integration and 
                responsible e-waste management.
              </p>
            </div>
            <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🌱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Green IT Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Green IT Solutions</h2>
            <p className="text-xl text-slate-300">Comprehensive sustainable technology solutions for modern businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {greenITSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Impact by the Numbers</h2>
            <p className="text-xl text-slate-300">See the real difference our green IT solutions make</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "40%", label: "Average Energy Savings", color: "text-green-400" },
              { number: "60%", label: "Carbon Reduction", color: "text-blue-400" },
              { number: "25%", label: "Cost Reduction", color: "text-yellow-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold mb-4 ${stat.color}`}>{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Green?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of organizations that have already transformed their IT operations with our 
            sustainable solutions. Start your green IT journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}