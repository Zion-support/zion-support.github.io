'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResearchDevelopmentPage: React.FC = () =>{
  const [activeTab, setActiveTab] = useState('ai')
          return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Research & Development</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pushing the boundaries of technology through cutting-edge research and innovation. 
              Our R&D team is dedicated to creating the next generation of AI and IT solutions.
            </p>
          </div>
          {/* Research Areas Tabs */}
          <div>
            <div>
              {researchAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() =>setActiveTab(area.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === area.id
                      ? `${area.bgColor} ${area.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <area.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{area.name}</span>
                </button>
              ))}
            </div>
            <div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {researchAreas.find(area => area.id === activeTab)?.description}
              </p>
            </div>
          </div>
          {/* Research Projects */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Current Research Projects</h2>
            <div>
              {researchProjects[activeTab as keyof typeof researchProjects].map((project, index) => (
                <div>
                  <div>
                    <div>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Status</div>
                      <div>
                        {project.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Timeline</div>
                      <div className="text-sm text-white">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Team</div>
                      <div className="text-sm text-white">{project.team}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Funding</div>
                      <div className="text-sm text-white">{project.funding}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-400 mb-2">Key Outcomes:</div>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="text-sm text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Publications */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Recent Publications</h2>
            <div>
              <div>
                {publications.map((pub, index) => (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                    <div className="text-sm text-gray-300 mb-2">{pub.authors}</div>
                    <div>
                      <div>
                        <span>{pub.journal}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          pub.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>{pub.impact} Impact</span>
                      </div>
                      <a
                        href={pub.link}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read Paper →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Research Achievements</h2>
            <div>
              {achievements.map((achievement, index) => (
                <div>
                  <div>
                    <achievement.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Collaborate With Our Research Team</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Interested in collaborating on cutting-edge research? We welcome partnerships with
              universities, research institutions, and industry leaders.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />Start Collaboration</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default ResearchDevelopmentPage