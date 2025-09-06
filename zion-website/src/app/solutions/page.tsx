import {
  {
    step: '01'
    title: 'Discovery & Assessment'
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.'
    icon: LightBulbIcon}
  {
    step: '02'
    title: 'Solution Design'
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.'
    icon: CpuChipIcon}
  {
    step: '03'
    title: 'Development & Testing'
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.'
    icon: CogIcon}
  {
    step: '04'
    title: 'Deployment & Training'
    description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.'
    icon: RocketLaunchIcon}
  {
  return (
    <div className=&quot;bg - black & quot;>;
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              AI Solutions for{' '}
      {/* Flagship Solutions */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Our Solutions</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Flagship AI Platforms;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {flagship_solutions.map ((solution) => (
              <div key={solution.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <solution.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{solution.name}</h3>;
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{solution.description}</p>;
                <div className=&quot;space - y-3 mb - 6&quot;>;
                  {solution.features.map ((feature) => (
                    <div key={feature} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 2 w - 2 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 300 & quot;>{feature}</span>;
                    </div>))}
                </div>;
                <a;
                  href={solution.href}
className=&quot;text - sm font - semibold leading - 6 text - blue - 400 hover:text - blue - 300 transition - colors duration - 200 & quot;
                >;
                  Learn more <span aria - hidden=&quot;true & quot;>→</span>;
                </Link>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Industry Applications */}
                  {industry.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto mb - 4&quot;>{industry.description}</p>;
                  <div className=&quot;space - y-2 & quot;>;
                    {industry.use_cases.map ((use_case) => (
                      <div key={use_case} className=&quot;flex items - center gap - 2&quot;>;
                        <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                        <span className=&quot;text - sm text - gray - 400 & quot;>{use_case}</span>;
                      </div>))}
                  </div>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* Implementation Process */}
          </div>;
        </div>;
      </div>;
      {/* CTA section */}
