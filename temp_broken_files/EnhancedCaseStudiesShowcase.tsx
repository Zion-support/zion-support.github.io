import React from 'react';
import { Link } from 'react-router-dom';
const EnhancedCaseStudiesShowcase: React.FC = () => {,
  return (,
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">,
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">,
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          viewport={{ once: true ,}}
          className="text-center mb-16",
        >,
          <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
            🚀 Revolutionary Success Stories,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">,
            Discover how leading enterprises achieved unprecedented transformation with our AI solutions.,
            Real resultsreal impactreal ROI.,
          </p>,
          <div className="flex flex-wrap justify-center gap-4 mb-12">,
            <div className="bg-blue-600/20 px-6 py-3 rounded-full border border-blue-400/30">,
              <span className="text-blue-300 font-semibold">Average ROI: 2,800%</span>,
            </div>,
            <div className="bg-purple-600/20 px-6 py-3 rounded-full border border-purple-400/30">,
              <span className="text-purple-300 font-semibold">500+ Enterprise Clients</span>,
            </div>,
            <div className="bg-green-600/20 px-6 py-3 rounded-full border border-green-400/30">,
              <span className="text-green-300 font-semibold">99.7% Success Rate</span>,
            </div>,
          </div>,
        </div>,
        <div,
          whileInView="visible",
          viewport={{ once: true ,}}
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8",
        >,
          {caseStudies.map((studyindex) => (,
            <div,
              key={study.id,}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover: border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20",
            >,
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">,
                <div className="absolute inset-0 bg-black/20"></div>,
                <div className="absolute top-4 left-4 bg-blue-600/90 px-3 py-1 rounded-full text-sm font-semibold">,
                  {study.industry,}
                </div>,
                <div className="absolute top-4 right-4 bg-green-600/90 px-3 py-1 rounded-full text-sm font-bold">,
                  {study.roi} ROI,
                </div>,
                <div className="absolute bottom-4 left-4 right-4">,
                  <h3 className="text-xl font-bold mb-2 group-hover: text-blue-300 transition-colors">,
                    {study.title,}
                  </h3>,
                  <p className="text-sm text-gray-300 line-clamp-2">,
                    {study.description}
                  </p>,
                </div>,
              </div>,
              <div className="p-6">,
                <div className="flex flex-wrap gap-2 mb-4">,
                  {study.tags.map((tagIndex) => (,
                    <span,
                      key={tagIndex}
                      className="bg-gray-700/50 px-3 py-1 rounded-full text-xs text-gray-300",
                    >,
                      {tag}
                    </span>,
                  ))}
                </div>,
                <div className="grid grid-cols-3 gap-4 mb-6">,
                  {Object.entries(study.metrics).map(([keyvalue]metricIndex) => (,
                    <div key={metricIndex} className="text-center">,
                      <div className="text-lg font-bold text-green-400">{value}</div>,
                      <div className="text-xs text-gray-400 capitalize">,
                        {key.replace(/([A-Z])/g' $1').trim()}
                      </div>,
                    </div>,
                  ))}
                </div>,
                <div className="flex items-center justify-between">,
                  <div className="text-sm text-gray-400">,
                    <span className="font-semibold">Client: </span> {study.client,}
                  </div>,
                  <div className="text-sm text-gray-400">,
                    <span className="font-semibold">Timeframe: </span> {study.timeframe,}
                  </div>,
                </div>,
                <Link,
                  to={`/case-studies/${study.id}`}
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover: from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
                >,
                  View Full Case Study →,
                </Link>,
              </div>,
            </div>,
          )),}
        </div>,
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          viewport={{ once: true ,}}
          className="text-center mt-16",
        >,
          <Link,
            to="/case-studies",
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25",
          >,
            View All Success Stories,
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M17 8l4 4m0 0l-4 4m4-4H3" />,
            </svg>,
          </Link>,
        </div>,
      </div>,
    </section>,
  );
};
export default EnhancedCaseStudiesShowcase;