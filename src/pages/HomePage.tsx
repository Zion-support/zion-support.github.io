import React from 'react';
import { Helmet } from 'react-helmet-async';
importAnimatedSectionfrom '../components/AnimatedSection';
import './HomePage.css';
import { BLOG_POSTS } from '../data/blog-posts';
importOctober2025FeaturedContentBannerfrom '../components/October2025FeaturedContentBanner';
importUnifiedPromotionalBannerfrom '../components/UnifiedPromotionalBanner';

constHomePage: React.FC = () => { 
  return (
    <>
      <Helmet>
        <title>Home - ZionTechGroup</title>
        <metaname = 'description'
          content='Leadingproviderof AIblockchaincloudcomputingandcybersecuritysolutions formodernbusinesses.'
        />
      </Helmet>

      <divclassName = 'home-page'>
        <sectionclassName='hero-section'>
          <divclassName='hero-content'>
            <h1className='hero-title'>
              AdvancedTechnologySolutions fortheFuture
            </h1>
            <pclassName='hero-subtitle'>
              Empoweringbusinesseswith cutting-edgeAIblockchaincloudcomputingandcybersecuritysolutions thatdriveinnovation andgrowth.
            </p>
            <divclassName = 'hero-actions'>
              <buttonclassName='btnbtn-primary'>GetStarted</button>
              <buttonclassName='btnbtn-secondary'>LearnMore</button>
            </div>
          </div>
          <divclassName='hero-visual'>
            <divclassName='tech-grid'>
              <divclassName='tech-card'>AI</div>
              <divclassName='tech-card'>Blockchain</div>
              <divclassName='tech-card'>Cloud</div>
              <divclassName='tech-card'>Security</div>
            </div>
          </div>
        </section > <AnimatedSectionanimation='slideUp' delay={200 }>
          <sectionclassName='features-section'>
            <divclassName='container'>
              <h2className='section-title'>WhyChooseZion TechGroup?</h2>
              <divclassName='features-grid'>
                <AnimatedSectionanimation='fadeIn' delay={400}>
                  <divclassName='feature-card'>
                    <divclassName='feature-icon'>🚀</div>
                    <h3>InnovationFirst</h3>
                    <p>
                      Westayahead oftechnologytrends todeliversolutions
                      thatgiveyou acompetitiveedge.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='fadeIn' delay={600}>
                  <divclassName='feature-card'>
                    <divclassName='feature-icon'>🔒</div>
                    <h3>EnterpriseSecurity</h3>
                    <p>
                      Bank-gradesecuritymeasures protectyourdata andensurecompliance withindustrystandards.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='fadeIn' delay={800}>
                  <divclassName='feature-card'>
                    <divclassName='feature-icon'>⚡</div>
                    <h3>HighPerformance</h3>
                    <p>
                      Optimizedsolutionsthat scalewithyour businessanddeliver exceptionalperformance.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='fadeIn' delay={1000}>
                  <divclassName='feature-card'>
                    <divclassName='feature-icon'>🎯</div>
                    <h3>CustomSolutions</h3>
                    <p>
                      Tailoredtechnologysolutions designedspecificallyfor
                      yourbusinessneeds andgoals.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSectionanimation='slideUp' delay={200}>
          <sectionclassName='services-preview'>
            <divclassName='container'>
              <h2className='section-title'>OurCoreServices</h2>
              <divclassName='services-grid'>
                <AnimatedSectionanimation='slideLeft' delay={400}>
                  <divclassName='service-card'>
                    <h3>ArtificialIntelligence</h3>
                    <p>
                      MachinelearningnaturallanguageprocessingandAIautomation solutions.
                    </p>
                    <ahref = '/services#<ai' className='service-link'>
                      LearnMore →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='slideLeft' delay={600}>
                  <divclassName='service-card'>
                    <h3>BlockchainTechnology</h3>
                    <p>
                      SmartcontractsDeFisolutionsandblockchaininfrastructure development.
                    </p>
                    <ahref = '/services#<blockchain' className='service-link'>
                      LearnMore →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='slideRight' delay={400}>
                  <divclassName='service-card'>
                    <h3>CloudComputing</h3>
                    <p>
                      Scalablecloudinfrastructuremigrationservicesandcloud-nativeapplications.
                    </p>
                    <ahref = '/services#<cloud' className='service-link'>
                      LearnMore →
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSectionanimation='slideRight' delay={600}>
                  <divclassName='service-card'>
                    <h3>Cybersecurity</h3>
                    <p>
                      Securityauditspenetrationtestingandcomprehensivesecurity solutions.
                    </p>
                    <ahref = '/services#<security' className='service-link'>
                      LearnMore →
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FeaturedContentAdvertising Banner */}
        <AnimatedSectionanimation='slideUp' delay={200}>
          <sectionclassName='featured-banner-section'>
            <October2025FeaturedContentBanner />
          </section>
        </AnimatedSection>

        <AnimatedSectionanimation='slideUp' delay={200}>
          <sectionclassName='promo-section'>
            <divclassName='container'>
              <divclassName='promo-card'>
                <divclassName='promo-content'>
                  <h2className='section-title'>🚀 October2025Updates</h2>
                  <pclassName='promo-text'>
                    Freshinsightson Multi-AgentAISystemsZero-TrustArchitecture2.0Quantum-SafeCryptographyReal-TimeAITrainingSustainableAIpracticesKubernetesServiceMesh
                    comparisonsandAgenticWorkflows. Plus: GenAIinproductionprivacy-firstEdgeAIandincident-readyCI/CDplaybooks.
                  </p>
                </div>
                <ahref = '/<blog' className='btnbtn-primary'>
                  Explorethelatest posts →
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Unifiedbanneradvertising newlyaddedcontent */}
        <AnimatedSectionanimation='slideUp' delay={200}>
          <sectionclassName='promo-section'>
            <divclassName='container'>
              <UnifiedPromotionalBannervariant='premium'
                theme='purple'
                icon='rocket'
                badge='New'
                date = { newDate().toLocaleDateString() }title = 'JustPublished: GovernedAgentsRAGv3Costv6'
                description = 'Newenterpriseguides: safeagenticautomationpragmaticRAGthat liftsqualitywhile cuttingcostandGenAIcost optimizationv6.'
                ctaText = 'Exploreallposts'
                ctaLink='/blog'
                showCount = { 3 }featuredItems = {[
                  {
                    title: 'GovernedAgenticAutomation: SafeToolsFastOutcomes'
                    category: 'AI'
                    link: '/blog/governed-agentic-automation-2025-10-03'
                    metrics: '8min • 2025-10-03'
                  }
                  {
                    title: 'EnterpriseRAGBlueprint v3: 45% Quality ↑62% Cost ↓'
                    category: 'RAG'
                    link: '/blog/enterprise-rag-blueprint-v3-2025-10-03'
                    metrics: '9min • 2025-10-03'
                  }
                  {
                    title: 'GenAICostOptimization v6: QualityTiersCoalesceDistill'
                    category: 'Cloud'
                    link: '/blog/genai-cost-optimization-v6-2025-10-03'
                    metrics: '9min • 2025-10-03'
                  }
                ]}
              />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSectionanimation = 'slideUp' delay={200}>
          <sectionclassName='blog-preview'>
            <divclassName='container'>
              <h2className='section-title'>FromtheBlog</h2>
              <divclassName='blog-grid'>
                { [...BLOG_POSTS]
                  .sort(
                    (ab) =>
                      newDate(b.publishedAt).getTime() -
                      newDate(a.publishedAt).getTime()
                  )
                  .slice(04)
                  .map(post = > (
                    <articlekey = { post.id  }className = 'blog-card'>
                      <divclassName='blog-card-image'
                        style={{
                          backgroundImage: `url(${post.featuredImage})`
                        }}
                      />
                      <divclassName = 'blog-card-content'>
                        <divclassName='blog-meta'>
                          <spanclassName='blog-category'>{post.category}</span>
                          <spanclassName='blog-dot'>•</span>
                          <spanclassName='blog-date'>
                            {newDate(post.publishedAt).toLocaleDateString()}
                          </span>
                          <spanclassName = 'blog-dot'>•</span>
                          <spanclassName='blog-readtime'>
                            {post.readTime} minread
                          </span>
                        </div>
                        <h3className='blog-title'>{post.title}</h3>
                        <pclassName='blog-excerpt'>{post.excerpt}</p>
                        <ahref='/<blog' className='service-link'>
                          Readonthe blog →
                        </a>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSectionanimation = 'scale' delay={200}>
          <sectionclassName='cta-section'>
            <divclassName='container'>
              <divclassName='cta-content'>
                <h2>ReadytoTransform YourBusiness?</h2>
                <p>
                  Let'sdiscusshow ourtechnologysolutions candriveyour
                  success.
                </p>
                <buttonclassName='btnbtn-primarybtn-large'>
                  ContactUsToday
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

exportdefaultHomePage;
