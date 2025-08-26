import React from 'react';
<<<<<<< HEAD
import SEO from '../SEO';
=======
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const GreenIT: React.FC = () => {
  const greenSolutions = [
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Leaf, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/layout";

export default function GreenIT() {
  const greenITSolutions = [
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
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
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
    <>
    <AppLayout>
      <SEO
        title="Green IT Solutions - Sustainable Technology | Zion Tech Group"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
<<<<<<< HEAD
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware, Zion Tech Group"
=======
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
        canonical="https://ziontechgroup.com/green-it"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Green
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}IT
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sustainable technology solutions that reduce environmental impact while 
              maintaining high performance and business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {greenSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Environmental Benefits</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Go Green with Technology</h3>
              <p className="text-gray-300 mb-6">
                Ready to make your IT operations more sustainable? Let's discuss how 
                green technology can benefit both your business and the environment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Explore Green Solutions
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>
    </div>
=======
      </main>
    </AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
  );
};

export default GreenIT;