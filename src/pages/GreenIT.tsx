import React from 'react';
<<<<<<< HEAD
import SEO from '../SEO';
=======
import { Link } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const GreenIT: React.FC = () => {
  const greenSolutions = [
=======
=======
import { AppLayout } from "@/layout/AppLayout";
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
import React from 'react';
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
    <>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    <AppLayout>
      <SEO
        title="Green IT Solutions - Sustainable Technology | Zion Tech Group"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
<<<<<<< HEAD
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware, Zion Tech Group"
=======
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
        canonical="https://ziontechgroup.com/green-it"
=======
        canonical="https://ziontechgroup.com/marketplace/category/green-it"
>>>>>>> origin/cursor/website-audit-and-enhancement-aa85
      />
      <AppHeader />
      <main className="min-h-screen bg-background pt-16 pb-20">
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
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {greenSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
=======
          <div className="mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Sustainable IT for a Better Future</h2>
                  <p className="text-zion-slate-light text-lg mb-6">
                    As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. 
                    Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure 
                    while maintaining performance and reliability.
                  </p>
                  <p className="text-zion-slate-light text-lg mb-6">
                    From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions 
                    for reducing your carbon footprint.
                  </p>
                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600" 
                    alt="Green IT sustainability" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Our Green IT Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {greenITSolutions.map((solution, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                    <div className="flex justify-center mb-4">
                      <solution.icon className="h-12 w-12 text-zion-cyan" />
                    </div>
                    <h3 className="text-white font-medium text-xl text-center mb-3">{solution.title}</h3>
                    <p className="text-zion-slate-light text-center">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Green IT?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-white font-medium text-xl mb-4">Environmental Benefits</h3>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Reduced carbon footprint and greenhouse gas emissions</li>
                    <li>• Lower energy consumption and resource utilization</li>
                    <li>• Decreased electronic waste through better lifecycle management</li>
                    <li>• Support for renewable energy initiatives</li>
                  </ul>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
                
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
<<<<<<< HEAD
    </AppLayout>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
      <Footer />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
  );
};

export default GreenIT;