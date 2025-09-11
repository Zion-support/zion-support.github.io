import React from 'react';
import { Link } from 'react-router-dom';
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Globe, Zap, Users, Shield, ArrowRight } from 'lucide-react';
const SpaceTech: React.FC = () => {
  const spaceTechnologies = [
    {
      title: "Satellite Technology",
      description: "Advanced satellite systems for communication, navigation, and Earth observation.",
      applications: ["Global Communications", "GPS Navigation", "Climate Monitoring", "Remote Sensing"]
    },
    {
      title: "Space Robotics",
      description: "Autonomous robotic systems for space exploration and satellite maintenance.",
      applications: ["Satellite Repair", "Space Debris Cleanup", "Planetary Exploration", "Space Station Operations"]
    },
    {
      title: "Space Communications",
      description: "High-speed, secure communication networks for space missions and satellite operations.",
      applications: ["Deep Space Communication", "Satellite Networks", "Mission Control", "Data Transmission"]
    },
    {
      title: "Space Analytics",
      description: "AI-powered analysis of space data for scientific research and commercial applications.",
      applications: ["Space Weather Prediction", "Orbital Mechanics", "Resource Mapping", "Scientific Discovery"]
import Link from 'next/link';
const ResearchDevelopment: React.FC = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancing the frontiers of AI with autonomous systems, neural networks, and intelligent automation.",
      focus: ["Neural Networks", "Autonomous Systems", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and applications for solving complex computational problems.",
      focus: ["Quantum Algorithms", "Quantum Cryptography", "Financial Modeling", "Optimization"]
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Developing next-generation security solutions and privacy-preserving technologies.",
      focus: ["Zero-Trust Architecture", "Threat Detection", "Privacy Engineering", "Compliance Automation"]
    },
    {
      title: "Cloud & Edge Computing",
      description: "Innovating distributed computing architectures and edge intelligence solutions.",
      focus: ["Edge AI", "Distributed Systems", "5G Networks", "IoT Integration"]
=======
    }
  ];
  return (
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Space
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advancing humanity's reach into space with cutting-edge technology solutions 
              for exploration, communication, and scientific discovery
              Research &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research and cutting-edge development
=======
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {spaceTechnologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Applications</h4>
                  <ul className="space-y-1">
                    {tech.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {app}
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Research Focus</h4>
                  <ul className="space-y-1">
                    {area.focus.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {item}
=======
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Reach for the Stars</h3>
              <p className="text-gray-300 mb-6">
                Ready to explore the final frontier? Let's discuss how space technology 
                can advance your mission and expand human capabilities.
              <h3 className="text-2xl font-bold mb-4">Collaborate With Us</h3>
              <p className="text-gray-300 mb-6">
                Interested in research collaboration or want to learn more about our R&D initiatives? 
                Let's explore opportunities to work together.
=======
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
=======
                Explore Space Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ResearchDevelopment;
=======
export default SpaceTech;
