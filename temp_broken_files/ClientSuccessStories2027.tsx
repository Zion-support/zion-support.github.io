import React from 'react';

const ClientSuccessStories2027: React.FC = () => {
  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Needed to optimize production lines and reduce waste",
      solution: "Implemented AI-powered predictive maintenance and quality control systems",
      results: "40% reduction in downtime, 25% increase in efficiency, $2M annual savings",
      logo: "🏭",
      testimonial: "Zion Tech Group transformed our entire manufacturing process. The AI solutions they implemented have revolutionized our operations."
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Required advanced fraud detection and risk management",
      solution: "Deployed quantum-enhanced security algorithms and real-time monitoring systems",
      results: "99.9% fraud detection accuracy, 60% faster processing, $5M prevented losses",
      logo: "💳",
      testimonial: "Their quantum computing solutions gave us an unprecedented edge in financial security and risk management."
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Needed to accelerate drug discovery and patient diagnosis",
      solution: "Integrated neural interface technology with medical AI for enhanced diagnostics",
      results: "50% faster drug discovery, 90% diagnostic accuracy, 1000+ lives saved",
      logo: "🏥",
      testimonial: "The neural interface technology has revolutionized our medical diagnostics and research capabilities."
    },
    {
      company: "SpaceX Alternative",
      industry: "Aerospace",
      challenge: "Required advanced satellite communication and space exploration tech",
      solution: "Developed quantum communication networks and autonomous space systems",
      results: "10x faster data transmission, 99.99% reliability, $50M cost savings",
      logo: "🚀",
      testimonial: "Zion's space technology solutions have enabled us to achieve breakthrough advances in space exploration."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            See how our revolutionary technologies have transformed businesses across industries and delivered unprecedented results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{story.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                  <p className="text-green-200">{story.industry}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-blue-200">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-blue-200">{story.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                  <p className="text-green-300 font-semibold">{story.results}</p>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-white italic">"{story.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-2xl font-bold">$100M+</span>
            <span className="ml-2">Total Client Savings</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-green-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-200">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessStories2027;