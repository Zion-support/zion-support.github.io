<<<<<<< HEAD
import React from 'react'''';
import { Helmet } from 'react-helmet-async'''';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react;const CareersPage: React.FC = () => {'}''
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900"></div>"""
      <Helmet></Helmet>
        <title>Careers | Zion Tech Group</title>"
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />""""
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />"""
      </Helmet>"
      <div className="container mx-auto px-4 py-16"></div>"""
        {/* Hero Section */}"
        <div className="text-center mb-16"></div>""""
          <h1 className="text-5xl font-bold text-white mb-6">""""
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>"""
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"""
            Be part of a team that's shaping the future of AI and IT solutions.''''
            Work on cutting-edge projects and make a real impact.
          </p>
        </div>
        {/* Why Work With Us */}"
        <div className="mb-16"></div>""""
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>""""
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>""")
            {benefits.map((benefit, _index) => {}
              const Icon = benefit.icon
              return ("
                <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"></div>""""
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg w-fit mx-auto mb-4"></div>""""
                    <Icon className="w-6 h-6 text-white" />"""
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>""""
                  <p className="text-gray-300 text-sm">{benefit.description}</p>"""
                </div>)
              )
            })}
          </div>
        </div>
        {/* Open Positions */}"
        <div className="mb-16"></div>""""
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>""""
          <div className="grid md:grid-cols-2 gap-6"></div>"""
            {openPositions.map((position, _index) => (}"
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"></div>""""
                <div className="flex justify-between items-start mb-4"></div>""""
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>""""
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">"""
                    {position.type}
                  </span>
                </div>"
                <div className="flex items-center text-gray-400 mb-3"></div>""""
                  <MapPin className="w-4 h-4 mr-2" />""""
                  <span className="text-sm">{position.location}</span>""""
                  <span className="mx-2">•</span>""""
                  <span className="text-sm">{position.department}</span>"""
                </div>"
                <p className="text-gray-300 mb-4">{position.description}</p>""""
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300">"""
                  Apply Now
                </button>
              </div>)
            ))}
          </div>
        </div>
        {/* Company Culture */}"
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16"></div>""""
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture</h2>""""
          <div className="grid md:grid-cols-3 gap-8"></div>""""
            <div className="text-center"></div>""""
              <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-4"></div>""""
                <Users className="w-8 h-8 text-white" />"""
              </div>"
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative</h3>""""
              <p className="text-gray-300">We believe in the power of teamwork and open communication to achieve great things.</p>"""
            </div>"
            <div className="text-center"></div>""""
              <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-4"></div>""""
                <Zap className="w-8 h-8 text-white" />"""
              </div>"
              <h3 className="text-xl font-semibold text-white mb-3">Innovative</h3>""""
              <p className="text-gray-300">We encourage creative thinking and embrace new technologies to solve complex problems.</p>"""
            </div>"
            <div className="text-center"></div>""""
              <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-4"></div>""""
                <Target className="w-8 h-8 text-white" />"""
              </div>"
              <h3 className="text-xl font-semibold text-white mb-3">Impact-Driven</h3>""""
              <p className="text-gray-300">We focus on delivering real value to our clients and making a positive impact.</p>"""
            </div>
          </div>
        </div>
        {/* CTA Section */}"
        <div className="text-center"></div>""""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto"></div>""""
            <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Perfect Role?</h2>''''"
            <p className="text-gray-300 mb-6">"""
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.''''
            </p>"
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">"""
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>;  )
}
export default CareersPage
</Target>
</Zap>
</Users>
</MapPin>
</Icon>"
=======
import React from 'react';
const CareersPage: React.FC = () => {
  return (
    <div>
      <h1>CareersPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};
export default CareersPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
