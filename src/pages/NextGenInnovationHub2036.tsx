  return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Your Innovation</h3>
            {innovations.map((innovation, index) => (
              <button
                key={innovation.id}
                onClick={() => setActiveInnovation(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeInnovation === index
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-2 border-indigo-400/50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'</button>
                }`}</button>
              ></button>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{innovation.icon}
                  <div>
                    <h4 className="text-xl font-bold mb-2">{innovation.title}</h4>
                    <p className="text-sm opacity-90">{innovation.description}</p>
              </button>
            ))}
          {/* Innovation Details */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{innovations[activeInnovation].icon}
              <h3 className="text-3xl font-bold mb-4">{innovations[activeInnovation].title}</h3>
              <p className="text-lg opacity-90 mb-6">{innovations[activeInnovation].description}</p>
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              {innovations[activeInnovation].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full">
                  <span className="text-sm">{feature}</span>
              ))}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold mb-2">Impact:</h4>
              <p className="text-sm opacity-90">{innovations[activeInnovation].impact}</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"></button>
                Try Innovation</button>
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold"></button>
                Learn More</button>
              </button>
        {/* Innovation Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+
            <div className="text-sm opacity-75">Active Innovations
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"></button>
              Submit Your Innovation</button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg"></button>
              Start Your Innovation</button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg"></button>
              Start Your Innovation</button>
