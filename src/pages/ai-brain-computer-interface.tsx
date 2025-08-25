import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIBrainComputerInterface: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Brain Computer Interface - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI brain computer interface platform providing neural interface technology, cognitive enhancement, and breakthrough brain-computer communication." />
        <meta name="keywords" content="AI brain computer interface, neural interface, cognitive enhancement, brain-computer communication, BCI technology" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Brain Computer Interface
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Neural Interface Revolution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform human-computer interaction with our AI Brain Computer Interface platform. 
                Leverage cutting-edge neural interface technology to create direct communication 
                between the human brain and computers, enabling cognitive enhancement and 
                breakthrough applications in healthcare, gaming, and productivity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Interface Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Neural signal processing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Cognitive enhancement
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Brain-computer communication
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Neurofeedback systems
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Technology Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Enhanced cognitive abilities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Direct brain control
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Accessibility improvements
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Revolutionary applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Experience Neural Interface Technology
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Connect your mind to the digital world
              </p>
              <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Interface
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIBrainComputerInterface;