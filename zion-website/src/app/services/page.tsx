import {
  {
    step: '01'
    title: 'Discovery & Assessment'
    description: 'We begin by understanding your business challenges, current technology stack, and AI objectives.'
    icon: LightBulbIcon}
  {
    step: '02'
    title: 'Solution Design'
    description: 'Our experts design a comprehensive solution that addresses your specific needs and goals.'
    icon: CogIcon}
  {
    step: '03'
    title: 'Development & Testing'
    description: 'We develop and rigorously test your solution to ensure optimal performance and reliability.'
    icon: RocketLaunchIcon}
  {
    step: '04'
    title: 'Deployment & Training'
    description: 'Seamless deployment with comprehensive training to maximize adoption and value.'
    icon: AcademicCapIcon}
  {
  {
    name: 'Proven Track Record'
    description: 'Successfully delivered 500+ AI solutions across diverse industries worldwide.'
    icon: ChartBarIcon}
  {
  return (
    <div className=&quot;bg - black & quot;>;
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Professional{' '}
          </div>;
        </div>;
      </div>;
      {/* Service Process */}
          </div>;
        </div>;
      </div>;
      {/* Why Choose Us */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Why Choose Us</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            The Zion Tech Group Advantage;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Discover what sets us apart and why leading organizations choose us for their AI transformation.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {reasonsToChoose.map ((reason) => (
              <div key={reason.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <reason.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {reason.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto & quot;>{reason.description}</p>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* CTA section */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl text - center & quot;>;
          <h2 className=&quot;text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Ready to get started?;
          </h2>;
          <p className=&quot;mx - auto mt - 6 max - w-xl text - lg leading - 8 text - gray - 300 & quot;>;
            Let's discuss how our AI services can transform your business and accelerate your growth.;
          </p>;
          <div className=&quot;mt - 10 flex items - center justify - center gap - x-6 & quot;>;
            <a;
              href=&quot;/contact & quot;
              className=&quot;rounded - md bg - blue - 600 px - 3.5 py - 2.5 text - sm font - semibold text - white shadow - sm hover:bg - blue - 500 focus - visible:outline focus - visible:outline - 2 focus - visible:outline - offset - 2 focus - visible:outline - blue - 600 transition - all duration - 200 hover:scale - 105 & quot;
            >;
              Schedule Consultation;
            </Link>;
            <a href=&quot;/solutions & quot; className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 & quot;>;
              View Solutions <span aria - hidden=&quot;true & quot;>→</span>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
}
