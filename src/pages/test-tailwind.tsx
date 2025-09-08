import React from 'react';

export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Tailwind CSS Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Test Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Utility Classes</h2>
            <p className="text-gray-300 mb-4">Testing basic Tailwind utilities like spacing, colors, and typography.</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
              Test Button
            </button>
          </div>

          {/* Test Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-pink-300">Responsive Design</h2>
            <p className="text-gray-300 mb-4">Testing responsive utilities and breakpoint prefixes.</p>
            <div className="space-y-2">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
            </div>
          </div>

          {/* Test Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Animations</h2>
            <p className="text-gray-300 mb-4">Testing Tailwind's animation and transition utilities.</p>
            <div className="animate-pulse bg-green-500 h-8 rounded-lg"></div>
          </div>
        </div>

        {/* Test Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300">Custom Zion Colors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-16 h-16 bg-zion-blue rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 bg-zion-cyan rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 bg-zion-purple rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 bg-zion-green rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
