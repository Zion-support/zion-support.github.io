import {
  {
    metric: 'Patents Filed'
    value: '25+'
    description: 'Intellectual property protecting our innovations'}
  {
  {
    name: 'Stanford University'
    location: 'Stanford, CA'
    focus: 'AI & Machine Learning'
    collaboration: 'Joint research programs and student exchanges'}
  {
    name: 'MIT'
    location: 'Cambridge, MA'
    focus: 'Quantum Computing & AI'
    collaboration: 'Shared research facilities and joint publications'}
  {
    name: 'University of Oxford'
    location: 'Oxford, UK'
    focus: 'AI Ethics & Governance'
    collaboration: 'Policy research and ethical AI development'}
  {
  return (
    <div className=&quot;bg - black & quot;>;
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Research &{' '}
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{area.description}</p>;
                <div className=&quot;space - y-2 & quot;>;
                  {area.topics.map ((topic) => (
                    <div key={topic} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 400 & quot;>{topic}</span>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Recent Publications */}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Publications</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Recent Research;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our latest research contributions to the field of artificial intelligence and technology.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {recent_publications.map ((publication) => (
              <div key={publication.title} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-2 mb - 4&quot;>;
                  <span className={`inline - flex items - center rounded - full px - 2.5 py - 0.5 text - xs font - medium ${
                    publication.impact === 'High Impact' ? 'bg - blue - 600 / 20 text - blue - 400' :;
                    publication.impact === 'Industry Leading' ? 'bg - green - 600 / 20 text - green - 400' :;
                    publication.impact === 'Breakthrough' ? 'bg - purple - 600 / 20 text - purple - 400' :;
                    'bg - gray - 600 / 20 text - gray - 400';
                  }`}>;
                    {publication.impact}
                  </span>;
                  <span className=&quot;text - sm text - gray - 400 & quot;>{publication.year}</span>;
                </div>;
                <h3 className=&quot;text - lg font - semibold text - white mb - 2&quot;>{publication.title}</h3>;
                <p className=&quot;text - sm text - blue - 400 mb - 3&quot;>{publication.authors}</p>;
                <p className=&quot;text - sm text - gray - 400 mb - 3&quot;>{publication.journal}</p>;
                <p className=&quot;text - sm text - gray - 300 mb - 4&quot;>{publication.abstract}</p>;
                <a;
                  href={`https://doi.org/${publication.doi}`}
                  target=&quot;_blank & quot;
                  rel=&quot;noopener noreferrer & quot;
                  className=&quot;text - sm font - semibold leading - 6 text - blue - 400 hover:text - blue - 300 transition - colors duration - 200 & quot;
                >;
                  View Publication <span aria - hidden=&quot;true & quot;>→</span>;
                </Link>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Research Impact */}
          </dl>;
        </div>;
      </div>;
      {/* Academic Collaborations */}
                    {partner.location}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <LightBulbIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {partner.focus}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <UserGroupIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {partner.collaboration}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* CTA section */}
