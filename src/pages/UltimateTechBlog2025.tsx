import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechBlog2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles = [
    {
      id: 1,
      title: "The AI Revolution: How Artificial General Intelligence is Reshaping Industries",
      excerpt: "Explore how AGI is transforming everything from healthcare to finance, and what it means for the future of work.",
      content: `
        <h2>The Dawn of Artificial General Intelligence</h2>
        <p>Artificial General Intelligence (AGI) represents the next frontier in artificial intelligence development. Unlike narrow AI systems that excel at specific tasks, AGI possesses human-level cognitive abilities across all domains.</p>
        
        <h3>Key Breakthroughs in 2025</h3>
        <ul>
          <li><strong>Multimodal Learning:</strong> AGI systems can now process and understand text, images, audio, and video simultaneously</li>
          <li><strong>Transfer Learning:</strong> Knowledge gained in one domain can be applied to completely different areas</li>
          <li><strong>Creative Problem Solving:</strong> AGI can generate novel solutions to complex, previously unseen problems</li>
          <li><strong>Emotional Intelligence:</strong> Understanding and responding to human emotions with remarkable accuracy</li>
        </ul>

        <h3>Industry Transformations</h3>
        <p>The impact of AGI is being felt across every major industry:</p>
        
        <h4>Healthcare</h4>
        <p>AGI systems are revolutionizing medical diagnosis, drug discovery, and personalized treatment plans. They can analyze vast amounts of medical data to identify patterns and suggest treatments that human doctors might miss.</p>
        
        <h4>Finance</h4>
        <p>In the financial sector, AGI is being used for risk assessment, fraud detection, and algorithmic trading. These systems can process market data in real-time and make investment decisions with superhuman speed and accuracy.</p>
        
        <h4>Manufacturing</h4>
        <p>AGI-powered robots and systems are optimizing production lines, predicting maintenance needs, and improving quality control. This has led to significant increases in efficiency and reductions in waste.</p>

        <h3>The Future of Work</h3>
        <p>As AGI becomes more prevalent, the nature of work is changing. Rather than replacing humans entirely, AGI is augmenting human capabilities and creating new opportunities for collaboration between humans and machines.</p>
      `,
      author: "Dr. Sarah Chen",
      date: "January 20, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      tags: ["AGI", "Machine Learning", "Future of Work", "Industry 4.0"],
      image: "🤖",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing: The Next Computing Revolution",
      excerpt: "Quantum computers are solving problems that were previously impossible, opening up new possibilities in cryptography, optimization, and scientific research.",
      content: `
        <h2>Understanding Quantum Computing</h2>
        <p>Quantum computing leverages the principles of quantum mechanics to process information in ways that classical computers cannot. By exploiting quantum phenomena like superposition and entanglement, quantum computers can perform certain calculations exponentially faster.</p>
        
        <h3>Recent Breakthroughs</h3>
        <ul>
          <li><strong>Quantum Supremacy Achieved:</strong> Google's quantum computer solved a problem in 200 seconds that would take classical computers 10,000 years</li>
          <li><strong>Error Correction:</strong> New techniques have dramatically improved quantum error rates, making quantum computers more reliable</li>
          <li><strong>Commercial Availability:</strong> IBM, Google, and other companies are now offering quantum computing services to businesses</li>
          <li><strong>Quantum Internet:</strong> The first quantum internet networks are being deployed for ultra-secure communication</li>
        </ul>

        <h3>Practical Applications</h3>
        <p>Quantum computing is already being used in several real-world applications:</p>
        
        <h4>Cryptography</h4>
        <p>Quantum computers can break many of the encryption methods currently used to secure data. This has led to the development of quantum-resistant cryptography and quantum key distribution systems.</p>
        
        <h4>Drug Discovery</h4>
        <p>Pharmaceutical companies are using quantum computers to simulate molecular interactions and accelerate drug discovery processes. This could lead to breakthrough treatments for diseases like cancer and Alzheimer's.</p>
        
        <h4>Financial Modeling</h4>
        <p>Banks and investment firms are using quantum computers for portfolio optimization, risk analysis, and fraud detection. The speed and accuracy of quantum algorithms provide significant advantages in these areas.</p>

        <h3>Challenges and Limitations</h3>
        <p>Despite these advances, quantum computing still faces significant challenges. Quantum systems are extremely sensitive to environmental interference, and maintaining quantum coherence remains difficult. Additionally, quantum algorithms are still being developed for many practical applications.</p>
      `,
      author: "Prof. Michael Rodriguez",
      date: "January 18, 2025",
      readTime: "6 min read",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Cryptography", "Drug Discovery", "Financial Modeling"],
      image: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging the Gap Between Mind and Machine",
      excerpt: "Brain-computer interfaces are no longer science fiction. Recent advances are making direct neural control of devices a reality.",
      content: `
        <h2>The Evolution of Neural Interfaces</h2>
        <p>Neural interfaces, also known as brain-computer interfaces (BCIs), are devices that create a direct communication pathway between the brain and external devices. Recent advances have made these systems more practical and accessible than ever before.</p>
        
        <h3>Types of Neural Interfaces</h3>
        <ul>
          <li><strong>Invasive:</strong> Electrodes implanted directly in the brain for high-precision control</li>
          <li><strong>Non-invasive:</strong> External sensors that read brain activity through the skull</li>
          <li><strong>Partially invasive:</strong> Electrodes placed on the surface of the brain</li>
          <li><strong>Hybrid:</strong> Combining multiple approaches for optimal performance</li>
        </ul>

        <h3>Current Applications</h3>
        <p>Neural interfaces are already being used in several medical and assistive applications:</p>
        
        <h4>Medical Rehabilitation</h4>
        <p>Patients with paralysis can now control prosthetic limbs, wheelchairs, and computers using only their thoughts. This has dramatically improved their quality of life and independence.</p>
        
        <h4>Communication</h4>
        <p>People with locked-in syndrome or severe speech impairments can communicate using neural interfaces that translate their thoughts into text or speech.</p>
        
        <h4>Mental Health</h4>
        <p>Neural interfaces are being used to treat conditions like depression, anxiety, and PTSD by directly stimulating specific brain regions.</p>

        <h3>Future Possibilities</h3>
        <p>The potential applications of neural interfaces extend far beyond medical use:</p>
        
        <h4>Enhanced Learning</h4>
        <p>Neural interfaces could accelerate learning by directly stimulating memory formation and cognitive enhancement.</p>
        
        <h4>Virtual Reality</h4>
        <p>Direct neural control could make virtual reality experiences more immersive and intuitive than ever before.</p>
        
        <h4>Human-AI Collaboration</h4>
        <p>Neural interfaces could enable seamless collaboration between humans and artificial intelligence systems.</p>

        <h3>Ethical Considerations</h3>
        <p>As neural interfaces become more advanced, important ethical questions arise about privacy, consent, and the potential for misuse. It's crucial that these technologies are developed and deployed responsibly.</p>
      `,
      author: "Dr. Lisa Wang",
      date: "January 15, 2025",
      readTime: "7 min read",
      category: "Neural Interfaces",
      tags: ["BCI", "Medical Technology", "Rehabilitation", "Ethics"],
      image: "🧠",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Computing", "Neural Interfaces", "Synthetic Biology", "Autonomous Systems"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 ULTIMATE TECH BLOG • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Blog 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Deep insights into the latest technology trends, breakthroughs, and innovations shaping our future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Read Latest Articles →
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 border border-blue-400/30"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-6xl">{articles[0].image}</div>
              <div>
                <div className="text-sm text-purple-300 mb-2">FEATURED ARTICLE</div>
                <h2 className="text-3xl font-bold mb-2">{articles[0].title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>By {articles[0].author}</span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6">{articles[0].excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {articles[0].tags.map((tag, index) => (
                <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Read Full Article →
            </button>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`bg-gradient-to-br ${article.color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveArticle(article.id - 1)}
              >
                <div className="text-4xl mb-4">{article.image}</div>
                <div className="text-sm text-gray-300 mb-2">{article.category}</div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-200 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-6xl mb-4">{articles[activeArticle].image}</div>
                <h2 className="text-3xl font-bold mb-2">{articles[activeArticle].title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                  <span>By {articles[activeArticle].author}</span>
                  <span>•</span>
                  <span>{articles[activeArticle].date}</span>
                  <span>•</span>
                  <span>{articles[activeArticle].readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {articles[activeArticle].tags.map((tag, index) => (
                    <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: articles[activeArticle].content }}
            />
          </motion.div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on technology trends and innovations
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBlog2025;