// @ts-nocheck
  const getColorClasses = (color: Feature["color"]) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600",
      indigo: "from-indigo-500 to-indigo-600",
    } as const;
    return colorMap[color] || "from-blue-500 to-blue-600";
  };

              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400 mb-3">{feature.description}</p>
                    {activeFeature === feature.id && (
                      <div className="space-y-2 animate-fade-in">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className={`w-1.5 h-1.5 bg-${feature.color}-500 rounded-full`}></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeFeature === feature.id ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

