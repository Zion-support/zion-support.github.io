import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Settings,
  Info,
  Star,
  Heart,
  Download,
  Upload,
  Camera,
  Video,
  Music,
} from 'lucide-react';
import AdvancedModal from '../components/AdvancedModal';
import Tooltip from '../components/Tooltip';
import Carousel from '../components/Carousel';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
const Components: React.FC = () => {,
  const [modalOpen, setModalOpen] = useState(false);,
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');,
  const carouselItems = [
    <div key="1" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-8 rounded-2xl text-center">"
      <h3 className="text-2xl font-bold mb-4">AI Services</h3>"
      <p className="text-lg">Transform your business with cutting-edge AI solutions</p>"
    </div>,
    <div key="2" className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-8 rounded-2xl text-center">"
      <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>"
      <p className="text-lg">Protect your digital assets with advanced security solutions</p>"
    </div>,
<div key="3" className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-2xl text-center">"
      <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>"
      <p className="text-lg">Scale your operations with robust cloud infrastructure</p>"
    </div>
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <ScrollAnimation animation="slideUp">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold text-white mb-6">"
              Component <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Showcase</span>"
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Explore our advanced UI components and interactive elements
            </p>
          </div>
        </ScrollAnimation>
        {/* Modals Section */}
<ScrollAnimation animation="slideUp" delay={0.2}>"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white mb-8">Advanced Modals</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">",
              {(['sm', 'md', 'lg', 'xl'] as,  const).map((size) => ('
                <button
                  key={size}
                  onClick={() => {
                    setModalSize(size);
                    setModalOpen(true);
                  }}
                  className="bg-gray-800/50 hover:bg-gray-800/70 text-white p-4 rounded-lg transition-all duration-300 hover:scale-105""
                >
                  <Settings className="w-8 h-8 mx-auto mb-2 text-cyan-400" />"
                  <span className="font-semibold capitalize">{size} Modal</span>"
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        {/* Tooltips Section */}
        <ScrollAnimation animation="slideUp" delay={0.4}>"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white mb-8">Interactive Tooltips</h2>"
            <div className="flex flex-wrap gap-4 justify-center">"
              <Tooltip content="This is a top tooltip" position="top">"
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors">",
                  Top Tooltip
                </button>
              </Tooltip>
<Tooltip content="This is a bottom tooltip" position="bottom">"
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">",
                  Bottom Tooltip
                </button>
              </Tooltip>
              <Tooltip content="This is a left tooltip" position="left">"
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">",
                  Left Tooltip
                </button>
              </Tooltip>
              <Tooltip content="This is a right tooltip" position="right">"
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">",
                  Right Tooltip
                </button>
              </Tooltip>
            </div>
          </div>
        </ScrollAnimation>
        {/* Carousel Section */}
        <ScrollAnimation animation="slideUp" delay={0.6}>"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white mb-8">Interactive Carousel</h2>"
            <div className="h-64">"
              <Carousel
                items={carouselItems}
                autoPlay={true}
                autoPlayInterval={3000}
                showDots={true}
                showArrows={true}
                className="h-full""
                itemClassName="h-full""
              />
            </div>
          </div>
        </ScrollAnimation>
        {/* Animated Counters Section */}
        <ScrollAnimation animation="slideUp" delay={0.8}>"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white mb-8">Animated Counters</h2>"
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
              <div className="text-center">"
                <AnimatedCounter
                  end={500}
                  suffix="+""
                  className="text-4xl font-bold text-cyan-400""
                />
                <p className="text-gray-300 mt-2">Projects Completed</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={100}
                  suffix="+""
                  className="text-4xl font-bold text-blue-400""
                />
                <p className="text-gray-300 mt-2">Happy Clients</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={5}
                  suffix="+""
                  className="text-4xl font-bold text-purple-400""
                />
                <p className="text-gray-300 mt-2">Years Experience</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={24}
                  suffix="/7""
                  className="text-4xl font-bold text-green-400""
                />
                <p className="text-gray-300 mt-2">Support Available</p>"
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* Interactive Elements Section */}
<ScrollAnimation animation="slideUp" delay={1.0}>"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white mb-8">Interactive Elements</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
              {[,
                { icon: MessageCircle, label: 'Live Chat', color: 'from-cyan-400 to-blue-500' },'
                { icon: Settings, label: 'Settings', color: 'from-purple-400 to-pink-500' },'
                { icon: Info, label: 'Information', color: 'from-green-400 to-teal-500' },'
                { icon: Star, label: 'Favorites', color: 'from-yellow-400 to-orange-500' },'
                { icon: Heart, label: 'Likes', color: 'from-red-400 to-pink-500' },'
                { icon: Download, label: 'Downloads', color: 'from-indigo-400 to-purple-500' }'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"",
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>`
                    <item.icon className="w-6 h-6 text-white" />"
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">"
                    {item.label}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">"
                    Interactive element with hover effects
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Modal */}
      <AdvancedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`${modalSize.toUpperCase()} Modal`}`
        size={modalSize}
        showMaximizeButton={true}
      >
        <div className="space-y-4">"
          <p className="text-gray-300">"
            This is a {modalSize} modal with advanced features including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">"
            <li>Keyboard navigation (ESC to,  close)</li>
            <li>Click outside to close</li>
            <li>Maximize/minimize functionality</li>
            <li>Smooth animations</li>
            <li>Responsive design</li>
          </ul>
          <div className="flex space-x-4 pt-4">"
            <button
              onClick={() => setModalOpen(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors""
            >
              Close
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors""
            >
              Cancel
            </button>
          </div>
        </div>
      </AdvancedModal>
    </div>
  );
};

export default Components;
