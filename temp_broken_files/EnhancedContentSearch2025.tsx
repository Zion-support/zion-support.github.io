import React, { useState, useMemo } from 'react',
const EnhancedContentSearch2025: React.FC = () => {,
  return (,
    <div className="w-full max-w-4xl mx-auto">,
      {/* Search Form */}
      <divform,
        onSubmit={handleSearch}
        className="bg-white rounded-2xl shadow-lg p-8 mb-8",
      >,
        <div className="text-center mb-6">,
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🔍 Discover Revolutionary Content</h2>,
          <p className="text-gray-600">Search through our comprehensive library of cutting-edge technology content</p>,
        </div>,
        <div className="space-y-4">,
          {/* Search Input */}
          <div className="relative">,
            <input,
              type="text",
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for AI, Quantum Computing, Neural Interfaces, and more...",
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-xl focus: ring-2 focus:ring-purple-500 focus:border-transparent text-lg",
            />,
            <button,
              type="submit",
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300",
            >,
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
              </svg>,
            </button>,
          </div>,
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">,
            {Object.entries(categories).map(([key, label]) => (,
              <button,
                key={key}
                type="button",
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${,
                  selectedCategory === key,
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg',
                    : 'bg-gray-100 text-gray-600 hover: bg-gray-200'}`}
              >,
                {label}
              </button>,
            ))}
          </div>,
        </div>,
      </divform>,
      {/* Search Results */}
      <div>,
        {showResults && (,
          <div,
            className="space-y-4",
          >,
            <div className="flex items-center justify-between mb-6">,
              <h3 className="text-2xl font-bold text-gray-900">,
                Search Results ({filteredResults.length}),
              </h3>,
              <button,
                onClick={() => setShowResults(false)}
                className="text-gray-500 hover: text-gray-700 transition-colors",
              >,
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
                </svg>,
              </button>,
            </div>,
            {filteredResults.length === 0 ? (,
              <div className="text-center py-12">,
                <div className="text-6xl mb-4">🔍</div>,
                <h4 className="text-xl font-semibold text-gray-900 mb-2">No results found</h4>,
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>,
              </div>) : (,
              <div className="grid gap-4">,
                {filteredResults.map((item, index) => (,
                  <div,
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 p-6 border border-gray-100",
                  >,
                    <div className="flex items-start justify-between mb-4">,
                      <div className="flex-1">,
                        <div className="flex items-center space-x-3 mb-2">,
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>,
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>,
                            {item.status}
                          </span>,
                        </div>,
                        <p className="text-gray-600 mb-3">{item.description}</p>,
                        <div className="flex flex-wrap gap-2">,
                          {item.tags.map((tag, idx) => (,
                            <span,
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full",
                            >,
                              {tag}
                            </span>))}
                        </div>,
                      </div>,
                      <div className="ml-4">,
                        <a,
                          href={item.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold",
                        >,
                          Explore →,
                        </a>,
                      </div>,
                    </div>,
                  </div>,
                ))}
              </div>,
            )}
          </div>,
        )}
      </div>,
      {/* Quick Access */}
      <div,
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6",
      >,
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Access</h3>,
        <div className="grid grid-cols-2 md: grid-cols-4 gap-4">,
          {[,
            { title: 'AI Consciousness', link: '/pages/AdvancedAIConsciousness2025', icon: '🧠' },
            { title: 'Quantum Computing', link: '/pages/QuantumComputingBreakthrough2025', icon: '⚛️' },
            { title: 'Neural Interfaces', link: '/pages/NeuralInterfaceRevolution2025', icon: '🧬' },
            { title: 'All Content', link: '#', icon: '🌟' }
          ].map((item, index) => (,
            <a,
              key={index}
              href={item.link}
              className="flex flex-col items-center p-4 bg-white rounded-lg hover: shadow-md transition-all duration-300 group",
            >,
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">,
                {item.icon}
              </div>,
              <span className="text-sm font-semibold text-gray-700 text-center">{item.title}</span>,
            </a>))}
        </div>,
      </div>,
    </div>,
  ),
},
export default EnhancedContentSearch2025,