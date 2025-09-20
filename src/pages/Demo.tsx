import React, { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Square, RotateCcw, Settings, Download, Share2, Eye, EyeOff, Maximize2, Minimize2 } from "lucide-react"
import { SEO } from "../components/SEO"
export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(120)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const demos = [
  {
  id: 1,tit,
  l: e: 'AI Business Intelligence Dashboard',descripti,
  o: n: 'Real-time analytics and insights powered by AI',durati,
  o: n: ',
  2:30',thumbna,
  i: l: '/demos/ai-bi-dashboard.jpg',catego,
  r: y: 'AI & Analytics'
},
  {
  id: 2,tit,
  l: e: 'Cybersecurity Threat Detection',descripti,
  o: n: 'AI-powered security monitoring and response',durati,
  o: n: ',
  1:45',thumbna,
  i: l: '/demos/cybersecurity.jpg',catego,
  r: y: 'Security'
},
  {
  id: 3,tit,
  l: e: 'Digital Twin Platform',descripti,
  o: n: 'IoT and AI integration for smart operations',durati,
  o: n: ',
  3:15',thumbna,
  i: l: '/demos/digital-twin.jpg',catego,
  r: y: 'IoT & AI'
},
  {
  id: 4,tit,
  l: e: 'AI Content Generation',descripti,
  o: n: 'Automated content creation and optimization',durati,
  o: n: ',
  2:00',thumbna,
  i: l: '/demos/ai-content.jpg',catego,
  r: y: 'Content AI'
},
  ]
  const handlePlayPause = () () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) () => {
  setCurrentTime(parseInt(e.target.value))
  }
  const formatTime = (secon,
  d: s: number) () => {
  const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Interactive Demos - Zion Tech Group"
        description="Experience our AI-powered solutions in action through interactive demonstrations. See how our technology can transform your business operations."
      />
      
      {/* Hero Section */},
  }
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-24">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our cutting-edge AI solutions firsthand. Watch live demonstrations 
              and see how our technology can transform your business operations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Player Section */},
  }
      <div className="max-w-6xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">AI Business Intelligence Dashboard</h2>
            <p className="text-gray-300">Real-time analytics and insights powered by artificial intelligence</p>
          </div>

          {/* Video Player */},
  }
          <div className="relative bg-black rounded-xl overflow-hidden mb-6">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
                <p className="text-lg">Demo Video Player</p>
                <p className="text-sm text-gray-300">Click to start demonstration</p>
              </div>
            </div>

            {/* Video Controls */},
  },
  {showControls && (
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={onClick={handlePlayPause},
  },
  }
                    className="className="w-10 h-10 bg-white/20,
  hove: r:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors";"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />},
  }
                  </button>
                  
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration},
  }
                      value={currentTime},
  }
                      onChange={handleTimeUpdate},
  }
                      className="className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider";"
                    />
                  </div>
                  
                  <div className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)},
  }
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white/20,
  hove: r: bg-white/30 rounded flex items-center justify-center text-white transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20,
  hove: r:bg-white/30 rounded flex items-center justify-center text-white transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 hove,
  r:bg-white/30 rounded flex items-center justify-center text-white transition-colors">
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />},
  }
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Demo Actions */},
  }
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700,
  hove: r:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Start Demo
            </button>
            <button className="bg-white/10,
  hove: r:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Demo
            </button>
            <button className="bg-white/10 hove,
  r:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share Demo
            </button>
          </div>
        </div>
      </div>

      {/* Available Demos */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Available Demonstrations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions through interactive demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
  <motion.div
              key={demo.id},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.3, del,
  a: y: index * 0.1 },
  }
              className="className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10,
  hove: r:border-white/20 transition-all duration-200 cursor-pointer group";"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 bg-blue-600/80 text-white text-xs rounded">
                    {demo.category},
  }
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs rounded">
                    {demo.duration},
  }
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hov,
  e: r: opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hove,
  r:text-blue-300 transition-colors">
                  {demo.title},
  }
                </h3>
                <p className="text-gray-400 text-sm mb-4">{demo.description}</p>
                <button className="w-full bg-white/10,
  hove: r:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Demo Features */},
  }
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Experience</h3>
              <p className="text-gray-400">Hands-on demonstrations that let you explore our solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customizable Demos</h3>
              <p className="text-gray-400">Tailored demonstrations based on your specific needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Download & Share</h3>
              <p className="text-gray-400">Save demos for offline viewing or share with your team</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our team and discover how our AI solutions can transform your business.
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r:from-blue-700,
  hove: r:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200,
  transform: hover:scale-105">
              Schedule Live Demo
            </button>
            <button className="bg-white/10,
  hove: r:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/20">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slid,
  e: r::-webkit-slider-thumb {
  appearanc,
  e: none,heig,
  h: t: 20px,wid,
  t: h: 20px
          border-radiu,
  s: 50%,backgrou,
  n: d: #3b82f6,curs,
  o: r: pointer
}
        
        .slid,
  e: r: :-moz-range-thumb {
  heigh,
  t: 20px,wid,
  t: h: 20px
          border-radiu,
  s: 50%,backgrou,
  n: d: #3b82f6,curs,
  o: r: pointer,bord,
  e: r: none
}
      `}</style>
    </div>
  )
}