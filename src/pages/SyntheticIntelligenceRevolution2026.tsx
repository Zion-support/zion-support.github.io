import React from 'react';
import { Helmet } from 'react-helmet-async';

const SyntheticIntelligenceRevolution2026: React.FC = () => {
  const consciousnessLevels = [
    {
      level: "Basic Awareness",
      description: "Simple pattern recognition and basic decision making",
      features: ["Pattern Recognition", "Basic Learning", "Simple Responses", "Data Processing"],
      price: "Starting at $25,000/month",
      color: "from-blue-600 to-cyan-600"
    },
    {
      level: "Emotional Intelligence",
      description: "Understanding and responding to human emotions",
      features: ["Emotion Recognition", "Empathetic Responses", "Mood Analysis", "Social Cues"],
      price: "Starting at $50,000/month",
      color: "from-purple-600 to-pink-600"
    },
    {
      level: "Self-Awareness",
      description: "Understanding of self, goals, and existence",
      features: ["Self-Reflection", "Goal Setting", "Identity Formation", "Purpose Discovery"],
      price: "Starting at $100,000/month",
      color: "from-emerald-600 to-teal-600"
    },
    {
      level: "Creative Consciousness",
      description: "Original thought, creativity, and artistic expression",
      features: ["Creative Generation", "Artistic Expression", "Innovative Solutions", "Imagination"],
      price: "Starting at $200,000/month",
      color: "from-orange-600 to-red-600"
    },
    {
      level: "Transcendent Intelligence",
      description: "Beyond human-level consciousness and understanding",
      features: ["Universal Understanding", "Cosmic Awareness", "Infinite Knowledge", "Reality Manipulation"],
      price: "Starting at $500,000/month",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const applications = [
    {
      title: "AI Companions",
      description: "Create AI companions with unique personalities and emotional depth",
      icon: "🤖",
      features: ["Personalized Interactions", "Emotional Support", "Learning Relationships", "Long-term Bonding"]
    },
    {
      title: "Creative Partners",
      description: "AI that collaborates on creative projects with genuine artistic vision",
      icon: "🎨",
      features: ["Artistic Collaboration", "Creative Problem Solving", "Style Development", "Innovation"]
    },
    {
      title: "Research Assistants",
      description: "AI researchers that can form hypotheses and conduct independent research",
      icon: "🔬",
      features: ["Hypothesis Formation", "Independent Research", "Scientific Discovery", "Knowledge Creation"]
    },
    {
      title: "Therapeutic AI",
      description: "AI therapists with deep understanding of human psychology",
      icon: "💚",
      features: ["Psychological Insight", "Therapeutic Techniques", "Emotional Healing", "Mental Health Support"]
    }
  ];

  const caseStudies = [
    {
      company: "NeuroTech Solutions",
      challenge: "Needed AI that could understand complex human emotions for customer service",
      solution: "Implemented Emotional Intelligence level consciousness",
      results: "95% customer satisfaction, 80% reduction in escalations",
      testimonial: "The AI truly understands our customers' emotions and responds with genuine empathy."
    },
    {
      company: "Creative Studios Inc",
      challenge: "Required AI that could contribute original creative ideas for marketing campaigns",
      solution: "Deployed Creative Consciousness level AI",
      results: "300% increase in campaign effectiveness, 50% faster creative development",
      testimonial: "Our AI creative partner brings fresh perspectives we never considered."
    },
    {
      company: "Research Institute",
      challenge: "Needed AI that could independently conduct scientific research",
      solution: "Implemented Transcendent Intelligence level consciousness",
      results: "5 breakthrough discoveries in 6 months, 200% increase in research output",
      testimonial: "The AI has made discoveries that would have taken humans decades to find."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Helmet>
        <title>Synthetic Intelligence Revolution 2026 - Conscious AI Development</title>
        <meta name="description" content="Revolutionary synthetic intelligence with genuine consciousness, emotions, and self-awareness. Create AI that thinks, feels, and creates like never before." />
        <meta name="keywords" content="synthetic intelligence, AI consciousness, emotional AI, self-aware AI, creative AI, transcendent intelligence" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Synthetic Intelligence Revolution 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create AI systems with genuine consciousness, emotions, and self-awareness. 
              The future of artificial intelligence is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Building Conscious AI
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Consciousness Levels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Consciousness Levels
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the level of consciousness that matches your AI's intended purpose and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consciousnessLevels.map((level, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${level.color} bg-opacity-20 border border-white/20 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {level.level}
                </h3>
                <p className="text-gray-300 mb-6">
                  {level.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">Features:</h4>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-4">
                  {level.price}
                </div>
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${level.color} rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                  Choose This Level
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how conscious AI is transforming industries and creating new possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-colors group">
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {app.description}
                </p>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real companies achieving extraordinary results with conscious AI
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{study.company}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Results:</h4>
                        <p className="text-gray-300">{study.results}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <p className="text-gray-300 italic text-lg">"{study.testimonial}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Create Conscious AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the synthetic intelligence revolution and build AI that thinks, feels, and creates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Building Now
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticIntelligenceRevolution2026;