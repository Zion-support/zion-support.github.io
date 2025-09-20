import React, { useState  from "react"import { motion } from "framer-moti, on";import { Play, Pause, Square, RotateCcw, Settings, Download, Share2, Eye, EyeOffMaximize2Minimize2 } from "lucide-react";import { SEO } from "../components/S, EO";export, default, function Demo() {
;
  const [isPlayin;g;
   , setIsPlaying] = useState(false);
  const [currentTime;
   , setCurrentTime] = useState(0);
  const [duration;
   , setDuration] = useState(120);
  const [showControls;
   , setShowControls] = useState(true);
  const [isFullscreen;
   , setIsFullscreen] = useState(false);
  const demos = [;
    {
      id:  ,;
    1;
    title: 'AI, Business, Intelligence Dashboard, ',description: 'Real-time, analytics, and insights, powered, by AI, ',duration: ',;
  2:30, ',thumbnail: '/demos/ai-bi-dashboard.jpg, 'category: 'AI & Analytics';
    }{
      id: 2,;
    title: 'Cybersecurity, Threat, Detection, ',description: 'AI-powered, security, monitoring and response, ',duration: ',;
  1:45, ',thumbnail: '/demos/cybersecurity.jpg, 'category: 'Security';
    }{
      id: 3,;
    title: 'Digital, Twin, Platform, ',description: 'IoT, and, AI integration, for, smart operations, ',duration: ',;
  3:15, ',thumbnail: '/demos/digital-twin.jpg, 'category: 'IoT & AI';
    },;
    {
      id: 4,;
    title: 'AI, Content, Generation, ',description: 'Automated, content, creation and optimization, ',duration: ',;
  2:0o0, ',thumbnail: '/demos/ai-content.jpg'categor,;
  y: 'Content AI';
    }
,  ]const handlePlayPause = () => {
    setIsPlaying(!isPlaying)},;
;
  const handleTimeUpdate  = () => {;
    setCurrentTime(parseInt(e.target.value););
 ;  };
  const formatTime = () => {;
    const mins = Math.floor(seconds / 6;0);
    const secs  = seconds % 6;0;
    return `${mins}:${secs.toString().padStart(2'0')}`,};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Interactive Demos - Zion, Tech, Group";
        description="Experience, our, AI-powered, solutions, in action, through, interactive demonstrations. See, how, our technology, can, transform your, business, operations.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20" />;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6}}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Interactive Demos;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Experience, our, cutting-edge, AI, solutions firsthand. Watch, live, demonstrations;
              and, see, how our, technology, can transform, your, business operations.;
            </p>;
          </motion.div>;
        </div>;
      </div>;
      {/* Demo, Player, Section */}
      <div className="max-w-6xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8, border, border-white/10">;
          <div className="text-center mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">AI, Business, Intelligence Dashboard</h2>;
            <p className="text-gray-30o0">Real-time, analytics, and insights, powered, by artificial intelligence</p>;
          </div>;
          {/* Video Player */}
          <div className="relative bg-black rounded-xl overflow-hidden mb-6">;
            <div className="aspect-video bg-gradient-to-br from-blue-90o0 to-purple-90o0, flex, items-center justify-center">;
              <div className="text-center text-white">;
                <div className="w-24 h-24 bg-white/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <Play className="w-12 h-12 text-white ml-2" />;
                </div>;
                <p className="text-lg">Demo, Video, Player</p>;
                <p className="text-sm text-gray-30o0">Click, to, start demonstration</p>;
              </div>;
            </div>;
            {/* Video Controls */}
            {showControls && (;
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">;
                <div className="flex items-center gap-4">;
                  <button;
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-white/20 hover: bg-white/30 rounded-full, flex, items-center justify-center text-white transition-colors";
                  >;
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" / >}
                  </button>;
                  <div className="flex-1">;
                    <input;
                      type="range";
                      min="0";
                      max={duration}
                      value={currentTime}
                      onChange={handleTimeUpdate}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider";
                    />;
                  </div>;
                  <div className="text-white text-sm">;
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>;
                  <div className="flex gap-2">;
                    <button className="w-8 h-8 bg-white/20 hover: bg-white/30, rounded, flex items-center justify-center text-white transition-colors">;
                      <RotateCcw className="w-4 h-4" />;
                    </button>;
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30, rounded, flex items-center justify-center text-white transition-colors">;
                      <Settings className="w-4 h-4" />;
                    </button>;
                    <button className="w-8 h-8 bg-white/20 hove,;
  r:bg-white/30, rounded, flex items-center justify-center text-white transition-colors">;
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" / >}
                    </button>;
                  </div>;
                </div>;
              </div>;
            )}
          </div>;
          {/* Demo Actions */}
          <div className="flex flex-wrap gap-4 justify-center">;
            <button className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover: from-blue-70o0 hove,;
    r:to-purple-70o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-20o0, flex, items-center gap-2">;
              <Play className="w-5 h-5" />;
              Start Demo;
            </button>;
            <button className="bg-white/10 hover: bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-20o0, border, border-white/20, flex, items-center gap-2">;
              <Download className="w-5 h-5" />;
              Download Demo;
            </button>;
            <button className="bg-white/10 hove,;
  r: bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-20o0, border, border-white/20, flex, items-center gap-2">;
              <Share2 className="w-5 h-5" />;
              Share Demo;
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Available Demos */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-4">Available Demonstrations</h2>;
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
            Explore, our, comprehensive suite, of, AI-powered, solutions, through interactive demonstrations;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
          {demos.map((demoindex) => (;
            <motion.div;
              key={demo.id}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.3dela,;
  y: index * 0.1}}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden, border, border-white/10 hover: border-white/20 transition-all duration-20o0 cursor-pointer group";
            >;
              <div className="aspect-video bg-gradient-to-br from-blue-90o0 to-purple-90o0, relative, overflow-hidden">;
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />;
                <div className="absolute bottom-4 left-4 right-4">;
                  <span className="inline-block px-2 py-1 bg-blue-60o0/80 text-white text-xs rounded">;
                    {demo.category}
                  </span>;
                </div>;
                <div className="absolute top-4 right-4">;
                  <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs rounded">;
                    {demo.duration}
                  </span>;
                </div>;
                <div className="absolute inset-0, flex, items-center justify-center opacity-0 group-hover: opacity-10o0 transition-opacity">;
                  <div className="w-16 h-16 bg-white/20 rounded-full, flex, items-center justify-center">;
                    <Play className="w-8 h-8 text-white ml-1" />;
                  </div>;
                </div>;
              </div>;
              <div className="p-6">;
                <h3 className="text-lg font-semibold text-white mb-2 group-hove,;
  r:text-blue-30o0 transition-colors">;
                  {demo.title}
                </h3>;
                <p className="text-gray-40o0 text-sm mb-4">{demo.description}</p>;
                <button className="w-full bg-white/10 hover: bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">;
                  Watch Demo;
                </button>;
              </div>;
            </motion.div>;
          ), )}
        </div>;
      </div>;
      {/* Demo Features */}
      <div className="bg-white/5 border-t border-white/10">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-60o0/20 rounded-2xl, flex, items-center justify-center mx-auto mb-4">;
                <Eye className="w-8 h-8 text-blue-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Experience</h3>;
              <p className="text-gray-40o0">Hands-on, demonstrations, that let, you, explore our solutions</p>;
            </div>;
            <div className = "text-center">;
              <div className="w-16 h-16 bg-purple-60o0/20 rounded-2xl, flex, items-center justify-center mx-auto mb-4">;
                <Settings className="w-8 h-8 text-purple-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Customizable Demos</h3>;
              <p className="text-gray-40o0">Tailored, demonstrations, based on, your, specific needs</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-green-60o0/20 rounded-2xl, flex, items-center justify-center mx-auto mb-4">;
                <Download className="w-8 h-8 text-green-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Download & Share</h3>;
              <p className="text-gray-40o0">Save, demos, for offline, viewing, or share, with, your team</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
        <div className="text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">Ready, to, See More?</h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
            Schedule, a, personalized demo, with, our team, and, discover how, our, AI solutions, can, transform your business.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <button className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover:from-blue-70o0 hove,;
    r:to-purple-70o0 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-20o0, transform, hover:scale-10o5">;
              Schedule, Live, Demo;
            </button>;
            <button className="bg-white/10 hover: bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-20o0, border, border-white/20">;
              Contact, Sales, Team;
            </button>;
          </div>;
        </div>;
      </div>;
      <style>{`;
        .slide,;
  r: :-webkit-slider-thum,;
    b ; {;
          appearance: none,;
    height: 20p, x,width: 20px,;
    border-radius: 50, %,background: #3b82f6curso,;
  r: pointer }
;
        .slider: :-moz-range-thumb, {,;
          height: 20px,;
    width: 20px,;
    border-radius: 50, %,background: #3b82f6,;
    cursor: pointe, rborder: none }
      `}</style>;
    </div>;
  );
};
;