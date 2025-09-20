import React, { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Square, RotateCcw, Settings, Download, Share2, Eye, EyeOff, Maximize2, Minimize2 } from "lucide-react"
import { SEO } from "../components/SEO"
export default function Demo() {;
  const [isPlaying, setIsPlaying] = useState(false),;
  const [currentTime, setCurrentTime] = useState(0),;
  const [duration, setDuration] = useState(120)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const demos = [;
    {;
      id: 1,title: 'AI Business Intelligence Dashboard',description: 'Real-time analytics and insights powered by AI',duration: '2:30',thumbnail: '/demos/ai-bi-dashboard.jpg',category: 'AI & Analytics'
    };
    {;
      id: 2,title: 'Cybersecurity Threat Detection',description: 'AI-powered security monitoring and response',duration: '1:45',thumbnail: '/demos/cybersecurity.jpg',category: 'Security'
    };
    {;
      id: 3,title: 'Digital Twin Platform',description: 'IoT and AI integration for smart operations',duration: '3:15',thumbnail: '/demos/digital-twin.jpg',category: 'IoT & AI'
    };
    {;
      id: 4,title: 'AI Content Generation',description: 'Automated content creation and optimization',duration: '2:00',thumbnail: '/demos/ai-content.jpg',category: 'Content AI'
    };
  ];
  const handlePlayPause = () => {;
    setIsPlaying(!isPlaying),;
  },;

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setCurrentTime(parseInt(e.target.value));
  };
  const formatTime = (seconds: number) => {;
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`,;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Interactive Demos - Zion Tech Group"
        description="Experience our AI-powered solutions in action through interactive demonstrations. See how our technology can transform your business operations."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <[^>]*/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Interactive Demos;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience our cutting-edge AI solutions firsthand. Watch live demonstrations ;
              and see how our technology can transform your business operations.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Demo Player Section */};
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">;
          <div className="text-center mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">AI Business Intelligence Dashboard</[^>]*>
            <p className="text-gray-300">Real-time analytics and insights powered by artificial intelligence</[^>]*>
          </[^>]*>

          {/* Video Player */};
          <div className="relative bg-black rounded-xl overflow-hidden mb-6">;
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">;
              <div className="text-center text-white">;
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <p className="text-lg">Demo Video Player</[^>]*>
                <p className="text-sm text-gray-300">Click to start demonstration</[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Video Controls */};
            {showControls && (;&& (; (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">;
                <div className="flex items-center gap-4">;
                  <button;
                    onClick={handlePlayPause};
                    className="[^"]*"
                  >;
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </[^>]*>
                  ;
                  <div className="flex-1">;
                    <input;
                      type="range"
                      min="0"
                      max={duration};
                      value={currentTime};
                      onChange={handleTimeUpdate};
                      className="[^"]*"
                    />;
                  </[^>]*>
                  ;
                  <div className="text-white text-sm">;
                    {formatTime(currentTime)} / {formatTime(duration)};
                  </[^>]*>
                  ;
                  <div className="flex gap-2">;
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center text-white transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center text-white transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center text-white transition-colors">;
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>

          {/* Demo Actions */};
          <div className="flex flex-wrap gap-4 justify-center">;
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2">;
              <[^>]*/>
              Start Demo;
            </[^>]*>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center gap-2">;
              <[^>]*/>
              Download Demo;
            </[^>]*>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center gap-2">;
              <[^>]*/>
              Share Demo;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Available Demos */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-4">Available Demonstrations</[^>]*>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Explore our comprehensive suite of AI-powered solutions through interactive demonstrations;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {demos.map((demo, index) => (;
            <motion.div
              key={demo.id};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.3, delay: index * 0.1 }};
              className="[^"]*"
            >;
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">;
                <[^>]*/>
                <div className="absolute bottom-4 left-4 right-4">;
                  <span className="inline-block px-2 py-1 bg-blue-600/80 text-white text-xs rounded">;
                    {demo.category};
                  </[^>]*>
                </[^>]*>
                <div className="absolute top-4 right-4">;
                  <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs rounded">;
                    {demo.duration};
                  </[^>]*>
                </[^>]*>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">;
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="p-6">;
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">;
                  {demo.title};
                </[^>]*>
                <p className="text-gray-400 text-sm mb-4">{demo.description}</[^>]*>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">;
                  Watch Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Demo Features */};
      <div className="bg-white/5 border-t border-white/10">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Experience</[^>]*>
              <p className="text-gray-400">Hands-on demonstrations that let you explore our solutions</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Customizable Demos</[^>]*>
              <p className="text-gray-400">Tailored demonstrations based on your specific needs</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Download & Share</[^>]*>
              <p className="text-gray-400">Save demos for offline viewing or share with your team</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <div className="text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Schedule a personalized demo with our team and discover how our AI solutions can transform your business.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">;
              Schedule Live Demo;
            </[^>]*>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/20">;
              Contact Sales Team;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      <style>{`;
        .slider::-webkit-slider-thumb {;
          appearance: none,height: 20px,width: 20px;
          border-radius: 50%,background: #3b82f6,cursor: pointer;
        };
        ;
        .slider: :-moz-range-thumb {;
          height: 20px,width: 20px;
          border-radius: 50%,background: #3b82f6,cursor: pointer,border: none;
        };
      `}</[^>]*>
    </[^>]*>
  );
};