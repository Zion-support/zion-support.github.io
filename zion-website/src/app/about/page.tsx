import {
  {
    name: 'Global Impact'
    description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.'
    icon: GlobeAltIcon}
  {
    name: 'Trust & Security'
    description: 'We maintain the highest standards of security and ethical AI development.'
    icon: ShieldCheckIcon}
  {
  return (
    <div className=&quot;bg - black & quot;>;
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              About{' '}
      {/* Values */}
      <div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>What Drives Us</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Our Core Values;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {values.map ((value) => (
              <div key={value.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <value.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {value.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto & quot;>{value.description}</p>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* Leadership Team */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Leadership</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Meet Our Team;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            World - class researchers, engineers, and business leaders driving innovation at Zion Tech Group.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 grid max - w-2xl grid - cols - 1 gap - x-8 gap - y-20 lg:mx - 0 lg:max - w-none lg:grid - cols - 2&quot;>;
          {team.map ((person) => (
            <article key={person.name} className=&quot;flex flex - col items - start group & quot;>;
              <div className=&quot;relative w - full & quot;>;
                <div className=&quot;aspect-[16 / 9] w - full rounded - 2xl bg - gray - 900 object - cover sm:aspect-[2 / 1] lg:aspect-[3 / 2]&quot;>;
                  <div className=&quot;h - full w - full bg - gradient - to - br from - blue - 900 / 20 to - purple - 900 / 20 rounded - 2xl flex items - center justify - center & quot;>;
                    <div className=&quot;text - center & quot;>;
                      <div className=&quot;mx - auto h - 12 w - 12 rounded - full bg - blue - 600 / 20 flex items - center justify - center mb - 4&quot;>;
                        <UserGroupIcon className=&quot;h - 6 w - 6 text - blue - 400 & quot; />;
                      </div>;
                      <p className=&quot;text - sm text - gray - 400 & quot;>Team Member</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
              <div className=&quot;max - w-xl & quot;>;
                <div className=&quot;group relative & quot;>;
                  <h3 className=&quot;mt - 3 text - lg font - semibold leading - 6 text - white group - hover:text - blue - 400 transition - colors duration - 200 & quot;>;
                    {person.name}
                  </h3>;
                  <p className=&quot;mt - 2 text - sm text - blue - 400 & quot;>{person.role}</p>;
                  <p className=&quot;mt - 5 line - clamp - 3 text - sm leading - 6 text - gray - 300 & quot;>{person.bio}</p>;
                </div>;
              </div>;
            </article>))}
        </div>;
      </div>;
      {/* CTA section */}
