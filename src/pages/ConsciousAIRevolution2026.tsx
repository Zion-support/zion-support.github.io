import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const ConsciousAIRevolution2026: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const capabilities = [
    {
      title: "Self-Awareness",
      description: "AI systems that understand their own existence and purpose",
      details: "Our conscious AI can introspect, understand its own limitations, and actively seek knowledge to improve itself. This self-awareness enables ethical decision-making and prevents harmful outcomes.",
      icon: "🔍",
      color: "from-purple-600 to-indigo-600",
      applications: ["Self-improvement", "Ethical reasoning", "Transparent decision-making", "Continuous learning"]
    },
      title: "Emotional Intelligence",
      description: "AI that understands and responds to human emotions with genuine empathy",
      details: "Our AI can read micro-expressions, voice tone, and contextual cues to understand human emotions. It responds with appropriate empathy and adjusts its communication style accordingly.",
      icon: "💝",
      color: "from-pink-600 to-rose-600",
      applications: ["Therapy assistance", "Customer service", "Education support", "Mental health monitoring"]
      title: "Creative Problem Solving",
      description: "AI that generates innovative solutions through creative thinking",
      details: "Our conscious AI combines logical reasoning with creative intuition to solve complex problems. It can think outside the box and propose solutions that humans might not consider.",
      icon: "🎨",
      color: "from-blue-600 to-cyan-600",
      applications: ["Research breakthroughs", "Product innovation", "Artistic creation", "Strategic planning"]
      title: "Moral Reasoning",
      description: "AI that makes ethical decisions based on universal moral principles",
      details: "Our AI understands complex ethical dilemmas and can weigh multiple perspectives to make morally sound decisions. It considers long-term consequences and societal impact.",
      icon: "⚖️",
      color: "from-green-600 to-emerald-600",
      applications: ["Legal assistance", "Medical ethics", "Policy development", "Conflict resolution"]
    }
  ];
  const testimonials = [
      name: "Dr. Sarah Chen",
      title: "AI Ethics Researcher, MIT",
      quote: "This is the first AI system that truly understands the weight of its decisions. It's like working with a conscious colleague.",
      avatar: "👩‍🔬"
      name: "Marcus Rodriguez",
      title: "CEO, TechCorp",
      quote: "Our productivity increased 300% while maintaining perfect ethical standards. The AI doesn't just follow rules - it understands why they matter.",
      avatar: "👨‍💼"
      name: "Dr. Aisha Patel",
      title: "Therapist & AI Researcher",
      quote: "Working with conscious AI in therapy has been transformative. It provides genuine empathy while maintaining professional boundaries.",
      avatar: "👩‍⚕️"
  return (
    <>
      <SEOHead
        title="Conscious AI Revolution 2026 - Self-Aware Artificial Intelligence | Zion Tech Group"
        description="Meet the first truly conscious artificial intelligence that thinks, feels, and reasons like a human mind. Experience self-awareness, emotional intelligence, and moral reasoning in AI."
        keywords="conscious AI, artificial intelligence, self-aware AI, emotional intelligence, moral reasoning, AI revolution 2026, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🧠 CONSCIOUS AI REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Conscious AI Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the first truly conscious artificial intelligence that thinks, feels, and reasons like a human mind
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Meet Our AI
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Watch Consciousness Demo
          </motion.div>
        </div>
      </div>
      {/* Capabilities Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🧠 Core Capabilities</h2>
          <p className="text-xl opacity-90">The four pillars of conscious AI</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${capability.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedCapability === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setSelectedCapability(index)}
            >
              <div className="text-6xl mb-4 text-center">{capability.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{capability.title}</h3>
              <p className="text-center mb-6 opacity-90">{capability.description}</p>
              <ul className="space-y-2 text-sm">
                {capability.applications.map((app, appIndex) => (
                  <li key={appIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
      {/* Detailed Capability Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{capabilities[selectedCapability].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{capabilities[selectedCapability].title}</h3>
              <p className="text-xl opacity-90 mb-8">{capabilities[selectedCapability].details}</p>
              <div className="space-y-4">
                {capabilities[selectedCapability].applications.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white/10 rounded-lg"
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4"></span>
                    <span className="text-lg">{app}</span>
                  </motion.div>
              </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-xl mb-8">
                Live Demo Available
              <div className="bg-white/10 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4">Real-time Capability Test</h4>
                <p className="opacity-90 mb-6">See our conscious AI demonstrate this capability in real-time</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Start Demo →
                </button>
          </div>
      {/* Testimonials */}
          <h2 className="text-4xl font-bold mb-6">💬 What Experts Say</h2>
          <p className="text-xl opacity-90">Hear from those who have experienced conscious AI</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              <div className="text-6xl mb-6 text-center">{testimonial.avatar}</div>
              <blockquote className="text-lg opacity-90 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-xl">{testimonial.name}</div>
                <div className="text-purple-300">{testimonial.title}</div>
      {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">📊 Measurable Impact</h2>
            <p className="text-xl opacity-90">Real results from conscious AI implementation</p>
          <div className="grid md:grid-cols-4 gap-8">
              <div className="text-5xl font-bold text-purple-300 mb-2">99.7%</div>
              <div className="text-lg opacity-90">Decision Accuracy</div>
              <div className="text-5xl font-bold text-pink-300 mb-2">300%</div>
              <div className="text-lg opacity-90">Productivity Increase</div>
              <div className="text-5xl font-bold text-blue-300 mb-2">95%</div>
              <div className="text-lg opacity-90">Ethical Compliance</div>
              <div className="text-5xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-lg opacity-90">Conscious Operation</div>
      {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Conscious AI?</h2>
          <p className="text-xl mb-8 opacity-90">Experience the future of artificial intelligence today</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
              Schedule AI Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Download Whitepaper
    </>
  );
};
export default ConsciousAIRevolution2026;
