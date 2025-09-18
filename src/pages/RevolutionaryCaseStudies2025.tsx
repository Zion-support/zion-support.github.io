import React, { useState } from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
=======
              Real-world success stories showcasing the transformative power of our revolutionary technologies
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
            </p>
          </div>
        </div>
      </div>

                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                </div>
              </div>

              {/* Results */}
                </div>
              </div>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              </button>
            </div>
          ))}
        </div>
      </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$2.5B+</div>
              <div className="text-lg opacity-90">Client Savings</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their businesses with our revolutionary technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
=======
      {/* Case Study Navigation */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(index)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
                }`}
              >
                <div className="text-2xl mb-2">
                  {caseStudy.industry === 'Manufacturing' ? '🏭' : 
                   caseStudy.industry === 'Healthcare' ? '🏥' :
                   caseStudy.industry === 'Education' ? '🎓' : '🚀'}
                </div>
                <h3 className="font-semibold mb-1">{caseStudy.company}</h3>
                <p className="text-sm opacity-75">{caseStudy.industry}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Details */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{caseStudies[selectedCase].title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-300">Challenge</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Solution</h3>
                  <p className="text-white/80">{caseStudies[selectedCase].solution}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white/10 rounded-lg">
                    <div className={`text-2xl font-bold ${getResultColor(value)}`}>{value}</div>
                    <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <blockquote className="text-lg italic mb-3">
                  "{caseStudies[selectedCase].testimonial}"
                </blockquote>
                <cite className="text-orange-300 font-semibold">
                  — {caseStudies[selectedCase].author}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors font-semibold text-lg">
              View More Cases
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RevolutionaryCaseStudies2025;