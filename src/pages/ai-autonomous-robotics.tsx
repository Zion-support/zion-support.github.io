import React from 'react';

const AIAutonomousRobotics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Robotics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advance into the future with AI-powered autonomous robotics that 
            learn, adapt, and perform complex tasks with human-like intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Adaptive Learning</h3>
            <p className="text-gray-300">
              Robots that continuously learn from their environment and experiences, 
              improving performance and adapting to new challenges autonomously.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Human-Robot Collaboration</h3>
            <p className="text-gray-300">
              Safe and intuitive interaction between humans and robots, with 
              AI-powered understanding of human intentions and safety protocols.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-Task Execution</h3>
            <p className="text-gray-300">
              Versatile robots capable of handling multiple tasks simultaneously, 
              from precision manufacturing to complex assembly operations.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Explore AI Robotics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousRobotics;