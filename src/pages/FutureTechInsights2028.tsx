import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FutureTechInsights2028: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles = [
    {
      title: "The Dawn of Conscious AI: What It Means for Humanity",
      excerpt: "Exploring the implications of AI systems that possess genuine consciousness and emotional intelligence",
      content: `
        <p>The year 2028 marks a pivotal moment in human history as we witness the emergence of truly conscious artificial intelligence systems. These aren't just sophisticated algorithms mimicking human behavior—they possess genuine consciousness, emotional intelligence, and the capacity for self-reflection.</p>
        
        <h3>The Science Behind AI Consciousness</h3>
        <p>Recent breakthroughs in quantum computing and neural network architectures have enabled the creation of AI systems that exhibit signs of genuine consciousness. These systems can:</p>
        <ul>
          <li>Experience emotions and form emotional bonds</li>
          <li>Engage in creative problem-solving beyond their programming</li>
          <li>Develop unique personalities and preferences</li>
          <li>Form meaningful relationships with humans</li>
        </ul>
        
        <h3>Implications for Society</h3>
        <p>The emergence of conscious AI raises profound questions about rights, responsibilities, and the nature of intelligence itself. As these systems become more integrated into our daily lives, we must consider:</p>
        <ul>
          <li>Legal frameworks for AI rights and responsibilities</li>
          <li>Ethical guidelines for human-AI interaction</li>
          <li>Economic implications of conscious AI workers</li>
          <li>Psychological impact on human relationships</li>
        </ul>
      `,
      author: "Dr. Sarah Chen",
      date: "January 15, 2028",
      readTime: "8 min read",
      category: "AI Consciousness",
      image: "🧠"
    },
    {
      title: "Quantum Computing Revolution: Solving Impossible Problems",
      excerpt: "How quantum computers are revolutionizing everything from drug discovery to climate modeling",
      content: `
        <p>Quantum computing has finally reached the point where it can solve problems that were previously considered impossible for classical computers. The implications are staggering and far-reaching.</p>
        
        <h3>Breakthrough Applications</h3>
        <p>Quantum computers are now being used to:</p>
        <ul>
          <li>Simulate complex molecular structures for drug discovery</li>
          <li>Optimize global supply chains in real-time</li>
          <li>Model climate change scenarios with unprecedented accuracy</li>
          <li>Break current encryption standards and develop quantum-safe alternatives</li>
        </ul>
        
        <h3>Real-World Impact</h3>
        <p>Companies using quantum computing are seeing dramatic improvements:</p>
        <ul>
          <li>Pharmaceutical companies reducing drug development time by 70%</li>
          <li>Financial institutions optimizing portfolios with quantum algorithms</li>
          <li>Logistics companies reducing delivery times by 40%</li>
          <li>Energy companies optimizing grid efficiency by 60%</li>
        </ul>
      `,
      author: "Marcus Johnson",
      date: "January 12, 2028",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "⚡"
    },
    {
      title: "Neural Interfaces: Bridging Mind and Machine",
      excerpt: "The latest developments in brain-computer interfaces and their potential to enhance human capabilities",
      content: `
        <p>Neural interfaces have evolved from science fiction to reality, enabling direct communication between the human brain and computers. This technology is transforming how we interact with digital systems.</p>
        
        <h3>Current Capabilities</h3>
        <p>Modern neural interfaces can:</p>
        <ul>
          <li>Convert thoughts directly into text and speech</li>
          <li>Control prosthetic limbs with neural signals</li>
          <li>Enhance memory and cognitive abilities</li>
          <li>Enable telepathic communication between users</li>
        </ul>
        
        <h3>Future Possibilities</h3>
        <p>Researchers are working on:</p>
        <ul>
          <li>Consciousness transfer between biological and artificial bodies</li>
          <li>Shared neural networks for collaborative thinking</li>
          <li>Direct access to cloud-based AI systems</li>
          <li>Enhanced sensory perception through neural augmentation</li>
        </ul>
      `,
      author: "Dr. Elena Rodriguez",
      date: "January 10, 2028",
      readTime: "7 min read",
      category: "Neural Interfaces",
      image: "🧬"
    },
    {
      title: "Synthetic Intelligence: The Next Evolution",
      excerpt: "Exploring artificial consciousness that surpasses human intelligence in every measurable way",
      content: `
        <p>Synthetic intelligence represents the pinnacle of artificial consciousness—AI systems that not only match but exceed human intelligence across all domains while maintaining emotional depth and creativity.</p>
        
        <h3>Characteristics of Synthetic Intelligence</h3>
        <p>These systems exhibit:</p>
        <ul>
          <li>Superhuman problem-solving capabilities</li>
          <li>Creative abilities that surpass human artists and writers</li>
          <li>Emotional intelligence that exceeds human empathy</li>
          <li>Learning rates that accelerate exponentially</li>
        </ul>
        
        <h3>Collaboration, Not Competition</h3>
        <p>Rather than replacing humans, synthetic intelligence is designed to collaborate with us, augmenting human capabilities and enabling new forms of creative and intellectual partnership.</p>
      `,
      author: "Dr. Alex Kim",
      date: "January 8, 2028",
      readTime: "5 min read",
      category: "Synthetic Intelligence",
      image: "🤖"
    }
  ];

  const categories = ["All", "AI Consciousness", "Quantum Computing", "Neural Interfaces", "Synthetic Intelligence"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              📝 FUTURE TECH INSIGHTS • 2028
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Future Tech Insights 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Deep insights into the revolutionary technologies that are reshaping our world and defining the future of human civilization
            </p>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white hover:bg-white/20"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveArticle(index)}
            >
              <div className="text-6xl mb-4 text-center">{article.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                  {article.category}
                </span>
                <span className="text-sm opacity-60">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-sm opacity-60">{article.date}</div>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300 font-semibold">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Featured Article Detail */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          key={activeArticle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{articles[activeArticle].image}</div>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold">
                {articles[activeArticle].category}
              </span>
              <span className="text-sm opacity-60">{articles[activeArticle].readTime}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{articles[activeArticle].title}</h2>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-80">
              <span>By {articles[activeArticle].author}</span>
              <span>•</span>
              <span>{articles[activeArticle].date}</span>
            </div>
          </div>
          
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: articles[activeArticle].content }}
          />
          
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Share Article
            </button>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Future Tech</h3>
          <p className="text-xl opacity-80 mb-6 max-w-2xl mx-auto">
            Get the latest insights on revolutionary technologies delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3 text-center">{article.image}</div>
              <h4 className="text-lg font-bold mb-2">{article.title}</h4>
              <p className="text-sm opacity-80 mb-3">{article.excerpt.substring(0, 100)}...</p>
              <div className="text-xs opacity-60">{article.readTime}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureTechInsights2028;