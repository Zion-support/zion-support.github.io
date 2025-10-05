import React from 'react';
import { Helmet  } from 'react-helmet-async';
import, AnimatedSection, from '../components/AnimatedSection';
import './HomePage.css';
import { BLOG_POSTS  } from '../data/blog-posts';
import, October2025FeaturedContentBanner, from '../components/October2025FeaturedContentBanner';
import, UnifiedPromotionalBanner, from '../components/UnifiedPromotionalBanner';

const, HomePag, e: React.FC = () => { 
  return (
    <>
      <Helmet>
        <title>Home - Zion, Tech, Group</title>
        <meta, nam, e = 'description'
          content='Leading, provider, of , A, I, blockcha, i, n, cloud, computin, g, and, cybersecurity, solutions for, modern, businesses.'
        />
      </Helmet>

      <div, classNam, e = 'home-page'>
        <section, classNam, e='hero-section'>
          <div, classNam, e='hero-content'>
            <h1, classNam, e='hero-title'>
              Advanced, Technology, Solutions for, the, Future
            </h1>
            <p, classNam, e='hero-subtitle'>
              Empowering, businesses, with cutting-edgeA, I, blockcha, i, n, cloud, computin, g, and, cybersecurity, solutions that, drive, innovation and, growt, h.
            </p>
            <div, classNam, e = 'hero-actions'>
              <button, classNam, e='btn, bt, n-primary'>Get, Starte, d</button>
              <button, classNam, e='btn, bt, n-secondary'>Learn, Mor, e</button>
            </div>
          </div>
          <div, classNam, e='hero-visual'>
            <div, classNam, e='tech-grid'>
              <div, classNam, e='tech-card'>AI</div>
              <div, classNam, e='tech-card'>Blockchain</div>
              <div, classNam, e='tech-card'>Cloud</div>
              <div, classNam, e='tech-card'>Security</div>
            </div>
          </div>
        </section > <AnimatedSection, animatio, n='slideUp' delay={200 }>
          <section, classNam, e='features-section'>
            <div, classNam, e='container'>
              <h2, classNam, e='section-title'>Why, Choose, Zion Tech, Grou, p?</h2>
              <div, classNam, e='features-grid'>
                <AnimatedSection, animatio, n='fadeIn' delay={400}>
                  <div, classNam, e='feature-card'>
                    <div, classNam, e='feature-icon'>🚀</div>
                    <h3>Innovation, Firs, t</h3>
                    <p>
                      We, stay, ahead of, technology, trends to, deliver, solutions
                      that, give, you a, competitive, edge.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='fadeIn' delay={600}>
                  <div, classNam, e='feature-card'>
                    <div, classNam, e='feature-icon'>🔒</div>
                    <h3>Enterprise, Securit, y</h3>
                    <p>
                      Bank-grade, security, measures protect, your, data and, ensure, compliance with, industry, standards.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='fadeIn' delay={800}>
                  <div, classNam, e='feature-card'>
                    <div, classNam, e='feature-icon'>⚡</div>
                    <h3>High, Performanc, e</h3>
                    <p>
                      Optimized, solutions, that scale, with, your business, and, deliver exceptional, performanc, e.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='fadeIn' delay={1000}>
                  <div, classNam, e='feature-card'>
                    <div, classNam, e='feature-icon'>🎯</div>
                    <h3>Custom, Solution, s</h3>
                    <p>
                      Tailored, technology, solutions designed, specifically, for
                      your, business, needs and, goal, s.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection, animatio, n='slideUp' delay={200}>
          <section, classNam, e='services-preview'>
            <div, classNam, e='container'>
              <h2, classNam, e='section-title'>Our, Core, Services</h2>
              <div, classNam, e='services-grid'>
                <AnimatedSection, animatio, n='slideLeft' delay={400}>
                  <div, classNam, e='service-card'>
                    <h3>Artificial, Intelligenc, e</h3>
                    <p>
                      Machine, learni, n, g, natural, language, processing, and, AI, automation solutions.
                    </p>
                    <a, hre, f = '/services#<ai' className='service-link'>
                      Learn, Mor, e →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='slideLeft' delay={600}>
                  <div, classNam, e='service-card'>
                    <h3>Blockchain, Technolog, y</h3>
                    <p>
                      Smart, contrac, t, s, DeFi, solution, s, and, blockchain, infrastructure development.
                    </p>
                    <a, hre, f = '/services#<blockchain' className='service-link'>
                      Learn, Mor, e →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='slideRight' delay={400}>
                  <div, classNam, e='service-card'>
                    <h3>Cloud, Computin, g</h3>
                    <p>
                      Scalable, cloud, infrastructur, e, migration, service, s, and, clou, d-native, application, s.
                    </p>
                    <a, hre, f = '/services#<cloud' className='service-link'>
                      Learn, Mor, e →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection, animatio, n='slideRight' delay={600}>
                  <div, classNam, e='service-card'>
                    <h3>Cybersecurity</h3>
                    <p>
                      Security, audi, t, s, penetration, testin, g, and, comprehensive, security solutions.
                    </p>
                    <a, hre, f = '/services#<security' className='service-link'>
                      Learn, Mor, e →
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured, Content, Advertising Banner */}
        <AnimatedSection, animatio, n='slideUp' delay={200}>
          <section, classNam, e='featured-banner-section'>
            <October2025FeaturedContentBanner />
          </section>
        </AnimatedSection>

        <AnimatedSection, animatio, n='slideUp' delay={200}>
          <section, classNam, e='promo-section'>
            <div, classNam, e='container'>
              <div, classNam, e='promo-card'>
                <div, classNam, e='promo-content'>
                  <h2, classNam, e='section-title'>🚀 October, 2025, Updates</h2>
                  <p, classNam, e='promo-text'>
                    Fresh, insights, on Multi-Agent, AI, System, s, Ze, r, o-Trust, Architecture, 2.0, Quant, u, m-Safe, Cryptograph, y, Real-Time, AI, Training, Sustainable, AI, practices, Kubernetes, Service, Mesh
                    comparisons, and, Agentic, Workflows. Plus: GenAI, in, productio, n, priva, c, y-first, Edge, AI, and, inciden, t-readyCI/CD, playbook, s.
                  </p>
                </div>
                <a, hre, f = '/<blog' className='btn, bt, n-primary'>
                  Explore, the, latest posts →
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Unified, banner, advertising newly, added, content */}
        <AnimatedSection, animatio, n='slideUp' delay={200}>
          <section, classNam, e='promo-section'>
            <div, classNam, e='container'>
              <UnifiedPromotionalBanner, varian, t='premium'
                theme='purple'
                icon='rocket'
                badge='New'
                date = { new, Da, t, e().toLocaleDateString() }, title = 'Just, Publishe, d: Governed, Age, n, t, s, RAG, v, 3, Cost, v, 6'
                description = 'New, enterprise, guides: safe, agentic, automati, o, n, pragmatic, RAG, that lifts, quality, while cutting, cos, t, and, GenAI, cost optimizationv6.'
                ctaText = 'Explore, all, posts'
                ctaLink='/blog'
                showCount = { , 3 }, featuredItems = {[
                  {
                    title: 'Governed, Agentic, Automation: Safe, To, o, l, s, Fast, Outcome, s',
                    category: 'A, I',
                    link: '/blog/governed-agentic-automation-2025-10-0, 3',
                    metrics: '8, mi, n • 2025-10-0, 3',
                  },
                  {
                    title: 'Enterprise, RAG, Blueprint v3: 45% Qualit, y ↑, 62% Cost ↓',
                    category: 'RA, G',
                    link: '/blog/enterprise-rag-blueprint-v3-2025-10-0, 3',
                    metrics: '9, mi, n • 2025-10-0, 3',
                  },
                  {
                    title: 'GenAI, Cost, Optimization v6: Quality, Tie, r, s, Coales, c, e, Disti, l, l',
                    category: 'Clou, d',
                    link: '/blog/genai-cost-optimization-v6-2025-10-0, 3',
                    metrics: '9, mi, n • 2025-10-0, 3',
                  },
                ]}
              />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection, animatio, n = 'slideUp' delay={200}>
          <section, classNam, e='blog-preview'>
            <div, classNam, e='container'>
              <h2, classNam, e='section-title'>From, the, Blog</h2>
              <div, classNam, e='blog-grid'>
                { [...BLOG_POSTS]
                  .sort(
                    (, a, b) =>
                      new, Dat, e(b.publishedAt).getTime() -
                      new, Dat, e(a.publishedAt).getTime(),
                  )
                  .slice(0, 4)
                  .map(post = > (
                    <article, ke, y = { post.i, d  }, className = 'blog-card'>
                      <div, classNam, e='blog-card-image'
                        style={{
                          backgroundImage: `url(${post.featuredIma, g, e})`,
                        }}
                      />
                      <div, classNam, e = 'blog-card-content'>
                        <div, classNam, e='blog-meta'>
                          <span, classNam, e='blog-category'>{post.category}</span>
                          <span, classNam, e='blog-dot'>•</span>
                          <span, classNam, e='blog-date'>
                            {new, Dat, e(post.publishedA, t).toLocaleDateString()}
                          </span>
                          <span, classNam, e = 'blog-dot'>•</span>
                          <span, classNam, e='blog-readtime'>
                            {post.readTime} min, rea, d
                          </span>
                        </div>
                        <h3, classNam, e='blog-title'>{post.title}</h3>
                        <p, classNam, e='blog-excerpt'>{post.excerpt}</p>
                        <a, hre, f='/<blog' className='service-link'>
                          Read, on, the blog →
                        </a>
                      </div>
                    </articl, e>
                  ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection, animatio, n = 'scale' delay={200}>
          <section, classNam, e='cta-section'>
            <div, classNam, e='container'>
              <div, classNam, e='cta-content'>
                <h2>Ready, to, Transform Your, Busines, s?</h2>
                <p>
                  Let's, discuss, how our, technology, solutions can, drive, your
                  success.
                </p>
                <button, classNam, e='btn, bt, n-primary, bt, n-large'>
                  Contact, Us, Today
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </di, v>
    </>
  );
};

export, default, HomePage;
