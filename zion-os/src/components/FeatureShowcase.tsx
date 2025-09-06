    icon: (;
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
      </svg>;
  return (;
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">;
      <div className="max-w-7xl mx-auto">;
        <div className="text-center mb-16">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Explore Our Features;
          </h2>;
          <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
            Dive deep into the powerful capabilities that make Zion OS the ultimate platform for digital economies;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 items - center">;
          {/* Feature Cards */}
          <div className="space - y-6">;
            {features.map ((feature, index) => (
              <div;
                key={feature.id}
                    ? `ring-2 ring-${feature.color}-500/50 bg-white/10`;
                    : 'hover:bg-white/10';
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >;
                <div className="flex items - start space - x-4">;
                  <div className={`w - 12 h - 12 bg - gradient - to - r ${getColorClasses (feature.color)} rounded - lg flex items - center justify - center text - white flex - shrink - 0`}>;
                    {feature.icon}
                  </div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - semibold mb - 2 text - white">;
                      {feature.title}
                    </h3>;
                    <p className="text - gray - 400 mb - 3">;
                      {feature.description}
                    </p>;
                    {active_feature === feature.id && (
                      <div className="space - y-2 animate - fade - in">;
                        {feature.details.map ((detail, idx) => (
                          <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 300">;
                            <div className={`w - 1.5 h - 1.5 bg-${feature.color}-500 rounded - full`}></div>;
                            <span>{detail}</span>;
                          </div>))}
                      </div>)}
                  </div>;
                  }`}>;
                    <svg className="w - 5 h - 5 text - gray - 400" fill="none" stroke="current_color" view_box="0 0 24 24">;
                      <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;
                    </svg>;
                  </div>;
                </div>;
              </div>))}
          </div>;
          {/* Interactive Demo Area */}
          <div className="relative">;
            <div className="card bg - gradient - to - br from - blue - 600 / 20 to - purple - 600 / 20 border - blue - 500 / 30 p - 8">;
              <div className="text - center mb - 6">;
                <h3 className="text - 2xl font - bold mb - 2 text - white">;
                  {active_feature ? features.find (function => f.id === active_feature)?.title : 'Select a Feature'}
                </h3>;
                <p className="text - gray - 300">;
                  {active_feature;
                    ? 'Explore the capabilities and see how it works';
                    : 'Click on any feature to see detailed information and demonstrations';
                  }
                </p>;
              </div>;
              {active_feature ? (
                <div className="space - y-6 animate - fade - in">;
                  <div className="bg - black / 30 rounded - lg p - 4 border border - white / 10">;
                    <h4 className="font - semibold text - white mb - 3">Key Benefits</h4>;
                    <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 3">;
                      {features.find (function => f.id === active_feature)?.details.map ((detail, idx) => (
                        <div key={idx} className="flex items - center space - x-2 text - sm">;
                          <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;
                          <span className="text - gray - 300">{detail}</span>;
                        </div>))}
                    </div>;
                  </div>;
                  <div className="bg - black / 30 rounded - lg p - 4 border border - white / 10">;
                    <h4 className="font - semibold text - white mb - 3">Integration</h4>;
                    <div className="flex items - center justify - center space - x-4">;
                      <div className="w - 16 h - 16 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg flex items - center justify - center text - white font - bold">;
                        API;
                      </div>;
                      <div className="text - gray - 400"></div>;
                      <div className="w - 16 h - 16 bg - gradient - to - r from - green - 500 to - blue - 500 rounded - lg flex items - center justify - center text - white font - bold">;
                        SDK;
                      </div>;
                      <div className="text - gray - 400"></div>;
                      <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - pink - 500 rounded - lg flex items - center justify - center text - white font - bold">;
                        UI;
                      </div>;
                    </div>;
                  </div>;
                  <button className="w - full btn - primary">;
                    Try {features.find (function => f.id === active_feature)?.title} Demo;
                  </button>;
                </div>) : (
                <div className="text - center py - 12">;
                  <div className="w - 24 h - 24 mx - auto mb - 4 bg - gradient - to - r from - blue - 500 / 20 to - purple - 500 / 20 rounded - full flex items - center justify - center">;
                    <svg className="w - 12 h - 12 text - blue - 400" fill="none" stroke="current_color" view_box="0 0 24 24">;
                      <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M13 10V3L4 14h7v7l9 - 11h - 7z" />;
                    </svg>;
                  </div>;
                  <p className="text - gray - 400">;
                    Interactive feature exploration;
                  </p>;
                </div>)}
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}
