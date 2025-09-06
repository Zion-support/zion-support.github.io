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
